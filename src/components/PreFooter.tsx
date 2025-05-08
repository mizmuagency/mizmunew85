import React from 'react';
import { Link } from 'react-router-dom';

const PreFooter = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="container mx-auto py-8 xs:py-10 sm:py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Right Column */}
            <div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-fluid-3xl lg:text-fluid-4xl font-bold tracking-tight leading-none">
                Schreib uns<br />
                <a href="mailto:hello@mizmu.ch" className="underline hover:opacity-80 transition-opacity">
                  hello@mizmu.ch
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;