import React, { useState, useEffect } from 'react';
import { ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';

// Keep loading existing sections — they still render, just wrapped in journal chrome
import Overview from './sections/Overview';
import Chemotherapy from './sections/Chemotherapy';
import Biopsy from './sections/Biopsy';
import Benzimidazoles from './sections/Benzimidazoles';
import Ivermectin from './sections/Ivermectin';
import Combination from './sections/Combination';
import LionsMane from './sections/LionsMane';
import Cannabis from './sections/Cannabis';
import Probiotics from './sections/Probiotics';
import SleepApnea from './sections/SleepApnea';
import NutritionProtocol from './sections/NutritionProtocol';
import MedicalReports from './sections/MedicalReports';
import ProposedPlan from './sections/ProposedPlan';
import DrugProtocol from './sections/DrugProtocol';
import ShoppingList from './sections/ShoppingList';
import ActionPlan from './sections/ActionPlan';
import SymptomDiary from './sections/SymptomDiary';

/* ─── Collapsible Chapter ─── */
function Chapter({ id, number, title, subtitle, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section id={id} className="border-b border-gray-200 pb-2 mb-6">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start gap-4 py-3 text-left group">
        <span className="text-xs font-mono text-gray-400 pt-1 flex-shrink-0">{number}</span>
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-serif font-bold text-gray-900 group-hover:text-blue-800 transition-colors leading-tight">{title}</h2>
          {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400 mt-1.5 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 mt-1.5 flex-shrink-0" />}
      </button>
      {open && <div className="pt-2 pb-4">{children}</div>}
    </section>
  );
}

/* ─── Scroll-to-top ─── */
function ScrollBtn() {
  const [v, setV] = useState(false);
  useEffect(() => { const fn = () => setV(window.scrollY > 600); window.addEventListener('scroll', fn, { passive: true }); return () => window.removeEventListener('scroll', fn); }, []);
  if (!v) return null;
  return <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-30 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg" aria-label="Scroll to top"><ChevronUp className="w-4 h-4" /></button>;
}

/* ════════════════════════ MAIN APP ════════════════════════ */
export default function App() {
  const toc = [
    { id: 'case', n: 'I', t: 'Case Overview' },
    { id: 'chemo', n: 'II', t: 'Standard Treatment: Temozolomide' },
    { id: 'biopsy-section', n: 'III', t: 'Biopsy Considerations' },
    { id: 'alt-protocols', n: 'IV', t: 'Alternative Protocols' },
    { id: 'supportive', n: 'V', t: 'Supportive Therapies' },
    { id: 'nutrition', n: 'VI', t: 'Nutrition Protocol' },
    { id: 'medical', n: 'VII', t: 'Medical Records' },
    { id: 'protocol', n: 'VIII', t: 'Treatment Protocol' },
    { id: 'supplies', n: 'IX', t: 'Supplies & Procurement' },
    { id: 'diary', n: 'X', t: 'Medical Diary' },
    { id: 'actionplan', n: 'XI', t: 'Action Plan' },
    { id: 'care', n: 'XII', t: 'Proposed Care Protocol' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) { const y = el.getBoundingClientRect().top + window.pageYOffset - 20; window.scrollTo({ top: y, behavior: 'smooth' }); }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── Minimal Header ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="text-sm font-serif font-bold text-gray-900">The Quest for the Cure</span>
          <span className="text-xs text-gray-400 font-mono">Case Study</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">

        {/* ── Title Page ── */}
        <div className="border-b-2 border-gray-900 pb-8 mb-10">
          <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">A Case Study on Cancer Management</p>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 leading-tight mb-4">
            The Quest for the Cure for Cancer
          </h1>
          <p className="text-lg font-serif text-gray-600 leading-relaxed mb-4">
            A comprehensive compilation of research, medical records, treatment protocols, and clinical observations in the case of a 64-year-old female with suspected infiltrative glioma.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            This document integrates conventional oncology, alternative therapeutic research, nutritional science, and real-time clinical data to inform treatment decisions. All claims are linked to peer-reviewed sources. Alternative approaches discussed herein are investigational and not mainstream-approved. This compilation is maintained as a living document and updated as new information becomes available.
          </p>
          <p className="text-xs text-gray-400 font-mono">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* ── Companion Reports ── */}
        <div className="mb-10 border border-gray-200 rounded p-5">
          <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide font-mono">Companion Reports</h3>
          <div className="space-y-2">
            <a href="#/biopsy-methodology" className="flex items-center justify-between p-3 border border-gray-200 rounded hover:bg-gray-50 transition-colors group">
              <div>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-800">Biopsy Methodology &amp; Diagnostic Deep Dive</p>
                <p className="text-xs text-gray-500">PCR analysis, diagnostic staircase, all possible diagnoses, scenario planning</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
            </a>
            <a href="#/doxycycline-anomaly" className="flex items-center justify-between p-3 border border-gray-200 rounded hover:bg-gray-50 transition-colors group">
              <div>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-800">The Doxycycline Anomaly</p>
                <p className="text-xs text-gray-500">Integrated imaging &amp; clinical hypothesis — occult aggravating co-factor</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
            </a>
          </div>
        </div>

        {/* ── Table of Contents ── */}
        <div className="mb-10">
          <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide font-mono">Contents</h3>
          <div className="border-t border-gray-200">
            {toc.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="w-full flex items-center gap-4 py-2.5 border-b border-gray-100 text-left hover:bg-gray-50 transition-colors">
                <span className="text-xs font-mono text-gray-400 w-8 flex-shrink-0">{item.n}</span>
                <span className="text-sm text-gray-700 hover:text-gray-900">{item.t}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════
            CHAPTERS — wrapping existing sections
            ════════════════════════════════════════ */}

        <Chapter id="case" number="I" title="Case Overview" subtitle="Patient profile, imaging, and current status" defaultOpen={true}>
          <Overview />
        </Chapter>

        <Chapter id="chemo" number="II" title="Standard Treatment: Temozolomide" subtitle="Conventional chemotherapy — the Stupp protocol and its limitations">
          <Chemotherapy />
        </Chapter>

        <Chapter id="biopsy-section" number="III" title="Biopsy Considerations" subtitle="Risks, benefits, needle-tract seeding, and non-invasive alternatives">
          <Biopsy />
        </Chapter>

        <Chapter id="alt-protocols" number="IV" title="Alternative Protocols" subtitle="Repurposed anti-parasitic drugs with documented anti-cancer mechanisms">
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-serif font-bold text-gray-900 mb-1 border-b border-gray-100 pb-1">IV.a &ensp; Benzimidazoles: Fenbendazole &amp; Mebendazole</h3>
              <Benzimidazoles />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-gray-900 mb-1 border-b border-gray-100 pb-1">IV.b &ensp; Ivermectin</h3>
              <Ivermectin />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-gray-900 mb-1 border-b border-gray-100 pb-1">IV.c &ensp; Combination Therapy</h3>
              <Combination />
            </div>
          </div>
        </Chapter>

        <Chapter id="supportive" number="V" title="Supportive Therapies" subtitle="Neuroprotection, neuroregeneration, and adjunctive agents">
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-serif font-bold text-gray-900 mb-1 border-b border-gray-100 pb-1">V.a &ensp; Lion{"'"}s Mane Mushroom</h3>
              <LionsMane />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-gray-900 mb-1 border-b border-gray-100 pb-1">V.b &ensp; Cannabis &amp; Cannabinoids</h3>
              <Cannabis />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-gray-900 mb-1 border-b border-gray-100 pb-1">V.c &ensp; Probiotics &amp; Gut-Brain Axis</h3>
              <Probiotics />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-gray-900 mb-1 border-b border-gray-100 pb-1">V.d &ensp; Sleep, Hypoxia &amp; Brain Health</h3>
              <SleepApnea />
            </div>
          </div>
        </Chapter>

        <Chapter id="nutrition" number="VI" title="Nutrition Protocol" subtitle="Anti-cancer Mediterranean diet, meal planning, and metabolic strategy">
          <NutritionProtocol />
        </Chapter>

        <Chapter id="medical" number="VII" title="Medical Records" subtitle="Hospital reports, imaging, and laboratory data — February 2026">
          <MedicalReports />
        </Chapter>

        <Chapter id="protocol" number="VIII" title="Treatment Protocol" subtitle="12-week physician-monitored drug and supplement regimen">
          <DrugProtocol />
        </Chapter>

        <Chapter id="supplies" number="IX" title="Supplies &amp; Procurement" subtitle="Product sourcing, dosages, and purchase links">
          <ShoppingList />
        </Chapter>

        <Chapter id="diary" number="X" title="Medical Diary" subtitle="Daily symptom tracking and medication logging">
          <SymptomDiary />
        </Chapter>

        <Chapter id="actionplan" number="XI" title="Action Plan" subtitle="12-step implementation roadmap with status tracking">
          <ActionPlan />
        </Chapter>

        <Chapter id="care" number="XII" title="Proposed Care Protocol" subtitle="Comprehensive treatment plan integrating all modalities">
          <ProposedPlan />
        </Chapter>

        {/* ── Footer ── */}
        <footer className="border-t border-gray-200 pt-6 pb-10 mt-10 text-center">
          <p className="text-xs text-gray-400 leading-relaxed mb-2">This document is a continuously updated compilation of research, clinical data, and treatment protocols. All studies and sources are linked for independent verification. Alternative approaches are investigational.</p>
          <p className="text-xs text-gray-400 font-mono">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <div className="flex gap-3 justify-center mt-4">
            <a href="#/biopsy-methodology" className="text-xs text-gray-500 hover:text-gray-900 border border-gray-300 rounded px-3 py-1.5">Biopsy Methodology</a>
            <a href="#/doxycycline-anomaly" className="text-xs text-gray-500 hover:text-gray-900 border border-gray-300 rounded px-3 py-1.5">Doxycycline Anomaly</a>
          </div>
        </footer>
      </main>

      <ScrollBtn />
    </div>
  );
}
