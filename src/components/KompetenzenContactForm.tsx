import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitContactForm } from '../lib/contact';

interface KompetenzenContactFormProps {
  service?: string;
}

const KompetenzenContactForm: React.FC<KompetenzenContactFormProps> = ({ service }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(service ? [service] : []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const services = [
    'Webseite',
    'Design',
    'Branding',
    'Digitales Marketing',
    'Social Media',
    'Virtuelle Assistenz'
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: `${formData.get('firstName')} ${formData.get('lastName')}`,
        email: formData.get('email') as string,
        message: `Interessiert an: ${selectedServices.join(', ')}\n\nBudget: ${formData.get('budget')}\n\nNachricht: ${formData.get('message')}`,
      };

      await submitContactForm(data);

      setSubmitStatus({
        type: 'success',
        message: 'Danke für deine Nachricht! Wir melden uns bald.'
      });
      e.currentTarget.reset();
      setSelectedServices([]);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Es gab einen Fehler beim Senden. Bitte versuche es später erneut.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      {/* Logo */}
      <Link to="/" className="inline-block mb-8">
        <span className="text-2xl font-montreal font-bold tracking-tight">mizmu</span>
      </Link>

      <h2 className="text-2xl font-light mb-8">Ich interessiere mich für:</h2>

      {/* Services Selection */}
      <div className="flex flex-wrap gap-2 mb-6">
        {services.map((service) => (
          <button
            key={service}
            onClick={() => handleServiceToggle(service)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              selectedServices.includes(service)
                ? 'bg-black text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              required
              placeholder="Vorname*"
              className="w-full border-b border-gray-200 focus:border-black px-0 py-2 placeholder-gray-400 focus:outline-none text-base"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              required
              placeholder="Nachname*"
              className="w-full border-b border-gray-200 focus:border-black px-0 py-2 placeholder-gray-400 focus:outline-none text-base"
            />
          </div>
        </div>

        <div>
          <input
            type="email"
            name="email"
            required
            placeholder="E-Mail*"
            className="w-full border-b border-gray-200 focus:border-black px-0 py-2 placeholder-gray-400 focus:outline-none text-base"
          />
        </div>

        <div>
          <input
            type="text"
            name="budget"
            placeholder="Budget (CHF)"
            className="w-full border-b border-gray-200 focus:border-black px-0 py-2 placeholder-gray-400 focus:outline-none text-base mt-4"
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Nachricht"
            rows={4}
            className="w-full border border-gray-200 focus:border-black p-3 rounded-lg placeholder-gray-400 focus:outline-none text-base resize-none"
          ></textarea>
        </div>

        {/* Newsletter and Privacy Checkboxes */}
        <div className="space-y-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="newsletter"
              className="mt-1 border border-gray-300 rounded text-black focus:ring-black focus:ring-offset-0 checked:bg-black checked:hover:bg-black/90"
            />
            <span className="text-sm text-gray-600 group-hover:text-black">
              Ich möchte gerne den monatlichen Newsletter von mizmu erhalten
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="privacy"
              required
              className="mt-1 border border-gray-300 rounded text-black focus:ring-black focus:ring-offset-0 checked:bg-black checked:hover:bg-black/90"
            />
            <span className="text-sm text-gray-600 group-hover:text-black">
              Ich verstehe, dass mizmu meine Daten gemäss der{' '}
              <Link to="/datenschutz" className="underline hover:text-black">
                Datenschutzerklärung
              </Link>{' '}
              sicher verwahrt
            </span>
          </label>
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
          className={`w-full py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
        </button>
      </form>
    </div>
  );
};

export default KompetenzenContactForm;