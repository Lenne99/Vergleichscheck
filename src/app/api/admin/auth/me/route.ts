import { NextRequest, NextResponse } from 'next/server';
import { validateSessionToken } from '@/lib/session';

const ADMIN_USERS = [
  { id: 'admin-1', name: 'Lenne', email: 'admin@vergleichscheck.com', role: 'ADMIN' },
];

export async function GET(request: NextRequest) {
  const token = request.cookies.get('sessionToken')?.value;
  if (!token) {
    return NextResponse.json({ error: 'Nicht angemeldet' }, { status: 401 });
  }

  const { valid, userId } = await validateSessionToken(token);
  if (!valid || !userId) {
    return NextResponse.json({ error: 'Ungültige Sitzung' }, { status: 401 });
  }

  const user = ADMIN_USERS.find((u) => u.id === userId);
  if (!user) {
    return NextResponse.json({ error: 'Benutzer nicht gefunden' }, { status: 404 });
  }

  return NextResponse.json({ user });
}
