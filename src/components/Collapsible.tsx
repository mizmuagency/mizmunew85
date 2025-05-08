import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-xl xs:text-2xl sm:text-3xl font-bold tracking-tight text-black">
          {title}
        </span>
        {isOpen ? (
          <Minus className="w-8 h-8 text-black" />
        ) : (
          <Plus className="w-8 h-8 text-black" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100 mb-8' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-black leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

export default Collapsible;