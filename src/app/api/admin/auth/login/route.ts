import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword, generateSessionToken, verifyPassword } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email und Passwort erforderlich' },
        { status: 400 }
      );
    }

    // Finde User
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Log fehlgeschlagener Login
      await prisma.loginHistory.create({
        data: {
          userId: 'unknown',
          ipAddress: getClientIp(request),
          userAgent: request.headers.get('user-agent') || undefined,
          success: false,
          reason: 'Benutzer nicht gefunden',
        },
      });

      return NextResponse.json(
        { error: 'Ungültige Anmeldedaten' },
        { status: 401 }
      );
    }

    // Vergleiche Passwort
    const passwordValid = await verifyPassword(password, user.passwordHash);

    if (!passwordValid) {
      // Log fehlgeschlagener Login
      await prisma.loginHistory.create({
        data: {
          userId: user.id,
          ipAddress: getClientIp(request),
          userAgent: request.headers.get('user-agent') || undefined,
          success: false,
          reason: 'Falsches Passwort',
        },
      });

      return NextResponse.json(
        { error: 'Ungültige Anmeldedaten' },
        { status: 401 }
      );
    }

    if (!user.isActive) {
      return NextResponse.json(
        { error: 'Benutzer ist deaktiviert' },
        { status: 403 }
      );
    }

    // Erstelle Session
    const sessionToken = generateSessionToken();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h

    await prisma.session.create({
      data: {
        userId: user.id,
        token: sessionToken,
        expiresAt,
        ipAddress: getClientIp(request),
        userAgent: request.headers.get('user-agent') || undefined,
      },
    });

    // Update lastLogin
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    // Log erfolgreicher Login
    await prisma.loginHistory.create({
      data: {
        userId: user.id,
        ipAddress: getClientIp(request),
        userAgent: request.headers.get('user-agent') || undefined,
        success: true,
      },
    });

    // Erstelle Response mit HttpOnly Cookie
    const response = NextResponse.json(
      {
        success: true,
        user: { id: user.id, email: user.email, name: user.name, role: user.role }
      },
      { status: 200 }
    );

    response.cookies.set('sessionToken', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60, // 24h in seconds
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Interner Fehler' },
      { status: 500 }
    );
  }
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  return (forwarded?.split(',')[0] || request.ip || 'unknown').trim();
}
