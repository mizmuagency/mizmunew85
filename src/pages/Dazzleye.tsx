import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Dazzleye = () => {
  return (
    <div className="min-h-screen text-black relative overflow-hidden bg-[#f5f5f5] flex flex-col">
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
            {/* Back to Projects */}
            <Link 
              to="/projekte" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>

            {/* Hero Section */}
            <div className="max-w-4xl mb-20">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm px-3 py-1 bg-[#9333EA] text-white rounded-full">Web development</span>
                <span className="text-sm px-3 py-1 bg-[#9333EA] text-white rounded-full">Web design</span>
                <span className="text-sm px-3 py-1 bg-[#9333EA] text-white rounded-full">Branding</span>
              </div>
              <h1 className="text-fluid-6xl xs:text-fluid-7xl font-light tracking-tight leading-[1.1] mb-6">
                DAZZLEYE
              </h1>
              <p className="text-fluid-lg text-gray-600 max-w-xl tracking-tight leading-snug">
                Innovative Eyeliner-Sticker für müheloses Augen-Make-up. Ein revolutionäres Beauty-Produkt, 
                das mit einem starken digitalen Auftritt präsentiert wird.
              </p>
            </div>

            {/* Main Project Image */}
            <div className="mb-20">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/holymusedazzle.png"
                  alt="DAZZLEYE"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div>
                <h2 className="text-2xl font-light mb-6">Über das Projekt</h2>
                <p className="text-gray-600 mb-4">
                  DAZZLEYE revolutioniert die Beauty-Industrie mit innovativen Eyeliner-Stickern. 
                  Unsere Aufgabe war es, eine digitale Präsenz zu schaffen, die sowohl die Innovationskraft 
                  als auch die Eleganz des Produkts widerspiegelt.
                </p>
                <p className="text-gray-600">
                  Die Website verbindet modernes Design mit benutzerfreundlichem E-Commerce, um ein 
                  nahtloses Einkaufserlebnis zu gewährleisten.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-light mb-6">Technische Details</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Responsive E-Commerce Platform</li>
                  <li>• Optimierte Performance</li>
                  <li>• Integriertes Zahlungssystem</li>
                  <li>• Produktkonfigurator</li>
                  <li>• SEO-optimierte Struktur</li>
                </ul>
              </div>
            </div>

            {/* Additional Project Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/dazzleye_1.jpg"
                  alt="DAZZLEYE Detail 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/dazzleye_2.jpg"
                  alt="DAZZLEYE Detail 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Visit Website Button */}
            <div className="text-center mb-32">
              <a
                href="https://dazzleye.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-colors"
              >
                Visit Website <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Dazzleye;