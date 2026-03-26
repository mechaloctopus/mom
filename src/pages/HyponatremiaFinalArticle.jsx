import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, AlertTriangle, Brain } from 'lucide-react';

/* ─── References: only studies we actually cite and that are directly relevant ─── */
const REFS = [
  { id: 1, url: 'https://www.ishp.gov.al/reversible-hyponatremic-encephalopathy-mimicking-pseudoprogression-in-a-glioblastoma-patient/', label: 'Roci et al. 2017', t: 'Roci E, Petrela M, Kaloshi G. Reversible hyponatremic encephalopathy mimicking pseudoprogression in a glioblastoma patient. Alban Med J. 2017;2:51-4.' },
  { id: 2, url: 'https://www.ccjm.org/content/ccjom/74/5/377.full.pdf', label: 'Widdess-Walsh et al. 2007', t: 'Widdess-Walsh P, Sabharwal V, Demirjian S, DeGeorgia M. Neurologic effects of hyponatremia and its treatment. Cleve Clin J Med. 2007;74(5):377-82.' },
  { id: 3, url: 'https://www.who.int/publications/i/item/9241593989', label: 'WHO 2005', t: 'World Health Organization. Nutrients in Drinking-water — Chapter 12: Health Risks from Drinking Demineralized Water (Kozisek F). 2005.' },
  { id: 4, pmid: '29372493', t: 'Ramos-Fresnedo A et al. Predictive potential of hyponatremia for glioblastoma survival and its correlation with pseudoprogression. J Neurooncol. 2018.' },
  { id: 5, pmid: '26574669', t: 'Hay JR et al. Blood-Brain Barrier Disruption Is an Early Event That May Persist for Many Years After Traumatic Brain Injury in Humans. J Neuropathol Exp Neurol. 2015.' },
  { id: 6, pmid: '32919030', t: 'van Vliet EA et al. Long-lasting blood-brain barrier dysfunction and neuroinflammation after traumatic brain injury. Neurobiol Dis. 2020.' },
  { id: 7, pmid: '26237487', t: 'Filippatos TD et al. Hyponatremia: Special Considerations in Older Patients. J Clin Med. 2015.' },
  { id: 8, pmid: '34136577', t: 'Singh TD et al. Osmotic demyelination syndrome: clinical, neuroimaging characteristics, and outcomes. Neurology. 2021.' },
  { id: 9, pmid: '7976557', t: 'Bhardwaj A et al. Severe brain edema associated with cumulative effects of hyponatremic encephalopathy. Neurology. 1995.' },
  { id: 10, pmid: '16614718', t: 'Ayus JC. Symptomatic hyponatremia with hypoxia is a medical emergency. Kidney Int. 2006.' },
  { id: 11, pmid: '7842787', t: 'Ayus JC et al. Pulmonary complications of hyponatremic encephalopathy: noncardiogenic pulmonary edema and hypercapnic respiratory failure. Chest. 1995.' },
  { id: 12, pmid: '30115676', t: 'Suh CH et al. MRI Findings in Tumefactive Demyelinating Lesions: A Systematic Review and Meta-Analysis. AJNR. 2018.' },
  { id: 13, pmid: '35852524', t: 'Adrogué HJ et al. Diagnosis and Management of Hyponatremia: A Review. JAMA. 2022.' },
  { id: 14, pmid: '40603486', t: 'Bhowmik M et al. Effect of experimental hypoosmolar hyponatremia on the blood-brain barrier. J Neurochem. 2024.' },
  { id: 15, pmid: '38840620', t: 'Caldwell DJ et al. Acute hyponatremia post craniotomy resulting in a unilateral fixed and dilated pupil. Surg Neurol Int. 2024.' },
  { id: 16, pmid: '17572863', t: 'Carpenter J et al. Inadvertent hyponatremia leading to acute cerebral edema and early evidence of herniation. Neurocrit Care. 2007.' },
];

function Cite({ id }) {
  const ref = REFS.find(r => r.id === id);
  const href = ref?.url || (ref?.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${ref.pmid}/` : null);
  if (!href) return <sup className="text-gray-500 font-medium">[{id}]</sup>;
  return (
    <sup className="text-blue-700 font-medium cursor-pointer hover:underline">
      <a href={href} target="_blank" rel="noopener noreferrer">[{id}]</a>
    </sup>
  );
}

const momMri1 = new URL('../../hyponatremia/mom_mri1.jpg', import.meta.url).href;
const momMri2 = new URL('../../hyponatremia/mom_mri2.jpg', import.meta.url).href;
const momMri3 = new URL('../../hyponatremia/mom_mri3.jpg', import.meta.url).href;
const ccjmCtBaselineImg = new URL('../../hyponatremia/ccjm_hyponatremia_ct_baseline.jpg', import.meta.url).href;
const ccjmCtEdemaImg = new URL('../../hyponatremia/ccjm_hyponatremia_ct_edema.jpg', import.meta.url).href;
const ccjmCtResolvedImg = new URL('../../hyponatremia/ccjm_hyponatremia_ct_resolved.jpg', import.meta.url).href;

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function HyponatremiaFinalArticle() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <button onClick={() => { window.location.hash = ''; }} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <span className="text-xs text-gray-400 font-mono">Clinical Brief</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        <TitleBlock />
        <OccamsRazor />
        <ExecutiveSummary />
        <Chronology />
        <Hypothesis />
        <KeyEvidence />
        <MRIComparison />
        <TheAsk />
        <References />
        <PageFooter />
      </main>
    </div>
  );
}

/* ═══ TITLE ═══ */
function TitleBlock() {
  return (
    <div className="border-b-2 border-gray-900 pb-8 mb-10">
      <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Clinical Brief for the Neuro-Oncology Tumor Panel</p>
      <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight mb-4">
        Hyponatremia as a Plausible Driver of Acute Episodes and Imaging Distortion in a Patient with Presumed Glioma and a 9-Year History of Excessive Reverse-Osmosis Water Intake
      </h1>
      <p className="text-lg font-serif text-gray-600 leading-relaxed mb-4">
        A concise case argument for obtaining baseline brain imaging under normonatremic conditions to rule out hyponatremia-induced edema as the source of apparent lesion progression.
      </p>
      <p className="text-xs text-gray-400 font-mono">
        Prepared: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} &middot; Author: Josh Trembath (family advocate) &middot; Contact: jptrembath@gmail.com
      </p>
    </div>
  );
}

/* ═══ OCCAM'S RAZOR ═══ */
function OccamsRazor() {
  return (
    <div className="border-2 border-blue-200 bg-blue-50 rounded-lg p-5 mb-10">
      <p className="text-sm font-bold text-blue-900 mb-2 italic">"Pluralitas non est ponenda sine necessitate"</p>
      <p className="text-sm text-blue-800 leading-relaxed mb-3">
        <strong>Occam's Razor:</strong> the simplest explanation that accounts for all the facts should be tested first. <strong>"When you hear hoofbeats, think horses, not zebras."</strong>
      </p>
      <p className="text-sm text-blue-800 leading-relaxed">
        In this case, Occam's razor suggests starting with the simplest unifying explanation that fits all the observed facts: <strong>chronic heavy water intake → repeated hyponatremia → seizures + reversible edema on scans obtained during those episodes</strong> — before assuming multiple independent tumor progressions. That is exactly why getting a clean baseline scan while normonatremic makes so much sense as the next logical step.
      </p>
    </div>
  );
}

/* ═══ EXECUTIVE SUMMARY ═══ */
function ExecutiveSummary() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">1. Executive Summary</h2>

      <div className="border-2 border-amber-300 bg-amber-50 rounded-lg p-5 mb-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Disclosure:</strong> This brief was prepared by a family member, not a clinician. It is intended to raise a specific, testable clinical question — not to override expert judgment. Every claim cites a source.
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        A 64-year-old woman (170 lb / 77 kg) with a presumed low-grade glioma has a <strong>9-year history of chugging 1-3 liters of reverse-osmosis water</strong> every morning and every night as a self-prescribed "cleanse." Her family believes the tumor panel may be unaware of this habit and its clinical significance.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        <strong>The common denominator across all three of her hospital presentations</strong> — including two with seizures and complete unresponsiveness — is that each episode followed her habitual heavy water chugging. Every brain scan obtained to date was acquired during or shortly after one of these acute hyponatremic episodes.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        The patient has a disrupted blood-brain barrier (BBB), whether from the tumor itself, a prior unreported head injury, osmotic demyelination from years of sodium swings, or some combination. Published case literature shows that in patients with a disrupted BBB, hyponatremia can cause focal cerebral edema that <strong>mimics tumor progression on imaging</strong> and then <strong>reverses completely after sodium correction</strong>.<Cite id={1} /><Cite id={2} />
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        <strong>The bottom line:</strong> no brain scan of this patient has ever been obtained while she was normonatremic. If hyponatremia-induced edema is distorting lesion size and creating the appearance of a progressive ~11 mm nodule, then every clinical decision based on those scans is built on a distorted baseline. The single most informative next step is a <strong>repeat MRI under documented normonatremic conditions</strong>.
      </p>
    </section>
  );
}

/* ═══ CHRONOLOGY ═══ */
function Chronology() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">2. Patient Chronology</h2>

      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-gray-300">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="p-2.5 text-left font-semibold text-gray-700 w-1/4">Timeline</th>
              <th className="p-2.5 text-left font-semibold text-gray-700">Event</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-xs">
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">~9 years ago</td>
              <td className="p-2.5">Patient begins daily ritual of chugging 1-3 liters of reverse-osmosis water, typically once every morning and once every night, as a perceived cleansing practice. This continues nearly every day for the next 9 years.</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">Several years ago</td>
              <td className="p-2.5">Patient reports a severe head impact on a waterslide. No medical evaluation at the time. About a month later she develops vertigo; she has had roughly five vertigo episodes since. This event is relevant because if it caused an untreated hematoma or contusion, TBI literature shows BBB disruption can persist for years, creating a focal weak point.<Cite id={5} /><Cite id={6} /></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">First hospital presentation</td>
              <td className="p-2.5">Initial brain imaging identifies a lesion. <strong>Context: scan obtained after heavy water intake.</strong></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">Second presentation</td>
              <td className="p-2.5">Seizures and unresponsiveness after water chugging. Brain imaging obtained during acute episode. <strong>Context: hyponatremic at time of scan.</strong></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">Third presentation (most recent)</td>
              <td className="p-2.5">Witnessed seizures, profound altered mental status, severe hypoxemia (SpO₂ ~74%), lungs reportedly filled with fluid. Three days of brief stabbing chest pain preceded the collapse. Brain imaging shows primary lesion plus a secondary ~11 mm enhancing nodule interpreted as possible glioblastoma progression. Biopsy results remain ambiguous. <strong>Context: again hyponatremic at time of scan.</strong></td>
            </tr>
            <tr>
              <td className="p-2.5 font-semibold">Present</td>
              <td className="p-2.5">Presumed grade 2 glioma based on imaging and intraoperative impression. <strong>No scan has ever been obtained while the patient was verifiably normonatremic.</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed">
        <strong>The pattern:</strong> every acute episode and every scan shares the same antecedent — massive reverse-osmosis water intake. The brain-lung presentation (seizures + hypoxemia + pulmonary fluid) is itself a recognized pattern in severe hyponatremic encephalopathy.<Cite id={10} /><Cite id={11} />
      </p>
    </section>
  );
}

/* ═══ HYPOTHESIS ═══ */
function Hypothesis() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">3. The Hypothesis</h2>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-5">
        <p className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-2"><Brain className="w-4 h-4" /> Core Claim</p>
        <p className="text-sm text-blue-800 leading-relaxed">
          This patient's BBB is disrupted. When she chugs large volumes of reverse-osmosis water — which provides essentially no electrolyte replacement<Cite id={3} /> — she enters a hyponatremic state. Because her BBB is already compromised, this causes <strong>focal cerebral edema</strong> at the vulnerable site. Every brain scan to date was obtained during or shortly after such an episode, meaning <strong>every image reflects the brain in a water-logged state, not a true baseline</strong>.
        </p>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">3.1 What disrupted the BBB?</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        This article does <strong>not</strong> claim to know the single cause. Several possibilities are plausible, and they are not mutually exclusive:
      </p>
      <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2 mb-3">
        <li><strong>The tumor itself:</strong> gliomas are well known to disrupt the BBB through abnormal vasculature. If a tumor exists, it creates the focal weak point.</li>
        <li><strong>Prior traumatic brain injury:</strong> the unreported waterslide head impact could have caused a contusion or hematoma that left chronic focal BBB leakage. Published TBI studies show BBB disruption can persist for years.<Cite id={5} /><Cite id={6} /></li>
        <li><strong>Osmotic demyelination:</strong> 9 years of repeated sodium gradient shifts from chronic water loading and partial correction could, in an atypical presentation, have produced focal demyelinating injury. ODS can present as mass-like lesions that mimic tumors on MRI.<Cite id={8} /><Cite id={12} /></li>
        <li><strong>Cumulative osmotic injury:</strong> repeated hyponatremic episodes can produce progressive brain edema with cumulative effects, even without classic demyelination.<Cite id={9} /></li>
      </ul>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">3.2 What the disrupted BBB means for imaging</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Regardless of the cause, once the BBB has a focal weak point, hyponatremia does not distribute evenly. Water preferentially accumulates at the compromised site, producing <strong>focal edema that looks like tumor growth on imaging</strong>. This is not theoretical — it is documented:
      </p>
      <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2 mb-3">
        <li>In the Roci et al. case, a glioblastoma patient with hyponatremia (Na⁺ 116 mmol/L) developed diffuse cerebral swelling that was interpreted as possible tumor progression. After sodium correction alone, the edema <strong>completely resolved</strong>. The authors concluded that hyponatremic encephalopathy should be included in the differential diagnosis of glioma pseudoprogression.<Cite id={1} /></li>
        <li>In the Widdess-Walsh et al. Cleveland Clinic case, a patient with a prior hematoma developed new focal cerebral edema and mass effect when Na⁺ fell to 121 mmol/L. After sodium correction, the edema <strong>completely resolved</strong>. No recurrent hemorrhage — just sodium-driven water accumulation at the old weak point.<Cite id={2} /></li>
        <li>Ramos-Fresnedo et al. documented that hyponatremia in glioblastoma patients can produce encephalopathy and radiographic worsening that mimics pseudoprogression, which then improved after sodium correction alone.<Cite id={4} /></li>
      </ul>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">3.3 This does not mean she has no tumor</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        This hypothesis does not claim the brain mass is not real. It argues that <strong>hyponatremia-induced edema may be materially distorting its apparent size and creating the appearance of progression</strong>. The ~11 mm enhancing nodule interpreted as glioblastoma progression may in fact be a pseudoprogression — a reversible water-handling artifact from a brain scanned while hyponatremic. Additionally, the true margins of any underlying mass may be blurred by surrounding edema, making the tumor look larger than it actually is.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">3.4 Why reverse-osmosis water makes this worse</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        The WHO's expert review on demineralized water warns that very low-TDS water provides essentially no sodium, calcium, or magnesium and may increase urinary electrolyte losses.<Cite id={3} /> In a water-intoxication setting, lower TDS worsens the tendency toward serum sodium decline. This patient is not just chugging large volumes of water — she is chugging water specifically designed to have its minerals stripped out, making each episode more destabilizing than the same volume of tap water would be.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">3.5 Why age matters</h3>
      <p className="text-sm text-gray-700 leading-relaxed">
        Hyponatremia is especially common and dangerous in older adults. Reduced renal free-water clearance, lower total body water, comorbidity, and medications all narrow the margin for safely clearing large water loads.<Cite id={7} /><Cite id={13} /> A 64-year-old woman rapidly chugging 1-3 liters of demineralized water has less physiologic buffer than a younger person doing the same thing.
      </p>
    </section>
  );
}

/* ═══ KEY EVIDENCE ═══ */
function KeyEvidence() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">4. Key Supporting Evidence</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Only the most directly relevant published cases are presented here. Each one shows the same pattern: hyponatremia in a patient with pre-existing brain vulnerability → focal edema mimicking progression → resolution after sodium correction.
      </p>

      <div className="space-y-4 mb-4">
        <div className="border-2 border-green-200 bg-green-50 rounded-lg p-5">
          <p className="text-sm font-bold text-green-900 mb-1">Case 1 — Glioblastoma Patient with Hyponatremic Pseudoprogression (Roci et al. 2017)</p>
          <p className="text-sm text-green-800 leading-relaxed mb-2">
            A 56-year-old woman with anaplastic astrocytoma presented with worsening headaches, lethargy, confusion, hallucinations, and urinary incontinence. CT showed diffuse cerebral swelling. Labs: Na⁺ 116 mmol/L. After hypertonic saline and corticosteroids, <strong>all clinical symptoms regressed within two weeks and follow-up CT confirmed complete resolution of brain edema</strong>. The authors concluded: <em>"Hyponatremic encephalopathy should be included in the working hypotheses of pseudoprogression of high-grade glioma."</em>
          </p>
          <p className="text-xs text-green-700 font-semibold">
            Why this matters: This case is nearly identical to our patient's presentation. A brain tumor patient developed edema and clinical decline from hyponatremia, not tumor growth, and it completely reversed.
          </p>
          <a href="https://www.ishp.gov.al/reversible-hyponatremic-encephalopathy-mimicking-pseudoprogression-in-a-glioblastoma-patient/" target="_blank" rel="noopener noreferrer" className="text-xs text-green-700 font-semibold hover:underline inline-flex items-center gap-1 mt-2">
            Read full paper <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="border-2 border-green-200 bg-green-50 rounded-lg p-5">
          <p className="text-sm font-bold text-green-900 mb-1">Case 2 — Focal Edema at Prior Hematoma Site (Widdess-Walsh et al. 2007, Cleveland Clinic)</p>
          <p className="text-sm text-green-800 leading-relaxed mb-2">
            Twenty-one days after surviving a hemorrhagic stroke, a patient developed new neurologic symptoms. CT showed <strong>new focal cerebral edema and mass effect at the site of the prior hematoma</strong>. Serum Na⁺: 121 mmol/L. No recurrent hemorrhage. After sodium correction, <strong>the edema completely resolved</strong>.
          </p>
          <p className="text-xs text-green-700 font-semibold">
            Why this matters: This proves that hyponatremia can cause localized, mass-like edema specifically at a pre-existing BBB weak point — and that it reverses. This is the exact mechanism we believe is occurring in our patient.
          </p>
          <a href="https://www.ccjm.org/content/ccjom/74/5/377.full.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-green-700 font-semibold hover:underline inline-flex items-center gap-1 mt-2">
            Read full paper (PDF) <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="border border-gray-200 rounded-lg p-5">
          <p className="text-sm font-bold text-gray-900 mb-1">Additional Supporting Findings</p>
          <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2">
            <li><strong>Hyponatremia mimics pseudoprogression in GBM:</strong> Ramos-Fresnedo et al. documented that hyponatremia in glioblastoma patients can produce radiographic worsening mimicking tumor progression, which improved after sodium correction.<Cite id={4} /></li>
            <li><strong>BBB disruption persists years after TBI:</strong> Hay et al. found BBB leakage detectable years after a single traumatic brain injury, explaining how an old head injury can remain a focal weak point indefinitely.<Cite id={5} /></li>
            <li><strong>Hyponatremia directly damages the BBB:</strong> Bhowmik et al. (2024) showed experimentally that hypoosmolar hyponatremia disrupts BBB integrity, degrading tight-junction proteins.<Cite id={14} /></li>
            <li><strong>Hyponatremia worsens focal injury:</strong> Published cases show acute sodium drops producing focal edema and near-herniation in patients with prior brain insults (craniotomy, subarachnoid hemorrhage), reversible after correction.<Cite id={15} /><Cite id={16} /></li>
            <li><strong>Cumulative damage:</strong> Repeated hyponatremic episodes produce progressive brain edema with cumulative effects — each episode makes the next one worse.<Cite id={9} /></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ═══ MRI COMPARISON ═══ */
function MRIComparison() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">5. Imaging Comparison</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        The Cleveland Clinic case (Widdess-Walsh et al.) is the strongest visual comparator because it shows <strong>focal, mass-like edema appearing during hyponatremia and then completely resolving after sodium correction</strong>. Compare the pattern to our patient's scans — obtained during a hyponatremic episode.
      </p>

      <div className="border-2 border-blue-200 bg-blue-50 rounded-lg p-5 mb-6">
        <h3 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wide mb-4">Cleveland Clinic Case: Baseline → Focal Edema During Hyponatremia → Resolution After Correction</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
          <div>
            <img src={ccjmCtBaselineImg} alt="Baseline CT — original hematoma" className="w-full h-52 rounded border border-gray-200 object-cover object-center bg-white mb-2" />
            <p className="text-xs text-gray-600">Admission CT: right frontotemporal capsular hematoma.</p>
          </div>
          <div>
            <img src={ccjmCtEdemaImg} alt="Follow-up CT — new focal edema during hyponatremia" className="w-full h-52 rounded border border-gray-200 object-cover object-center bg-white mb-2" />
            <p className="text-xs text-gray-600">21 days later (Na⁺ 121): new focal edema and mass effect. No recurrent hemorrhage.</p>
          </div>
          <div>
            <img src={ccjmCtResolvedImg} alt="Follow-up CT — edema resolved after sodium correction" className="w-full h-52 rounded border border-gray-200 object-cover object-center bg-white mb-2" />
            <p className="text-xs text-gray-600">After sodium correction: edema completely resolved.<Cite id={2} /></p>
          </div>
        </div>

        <h3 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wide mb-4 mt-6">This Patient — Scans Obtained During Hyponatremic Episode</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
          <img src={momMri1} alt="Patient MRI 1" className="w-full h-52 rounded border border-gray-200 object-cover object-center bg-white" />
          <img src={momMri2} alt="Patient MRI 2" className="w-full h-52 rounded border border-gray-200 object-cover object-center bg-white" />
          <img src={momMri3} alt="Patient MRI 3" className="w-full h-52 rounded border border-gray-200 object-cover object-center bg-white" />
        </div>
        <p className="text-xs text-gray-600">Family-provided MRI photographs. All scans were obtained during or shortly after acute hyponatremic episodes. No normonatremic baseline exists for comparison.</p>
      </div>
    </section>
  );
}

/* ═══ THE ASK ═══ */
function TheAsk() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">6. The Clinical Ask</h2>

      <div className="bg-gray-900 text-white rounded-lg p-6 mb-5">
        <p className="text-sm font-bold mb-3">We are requesting one thing:</p>
        <p className="text-base font-serif leading-relaxed">
          Obtain a <strong>repeat MRI under documented normonatremic conditions</strong> — after sustained fluid restriction, confirmed serum Na⁺ in the normal range (135-145 mmol/L), and adequate recovery time — to establish a <strong>true baseline image</strong> of this patient's brain without the confounding effect of hyponatremic edema.
        </p>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">6.1 What this would tell us</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-gray-300">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="p-2.5 text-left font-semibold text-gray-700">If repeat MRI shows...</th>
              <th className="p-2.5 text-left font-semibold text-gray-700">Then it means...</th>
              <th className="p-2.5 text-left font-semibold text-gray-700">Next step</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-xs">
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">The ~11 mm nodule disappears or significantly shrinks</td>
              <td className="p-2.5">The "progression" was a <strong>pseudoprogression</strong> — hyponatremia-driven edema, not tumor growth. This is clinically significant.</td>
              <td className="p-2.5">Continue fluid restriction + high-salt diet + supportive osmotic therapy. Monitor with serial imaging. This may justify reclassifying the lesion.</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">The overall lesion complex significantly shrinks</td>
              <td className="p-2.5">Hyponatremia was materially exaggerating the apparent tumor size. The true mass is smaller than currently assumed.</td>
              <td className="p-2.5">Reassess grading, prognosis, and treatment intensity based on the actual lesion dimensions.</td>
            </tr>
            <tr>
              <td className="p-2.5 font-semibold">No meaningful change</td>
              <td className="p-2.5">Hyponatremia is not a major imaging confounder. The current lesion assessment is likely accurate.</td>
              <td className="p-2.5">Proceed with conventional neuro-oncologic management without delay.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">6.2 The problem with only scanning during acute episodes</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        If the clinical team only obtains imaging when the patient is symptomatic — which, in her case, means after she has been chugging water and is in a hyponatremic state — then <strong>every scan will include the edema artifact</strong>. This creates a self-reinforcing diagnostic loop: the patient presents hyponatremic → imaging shows edema → edema is attributed to tumor → no normonatremic scan is ever obtained → the contribution of hyponatremia is never tested.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        The published literature is clear that this exact scenario can and does happen. In the Roci et al. glioblastoma case, the treating team initially assumed the clinical and radiographic deterioration was tumor-related. Only after laboratory evaluation revealed severe hyponatremia and sodium correction produced complete resolution did they recognize it as pseudoprogression.<Cite id={1} />
      </p>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">6.3 Proposed protocol</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-300">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="p-2.5 text-left font-semibold text-gray-700">Step</th>
              <th className="p-2.5 text-left font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-xs">
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">1</td>
              <td className="p-2.5">Permanent cessation of excessive water intake. Target: &lt;1.5-2 L total fluid/day, no reverse-osmosis water.</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">2</td>
              <td className="p-2.5">Clinician-guided sodium normalization. Confirm serum Na⁺ 135-145 mmol/L and maintain for several weeks.</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">3</td>
              <td className="p-2.5">Repeat MRI with contrast after 4-8 weeks of stable normonatremia.</td>
            </tr>
            <tr>
              <td className="p-2.5 font-semibold">4</td>
              <td className="p-2.5">Compare directly to prior scans. Assess whether apparent progression resolves, lesion margins clarify, or findings persist unchanged.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ═══ REFERENCES ═══ */
function References() {
  return (
    <section className="mb-10" id="refs">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">References</h2>
      <ol className="list-decimal pl-6 text-sm text-gray-600 leading-relaxed space-y-2">
        {REFS.map(r => (
          <li key={r.id} id={`ref-${r.id}`}>
            {r.t}{' '}
            {r.url ? (
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline inline-flex items-center gap-0.5">
                Source <ExternalLink className="w-3 h-3" />
              </a>
            ) : r.pmid ? (
              <a href={`https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline inline-flex items-center gap-0.5">
                PMID: {r.pmid} <ExternalLink className="w-3 h-3" />
              </a>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ═══ FOOTER ═══ */
function PageFooter() {
  return (
    <footer className="border-t border-gray-200 pt-6 pb-10 text-center">
      <p className="text-xs text-gray-400 leading-relaxed mb-2">This is a family-prepared clinical brief, not a peer-reviewed publication. It is intended to raise a specific, testable clinical question for the treating team. This document does not constitute medical advice.</p>
      <p className="text-sm text-gray-700 font-semibold mt-3">Contact: Josh Trembath</p>
      <p className="text-sm text-gray-600">jptrembath@gmail.com &middot; (385) 590-4074</p>
      <div className="flex gap-3 justify-center mt-4 flex-wrap">
        <button onClick={() => { window.location.hash = ''; window.location.reload(); }} className="text-xs text-gray-500 hover:text-gray-900 border border-gray-300 rounded px-3 py-1.5">Main Site</button>
        <a href="#/hyponatremia-hypothesis" className="text-xs text-gray-500 hover:text-gray-900 border border-gray-300 rounded px-3 py-1.5">Full Technical Hypothesis</a>
      </div>
    </footer>
  );
}
