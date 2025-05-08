import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import GradientCanvas from '../components/GradientCanvas';
import Modal from '../components/Modal';
import KompetenzenContactForm from '../components/KompetenzenContactForm';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const WebsiteDesign = () => {
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
                Website<br />
                für deine<br />
                Bedürfnisse
              </h1>
              <p className="text-fluid-lg text-gray-600 max-w-xl tracking-tight leading-snug">
                Digitale Erfahrung zu kreieren wo sich Schönheit mit Funktionalität trifft. Das ist unsere Stärke.
              </p>
            </div>

            {/* Packages */}
            <div className="space-y-8">
              <div className="relative bg-white rounded-2xl xs:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-12 mb-8">
                <div className="flex flex-col md:flex-row gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-24">
                  {/* Purple Box - First on mobile */}
                  <div className="w-full md:w-[400px] md:order-last">
                    <div className="bg-[#9333EA] rounded-2xl xs:rounded-3xl md:rounded-[48px] p-6 xs:p-8 sm:p-10 md:p-12 flex flex-col justify-end aspect-square relative overflow-hidden">
                      <img
                        src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/Unbenannt-1.png"
                        alt="Package S"
                        className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                      Package S
                    </h2>
                    <div className="content-spacing">
                      <p className="text-fluid-lg mb-4">Onepager, aka "eifachi Website"</p>
                      <p className="text-fluid-lg mb-4">Hier erhältst du:</p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="text-lg">•</span>
                          <span>freie Designwahl aus unserem Katalog</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-lg">•</span>
                          <span>1 Seite mit allen deinen Grundbedürfnissen</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-lg">•</span>
                          <span>Kontaktformular</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-lg">•</span>
                          <span>Google Indexierung</span>
                        </li>
                      </ul>
                      <p className="mt-6 text-2xl font-light">ab CHF 600.-</p>
                      <p className="mt-2 text-fluid-sm text-gray-500">
                        Hostinggebühren CHF 150.- jährlich
                      </p>
                    </div>
                    <button 
                      onClick={() => handleContact('Package S')}
                      className="mt-8 inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                    >
                      Let's go <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Package M */}
              <div className="relative bg-white rounded-2xl xs:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-12 mb-8">
                <div className="flex flex-col md:flex-row gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-24">
                  {/* Purple Box - First on mobile */}
                  <div className="w-full md:w-[400px] md:order-last">
                    <div className="bg-[#9333EA] rounded-2xl xs:rounded-3xl md:rounded-[48px] p-6 xs:p-8 sm:p-10 md:p-12 flex flex-col justify-end aspect-square relative overflow-hidden">
                      <img
                        src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/Unbenannt-2.png"
                        alt="Package M"
                        className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                      Package M
                    </h2>
                    <div className="content-spacing">
                      <p className="text-fluid-lg mb-4">Das etwas umfassendere Paket. Ideal für Unternehmen, die viel zu bieten haben.</p>
                      <p className="text-fluid-lg mb-4">Im Package dabei sind:</p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="text-lg">•</span>
                          <span>bis zu 10 Seiten</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-lg">•</span>
                          <span>Design nach Wahl und Absprache</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-lg">•</span>
                          <span>Google Indexierung + Analytics Integration</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-lg">•</span>
                          <span>Kontaktoptionen nach Wunsch</span>
                        </li>
                      </ul>
                      <p className="mt-6 text-2xl font-light">ab CHF 1200.-</p>
                      <p className="mt-2 text-fluid-sm text-gray-500">
                        Hostinggebühren CHF 150.- jährlich
                      </p>
                    </div>
                    <button 
                      onClick={() => handleContact('Package M')}
                      className="mt-8 inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                    >
                      Let's go <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Package L */}
              <div className="relative bg-white rounded-2xl xs:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-12 mb-8">
                <div className="flex flex-col md:flex-row gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-24">
                  {/* Purple Box - First on mobile */}
                  <div className="w-full md:w-[400px] md:order-last">
                    <div className="bg-[#9333EA] rounded-2xl xs:rounded-3xl md:rounded-[48px] p-6 xs:p-8 sm:p-10 md:p-12 flex flex-col justify-end aspect-square relative overflow-hidden">
                      <img
                        src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/Unbenannt-3.png"
                        alt="Package L"
                        className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                      Package L
                    </h2>
                    <div className="content-spacing">
                      <p className="text-fluid-lg mb-4">Das Premium-Paket für maximale Flexibilität und Funktionalität.</p>
                      <p className="text-fluid-lg mb-4">Im Package dabei sind:</p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="text-lg">•</span>
                          <span>Unbegrenzte Seiten</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-lg">•</span>
                          <span>Custom Design nach Ihren Wünschen</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-lg">•</span>
                          <span>SEO Optimierung</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-lg">•</span>
                          <span>Analytics & Marketing Integration</span>
                        </li>
                      </ul>
                      <p className="mt-6 text-2xl font-light">ab CHF 1700.-</p>
                      <p className="mt-2 text-fluid-sm text-gray-500">
                        Hostinggebühren CHF 150.- jährlich
                      </p>
                    </div>
                    <button 
                      onClick={() => handleContact('Package L')}
                      className="mt-8 inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
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
                Special Wish:<br />
                Let us know
              </h2>
              <button 
                onClick={() => handleContact()}
                className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
              >
                Schiess los <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}>
            <KompetenzenContactForm service={selectedService || undefined} />
          </Modal>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default WebsiteDesign;