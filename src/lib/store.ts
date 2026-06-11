// In-Memory-Speicher für Phase 1 (kein Datenbank-Setup nötig)
// Daten werden bei Server-Neustart zurückgesetzt

import { randomUUID } from 'crypto';

export interface Subscriber {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  source: 'website' | 'manual';
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}

const subscribers = new Map<string, Subscriber>();
const contacts = new Map<string, ContactSubmission>();

export const newsletterStore = {
  getAll(): Subscriber[] {
    return Array.from(subscribers.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },
  add(email: string, name = '', source: Subscriber['source'] = 'manual'): Subscriber | null {
    const exists = Array.from(subscribers.values()).find(
      (s) => s.email.toLowerCase() === email.toLowerCase()
    );
    if (exists) return null;
    const sub: Subscriber = { id: randomUUID(), email, name, createdAt: new Date().toISOString(), source };
    subscribers.set(sub.id, sub);
    return sub;
  },
  remove(id: string): boolean {
    return subscribers.delete(id);
  },
  count(): number {
    return subscribers.size;
  },
};

export const contactStore = {
  getAll(): ContactSubmission[] {
    return Array.from(contacts.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },
  add(data: Omit<ContactSubmission, 'id' | 'createdAt' | 'read'>): ContactSubmission {
    const sub: ContactSubmission = {
      id: randomUUID(),
      ...data,
      createdAt: new Date().toISOString(),
      read: false,
    };
    contacts.set(sub.id, sub);
    return sub;
  },
  markRead(id: string): boolean {
    const c = contacts.get(id);
    if (!c) return false;
    c.read = true;
    return true;
  },
  remove(id: string): boolean {
    return contacts.delete(id);
  },
  count(): number {
    return contacts.size;
  },
  unreadCount(): number {
    return Array.from(contacts.values()).filter((c) => !c.read).length;
  },
};
