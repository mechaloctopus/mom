import React from 'react';
import { ExternalLink, FileText, MessageCircle, AlertTriangle, CheckCircle, XCircle, Beaker, BookOpen } from 'lucide-react';

export function StudyCard({ title, description, url, type = 'study', findings }) {
  const icons = {
    study: <Beaker className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />,
    article: <BookOpen className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />,
    trial: <FileText className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />,
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="study-link group">
      <div className="flex items-start gap-3">
        {icons[type] || icons.study}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-800 group-hover:text-primary-700 leading-snug">
            {title}
          </p>
          {description && (
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{description}</p>
          )}
          {findings && (
            <p className="text-xs text-emerald-700 bg-emerald-50 rounded-lg px-2.5 py-1.5 mt-2 leading-relaxed font-medium">
              {findings}
            </p>
          )}
          <div className="flex items-center gap-1.5 mt-2 text-xs text-primary-500 font-medium">
            <ExternalLink className="w-3 h-3" />
            <span className="truncate">{url.length > 55 ? url.substring(0, 55) + '...' : url}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export function TestimonialCard({ description, url, outcome = 'positive' }) {
  const outcomeConfig = {
    positive: { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, border: 'border-emerald-100', bg: 'from-emerald-50 to-green-50' },
    negative: { icon: <XCircle className="w-4 h-4 text-red-500" />, border: 'border-red-100', bg: 'from-red-50 to-orange-50' },
    mixed: { icon: <AlertTriangle className="w-4 h-4 text-amber-500" />, border: 'border-amber-100', bg: 'from-amber-50 to-yellow-50' },
  };

  const config = outcomeConfig[outcome] || outcomeConfig.positive;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className={`block p-4 rounded-xl bg-gradient-to-br ${config.bg} border ${config.border} mb-3 hover:shadow-md transition-all duration-200`}>
      <div className="flex items-start gap-3">
        {config.icon}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
          <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400 font-medium">
            <ExternalLink className="w-3 h-3" />
            <span>View source</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export function StatCard({ value, label, sublabel, color = 'blue' }) {
  const colors = {
    blue: 'from-primary-500 to-primary-600',
    red: 'from-red-500 to-red-600',
    green: 'from-emerald-500 to-emerald-600',
    amber: 'from-amber-500 to-amber-600',
    purple: 'from-purple-500 to-purple-600',
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color]} rounded-2xl p-4 text-white`}>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs font-medium opacity-90 mt-1">{label}</p>
      {sublabel && <p className="text-xs opacity-70 mt-0.5">{sublabel}</p>}
    </div>
  );
}

export function ProConCard({ pros, cons }) {
  return (
    <div className="grid grid-cols-1 gap-3 mt-4">
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <h4 className="text-sm font-bold text-emerald-800">Arguments For</h4>
        </div>
        <ul className="space-y-2">
          {pros.map((pro, i) => (
            <li key={i} className="text-xs text-emerald-700 leading-relaxed flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-red-50 border border-red-100 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <XCircle className="w-4 h-4 text-red-600" />
          <h4 className="text-sm font-bold text-red-800">Arguments Against</h4>
        </div>
        <ul className="space-y-2">
          {cons.map((con, i) => (
            <li key={i} className="text-xs text-red-700 leading-relaxed flex items-start gap-2">
              <span className="text-red-400 mt-1">•</span>
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function InfoBox({ title, children, variant = 'info' }) {
  const variants = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    danger: 'bg-red-50 border-red-200 text-red-800',
    success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  };

  return (
    <div className={`${variants[variant]} border rounded-xl p-4 mb-4`}>
      {title && <p className="font-bold text-sm mb-1">{title}</p>}
      <div className="text-xs leading-relaxed">{children}</div>
    </div>
  );
}

export function SectionHeader({ icon, title, subtitle, color = 'primary' }) {
  const colors = {
    primary: 'from-primary-500 to-primary-700',
    red: 'from-red-500 to-red-700',
    green: 'from-emerald-500 to-emerald-700',
    amber: 'from-amber-500 to-amber-700',
    purple: 'from-purple-500 to-purple-700',
    pink: 'from-pink-500 to-pink-700',
    teal: 'from-teal-500 to-teal-700',
    orange: 'from-orange-500 to-orange-700',
  };

  return (
    <div className="mb-5">
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors[color]} flex items-center justify-center text-white`}>
          {icon}
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

export function Divider() {
  return <div className="border-t border-gray-100 my-5" />;
}

export function SectionLink({ to, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(to);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.replaceState(null, '', '#' + to);
    }
  };
  return <a href={'#' + to} onClick={handleClick} className="text-primary-600 underline hover:text-primary-800 font-medium">{children}</a>;
}

export function BackToNav() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', window.location.pathname);
  };
  return (
    <button onClick={handleClick} className="w-full mt-4 py-2 text-[11px] text-gray-400 hover:text-primary-600 transition-colors flex items-center justify-center gap-1 print:hidden">
      <span>↑</span> Back to top
    </button>
  );
}
