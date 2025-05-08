import React from 'react';
import { Link } from 'react-router-dom';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const NewsletterConfirmation = () => {
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
          <div className="container mx-auto px-4 md:px-8 pt-32 xs:pt-36 sm:pt-40">
            <div className="max-w-2xl text-left">
              <h1 className="text-3xl xs:text-4xl font-light tracking-tight leading-[1.1] mb-6">
                Thanks for joining!
              </h1>
              <p className="text-fluid-xl text-white/70 mb-6">
                Halte die Augen offen - dein erster Mizmu Newsletter ist schon auf dem Weg zu Dir!
              </p>
              <Link 
                to="/"
                className="mt-24 mb-32 inline-flex items-center justify-center h-[44px] border-2 border-white rounded-full px-8 hover:bg-white hover:text-black transition-colors tracking-tight whitespace-nowrap"
              >
                Zurück zur Startseite
              </Link>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default NewsletterConfirmation;