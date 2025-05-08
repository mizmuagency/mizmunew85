import React from 'react';
import { ArrowRight } from 'lucide-react';

interface TextImageRowProps {
  title: string;
  description: React.ReactNode;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

const TextImageRow: React.FC<TextImageRowProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  className = '',
}) => {
  return (
    <div className={`relative bg-white rounded-2xl xs:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-12 ${className}`}>
      <div className="flex flex-col md:flex-row gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-24">
        {/* Purple Box - First on mobile */}
        <div className="w-full md:w-[400px] md:order-last">
          <div className="bg-[#9333EA] rounded-3xl xs:rounded-[48px] p-8 xs:p-10 sm:p-12 flex flex-col justify-end h-full">
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
            {title}
          </h2>
          <div className="content-spacing">
            {description}
          </div>
          <button 
            onClick={onButtonClick}
            className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
          >
            {buttonText} <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextImageRow