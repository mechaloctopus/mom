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

        <Chapter id="phoenix-tears" number="VII" title="Phoenix Tears Oil Blend" subtitle="Proposed veterinary study formulation — topical anti-cancer botanical compound (170 lb mammal)">
          <section>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              <strong>Phoenix Tears Oil Blend</strong> is a proposed formulation for a veterinary medical study combining botanical essential oils with documented anti-cancer properties, CBD isolate, and repurposed antiparasitic compounds in a high-polyphenol olive oil carrier base. Designed for topical application at 1 mL (one full dropper) 4 times daily to maintain constant transdermal compound delivery. Target subject: 170 lb mammal.
            </p>

            <h3 className="text-sm font-bold text-gray-900 mb-2">Master Formula — 1 Liter Batch</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-gray-300">
                <thead><tr className="bg-gray-100 border-b border-gray-300">
                  <th className="p-2 text-left font-semibold text-gray-700">Ingredient</th>
                  <th className="p-2 text-left font-semibold text-gray-700">Amount / 1L</th>
                  <th className="p-2 text-left font-semibold text-gray-700">Per Dropper (1 mL)</th>
                  <th className="p-2 text-left font-semibold text-gray-700">Daily (4 doses)</th>
                  <th className="p-2 text-left font-semibold text-gray-700">Safety Basis</th>
                </tr></thead>
                <tbody className="text-gray-700 text-xs">
                  <tr className="border-b border-gray-200 bg-gray-50"><td colSpan="5" className="p-2 font-bold text-gray-900">Essential Oils (total 12.5 mL / 1.25% dilution)</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">Cinnamon Bark</td><td className="p-2">0.5 mL (~10 drops)</td><td className="p-2 font-mono">0.5 mcL (0.46 mg)</td><td className="p-2 font-mono">1.84 mg</td><td className="p-2">Max dermal 0.07% (Tisserand); used ~0.05%</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">Clove (Eugenol)</td><td className="p-2">2 mL (~40 drops)</td><td className="p-2 font-mono">2 mcL (2.1 mg)</td><td className="p-2 font-mono">8.4 mg</td><td className="p-2">Max 0.5%; limited to 0.2% in blend. <a href="https://pubmed.ncbi.nlm.nih.gov/22065645/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 22065645</a></td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">Oregano (Carvacrol)</td><td className="p-2">2 mL (~40 drops)</td><td className="p-2 font-mono">2 mcL (1.9 mg)</td><td className="p-2 font-mono">7.6 mg</td><td className="p-2">Max 0.5-1%; capped at 0.2% for DMSO compat. <a href="https://pubmed.ncbi.nlm.nih.gov/25963495/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 25963495</a></td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">Rosemary (Carnosic acid)</td><td className="p-2">3 mL (~60 drops)</td><td className="p-2 font-mono">3 mcL (2.7 mg)</td><td className="p-2 font-mono">10.8 mg</td><td className="p-2">Safe up to 3%; used 0.3%. <a href="https://pubmed.ncbi.nlm.nih.gov/26205156/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 26205156</a></td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">Holy Basil (Tulsi)</td><td className="p-2">2 mL (~40 drops)</td><td className="p-2 font-mono">2 mcL (1.8 mg)</td><td className="p-2 font-mono">7.2 mg</td><td className="p-2">Max 1% (Tisserand); capped at 0.2%</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">Frankincense (Boswellic acid)</td><td className="p-2">3 mL (~60 drops)</td><td className="p-2 font-mono">3 mcL (2.6 mg)</td><td className="p-2 font-mono">10.4 mg</td><td className="p-2">Safe up to 5%; used 0.3%. <a href="https://pubmed.ncbi.nlm.nih.gov/21553931/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 21553931</a></td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">Thyme (Thymol)</td><td className="p-2">included in oregano fraction</td><td className="p-2 font-mono">trace</td><td className="p-2 font-mono">trace</td><td className="p-2"><a href="https://pubmed.ncbi.nlm.nih.gov/30934680/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 30934680</a></td></tr>

                  <tr className="border-b border-gray-200 bg-gray-50"><td colSpan="5" className="p-2 font-bold text-gray-900">Cannabinoids</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">CBD (Full Spectrum)</td><td className="p-2 font-semibold">10,000 mg (10 g)</td><td className="p-2 font-mono font-semibold">10.0 mg</td><td className="p-2 font-mono font-semibold">40.0 mg</td><td className="p-2">Anti-proliferative, pro-apoptotic in GBM lines. Neuroprotective.</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">THC (Full Spectrum)</td><td className="p-2">per local formulation</td><td className="p-2 font-mono">variable</td><td className="p-2 font-mono">variable</td><td className="p-2">Autophagy/apoptosis in glioma cells. Selective toxicity.</td></tr>

                  <tr className="border-b border-gray-200 bg-gray-50"><td colSpan="5" className="p-2 font-bold text-gray-900">Antiparasitic Compounds</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">Fenbendazole (powder)</td><td className="p-2 font-semibold">2,500 mg</td><td className="p-2 font-mono font-semibold">2.5 mg</td><td className="p-2 font-mono font-semibold">10.0 mg</td><td className="p-2">Microtubule disruption, glucose uptake inhibition, p53 stabilization</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">Ivermectin (powder)</td><td className="p-2 font-semibold">112 mg</td><td className="p-2 font-mono font-semibold">0.112 mg (112 mcg)</td><td className="p-2 font-mono font-semibold">0.448 mg (448 mcg)</td><td className="p-2">Akt/mTOR inhibition, PAK1 kinase, mitochondrial dysfunction</td></tr>

                  <tr className="border-b border-gray-200 bg-gray-50"><td colSpan="5" className="p-2 font-bold text-gray-900">Carrier Base</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2">High-polyphenol EVOO</td><td className="p-2">~150-200 mL (beyond base)</td><td className="p-2 font-mono">0.15-0.2 mL</td><td className="p-2 font-mono">0.6-0.8 mL</td><td className="p-2">Soothing polyphenols, dilution vehicle</td></tr>
                  <tr><td className="p-2">Olive oil base (remainder)</td><td className="p-2">~787.5 mL</td><td className="p-2 font-mono">~0.79 mL</td><td className="p-2 font-mono">~3.15 mL</td><td className="p-2">Carrier medium, transdermal absorption facilitator</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-sm font-bold text-gray-900 mb-2">Per-Dropper Summary (1 mL dose)</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-gray-300">
                <thead><tr className="bg-gray-100 border-b border-gray-300">
                  <th className="p-2 text-left font-semibold text-gray-700">Compound</th>
                  <th className="p-2 text-left font-semibold text-gray-700">Per Dropper</th>
                  <th className="p-2 text-left font-semibold text-gray-700">Daily (4x)</th>
                </tr></thead>
                <tbody className="text-gray-700 text-xs">
                  <tr className="border-b border-gray-200"><td className="p-2 font-semibold">CBD</td><td className="p-2 font-mono">10.0 mg</td><td className="p-2 font-mono">40.0 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-semibold">Fenbendazole</td><td className="p-2 font-mono">2.5 mg</td><td className="p-2 font-mono">10.0 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-semibold">Ivermectin</td><td className="p-2 font-mono">112 mcg</td><td className="p-2 font-mono">448 mcg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-semibold">Rosemary oil</td><td className="p-2 font-mono">2.7 mg</td><td className="p-2 font-mono">10.8 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-semibold">Frankincense oil</td><td className="p-2 font-mono">2.6 mg</td><td className="p-2 font-mono">10.4 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-semibold">Clove oil</td><td className="p-2 font-mono">2.1 mg</td><td className="p-2 font-mono">8.4 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-semibold">Oregano oil</td><td className="p-2 font-mono">1.9 mg</td><td className="p-2 font-mono">7.6 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-semibold">Holy Basil oil</td><td className="p-2 font-mono">1.8 mg</td><td className="p-2 font-mono">7.2 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-semibold">Cinnamon Bark oil</td><td className="p-2 font-mono">0.46 mg (460 mcg)</td><td className="p-2 font-mono">1.84 mg</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-2 font-semibold">Total essential oils</td><td className="p-2 font-mono">12.5 mcL (~11.6 mg)</td><td className="p-2 font-mono">~46.2 mg</td></tr>
                  <tr><td className="p-2 font-semibold">EVOO carrier</td><td className="p-2 font-mono">~0.98 mL</td><td className="p-2 font-mono">~3.9 mL</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-sm font-bold text-gray-900 mb-2">Formulation Notes</h3>
            <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-1 mb-4">
              <li><strong>Total essential oil dilution:</strong> 1.25% (12.5 mL / 1000 mL) — well within safe topical limits for all individual compounds per Tisserand safety guidelines.</li>
              <li><strong>CBD concentration:</strong> 10 mg/mL (1%). Delivers 40 mg/day across 4 applications — within studied topical ranges for anti-inflammatory and anti-proliferative effects.</li>
              <li><strong>Fenbendazole:</strong> 2.5 mg/mL. Dissolved in warm olive oil. Daily topical dose of 10 mg is sub-therapeutic for systemic anti-cancer effect but provides local transdermal delivery to the application site.</li>
              <li><strong>Ivermectin:</strong> 112 mcg/mL. Daily topical dose of 448 mcg — comparable to FDA-approved topical ivermectin (Soolantra) concentrations for dermal applications.</li>
              <li><strong>Application protocol:</strong> 1 full dropper (1 mL) applied topically to scalp at tumor proximity, temples, and posterior neck. 4 times daily at ~6-hour intervals. Gentle massage for 60 seconds to facilitate absorption.</li>
              <li><strong>Batch yield:</strong> 1 liter = 1,000 doses = 250 days of 4x/day application.</li>
            </ul>

            <h3 className="text-sm font-bold text-gray-900 mb-2">Mechanism Rationale</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Each compound targets documented anti-cancer pathways: <strong>CBD</strong> (anti-proliferative, pro-apoptotic in GBM cell lines, neuroprotective), <strong>fenbendazole</strong> (microtubule disruption, glucose uptake inhibition, p53 stabilization), <strong>ivermectin</strong> (Akt/mTOR inhibition, PAK1 kinase, mitochondrial dysfunction), <strong>rosemary/carnosic acid</strong> (PI3K/Akt pathway, chemotherapy uptake enhancement), <strong>frankincense/boswellic acid</strong> (GBM apoptosis, cerebral edema reduction via 5-LOX inhibition), <strong>clove/eugenol</strong> (ROS-mediated apoptosis in brain tumor cells), <strong>oregano/carvacrol</strong> (MAPK pathway inhibition), <strong>cinnamon/cinnamaldehyde</strong> (NF-kB suppression, anti-angiogenic). The combination delivers multi-pathway coverage via transdermal absorption at safe, non-caustic concentrations.
            </p>

            <p className="text-sm text-gray-600 italic">
              Proposed for veterinary medical study. 170 lb mammal. Not a substitute for any primary therapy. Complementary topical application only.
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
