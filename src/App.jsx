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
import DrugProtocol from './sections/DrugProtocol';
import ShoppingList from './sections/ShoppingList';

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
    { id: 'metabolic', n: 'VI', t: 'Metabolic Therapy' },
    { id: 'phoenix-tears', n: 'VII', t: 'Phoenix Tears Oil Blend' },
    { id: 'protocol', n: 'VIII', t: 'Drug Protocol (Mebendazole Option)' },
    { id: 'supplies', n: 'IX', t: 'Supplies & Procurement' },
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
            <a href="#/phoenix-tears-study" className="flex items-center justify-between p-3 border border-gray-200 rounded hover:bg-gray-50 transition-colors group">
              <div>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-800">Phoenix Tears — Research Study Proposal</p>
                <p className="text-xs text-gray-500">Multi-compound DMSO-enhanced topical formulation — full study design with evidence review</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
            </a>
            <a href="#/hyponatremia-final" className="flex items-center justify-between p-3 border border-blue-300 bg-blue-50 rounded hover:bg-blue-100 transition-colors group">
              <div>
                <p className="text-sm font-semibold text-blue-900 group-hover:text-blue-800">Hyponatremia Clinical Brief (for Tumor Panel)</p>
                <p className="text-xs text-blue-700">Concise case argument for baseline normonatremic imaging — directed at neuro-oncology team</p>
              </div>
              <ExternalLink className="w-4 h-4 text-blue-400 flex-shrink-0" />
            </a>
            <a href="#/hyponatremia-hypothesis" className="flex items-center justify-between p-3 border border-gray-200 rounded hover:bg-gray-50 transition-colors group">
              <div>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-800">The Hyponatremia Hypothesis (Full Technical Version)</p>
                <p className="text-xs text-gray-500">Extended research compilation — chronic polydipsia-induced osmotic injury, BBB disruption, and detailed literature review</p>
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

        <Chapter id="metabolic" number="VI" title="Metabolic Therapy" subtitle="Anti-cancer dietary strategy, ketogenic principles, and metabolic targeting">
          <NutritionProtocol />
        </Chapter>

        <Chapter id="phoenix-tears" number="VII" title="Phoenix Tears Oil Blend" subtitle="Proposed university study formulation — modified Makis protocol with DMSO-compatible topical delivery">
          <section>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              <strong>Phoenix Tears Oil Blend</strong> is a proposed formulation for a university research study modifying the Makis antiparasitic cancer protocol for topical transdermal delivery via DMSO-compatible carrier base. The formulation combines pharmaceutical-grade antiparasitic compounds, full-spectrum CBD, and botanical essential oils with documented anti-cancer properties in a high-polyphenol olive oil carrier. Dosing: 1 mL (one full dropper) applied topically 4 times daily at ~6-hour intervals. Reference subject: 170 lb (77.3 kg) adult.
            </p>

            <h3 className="text-sm font-bold text-gray-900 mb-2">Master Formula — 1 Liter Batch</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-gray-300">
                <thead><tr className="bg-gray-100 border-b border-gray-300">
                  <th className="p-2 text-left font-semibold text-gray-700">Ingredient</th>
                  <th className="p-2 text-left font-semibold text-gray-700">Amount / 1L</th>
                  <th className="p-2 text-left font-semibold text-gray-700">Per Dropper (1 mL)</th>
                  <th className="p-2 text-left font-semibold text-gray-700">Daily (4 mL)</th>
                </tr></thead>
                <tbody className="text-gray-700 text-xs">
                  <tr className="border-b border-gray-200 bg-gray-50"><td colSpan="4" className="p-2 font-bold text-gray-900">Antiparasitic Compounds (pharmaceutical grade)</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-semibold">Fenbendazole (powder)</td><td className="p-2 font-mono">55,000 mg (55 g)</td><td className="p-2 font-mono font-semibold">55.0 mg</td><td className="p-2 font-mono font-semibold">220.0 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-semibold">Ivermectin (pure pharmaceutical grade)</td><td className="p-2 font-mono">4,000 mg (4 g)</td><td className="p-2 font-mono font-semibold">4.0 mg</td><td className="p-2 font-mono font-semibold">16.0 mg</td></tr>

                  <tr className="border-b border-gray-200 bg-gray-50"><td colSpan="4" className="p-2 font-bold text-gray-900">Cannabinoids</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-semibold">CBD (Full Spectrum Oil)</td><td className="p-2 font-mono">20,000 mg (20 g)</td><td className="p-2 font-mono font-semibold">20.0 mg</td><td className="p-2 font-mono font-semibold">80.0 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">THC (Full Spectrum)</td><td className="p-2 font-mono">per local formulation</td><td className="p-2 font-mono">variable</td><td className="p-2 font-mono">variable</td></tr>

                  <tr className="border-b border-gray-200 bg-gray-50"><td colSpan="4" className="p-2 font-bold text-gray-900">Essential Oils (total 12.5 mL / 1.25% dilution)</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">Cinnamon Bark</td><td className="p-2 font-mono">0.5 mL (~10 drops)</td><td className="p-2 font-mono">0.46 mg</td><td className="p-2 font-mono">1.84 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">Clove (Eugenol)</td><td className="p-2 font-mono">2 mL (~40 drops)</td><td className="p-2 font-mono">2.1 mg</td><td className="p-2 font-mono">8.4 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">Oregano (Carvacrol)</td><td className="p-2 font-mono">2 mL (~40 drops)</td><td className="p-2 font-mono">1.9 mg</td><td className="p-2 font-mono">7.6 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">Rosemary (Carnosic acid)</td><td className="p-2 font-mono">3 mL (~60 drops)</td><td className="p-2 font-mono">2.7 mg</td><td className="p-2 font-mono">10.8 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">Holy Basil (Tulsi)</td><td className="p-2 font-mono">2 mL (~40 drops)</td><td className="p-2 font-mono">1.8 mg</td><td className="p-2 font-mono">7.2 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">Frankincense (Boswellic acid)</td><td className="p-2 font-mono">3 mL (~60 drops)</td><td className="p-2 font-mono">2.6 mg</td><td className="p-2 font-mono">10.4 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">Thyme (Thymol)</td><td className="p-2 font-mono">incl. in oregano</td><td className="p-2 font-mono">trace</td><td className="p-2 font-mono">trace</td></tr>

                  <tr className="border-b border-gray-200 bg-gray-50"><td colSpan="4" className="p-2 font-bold text-gray-900">Carrier Base</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">High-polyphenol EVOO</td><td className="p-2 font-mono">~175 mL</td><td className="p-2 font-mono">0.175 mL</td><td className="p-2 font-mono">0.7 mL</td></tr>
                  <tr><td className="p-2">Olive oil base (remainder)</td><td className="p-2 font-mono">~812.5 mL</td><td className="p-2 font-mono">~0.81 mL</td><td className="p-2 font-mono">~3.25 mL</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-sm font-bold text-gray-900 mb-2">Drug Facts — Per Dropper (1 mL)</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-gray-300">
                <thead><tr className="bg-gray-100 border-b border-gray-300">
                  <th className="p-2.5 text-left font-semibold text-gray-700">Active Compound</th>
                  <th className="p-2.5 text-left font-semibold text-gray-700">Per Dropper (1 mL)</th>
                  <th className="p-2.5 text-left font-semibold text-gray-700">Daily Dose (4 mL)</th>
                  <th className="p-2.5 text-left font-semibold text-gray-700">mg/kg/day (77.3 kg)</th>
                </tr></thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200 font-semibold"><td className="p-2.5">Fenbendazole</td><td className="p-2.5 font-mono">55.0 mg</td><td className="p-2.5 font-mono">220.0 mg</td><td className="p-2.5 font-mono">2.85 mg/kg</td></tr>
                  <tr className="border-b border-gray-200 font-semibold"><td className="p-2.5">Ivermectin</td><td className="p-2.5 font-mono">4.0 mg</td><td className="p-2.5 font-mono">16.0 mg</td><td className="p-2.5 font-mono">0.207 mg/kg</td></tr>
                  <tr className="border-b border-gray-200 font-semibold"><td className="p-2.5">CBD (Full Spectrum)</td><td className="p-2.5 font-mono">20.0 mg</td><td className="p-2.5 font-mono">80.0 mg</td><td className="p-2.5 font-mono">1.035 mg/kg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2.5">Rosemary oil</td><td className="p-2.5 font-mono">2.7 mg</td><td className="p-2.5 font-mono">10.8 mg</td><td className="p-2.5 font-mono">0.140 mg/kg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2.5">Frankincense oil</td><td className="p-2.5 font-mono">2.6 mg</td><td className="p-2.5 font-mono">10.4 mg</td><td className="p-2.5 font-mono">0.135 mg/kg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2.5">Clove oil</td><td className="p-2.5 font-mono">2.1 mg</td><td className="p-2.5 font-mono">8.4 mg</td><td className="p-2.5 font-mono">0.109 mg/kg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2.5">Oregano oil</td><td className="p-2.5 font-mono">1.9 mg</td><td className="p-2.5 font-mono">7.6 mg</td><td className="p-2.5 font-mono">0.098 mg/kg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2.5">Holy Basil oil</td><td className="p-2.5 font-mono">1.8 mg</td><td className="p-2.5 font-mono">7.2 mg</td><td className="p-2.5 font-mono">0.093 mg/kg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2.5">Cinnamon Bark oil</td><td className="p-2.5 font-mono">0.46 mg</td><td className="p-2.5 font-mono">1.84 mg</td><td className="p-2.5 font-mono">0.024 mg/kg</td></tr>
                  <tr className="border-b border-gray-200 bg-gray-50"><td className="p-2.5 font-bold">Total essential oils</td><td className="p-2.5 font-mono font-bold">11.56 mg</td><td className="p-2.5 font-mono font-bold">46.24 mg</td><td className="p-2.5 font-mono">0.598 mg/kg</td></tr>
                  <tr className="bg-gray-50"><td className="p-2.5 font-bold">EVOO carrier</td><td className="p-2.5 font-mono">~0.99 mL</td><td className="p-2.5 font-mono">~3.95 mL</td><td className="p-2.5 font-mono">—</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-sm font-bold text-gray-900 mb-2">Weight-Based Dosing Adjustment</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">Reference dose calibrated to 170 lb (77.3 kg) at 4 droppers/day. Adjust proportionally by body weight:</p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-gray-300">
                <thead><tr className="bg-gray-100 border-b border-gray-300">
                  <th className="p-2 text-left font-semibold text-gray-700">Body Weight</th>
                  <th className="p-2 text-left font-semibold text-gray-700">Droppers/Day</th>
                  <th className="p-2 text-left font-semibold text-gray-700">Fenbendazole</th>
                  <th className="p-2 text-left font-semibold text-gray-700">Ivermectin</th>
                  <th className="p-2 text-left font-semibold text-gray-700">CBD</th>
                </tr></thead>
                <tbody className="text-gray-700 text-xs">
                  <tr className="border-b border-gray-200"><td className="p-2">110 lb (50 kg)</td><td className="p-2 font-mono">3</td><td className="p-2 font-mono">165 mg</td><td className="p-2 font-mono">12.0 mg</td><td className="p-2 font-mono">60 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">130 lb (59 kg)</td><td className="p-2 font-mono">3</td><td className="p-2 font-mono">165 mg</td><td className="p-2 font-mono">12.0 mg</td><td className="p-2 font-mono">60 mg</td></tr>
                  <tr className="border-b border-gray-200 font-semibold bg-gray-50"><td className="p-2">170 lb (77 kg)</td><td className="p-2 font-mono">4</td><td className="p-2 font-mono">220 mg</td><td className="p-2 font-mono">16.0 mg</td><td className="p-2 font-mono">80 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">200 lb (91 kg)</td><td className="p-2 font-mono">5</td><td className="p-2 font-mono">275 mg</td><td className="p-2 font-mono">20.0 mg</td><td className="p-2 font-mono">100 mg</td></tr>
                  <tr><td className="p-2">250 lb (113 kg)</td><td className="p-2 font-mono">6</td><td className="p-2 font-mono">330 mg</td><td className="p-2 font-mono">24.0 mg</td><td className="p-2 font-mono">120 mg</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-sm font-bold text-gray-900 mb-2">Proposed Study Protocol</h3>
            <div className="border border-gray-300 rounded p-5 bg-gray-50 mb-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>Study design:</strong> Open-label topical application study. Modified Makis antiparasitic protocol adapted for transdermal delivery with DMSO-compatible botanical carrier.</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>Administration:</strong> 1 full dropper (1 mL) applied topically to skin at target area. 4 applications per day at approximately 6-hour intervals (e.g., 7 AM, 1 PM, 7 PM, 1 AM or nearest practical schedule). Gentle massage for 60 seconds per application to facilitate transdermal absorption.</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>Application sites:</strong> Scalp at nearest proximity to target area, temples, posterior neck, and upper back between shoulder blades (areas with thin dermis and high vascularity).</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>Duration:</strong> 12-week initial course. Assessment at weeks 4, 8, and 12 via clinical evaluation and imaging as appropriate.</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>Monitoring:</strong> Skin integrity at application sites (daily). Liver function panel (baseline, week 4, week 8, week 12). CBC with differential (same schedule). Clinical status assessment at each checkpoint.</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>Dose adjustment:</strong> Scale droppers/day linearly by body weight using 170 lb = 4 droppers as reference. Round to nearest whole dropper.</p>
              <p className="text-sm text-gray-700 leading-relaxed"><strong>Batch yield:</strong> 1 liter = 1,000 droppers = 250 days at 4x/day for a 170 lb subject.</p>
            </div>

            <h3 className="text-sm font-bold text-gray-900 mb-2">Formulation Notes</h3>
            <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-1 mb-4">
              <li><strong>Fenbendazole (55 mg/mL):</strong> Pharmaceutical-grade powder dissolved/suspended in warm olive oil with agitation. Daily topical dose of 220 mg (2.85 mg/kg) at 170 lb. Microtubule disruption, glucose uptake inhibition, p53 stabilization.</li>
              <li><strong>Ivermectin (4 mg/mL):</strong> Pure pharmaceutical-grade powder. Daily topical dose of 16 mg (0.207 mg/kg) at 170 lb. For reference, FDA-approved oral ivermectin dosing is 0.2 mg/kg; topical Soolantra delivers 1% concentration. Akt/mTOR inhibition, PAK1 kinase, mitochondrial dysfunction in cancer cells.</li>
              <li><strong>CBD (20 mg/mL):</strong> Full spectrum oil. Daily topical dose of 80 mg (1.035 mg/kg). Anti-proliferative, pro-apoptotic in GBM cell lines. Neuroprotective. Within studied topical ranges.</li>
              <li><strong>Essential oil dilution:</strong> 1.25% total (12.5 mL / 1000 mL). All individual compounds within Tisserand safe topical limits. Each targets documented anti-cancer pathways (see previous compound table for PubMed citations).</li>
              <li><strong>Carrier:</strong> High-polyphenol extra virgin olive oil provides polyphenol antioxidants and optimal lipophilic solubility for transdermal delivery of the active compounds.</li>
            </ul>

            <h3 className="text-sm font-bold text-gray-900 mb-2">Candidate Conditions for Investigation</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              This formulation targets multiple anti-cancer pathways simultaneously via transdermal delivery. Primary candidate conditions for study include: glioblastoma and other CNS tumors (scalp application for BBB-adjacent delivery), melanoma and cutaneous malignancies (direct application to lesion), breast cancer (chest wall application post-mastectomy or for accessible tumors), and any solid tumor accessible to topical delivery. The multi-compound approach is designed to reduce the probability of single-pathway resistance by engaging microtubule disruption, metabolic interference, mTOR suppression, apoptotic signaling, and anti-inflammatory cascades concurrently.
            </p>

            <p className="text-sm text-gray-600 italic">
              Proposed university research study formulation. Requires institutional approval, prescriptions for pharmaceutical-grade compounds, and appropriate oversight before any application. This is a theoretical protocol pending formal study approval.
            </p>
          </section>
        </Chapter>

        <Chapter id="protocol" number="VIII" title="Drug Protocol (Mebendazole Option)" subtitle="12-week physician-monitored treatment plan — one of several options under consideration">
          <DrugProtocol />
        </Chapter>

        <Chapter id="supplies" number="IX" title="Supplies &amp; Procurement" subtitle="Product sourcing, dosages, and purchase links">
          <ShoppingList />
        </Chapter>

        {/* ── Footer ── */}
        <footer className="border-t border-gray-200 pt-8 pb-10 mt-10">
          <div className="text-center mb-8">
            <p className="text-xs text-gray-400 leading-relaxed mb-2">This document is a continuously updated compilation of research, clinical data, and treatment protocols. All studies and sources are linked for independent verification. Alternative approaches are investigational.</p>
            <p className="text-xs text-gray-400 font-mono">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <div className="flex gap-3 justify-center mt-4">
              <a href="#/biopsy-methodology" className="text-xs text-gray-500 hover:text-gray-900 border border-gray-300 rounded px-3 py-1.5">Biopsy Methodology</a>
              <a href="#/doxycycline-anomaly" className="text-xs text-gray-500 hover:text-gray-900 border border-gray-300 rounded px-3 py-1.5">Doxycycline Anomaly</a>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-700 leading-relaxed text-center mb-3">
              If you are a physician, oncologist, infectious disease specialist, neuropathologist, or researcher with insight into this case — second, third, or fourth opinions are deeply welcomed. This is an active, evolving case and any expertise you can offer may directly impact the outcome.
            </p>
            <div className="text-center">
              <p className="text-sm text-gray-900 font-semibold">Contact: Josh Trembath</p>
              <p className="text-sm text-gray-700">Phone: <a href="tel:3855904074" className="text-blue-700 hover:underline">(385) 590-4074</a></p>
              <p className="text-sm text-gray-700">Email: <a href="mailto:jptrembath@gmail.com" className="text-blue-700 hover:underline">jptrembath@gmail.com</a></p>
            </div>
            <p className="text-xs text-gray-400 text-center mt-4 italic">She is a really good mom. We just love her a lot.</p>
          </div>
        </footer>
      </main>

      <ScrollBtn />
    </div>
  );
}
