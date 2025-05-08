import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

const Newsletter = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    acceptNewsletter: false,
    acceptPrivacy: false,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'hello@mizmu.ch',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: 'New Newsletter Subscription',
          message: `New newsletter subscription:
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Accepted Newsletter: ${formData.acceptNewsletter}
Accepted Privacy: ${formData.acceptPrivacy}`
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      navigate('/newsletter-confirmation');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-black relative overflow-hidden bg-black flex flex-col">
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
            <div className="max-w-3xl">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.1] mb-12 text-white">
                Bleib auf dem Laufenden<br />
                mit News von mizmu.
              </h1>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* First Name */}
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Vorname*"
                      className="w-full max-w-[280px] bg-transparent border-b-2 border-white/30 focus:border-white px-0 py-2 text-white placeholder-white/50 focus:outline-none text-xl"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Nachname*"
                      className="w-full max-w-[280px] bg-transparent border-b-2 border-white/30 focus:border-white px-0 py-2 text-white placeholder-white/50 focus:outline-none text-xl"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    required
                    placeholder="E-Mail*"
                    className="w-full max-w-[280px] bg-transparent border-b-2 border-white/30 focus:border-white px-0 py-2 text-white placeholder-white/50 focus:outline-none text-xl"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>

                {/* Privacy Text */}
                <p className="text-white/70 text-sm leading-relaxed">
                  mizmu benötigt die von dir bereitgestellten Kontaktinformationen, um dich über unsere Produkte und Dienstleistungen zu informieren. 
                  Du kannst diese Kommunikation jederzeit abbestellen. Informationen zum Abbestellen sowie unsere Datenschutzpraktiken und unser Engagement 
                  für den Schutz deiner Privatsphäre findest du in unserer{' '}
                  <Link to="/datenschutz" className="underline hover:text-white">Datenschutzerklärung</Link>.
                </p>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <label className="flex items-center gap-3 text-white cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        required
                        className="w-3 h-3 rounded border border-white/30 checked:border-white focus:ring-0 focus:ring-offset-0 focus:ring-transparent appearance-none"
                        checked={formData.acceptNewsletter}
                        onChange={(e) => setFormData(prev => ({ ...prev, acceptNewsletter: e.target.checked }))}
                      />
                      {formData.acceptNewsletter && (
                        <Check className="w-2.5 h-2.5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      )}
                    </div>
                    <span className="group-hover:text-white/90">Ich möchte gerne den monatlichen Newsletter von mizmu erhalten</span>
                  </label>

                  <label className="flex items-center gap-3 text-white cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        required
                        className="w-3 h-3 rounded border border-white/30 checked:border-white focus:ring-0 focus:ring-offset-0 focus:ring-transparent appearance-none"
                        checked={formData.acceptPrivacy}
                        onChange={(e) => setFormData(prev => ({ ...prev, acceptPrivacy: e.target.checked }))}
                      />
                      {formData.acceptPrivacy && (
                        <Check className="w-2.5 h-2.5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      )}
                    </div>
                    <span className="group-hover:text-white/90">Ich verstehe, dass mizmu meine Daten gemäß der Datenschutzerklärung sicher verwahrt</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 border-2 border-white rounded-full px-8 py-3 text-white hover:bg-white hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wird angemeldet...' : 'Anmelden'} <ArrowRight strokeWidth={1} className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Newsletter;