import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StartServiceProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const StartService: React.FC<StartServiceProps> = ({ to, children, className = '' }) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap ${className}`}
    >
      {children} <ArrowRight className="w-5 h-5 ml-2" />
    </Link>
  );
};

export default StartService;