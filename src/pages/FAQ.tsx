import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Collapsible from '../components/Collapsible';

const FAQ = () => {
  return (
    <div className="min-h-screen text-black relative overflow-hidden bg-white flex flex-col">
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
            <div className="max-w-4xl">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl font-light tracking-tight leading-[1.1] mb-16">
                Häufig gestellte Fragen
              </h1>

              <div className="space-y-0">
                <Collapsible title="Wer ist mizmu.ch?">
                  <p className="text-2xl">
                    mizmu ist eine kreative Digitalagentur für Marken mit Magie. Wir verbinden Design, Technologie und Storytelling zu aussergewöhnlichen digitalen Erlebnissen – von Websites über interaktive Konzepte bis zu Social Campaigns.
                  </p>
                </Collapsible>

                <Collapsible title="Was bedeutet &quot;digitale Magie&quot;?">
                  <p className="text-2xl">
                    Digitale Magie ist für uns das Zusammenspiel aus Ästhetik, Innovation und emotionalem Storytelling. Unsere Projekte sollen nicht nur funktionieren – sie sollen begeistern, berühren und überraschen.
                  </p>
                </Collapsible>

                <Collapsible title="Für wen arbeitet mizmu?">
                  <p className="text-2xl">
                    Für mutige Marken, Startups, Kulturschaffende und Unternehmen, die keine Lust auf Langeweile haben. Wir lieben Projekte mit Charakter, Nachhaltigkeit und Vision.
                  </p>
                </Collapsible>

                <Collapsible title="Welche Leistungen bietet ihr an?">
                  <div className="text-2xl">
                    <p>Wir bieten u. a.:</p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li>Webdesign & Webentwicklung (mit Fokus auf Ästhetik & UX)</li>
                      <li>Brand Design & Visual Identity</li>
                      <li>Content-Strategie & Storytelling</li>
                      <li>Social Media Marketing</li>
                      <li>Prototyping & Beratung für digitale Produkte</li>
                    </ul>
                  </div>
                </Collapsible>

                <Collapsible title="Wie läuft eine Zusammenarbeit ab?">
                  <div className="text-2xl">
                    <p>In der Regel so:</p>
                    <ul className="list-decimal pl-6 mt-4 space-y-2">
                      <li>Kickoff-Gespräch – Wir lernen uns kennen und verstehen dein Vorhaben.</li>
                      <li>Konzeptphase – Wir entwickeln Ideen, Moodboards & Prototypen.</li>
                      <li>Umsetzung – Design, Development und Content entstehen Hand in Hand.</li>
                      <li>Launch & Beyond – Wir begleiten dich bei der Veröffentlichung und auf Wunsch darüber hinaus.</li>
                    </ul>
                  </div>
                </Collapsible>

                <Collapsible title="Was kostet ein Projekt bei euch?">
                  <p className="text-2xl">
                    Das hängt von Umfang, Zeitrahmen und Komplexität ab. Wir erstellen individuelle Angebote – fair, transparent und ohne Überraschungen. Für kleine Budgets haben wir auch schlanke Starter-Pakete.
                  </p>
                </Collapsible>

                <Collapsible title="Wo sitzt ihr?">
                  <p className="text-2xl">
                    mizmu ist remote-first – mit Sitz in der Schweiz und einem kreativen Netzwerk.
                  </p>
                </Collapsible>

                <Collapsible title="Kann ich euch einfach mal kontaktieren – auch ohne konkretes Projekt?">
                  <div className="space-y-4">
                    <p className="text-2xl">Unbedingt! Wir lieben inspirierende Gespräche.</p>
                    <Link 
                      to="/contact"
                      className="inline-flex items-center justify-center h-[44px] border-2 border-black rounded-full px-8 hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                    >
                      Sprich uns an <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </Collapsible>

                <Collapsible title="Bietet ihr auch Workshops oder Beratung an?">
                  <p className="text-2xl">
                    Ja! Ob Creative Kickstart, UX-Check oder Content-Strategie – wir helfen dir, digital Klarheit zu schaffen und deine Marke zu schärfen.
                  </p>
                </Collapsible>

                <Collapsible title="Wie bleibt man auf dem Laufenden?">
                  <div className="space-y-4">
                    <p className="text-2xl">
                      Melde dich zu unserem Newsletter "Digital Glow Up" an und folge uns auf Instagram, TikTok und LinkedIn. Wir teilen regelmässig Updates, Tipps & Magic Moments.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link 
                        to="/newsletter"
                        className="inline-flex items-center justify-center h-[44px] border-2 border-black rounded-full px-8 hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                      >
                        Newsletter <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                      <a 
                        href="https://www.instagram.com/mizmu.ch/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-[44px] border-2 border-black rounded-full px-8 hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                      >
                        Instagram <ArrowRight className="w-5 h-5 ml-2" />
                      </a>
                    </div>
                  </div>
                </Collapsible>
              </div>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default FAQ;