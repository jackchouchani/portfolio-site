import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.redirect(new URL('/'));
  }

  try {
    // Supprimer le contact de Resend
    await resend.contacts.remove({ email, audienceId: AUDIENCE_ID as string });
    
    return NextResponse.redirect(new URL('/newsletter/unsubscribed'));
  } catch (error) {
    console.error('Erreur désabonnement:', error);
    return NextResponse.redirect(new URL('/newsletter/error'));
  }
} 