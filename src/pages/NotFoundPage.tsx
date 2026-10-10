import React from 'react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#121212] text-[#F6F3ED] pt-36 pb-32 max-w-xl mx-auto px-6 text-center">
      <p className="font-mono text-xs font-semibold text-[#C7612E] tracking-widest uppercase">
        404 — Not Found
      </p>
      <h1 className="mt-4 font-sans font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
        Page does not exist.
      </h1>
      <p className="mt-4 text-base text-[#A3A099] leading-relaxed font-light">
        The destination you are trying to visit has either moved or is not part of the Qavironel Technologies website.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button to="/" variant="primary" showArrow>
          Return to Homepage
        </Button>
        <Button to="/work" variant="secondary">
          Explore Work
        </Button>
      </div>
    </div>
  );
};
