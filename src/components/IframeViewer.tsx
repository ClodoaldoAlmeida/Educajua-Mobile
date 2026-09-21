import React, { useState } from 'react';
import { ExternalLink, RefreshCw, AlertCircle, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

interface IframeViewerProps {
  url: string;
}

export const IframeViewer: React.FC<IframeViewerProps> = ({ url }) => {
  const [reloadKey, setReloadKey] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  const handleReload = () => {
    setHasLoaded(false);
    setReloadKey((prev) => prev + 1);
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-100 min-h-[calc(100vh-70px)]">
      {/* Notice Bar */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-amber-900">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Atenção sobre segurança:</strong> Portais governamentais com login único (Keycloak)
              podem restringir exibição em quadros internos. Se a página ficar em branco, clique em "Abrir no Navegador".
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              id="reload-frame-btn"
              onClick={handleReload}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-100/80 hover:bg-amber-200/80 text-amber-800 font-medium transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Recarregar
            </button>
            <a
              id="open-direct-from-banner"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-2xs transition-colors"
            >
              <span>Abrir no Navegador</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex-1 relative w-full h-[calc(100vh-120px)] bg-white">
        <iframe
          key={reloadKey}
          id="portal-iframe"
          src={url}
          title="Educa Juazeiro - Portal Oficial"
          className="w-full h-full border-0"
          onLoad={() => setHasLoaded(true)}
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads"
        />

        {/* Fallback & Helper Card shown floating at bottom for rapid user assistance */}
        <div className="absolute bottom-4 right-4 max-w-sm bg-white/95 backdrop-blur-xs p-4 rounded-xl border border-slate-200 shadow-lg text-slate-800 text-xs">
          <div className="flex items-start gap-2.5">
            <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Acesso Direto ao Educa Juazeiro</p>
              <p className="text-slate-600 mt-0.5 leading-relaxed">
                Para efetuar login como professor, aluno ou gestor com todas as funcionalidades e cookies habilitados, recomendamos a janela direta.
              </p>
              <a
                id="floating-portal-btn"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex items-center gap-1.5 font-medium text-emerald-700 hover:text-emerald-800 hover:underline"
              >
                <span>Acessar {url.replace('https://', '')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
