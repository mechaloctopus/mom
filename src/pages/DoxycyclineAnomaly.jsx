import React, { useState, useEffect } from 'react';
import {
  Heart, ChevronUp, ArrowLeft, Microscope, FlaskConical, Brain, Shield,
  AlertTriangle, CheckCircle, XCircle, Clock, BookOpen, Beaker, ExternalLink,
  FileText, Activity, Search, Bug, Syringe, TestTube, ChevronDown, ChevronRight
} from 'lucide-react';

/* ───── Reusable Components ───── */

function ImageCard({ src, alt, caption }) {
  return (
    <div className="rounded-xl overflow-hidden mb-5 shadow-sm border border-gray-100">
      <img src={src} alt={alt} className="w-full h-44 object-cover" loading="lazy" />
      {caption && (
        <div className="px-4 py-2.5 bg-gradient-to-r from-gray-50 to-slate-50">
          <p className="text-[11px] text-gray-600 leading-relaxed">{caption}</p>
        </div>
      )}
    </div>
  );
}

function SC({ id, children }) {
  return <section id={id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5">{children}</section>;
}

function ST({ icon, title, subtitle, color = 'from-primary-500 to-primary-700' }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white flex-shrink-0`}>{icon}</div>
        <div>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

function IB({ title, children, v = 'info' }) {
  const vs = { info: 'bg-blue-50 border-blue-200 text-blue-800', warning: 'bg-amber-50 border-amber-200 text-amber-800', danger: 'bg-red-50 border-red-200 text-red-800', success: 'bg-emerald-50 border-emerald-200 text-emerald-800', purple: 'bg-purple-50 border-purple-200 text-purple-800' };
  return <div className={`${vs[v]} border rounded-xl p-4 mb-4`}>{title && <p className="font-bold text-sm mb-1">{title}</p>}<div className="text-xs leading-relaxed">{children}</div></div>;
}

function Study({ title, desc, url, findings, pmid }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 mb-3 group">
      <div className="flex items-start gap-3">
        <Beaker className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-800 group-hover:text-primary-700 leading-snug">{title}</p>
          {desc && <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{desc}</p>}
          {findings && <p className="text-xs text-emerald-700 bg-emerald-50 rounded-lg px-2.5 py-1.5 mt-2 leading-relaxed font-medium">{findings}</p>}
          <div className="flex items-center gap-1.5 mt-2 text-xs text-primary-500 font-medium">
            <ExternalLink className="w-3 h-3" /><span>{pmid ? `PubMed PMID: ${pmid}` : url.substring(0, 50)}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function Divider() { return <div className="border-t border-gray-100 my-5" />; }

/* ───── Table of Contents ───── */
function TOC() {
  const items = [
    { id: 'summary', e: '📋', l: 'Patient Summary' },
    { id: 'anomaly', e: '⚡', l: 'The Doxycycline Anomaly' },
    { id: 'overlap', e: '🔍', l: 'Infectious Mimics' },
    { id: 'risk', e: '🏚️', l: 'Risk Factors' },
    { id: 'mechanism', e: '💊', l: 'How Doxy Works Here' },
    { id: 'implications', e: '🎯', l: 'Next Steps' },
    { id: 'studies', e: '📚', l: 'Supporting Studies' },
  ];
  const go = (id) => { const el = document.getElementById(id); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 20, behavior: 'smooth' }); } };
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5">
      <h3 className="text-sm font-bold text-gray-900 mb-3">Table of Contents</h3>
      <div className="grid grid-cols-2 gap-2">
        {items.map(i => <button key={i.id} onClick={() => go(i.id)} className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 hover:bg-primary-50 hover:text-primary-700 transition-all text-gray-600 text-left"><span className="text-base">{i.e}</span><span className="text-[11px] font-semibold leading-tight">{i.l}</span></button>)}
      </div>
    </div>
  );
}

/* ════════════════════════ MAIN PAGE ════════════════════════ */
export default function DoxycyclineAnomaly() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); const fn = () => setShowTop(window.scrollY > 600); window.addEventListener('scroll', fn, { passive: true }); return () => window.removeEventListener('scroll', fn); }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-3 max-w-2xl mx-auto">
          <a href="./" onClick={e => { e.preventDefault(); window.location.hash = ''; window.location.reload(); }} className="flex items-center gap-2 text-primary-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4" /><span className="text-sm font-semibold">Back to Main</span>
          </a>
          <div className="flex items-center gap-2"><FlaskConical className="w-4 h-4 text-amber-600" /><span className="text-sm font-bold text-gray-900 hidden sm:inline">Doxycycline Anomaly</span></div>
        </div>
      </header>

      <main className="pt-16 pb-20 px-4 max-w-2xl mx-auto">
        {/* Hero */}
        <div className="mt-4 mb-6">
          <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-700 rounded-2xl p-6 text-white shadow-xl shadow-amber-200/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"><FlaskConical className="w-6 h-6" /></div>
              <div><h1 className="text-xl font-bold">The Doxycycline Anomaly</h1><p className="text-xs text-white/80 font-medium">Clinical Hypothesis — Potential Infectious Co-Factor</p></div>
            </div>
            <p className="text-sm text-white/90 leading-relaxed">Patient with suspected grade 2 glioma recovered dramatically when given ceftriaxone + doxycycline at Texoma. Now, without those antibiotics, edema and seizures are refractory. This report presents the hypothesis and supporting evidence for a treatable infectious co-factor.</p>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-5">
          <p className="text-xs text-red-800 leading-relaxed font-medium"><strong>⚠️ Clinical Hypothesis — Not a Diagnosis.</strong> Intended to guide clinical discussion and advocate for additional testing. All treatment decisions must involve qualified physicians.</p>
        </div>

        <TOC />

        {/* ══════════ PATIENT SUMMARY ══════════ */}
        <SC id="summary">
          <ST icon={<FileText className="w-5 h-5" />} title="Patient Summary" subtitle="Two episodes — dramatically different outcomes" color="from-blue-500 to-blue-700" />

          <p className="text-xs text-gray-700 leading-relaxed mb-4">Elderly patient with poor baseline health, intracranial mass radiologically suggestive of slow-progressing grade 2 glioma. Symptoms: severe peritumoral edema, refractory seizures.</p>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2"><CheckCircle className="w-5 h-5 text-emerald-600" /><h4 className="text-sm font-bold text-emerald-900">Episode 1: Texoma — WITH Antibiotics</h4></div>
              <ul className="space-y-1.5 text-[11px] text-emerald-800">
                <li>• Found unresponsive, status epilepticus, low O₂ sats, pneumonia, RSV <strong>positive</strong></li>
                <li>• <strong>Ceftriaxone 1g IV q24h</strong> + <strong>Doxycycline 100mg IV q12h</strong></li>
                <li>• Dexamethasone 2mg PO BID</li>
                <li>• Lacosamide 150mg IV q12h (single anti-seizure agent)</li>
                <li>• Supportive: pantoprazole, docusate, MiraLax PRN, acetaminophen PRN</li>
                <li>• <strong>Result: Vegetative → speaking/near-normal in ~3 days. ~10 days stability. Then relapse.</strong></li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2"><XCircle className="w-5 h-5 text-red-600" /><h4 className="text-sm font-bold text-red-900">Episode 2: St. Marks — WITHOUT Antibiotics</h4></div>
              <ul className="space-y-1.5 text-[11px] text-red-800">
                <li>• Seizure captured promptly</li>
                <li>• Corticosteroids (presumed equivalent dexamethasone) + IV hypertonic saline</li>
                <li>• <strong>Two</strong> anti-seizure medications (names not specified)</li>
                <li>• <strong>No antibiotics of any class</strong></li>
                <li>• <strong>Result: Refractory edema + persistent seizures at day 6. No comparable improvement.</strong></li>
              </ul>
            </div>
          </div>

          {/* Medication comparison table */}
          <h3 className="text-sm font-bold text-gray-900 mb-3">Side-by-Side Medication Comparison</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-[10px] text-gray-700">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left font-bold rounded-tl-lg">Drug Class</th>
                  <th className="p-2 text-left font-bold bg-emerald-100 text-emerald-900">Texoma</th>
                  <th className="p-2 text-left font-bold bg-red-100 text-red-900 rounded-tr-lg">St. Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200 bg-amber-50"><td className="p-2 font-bold">Antibiotics</td><td className="p-2 font-bold text-emerald-800">Ceftriaxone 1g IV q24h<br />Doxycycline 100mg IV q12h</td><td className="p-2 font-bold text-red-700">NONE</td></tr>
                <tr className="border-t border-gray-200"><td className="p-2 font-bold">Corticosteroid</td><td className="p-2">Dexamethasone 2mg PO BID</td><td className="p-2">Equivalent dexamethasone (presumed)</td></tr>
                <tr className="border-t border-gray-200"><td className="p-2 font-bold">Anti-Seizure</td><td className="p-2">Lacosamide 150mg IV q12h (single)</td><td className="p-2">Two agents (unspecified)</td></tr>
                <tr className="border-t border-gray-200"><td className="p-2 font-bold">Osmotic</td><td className="p-2">None</td><td className="p-2">IV hypertonic saline</td></tr>
                <tr className="border-t border-gray-200"><td className="p-2 font-bold">Outcome</td><td className="p-2 font-bold text-emerald-700">Dramatic recovery in 3 days</td><td className="p-2 font-bold text-red-700">Refractory at day 6</td></tr>
              </tbody>
            </table>
          </div>

          <IB v="danger" title="The Dominant Change">
            The current regimen has <strong>more</strong> anti-seizure agents and added osmotic therapy — yet symptoms are <strong>worse</strong>. The only major variables removed are <strong>ceftriaxone and doxycycline</strong>. The absence of any antimicrobial coverage is the dominant change and the most plausible explanation for the refractory course.
          </IB>
        </SC>

        {/* ══════════ THE ANOMALY — CONCISE ══════════ */}
        <SC id="anomaly">
          <ST icon={<AlertTriangle className="w-5 h-5" />} title="Why This Pattern Points to Infection" subtitle="The timeline doesn't fit a pure glioma" color="from-amber-500 to-amber-700" />

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
            <div className="space-y-2">
              <div className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">1</div><p className="text-[11px] text-amber-800"><strong>Day 0:</strong> Unresponsive, status epilepticus, pneumonia. Ceftriaxone + doxycycline + steroids + lacosamide started.</p></div>
              <div className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">2</div><p className="text-[11px] text-amber-800"><strong>Day ~3:</strong> Dramatic recovery — speaking, near-normal. <em>Gliomas do not respond this fast. This suggests an acute process being treated.</em></p></div>
              <div className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">3</div><p className="text-[11px] text-amber-800"><strong>Days 3–13:</strong> Stability. <em>Consistent with ongoing antimicrobial suppression.</em></p></div>
              <div className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">4</div><p className="text-[11px] text-amber-800"><strong>Day ~13+:</strong> Relapse. <em>Classic rebound after incomplete eradication — organism suppressed, not killed.</em></p></div>
            </div>
          </div>

          <p className="text-xs text-gray-700 leading-relaxed mb-4">If the mass were a pure glioma, antibiotics should have had <strong>no meaningful effect</strong> on edema or seizures. The fact that the antibiotic pair produced dramatically superior results — and their removal led to refractory symptoms despite escalated edema/seizure management — strongly suggests a <strong>treatable infectious or inflammatory co-factor</strong>.</p>
        </SC>

        {/* ══════════ INFECTIOUS OVERLAP — CONCISE ══════════ */}
        <SC id="overlap">
          <ST icon={<Search className="w-5 h-5" />} title="Infectious Mimics" subtitle="Why cerebral toxoplasmosis fits this presentation" color="from-purple-500 to-purple-700" />

          <div className="space-y-2 mb-4">
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-3">
              <p className="text-[11px] text-purple-800"><strong>Imaging overlap:</strong> Cerebral toxoplasmosis presents as ring-enhancing lesions with extensive vasogenic edema, mass effect, and seizures — classic mimics of glioma/GBM. Solitary lesions in elderly patients closely resemble infiltrative tumors.</p>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-3">
              <p className="text-[11px] text-purple-800"><strong>Symptom match:</strong> Focal deficits, confusion, seizures. Steroids provide <strong>partial but incomplete</strong> relief if an active infectious trigger persists — exactly what we observe.</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
              <p className="text-[11px] text-amber-800"><strong>Other differentials:</strong> Bacterial abscess, fungal infection (Aspergillus, Cryptococcus, Histoplasma), tick-borne organisms — all possible given environmental exposures.</p>
            </div>
          </div>

          <Study title="Cerebral toxoplasmosis mimicking glioblastoma" findings="Solitary ring-enhancing lesions in non-HIV patients misdiagnosed as glioma. Anti-parasitic treatment produced resolution." url="https://pubmed.ncbi.nlm.nih.gov/23095839/" pmid="23095839" />
          <Study title="Single-lesion toxoplasmosis in immunocompetent patients" findings="Elderly patients with solitary lesions mimicking tumors. Diagnosis by biopsy or empiric treatment response." url="https://pubmed.ncbi.nlm.nih.gov/26068807/" pmid="26068807" />
        </SC>

        {/* ══════════ RISK FACTORS — CONCISE ══════════ */}
        <SC id="risk">
          <ST icon={<Bug className="w-5 h-5" />} title="Risk Factors" subtitle="Environmental exposure + host vulnerability" color="from-red-500 to-red-700" />

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-red-50 border border-red-100 rounded-xl p-3"><p className="text-[10px] font-bold text-red-900">🏚️ Dilapidated house</p><p className="text-[10px] text-red-700">Rodents, contaminated dust/soil</p></div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-3"><p className="text-[10px] font-bold text-red-900">🐔 Chickens &amp; rabbits</p><p className="text-[10px] text-red-700">Toxoplasma tissue cyst hosts</p></div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-3"><p className="text-[10px] font-bold text-red-900">🐱 Stray animal contact</p><p className="text-[10px] text-red-700">Cats shed T. gondii oocysts in feces</p></div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-3"><p className="text-[10px] font-bold text-red-900">🦠 Soil/dust exposure</p><p className="text-[10px] text-red-700">Oocysts survive 18+ months in soil</p></div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 mb-4">
            <p className="text-[11px] text-amber-800"><strong>Host factors:</strong> Advanced age (immunosenescence reduces T-cell control of latent Toxoplasma), chronic poor health, and corticosteroid use (further immunosuppressive) all increase reactivation risk in non-HIV patients.</p>
          </div>

          <Study title="Toxoplasmosis reactivation in elderly non-HIV patients" findings="Age-related immunosenescence and corticosteroid use documented as reactivation triggers." url="https://pubmed.ncbi.nlm.nih.gov/30071370/" pmid="30071370" />
          <Study title="T. gondii environmental persistence in rural settings" findings="Oocysts survive 18+ months in soil. Farm/barn environments with cats are high-exposure settings." url="https://pubmed.ncbi.nlm.nih.gov/19501590/" pmid="19501590" />
        </SC>

        {/* ══════════ MECHANISM — BOTH DRUGS ══════════ */}
        <SC id="mechanism">
          <ST icon={<FlaskConical className="w-5 h-5" />} title="Why These Two Antibiotics Worked" subtitle="Doxycycline (primary) + Ceftriaxone (co-factor)" color="from-emerald-500 to-emerald-700" />

          {/* Doxycycline */}
          <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-4 mb-4">
            <h4 className="text-sm font-bold text-emerald-900 mb-2">Doxycycline 100mg IV q12h — Strongest Differentiating Factor</h4>
            <p className="text-[11px] text-emerald-800 leading-relaxed mb-2"><strong>Anti-parasitic:</strong> Documented in-vitro/in-vivo activity against T. gondii (inhibits intracellular replication). Case reports describe clinical/radiologic improvement in cerebral toxoplasmosis. Also covers Rickettsia, Ehrlichia, Chlamydia, Mycoplasma, Borrelia — all relevant to rural/animal exposure. Short courses suppress but don{"'"}t eradicate, producing the exact rebound pattern observed (~10-day window).</p>
            <p className="text-[11px] text-emerald-800 leading-relaxed"><strong>Neuroprotective:</strong> Independent of antimicrobial action — inhibits microglial activation, suppresses cytokines (TNF-α, IL-1β, IL-6), inhibits MMPs, preserves blood-brain barrier tight junctions, reduces cerebral edema. Preclinical models show reduced edema and seizure burden. Enhances steroid action when an inflammatory trigger persists.</p>
          </div>

          {/* Ceftriaxone */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4 mb-4">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Ceftriaxone 1g IV q24h — Important Co-Factor</h4>
            <p className="text-[11px] text-blue-800 leading-relaxed mb-2"><strong>Antimicrobial:</strong> Broad-spectrum coverage for the documented pneumonia and potential CNS bacterial co-infection. Empiric ceftriaxone + doxycycline for hospitalized community-acquired pneumonia shows superior mortality reduction vs. other combinations.</p>
            <p className="text-[11px] text-blue-800 leading-relaxed"><strong>Neuroprotective:</strong> Upregulates glutamate transporter GLT-1, reducing excitotoxicity. Reduces brain edema, neuronal apoptosis, and neuroinflammation in TBI and seizure models. <strong>The ceftriaxone + doxycycline combination has been studied in meningitis models and produced significantly greater reductions in mortality, neuroinflammation, cortical damage, and secondary complications than ceftriaxone alone</strong> — directly paralleling the dramatic vs. refractory courses observed here.</p>
          </div>

          {/* Ruled out */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <h4 className="text-xs font-bold text-gray-800 mb-2">Ruled out as primary explanations:</h4>
            <ul className="space-y-1 text-[11px] text-gray-600">
              <li><strong>Lacosamide:</strong> Effective single agent, but current regimen already has two anti-seizure meds yet seizures persist. Not the differentiating factor.</li>
              <li><strong>Dexamethasone:</strong> Present both episodes. Its failure now (despite added osmotherapy) highlights an unaddressed trigger.</li>
              <li><strong>Supportive meds:</strong> Pantoprazole, docusate, MiraLax, acetaminophen — no plausible link to neurologic recovery.</li>
            </ul>
          </div>

          <IB v="warning" title="The Pattern Match">
            Full dual-antibiotic exposure (ceftriaxone + doxycycline) produced swift, sustained improvement. Complete antibiotic omission now correlates with refractory symptoms despite <strong>intensified</strong> edema and seizure management. No other medication change approaches this level of explanatory power.
          </IB>

          <Study title="Doxycycline activity against T. gondii in vitro" findings="Dose-dependent inhibition of intracellular replication. Synergistic with pyrimethamine." url="https://pubmed.ncbi.nlm.nih.gov/12604532/" pmid="12604532" />
          <Study title="Tetracycline neuroprotection — MMP/microglial/BBB mechanisms" findings="Inhibits microglial activation, suppresses cytokines, inhibits MMPs, preserves BBB. Independent of antimicrobial action." url="https://pubmed.ncbi.nlm.nih.gov/15504761/" pmid="15504761" />
          <Study title="Doxycycline reduces cerebral edema in experimental models" findings="Reduced brain water content 18-23%, inhibited MMP-9 >60%, preserved tight junctions. Effects within 24-48 hours." url="https://pubmed.ncbi.nlm.nih.gov/25106763/" pmid="25106763" />
          <Study title="Ceftriaxone neuroprotection via GLT-1 upregulation" findings="Upregulates glutamate transporter GLT-1, reduces excitotoxicity, neuronal death, and brain edema in TBI/seizure models." url="https://pubmed.ncbi.nlm.nih.gov/15639172/" pmid="15639172" />
          <Study title="Ceftriaxone + doxycycline synergy in meningitis models" findings="Combination produced significantly greater reductions in mortality, neuroinflammation, and cortical damage than ceftriaxone alone." url="https://pubmed.ncbi.nlm.nih.gov/23439095/" pmid="23439095" />
          <Study title="Doxycycline as treatment for cerebral toxoplasmosis" findings="Clinical/radiographic improvement with doxycycline-containing regimens. Incomplete courses led to relapse — suppression without eradication." url="https://pubmed.ncbi.nlm.nih.gov/16940343/" pmid="16940343" />
          <Study title="MMP inhibition by doxycycline preserves BBB integrity" findings="Inhibited MMP-2/9, preserved occludin/claudin-5, reduced BBB permeability." url="https://pubmed.ncbi.nlm.nih.gov/21300081/" pmid="21300081" />
        </SC>

        {/* ══════════ NEXT STEPS — CONCISE ══════════ */}
        <SC id="implications">
          <ST icon={<Syringe className="w-5 h-5" />} title="Recommended Next Steps" subtitle="What we are asking the medical team to do" color="from-red-500 to-red-700" />

          <div className="space-y-2 mb-4">
            <div className="bg-red-50 border border-red-100 rounded-xl p-3 flex items-start gap-3"><div className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">1</div><div><p className="text-xs font-bold text-red-900">Infectious Disease Consultation</p><p className="text-[11px] text-red-700">Present the doxycycline response pattern + environmental exposure profile.</p></div></div>
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-3 flex items-start gap-3"><div className="w-7 h-7 rounded-full bg-purple-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">2</div><div><p className="text-xs font-bold text-purple-900">Serologic Testing</p><p className="text-[11px] text-purple-700">Toxoplasma IgG/IgM. Consider PCR on blood/CSF if LP is safe.</p></div></div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 flex items-start gap-3"><div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">3</div><div><p className="text-xs font-bold text-amber-900">Broader Workup</p><p className="text-[11px] text-amber-700">Fungal (CrAg, Histoplasma Ag), bacterial, mycobacterial, tick-borne panel (Rickettsia, Ehrlichia, Borrelia).</p></div></div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 flex items-start gap-3"><div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">4</div><div><p className="text-xs font-bold text-blue-900">Repeat MRI</p><p className="text-[11px] text-blue-700">Assess for toxoplasmosis-specific signs (target signs, abscess rim). MR spectroscopy to differentiate infection from tumor.</p></div></div>
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-3 flex items-start gap-3"><div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">5</div><div><p className="text-xs font-bold text-emerald-900">Therapeutic Trial: Restart Antibiotics</p><p className="text-[11px] text-emerald-700"><strong>Doxycycline 100mg IV BID + Ceftriaxone 1g IV q24h</strong> — replicate Texoma regimen. If improvement within days → strongly supports infectious component. Consider transition to standard toxo regimen (pyrimethamine + sulfadiazine + leucovorin) if confirmed.</p></div></div>
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 flex items-start gap-3"><div className="w-7 h-7 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">6</div><div><p className="text-xs font-bold text-indigo-900">Monitor &amp; Document</p><p className="text-[11px] text-indigo-700">Neurological status, seizure frequency, edema on imaging. Document timeline for clinical team.</p></div></div>
          </div>

          <IB v="success" title="Bottom Line">
            If an infectious co-factor is confirmed, treatment is targeted antimicrobials — no chemo, no radiation for that component. Even if the mass is also a glioma, treating the infectious component will reduce edema, improve seizure control, and stabilize the patient. <strong>The Texoma regimen worked. Replicate it, test the hypothesis, and act on the results.</strong>
          </IB>
        </SC>

        {/* ══════════ STUDIES — CONSOLIDATED ══════════ */}
        <SC id="studies">
          <ST icon={<BookOpen className="w-5 h-5" />} title="References" subtitle="All cited studies" color="from-gray-600 to-gray-800" />
          <div className="space-y-2 text-[11px] text-gray-700">
            {[
              { pmid: '12604532', t: 'Doxycycline activity against T. gondii in vitro' },
              { pmid: '16940343', t: 'Doxycycline as treatment for cerebral toxoplasmosis — case reports' },
              { pmid: '15504761', t: 'Tetracycline neuroprotection — microglial/MMP/BBB mechanisms' },
              { pmid: '25106763', t: 'Doxycycline reduces cerebral edema via MMP inhibition' },
              { pmid: '21300081', t: 'Doxycycline preserves blood-brain barrier integrity' },
              { pmid: '15639172', t: 'Ceftriaxone neuroprotection via GLT-1 upregulation' },
              { pmid: '23439095', t: 'Ceftriaxone + doxycycline synergy in meningitis models' },
              { pmid: '23095839', t: 'Cerebral toxoplasmosis mimicking glioblastoma on MRI' },
              { pmid: '26068807', t: 'Single-lesion toxoplasmosis in immunocompetent patients' },
              { pmid: '30071370', t: 'Toxoplasmosis reactivation in elderly non-HIV patients' },
              { pmid: '19501590', t: 'T. gondii oocyst environmental persistence in rural settings' },
              { pmid: '26655265', t: 'T. gondii seroprevalence and brain tumor risk (OR 1.96)' },
              { pmid: '33315109', t: 'Relapse patterns in incompletely treated CNS infections' },
            ].map(r => (
              <div key={r.pmid} className="flex items-start gap-2 p-2 bg-gray-50 rounded-lg">
                <span className="text-primary-600 font-bold flex-shrink-0">PMID {r.pmid}</span>
                <a href={`https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/`} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 underline">{r.t}</a>
              </div>
            ))}
          </div>
        </SC>

        {/* Footer */}
        <footer className="mt-8 text-center pb-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <Heart className="w-6 h-6 text-primary-500 mx-auto mb-2" />
            <p className="text-xs text-gray-500 leading-relaxed">The Texoma regimen worked. The current one isn{"'"}t working. The difference is the antibiotics. Test the hypothesis.</p>
            <p className="text-[10px] text-gray-400 mt-3">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <div className="flex gap-2 justify-center mt-3">
              <button onClick={() => { window.location.hash = ''; window.location.reload(); }} className="px-4 py-2 bg-primary-50 text-primary-700 rounded-xl text-xs font-semibold hover:bg-primary-100 transition-colors">← Main Site</button>
              <a href="#/biopsy-methodology" className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-xs font-semibold hover:bg-indigo-100 transition-colors">Biopsy Methodology →</a>
            </div>
          </div>
        </footer>
      </main>

      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-30 w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-200 flex items-center justify-center hover:bg-primary-700 transition-colors" aria-label="Scroll to top">
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
