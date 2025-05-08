import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return ref;
};

const About = () => {
  const [isAlmaHovered, setIsAlmaHovered] = useState(false);
  const [isMelinaHovered, setIsMelinaHovered] = useState(false);
  const heroRef = useScrollReveal();
  const almaRef = useScrollReveal();
  const melinaRef = useScrollReveal();
  const bottomRef = useScrollReveal();
  const supportBox1Ref = useScrollReveal();
  const supportBox2Ref = useScrollReveal();

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black flex flex-col">
      <GradientCanvas />
      
      <div className="relative z-20 flex-1 flex flex-col">
        {/* Logo */}
        <div className="fixed top-safe-top left-safe-left z-50 p-4 xs:p-6 sm:p-8">
          <Link 
            to="/" 
            className="text-fluid-xl font-montreal font-bold tracking-tight hover:opacity-70 transition-opacity touch-target text-white"
          >
            mizmu
          </Link>
        </div>

        <Menu />

        <main className="flex-1 flex flex-col">
          <div className="container mx-auto px-4 md:px-8 pt-32 xs:pt-36 sm:pt-40 pb-12 md:pb-20 flex-1">
            {/* Hero Section */}
            <div ref={heroRef} className="max-w-4xl mb-20 opacity-0 translate-y-8 duration-1000 ease-out relative">
              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                <div className="flex-1">
                  <h1 className="text-fluid-6xl xs:text-fluid-7xl font-light tracking-tight leading-[1.1] mb-6">
                    Digitale Magie<br />
                    Macher
                  </h1>
                  <p className="text-fluid-3xl xs:text-fluid-4xl text-white max-w-xl tracking-tight leading-snug">
                    Wir zaubern in dem wir abliefern. Lern uns kennen:
                  </p>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="space-y-8">
              {/* Alma */}
              <div ref={almaRef} className="rounded-3xl xs:rounded-[48px] p-8 xs:p-10 sm:p-12 opacity-0 translate-y-8 duration-1000 ease-out bg-black/50 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                  {/* Purple Box - First on mobile */}
                  <div className="w-full md:w-[400px] md:order-last">
                    <div 
                      className="bg-[#9333EA] rounded-3xl xs:rounded-[48px] aspect-square origin-right scale-100 duration-1000 ease-out delay-300 relative overflow-hidden"
                    >
                      <img
                        src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/almizmu.jpg"
                        alt="Alma"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                      Alma
                    </h2>
                    <p className="text-fluid-lg text-gray-400 mb-8 tracking-tight leading-snug">
                      Neuste Tech Trends? Alma kennt sie schon. Hast einen neuen Song gehört? Alma hörte ihn schon vor 10 Jahren, ohne es dir unter die Nase zu reiben. Im Gegenteil: Sie teilt aus, ehm nein, natürlich mit dir.
                    </p>
                    <a 
                      href="mailto:alma@mizmu.ch" 
                      className="inline-flex items-center justify-center w-[184px] h-[50px] border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors tracking-tight whitespace-nowrap text-base"
                    >
                      Sag Alma hallo <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Melina */}
              <div ref={melinaRef} className="rounded-3xl xs:rounded-[48px] p-8 xs:p-10 sm:p-12 opacity-0 translate-y-8 duration-1000 ease-out bg-black/50 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                  {/* Purple Box - First on mobile */}
                  <div className="w-full md:w-[400px]">
                    <div 
                      className="bg-[#9333EA] rounded-3xl xs:rounded-[48px] aspect-square origin-right scale-100 duration-1000 ease-out delay-300 relative overflow-hidden"
                    >
                      <img
                        src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/melmizmu.jpg"
                        alt="Melina"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                      Melina
                    </h2>
                    <p className="text-fluid-lg text-gray-400 mb-8 tracking-tight leading-snug">
                      It's Melina. Übrigens aus 2155. Weiss telepathisch was insgeheim deine Wünsche sind, noch bevor du es weisst. Grosses Plus: Sie machts möglich.
                    </p>
                    <a 
                      href="mailto:melina@mizmu.ch" 
                      className="inline-flex items-center justify-center w-[184px] h-[50px] border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors tracking-tight whitespace-nowrap text-base"
                    >
                      Melina begrüssen <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Support Team Section */}
              <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-[1.1] mb-12 mt-20">
                Support Team
              </h2>

              {/* Support Member 1 */}
              <div ref={supportBox1Ref} className="rounded-3xl xs:rounded-[48px] p-8 xs:p-10 sm:p-12 opacity-0 translate-y-8 duration-1000 ease-out bg-black/50 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                  <div className="w-full md:w-[300px]">
                    <div className="bg-[#9333EA] rounded-3xl xs:rounded-[48px] aspect-square origin-right scale-100 duration-1000 ease-out delay-300 relative overflow-hidden">
                      <img
                        src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/talaunderdog.jpg"
                        alt="Tala"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl xs:text-4xl font-light tracking-tight leading-none mb-8">
                      Tala aka The Underdog
                    </h2>
                    <p className="text-fluid-lg text-gray-400 mb-8 tracking-tight leading-snug">
                      Unser Team wächst. Bleib gespannt!
                    </p>
                  </div>
                </div>
              </div>

              {/* Support Member 2 */}
              <div ref={supportBox2Ref} className="rounded-3xl xs:rounded-[48px] p-8 xs:p-10 sm:p-12 opacity-0 translate-y-8 duration-1000 ease-out bg-black/50 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                  <div className="w-full md:w-[300px] md:order-last">
                    <div className="bg-[#9333EA] rounded-3xl xs:rounded-[48px] aspect-square origin-right scale-100 duration-1000 ease-out delay-300 relative overflow-hidden">
                      <img
                        src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/macmacc.jpg"
                        alt="MacMac"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl xs:text-4xl font-light tracking-tight leading-none mb-8">
                      MacMac aka The Fluff
                    </h2>
                    <p className="text-fluid-lg text-gray-400 mb-8 tracking-tight leading-snug">
                      Unser Team wächst. Bleib gespannt!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-20 mb-32">
              <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                Magie gefällig? Oder<br />
                Kaffee? Auf Deinen<br />
                Nacken, Gönnjamin
              </h2>
              <Link 
                to="/kontakt"
                className="inline-flex items-center justify-center w-[184px] h-[50px] border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors tracking-tight whitespace-nowrap text-base"
              >
                Freunde werden <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default About;