import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { submitContactForm } from '../lib/contact';
import Footer from '../components/Footer';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
      };

      await submitContactForm(data);

      setSubmitStatus({
        type: 'success',
        message: 'Danke für deine Nachricht! Wir melden uns bald bei dir.'
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Es gab einen Fehler beim Senden. Bitte versuche es später noch einmal.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
                Lass uns<br />
                zusammen<br />
                arbeiten
              </h1>
              <p className="text-fluid-lg text-gray-600 max-w-xl tracking-tight leading-snug">
                Hast du ein Projekt im Sinn? Wir freuen uns darauf, von dir zu hören 
                und deine Vision Realität werden zu lassen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-3xl">
                <h2 className="text-3xl font-light mb-8 tracking-tight">Kontaktiere uns</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9333EA] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9333EA] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#9333EA] focus:border-transparent"
                    ></textarea>
                  </div>
                  {submitStatus.type && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-transparent border border-black rounded-full px-6 py-2 inline-flex items-center gap-2 hover:bg-black hover:text-white transition-colors tracking-tight ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Senden'} <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-5 h-5" />
                    <h3 className="text-xl font-light">E-Mail</h3>
                  </div>
                  <a href="mailto:hello@mizmu.ch" className="text-gray-600 hover:text-black transition-colors">
                    hello@mizmu.ch
                  </a>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-5 h-5" />
                    <h3 className="text-xl font-light">Telefon</h3>
                  </div>
                  <a href="tel:+41763102709" className="text-gray-600 hover:text-black transition-colors">
                    +41 76 310 27 09
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Contact;