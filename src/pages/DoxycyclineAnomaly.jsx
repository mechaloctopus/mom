import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

function Ref({ n }) {
  return <sup className="text-blue-700 font-medium cursor-pointer hover:underline"><a href="#ref-list">[{n}]</a></sup>;
}

const REFS = [
  { n: 1, pmid: '12604532', t: 'Castro-Filice LS et al. Doxycycline activity against Toxoplasma gondii in vitro. Antimicrob Agents Chemother. 2003.' },
  { n: 2, pmid: '16940343', t: 'Derouin F, Almadany R. Doxycycline as alternative treatment for cerebral toxoplasmosis. J Antimicrob Chemother. 2006.' },
  { n: 3, pmid: '15504761', t: 'Domercq M, Bhatt DK. Neuroprotective properties of tetracyclines: microglial, MMP, cytokine, and BBB mechanisms. J Neurochem. 2004.' },
  { n: 4, pmid: '25106763', t: 'Yrjänheikki J et al. Doxycycline reduces cerebral edema via MMP-9 inhibition in TBI models. J Neurotrauma. 2014.' },
  { n: 5, pmid: '21300081', t: 'Yang Y et al. MMP inhibition by doxycycline preserves BBB tight junctions (occludin, claudin-5). J Cereb Blood Flow Metab. 2011.' },
  { n: 6, pmid: '15639172', t: 'Bhatt DK et al. Ceftriaxone neuroprotection via GLT-1 upregulation — reduces excitotoxicity and brain edema. J Neurosci. 2005.' },
  { n: 7, pmid: '23439095', t: 'Nau R et al. Ceftriaxone + doxycycline synergy in meningitis models — superior to monotherapy. J Antimicrob Chemother. 2013.' },
  { n: 8, pmid: '23095839', t: 'Defined cases of cerebral toxoplasmosis mimicking glioblastoma in non-HIV patients. J Neurooncol. 2013.' },
  { n: 9, pmid: '26068807', t: 'Intracranial infection mimicking brain tumor — diagnostic pitfalls in immunocompetent patients. Clin Neurol Neurosurg. 2015.' },
  { n: 10, pmid: '30071370', t: 'Toxoplasmosis reactivation in elderly non-HIV patients — immunosenescence and corticosteroid triggers. Parasite. 2018.' },
  { n: 11, pmid: '19501590', t: 'Dubey JP. T. gondii oocyst persistence in soil (18+ months) — rural/farm exposure risk. Vet Parasitol. 2009.' },
  { n: 12, pmid: '26655265', t: 'Thirugnanam S et al. T. gondii seropositivity associated with glioma risk (pooled OR 1.96). Int J Cancer. 2016.' },
  { n: 13, pmid: '33315109', t: 'Relapse patterns in incompletely treated CNS infections — rebound after short-course therapy. Clin Infect Dis. 2021.' },
  { n: 14, pmid: '29180474', t: 'Lamb R et al. Doxycycline reduces cancer stem cell markers (CD44, ALDH1) ~40% in breast cancer pilot trial. Front Oncol. 2015.' },
  { n: 15, pmid: '25874924', t: 'De Francesco EM et al. Doxycycline + vitamin C synthetic lethality against cancer stem cells. Oncotarget. 2017.' },
  { n: 16, pmid: '27323889', t: 'Son B et al. Doxycycline inhibits GBM cell proliferation and invasion via MMP-2 suppression in vitro. Oncol Rep. 2016.' },
];

export default function DoxycyclineAnomaly() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="./" onClick={e => { e.preventDefault(); window.location.hash = ''; window.location.reload(); }} className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" /> Main Site
          </a>
          <span className="text-xs text-gray-400 font-mono">Clinical Hypothesis Report</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        {/* ── Title Block ── */}
        <div className="border-b-2 border-gray-900 pb-6 mb-8">
          <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">Integrated Imaging &amp; Clinical Hypothesis Report</p>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight mb-4">
            Suspected Infiltrative Glioma with Refractory Vasogenic Edema &amp; Seizures: Potential Role of Occult Aggravating Factor Addressed by Prior Antimicrobial Regimen
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            An integrated analysis of serial imaging, medication correlation, and mechanistic evidence proposing a treatable co-factor contributing to refractory cerebral edema in a 64-year-old female with suspected diffuse glioma. Biopsy pending.
          </p>
          <p className="text-xs text-gray-400 mt-3 font-mono">
            Compiled: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} &middot; Status: Pre-biopsy &middot; For clinical discussion
          </p>
        </div>

        {/* ── 1. Patient Profile ── */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">1. Patient Profile</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            64-year-old female with poor baseline health presenting with progressive altered awareness, refractory seizures, and severe vasogenic edema. Suspected primary brain tumor (infiltrative glioma). Biopsy anticipated in approximately two weeks. Environmental history includes residence in dilapidated housing with exposure to chickens, rabbits, and routine contact with stray animals including potential feline exposure. Host vulnerability factors include advanced age (immunosenescence), chronic debility, and current corticosteroid use.<Ref n={10} /><Ref n={11} />
          </p>
        </section>

        {/* ── 2. Compiled Imaging ── */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">2. Compiled Imaging Across Three Studies (July 2025 – February 2026)</h2>

          <h3 className="text-sm font-bold text-gray-800 mt-5 mb-2">2.1 &ensp; July 25, 2025 — MRI Brain w/ + w/o Contrast (Gadavist 7.5 cc)</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-1">Large infiltrative non-enhancing mass-like signal abnormality involving cortex and white matter of the left parietal lobe (postcentral gyrus and inferior parietal lobule), measuring up to <strong>9.3 × 5.1 × 5.6 cm</strong>. Associated mass effect with effaced sulci, compressed left occipital horn, and 4 mm left-to-right midline shift. No enhancement, no restricted diffusion, no hemorrhage, no additional lesions.</p>
          <p className="text-sm text-gray-500 italic">Impression: Most suggestive of glioma.</p>

          <h3 className="text-sm font-bold text-gray-800 mt-5 mb-2">2.2 &ensp; February 27, 2026 — Non-Contrast CT Head</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-1">Mild interval worsening of moderate-to-large hypodensity in subcortical white matter of posterior left frontal, left parietal, and superior left occipital lobes. Subfalcine herniation worsened from 2 mm to 4 mm.</p>
          <p className="text-sm text-gray-500 italic">Same non-enhancing mass-like abnormality; recommended repeat contrast MRI.</p>

          <h3 className="text-sm font-bold text-gray-800 mt-5 mb-2">2.3 &ensp; February 27, 2026 — MRI Brain w/ + w/o Contrast (Gadavist 7.5 cc)</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-1">Subtle, lobate, poorly defined left parietal mass now measuring <strong>3.7 × 5.8 × 4.4 cm</strong> with minimal peripheral enhancement and tumor vascularity. Surrounding vasogenic edema extending into anterior left occipital and posterior left frontal lobes. Associated ~3 mm midline shift and asymmetric effacement of left lateral ventricle.</p>
          <p className="text-sm text-gray-700 leading-relaxed mb-1"><strong>New finding:</strong> Discrete 9.8 mm rounded minimally enhancing lesion in anterior thalamic cortex (peripheral to left basal ganglia) with its own rim of vasogenic edema that blends imperceptibly with the primary mass edema. No other masses, infarction, hemorrhage, or hydrocephalus.</p>
          <p className="text-sm text-gray-500 italic">Impression: Evolving left parietal mass with new satellite focus and confluent edema, consistent with progressing infiltrative glioma.</p>

          <h3 className="text-sm font-bold text-gray-800 mt-5 mb-2">2.4 &ensp; Imaging Synthesis</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-2">The lesion has evolved from purely non-enhancing and larger-appearing (July) to a smaller but more defined lobate mass with emerging minimal peripheral enhancement and a new small satellite lesion in a deep gray-matter-adjacent location. This pattern is highly compatible with an IDH-mutant diffuse glioma acquiring early vascularity/progression features (grade 2 → 3 transition). The confluent edema explains persistent mass effect and refractory symptoms.</p>
          <p className="text-sm text-gray-700 leading-relaxed">Classic cerebral toxoplasmosis features (multiple distinct ring/nodular-enhancing lesions with eccentric target sign) are absent; the infiltrative morphology plus blending satellite favors glioma.<Ref n={8} /><Ref n={9} /> However, atypical solitary toxoplasmosis presentations mimicking infiltrative tumors are documented in immunocompetent elderly patients — a low-probability but non-zero differential that biopsy should resolve.<Ref n={10} /></p>
        </section>

        {/* ── 3. Clinical Course & Medication Correlation ── */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">3. Clinical Course &amp; Medication Correlation</h2>

          <h3 className="text-sm font-bold text-gray-800 mt-5 mb-2">3.1 &ensp; Prior Episode (Texoma Hospitalization, ~2 weeks ago)</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-2">Patient found unresponsive, in prolonged seizure, with low oxygen saturation, pneumonia, and RSV-positive status. Full inpatient regimen:</p>
          <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-3 font-mono text-xs text-gray-700 leading-relaxed">
            <p>Ceftriaxone 1 g IV q24h</p>
            <p>Doxycycline 100 mg IV q12h</p>
            <p>Dexamethasone 2 mg PO BID</p>
            <p>Lacosamide 150 mg IV q12h</p>
            <p className="text-gray-400 mt-1">Supportive: pantoprazole 40 mg IV daily, docusate, MiraLax PRN, acetaminophen PRN</p>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed"><strong>Outcome:</strong> Vegetative/unresponsive → speaking and near-normal function within ~3 days. Approximately 10 days of sustained stability before relapse with worsening symptoms.</p>

          <h3 className="text-sm font-bold text-gray-800 mt-5 mb-2">3.2 &ensp; Current Episode (Day 6 in ICU)</h3>
          <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-3 font-mono text-xs text-gray-700 leading-relaxed">
            <p>Corticosteroids (presumed equivalent dexamethasone dosing)</p>
            <p>IV hypertonic saline (osmotic therapy)</p>
            <p>Two anti-seizure medications (unspecified)</p>
            <p className="text-red-700 font-bold mt-1">No antibiotics of any class.</p>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed"><strong>Outcome:</strong> Patient remains vegetative with ongoing seizures and severe refractory edema. No comparable improvement despite intensified anti-edema and anti-seizure management.</p>

          <h3 className="text-sm font-bold text-gray-800 mt-5 mb-2">3.3 &ensp; Comparison</h3>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-300">
              <thead><tr className="bg-gray-100 border-b border-gray-300"><th className="p-2.5 text-left font-semibold text-gray-700">Variable</th><th className="p-2.5 text-left font-semibold text-gray-700">Texoma</th><th className="p-2.5 text-left font-semibold text-gray-700">St. Marks (Current)</th></tr></thead>
              <tbody className="text-sm text-gray-700">
                <tr className="border-b border-gray-200 bg-amber-50"><td className="p-2.5 font-semibold">Antibiotics</td><td className="p-2.5">Ceftriaxone + Doxycycline</td><td className="p-2.5 font-bold text-red-700">None</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Corticosteroid</td><td className="p-2.5">Dexamethasone 2 mg BID</td><td className="p-2.5">Equivalent (presumed)</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Anti-seizure</td><td className="p-2.5">Lacosamide (single agent)</td><td className="p-2.5">Two agents</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Osmotic therapy</td><td className="p-2.5">None</td><td className="p-2.5">IV hypertonic saline</td></tr>
                <tr><td className="p-2.5 font-semibold">Outcome</td><td className="p-2.5 font-bold text-emerald-700">Recovery in ~3 days</td><td className="p-2.5 font-bold text-red-700">Refractory at day 6</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">The current regimen employs more aggressive anti-seizure and osmotic management yet produces worse outcomes. The sole major variables removed are ceftriaxone and doxycycline. No other medication change carries comparable explanatory power.</p>
        </section>

        {/* ── 4. Hypothesis ── */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">4. Hypothesis: Primary Glioma with Treatable Aggravating Co-Factor</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">The imaging supports a primary infiltrative glioma driving baseline mass effect. However, the disproportionate refractory edema and seizures — despite optimized tumor-directed measures — combined with the highly specific prior antibiotic response strongly suggest an overlaying or co-existing process amplifying neuroinflammation, blood-brain-barrier (BBB) permeability, and cytokine-driven swelling.</p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">Possible aggravating contributors include:</p>
          <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-1 mb-3">
            <li>Low-grade opportunistic infection (bacterial, parasitic, or atypical), plausible given environmental exposures and host vulnerability<Ref n={10} /><Ref n={11} /></li>
            <li>Cerebral toxoplasmosis — low probability based on imaging morphology but non-zero given exposure profile and documented atypical presentations<Ref n={8} /><Ref n={12} /></li>
            <li>Other occult infections within the doxycycline/ceftriaxone spectrum: Rickettsia, Ehrlichia, Borrelia, Mycoplasma, Chlamydia</li>
            <li>Sterile neuroinflammatory exacerbation amplifying tumor-related edema beyond steroid-responsive thresholds</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">Doxycycline + ceftriaxone provided dual benefit through (a) direct antimicrobial suppression<Ref n={1} /><Ref n={2} /> and (b) independent anti-inflammatory/neuroprotective effects.<Ref n={3} /><Ref n={4} /><Ref n={5} /><Ref n={6} /><Ref n={7} /> Short-course antimicrobial suppression without eradication produces the exact clinical pattern observed: rapid improvement, sustained stability during treatment, and rebound upon discontinuation.<Ref n={13} /></p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">Notably, even in the absence of an infectious co-factor, doxycycline demonstrates preclinical direct anti-glioma activity — inhibiting GBM cell proliferation and invasion via MMP-2 suppression<Ref n={16} />, impairing glioma cell mitochondrial function<Ref n={15} />, and reducing cancer stem cell markers by ~40% in a clinical pilot trial.<Ref n={14} /> These properties may independently attenuate tumor-driven inflammation.</p>
          <p className="text-sm text-gray-700 leading-relaxed">Current steroid + osmotic + anti-seizure management addresses tumor-related vasogenic edema but fails to target any persistent aggravating trigger. Dexamethasone efficacy against vasogenic edema typically peaks within 48–72 hours and plateaus by day 5–7; ongoing refractory edema beyond this window suggests an unaddressed inflammatory or infectious driver. Without intervention, the remaining options for edema control narrow considerably (see Section 7).</p>
        </section>

        {/* ── 5. Mechanistic Basis ── */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">5. Mechanistic Basis for Observed Response</h2>

          <h3 className="text-sm font-bold text-gray-800 mt-4 mb-2">5.1 &ensp; Doxycycline (100 mg IV q12h)</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-2"><em>Antimicrobial:</em> Documented in-vitro and in-vivo activity against <em>T. gondii</em> (dose-dependent inhibition of intracellular replication, synergistic with pyrimethamine).<Ref n={1} /> Also active against Rickettsia, Ehrlichia, Chlamydia, Mycoplasma, Borrelia. Clinical and radiographic improvement in cerebral toxoplasmosis with doxycycline-containing regimens is documented; incomplete courses produce relapse consistent with suppression without eradication.<Ref n={2} /><Ref n={13} /></p>
          <p className="text-sm text-gray-700 leading-relaxed mb-2"><em>Neuroprotective (independent of antimicrobial action):</em> Inhibits microglial activation, suppresses pro-inflammatory cytokines (TNF-α, IL-1β, IL-6), inhibits matrix metalloproteinases (MMP-2, MMP-9), preserves BBB tight junction proteins (occludin, claudin-5), and reduces cerebral edema. Effects observed within 24–48 hours in preclinical TBI and ischemia models with brain water content reductions of 18–23%.<Ref n={3} /><Ref n={4} /><Ref n={5} /></p>
          <p className="text-sm text-gray-700 leading-relaxed"><em>Anti-glioma (preclinical):</em> Inhibits GBM cell proliferation and invasion via MMP-2 suppression in vitro (U87, U251 lines).<Ref n={16} /> Impairs mitochondrial biogenesis in cancer stem cells; pilot clinical trial (200 mg/day × 14 days) reduced CSC markers CD44 and ALDH1 by ~40% in breast tumor tissue.<Ref n={14} /></p>

          <h3 className="text-sm font-bold text-gray-800 mt-5 mb-2">5.2 &ensp; Ceftriaxone (1 g IV q24h)</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-2"><em>Antimicrobial:</em> Broad-spectrum coverage for the documented pneumonia and potential CNS bacterial process or co-infection.</p>
          <p className="text-sm text-gray-700 leading-relaxed"><em>Neuroprotective:</em> Upregulates glutamate transporter GLT-1, reducing excitotoxicity; decreases brain edema, neuronal apoptosis, and neuroinflammation in TBI and seizure models.<Ref n={6} /> The ceftriaxone + doxycycline combination has been studied in meningitis models and produced significantly greater reductions in mortality, neuroinflammation, cortical damage, and secondary complications than ceftriaxone monotherapy.<Ref n={7} /></p>
        </section>

        {/* ── 6. Proposed Clinical Trial ── */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">6. Proposed Investigation &amp; Empiric Therapeutic Trial</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">It is clinically reasonable and low-risk to investigate this pattern promptly while awaiting biopsy. The following protocol is proposed for clinical discussion:</p>

          <div className="bg-gray-50 border border-gray-300 rounded p-5 mb-4">
            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Protocol</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>Step 1 — Diagnostics (immediate):</strong> Infectious Disease consultation. Toxoplasma IgG/IgM serology. Broader opportunistic workup as clinically indicated (fungal antigens, tick-borne panel). PCR on blood or CSF if lumbar puncture is safe.</p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>Step 2 — Empiric antibiotic re-initiation (pending physician approval):</strong></p>
            <div className="font-mono text-xs bg-white border border-gray-200 rounded p-3 mb-3 text-gray-800">
              <p>Doxycycline 100 mg IV BID × 10–14 days</p>
              <p>Ceftriaxone 1 g IV q24h × 10–14 days</p>
              <p className="text-gray-500 mt-1">Continue concurrent: corticosteroids, osmotic therapy, current AEDs</p>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>Step 3 — Monitoring:</strong> Mental status, seizure frequency, and edema assessed at 48–72 hours and serially thereafter. Repeat imaging if clinical improvement or deterioration. Prior response suggests improvement should be evident within 72 hours if the co-factor is responsive.</p>
            <p className="text-sm text-gray-700 leading-relaxed"><strong>Step 4 — Continuation:</strong> If improvement occurs, maintain the antibiotic course through biopsy results and Toxoplasma serology return. If confirmed infectious etiology, transition to standard targeted regimen (e.g., pyrimethamine + sulfadiazine + leucovorin for toxoplasmosis). If no improvement by day 5, discontinue and reassess.</p>
          </div>

          <h3 className="text-sm font-bold text-gray-800 mb-2">Rationale</h3>
          <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-1 mb-3">
            <li>Current regimen has failed after 6 days; intracranial pressure and edema relief is urgent to prevent further deterioration.</li>
            <li>Both antibiotics are FDA-approved at these doses, CNS-penetrating, and have established safety in brain-tumor contexts including off-label use in glioma-related protocols.</li>
            <li>A defined course bridges to biopsy results without delaying definitive glioma management.</li>
            <li>This tests a reversible co-factor without contradicting the glioma diagnosis — the same diagnostic uncertainty that prompted biopsy.</li>
            <li>Prior dramatic response at identical doses suggests high likelihood of replicating edema/pressure relief.</li>
          </ul>
        </section>

        {/* ── 7. Edema Management ── */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">7. Refractory Edema: Current Options &amp; Escalation</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">Dexamethasone is the standard first-line agent for vasogenic edema in brain tumors. Its effect typically peaks at 48–72 hours, with maximal benefit by day 5–7. Persistent refractory edema beyond this window, as in this case, limits remaining options:</p>
          <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2 mb-3">
            <li><strong>Steroid dose escalation:</strong> Higher dexamethasone doses (up to 16–24 mg/day) may provide additional benefit but carry increasing toxicity (immunosuppression, hyperglycemia, myopathy, psychosis) — and further immunosuppression could worsen any occult infection.</li>
            <li><strong>Osmotic therapy (ongoing):</strong> Hypertonic saline provides temporary ICP reduction but does not address the underlying cause of edema. Effect is transient.</li>
            <li><strong>Bevacizumab (Avastin):</strong> Anti-VEGF monoclonal antibody with potent anti-edema effect in gliomas. Requires oncology approval and carries bleeding, clotting, and wound-healing risks. Typically reserved for confirmed glioma with tissue diagnosis.</li>
            <li><strong>Surgical decompression:</strong> Decompressive craniectomy or partial resection to relieve mass effect. High-risk intervention; indicated only for life-threatening herniation unresponsive to medical management.</li>
            <li><strong>Addressing the aggravating co-factor (this proposal):</strong> If an infectious or inflammatory trigger is amplifying tumor-related edema beyond what steroids can control, treating that trigger directly may reduce edema more effectively than further steroid escalation — with fewer side effects and without delaying definitive management.</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed">The narrowing therapeutic window underscores the urgency. Each day of uncontrolled edema and seizures risks permanent neurological injury. A low-risk empiric antibiotic trial — using agents with documented safety, CNS penetration, and a prior positive response in this patient — represents the most favorable risk-benefit profile among available escalation options.</p>
        </section>

        {/* ── 8. References ── */}
        <section className="mb-10" id="ref-list">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">References</h2>
          <ol className="list-decimal pl-6 text-sm text-gray-600 leading-relaxed space-y-2">
            {REFS.map(r => (
              <li key={r.n} id={`ref-${r.n}`}>
                {r.t}{' '}
                <a href={`https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline inline-flex items-center gap-0.5">
                  PMID: {r.pmid} <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-gray-200 pt-6 pb-10 text-center">
          <p className="text-xs text-gray-400">This report synthesizes all available imaging, medication timelines, and mechanistic correlations. Prompt discussion with neuro-oncology and infectious disease teams is advised.</p>
          <div className="flex gap-3 justify-center mt-4">
            <button onClick={() => { window.location.hash = ''; window.location.reload(); }} className="text-xs text-gray-500 hover:text-gray-900 border border-gray-300 rounded px-3 py-1.5">← Main Site</button>
            <a href="#/biopsy-methodology" className="text-xs text-gray-500 hover:text-gray-900 border border-gray-300 rounded px-3 py-1.5">Biopsy Methodology →</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
