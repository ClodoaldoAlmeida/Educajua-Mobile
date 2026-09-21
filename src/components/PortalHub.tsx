import React, { useState } from 'react';
import {
  ExternalLink,
  GraduationCap,
  School,
  UserCheck,
  BookOpen,
  HelpCircle,
  Smartphone,
  ShieldCheck,
  Check,
  Copy,
  ArrowRight,
  Info,
  Clock,
  Sparkles,
  Phone,
  MapPin,
  Laptop
} from 'lucide-react';

interface PortalHubProps {
  url: string;
  onOpenDirect: () => void;
  onSwitchToEmbedded: () => void;
}

export const PortalHub: React.FC<PortalHubProps> = ({
  url,
  onOpenDirect,
  onSwitchToEmbedded,
}) => {
  const [copied, setCopied] = useState(false);
  const [autoOpenEnabled, setAutoOpenEnabled] = useState(() => {
    return localStorage.getItem('educa_auto_open') === 'true';
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleToggleAutoOpen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setAutoOpenEnabled(checked);
    localStorage.setItem('educa_auto_open', String(checked));
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 text-white p-6 sm:p-10 shadow-lg border border-emerald-700/30">
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Portal Oficial de Educação Municipal
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Educa Juazeiro – SEDUC
          </h2>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
            Ambiente virtual e pedagógico de gestão escolar da Secretaria Municipal de Educação
            de Juazeiro – Bahia. Acesse boletins, diários de classe, frequências e serviços acadêmicos.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              id="hero-launch-portal-btn"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenDirect}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Acessar Educa Juazeiro Agora</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              id="hero-try-embedded-btn"
              onClick={onSwitchToEmbedded}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-white/10 hover:bg-white/15 text-white border border-white/15 backdrop-blur-xs transition-colors"
            >
              <Laptop className="w-4 h-4" />
              <span>Ver no Navegador Integrado</span>
            </button>
          </div>

          {/* Quick verification badge */}
          <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Conexão Segura e Criptografada (SSL)
            </span>
            <span className="text-slate-500">•</span>
            <span className="flex items-center gap-1.5 font-mono text-emerald-300">
              {url}
            </span>
            <button
              id="hero-copy-url-btn"
              onClick={handleCopy}
              className="hover:text-white transition-colors underline decoration-slate-500 underline-offset-2 flex items-center gap-1"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copiado!' : 'Copiar link'}
            </button>
          </div>
        </div>

        {/* Decorative backdrop shapes */}
        <div className="absolute -right-12 -bottom-16 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute right-12 top-6 w-48 h-48 rounded-full bg-teal-400/10 blur-2xl pointer-events-none" />
      </section>

      {/* Target Audiences / Profiles Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">Perfis de Atendimento</h3>
            <p className="text-xs text-slate-500">Selecione o seu perfil para saber o que você pode acessar no sistema</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card: Professores */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-slate-900">Professores & Educadores</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Diário eletrônico, registro de planos de aula, chamada de presença, lançamento de notas e acompanhamento do rendimento das turmas.
              </p>
            </div>
            <div className="pt-4 mt-2 border-t border-slate-100">
              <a
                id="profile-prof-link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 group"
              >
                <span>Acessar Diário Escolar</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card: Alunos e Responsáveis */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-100/70 text-teal-700 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-slate-900">Alunos & Responsáveis</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consulta de boletins bimestrais, faltas acumuladas, calendário letivo, avisos da escola e declarações de matrícula.
              </p>
            </div>
            <div className="pt-4 mt-2 border-t border-slate-100">
              <a
                id="profile-student-link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1 group"
              >
                <span>Consultar Boletim</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card: Gestão Escolar */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-blue-700 flex items-center justify-center">
                <School className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-slate-900">Gestores & Secretaria</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Administração de turmas, matrículas, lotação de docentes, emissão de históricos escolares e relatórios institucionais da rede.
              </p>
            </div>
            <div className="pt-4 mt-2 border-t border-slate-100">
              <a
                id="profile-gestao-link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-1 group"
              >
                <span>Acessar Painel Administrativo</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Instructions & Access Guide */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Login Instructions */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-5 space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-50 text-amber-700">
              <UserCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">Instruções para Primeiro Acesso</h4>
          </div>

          <div className="space-y-3 text-xs text-slate-600">
            <div className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold shrink-0">1</span>
              <div>
                <strong className="text-slate-800">Acesse o portal:</strong> Clique no botão principal para ser direcionado à tela de login oficial.
              </div>
            </div>
            <div className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold shrink-0">2</span>
              <div>
                <strong className="text-slate-800">Identificação:</strong> Insira seu usuário ou CPF fornecido pela coordenação da sua unidade escolar.
              </div>
            </div>
            <div className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold shrink-0">3</span>
              <div>
                <strong className="text-slate-800">Esqueceu a senha?</strong> Caso não lembre seus dados de acesso, entre em contato direto com a secretaria da sua escola municipal ou com a SEDUC Juazeiro.
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              id="instructions-direct-login-btn"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors"
            >
              <span>Ir para a Página de Login</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Mobile Shortcut / Install Tip */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-5 space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
              <Smartphone className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">Como Usar como Aplicativo no Celular</h4>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Você pode instalar este atalho diretamente na tela de início do seu smartphone para abrir o Educa Juazeiro em 1 toque:
          </p>

          <div className="space-y-2.5 text-xs text-slate-600">
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
              <span className="font-semibold text-slate-800 block">No Android (Google Chrome):</span>
              Toque no menu de três pontos <span className="font-mono text-slate-700">⋮</span> e selecione <span className="font-semibold text-slate-800">"Adicionar à tela inicial"</span> ou <span className="font-semibold text-slate-800">"Instalar aplicativo"</span>.
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
              <span className="font-semibold text-slate-800 block">No iPhone / iPad (Safari):</span>
              Toque no botão Compartilhar <span className="font-semibold text-slate-700">[↑]</span> e selecione <span className="font-semibold text-slate-800">"Adicionar à Tela de Início"</span>.
            </div>
          </div>
        </div>
      </section>

      {/* Official Municipality & Contacts Footer Area */}
      <section className="bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Canais Oficiais</h4>
            <p className="text-sm font-semibold text-slate-900">Secretaria Municipal de Educação de Juazeiro (SEDUC)</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              id="pmj-portal-link"
              href="https://juazeiro.ba.gov.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1"
            >
              <span>Portal da Prefeitura de Juazeiro</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2 text-xs text-slate-600 border-t border-slate-200/80">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Rua São Pedro, Centro – Juazeiro, Bahia – CEP 48903-510</span>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Atendimento SEDUC Juazeiro / Suporte às Unidades Escolares</span>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Segunda a Sexta-feira: 08:00 às 14:00</span>
          </div>
        </div>
      </section>
    </main>
  );
};
