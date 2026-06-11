'use client';

import { useState } from 'react';

const PUBLIC_ASSETS = [
  { name: 'file.svg', url: '/file.svg', type: 'SVG' },
  { name: 'globe.svg', url: '/globe.svg', type: 'SVG' },
  { name: 'next.svg', url: '/next.svg', type: 'SVG' },
  { name: 'vercel.svg', url: '/vercel.svg', type: 'SVG' },
  { name: 'window.svg', url: '/window.svg', type: 'SVG' },
];

export default function MediaPage() {
  const [copied, setCopied] = useState<string | null>(null);

  function copyUrl(url: string) {
    const full = `${window.location.origin}${url}`;
    navigator.clipboard.writeText(full);
    setCopied(url);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Medienbibliothek</h1>
          <p className="text-slate-500 text-sm mt-1">Öffentliche Dateien im /public-Ordner</p>
        </div>
      </div>

      {/* Info-Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
        <p className="font-semibold mb-1">💡 Wie füge ich neue Bilder hinzu?</p>
        <p>Lege Bilddateien direkt in den <code className="bg-blue-100 px-1 rounded">/public/images/</code>-Ordner im Projektverzeichnis. Nach einem Deployment sind sie über <code className="bg-blue-100 px-1 rounded">/images/dateiname.jpg</code> erreichbar. Upload-Funktion folgt in Phase 2.</p>
      </div>

      {/* Vorhandene Dateien */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800">Vorhandene Dateien ({PUBLIC_ASSETS.length})</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-5">
          {PUBLIC_ASSETS.map((asset) => (
            <div key={asset.url} className="group border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors">
              <div className="bg-slate-50 p-4 flex items-center justify-center h-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset.url} alt={asset.name} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-2 border-t border-slate-100">
                <p className="text-xs text-slate-600 truncate" title={asset.name}>{asset.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-slate-400">{asset.type}</span>
                  <button
                    onClick={() => copyUrl(asset.url)}
                    className="text-xs text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    {copied === asset.url ? '✓ Kopiert' : 'URL kopieren'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
