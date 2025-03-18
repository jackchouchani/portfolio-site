import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email est requis' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Web Wizardry <newsletter@webwizardry.fr>',
      to: [email],
      subject: 'Bienvenue à la newsletter Web Wizardry',
      html: `
        <h1>Merci de votre inscription !</h1>
        <p>Vous êtes maintenant inscrit à la newsletter de Web Wizardry.</p>
        <p>Vous recevrez régulièrement des conseils et actualités sur le développement web.</p>
      `,
    });

    return NextResponse.json(
      { message: 'Inscription réussie', data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de l\'inscription' },
      { status: 500 }
    );
  }
} 