import { serve } from 'https://deno.fresh.dev/std@0.168.0/http/server.ts'
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const client = new SmtpClient();

    // Configure connection
    await client.connectTLS({
      hostname: Deno.env.get('SMTP_HOSTNAME') || '',
      port: 587,
      username: Deno.env.get('SMTP_USERNAME') || '',
      password: Deno.env.get('SMTP_PASSWORD') || '',
    });

    const { record } = await req.json()

    // Send the message
    await client.send({
      from: `"${record.name}" <${record.email}>`,
      to: "hello@mizmu.ch",
      subject: `New Contact Form Message from ${record.name}`,
      content: `
Name: ${record.name}
Email: ${record.email}
Message:
${record.message}
      `,
      html: `
        <div>
          <h2>New Contact Form Message</h2>
          <p><strong>From:</strong> ${record.name}</p>
          <p><strong>Email:</strong> ${record.email}</p>
          <p><strong>Message:</strong></p>
          <p>${record.message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    await client.close();

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders,
        } 
      }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders,
        }
      }
    )
  }
})