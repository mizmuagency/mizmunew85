import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Impressum = () => {
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
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-light mb-8">Impressum</h1>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-light mb-4">Angaben gemäss Schweizer Recht</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      mizmu<br />
                      Digitale Agentur<br />
                      Sitz in der Schweiz
                    </p>
                    <p>
                      E-Mail: hello@mizmu.ch<br />
                      Telefon: +41 76 310 27 09
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">Vertretungsberechtigte Personen</h2>
                  <p className="text-gray-600">
                    Alma Mizic<br />
                    Melina Mujic
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">Haftungsausschluss</h2>
                  <p className="text-gray-600">
                    Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, 
                    Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden 
                    materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der 
                    veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden 
                    sind, werden ausgeschlossen.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">Urheberrechte</h2>
                  <p className="text-gray-600">
                    Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website 
                    gehören ausschliesslich mizmu oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher 
                    Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Impressum;