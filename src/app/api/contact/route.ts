import { NextRequest, NextResponse } from 'next/server';
import { contactStore } from '@/lib/store';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, E-Mail und Nachricht sind erforderlich' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Ungültige E-Mail-Adresse' }, { status: 400 });
    }

    contactStore.add({ name, email, subject: subject ?? 'Allgemeine Anfrage', message });
    return NextResponse.json({ message: 'Nachricht erfolgreich gesendet' }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Interner Fehler' }, { status: 500 });
  }
}
