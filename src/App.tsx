import React, { useState, useEffect } from 'react';
import { PortalHeader } from './components/PortalHeader.tsx';
import { PortalHub } from './components/PortalHub.tsx';
import { IframeViewer } from './components/IframeViewer.tsx';
import { ViewMode } from './types.ts';
import { ExternalLink, Check, Bell } from 'lucide-react';

const TARGET_URL = 'https://educa.juazeiro.ba.gov.br';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('hub');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleOpenExternal = () => {
    showToast('Abrindo Educa Juazeiro no navegador...');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Application Header */}
      <PortalHeader
        currentUrl={TARGET_URL}
        viewMode={viewMode}
        onToggleViewMode={(mode) => setViewMode(mode)}
        onOpenExternal={handleOpenExternal}
      />

      {/* Main View Area */}
      <div className="flex-1 flex flex-col">
        {viewMode === 'hub' ? (
          <PortalHub
            url={TARGET_URL}
            onOpenDirect={handleOpenExternal}
            onSwitchToEmbedded={() => setViewMode('embedded')}
          />
        ) : (
          <IframeViewer url={TARGET_URL} />
        )}
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2.5 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Bell className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Persistent Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Educa Juazeiro • Secretaria Municipal de Educação – Juazeiro/BA</span>
          <a
            id="footer-direct-link"
            href={TARGET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-700 flex items-center gap-1 font-medium transition-colors"
          >
            <span>{TARGET_URL}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </footer>
    </div>
  );
}
