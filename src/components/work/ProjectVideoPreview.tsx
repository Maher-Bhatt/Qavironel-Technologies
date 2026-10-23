import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../../types';

interface ProjectVideoPreviewProps {
  project: Project;
  className?: string;
  priority?: boolean;
}

/** Starts a project's muted preview only while the project is being viewed. */
export const ProjectVideoPreview: React.FC<ProjectVideoPreviewProps> = ({
  project,
  className = '',
  priority = false
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const poster = project.videoPoster ?? project.heroImage;

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    if (!root || !video || !project.videoSrc) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inView = false;

    const pause = () => {
      video.pause();
      setPlaying(false);
    };

    const play = () => {
      if (!inView || document.hidden || reducedMotion.matches) return;
      video.muted = true;
      const playback = video.play();
      if (playback) playback.then(() => setPlaying(true)).catch(() => setPlaying(false));
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting && entry.intersectionRatio >= 0.28;
      if (inView) play();
      else pause();
    }, { threshold: [0, 0.28, 0.5], rootMargin: '0px 0px -5% 0px' });

    const onVisibilityChange = () => document.hidden ? pause() : play();
    const onMotionChange = () => reducedMotion.matches ? pause() : play();

    observer.observe(root);
    document.addEventListener('visibilitychange', onVisibilityChange);
    reducedMotion.addEventListener?.('change', onMotionChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      reducedMotion.removeEventListener?.('change', onMotionChange);
      video.pause();
    };
  }, [project.videoSrc]);

  return (
    <div ref={rootRef} className={`project-film ${className}`} aria-hidden="true">
      <img
        src={poster}
        alt=""
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        className="project-film__poster"
      />
      {project.videoSrc && (
        <video
          ref={videoRef}
          src={project.videoSrc}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          className={`project-film__video ${playing ? 'is-playing' : ''}`}
        />
      )}
      <span className={`project-film__status ${playing ? 'is-playing' : ''}`}>
        <span className="project-film__status-dot" />
        {playing ? 'Project film · playing' : 'Project film'}
      </span>
    </div>
  );
};

export default ProjectVideoPreview;
