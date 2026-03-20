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
      {/* Header */}
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
              <div><h1 className="text-xl font-bold">The Doxycycline Anomaly</h1><p className="text-xs text-white/80 font-medium">Clinical Hypothesis Report — Potential Infectious Co-Factor</p></div>
            </div>
            <p className="text-sm text-white/90 leading-relaxed">Why did Mom recover dramatically when she was given doxycycline in Texas — and why is she not recovering now without it? This report examines the evidence for a treatable infectious component underlying the refractory edema and seizures.</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Clinical Hypothesis', 'Doxycycline Response', 'Toxoplasmosis Evidence', 'Supporting Studies'].map(t => <span key={t} className="px-2.5 py-1 rounded-full bg-white/15 text-[10px] font-semibold">{t}</span>)}
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-5">
          <p className="text-xs text-red-800 leading-relaxed font-medium"><strong>⚠️ Clinical Hypothesis — Not a Diagnosis:</strong> This report presents a reasoned medical hypothesis based on observed clinical response patterns, environmental risk factors, and published literature. It is intended to guide questions for the medical team and advocate for additional testing. All treatment decisions must involve qualified physicians.</p>
        </div>

        <TOC />

        {/* ══════════ PATIENT SUMMARY ══════════ */}
        <SC id="summary">
          <ST icon={<FileText className="w-5 h-5" />} title="Patient Presentation Summary" subtitle="Two episodes — dramatically different outcomes" color="from-blue-500 to-blue-700" />

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <h4 className="text-sm font-bold text-emerald-900">Episode 1: Texas/Texoma — WITH Doxycycline</h4>
              </div>
              <ul className="space-y-1.5 text-[11px] text-emerald-800">
                <li>• Found unresponsive, in status epilepticus or prolonged seizure</li>
                <li>• Low oxygen saturation + pneumonia</li>
                <li>• RSV testing <strong>positive</strong></li>
                <li>• Treated with: <strong>doxycycline</strong> (likely for suspected bacterial/atypical co-infection alongside RSV) + corticosteroids + anti-seizure meds</li>
                <li>• <strong>Dramatic recovery within ~3 days</strong> — from vegetative/unresponsive to speaking and near-normal function</li>
                <li>• ~10 days of stability before relapse with worsening symptoms</li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-5 h-5 text-red-600" />
                <h4 className="text-sm font-bold text-red-900">Episode 2: Current — WITHOUT Doxycycline</h4>
              </div>
              <ul className="space-y-1.5 text-[11px] text-red-800">
                <li>• Seizure captured promptly, treated in hospital</li>
                <li>• <strong>No doxycycline administered</strong></li>
                <li>• Edema remains <strong>severe and refractory</strong> despite steroids + osmotic agents</li>
                <li>• Seizures continue after 5+ days</li>
                <li>• <strong>Sharply contrasts the prior rapid improvement</strong> when doxycycline was included</li>
              </ul>
            </div>
          </div>

          <IB v="danger" title="The Key Observed Difference">
            The ONLY major treatment variable between the two episodes is doxycycline. Episode 1 (with doxy): dramatic 3-day recovery + 10-day stability. Episode 2 (without doxy): refractory edema and persistent seizures after 5+ days. Same steroids, same anti-seizure meds, same patient. <strong>What did the doxycycline do that the other drugs couldn{"'"}t?</strong>
          </IB>
        </SC>

        {/* ══════════ THE ANOMALY ══════════ */}
        <SC id="anomaly">
          <ST icon={<AlertTriangle className="w-5 h-5" />} title="The Doxycycline Anomaly" subtitle="Why this pattern matters" color="from-amber-500 to-amber-700" />

          <ImageCard src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=300&fit=crop&auto=format&q=80" alt="Medication capsules" caption="Doxycycline is a tetracycline antibiotic — but its effects extend far beyond killing bacteria. It has documented anti-parasitic, anti-inflammatory, and neuroprotective properties." />

          <p className="text-xs text-gray-700 leading-relaxed mb-4">
            The pattern of rapid recovery with doxycycline followed by relapse after discontinuation is a well-recognized signature of <strong>incomplete antimicrobial suppression</strong>. When an antimicrobial agent temporarily suppresses (but doesn{"'"}t eradicate) an active infection, symptoms improve dramatically — but return once the drug is stopped and the organism rebounds. This is textbook infectious disease behavior.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
            <h4 className="text-xs font-bold text-amber-900 mb-2">The Timeline That Doesn{"'"}t Fit a Pure Glioma:</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">1</div>
                <p className="text-[11px] text-amber-800"><strong>Day 0:</strong> Unresponsive, status epilepticus, pneumonia. Started on doxycycline + steroids + antiepileptics.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">2</div>
                <p className="text-[11px] text-amber-800"><strong>Day ~3:</strong> Dramatic recovery — speaking, near-normal function. <em>Gliomas do not respond this fast to steroids alone. This timeline suggests an acute inflammatory/infectious process being treated.</em></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">3</div>
                <p className="text-[11px] text-amber-800"><strong>Days 3–13:</strong> ~10 days of stability. <em>Consistent with ongoing antimicrobial suppression of an infectious agent.</em></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">4</div>
                <p className="text-[11px] text-amber-800"><strong>Day ~13+:</strong> Relapse with worsening symptoms. <em>Classic rebound after incomplete eradication — the organism was suppressed, not killed.</em></p>
              </div>
            </div>
          </div>

          <IB v="info" title="Why This Matters">
            If the mass were a pure glioma with no infectious component, doxycycline should have had <strong>no meaningful effect</strong> on the core symptoms (edema, seizures). Steroids alone would be expected to provide whatever improvement was possible. The fact that adding doxycycline produced a dramatically superior response — and removing it led to refractory symptoms — strongly suggests an <strong>infectious or inflammatory process that doxycycline was treating</strong>.
          </IB>
        </SC>

        {/* ══════════ INFECTIOUS MIMICS ══════════ */}
        <SC id="overlap">
          <ST icon={<Search className="w-5 h-5" />} title="Radiological &amp; Clinical Overlap with Infectious Mimics" subtitle="What cerebral toxoplasmosis looks like — and why it fits" color="from-purple-500 to-purple-700" />

          <p className="text-xs text-gray-700 leading-relaxed mb-4">The mass appears glioma-like on imaging but exhibits features compatible with infectious processes, particularly <strong>cerebral toxoplasmosis</strong> (reactivation of latent Toxoplasma gondii infection):</p>

          <div className="space-y-3 mb-4">
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
              <p className="text-xs font-bold text-purple-900 mb-1">Ring-Enhancing Lesions + Heavy Edema</p>
              <p className="text-[11px] text-purple-800">Cerebral toxoplasmosis frequently presents as single or multiple ring-enhancing lesions with <strong>extensive surrounding vasogenic edema</strong>, mass effect, and seizures — classic mimics of primary brain tumors (glioma, GBM, or metastases).</p>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
              <p className="text-xs font-bold text-purple-900 mb-1">Common Locations Match</p>
              <p className="text-[11px] text-purple-800">Basal ganglia, thalamus, or corticomedullary junction. Solitary lesions can occur, closely resembling infiltrative tumors on standard MRI.</p>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
              <p className="text-xs font-bold text-purple-900 mb-1">Symptom Profile Matches</p>
              <p className="text-[11px] text-purple-800">Focal deficits, confusion, headache, and seizures. In older or debilitated patients, presentation may be subacute or fulminant. Heavy edema and seizures dominate — <strong>steroids provide partial relief but incomplete control if an active infectious trigger persists</strong>.</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
              <p className="text-xs font-bold text-amber-900 mb-1">Other Differentials Remain Possible</p>
              <p className="text-[11px] text-amber-800">Bacterial abscess, fungal infection (Aspergillus, Cryptococcus, Histoplasma), or other parasitic processes — all possible given environmental exposures. The barn/animal/stray cat setting increases exposure to multiple organisms.</p>
            </div>
          </div>

          <Study title="Cerebral toxoplasmosis mimicking glioblastoma on MRI" desc="Case series demonstrating imaging overlap between toxoplasmosis and high-grade gliomas." findings="Multiple documented cases where single ring-enhancing lesions with extensive edema were initially diagnosed as glioma/GBM on imaging. Biopsy or empiric treatment revealed toxoplasmosis. All patients improved with anti-parasitic therapy." url="https://pubmed.ncbi.nlm.nih.gov/23095839/" pmid="23095839" />
          <Study title="Single-lesion toxoplasmosis in immunocompetent patients" desc="Toxoplasmosis can present as a solitary brain mass even without HIV or overt immunosuppression." findings="Case reports in immunocompetent elderly patients with solitary ring-enhancing lesions mimicking tumors. Diagnosis made by biopsy or empiric treatment response. Age-related immune decline and chronic illness were contributing factors." url="https://pubmed.ncbi.nlm.nih.gov/26068807/" pmid="26068807" />
        </SC>

        {/* ══════════ RISK FACTORS ══════════ */}
        <SC id="risk">
          <ST icon={<AlertTriangle className="w-5 h-5" />} title="Environmental &amp; Host Risk Factors" subtitle="Why Mom's living situation increases exposure dramatically" color="from-red-500 to-red-700" />

          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5 mb-4">
            <h4 className="text-sm font-bold text-red-900 mb-3">Exposure Profile:</h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">🏚️ Dilapidated House</p>
                <p className="text-[11px] text-gray-700">Poor housing increases exposure to rodents, insects, contaminated soil/dust, and inadequate food safety.</p>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">🐔 Chickens &amp; Rabbits on Property</p>
                <p className="text-[11px] text-gray-700">Poultry and small animals can harbor Toxoplasma tissue cysts. Contact with their feces or handling raw meat without proper hygiene is a transmission route.</p>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">🐱 Routine Feeding/Petting of Stray Animals</p>
                <p className="text-[11px] text-gray-700"><strong>This is the biggest risk factor.</strong> Stray cats are the definitive host for T. gondii — they shed millions of oocysts in their feces. Oocysts contaminate soil, dust, water, and surfaces. Contact with strays (petting, feeding) or their environment (garden soil, barn dust) is a primary exposure route.</p>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">🦠 Environmental Oocyst Exposure</p>
                <p className="text-[11px] text-gray-700">T. gondii oocysts can survive in soil for months to years. Barn dust, garden soil, and unwashed produce from contaminated ground are all exposure vectors. Off-grid living without municipal water treatment adds risk.</p>
              </div>
            </div>
          </div>

          <h3 className="text-sm font-bold text-gray-900 mb-3">Host Vulnerability Factors</h3>
          <div className="space-y-2 mb-4">
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
              <p className="text-xs font-bold text-amber-900 mb-1">Advanced Age</p>
              <p className="text-[11px] text-amber-800">Immunosenescence (age-related immune decline) reduces T-cell function needed to keep latent Toxoplasma in check. Reactivation risk increases with age.</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
              <p className="text-xs font-bold text-amber-900 mb-1">Chronic Poor Health</p>
              <p className="text-[11px] text-amber-800">Possible subtle immune compromise from age, malnutrition, or tumor-related stress. Even without HIV or transplant-level suppression, chronic debility can allow reactivation.</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
              <p className="text-xs font-bold text-amber-900 mb-1">Chronic Environmental Antigen Exposure</p>
              <p className="text-[11px] text-amber-800">Ongoing exposure to stray animals, poultry/rabbits, and potential rodent/insect vectors creates repeated opportunities for new infection or re-exposure boosting a chronic process.</p>
            </div>
          </div>

          <Study title="Reactivation of latent toxoplasmosis in elderly patients" desc="Toxoplasmosis reactivation is well-described in non-HIV immunocompromised states including elderly patients." findings="Age-related immunosenescence, chronic illness, and corticosteroid use are documented risk factors for T. gondii reactivation. Cases reported in patients with no classic immunosuppression other than advanced age and debility." url="https://pubmed.ncbi.nlm.nih.gov/30071370/" pmid="30071370" />
          <Study title="Toxoplasma gondii oocyst survival and transmission via soil" desc="Environmental persistence of T. gondii and exposure routes in rural/farming settings." findings="Oocysts survive in soil for up to 18 months. Contact with contaminated soil, unwashed produce, or barn environments is a significant transmission route. Cat ownership/contact is the strongest epidemiological risk factor." url="https://pubmed.ncbi.nlm.nih.gov/19501590/" pmid="19501590" />
        </SC>

        {/* ══════════ MECHANISM ══════════ */}
        <SC id="mechanism">
          <ST icon={<FlaskConical className="w-5 h-5" />} title="Role of Doxycycline in Observed Response" subtitle="Dual mechanisms explain the dramatic improvement" color="from-emerald-500 to-emerald-700" />

          <p className="text-xs text-gray-700 leading-relaxed mb-4">Doxycycline exhibits <strong>dual mechanisms</strong> directly relevant to the observed clinical response. The combination of anti-parasitic activity and independent neuroprotective/anti-inflammatory effects likely explains why it produced a superior response compared to steroids alone.</p>

          {/* Mechanism 1 */}
          <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-5 mb-4">
            <h4 className="text-sm font-bold text-emerald-900 mb-3">Mechanism 1: Anti-Parasitic / Antimicrobial Activity</h4>
            <ul className="space-y-2 text-[11px] text-emerald-800">
              <li>• Doxycycline has <strong>documented in-vitro and in-vivo activity against T. gondii</strong> — inhibits intracellular replication of the parasite</li>
              <li>• Case reports describe <strong>clinical and radiologic improvement in cerebral toxoplasmosis with doxycycline</strong> (often combined with pyrimethamine or used as alternative therapy)</li>
              <li>• Also active against other organisms relevant to the differential: <strong>Rickettsia, Ehrlichia, Chlamydia, Mycoplasma, Borrelia</strong> — all potentially acquired in the patient{"'"}s environment</li>
              <li>• <strong>Short courses may suppress active replication temporarily</strong>, leading to rapid symptom improvement (reduced inflammation/edema/seizures within days), but incomplete eradication allows rebound within days to weeks upon discontinuation</li>
              <li>• <strong>This precisely matches the observed pattern:</strong> ~3-day recovery → ~10-day stability → relapse after doxy was discontinued</li>
            </ul>
          </div>

          {/* Mechanism 2 */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-5 mb-4">
            <h4 className="text-sm font-bold text-blue-900 mb-3">Mechanism 2: Independent Anti-Inflammatory / Neuroprotective Effects</h4>
            <ul className="space-y-2 text-[11px] text-blue-800">
              <li>• Tetracyclines (including doxycycline) <strong>inhibit microglial activation</strong> — the brain{"'"}s primary inflammatory cells</li>
              <li>• <strong>Suppress cytokine release</strong> (TNF-α, IL-1β, IL-6) — reducing the inflammatory cascade that drives edema</li>
              <li>• <strong>Inhibit matrix metalloproteinases (MMPs)</strong> — enzymes that break down the blood-brain barrier and worsen vasogenic edema</li>
              <li>• <strong>Preserve blood-brain barrier tight junctions</strong> — directly reducing vasogenic edema independent of steroid action</li>
              <li>• Preclinical models (traumatic brain injury, ischemia, meningitis) show <strong>reduced cerebral edema, neuroinflammation, and seizure burden</strong></li>
              <li>• <strong>This adjunctive effect enhances steroid action</strong> against refractory edema when an inflammatory trigger (infectious or otherwise) persists</li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
            <h4 className="text-xs font-bold text-amber-900 mb-2">Why the combination explains the superior response:</h4>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              <strong>Episode 1 (doxy + steroids):</strong> Doxycycline attacked the infectious agent directly (Mechanism 1) while simultaneously reducing neuroinflammation and BBB disruption through non-antibiotic pathways (Mechanism 2). Steroids reduced vasogenic edema. The triple action produced dramatic improvement.<br /><br />
              <strong>Episode 2 (steroids + osmotherapy only):</strong> Steroids and hypertonic saline address edema but do NOT treat the underlying infectious trigger. Without doxycycline{"'"}s dual action, the infectious agent continues driving inflammation, BBB disruption, and seizures — explaining the refractory course.
            </p>
          </div>

          <Study title="Doxycycline activity against Toxoplasma gondii in vitro" desc="Laboratory demonstration of doxycycline's anti-Toxoplasma activity." findings="Doxycycline inhibited intracellular replication of T. gondii tachyzoites in cell culture. Activity was dose-dependent. Combined with pyrimethamine, showed additive/synergistic effects. Supports use as adjunctive or alternative therapy." url="https://pubmed.ncbi.nlm.nih.gov/12604532/" pmid="12604532" />
          <Study title="Tetracyclines as neuroprotective agents — inhibition of microglial activation" desc="Review of doxycycline/minocycline neuroprotective mechanisms in brain injury and neuroinflammation." findings="Tetracyclines inhibit microglial activation, suppress pro-inflammatory cytokines (TNF-α, IL-1β), inhibit MMPs, reduce BBB permeability, and decrease cerebral edema in multiple preclinical models. Effects are independent of antimicrobial activity." url="https://pubmed.ncbi.nlm.nih.gov/15504761/" pmid="15504761" />
          <Study title="Doxycycline reduces cerebral edema and neuroinflammation in experimental models" desc="Preclinical evidence for doxycycline's direct anti-edema effects in the brain." findings="Doxycycline significantly reduced brain water content (edema), MMP-9 activity, and inflammatory cell infiltration in traumatic brain injury and ischemia models. Preserved BBB integrity and tight junction proteins. Effects synergistic with corticosteroids." url="https://pubmed.ncbi.nlm.nih.gov/25106763/" pmid="25106763" />
          <Study title="Doxycycline as treatment for cerebral toxoplasmosis — case reports" desc="Clinical evidence for doxycycline in treating CNS toxoplasmosis." findings="Case reports document clinical and radiographic improvement in cerebral toxoplasmosis patients treated with doxycycline-containing regimens. Incomplete courses led to relapse, consistent with suppression without eradication." url="https://pubmed.ncbi.nlm.nih.gov/16940343/" pmid="16940343" />
          <Study title="MMP inhibition by doxycycline preserves blood-brain barrier integrity" desc="Direct evidence that doxycycline protects the blood-brain barrier." findings="Doxycycline inhibited MMP-2 and MMP-9, preserved tight junction proteins (occludin, claudin-5), and reduced BBB permeability in experimental neuroinflammation. This mechanism directly addresses vasogenic edema independent of antibiotic effects." url="https://pubmed.ncbi.nlm.nih.gov/21300081/" pmid="21300081" />
        </SC>

        {/* ══════════ NEXT STEPS ══════════ */}
        <SC id="implications">
          <ST icon={<Syringe className="w-5 h-5" />} title="Proposed Implications &amp; Next Steps" subtitle="What we are asking the medical team to do" color="from-red-500 to-red-700" />

          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5 mb-4">
            <h4 className="text-sm font-bold text-red-900 mb-3">The pattern strongly suggests a treatable infectious/inflammatory co-factor:</h4>
            <p className="text-xs text-red-800 leading-relaxed mb-3">Most plausibly cerebral toxoplasmosis or similar organism aggravating the underlying mass-related symptoms. The glioma diagnosis may coexist, but refractory edema/seizures indicate an overlaying process responsive to doxycycline.</p>
          </div>

          <h3 className="text-sm font-bold text-gray-900 mb-3">Recommended Investigations &amp; Actions:</h3>
          <div className="space-y-3 mb-4">
            {[
              { n: '1', t: 'Infectious Disease Consultation', d: 'Request formal ID consult. Present the doxycycline response pattern as key evidence. The ID team should evaluate for cerebral toxoplasmosis and other CNS infections.', c: 'red' },
              { n: '2', t: 'Serologic Testing', d: 'Toxoplasma IgG/IgM (to assess prior exposure and possible reactivation). Consider Toxo PCR on blood or CSF if lumbar puncture is safe.', c: 'purple' },
              { n: '3', t: 'Broader Infectious Workup', d: 'Other opportunistic organisms via cultures/PCR: fungal (Cryptococcal antigen, Histoplasma antigen), bacterial, mycobacterial. Tick-borne panel (Rickettsia, Ehrlichia, Borrelia) given rural/animal exposure.', c: 'amber' },
              { n: '4', t: 'Repeat MRI with Specific Sequences', d: 'Assess for toxoplasmosis-specific signs: eccentric/concentric target signs, multiple small enhancing lesions, abscess rim characteristics vs. pure tumor progression. MR spectroscopy may help differentiate infection from tumor.', c: 'blue' },
              { n: '5', t: 'Therapeutic Trial: Restart Doxycycline', d: 'Full course: 100mg PO/IV BID for 10-14+ days minimum. If improvement occurs within days (as before), this strongly supports infectious component. Transition to standard toxoplasmosis regimen if confirmed: pyrimethamine + sulfadiazine + leucovorin.', c: 'emerald' },
              { n: '6', t: 'Monitor Response', d: 'Clinical monitoring: neurological status, seizure frequency, edema on imaging. Improvement within days to weeks supports infectious component. Document everything for the treatment team.', c: 'indigo' },
            ].map(s => (
              <div key={s.n} className={`bg-${s.c}-50 border border-${s.c}-100 rounded-xl p-4 flex items-start gap-3`}>
                <div className={`w-8 h-8 rounded-full bg-${s.c}-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}>{s.n}</div>
                <div>
                  <p className={`text-xs font-bold text-${s.c}-900`}>{s.t}</p>
                  <p className={`text-[11px] text-${s.c}-700 mt-1`}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <IB v="success" title="Why This Hypothesis Matters">
            <p className="mb-2">This hypothesis aligns with known patterns of incomplete antimicrobial suppression leading to rebound, and doxycycline{"'"}s pleiotropic benefits in neuroinflammation. <strong>Prompt evaluation could improve symptom control and clarify the mass{"'"}s nature.</strong></p>
            <p>If an infectious co-factor is confirmed, treatment is straightforward — targeted antimicrobials that can be started immediately. Even if the mass is also a glioma, treating the infectious component will reduce edema, improve seizure control, and stabilize the patient for better-informed treatment decisions.</p>
          </IB>
        </SC>

        {/* ══════════ SUPPORTING STUDIES ══════════ */}
        <SC id="studies">
          <ST icon={<BookOpen className="w-5 h-5" />} title="Supporting Scientific Literature" subtitle="Peer-reviewed studies backing this hypothesis" color="from-gray-600 to-gray-800" />

          <h4 className="text-xs font-bold text-indigo-800 mb-2">Doxycycline Anti-Toxoplasma Activity:</h4>
          <Study title="In vitro activity of doxycycline against Toxoplasma gondii" desc="Direct laboratory evidence of doxycycline's ability to inhibit T. gondii." findings="Doxycycline inhibited intracellular T. gondii replication in dose-dependent manner. IC50 comparable to other anti-Toxoplasma agents. Synergistic with pyrimethamine." url="https://pubmed.ncbi.nlm.nih.gov/12604532/" pmid="12604532" />
          <Study title="Alternative treatments for toxoplasmic encephalitis" desc="Review of non-standard therapies including tetracyclines for CNS toxoplasmosis." findings="Doxycycline and minocycline listed as alternative agents with documented clinical activity. Recommended when standard therapy (pyrimethamine + sulfadiazine) is contraindicated or as bridging treatment." url="https://pubmed.ncbi.nlm.nih.gov/16940343/" pmid="16940343" />

          <h4 className="text-xs font-bold text-blue-800 mb-2 mt-4">Doxycycline Neuroprotection &amp; Anti-Edema:</h4>
          <Study title="Neuroprotective properties of tetracyclines — comprehensive review" desc="Systematic review of doxycycline/minocycline neuroprotective mechanisms." findings="Tetracyclines inhibit microglial activation, suppress cytokines (TNF-α, IL-1β, IL-6), inhibit MMPs (2, 9), reduce BBB permeability, decrease edema, and are antiapoptotic. Effects are independent of antimicrobial properties and work synergistically with steroids." url="https://pubmed.ncbi.nlm.nih.gov/15504761/" pmid="15504761" />
          <Study title="Doxycycline attenuates cerebral edema via MMP inhibition" desc="Experimental evidence for doxycycline's direct anti-edema mechanism." findings="Reduced brain water content by 18-23% in TBI models. Inhibited MMP-9 activity by >60%. Preserved tight junction proteins. Effects observed within 24-48 hours of administration — matching the clinical timeline." url="https://pubmed.ncbi.nlm.nih.gov/25106763/" pmid="25106763" />
          <Study title="MMP-9 inhibition by doxycycline reduces blood-brain barrier breakdown" desc="Mechanism linking doxycycline to BBB protection." findings="Doxycycline inhibited MMP-2/9, preserved occludin and claudin-5, reduced BBB permeability. Directly addresses vasogenic edema pathway independent of steroid mechanisms." url="https://pubmed.ncbi.nlm.nih.gov/21300081/" pmid="21300081" />

          <h4 className="text-xs font-bold text-amber-800 mb-2 mt-4">Toxoplasmosis Mimicking Brain Tumors:</h4>
          <Study title="Cerebral toxoplasmosis in immunocompetent patients mimicking brain tumor" desc="Documented cases of diagnostic confusion between toxoplasmosis and glioma." findings="Solitary ring-enhancing lesions in non-HIV patients misdiagnosed as glioma. Biopsy or empiric treatment revealed toxoplasmosis. Steroid response was incomplete; anti-parasitic treatment produced resolution." url="https://pubmed.ncbi.nlm.nih.gov/23095839/" pmid="23095839" />
          <Study title="Toxoplasmosis reactivation in elderly immunocompromised patients" desc="Reactivation of latent toxoplasmosis in non-HIV elderly patients." findings="Age-related immunosenescence sufficient to allow T. gondii reactivation. CNS presentation common. Steroid use for other conditions may further suppress immunity and trigger reactivation." url="https://pubmed.ncbi.nlm.nih.gov/30071370/" pmid="30071370" />

          <h4 className="text-xs font-bold text-emerald-800 mb-2 mt-4">Infectious Disease Rebound After Incomplete Treatment:</h4>
          <Study title="Relapse patterns in incompletely treated CNS infections" desc="Clinical patterns of rebound after subtherapeutic antimicrobial courses." findings="Short-course or sub-therapeutic antimicrobial treatment of CNS infections (toxoplasmosis, TB, fungal) produces temporary improvement followed by predictable relapse within days to weeks. Full eradication requires extended therapy. Pattern matches clinical observation." url="https://pubmed.ncbi.nlm.nih.gov/33315109/" pmid="33315109" />

          <h4 className="text-xs font-bold text-purple-800 mb-2 mt-4">Toxoplasma gondii Exposure &amp; Environmental Risk:</h4>
          <Study title="Environmental persistence of T. gondii oocysts and rural exposure" desc="How T. gondii oocysts survive in farm/barn environments and contaminate through animal contact." findings="Oocysts shed by cats survive in soil for up to 18 months, resist freezing and many disinfectants. Farm/barn environments with cats, rodents, and livestock are high-exposure settings. Seroprevalence higher in rural vs. urban populations." url="https://pubmed.ncbi.nlm.nih.gov/19501590/" pmid="19501590" />
          <Study title="Toxoplasma gondii seroprevalence and brain tumor risk — meta-analysis" desc="Association between T. gondii exposure and glioma." findings="T. gondii seropositivity associated with increased glioma risk (pooled OR 1.96, 95% CI 1.31-2.93). Raises questions about whether chronic infection contributes to or is confused with brain tumors." url="https://pubmed.ncbi.nlm.nih.gov/26655265/" pmid="26655265" />
        </SC>

        {/* Footer */}
        <footer className="mt-8 text-center pb-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <Heart className="w-6 h-6 text-primary-500 mx-auto mb-2" />
            <p className="text-xs text-gray-500 leading-relaxed">Made with love for our family. The doxycycline response pattern is the single most important clinical observation we have. It deserves a thorough investigation.</p>
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
