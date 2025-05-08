import React from 'react';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Competencies = () => {
  return (
    <div className="min-h-screen text-black relative overflow-hidden bg-white flex flex-col">
      <GradientCanvas />
      
      <div className="relative z-20 flex-1 flex flex-col">
        {/* Logo */}
        <div className="fixed top-safe-top left-safe-left z-50 p-4 xs:p-6 sm:p-8">
          <Link 
            to="/" 
            className="text-fluid-xl font-montreal font-bold tracking-tight hover:opacity-70 transition-opacity touch-target"
          >
            mizmu
          </Link>
        </div>

        <Menu />

        <main className="flex-1 flex flex-col">
          <div className="container mx-auto px-4 md:px-8 pt-32 xs:pt-36 sm:pt-40 pb-12 md:pb-20 flex-1">
            {/* Hero Section */}
            <div className="max-w-4xl mb-20 md:mb-32">
              <h1 className="text-fluid-6xl xs:text-fluid-7xl font-light tracking-tight leading-[1.1] mb-6">
                Unsere<br />
                Kompetenzen
              </h1>
              <p className="text-fluid-lg text-gray-600 max-w-xl tracking-tight leading-snug">
                Von der Konzeption bis zur Umsetzung – wir bieten Ihnen das komplette 
                Spektrum digitaler Dienstleistungen.
              </p>
            </div>

            {/* Competencies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {/* Web Development */}
              <div className="bg-white p-8 md:p-12 rounded-3xl relative group">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#9333EA] rounded-l-[120px] transform translate-x-4 group-hover:translate-x-0 transition-transform duration-300" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-light mb-4 tracking-tight">Web Development</h2>
                  <ul className="space-y-2 text-gray-600 mb-8">
                    <li>• Responsive Websites</li>
                    <li>• E-Commerce Lösungen</li>
                    <li>• Web Applications</li>
                    <li>• Content Management Systeme</li>
                  </ul>
                  <Link 
                    to="/website-design"
                    className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                  >
                    Mehr dazu <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Digital Marketing */}
              <div className="bg-white p-8 md:p-12 rounded-3xl relative group">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#9333EA] rounded-l-[120px] transform translate-x-4 group-hover:translate-x-0 transition-transform duration-300" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-light mb-4 tracking-tight">Digital Marketing</h2>
                  <ul className="space-y-2 text-gray-600 mb-8">
                    <li>• SEO Optimierung</li>
                    <li>• Content Marketing</li>
                    <li>• Social Media Marketing</li>
                    <li>• Performance Marketing</li>
                  </ul>
                  <Link 
                    to="/digital-marketing"
                    className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                  >
                    Mehr dazu <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Branding & Identity */}
              <div className="bg-white p-8 md:p-12 rounded-3xl relative group">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#9333EA] rounded-l-[120px] transform translate-x-4 group-hover:translate-x-0 transition-transform duration-300" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-light mb-4 tracking-tight">Branding & Identity</h2>
                  <ul className="space-y-2 text-gray-600 mb-8">
                    <li>• Brand Strategy</li>
                    <li>• Visual Identity</li>
                    <li>• Brand Voice</li>
                    <li>• Guidelines</li>
                  </ul>
                  <Link 
                    to="/branding-identity"
                    className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                  >
                    Mehr dazu <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Virtual Assistance */}
              <div className="bg-white p-8 md:p-12 rounded-3xl relative group">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#9333EA] rounded-l-[120px] transform translate-x-4 group-hover:translate-x-0 transition-transform duration-300" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-light mb-4 tracking-tight">Virtual Assistance</h2>
                  <ul className="space-y-2 text-gray-600 mb-8">
                    <li>• E-Mail Management</li>
                    <li>• Kalender</li>
                    <li>• Administration</li>
                    <li>• Projektmanagement</li>
                  </ul>
                  <Link 
                    to="/virtual-assistance"
                    className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                  >
                    Mehr dazu <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Competencies;