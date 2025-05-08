import React from 'react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import GradientCanvas from '../components/GradientCanvas';
import Modal from '../components/Modal';
import KompetenzenContactForm from '../components/KompetenzenContactForm';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const VirtualAssistance = () => {
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleContact = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsContactModalOpen(true);
  };

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
            <div className="max-w-4xl mb-20">
              <h1 className="text-fluid-6xl xs:text-fluid-7xl font-light tracking-tight leading-[1.1] mb-6">
                Virtual<br />
                Assistance
              </h1>
              <p className="text-fluid-lg text-gray-600 max-w-xl tracking-tight leading-snug">
                Strategie, Inhalte, Templates
              </p>
            </div>

            {/* Services */}
            <div className="space-y-8">
              {/* Website Management */}
              <div className="relative bg-white rounded-2xl xs:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-12 mb-8">
                <div className="flex flex-col md:flex-row gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-24">
                  {/* Purple Box - First on mobile */}
                  <div className="w-full md:w-[400px] md:order-last">
                    <div className="bg-[#9333EA] rounded-2xl xs:rounded-3xl md:rounded-[48px] p-6 xs:p-8 sm:p-10 md:p-12 flex flex-col justify-end aspect-square relative overflow-hidden">
                      <img
                        src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/websitemanagement.png"
                        alt="Website Management"
                        className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                      Website Management
                    </h2>
                    <div className="content-spacing">
                      <p className="text-fluid-lg mb-4">Aktualisierung und Pflege der Inhalte auf der Website</p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Optimierung der Benutzerfreundlichkeit</li>
                        <li>• Erstellung von Landingpages</li>
                        <li>• Blogartikel & SEO-Texte</li>
                        <li>• Online Shop Produkte aktualisieren</li>
                      </ul>
                    </div>
                    <button 
                      onClick={() => handleContact('Website Management')}
                      className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                    >
                      Let's go <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Backoffice */}
              <div className="relative bg-white rounded-2xl xs:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-12 mb-8">
                <div className="flex flex-col md:flex-row gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-24">
                  {/* Purple Box - First on mobile */}
                  <div className="w-full md:w-[400px] md:order-last">
                    <div className="bg-[#9333EA] rounded-2xl xs:rounded-3xl md:rounded-[48px] p-6 xs:p-8 sm:p-10 md:p-12 flex flex-col justify-end aspect-square relative overflow-hidden">
                      <img
                        src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/backoffice.png"
                        alt="Backoffice"
                        className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                      Backoffice
                    </h2>
                    <div className="content-spacing">
                      <ul className="space-y-2 text-gray-600">
                        <li>• Korrespondenz</li>
                        <li>• Newsletter, Berichte, Protokolle</li>
                        <li>• Texte für Webseiten erstellen</li>
                        <li>• Eventplanung</li>
                        <li>• Webshop Produkte erfassen</li>
                      </ul>
                    </div>
                    <button 
                      onClick={() => handleContact('Backoffice')}
                      className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                    >
                      Let's go <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Social Media Management */}
              <div className="relative bg-white rounded-2xl xs:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-12 mb-8">
                <div className="flex flex-col md:flex-row gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-24">
                  {/* Purple Box - First on mobile */}
                  <div className="w-full md:w-[400px] md:order-last">
                    <div className="bg-[#9333EA] rounded-2xl xs:rounded-3xl md:rounded-[48px] p-6 xs:p-8 sm:p-10 md:p-12 flex flex-col justify-end aspect-square relative overflow-hidden">
                      <img
                        src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/socialmediamanag.png"
                        alt="Social Media Management"
                        className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                      Social Media Management
                    </h2>
                    <div className="content-spacing">
                      <ul className="space-y-2 text-gray-600">
                        <li>• Content erstellen, bearbeiten und posten</li>
                        <li>• Sicherstellen von Traffic</li>
                        <li>• Trendanalyse</li>
                        <li>• Interaktion fördern</li>
                        <li>• SEO gerechte Texte erstellen</li>
                      </ul>
                    </div>
                    <button 
                      onClick={() => handleContact('Social Media Management')}
                      className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                    >
                      Let's go <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Wish Section */}
            <div className="mt-20 mb-32">
              <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                Spezielle Anfrage?<br />
                Wir brennen darauf!
              </h2>
              <button 
                onClick={handleContact}
                className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
              >
                Schreib uns <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          <Footer />
          
          <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}>
            <KompetenzenContactForm service={selectedService || undefined} />
          </Modal>
          
          <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}>
            <KompetenzenContactForm service={selectedService || undefined} />
          </Modal>
        </main>
      </div>
    </div>
  );
};

export default VirtualAssistance;