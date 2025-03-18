import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Ajouter le contact à l'audience Resend
    try {
      await resend.contacts.create({
        email,
        audienceId: AUDIENCE_ID as string,
        unsubscribed: false,
      });
    } catch (error) {
      console.error('Erreur création contact:', error);
      // On continue même si l'ajout du contact échoue
    }

    // Envoyer l'email de confirmation
    const data = await resend.emails.send({
      from: 'Web Wizardry <newsletter@mail.webwizardry.fr>',
      to: [email],
      subject: 'Bienvenue à la newsletter Web Wizardry',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Bienvenue à la newsletter Web Wizardry</title>
          </head>
          <body>
            <h1>Merci de votre inscription !</h1>
            <p>Vous êtes maintenant inscrit à la newsletter de Web Wizardry.</p>
            <p>Vous recevrez régulièrement des conseils et actualités sur le développement web.</p>
            <hr>
            <p style="font-size: 12px; color: #666;">
              Pour vous désabonner, cliquez sur ce lien : 
              <a href="https://webwizardry.fr/api/newsletter/unsubscribe?email=${email}">Se désabonner</a>
            </p>
          </body>
        </html>
      `,
      replyTo: "contact@webwizardry.fr"
    });

    return NextResponse.json(
      { message: 'Inscription réussie', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur Resend:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erreur lors de l\'inscription' },
      { status: 500 }
    );
  }
} 