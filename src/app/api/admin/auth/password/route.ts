import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';

// Laufzeit-Passwort (gilt bis zum Server-Neustart, dann greift .env wieder)
let runtimePassword: string | null = null;

export function getCurrentPassword(): string {
  return runtimePassword ?? process.env.ADMIN_PASSWORD ?? '12345';
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Nicht autorisiert' }, { status: 401 });
  }

  const { currentPassword, newPassword } = await request.json();
  if (!currentPassword || !newPassword) {
    return NextResponse.json({ error: 'Alle Felder erforderlich' }, { status: 400 });
  }

  const stored = getCurrentPassword();
  if (currentPassword !== stored) {
    return NextResponse.json({ error: 'Aktuelles Passwort ist falsch' }, { status: 401 });
  }
  if (newPassword.length < 6) {
    return NextResponse.json({ error: 'Neues Passwort muss mindestens 6 Zeichen haben' }, { status: 400 });
  }

  runtimePassword = newPassword;
  return NextResponse.json({ success: true });
}
