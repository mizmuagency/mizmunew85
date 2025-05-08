import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Hanfgartenweg = () => {
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
              </div>
              <h1 className="text-fluid-6xl xs:text-fluid-7xl font-light tracking-tight leading-[1.1] mb-6">
                Bauprojekt<br />
                Hanfgartenweg
              </h1>
              <p className="text-fluid-lg text-gray-600 max-w-xl tracking-tight leading-snug">
                Ein modernes Bauprojekt verdient eine moderne digitale Präsenz. Wir haben eine elegante und 
                funktionale Website geschaffen, die das Projekt perfekt präsentiert.
              </p>
            </div>

            {/* Main Project Image */}
            <div className="mb-20">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/hnfgrt_hmp.png"
                  alt="Bauprojekt Hanfgartenweg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div>
                <h2 className="text-2xl font-light mb-6">Über das Projekt</h2>
                <p className="text-gray-600 mb-4">
                  Das Bauprojekt Hanfgartenweg ist ein innovatives Wohnbauprojekt, das moderne Architektur 
                  mit nachhaltiger Bauweise verbindet. Unsere Aufgabe war es, diese Vision digital zum Leben 
                  zu erwecken.
                </p>
                <p className="text-gray-600">
                  Die Website präsentiert nicht nur die technischen Details und Grundrisse, sondern vermittelt 
                  auch das Lebensgefühl, das die zukünftigen Bewohner erwartet.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-light mb-6">Technische Details</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Responsive Design für alle Geräte</li>
                  <li>• Optimierte Performance</li>
                  <li>• Interaktive 3D-Visualisierungen</li>
                  <li>• Integriertes Kontaktformular</li>
                  <li>• SEO-optimierte Struktur</li>
                </ul>
              </div>
            </div>

            {/* Additional Project Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/hnfgrt_1.jpg"
                  alt="Hanfgartenweg Detail 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/hnfgrt_2.jpg"
                  alt="Hanfgartenweg Detail 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Visit Website Button */}
            <div className="text-center mb-32">
              <a
                href="#"
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

export default Hanfgartenweg;