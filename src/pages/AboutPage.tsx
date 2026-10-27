import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Globe2, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { companyConfig, teamMembers } from '../data/company';

const principles = [
  ['01', 'Start with the real need', 'Listen for what people are trying to do, where the friction sits, and what a better outcome would look like.'],
  ['02', 'Keep the people making it close', 'Design and engineering share context from the start. Decisions stay with the team doing the work.'],
  ['03', 'Leave it understandable', 'The work should be useful on launch day and make sense to the people who look after it next.']
];

export const AboutPage: React.FC = () => {
  const founder = teamMembers.find((m) => m.name === 'Maher Bhatt') ?? teamMembers[0];
  const cofounder = teamMembers.find((m) => m.name === 'Anurag Pandey') ?? teamMembers[1];

  return (
    <>
      <SEO
        title="About Qavironel Technologies — Studio & Team"
        description="Meet the team and learn about the design and engineering practice at Qavironel Technologies, an independent studio in Vadodara, India."
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Qavironel Technologies',
          url: `${companyConfig.siteUrl}/about`,
          mainEntity: {
            '@type': 'Organization',
            name: companyConfig.name,
            url: companyConfig.siteUrl,
            founder: teamMembers.filter((member) => /founder/i.test(member.role)).map((member) => ({ '@type': 'Person', name: member.name, jobTitle: member.role }))
          }
        }}
      />

      <div className="site-page about-page">
        <section className="about-intro">
          <div className="site-container">
            <div className="about-intro__top">
              <p className="site-eyebrow">About Qavironel</p>
              <span><MapPin aria-hidden="true" /> Vadodara, India <i>·</i> Working worldwide</span>
            </div>
            <div className="about-intro__main">
              <h1>A small studio.<br /><em>Close to the work.</em></h1>
              <div>
                <p>{companyConfig.description}</p>
                <p>We work directly with clients from the first conversation through launch, bringing product, design, and engineering into the same process.</p>
                <Link to="/work" className="text-link">See the work <ArrowUpRight aria-hidden="true" /></Link>
              </div>
            </div>
            <div className="about-intro__facts">
              <span>Independent studio</span>
              <span>Product · Design · Engineering</span>
              <span>Vadodara / Worldwide</span>
            </div>
          </div>
        </section>

        <section className="about-practice">
          <div className="site-container about-practice__grid">
            <div>
              <p className="site-eyebrow site-eyebrow--light">How we think about the work</p>
              <h2>Stay curious.<br /><em>Make it make sense.</em></h2>
            </div>
            <div>
              <p>Good work isn’t a fixed style. It’s the result of understanding the people, the constraints, and the job a product needs to do.</p>
              <p>That’s why we bring design and engineering into the same conversation early. We can test an idea against the real world, make trade-offs clearly, and give the details enough room to become right.</p>
            </div>
          </div>
        </section>

        <section className="about-principles section-pad">
          <div className="site-container">
            <div className="section-heading section-heading--spread">
              <div>
                <p className="site-eyebrow">A few things we come back to</p>
                <h2>Good decisions<br /><em>travel far.</em></h2>
              </div>
              <p>Simple principles, applied to different kinds of work.</p>
            </div>
            <div className="principle-list">
              {principles.map(([number, title, description]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ArrowUpRight aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM & FOUNDER SECTION */}
        <section className="about-team section-pad">
          <div className="site-container">
            <div className="about-team__heading">
              <div>
                <p className="site-eyebrow">The people behind the work</p>
                <h2>Different strengths.<br /><em>Shared ownership.</em></h2>
              </div>
              <div className="about-team__aside">
                <span>{String(teamMembers.length).padStart(2, '0')} people <i>·</i> One studio</span>
                <p>We keep the team close to each project, with design, engineering, and coordination working together from the first conversation.</p>
              </div>
            </div>

            {/* Founder Commitment Note */}
            <div className="about-founder-feature">
              <div className="about-founder-feature__card">
                <div className="about-founder-feature__portrait">
                  <img src={founder.image} alt="Maher Bhatt" loading="lazy" />
                  <span className="about-founder-feature__tag">FOUNDER</span>
                </div>
                <div className="about-founder-feature__body">
                  <span className="site-eyebrow">Studio Leadership</span>
                  <h3>“When you partner with us, you hire senior engineers — not an account manager or a ticket queue.”</h3>
                  <p>
                    I lead systems architecture and technical direction at Qavironel. Every architecture blueprint, database schema, and security boundary is engineered directly by my co-founder Anurag Pandey and me. We operate with radical clarity, fixed deliverables, and complete personal accountability.
                  </p>
                  <div className="about-founder-feature__meta">
                    <div>
                      <strong>Maher Bhatt</strong>
                      <span>Founder & Systems Engineer · Vadodara, India</span>
                    </div>
                    <div className="about-founder-feature__links">
                      <a href={companyConfig.githubOrg} target="_blank" rel="noreferrer" aria-label="Maher Bhatt on GitHub">
                        <GithubIcon />
                        <span>GitHub</span>
                      </a>
                      <a href={companyConfig.linkedinUrl} target="_blank" rel="noreferrer" aria-label="Maher Bhatt on LinkedIn">
                        <LinkedinIcon />
                        <span>LinkedIn</span>
                      </a>
                      <a href="https://maherbhatt.me" target="_blank" rel="noreferrer" aria-label="Maher Bhatt personal website">
                        <Globe2 aria-hidden="true" />
                        <span>Website</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-index">
              {teamMembers.map((member, index) => (
                <article className="team-person" key={member.name}>
                  <div className="team-person__portrait">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading={index < 2 ? 'eager' : 'lazy'}
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                    />
                    <span className="team-person__number">
                      {String(index + 1).padStart(2, '0')} <i>/ {String(teamMembers.length).padStart(2, '0')}</i>
                    </span>
                  </div>
                  <div className="team-person__body">
                    <div className="team-person__identity">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                      <div className="team-person__socials">
                        {member.links.github && (
                          <a href={member.links.github} target="_blank" rel="noreferrer" aria-label={`${member.name} on GitHub`}>
                            <GithubIcon />
                          </a>
                        )}
                        {member.links.linkedin && (
                          <a href={member.links.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`}>
                            <LinkedinIcon />
                          </a>
                        )}
                        {member.links.website && (
                          <a href={member.links.website} target="_blank" rel="noreferrer" aria-label={`${member.name}'s website`}>
                            <Globe2 aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="team-person__details">
                      <p>{member.bio}</p>
                      <div>
                        {member.credentials.slice(0, 3).map((credential) => (
                          <span key={credential}>{credential}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-end">
          <div className="site-container">
            <p className="site-eyebrow">A good project starts with a conversation</p>
            <div>
              <h2>What are you<br /><em>thinking about?</em></h2>
              <div className="about-end__actions">
                <Link to="/contact" className="button button--dark">Talk with us <ArrowRight aria-hidden="true" /></Link>
                <a href={`tel:${companyConfig.phone.replace(/\s+/g, '')}`} className="about-end__phone">
                  <Phone aria-hidden="true" />
                  <span>Call direct: {companyConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
