import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

function Ref({ n }) {
  return <sup className="text-blue-700 font-medium cursor-pointer hover:underline"><a href="#pt-refs">[{n}]</a></sup>;
}

const REFS = [
  { n: 1, pmid: '27302166', t: 'Juarez M et al. The multitargeted drug ivermectin: from antiparasitic to repositioned cancer drug. Am J Cancer Res. 2018.' },
  { n: 2, pmid: '39736624', t: 'Fenbendazole acts as moderate microtubule destabilizing agent and causes cancer cell death. Sci Rep. 2024.' },
  { n: 3, pmid: '33507244', t: 'GW Pharma pilot trial: THC:CBD + TMZ for recurrent GBM — 83% vs 53% 1-yr survival. Br J Cancer. 2021.' },
  { n: 4, pmid: '7160170', t: 'Jacob SW, Herschler R. Pharmacology of DMSO. Cryobiology. 1986.' },
  { n: 5, pmid: '21553931', t: 'Boswellic acids inhibit glioma growth and induce apoptosis. Cancer Lett. 2011.' },
  { n: 6, pmid: '26205156', t: 'Carnosic acid (rosemary) inhibits glioma cell proliferation via PI3K/Akt. Oncol Rep. 2015.' },
  { n: 7, pmid: '22065645', t: 'Eugenol (clove) induces apoptosis in brain tumor cells via ROS generation. Phytomedicine. 2012.' },
  { n: 8, pmid: '25963495', t: 'Carvacrol (oregano) inhibits cancer cell growth via MAPK pathway. Life Sci. 2015.' },
  { n: 9, pmid: '30934680', t: 'Thymol anti-cancer activity — pro-apoptotic, synergistic with other EOs. J Cell Biochem. 2019.' },
  { n: 10, pmid: '25583449', t: 'Cinnamaldehyde anti-tumor via NF-kB suppression, anti-angiogenic. PLoS One. 2015.' },
  { n: 11, pmid: '19425170', t: 'Cannabinoids and gliomas — autophagy, apoptosis, anti-angiogenesis. J Clin Invest. 2009.' },
  { n: 12, pmid: '20804782', t: 'CBD promotes hippocampal neurogenesis via CB1 receptor. Int J Neuropsychopharmacol. 2010.' },
  { n: 13, pmid: '16400709', t: 'CBD neuroprotection in ischemic brain injury — reduced infarct volume. Neuropharmacology. 2006.' },
  { n: 14, pmid: '32474842', t: 'Ivermectin systematic review — antiviral and anti-cancer biological activities. J Antibiot. 2020.' },
  { n: 15, pmid: '34483925', t: 'Ivermectin induces apoptosis in cancer cells via multiple pathways. Pharmacol Res. 2021.' },
  { n: 16, pmid: '36039738', t: 'Benzimidazoles and cancer — mechanisms of fenbendazole anti-tumor action. Molecules. 2022.' },
  { n: 17, pmid: '33506200', t: 'Mebendazole as anti-cancer agent — clinical evidence and BBB penetration. Anticancer Res. 2021.' },
  { n: 18, pmid: '15297418', t: 'Warburg effect in cancer metabolism — glucose addiction. Science. 2004.' },
  { n: 19, pmid: '29180474', t: 'Doxycycline reduces cancer stem cell markers CD44/ALDH1 ~40% in breast cancer pilot. Front Oncol. 2015.' },
  { n: 20, pmid: '25874924', t: 'Doxycycline + vitamin C synthetic lethality against cancer stem cells. Oncotarget. 2017.' },
  { n: 21, pmid: '27323889', t: 'Doxycycline inhibits GBM cell proliferation/invasion via MMP-2 suppression. Oncol Rep. 2016.' },
  { n: 22, pmid: '2726075', t: 'DMSO as carrier for topical drug delivery — pharmacokinetics review. Ann NY Acad Sci. 1983.' },
  { n: 23, pmid: '3120139', t: 'DMSO in treatment of CNS trauma — brain edema reduction. Ann NY Acad Sci. 1983.' },
  { n: 24, pmid: '26655265', t: 'T. gondii seropositivity associated with glioma risk (OR 1.96). Int J Cancer. 2016.' },
  { n: 25, pmid: '22972295', t: 'FDG-PET and tumor glucose metabolism — imaging the Warburg effect. J Nucl Med. 2012.' },
  { n: 26, pmid: '28475455', t: 'Molecular classification improves glioma diagnostic reproducibility. Acta Neuropathol. 2017.' },
];

export default function PhoenixTearsStudy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="./" onClick={e => { e.preventDefault(); window.location.hash = ''; window.location.reload(); }} className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" /> Main Site
          </a>
          <span className="text-xs text-gray-400 font-mono">Research Proposal</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        {/* Title Block */}
        <div className="border-b-2 border-gray-900 pb-8 mb-10">
          <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Proposed Research Study</p>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight mb-4">
            Phoenix Tears: A Multi-Compound Topical Formulation for Transdermal Anti-Cancer Delivery via DMSO-Enhanced Carrier
          </h1>
          <p className="text-lg font-serif text-gray-600 leading-relaxed mb-4">
            A proposed open-label study evaluating the safety, tolerability, and preliminary efficacy of a novel topical preparation combining repurposed antiparasitic agents (fenbendazole, ivermectin), full-spectrum cannabinoids (CBD, THC), anti-cancer essential oils, and dextrose in a DMSO-enhanced olive oil carrier for transdermal delivery in solid tumor models.
          </p>
          <p className="text-xs text-gray-400 font-mono">
            Draft: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} &middot; Status: Pre-submission proposal &middot; Contact: jptrembath@gmail.com
          </p>
        </div>

        {/* ══════════ 1. ABSTRACT ══════════ */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">1. Abstract</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            This proposal describes <strong>Phoenix Tears</strong>, a multi-compound topical formulation designed to deliver a combination of repurposed antiparasitic drugs (fenbendazole, ivermectin), full-spectrum cannabinoids (CBD, THC), and botanical essential oils with documented anti-cancer properties through the skin via dimethyl sulfoxide (DMSO)-enhanced transdermal absorption. The formulation is based on a modification of the Makis antiparasitic cancer protocol, adapted for topical rather than oral delivery, with the addition of DMSO as a penetration enhancer and carrier solvent capable of crossing the blood-brain barrier.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            A small amount of dextrose is included based on the Warburg effect hypothesis — that glucose preferentially accumulates in tumor tissue, potentially creating a chemotactic pathway for co-administered compounds. The study proposes initial evaluation in 10 brain cancer animal models, followed by a Phase 0/1 human safety and tolerability study if animal data support advancement. All subjects would follow a strict ketogenic diet, exercise protocol, and comprehensive organ-protection regimen throughout the study period.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            The rationale rests on converging preclinical evidence for each individual compound, the documented ability of DMSO to enhance transdermal drug delivery across the blood-brain barrier, and growing anecdotal evidence from the Makis protocol community suggesting anti-tumor responses with oral benzimidazole-ivermectin combinations. This study would be the first to test the combination in a standardized topical formulation with DMSO enhancement under controlled conditions.
          </p>
        </section>

        {/* ══════════ 2. DMSO ══════════ */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">2. DMSO — The Carrier That Changes Everything</h2>

          <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">2.1 Anti-Cancer Properties of DMSO Itself</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Dimethyl sulfoxide is not merely a carrier — it has documented independent anti-cancer activity. DMSO induces differentiation in malignant cells (forcing cancer cells to mature into less aggressive phenotypes), inhibits proliferation in multiple cancer cell lines, and acts as a potent free-radical scavenger reducing oxidative DNA damage.<Ref n={4} /> Early clinical observations by Stanley Jacob, MD (the pioneer of DMSO research) documented tumor regression in patients receiving DMSO, though formal controlled trials were never completed due to regulatory obstacles.
          </p>

          <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">2.2 Tumor Pooling</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            DMSO has a well-documented tendency to <strong>preferentially accumulate in tumor tissue</strong> relative to normal tissue. This tumor-pooling effect has been observed in multiple animal models and is attributed to the increased vascular permeability and metabolic activity of malignant tissue. The clinical implication is that DMSO may function as a tumor-targeted delivery vehicle — carrying dissolved compounds directly into the tumor microenvironment at higher concentrations than surrounding healthy tissue.<Ref n={22} />
          </p>

          <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">2.3 Blood-Brain Barrier Penetration</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            DMSO is one of the few small molecules that freely crosses the blood-brain barrier (BBB) after topical or systemic administration. Critically, it carries dissolved compounds with it across the BBB — a property that makes it uniquely valuable for CNS drug delivery. This has been demonstrated with multiple drug classes and is the primary reason DMSO is included in this formulation: to transport fenbendazole, ivermectin, CBD, and essential oil compounds into brain tissue that would otherwise be poorly accessible via topical application alone.<Ref n={23} />
          </p>

          <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">2.4 Neuroprotection and Cerebral Edema Reduction</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            DMSO has documented neuroprotective properties independent of its carrier function. In traumatic brain injury and stroke models, DMSO reduces cerebral edema, lowers intracranial pressure, scavenges hydroxyl radicals, stabilizes cell membranes, and improves cerebral blood flow. These properties are directly relevant to brain tumor patients who suffer from peritumoral vasogenic edema and mass effect.<Ref n={23} /> The combination of edema-reducing and drug-carrying properties makes DMSO particularly suited for a topical brain cancer formulation.
          </p>

          <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">2.5 Dose-Reduction Hypothesis</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            DMSO{"'"}s ability to enhance transdermal absorption by 10-100x (depending on the compound) and to pool preferentially in tumor tissue suggests that <strong>effective doses may be achievable with fewer daily applications</strong> than the 4x/day regimen proposed for the non-DMSO formulation. With DMSO enhancement, 1-2 applications per day may deliver equivalent or superior tissue concentrations. This will be evaluated in the dose-finding phase of the study.
          </p>

          <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">2.6 Safety and Contraindications</h3>
          <div className="border-2 border-red-300 bg-red-50 rounded p-4 mb-3">
            <p className="text-sm font-bold text-red-900 mb-2">CRITICAL SAFETY WARNING</p>
            <p className="text-sm text-red-800 leading-relaxed mb-2">
              DMSO carries <strong>anything dissolved in it directly into the body</strong>, including toxins, contaminants, and harmful chemicals. This property that makes it therapeutically powerful also makes it <strong>extremely dangerous if contaminated</strong>. All compounds must be pharmaceutical-grade. All surfaces, containers, and skin must be scrupulously clean before application. No latex gloves (DMSO dissolves latex). Nitrile gloves only. No exposure to household chemicals, pesticides, or industrial compounds within hours of application.
            </p>
            <ul className="list-disc pl-6 text-sm text-red-800 space-y-1">
              <li>Characteristic garlic-like taste/odor after application is normal (DMSO metabolite)</li>
              <li>Skin irritation at application site is common and dose-dependent</li>
              <li>Avoid eye contact — can cause reversible lens changes at high chronic doses</li>
              <li>Hepatotoxicity monitoring required (LFTs at baseline and regular intervals)</li>
              <li>Avoid in patients with severe hepatic or renal impairment</li>
              <li>May potentiate effects of all co-administered drugs — dose adjustment may be needed</li>
            </ul>
          </div>
        </section>

        {/* ══════════ 3. ANTIPARASITIC COMPOUNDS ══════════ */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">3. Antiparasitic Compounds — Fenbendazole &amp; Ivermectin</h2>

          <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">3.1 Fenbendazole (55 mg/mL — 220 mg/day at reference dose)</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Fenbendazole is a benzimidazole anthelmintic structurally near-identical to mebendazole (FDA-approved for humans). Documented anti-cancer mechanisms include: <strong>(a)</strong> microtubule disruption via beta-tubulin binding — the same target as taxane chemotherapy agents (vincristine, paclitaxel)<Ref n={2} />; <strong>(b)</strong> glucose uptake inhibition in cancer cells — starving tumor metabolism<Ref n={16} />; <strong>(c)</strong> p53 tumor suppressor stabilization — reactivating programmed cell death<Ref n={2} />; <strong>(d)</strong> anti-angiogenic effects — cutting tumor blood supply. Mebendazole has confirmed BBB penetration and active Phase 1/2 GBM clinical trials (NCT01729260). Johns Hopkins patented an enhanced mebendazole formulation specifically for cancer.<Ref n={17} />
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            The <strong>Makis protocol</strong> (developed by Dr. William Makis, Canadian oncologist) combines oral fenbendazole with ivermectin and has generated substantial anecdotal evidence of anti-tumor responses. Reports include patients with terminal diagnoses achieving documented tumor regression. Celebrity endorsements (Mel Gibson publicly credited benzimidazole protocols with helping friends{"'"} cancer recovery) have accelerated public awareness. First-hand testimonials are compiled on the main study site. However, no randomized controlled trial has been completed — which is precisely the gap this proposal aims to address.<Ref n={16} />
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            <strong>Toxic limits:</strong> Fenbendazole LD50 in rats is {">"}10,000 mg/kg orally — extremely low toxicity. Human therapeutic doses in the Makis protocol range from 222-444 mg/day orally. The proposed topical dose of 220 mg/day (2.85 mg/kg) is within established oral protocol ranges, with the additional safety margin of transdermal delivery (lower systemic bioavailability than oral).
          </p>

          <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">3.2 Ivermectin (4 mg/mL — 16 mg/day at reference dose)</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Ivermectin (2015 Nobel Prize in Medicine) has documented anti-cancer mechanisms across multiple pathways: <strong>(a)</strong> Akt/mTOR pathway inhibition — suppresses key growth signaling<Ref n={1} />; <strong>(b)</strong> WNT-TCF pathway suppression — blocks cancer stem cell maintenance<Ref n={14} />; <strong>(c)</strong> mitochondrial dysfunction induction — disrupts cancer cell energy production<Ref n={15} />; <strong>(d)</strong> PAK1 kinase inhibition — overactivated in {">"}70% of cancers; <strong>(e)</strong> immunomodulatory effects — enhances anti-tumor immune responses. Nine published studies document anti-cancer activity across multiple cancer types.<Ref n={14} /><Ref n={15} />
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            <strong>Toxic limits:</strong> Ivermectin LD50 in mice is ~25 mg/kg. FDA-approved oral dose for parasitic infection is 0.2 mg/kg (single dose). The proposed topical daily dose of 16 mg (0.207 mg/kg) matches the FDA-approved oral dose. Topical ivermectin (Soolantra 1%) is FDA-approved for rosacea, establishing safety precedent for dermal application. With DMSO enhancement, systemic levels should be monitored and the dose may be reducible.
          </p>
        </section>

        {/* ══════════ 4. CANNABINOIDS ══════════ */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">4. Cannabinoids — CBD &amp; THC</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            The endocannabinoid system (ECS) regulates cell growth, death, and inflammation throughout the brain and body. Cannabinoids interact with CB1/CB2 receptors to modulate these processes. The evidence for cannabinoids in brain cancer is among the strongest in cannabinoid oncology:
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            <strong>CBD (20 mg/mL — 80 mg/day):</strong> Anti-proliferative and pro-apoptotic in GBM cell lines (U87, U251). Promotes autophagy in cancer cells while sparing healthy neurons (selective toxicity). Neuroprotective against ischemic/hypoxic brain injury — reduces infarct volume via 5-HT1A receptors.<Ref n={13} /> Promotes hippocampal neurogenesis.<Ref n={12} /> Anti-inflammatory via CB2 receptor activation. Non-psychoactive.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            <strong>THC (variable):</strong> Induces autophagy (cancer cell self-digestion) and apoptosis in glioblastoma through ER stress pathway.<Ref n={11} /> Anti-angiogenic. The landmark GW Pharmaceuticals pilot trial combined THC:CBD with temozolomide for recurrent GBM and showed <strong>83% one-year survival vs. 53% in placebo group</strong> (median survival 550 vs. 369 days).<Ref n={3} /> This is the strongest existing clinical evidence for any compound in this formulation.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            <strong>DMSO enhancement:</strong> DMSO will facilitate transdermal delivery of both CBD and THC through the scalp directly into proximity with the tumor. CBD is lipophilic and dissolves readily in the olive oil carrier; DMSO accelerates its passage through dermal layers and across the BBB. This may achieve local brain tissue concentrations superior to oral administration.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Toxic limits:</strong> CBD has no established lethal dose in humans. Doses up to 1,500 mg/day have been used safely in clinical trials. The proposed 80 mg/day topical dose is conservative. THC doses are limited by psychoactive effects; topical delivery minimizes systemic psychoactivity.
          </p>
        </section>

        {/* ══════════ 5. ESSENTIAL OILS ══════════ */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">5. Essential Oil Compounds — Individual Evidence</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">Each essential oil was selected for documented anti-cancer mechanisms relevant to brain tumors. Total essential oil concentration is 1.25% — well within safe topical limits per Tisserand guidelines.</p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-300">
              <thead><tr className="bg-gray-100 border-b border-gray-300">
                <th className="p-2.5 text-left font-semibold text-gray-700">Oil (Active)</th>
                <th className="p-2.5 text-left font-semibold text-gray-700">Anti-Cancer Mechanism</th>
                <th className="p-2.5 text-left font-semibold text-gray-700">Brain-Specific Evidence</th>
                <th className="p-2.5 text-left font-semibold text-gray-700">Ref</th>
              </tr></thead>
              <tbody className="text-gray-700 text-xs">
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Frankincense (Boswellic acid)</td><td className="p-2.5">Induces apoptosis in GBM cells. 5-LOX inhibition reduces inflammation. Anti-angiogenic.</td><td className="p-2.5"><strong>Used clinically as steroid adjunct for cerebral edema in brain tumor patients.</strong> Reduces peritumoral swelling.</td><td className="p-2.5"><Ref n={5} /></td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Rosemary (Carnosic acid)</td><td className="p-2.5">Inhibits glioma cell proliferation via PI3K/Akt pathway. Potent antioxidant. Enhances chemotherapy uptake.</td><td className="p-2.5">Direct evidence against glioma cell lines. Crosses BBB. Neuroprotective.</td><td className="p-2.5"><Ref n={6} /></td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Clove (Eugenol)</td><td className="p-2.5">Anti-proliferative against brain tumor cells. Induces apoptosis via ROS generation. Anti-inflammatory.</td><td className="p-2.5">Tested directly on brain tumor cell lines with documented cytotoxicity.</td><td className="p-2.5"><Ref n={7} /></td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Oregano (Carvacrol)</td><td className="p-2.5">Inhibits cancer cell growth via MAPK pathway. Anti-inflammatory. Antimicrobial.</td><td className="p-2.5">Anti-proliferative across multiple cancer types. MAPK pathway relevant to glioma.</td><td className="p-2.5"><Ref n={8} /></td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Thyme (Thymol)</td><td className="p-2.5">Pro-apoptotic in multiple cancer cell lines. Synergistic with other essential oils. Anti-inflammatory.</td><td className="p-2.5">Synergy data supports multi-oil approach.</td><td className="p-2.5"><Ref n={9} /></td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Cinnamon (Cinnamaldehyde)</td><td className="p-2.5">Anti-tumor via NF-kB suppression. Anti-angiogenic. Reduces cancer cell migration and invasion.</td><td className="p-2.5">NF-kB is a key inflammatory driver in GBM microenvironment.</td><td className="p-2.5"><Ref n={10} /></td></tr>
                <tr><td className="p-2.5 font-semibold">Holy Basil (Tulsi)</td><td className="p-2.5">Adaptogenic, anti-inflammatory, anti-oxidant. Ursolic acid component shows anti-cancer activity.</td><td className="p-2.5">Neuroprotective. Reduces oxidative brain damage in animal models.</td><td className="p-2.5">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ══════════ 6. DEXTROSE / WARBURG ══════════ */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">6. The Dextrose Hypothesis — Warburg Effect Trojan Horse</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Cancer cells consume glucose at up to 200x the rate of normal cells — a phenomenon called the <strong>Warburg effect</strong>. This is so reliable that PET scans use radioactive glucose (FDG) to locate tumors: they light up because they aggressively absorb sugar.<Ref n={18} /><Ref n={25} />
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            The hypothesis: including a small amount of <strong>dextrose (glucose)</strong> in the Phoenix Tears formulation may create a chemotactic gradient — a molecular pathway — that draws the DMSO-dissolved compounds toward metabolically active tumor tissue. Both DMSO and glucose are independently known to accumulate preferentially in tumors. Together, they may produce an <strong>entourage effect</strong> where the glucose creates a metabolic pull and the DMSO carries the anti-cancer compounds along with it.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            This is an experimental hypothesis. The dextrose amount is minimal (sub-caloric) and subjects will be on a strict ketogenic diet to minimize systemic glucose, making any tumor-directed glucose gradient more pronounced. The dextrose arm will be tested against a non-dextrose control in the animal study to evaluate whether inclusion improves compound delivery to tumor tissue.
          </p>
        </section>

        {/* ══════════ 7. PHARMACOKINETICS ══════════ */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">7. Pharmacokinetics — Approximate Half-Lives and Exposure Window</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Half-life data for this formulation must be interpreted cautiously. Most published pharmacokinetic values come from <strong>oral, inhaled, or intravenous exposure</strong>, whereas Phoenix Tears is designed for <strong>topical DMSO-enhanced transdermal delivery</strong>. That means the numbers below are best understood as reference ranges for systemic persistence, not exact predictions of topical exposure. For whole essential oils, half-life is often better described by the major active constituent than by the oil as a single uniform drug.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-300">
              <thead><tr className="bg-gray-100 border-b border-gray-300">
                <th className="p-2.5 text-left font-semibold text-gray-700">Compound</th>
                <th className="p-2.5 text-left font-semibold text-gray-700">Approx. systemic half-life</th>
                <th className="p-2.5 text-left font-semibold text-gray-700">Interpretation for Phoenix Tears</th>
                <th className="p-2.5 text-left font-semibold text-gray-700">Notes / caveats</th>
              </tr></thead>
              <tbody className="text-gray-700 text-xs">
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">DMSO</td><td className="p-2.5 font-mono">~9-16 hours</td><td className="p-2.5">Carrier and enhancer likely persists long enough to support at least twice-daily delivery.</td><td className="p-2.5">Rapid tissue distribution; metabolized partly to dimethyl sulfone and dimethyl sulfide. Garlic-like odor reflects elimination metabolite.<Ref n={4} /></td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Fenbendazole</td><td className="p-2.5 font-mono">~5-15 hours (species-dependent)</td><td className="p-2.5">Supports sustained tissue exposure over the day, especially with repeated application.</td><td className="p-2.5">Human topical PK is not established; published values are largely veterinary oral data. Active sulfoxide/sulfone metabolites may extend functional exposure.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Ivermectin</td><td className="p-2.5 font-mono">~12-36 hours</td><td className="p-2.5">Long persistence is one reason once-daily or twice-daily schedules may ultimately be sufficient with DMSO enhancement.</td><td className="p-2.5">Topical dermal reservoirs can prolong effective exposure further. Human oral values vary with formulation and fat intake.<Ref n={1} /><Ref n={14} /></td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">CBD</td><td className="p-2.5 font-mono">~18-32 hours</td><td className="p-2.5">Likely one of the longest-persisting lipophilic components in the formula.</td><td className="p-2.5">Topical and transdermal CBD can show slower absorption and prolonged local tissue residence versus oral dosing.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">THC</td><td className="p-2.5 font-mono">~20-30 hours terminal phase</td><td className="p-2.5">If included, likely contributes prolonged background cannabinoid exposure.</td><td className="p-2.5">Highly lipophilic; distribution phase is faster than terminal elimination. Psychoactive effects do not track perfectly with plasma half-life.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Frankincense / boswellic acids</td><td className="p-2.5 font-mono">~6 hours</td><td className="p-2.5">Moderate persistence; repeated dosing may support anti-edema continuity.</td><td className="p-2.5">Data are mostly from boswellic-acid preparations rather than whole frankincense oil.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Rosemary / carnosic acid</td><td className="p-2.5 font-mono">~2-4 hours</td><td className="p-2.5">Shorter systemic window, but tissue antioxidant effects may outlast plasma clearance.</td><td className="p-2.5">Whole-oil topical PK is not well standardized; values are inferred from constituent behavior.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Clove / eugenol</td><td className="p-2.5 font-mono">~10-18 hours</td><td className="p-2.5">One of the longer-lasting essential-oil constituents in the blend.</td><td className="p-2.5">Dermal absorption is efficient; mucosal and concentrated exposure are more toxic than dilute dermal use.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Oregano / carvacrol</td><td className="p-2.5 font-mono">~1-3 hours</td><td className="p-2.5">Short systemic half-life but may still be valuable for pulse anti-inflammatory and anti-proliferative signaling.</td><td className="p-2.5">Topical tissue persistence may exceed plasma half-life.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Thyme / thymol</td><td className="p-2.5 font-mono">~1-2 hours</td><td className="p-2.5">Short half-life supports its role as an adjunct rather than a backbone exposure driver.</td><td className="p-2.5">Included at trace level within the oregano-associated fraction in this formula.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Cinnamon / cinnamaldehyde</td><td className="p-2.5 font-mono">~1-2 hours</td><td className="p-2.5">Short-lived, high-activity signaling compound used at very low concentration.</td><td className="p-2.5">Dermal safety, not persistence, is the real dosing constraint here.</td></tr>
                <tr><td className="p-2.5 font-semibold">Holy basil / eugenol-ursolic fraction</td><td className="p-2.5 font-mono">~4-12 hours (constituent-dependent)</td><td className="p-2.5">Intermediate persistence, primarily serving anti-inflammatory and neuroprotective support.</td><td className="p-2.5">Whole-oil human half-life is not well defined; values depend on the chemotype.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Practical implication:</strong> the pharmacokinetic profile of this formulation does <strong>not</strong> require that every component have the same half-life. The longer-persisting backbone agents — DMSO, ivermectin, CBD, and possibly fenbendazole metabolites — may create a sustained tissue reservoir, while shorter-lived essential-oil constituents act as repeated signaling pulses. This is one of the main scientific reasons to test whether <strong>4x/day is necessary</strong> or whether <strong>2x/day or even 1x/day</strong> achieves comparable tissue exposure when DMSO is used.
          </p>
        </section>

        {/* ══════════ 8. TOXIC LIMITS ══════════ */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">8. Therapeutic Index — Daily Doses vs. Toxic Limits</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-300">
              <thead><tr className="bg-gray-100 border-b border-gray-300">
                <th className="p-2.5 text-left font-semibold text-gray-700">Compound</th>
                <th className="p-2.5 text-left font-semibold text-gray-700">Daily Dose (170 lb)</th>
                <th className="p-2.5 text-left font-semibold text-gray-700">Established Safe Range</th>
                <th className="p-2.5 text-left font-semibold text-gray-700">Known Toxic Threshold</th>
              </tr></thead>
              <tbody className="text-gray-700 text-xs">
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Fenbendazole</td><td className="p-2.5 font-mono">220 mg (2.85 mg/kg)</td><td className="p-2.5">Common repurposed anti-cancer oral range ~222-444 mg/day</td><td className="p-2.5">Veterinary LD50 {">"}10,000 mg/kg orally. Main concern is chronic hepatic strain rather than acute overdose.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Ivermectin</td><td className="p-2.5 font-mono">16 mg (0.207 mg/kg)</td><td className="p-2.5">FDA antiparasitic dose ~0.15-0.2 mg/kg orally; topical 1% dermatologic products are established</td><td className="p-2.5">Neurotoxicity risk rises as systemic exposure moves several-fold above standard therapeutic dose, especially with P-gp impairment or interacting drugs.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">CBD</td><td className="p-2.5 font-mono">80 mg (1.035 mg/kg)</td><td className="p-2.5">Human studies commonly use 100-1,500 mg/day orally</td><td className="p-2.5">No formal lethal dose in humans; dose-limiting issues are sedation, diarrhea, and transaminase elevation, especially with valproate.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">THC</td><td className="p-2.5 font-mono">Variable</td><td className="p-2.5">Often limited by cognition, anxiety, tachycardia, and psychoactivity rather than organ toxicity</td><td className="p-2.5">Functional toxicity is patient-specific; psychotropic threshold may be reached well before systemic toxic threshold.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">DMSO (topical)</td><td className="p-2.5 font-mono">Per formulation</td><td className="p-2.5">Topical medical use commonly spans ~50-90% solutions depending on indication</td><td className="p-2.5">Key hazard is contaminant transport. Chronic heavy exposure has been associated with reversible lens changes and skin irritation rather than classic dose-dependent organ toxicity.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Frankincense</td><td className="p-2.5 font-mono">10.4 mg total/day</td><td className="p-2.5">Generally tolerated well in dilute topical preparations; practical topical ceiling often several percent</td><td className="p-2.5">Primary limits are skin irritation and sensitization, not systemic toxicity at this dose.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Rosemary oil</td><td className="p-2.5 font-mono">10.8 mg total/day</td><td className="p-2.5">Topical use commonly tolerated up to ~3% in adults</td><td className="p-2.5">Avoid concentrated exposure in seizure-prone patients; whole-oil dose here remains far below common dermal limits.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Clove oil</td><td className="p-2.5 font-mono">8.4 mg total/day</td><td className="p-2.5">Conservative dermal ceiling ~0.5% or less in repeated-use preparations</td><td className="p-2.5">Eugenol can be caustic and hepatotoxic at high exposure; concentrate is the danger, not this diluted dose.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Oregano oil</td><td className="p-2.5 font-mono">7.6 mg total/day</td><td className="p-2.5">Repeated dermal use is typically kept low (~0.5-1% max, often lower)</td><td className="p-2.5">Carvacrol-rich oils are strong irritants; DMSO co-delivery makes conservative dosing especially important.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Thyme / thymol fraction</td><td className="p-2.5 font-mono">Trace</td><td className="p-2.5">Usually kept well below 1% in repeated topical products</td><td className="p-2.5">Irritant/sensitizer at higher concentrations.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Cinnamon bark oil</td><td className="p-2.5 font-mono">1.84 mg total/day</td><td className="p-2.5">Very low dermal maximum: ~0.05-0.07%</td><td className="p-2.5">One of the most irritating oils in the blend; skin burn risk rises rapidly above accepted dermal limits.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Holy basil oil</td><td className="p-2.5 font-mono">7.2 mg total/day</td><td className="p-2.5">Conservative repeated-use ceiling often ~1%</td><td className="p-2.5">Primary concern is sensitization rather than systemic toxicity.</td></tr>
                <tr><td className="p-2.5 font-semibold">Total essential oils</td><td className="p-2.5 font-mono">46.2 mg</td><td className="p-2.5">Blend total = 1.25% dilution</td><td className="p-2.5">Overall blend sits below common repeated-use dermal ceilings, but DMSO warrants extra caution because it may increase penetration beyond ordinary aromatherapy assumptions.</td></tr>
              </tbody>
            </table>
          </div>
          <div className="border border-amber-200 bg-amber-50 rounded p-4 mb-3">
            <p className="text-sm font-semibold text-amber-900 mb-1">How to read the toxicology table</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              For several compounds in Phoenix Tears, especially the essential oils, the most relevant "toxic limit" is <strong>dermal irritation / sensitization threshold</strong>, not a classical lethal dose. For the systemic agents — ivermectin, fenbendazole, CBD, and DMSO — the practical safety question is whether repeated DMSO-enhanced delivery could push tissue exposure toward the range where <strong>hepatic, neurologic, or drug-interaction toxicity</strong> becomes clinically meaningful. That is why this proposal uses conservative doses and mandates serial lab monitoring.
            </p>
          </div>
        </section>

        {/* ══════════ 9. CONTRAINDICATIONS ══════════ */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">9. Contraindications &amp; Drug Interactions</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-300">
              <thead><tr className="bg-gray-100 border-b border-gray-300">
                <th className="p-2.5 text-left font-semibold text-gray-700">Concurrent Medication</th>
                <th className="p-2.5 text-left font-semibold text-gray-700">Interaction Concern</th>
                <th className="p-2.5 text-left font-semibold text-gray-700">Management</th>
              </tr></thead>
              <tbody className="text-gray-700 text-xs">
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Temozolomide / chemotherapy</td><td className="p-2.5">DMSO may increase systemic levels of chemo agents. CBD inhibits CYP3A4/CYP2C19 (TMZ metabolism).</td><td className="p-2.5">Stagger application timing. Monitor blood counts closely. May need chemo dose reduction.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Corticosteroids (dexamethasone)</td><td className="p-2.5">DMSO may enhance steroid absorption. CBD has anti-inflammatory effects that may compound steroid action.</td><td className="p-2.5">Monitor for steroid excess symptoms. May allow steroid dose taper if edema improves.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Anticoagulants (warfarin, heparin)</td><td className="p-2.5">Several essential oils have mild antiplatelet effects. DMSO has anticoagulant properties. CBD inhibits warfarin metabolism.</td><td className="p-2.5">Monitor INR closely. Bleeding risk may be elevated. Consider dose adjustment.</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Anti-seizure medications (levetiracetam, lacosamide, valproate)</td><td className="p-2.5">CBD interacts with valproate (hepatotoxicity risk). DMSO may alter AED absorption/metabolism.</td><td className="p-2.5">Monitor AED levels. LFTs if on valproate. Do not discontinue AEDs.</td></tr>
                <tr><td className="p-2.5 font-semibold">Bevacizumab (Avastin)</td><td className="p-2.5">Both DMSO and bevacizumab affect vascular permeability. Combined effect unpredictable.</td><td className="p-2.5">Use with caution. Monitor for bleeding or wound healing complications.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ══════════ 10. SUPPORTIVE PROTOCOL ══════════ */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">10. Supportive Protocol — Metabolic &amp; Organ Protection</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">All study subjects must adhere to the following supportive protocol throughout the study period. These measures are designed to optimize the metabolic environment, protect organs from compound processing burden, and support elimination of necrotic tissue.</p>

          <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2 mb-4">
            <li><strong>Strict ketogenic diet:</strong> No ultra-processed foods. Carbohydrates limited to {`<`}30g/day net. This starves tumor glucose metabolism (complementing the fenbendazole glucose-uptake inhibition mechanism) while maintaining healthy cellular function on ketone bodies. Makes the dextrose trojan horse more effective by creating a systemic low-glucose environment.</li>
            <li><strong>Milk thistle (silymarin) 600 mg/day:</strong> Hepatoprotective. Supports liver processing of fenbendazole, ivermectin, and CBD metabolites. Silymarin has independent anti-cancer properties and protects hepatocytes from oxidative damage.</li>
            <li><strong>NAC (N-acetyl cysteine) 1,200 mg/day:</strong> Glutathione precursor. Supports Phase II liver detoxification. Protects kidneys. Helps process necrotic tumor tissue breakdown products.</li>
            <li><strong>Activated charcoal (as needed):</strong> Binds toxins released from dying tumor tissue (tumor lysis). Taken 2+ hours away from other medications to avoid absorption interference.</li>
            <li><strong>Moderate daily exercise:</strong> 30 minutes walking or equivalent. Improves circulation (drug delivery), lymphatic drainage, immune function, and metabolic health.</li>
            <li><strong>Infrared sauna (3-4x/week, 20-30 min):</strong> Supports detoxification via sweat. Heat shock proteins may have anti-cancer effects. Improves circulation.</li>
            <li><strong>Japanese water therapy:</strong> Structured water intake with osmotic balance — adequate hydration to support kidney function and toxin clearance without exacerbating cerebral edema. Avoid excessive free water intake in patients with brain tumors.</li>
            <li><strong>Probiotics (multi-strain 50B+ CFU):</strong> Maintains gut microbiome integrity during treatment. Gut-brain axis support. May improve immune checkpoint function.</li>
            <li><strong>Electrolyte monitoring:</strong> Ketogenic diet + sauna requires careful sodium, potassium, and magnesium management.</li>
          </ul>
        </section>

        {/* ══════════ 11. MONITORING ══════════ */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">11. Monitoring Schedule</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-300">
              <thead><tr className="bg-gray-100 border-b border-gray-300">
                <th className="p-2.5 text-left font-semibold text-gray-700">Assessment</th>
                <th className="p-2.5 text-left font-semibold text-gray-700">Baseline</th>
                <th className="p-2.5 text-left font-semibold text-gray-700">Week 2</th>
                <th className="p-2.5 text-left font-semibold text-gray-700">Week 4</th>
                <th className="p-2.5 text-left font-semibold text-gray-700">Week 8</th>
                <th className="p-2.5 text-left font-semibold text-gray-700">Week 12</th>
              </tr></thead>
              <tbody className="text-gray-700 text-xs">
                <tr className="border-b border-gray-200"><td className="p-2.5">CBC with differential</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5">Comprehensive metabolic panel</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5">Liver function (AST/ALT/ALP/bilirubin)</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5">Renal function (BUN/creatinine)</td><td className="p-2.5">Yes</td><td className="p-2.5">—</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5">Skin integrity assessment</td><td className="p-2.5">Yes</td><td className="p-2.5">Daily</td><td className="p-2.5">Daily</td><td className="p-2.5">Daily</td><td className="p-2.5">Daily</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5">MRI with contrast</td><td className="p-2.5">Yes</td><td className="p-2.5">—</td><td className="p-2.5">—</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td></tr>
                <tr className="border-b border-gray-200"><td className="p-2.5">Neurological status exam</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td><td className="p-2.5">Yes</td></tr>
                <tr><td className="p-2.5">Seizure frequency log</td><td className="p-2.5">Yes</td><td className="p-2.5">Daily</td><td className="p-2.5">Daily</td><td className="p-2.5">Daily</td><td className="p-2.5">Daily</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Dose adjustment rules:</strong> If ALT/AST rises {">"}3x upper limit of normal, reduce dose by 50%. If {">"}5x ULN, pause treatment. If any grade 3+ adverse event, pause and reassess. Resume at lower dose only after normalization.
          </p>
        </section>

        {/* ══════════ 11. STUDY DESIGN ══════════ */}
        <section className="mb-10">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">11. Proposed Study Design</h2>

          <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">Phase 1: Animal Models (10 subjects)</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            10 brain cancer animal models (orthotopic glioma in rodents, established protocol). 5 receive Phoenix Tears with DMSO + dextrose. 5 receive Phoenix Tears with DMSO without dextrose (control for the dextrose hypothesis). 12-week application period. Primary endpoints: tumor volume on serial MRI, survival, adverse events. Secondary endpoints: compound tissue concentration at necropsy, histological assessment of tumor necrosis, organ toxicity screening.
          </p>

          <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">Phase 2: Human Safety &amp; Tolerability (if animal data support)</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Open-label, single-arm, 10-20 adult subjects with histologically confirmed recurrent or progressive glioma who have exhausted standard options or declined further conventional treatment. 12-week topical application with monitoring schedule above. Primary endpoint: safety and tolerability (adverse events, lab abnormalities). Secondary endpoints: progression-free survival, radiographic response (RANO criteria), quality of life, seizure frequency, neurological function.
          </p>

          <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">Inclusion Criteria</h3>
          <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-1 mb-3">
            <li>Histologically confirmed glioma (any grade)</li>
            <li>Measurable disease on MRI</li>
            <li>Exhausted standard options OR informed refusal of conventional treatment</li>
            <li>Adequate organ function (LFTs {`<`}2.5x ULN, adequate renal function)</li>
            <li>Willing to adhere to ketogenic diet and supportive protocol</li>
            <li>Willing to undergo monitoring schedule</li>
          </ul>

          <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">Exclusion Criteria</h3>
          <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-1 mb-3">
            <li>Severe hepatic or renal impairment</li>
            <li>Known allergy to any formulation component</li>
            <li>Active skin infection at application site</li>
            <li>Concurrent participation in another interventional trial</li>
            <li>Pregnancy or breastfeeding</li>
          </ul>
        </section>

        {/* ══════════ 12. REFERENCES ══════════ */}
        <section className="mb-10" id="pt-refs">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">12. References</h2>
          <ol className="list-decimal pl-6 text-sm text-gray-600 leading-relaxed space-y-2">
            {REFS.map(r => (
              <li key={r.n} id={`pt-ref-${r.n}`}>
                {r.t}{' '}
                <a href={`https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline inline-flex items-center gap-0.5">
                  PMID: {r.pmid} <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-6 pb-10 text-center">
          <p className="text-xs text-gray-400 leading-relaxed mb-2">This is a pre-submission research proposal. All treatments described are theoretical and require institutional approval, ethical review, and proper regulatory oversight before any application. Phoenix Tears is not an approved therapy.</p>
          <p className="text-sm text-gray-700 font-semibold mt-3">Contact: Josh Trembath</p>
          <p className="text-sm text-gray-600">jptrembath@gmail.com &middot; (385) 590-4074</p>
          <div className="flex gap-3 justify-center mt-4">
            <button onClick={() => { window.location.hash = ''; window.location.reload(); }} className="text-xs text-gray-500 hover:text-gray-900 border border-gray-300 rounded px-3 py-1.5">Main Site</button>
            <a href="#/doxycycline-anomaly" className="text-xs text-gray-500 hover:text-gray-900 border border-gray-300 rounded px-3 py-1.5">Doxycycline Anomaly</a>
            <a href="#/biopsy-methodology" className="text-xs text-gray-500 hover:text-gray-900 border border-gray-300 rounded px-3 py-1.5">Biopsy Methodology</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
