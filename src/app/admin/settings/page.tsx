'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [pwError, setPwError] = useState('');
  const [pwSuccess, setPwSuccess] = useState('');
  const [pwLoading, setPwLoading] = useState(false);

  async function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault();
    setPwError(''); setPwSuccess('');
    if (newPw.length < 6) { setPwError('Neues Passwort muss mindestens 6 Zeichen haben'); return; }
    if (newPw !== confirmPw) { setPwError('Passwörter stimmen nicht überein'); return; }
    setPwLoading(true);

    const r = await fetch('/api/admin/auth/password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentPassword: currentPw, newPassword: newPw }),
    });
    const d = await r.json();
    if (!r.ok) { setPwError(d.error); } else {
      setPwSuccess('Passwort erfolgreich geändert');
      setCurrentPw(''); setNewPw(''); setConfirmPw('');
    }
    setPwLoading(false);
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Einstellungen</h1>
        <p className="text-slate-500 text-sm mt-1">Admin-Konfiguration und Sicherheit</p>
      </div>

      {/* Website-Info */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
        <h2 className="font-semibold text-slate-800">Website-Informationen</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-slate-400 text-xs mb-1">Website-Name</p>
            <p className="font-medium text-slate-800">vergleichscheck.com</p>
          </div>
          <div>
            <p className="text-slate-400 text-xs mb-1">Admin-Benutzer</p>
            <p className="font-medium text-slate-800">Lenne</p>
          </div>
          <div>
            <p className="text-slate-400 text-xs mb-1">E-Mail</p>
            <p className="font-medium text-slate-800">admin@vergleichscheck.com</p>
          </div>
          <div>
            <p className="text-slate-400 text-xs mb-1">Phase</p>
            <p className="font-medium text-slate-800">Phase 1 – MVP</p>
          </div>
        </div>
      </div>

      {/* Passwort ändern */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="font-semibold text-slate-800 mb-4">Passwort ändern</h2>
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Aktuelles Passwort</label>
            <input
              type="password"
              value={currentPw}
              onChange={(e) => setCurrentPw(e.target.value)}
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Neues Passwort</label>
            <input
              type="password"
              value={newPw}
              onChange={(e) => setNewPw(e.target.value)}
              required
              minLength={6}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Passwort bestätigen</label>
            <input
              type="password"
              value={confirmPw}
              onChange={(e) => setConfirmPw(e.target.value)}
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          {pwError && <p className="text-red-500 text-sm">{pwError}</p>}
          {pwSuccess && <p className="text-green-600 text-sm">✓ {pwSuccess}</p>}
          <button
            type="submit"
            disabled={pwLoading}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-300 text-white rounded-lg text-sm font-medium transition-colors"
          >
            {pwLoading ? 'Wird gespeichert…' : 'Passwort speichern'}
          </button>
        </form>
      </div>

      {/* Session-Info */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="font-semibold text-slate-800 mb-3">Sicherheit</h2>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between py-2 border-b border-slate-50">
            <span className="text-slate-600">Session-Dauer</span>
            <span className="text-slate-800 font-medium">24 Stunden</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-slate-50">
            <span className="text-slate-600">Login-Versuche bis Sperre</span>
            <span className="text-slate-800 font-medium">5 Versuche</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-slate-600">Sperrzeit bei zu vielen Versuchen</span>
            <span className="text-slate-800 font-medium">15 Minuten</span>
          </div>
        </div>
      </div>
    </div>
  );
}
