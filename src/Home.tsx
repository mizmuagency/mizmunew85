import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

function Home() {
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
            <div className="min-h-[90vh] flex flex-col justify-center relative">
              <div className="relative">
                <div className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-100px font-bold tracking-tight leading-[0.9] max-w-full md:max-w-[80%] md:translate-x-[40px]">
                  digitale<br />Magie.
                </div>
                <div className="relative md:absolute mt-8 md:mt-0 md:top-[calc(100%+2rem)] md:right-0 tex
                <div className="relative md:absolute mt-8 md:mt-0 md:top-[calc(100%+2rem)] md:right-0 text-left max-w-full md:max-w-[600px] md:translate-x-[-15%] lg:translate-x-[-20%]">
                  <h1 className="text-base xs:text-lg sm:text-xl md:text-[20px] font-light leading-tight tracking-tight">
                    <span>
                      Wir verwandeln mit Webdesign,<br />
                      Branding und digitaler Strategie<br />
                      deine Vision zu deinem Brand.
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="space-y-2 mt-8 md:mt-0">
              {/* Web Design Service */}
              <div className="min-h-[40vh] md:min-h-[80vh] flex items-center py-2">
                <div className="bg-white rounded-2xl xs:rounded-3xl md:rounded-[48px] p-6 xs:p-8 sm:p-10 md:p-12 w-full">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                    {/* Purple Box - First on mobile */}
                    <div className="w-full md:w-[555px] md:order-last">
                      <div className="bg-[#9333EA] rounded-2xl xs:rounded-3xl md:rounded-tr-[100px] p-6 xs:p-8 sm:p-10 md:p-12 flex flex-col justify-end aspect-square relative overflow-hidden">
                        <div className="absolute inset-0">
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          >
                            <source
                              src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/webdesigndevelop.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-service-md lg:text-service-lg font-light tracking-tight leading-none mb-6 md:mb-8">
                        Web design &<br />
                        development
                      </h2>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Web design</span>
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Web development</span>
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Copywriting</span>
                      </div>

                      <p className="text-base xs:text-lg text-gray-600 mb-8 tracking-tight leading-snug">
                        Für digitale Erlebnisse, die Ästhetik mit Funktionalität vereinen, Aufmerksamkeit erregen und den Umsatz maximieren.
                      </p>

                      <Link 
                        to="/webdesign"
                        className="inline-flex items-center justify-center w-full xs:w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                      >
                        Mehr dazu <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Marketing Service */}
              <div className="min-h-[40vh] md:min-h-[80vh] flex items-center py-2">
                <div className="bg-white rounded-2xl xs:rounded-3xl md:rounded-[48px] p-6 xs:p-8 sm:p-10 md:p-12 w-full">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                    {/* Purple Box - First on mobile */}
                    <div className="w-full md:w-[555px] md:order-last">
                      <div className="bg-[#FF8FCF] rounded-2xl xs:rounded-3xl md:rounded-tr-[100px] p-6 xs:p-8 sm:p-10 md:p-12 flex flex-col justify-end aspect-square relative overflow-hidden">
                        <div className="absolute inset-0">
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                           >
                            <source
                             src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/mizmu_digitalmarketing.mp4"
                              type="video/mp4"
                            />
                           </video>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-service-md lg:text-service-lg font-light tracking-tight leading-none mb-6 md:mb-8">
                        Digital<br />
                        Marketing
                      </h2>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">SEO</span>
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Social Media</span>
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Content Strategy</span>
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Analytics</span>
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Ads</span>
                      </div>

                      <p className="text-base xs:text-lg text-gray-600 mb-8 tracking-tight leading-snug">
                        Online-Präsenz boosten mit smarten, datengesteuerten Marketingstrategien – für echte Ergebnisse und nachhaltiges Wachstum, statt leerer Versprechen.
                      </p>

                      <Link 
                        to="/digital-marketing"
                        className="inline-flex items-center justify-center w-full xs:w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                      >
                        Mehr dazu <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branding Service */}
              <div className="min-h-[40vh] md:min-h-[80vh] flex items-center py-2">
                <div className="bg-white rounded-2xl xs:rounded-3xl md:rounded-[48px] p-6 xs:p-8 sm:p-10 md:p-12 w-full">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                    {/* Purple Box - First on mobile */}
                    <div className="w-full md:w-[555px] md:order-last">
                      <div className="bg-[#9333EA] rounded-2xl xs:rounded-3xl md:rounded-tr-[100px] p-6 xs:p-8 sm:p-10 md:p-12 flex flex-col justify-end aspect-square relative overflow-hidden">
                        <div className="absolute inset-0">
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          >
                            <source
                              src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/mizmu_branding.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-service-md lg:text-service-lg font-light tracking-tight leading-none mb-6 md:mb-8">
                        Branding &<br />
                        Identity
                      </h2>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Logo Design</span>
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Brand Strategy</span>
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Visual Identity</span>
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Guidelines</span>
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Brand Voice</span>
                      </div>

                      <p className="text-base xs:text-lg text-gray-600 mb-8 tracking-tight leading-snug">
                        Mach deine Marke zum absoluten Hingucker, die im Gedächtnis bleibt – beeindrucke dein Publikum und hebe dich souverän vom Rest ab.
                      </p>

                      <Link 
                        to="/webdesign"
                        className="inline-flex items-center justify-center w-full xs:w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                      >
                        Mehr dazu <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Virtual Assistance Service */}
              <div className="min-h-[40vh] md:min-h-[80vh] flex items-center py-2">
                <div className="bg-white rounded-2xl xs:rounded-3xl md:rounded-[48px] p-6 xs:p-8 sm:p-10 md:p-12 w-full">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                    {/* Purple Box - First on mobile */}
                    <div className="w-full md:w-[555px] md:order-last">
                      <div className="bg-[#9333EA] rounded-2xl xs:rounded-3xl md:rounded-tr-[100px] p-6 xs:p-8 sm:p-10 md:p-12 flex flex-col justify-end aspect-square relative overflow-hidden">
                        <div className="absolute inset-0">
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          >
                            <source
                              src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/mizmu_virtualassistance.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-service-md lg:text-service-lg font-light tracking-tight leading-none mb-6 md:mb-8">
                        Virtual<br />
                        Assistance
                      </h2>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Administrative Support</span>
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Email Management</span>
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Calendar Management</span>
                        <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Task Management</span>
                      </div>

                      <p className="text-base xs:text-lg text-gray-600 mb-8 tracking-tight leading-snug">
                        Professionelle Unterstützung für dein Business - effizient und zuverlässig.
                      </p>

                      <Link 
                        to="/virtual-assistance"
                        className="inline-flex items-center justify-center w-full xs:w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                      >
                        Mehr dazu <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="min-h-[40vh] md:min-h-[80vh] flex items-center justify-center py-2">
              <div className="text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight content-spacing mb-6 md:mb-8">
                  Etwas nicht dabei?<br />
                  Frag mal nach.
                </div>
                <a 
                  href="https://mizmu.ch/kontakt"
                  className="inline-flex items-center justify-center w-full xs:w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                >
                  Schreib uns <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Home;