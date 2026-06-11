import { NextRequest, NextResponse } from 'next/server';
import { newsletterStore } from '@/lib/store';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Ungültige E-Mail-Adresse' }, { status: 400 });
    }

    const sub = newsletterStore.add(email, name ?? '', 'website');
    if (!sub) {
      return NextResponse.json({ message: 'Bereits angemeldet' }, { status: 200 });
    }
    return NextResponse.json({ message: 'Erfolgreich angemeldet' }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Interner Fehler' }, { status: 500 });
  }
}
