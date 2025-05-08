import emailjs from '@emailjs/browser';
import { supabase } from './supabase';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (data: ContactMessage) => {
  try {
    // Insert the message into Supabase first
    const { error: supabaseError } = await supabase
      .from('contact_messages')
      .insert([data]);

    if (supabaseError) throw supabaseError;

    // Send email using EmailJS
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: 'hello@mizmu.ch'
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Pass the public key here instead of using init()
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};