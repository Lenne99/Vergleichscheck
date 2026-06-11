import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get('sessionToken')?.value;

    if (sessionToken) {
      // Lösche Session aus DB
      await prisma.session.delete({
        where: { token: sessionToken },
      }).catch(() => {}); // Ignoriere wenn nicht gefunden
    }

    // Erstelle Response und lösche Cookie
    const response = NextResponse.json(
      { success: true, message: 'Erfolgreich abgemeldet' },
      { status: 200 }
    );

    response.cookies.set('sessionToken', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0, // Löscht den Cookie
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Fehler beim Abmelden' },
      { status: 500 }
    );
  }
}
