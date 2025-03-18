import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  try {
    // Mettre à jour le contact dans Resend
    await resend.contacts.update({
      audienceId: AUDIENCE_ID as string,
      email,
      unsubscribed: true,
    });
    
    // Rediriger vers la page de confirmation
    return NextResponse.redirect(new URL('/newsletter/unsubscribe', request.url));
  } catch (error) {
    console.error('Erreur désabonnement:', error);
    // En cas d'erreur, rediriger vers la page d'erreur
    return NextResponse.redirect(new URL('/newsletter/error', request.url));
  }
} 