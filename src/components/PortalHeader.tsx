import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Globe, ShieldCheck, Sparkles, LayoutDashboard, MonitorPlay } from 'lucide-react';
import { ViewMode } from '../types.ts';

interface PortalHeaderProps {
  currentUrl: string;
  viewMode: ViewMode;
  onToggleViewMode: (mode: ViewMode) => void;
  onOpenExternal: () => void;
}

export const PortalHeader: React.FC<PortalHeaderProps> = ({
  currentUrl,
  viewMode,
  onToggleViewMode,
  onOpenExternal,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (e) {
      console.error('Falha ao copiar:', e);
    }
  };

  return (
    <header className="bg-white border-b border-emerald-100 shadow-xs sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-sm ring-2 ring-emerald-500/20">
              <span className="font-bold text-lg tracking-tight">EJ</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-slate-900 tracking-tight">Educa Juazeiro</h1>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  SEDUC Oficial
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Secretaria Municipal de Educação de Juazeiro – Bahia
              </p>
            </div>
          </div>

          {/* Current Target Address bar */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-lg px-3 py-1.5 text-xs text-slate-600 max-w-md w-full">
            <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-mono text-slate-700 truncate select-all">{currentUrl}</span>
            <button
              id="copy-portal-url-btn"
              onClick={handleCopy}
              title="Copiar endereço do portal"
              className="ml-auto inline-flex items-center gap-1 text-slate-500 hover:text-emerald-700 font-medium px-1.5 py-0.5 rounded hover:bg-slate-200/60 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 text-xs">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-xs">Copiar</span>
                </>
              )}
            </button>
          </div>

          {/* Actions & Navigation Modes */}
          <div className="flex items-center gap-2">
            <div className="bg-slate-100 p-0.5 rounded-lg flex items-center text-xs">
              <button
                id="view-hub-btn"
                onClick={() => onToggleViewMode('hub')}
                className={`px-3 py-1.5 rounded-md font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === 'hub'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                Painel
              </button>
              <button
                id="view-embedded-btn"
                onClick={() => onToggleViewMode('embedded')}
                className={`px-3 py-1.5 rounded-md font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === 'embedded'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <MonitorPlay className="w-3.5 h-3.5" />
                Embutido
              </button>
            </div>

            <a
              id="open-portal-external-link"
              href={currentUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenExternal}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-sm transition-all duration-150 cursor-pointer"
            >
              <span>Abrir Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
