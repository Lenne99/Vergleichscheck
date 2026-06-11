'use client';

import { useState, useEffect, useCallback } from 'react';

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Contact | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const r = await fetch('/api/admin/contacts');
    const d = await r.json();
    setContacts(d.contacts ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  async function handleMarkRead(id: string) {
    await fetch(`/api/admin/contacts?id=${id}`, { method: 'PATCH' });
    load();
    if (selected?.id === id) setSelected((p) => p ? { ...p, read: true } : p);
  }

  async function handleDelete(id: string) {
    if (!confirm('Anfrage wirklich löschen?')) return;
    await fetch(`/api/admin/contacts?id=${id}`, { method: 'DELETE' });
    if (selected?.id === id) setSelected(null);
    load();
  }

  function openContact(c: Contact) {
    setSelected(c);
    if (!c.read) handleMarkRead(c.id);
  }

  const unread = contacts.filter((c) => !c.read).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Kontaktanfragen</h1>
        <p className="text-slate-500 text-sm mt-1">
          {contacts.length} Anfragen gesamt
          {unread > 0 && <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-xs">{unread} ungelesen</span>}
        </p>
      </div>

      <div className="flex gap-6">
        {/* Liste */}
        <div className="flex-1 bg-white rounded-xl border border-slate-200 overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-slate-400 text-sm">Wird geladen…</div>
          ) : contacts.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-slate-400 mb-2">Noch keine Kontaktanfragen</p>
              <p className="text-xs text-slate-300">Anfragen werden hier angezeigt, sobald das Kontaktformular ausgefüllt wird</p>
            </div>
          ) : (
            <ul>
              {contacts.map((c) => (
                <li
                  key={c.id}
                  onClick={() => openContact(c)}
                  className={`px-5 py-4 border-b border-slate-50 cursor-pointer hover:bg-slate-50 transition-colors ${selected?.id === c.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        {!c.read && <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>}
                        <p className={`text-sm truncate ${!c.read ? 'font-semibold text-slate-900' : 'text-slate-700'}`}>{c.name}</p>
                      </div>
                      <p className="text-xs text-slate-400 truncate">{c.subject}</p>
                    </div>
                    <p className="text-xs text-slate-300 shrink-0">{new Date(c.createdAt).toLocaleDateString('de-DE')}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Detail */}
        {selected && (
          <div className="w-96 bg-white rounded-xl border border-slate-200 p-6 space-y-4 self-start">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-slate-900">{selected.name}</h3>
                <a href={`mailto:${selected.email}`} className="text-sm text-blue-500 hover:underline">{selected.email}</a>
              </div>
              <button onClick={() => setSelected(null)} className="text-slate-300 hover:text-slate-600 text-lg leading-none">✕</button>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1">Betreff</p>
              <p className="text-sm font-medium text-slate-800">{selected.subject}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1">Nachricht</p>
              <p className="text-sm text-slate-700 whitespace-pre-wrap bg-slate-50 rounded-lg p-3">{selected.message}</p>
            </div>
            <p className="text-xs text-slate-300">{new Date(selected.createdAt).toLocaleString('de-DE')}</p>
            <div className="flex gap-2 pt-2 border-t border-slate-100">
              <a
                href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject)}`}
                className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium text-center transition-colors"
              >
                Antworten
              </a>
              <button
                onClick={() => handleDelete(selected.id)}
                className="px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-sm font-medium transition-colors"
              >
                Löschen
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
