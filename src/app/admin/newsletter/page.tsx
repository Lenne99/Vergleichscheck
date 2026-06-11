'use client';

import { useState, useEffect, useCallback } from 'react';

interface Subscriber {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  source: 'website' | 'manual';
}

export default function NewsletterPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [newEmail, setNewEmail] = useState('');
  const [newName, setNewName] = useState('');
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    const r = await fetch('/api/admin/newsletter');
    const d = await r.json();
    setSubscribers(d.subscribers ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setError(''); setSuccess('');
    setAdding(true);
    const r = await fetch('/api/admin/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: newEmail, name: newName }),
    });
    const d = await r.json();
    if (!r.ok) { setError(d.error); } else {
      setSuccess('Abonnent hinzugefügt');
      setNewEmail(''); setNewName('');
      load();
    }
    setAdding(false);
  }

  async function handleDelete(id: string) {
    if (!confirm('Abonnent wirklich entfernen?')) return;
    await fetch(`/api/admin/newsletter?id=${id}`, { method: 'DELETE' });
    load();
  }

  function exportCSV() {
    const rows = [['E-Mail', 'Name', 'Datum', 'Quelle'], ...subscribers.map(s => [s.email, s.name, new Date(s.createdAt).toLocaleDateString('de-DE'), s.source])];
    const csv = rows.map(r => r.join(',')).join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = 'abonnenten.csv';
    a.click();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Newsletter</h1>
          <p className="text-slate-500 text-sm mt-1">{subscribers.length} Abonnenten gesamt</p>
        </div>
        {subscribers.length > 0 && (
          <button onClick={exportCSV} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors">
            CSV exportieren
          </button>
        )}
      </div>

      {/* Abonnent hinzufügen */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="font-semibold text-slate-800 mb-4">Abonnent manuell hinzufügen</h2>
        <form onSubmit={handleAdd} className="flex flex-wrap gap-3">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Name (optional)"
            className="flex-1 min-w-[160px] px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="E-Mail-Adresse *"
            required
            className="flex-1 min-w-[200px] px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            disabled={adding}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-300 text-white rounded-lg text-sm font-medium transition-colors"
          >
            {adding ? 'Wird hinzugefügt…' : '+ Hinzufügen'}
          </button>
        </form>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-600 text-sm mt-2">✓ {success}</p>}
      </div>

      {/* Abonnenten-Liste */}
      <div className="bg-white rounded-xl border border-slate-200">
        {loading ? (
          <div className="p-8 text-center text-slate-400 text-sm">Wird geladen…</div>
        ) : subscribers.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-slate-400 mb-2">Noch keine Abonnenten</p>
            <p className="text-xs text-slate-300">Füge manuell Abonnenten hinzu oder aktiviere das Newsletter-Formular auf der Website</p>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left px-5 py-3 text-slate-500 font-medium">Name</th>
                <th className="text-left px-5 py-3 text-slate-500 font-medium">E-Mail</th>
                <th className="text-left px-5 py-3 text-slate-500 font-medium hidden md:table-cell">Datum</th>
                <th className="text-left px-5 py-3 text-slate-500 font-medium hidden md:table-cell">Quelle</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((s) => (
                <tr key={s.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-slate-800">{s.name || '–'}</td>
                  <td className="px-5 py-3 text-slate-600">{s.email}</td>
                  <td className="px-5 py-3 text-slate-400 hidden md:table-cell">
                    {new Date(s.createdAt).toLocaleDateString('de-DE')}
                  </td>
                  <td className="px-5 py-3 hidden md:table-cell">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${s.source === 'website' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                      {s.source === 'website' ? 'Website' : 'Manuell'}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <button
                      onClick={() => handleDelete(s.id)}
                      className="text-red-400 hover:text-red-600 transition-colors text-xs"
                    >
                      Entfernen
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
