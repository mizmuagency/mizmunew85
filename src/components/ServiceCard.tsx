import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  link?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, buttonText, link, className = '' }) => {
  const ButtonComponent = link ? Link : 'button';
  
  return (
    <div className={`bg-white rounded-2xl xs:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-12 relative overflow-hidden group ${className}`}>
      <div 
        className="absolute top-0 right-0 w-1/3 h-full bg-[#9333EA] rounded-l-[60px] xs:rounded-l-[90px] sm:rounded-l-[120px] transform translate-x-4 group-hover:translate-x-0 transition-transform duration-300 will-change-transform" 
        aria-hidden="true"
      />
      
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-fluid-3xl xs:text-fluid-4xl sm:text-fluid-5xl font-bold mb-4 tracking-tight leading-tight">{title}</h2>
        <p className="text-fluid-lg text-gray-600 mb-6 tracking-tight leading-snug whitespace-pre-line">{description}</p>
        <ButtonComponent 
          to={link || '#'} 
          className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
        >
          {buttonText} <ArrowRight className="w-5 h-5 ml-2" />
        </ButtonComponent>
      </div>
    </div>
  );
};

export default ServiceCard