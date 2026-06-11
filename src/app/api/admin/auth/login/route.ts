import { NextRequest, NextResponse } from 'next/server';
import { createSessionToken } from '@/lib/session';
import { getCurrentPassword } from '../password/route';

function getAdminUsers() {
  return [
    {
      id: 'admin-1',
      name: 'Lenne',
      email: 'admin@vergleichscheck.com',
      username: 'Lenne',
      password: getCurrentPassword(),
      role: 'ADMIN',
    },
  ];
}

// Einfaches In-Memory Rate-Limiting (resets bei Server-Neustart)
const loginAttempts = new Map<string, { count: number; blockedUntil: number }>();
const MAX_ATTEMPTS = 5;
const BLOCK_DURATION = 15 * 60 * 1000;

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

    const attempts = loginAttempts.get(ip);
    if (attempts && attempts.blockedUntil > Date.now()) {
      const minutesLeft = Math.ceil((attempts.blockedUntil - Date.now()) / 60000);
      return NextResponse.json(
        { error: `Zu viele Versuche. Bitte warte ${minutesLeft} Minuten.` },
        { status: 429 }
      );
    }

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Benutzername und Passwort erforderlich' }, { status: 400 });
    }

    const user = getAdminUsers().find(
      (u) => (u.email === email || u.username === email) && u.password === password
    );

    if (!user) {
      const current = loginAttempts.get(ip) || { count: 0, blockedUntil: 0 };
      current.count += 1;
      if (current.count >= MAX_ATTEMPTS) {
        current.blockedUntil = Date.now() + BLOCK_DURATION;
        current.count = 0;
      }
      loginAttempts.set(ip, current);

      return NextResponse.json({ error: 'Ungültiger Benutzername oder Passwort' }, { status: 401 });
    }

    loginAttempts.delete(ip);

    const token = await createSessionToken(user.id);

    const response = NextResponse.json(
      { success: true, user: { id: user.id, name: user.name, email: user.email, role: user.role } },
      { status: 200 }
    );

    response.cookies.set('sessionToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Interner Fehler' }, { status: 500 });
  }
}
