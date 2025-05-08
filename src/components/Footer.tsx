import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './ui/magnetic-button';

const Footer = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="container mx-auto py-1 sm:py-5 md:py-9">
        <div className="max-w-10xl mx-auto">
          {/* Logo + Email */}
          <div className="flex flex-col items-start space-y-4 sm:space-y-6 md:flex-row md:justify-between md:items-center md:space-y-0 mb-6 sm:mb-8 md:mb-12">
            <h3 className="text-[20px] xs:text-[32px] sm:text-[48px] md:text-[72px] font-montreal">mizmu</h3>
            <div className="w-full md:w-auto">
              <a 
                href="mailto:hello@mizmu.ch" 
                className="text-[20px] xs:text-[32px] sm:text-[48px] md:text-[72px] font-montreal underline hover:opacity-80 transition-opacity bg-gradient-to-r from-[#CE96FB] via-[#FF8FCF] to-[#00C2BA] text-transparent bg-clip-text break-all md:break-normal"
              >
                hello@mizmu.ch
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-row space-x-4 sm:space-x-8 mb-6 sm:mb-8 md:mb-12">
            <a 
              href="https://www.instagram.com/mizmu.ch/" 
              className="text-base sm:text-xl md:text-2xl text-white hover:text-neutral-300 transition-colors inline-flex items-center"
            >
              Instagram<ArrowUpRight strokeWidth={1} className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
            <a 
              href="https://www.tiktok.com/@mizmu.ch" 
              className="text-base sm:text-xl md:text-2xl text-white hover:text-neutral-300 transition-colors inline-flex items-center"
            >
              TikTok<ArrowUpRight strokeWidth={1} className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
            <a 
              href="https://www.linkedin.com/company/mizmu/" 
              className="text-base sm:text-xl md:text-2xl text-white hover:text-neutral-300 transition-colors inline-flex items-center"
            >
              LinkedIn<ArrowUpRight strokeWidth={1} className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6 sm:mb-8 md:mb-12">
            {/* Navigation */}
            <div>
              <h4 className="text-lg sm:text-xl font-montreal font-bold mb-3">Navigation</h4>
              <ul className="space-y-1">
                <li><Link to="/webdesign" className="text-neutral-300 hover:text-white transition-colors" aria-label="Webdesign und Development">Webdesign & Development</Link></li>
                <li><Link to="/projekte" className="text-neutral-300 hover:text-white transition-colors" aria-label="Unsere Projekte">Projekte</Link></li>
                <li><Link to="/about" className="text-neutral-300 hover:text-white transition-colors" aria-label="Über uns">About</Link></li>
                <li><Link to="/kontakt" className="text-neutral-300 hover:text-white transition-colors" aria-label="Kontakt aufnehmen">Kontakt</Link></li>
                <li><Link to="/blog" className="text-neutral-300 hover:text-white transition-colors" aria-label="Blog lesen">Blog</Link></li>
              </ul>
            </div>

            {/* Standort */}
            <div>
              <h4 className="text-lg sm:text-xl font-montreal font-bold mb-3">Standort</h4>
              <p className="text-neutral-300">
                mizmu digitale Agentur<br />
                Sitz in der Schweiz
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h4 className="text-base sm:text-xl font-montreal font-bold mb-3">Kontakt</h4>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-neutral-300 hover:text-white transition-colors font-bold">FAQs</Link></li>
                <li><a href="https://open.spotify.com/playlist/3di7iTd1XuHDME9v2MazWh?si=Lew2CyzdRbeL5GkMdjdRHg" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors font-bold">mizmu.sic</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg sm:text-xl font-montreal font-bold mb-3">Magie direkt ins Postfach</h4>
              <MagneticButton>
                <Link 
                  to="/newsletter"
                  className="inline-flex items-center justify-between border-2 border-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition-colors tracking-tight whitespace-nowrap text-base sm:text-lg w-[235.125px]"
                >
                  <span>Jetzt anmelden</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </MagneticButton>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:items-center sm:space-y-0 pt-6 border-t border-neutral-800">
            <p className="text-sm text-neutral-500 text-center sm:text-left">
              © 2025 mizmu
            </p>
            <div className="flex items-center justify-center sm:justify-start space-x-4 sm:space-x-8">
              <Link to="/datenschutz" className="text-sm text-neutral-500 hover:text-white">
                Datenschutz
              </Link>
              <Link to="/impressum" className="text-sm text-neutral-500 hover:text-white">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;