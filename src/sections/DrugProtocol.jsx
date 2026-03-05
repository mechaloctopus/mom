import React, { useState } from 'react';
import { Syringe, ChevronDown, ChevronUp, AlertTriangle, ExternalLink } from 'lucide-react';
import { SectionHeader, InfoBox, Divider, BackToNav } from '../components/Cards';

function C({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-3">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
        <span className="text-xs font-bold text-gray-800">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
      </button>
      {open && <div className="p-4 text-xs text-gray-700 leading-relaxed">{children}</div>}
    </div>
  );
}

export default function DrugProtocol() {
  return (
    <section id="drugprotocol" className="section-card">
      <SectionHeader
        icon={<Syringe className="w-5 h-5" />}
        title="Anti-Tumor Drug Protocol"
        subtitle="12-week physician-monitored treatment plan"
        color="purple"
      />

      {/* ─── DISCLAIMER ─── */}
      <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-5 mb-5">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-4 h-4 text-red-600" />
          <p className="text-xs font-bold text-red-900">PHYSICIAN SUPERVISION REQUIRED</p>
        </div>
        <p className="text-xs text-red-800 leading-relaxed mb-2">
          This drug protocol must <strong>only</strong> be initiated and managed under the direct care 
          of a licensed physician experienced with these medications. No drugs should be started without 
          physician approval, baseline blood work, and an established monitoring plan. This document is 
          intended to be <strong>handed to the supervising physician</strong> for their review, adjustment, 
          and approval before any treatment begins.
        </p>
        <p className="text-xs text-red-800 leading-relaxed">
          This section covers <strong>only the drug protocol and medical monitoring</strong>. The nutrition, 
          supplement, and cannabis protocols are covered in the Nutrition & Supplement Protocol section and 
          will continue concurrently.
        </p>
      </div>

      {/* ─── REFERENCE PAPER ─── */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-5">
        <p className="text-xs font-bold text-indigo-800 mb-1">Primary Reference Protocol</p>
        <p className="text-[11px] text-indigo-700 leading-relaxed mb-2">
          This protocol is based on the hybrid orthomolecular approach described by Dr. William Makis, 
          Dr. Paul Marik, and colleagues — combining repurposed anti-parasitic drugs with metabolic and 
          protective agents to target cancer through multiple mechanisms simultaneously.
        </p>
        <a href="https://isom.ca/wp-content/uploads/2024/09/Targeting-the-Mitochondrial-Stem-Cell-Connection-in-Cancer-Treatment-JOM-39.3.pdf"
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 text-[11px] text-indigo-600 font-bold hover:text-indigo-800 transition-colors">
          <ExternalLink className="w-3 h-3" />
          "Targeting the Mitochondrial-Stem Cell Connection in Cancer Treatment" — Journal of Orthomolecular Medicine, Vol 39.3
        </a>
      </div>

      <Divider />

      {/* ─── SAFETY COMPARISON ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Safety: Alternative Drugs vs. Chemotherapy</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-[10px] border-collapse">
          <thead><tr className="bg-gray-50">
            <th className="text-left p-2 font-bold text-gray-700 border-b border-gray-200">Factor</th>
            <th className="text-left p-2 font-bold text-emerald-700 border-b border-gray-200">Fen/Iver/Meb</th>
            <th className="text-left p-2 font-bold text-red-700 border-b border-gray-200">Temozolomide</th>
          </tr></thead>
          <tbody>
            <tr><td className="p-2 border-b border-gray-100 font-medium">Bone marrow</td><td className="p-2 border-b border-gray-100 text-emerald-600">Very rare</td><td className="p-2 border-b border-gray-100 text-red-600">Common</td></tr>
            <tr className="bg-gray-50"><td className="p-2 border-b border-gray-100 font-medium">Nausea</td><td className="p-2 border-b border-gray-100 text-emerald-600">Mild, uncommon</td><td className="p-2 border-b border-gray-100 text-red-600">Common, severe</td></tr>
            <tr><td className="p-2 border-b border-gray-100 font-medium">Infection risk</td><td className="p-2 border-b border-gray-100 text-emerald-600">Not increased</td><td className="p-2 border-b border-gray-100 text-red-600">Significantly increased</td></tr>
            <tr className="bg-gray-50"><td className="p-2 border-b border-gray-100 font-medium">Liver</td><td className="p-2 border-b border-gray-100 text-amber-600">Monitor at high doses</td><td className="p-2 border-b border-gray-100 text-red-600">Hepatotoxicity</td></tr>
            <tr><td className="p-2 border-b border-gray-100 font-medium">Fatigue</td><td className="p-2 border-b border-gray-100 text-emerald-600">Minimal</td><td className="p-2 border-b border-gray-100 text-red-600">Significant</td></tr>
            <tr className="bg-gray-50"><td className="p-2 border-b border-gray-100 font-medium">Quality of life</td><td className="p-2 border-b border-gray-100 text-emerald-600">Minimal impact</td><td className="p-2 border-b border-gray-100 text-red-600">Significant impact</td></tr>
            <tr><td className="p-2 font-medium">Proven efficacy</td><td className="p-2 text-amber-600">Preclinical/anecdotal</td><td className="p-2 text-emerald-600">Proven (modest)</td></tr>
          </tbody>
        </table>
      </div>

      <Divider />

      {/* ─── DRUG PROTOCOL TABLE ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Drug Protocol — Dosing Schedule</h3>
      <p className="text-xs text-gray-500 mb-3">12-week trial. Cycling pattern to minimize toxicity and maximize efficacy.</p>

      <div className="overflow-x-auto mb-5">
        <table className="w-full text-[10px] border-collapse">
          <thead><tr className="bg-purple-50">
            <th className="text-left p-2.5 font-bold text-purple-800 border-b border-purple-200">Drug</th>
            <th className="text-left p-2.5 font-bold text-purple-800 border-b border-purple-200">Dose</th>
            <th className="text-left p-2.5 font-bold text-purple-800 border-b border-purple-200">Schedule</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-2.5 font-bold text-gray-800">Mebendazole</td>
              <td className="p-2.5">200 mg twice daily (400 mg/day)</td>
              <td className="p-2.5">Take with fatty food for absorption. <strong>Days 1–3 on, Days 4–7 off</strong> (weekly cycle)</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="p-2.5 font-bold text-gray-800">Fenbendazole</td>
              <td className="p-2.5">222 mg once daily (1 packet Panacur C)</td>
              <td className="p-2.5">Take with fatty food. <strong>Days 1–3 on, Days 4–7 off</strong> (alternate with mebendazole or combined — per physician)</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-2.5 font-bold text-gray-800">Ivermectin</td>
              <td className="p-2.5">0.5 mg/kg body weight (~36 mg for 180 lbs)</td>
              <td className="p-2.5">Take on empty stomach or with fatty food. <strong>2 days per week</strong> (e.g., Monday & Thursday)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <InfoBox variant="info" title="Dosing Notes">
        <ul className="space-y-1 mt-1">
          <li>• <strong>Mebendazole</strong> is FDA-approved for human use and preferred over fenbendazole for this protocol. If mebendazole is unavailable, fenbendazole can substitute. The physician may choose to use one or both benzimidazoles.</li>
          <li>• <strong>Fatty food</strong> dramatically increases absorption of all three drugs. Take with EVOO, avocado, or any fat-containing meal.</li>
          <li>• <strong>Cycling</strong> (3 days on / 4 days off for benzimidazoles) allows the liver to recover between doses and may reduce resistance.</li>
          <li>• <strong>Ivermectin dose</strong> of 0.5 mg/kg is higher than standard antiparasitic dosing (0.2 mg/kg). The physician should titrate starting from 0.2 mg/kg and increase based on tolerance.</li>
          <li>• All doses should be <strong>confirmed and adjusted by the supervising physician</strong> based on tolerance, bloodwork, and clinical response.</li>
        </ul>
      </InfoBox>

      <Divider />

      {/* ─── WEEKLY CYCLE VISUAL ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Weekly Cycle Template</h3>
      <div className="overflow-x-auto mb-5">
        <table className="w-full text-[10px] border-collapse text-center">
          <thead><tr className="bg-gray-100">
            <th className="p-2 font-bold text-gray-700 border-b">Drug</th>
            <th className="p-2 font-bold text-gray-700 border-b">Mon</th>
            <th className="p-2 font-bold text-gray-700 border-b">Tue</th>
            <th className="p-2 font-bold text-gray-700 border-b">Wed</th>
            <th className="p-2 font-bold text-gray-700 border-b">Thu</th>
            <th className="p-2 font-bold text-gray-700 border-b">Fri</th>
            <th className="p-2 font-bold text-gray-700 border-b">Sat</th>
            <th className="p-2 font-bold text-gray-700 border-b">Sun</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-2 font-bold text-left text-purple-800">Mebendazole</td>
              <td className="p-2 bg-purple-100 font-bold text-purple-700">✓</td>
              <td className="p-2 bg-purple-100 font-bold text-purple-700">✓</td>
              <td className="p-2 bg-purple-100 font-bold text-purple-700">✓</td>
              <td className="p-2 text-gray-300">—</td>
              <td className="p-2 text-gray-300">—</td>
              <td className="p-2 text-gray-300">—</td>
              <td className="p-2 text-gray-300">—</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-2 font-bold text-left text-blue-800">Ivermectin</td>
              <td className="p-2 bg-blue-100 font-bold text-blue-700">✓</td>
              <td className="p-2 text-gray-300">—</td>
              <td className="p-2 text-gray-300">—</td>
              <td className="p-2 bg-blue-100 font-bold text-blue-700">✓</td>
              <td className="p-2 text-gray-300">—</td>
              <td className="p-2 text-gray-300">—</td>
              <td className="p-2 text-gray-300">—</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-2 font-bold text-left text-emerald-800">Protective Supps</td>
              <td className="p-2 bg-emerald-50 text-emerald-600">daily</td>
              <td className="p-2 bg-emerald-50 text-emerald-600">daily</td>
              <td className="p-2 bg-emerald-50 text-emerald-600">daily</td>
              <td className="p-2 bg-emerald-50 text-emerald-600">daily</td>
              <td className="p-2 bg-emerald-50 text-emerald-600">daily</td>
              <td className="p-2 bg-emerald-50 text-emerald-600">daily</td>
              <td className="p-2 bg-emerald-50 text-emerald-600">daily</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Divider />

      {/* ─── COMPLETE SUPPLEMENT PROTOCOL ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Complete Supplement & Dosing Protocol</h3>
      <p className="text-xs text-gray-500 mb-3">ALL supplements in one place — anti-tumor bioactives, organ protection, neuroregeneration, and cannabis. Daily unless noted.</p>

      <C title="Anti-Tumor Bioactive Supplements" defaultOpen={true}>
        <table className="w-full text-[10px] border-collapse">
          <thead><tr className="bg-purple-50">
            <th className="text-left p-2 font-bold text-purple-800 border-b border-purple-200">Supplement</th>
            <th className="text-left p-2 font-bold text-purple-800 border-b border-purple-200">Dose</th>
            <th className="text-left p-2 font-bold text-purple-800 border-b border-purple-200">Timing & Notes</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="p-2 font-bold text-gray-800">Curcumin (nano or w/ piperine)</td><td className="p-2">2,000 mg/day (1,000 mg 2x)</td><td className="p-2">With fatty food AM + PM. Nano-curcumin or BioPerine for 20x+ absorption. Anti-inflammatory, inhibits NF-κB, PI3K/Akt/mTOR, crosses BBB.</td></tr>
            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-2 font-bold text-gray-800">Black Seed Oil (Thymoquinone)</td><td className="p-2">2,000 mg/day (1,000 mg 2x)</td><td className="p-2">Empty stomach AM + PM. Inhibits proliferation, promotes apoptosis, suppresses angiogenesis, anti-inflammatory.</td></tr>
            <tr className="border-b border-gray-100"><td className="p-2 font-bold text-gray-800">Berberine</td><td className="p-2">1,000 mg/day (500 mg 2x)</td><td className="p-2">With food AM + midday. Cell cycle arrest, inhibits Akt/mTOR & NF-κB, blood sugar control (starves cancer), chemosensitizer.</td></tr>
            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-2 font-bold text-gray-800">Modified Citrus Pectin</td><td className="p-2">15 g/day (5 g 3x)</td><td className="p-2">With food AM + midday + PM. Blocks galectin-3 (cancer cell adhesion/spread). Core anti-metastasis agent. Powder mixed into water.</td></tr>
            <tr className="border-b border-gray-100"><td className="p-2 font-bold text-gray-800">Olive Leaf Extract (Oleuropein)</td><td className="p-2">1,000 mg/day (500 mg 2x)</td><td className="p-2">With food midday + PM. Inhibits proliferation, promotes apoptosis, suppresses angiogenesis/metastasis via COX-2.</td></tr>
            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-2 font-bold text-gray-800">Quercetin (w/ Bromelain)</td><td className="p-2">1,000 mg/day (500 mg 2x)</td><td className="p-2">AM + PM. Anti-inflammatory, zinc ionophore, enhances other agents, anti-tumor. Protects GI lining.</td></tr>
            <tr><td className="p-2 font-bold text-gray-800">EGCG Green Tea Extract</td><td className="p-2">400 mg/day</td><td className="p-2">With lunch. Anti-cancer, anti-angiogenic, neuroprotective.</td></tr>
          </tbody>
        </table>
      </C>

      <C title="Neuroregeneration & Brain Health Supplements" defaultOpen={false}>
        <table className="w-full text-[10px] border-collapse">
          <thead><tr className="bg-amber-50">
            <th className="text-left p-2 font-bold text-amber-800 border-b border-amber-200">Supplement</th>
            <th className="text-left p-2 font-bold text-amber-800 border-b border-amber-200">Dose</th>
            <th className="text-left p-2 font-bold text-amber-800 border-b border-amber-200">Timing & Notes</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="p-2 font-bold text-gray-800">Fish Oil (EPA/DHA Omega-3)</td><td className="p-2">3,000 mg/day (2,000 AM + 1,000 PM)</td><td className="p-2">With food. High DHA (≥600 mg). Brain structure support, anti-inflammatory, membrane repair.</td></tr>
            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-2 font-bold text-gray-800">Host Defense MyCommunity or Lion's Mane</td><td className="p-2">1,000 mg/day (2 caps)</td><td className="p-2">With breakfast. NGF/BDNF stimulation, neuroregeneration, anti-tumor immunity (17 mushroom species).</td></tr>
            <tr className="border-b border-gray-100"><td className="p-2 font-bold text-gray-800">Lion's Mane Powder (additional)</td><td className="p-2">1 tsp/day</td><td className="p-2">In kefir smoothie. Extra NGF support beyond capsules.</td></tr>
            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-2 font-bold text-gray-800">Ashwagandha KSM-66</td><td className="p-2">600 mg/day</td><td className="p-2">With breakfast. Adaptogenic, neuroprotective, anti-cancer withanolides, reduces cortisol.</td></tr>
            <tr className="border-b border-gray-100"><td className="p-2 font-bold text-gray-800">Bacopa Monnieri</td><td className="p-2">300 mg/day (std. 50% bacosides)</td><td className="p-2">With breakfast. BDNF enhancement, memory + cognition recovery.</td></tr>
            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-2 font-bold text-gray-800">Gotu Kola</td><td className="p-2">500 mg/day</td><td className="p-2">With lunch. Neurogenesis, nerve regeneration, neuroprotective after ischemic injury.</td></tr>
            <tr><td className="p-2 font-bold text-gray-800">Rosemary Extract</td><td className="p-2">400 mg/day</td><td className="p-2">With dinner. Carnosic acid — neuroprotective, anti-glioblastoma activity.</td></tr>
          </tbody>
        </table>
      </C>

      <C title="Organ Protection Supplements" defaultOpen={false}>
        <table className="w-full text-[10px] border-collapse">
          <thead><tr className="bg-emerald-50">
            <th className="text-left p-2 font-bold text-emerald-800 border-b border-emerald-200">Supplement</th>
            <th className="text-left p-2 font-bold text-emerald-800 border-b border-emerald-200">Dose</th>
            <th className="text-left p-2 font-bold text-emerald-800 border-b border-emerald-200">Timing & Notes</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="p-2 font-bold text-gray-800">Milk Thistle (Silymarin)</td><td className="p-2">420 mg/day (140 mg 3x)</td><td className="p-2">AM + midday + PM. PRIMARY liver protectant. Start 3-5 days before drugs.</td></tr>
            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-2 font-bold text-gray-800">NAC (N-Acetyl Cysteine)</td><td className="p-2">1,200 mg/day (600 mg 2x)</td><td className="p-2">AM + PM. Glutathione precursor. Liver + kidney protection.</td></tr>
            <tr className="border-b border-gray-100"><td className="p-2 font-bold text-gray-800">Alpha Lipoic Acid</td><td className="p-2">600 mg/day (300 mg 2x)</td><td className="p-2">Midday + PM. Nerve + liver protection. Crosses BBB. Regenerates vitamins C, E, glutathione.</td></tr>
            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-2 font-bold text-gray-800">Vitamin E (mixed tocopherols)</td><td className="p-2">400 IU/day</td><td className="p-2">With breakfast. Cell membrane protection. Part of Tippens protocol.</td></tr>
            <tr className="border-b border-gray-100"><td className="p-2 font-bold text-gray-800">CoQ10 (Ubiquinol)</td><td className="p-2">200 mg/day</td><td className="p-2">With breakfast. Mitochondrial + heart protection.</td></tr>
            <tr className="border-b border-gray-100 bg-gray-50"><td className="p-2 font-bold text-gray-800">Zinc (picolinate)</td><td className="p-2">30 mg/day</td><td className="p-2">With dinner. Immune support. Zinc ionophore synergy with ivermectin + quercetin.</td></tr>
            <tr><td className="p-2 font-bold text-gray-800">Magnesium (glycinate)</td><td className="p-2">400 mg at bedtime</td><td className="p-2">Bedtime. Nerve/muscle support, reduces seizure threshold, promotes sleep.</td></tr>
          </tbody>
        </table>
      </C>

      <C title="Probiotic & Gut Health" defaultOpen={false}>
        <table className="w-full text-[10px] border-collapse">
          <thead><tr className="bg-pink-50">
            <th className="text-left p-2 font-bold text-pink-800 border-b border-pink-200">Item</th>
            <th className="text-left p-2 font-bold text-pink-800 border-b border-pink-200">Dose</th>
            <th className="text-left p-2 font-bold text-pink-800 border-b border-pink-200">Timing & Notes</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="p-2 font-bold text-gray-800">Lifeway Kefir (12-strain)</td><td className="p-2">8 oz twice daily</td><td className="p-2">With breakfast + dinner. Gut-brain axis support, anti-tumor immunity.</td></tr>
            <tr><td className="p-2 font-bold text-gray-800">Wheat/Barley Grass Powder</td><td className="p-2">1 tsp every other day</td><td className="p-2">In fresh juice (Wed/Fri/Sun). Chlorophyll, antioxidants, anti-cancer enzymes.</td></tr>
          </tbody>
        </table>
      </C>

      <C title="Cannabis Protocol (Medical Card)" defaultOpen={false}>
        <table className="w-full text-[10px] border-collapse">
          <thead><tr className="bg-green-50">
            <th className="text-left p-2 font-bold text-green-800 border-b border-green-200">Product</th>
            <th className="text-left p-2 font-bold text-green-800 border-b border-green-200">Dose</th>
            <th className="text-left p-2 font-bold text-green-800 border-b border-green-200">Timing & Notes</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="p-2 font-bold text-gray-800">Daytime: 1:1:1 THC:CBD:CBG</td><td className="p-2">5/5/5 mg gummy</td><td className="p-2">Afternoon (2-3 PM). Anti-tumor, anti-inflammatory, neuroprotective. CBG shows GBM promise.</td></tr>
            <tr><td className="p-2 font-bold text-gray-800">Nighttime: THC:CBD:CBN</td><td className="p-2">5/5/5 mg gummy</td><td className="p-2">30 min before sleep. CBN sedative for circadian rhythm reset.</td></tr>
          </tbody>
        </table>
      </C>

      <InfoBox variant="info" title="Total Daily Supplement Count">
        <strong>25 supplements + 2 cannabis products + 3 anti-tumor drugs</strong> = 30 items managed daily. 
        Use the AM/PM pill organizer from the Shopping List. The physician should review this complete list 
        for any interactions. Modified Citrus Pectin is taken as powder in water, not capsules.
      </InfoBox>

      <Divider />

      {/* ─── BLOODWORK MONITORING ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Bloodwork Monitoring Schedule</h3>

      <div className="overflow-x-auto mb-5">
        <table className="w-full text-[10px] border-collapse">
          <thead><tr className="bg-amber-50">
            <th className="text-left p-2.5 font-bold text-amber-800 border-b border-amber-200">Timing</th>
            <th className="text-left p-2.5 font-bold text-amber-800 border-b border-amber-200">Tests Required</th>
            <th className="text-left p-2.5 font-bold text-amber-800 border-b border-amber-200">What We're Watching</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-2.5 font-bold text-red-700">Before starting<br/>(Baseline)</td>
              <td className="p-2.5">
                <ul className="space-y-0.5">
                  <li>• Complete Metabolic Panel (CMP)</li>
                  <li>• Complete Blood Count (CBC) with differential</li>
                  <li>• Liver panel (AST, ALT, ALP, bilirubin, albumin)</li>
                  <li>• Kidney function (BUN, creatinine, GFR)</li>
                  <li>• Inflammatory markers (CRP, ESR)</li>
                  <li>• Tumor markers if available</li>
                  <li>• Vitamin D level</li>
                </ul>
              </td>
              <td className="p-2.5">Establish baseline for all values before any drugs are introduced. If liver enzymes are already elevated, physician must assess whether to proceed.</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="p-2.5 font-bold text-amber-700">Week 2</td>
              <td className="p-2.5">
                <ul className="space-y-0.5">
                  <li>• Liver panel (AST, ALT, ALP, bilirubin)</li>
                  <li>• CBC with differential</li>
                  <li>• Kidney function (creatinine, GFR)</li>
                </ul>
              </td>
              <td className="p-2.5">Early liver toxicity detection. If ALT/AST rise &gt;3x upper limit of normal, pause drugs and reassess. Check for bone marrow effects.</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-2.5 font-bold text-amber-700">Week 4</td>
              <td className="p-2.5">
                <ul className="space-y-0.5">
                  <li>• Full CMP</li>
                  <li>• CBC with differential</li>
                  <li>• Liver panel</li>
                  <li>• Inflammatory markers (CRP)</li>
                </ul>
              </td>
              <td className="p-2.5">One month check. Assess trends in liver enzymes, blood counts, and inflammation. Declining CRP may indicate anti-inflammatory effect.</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="p-2.5 font-bold text-amber-700">Week 6</td>
              <td className="p-2.5">
                <ul className="space-y-0.5">
                  <li>• Liver panel</li>
                  <li>• CBC with differential</li>
                  <li>• Kidney function</li>
                </ul>
              </td>
              <td className="p-2.5">Midpoint check. Reassess drug tolerance. Physician decision point: continue, adjust doses, or add/remove agents.</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-2.5 font-bold text-amber-700">Week 8</td>
              <td className="p-2.5">
                <ul className="space-y-0.5">
                  <li>• Full CMP</li>
                  <li>• CBC with differential</li>
                  <li>• Liver panel</li>
                  <li>• Inflammatory markers (CRP, ESR)</li>
                  <li>• Tumor markers if available</li>
                </ul>
              </td>
              <td className="p-2.5">Comprehensive 2-month assessment. Compare all values to baseline. Correlate with imaging results from Week 8 MRI.</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="p-2.5 font-bold text-amber-700">Week 10</td>
              <td className="p-2.5">
                <ul className="space-y-0.5">
                  <li>• Liver panel</li>
                  <li>• CBC</li>
                </ul>
              </td>
              <td className="p-2.5">Pre-endpoint safety check. Ensure no late-emerging toxicity.</td>
            </tr>
            <tr>
              <td className="p-2.5 font-bold text-red-700">Week 12<br/>(End of trial)</td>
              <td className="p-2.5">
                <ul className="space-y-0.5">
                  <li>• Full CMP</li>
                  <li>• CBC with differential</li>
                  <li>• Liver panel</li>
                  <li>• Kidney function</li>
                  <li>• Inflammatory markers (CRP, ESR)</li>
                  <li>• Vitamin D level</li>
                  <li>• Tumor markers if available</li>
                </ul>
              </td>
              <td className="p-2.5">Full endpoint assessment. Compare all values to baseline. Correlate with Week 12 imaging. Decision point: continue, discontinue, or modify protocol.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Divider />

      {/* ─── IMAGING SCHEDULE ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Imaging & Scan Schedule</h3>

      <div className="overflow-x-auto mb-5">
        <table className="w-full text-[10px] border-collapse">
          <thead><tr className="bg-blue-50">
            <th className="text-left p-2.5 font-bold text-blue-800 border-b border-blue-200">Timing</th>
            <th className="text-left p-2.5 font-bold text-blue-800 border-b border-blue-200">Scan Type</th>
            <th className="text-left p-2.5 font-bold text-blue-800 border-b border-blue-200">Purpose</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-2.5 font-bold text-red-700">Before starting</td>
              <td className="p-2.5">Brain MRI w/ + w/o contrast</td>
              <td className="p-2.5">Baseline reference. We already have the Feb 27, 2026 MRI. If protocol starts &gt;4 weeks after this, request a new baseline.</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="p-2.5 font-bold text-blue-700">Week 8</td>
              <td className="p-2.5">Brain MRI w/ + w/o contrast</td>
              <td className="p-2.5"><strong>First response assessment.</strong> Compare tumor size, satellite lesion, edema, and midline shift to baseline. This is the critical data point — is the tumor shrinking, stable, or growing?</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-2.5 font-bold text-blue-700">Week 8</td>
              <td className="p-2.5">Adrenal protocol CT or MRI</td>
              <td className="p-2.5">Follow-up on the indeterminate 2.8 cm left adrenal nodule from staging CT. Rule out metastasis non-invasively.</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="p-2.5 font-bold text-blue-700">Week 8 (optional)</td>
              <td className="p-2.5">MR Spectroscopy of basal ganglia lesion</td>
              <td className="p-2.5">If available, characterize the satellite lesion metabolically. Help distinguish tumor vs. hypoxic gliosis (see Sleep Apnea & Brain section).</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-2.5 font-bold text-red-700">Week 12</td>
              <td className="p-2.5">Brain MRI w/ + w/o contrast</td>
              <td className="p-2.5"><strong>Endpoint assessment.</strong> Compare to baseline and Week 8 scan. Determines whether to continue, modify, or discontinue the protocol.</td>
            </tr>
            <tr>
              <td className="p-2.5 font-bold text-gray-700">Post-protocol (monthly x 6)</td>
              <td className="p-2.5">Brain MRI or CT (alternating)</td>
              <td className="p-2.5">If protocol is discontinued, monthly surveillance imaging for 6 months to monitor for any recurrence or progression.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Divider />

      {/* ─── STOP CRITERIA ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">When to Stop or Adjust the Protocol</h3>

      <div className="space-y-2 mb-5">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-xs font-bold text-red-800 mb-1">STOP IMMEDIATELY — Contact Physician</p>
          <ul className="text-[11px] text-red-700 space-y-1">
            <li>• Liver enzymes (ALT or AST) rise &gt;5x upper limit of normal</li>
            <li>• Severe nausea, vomiting, or abdominal pain that doesn't resolve</li>
            <li>• Jaundice (yellowing of skin or eyes)</li>
            <li>• Significant drop in white blood cell count (neutropenia)</li>
            <li>• New seizures or significant worsening of neurological symptoms</li>
            <li>• Allergic reaction (rash, difficulty breathing, swelling)</li>
            <li>• Dark urine or significantly decreased urine output</li>
          </ul>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-xs font-bold text-amber-800 mb-1">PAUSE & REASSESS — Consult Physician</p>
          <ul className="text-[11px] text-amber-700 space-y-1">
            <li>• Liver enzymes rise 3–5x upper limit of normal (pause drugs, recheck in 1 week)</li>
            <li>• Persistent GI upset (nausea, diarrhea) lasting &gt;3 days</li>
            <li>• Significant fatigue beyond baseline</li>
            <li>• Mild rash or skin changes</li>
            <li>• Week 8 MRI shows tumor growth — reassess strategy</li>
          </ul>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p className="text-xs font-bold text-emerald-800 mb-1">CONTINUE / EXTEND Protocol If:</p>
          <ul className="text-[11px] text-emerald-700 space-y-1">
            <li>• Blood work remains stable throughout</li>
            <li>• Week 8 or Week 12 MRI shows tumor shrinkage or stability</li>
            <li>• Patient tolerating drugs well with no significant side effects</li>
            <li>• Inflammatory markers (CRP) declining</li>
            <li>• Physician approves continuation beyond 12 weeks</li>
          </ul>
        </div>
      </div>

      <Divider />

      {/* ─── 12-WEEK TIMELINE ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">12-Week Protocol Timeline</h3>

      <div className="space-y-2 mb-5">
        {[
          { week: 'Pre-Start', color: 'bg-red-500', label: 'Baseline bloodwork + MRI. Physician approval. Obtain all medications. Begin organ-protection supplements 3-5 days before starting drugs.' },
          { week: 'Week 1-2', color: 'bg-purple-500', label: 'Begin drug protocol at initial doses. Start symptom diary. Week 2: first safety bloodwork.' },
          { week: 'Week 3-4', color: 'bg-purple-400', label: 'Continue protocol. Physician may adjust doses based on Week 2 labs. Week 4: bloodwork + CRP check.' },
          { week: 'Week 5-6', color: 'bg-blue-500', label: 'Midpoint. Continue protocol. Week 6: bloodwork safety check. Physician reassessment of tolerance.' },
          { week: 'Week 7-8', color: 'bg-blue-400', label: 'Week 8: CRITICAL — Brain MRI + full bloodwork + adrenal follow-up. First imaging comparison to baseline. Major decision point.' },
          { week: 'Week 9-10', color: 'bg-teal-500', label: 'Continue based on Week 8 results. Week 10: safety bloodwork. Adjust protocol if needed.' },
          { week: 'Week 11-12', color: 'bg-emerald-500', label: 'Final stretch. Week 12: Endpoint MRI + full bloodwork. Comprehensive assessment. Decision: continue, stop, or modify.' },
          { week: 'Post-Protocol', color: 'bg-gray-500', label: 'If stopped: maintain nutrition protocol, monthly surveillance imaging for 6 months. If continuing: same monitoring schedule repeats.' },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={`${item.color} text-white rounded-lg px-2 py-1 text-[9px] font-bold flex-shrink-0 min-w-[70px] text-center`}>
              {item.week}
            </div>
            <p className="text-[11px] text-gray-700 leading-relaxed">{item.label}</p>
          </div>
        ))}
      </div>

      <Divider />

      {/* ─── SYMPTOM DIARY ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Daily Symptom Diary — What to Track</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-5">
        <p className="text-[11px] text-gray-700 mb-2">Keep a simple daily log (notebook or phone) tracking:</p>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="bg-white rounded-lg p-2">Energy level (1-10)</div>
          <div className="bg-white rounded-lg p-2">Appetite (1-10)</div>
          <div className="bg-white rounded-lg p-2">Nausea (none/mild/moderate/severe)</div>
          <div className="bg-white rounded-lg p-2">Pain level (1-10)</div>
          <div className="bg-white rounded-lg p-2">Cognitive clarity (1-10)</div>
          <div className="bg-white rounded-lg p-2">Sleep quality (1-10)</div>
          <div className="bg-white rounded-lg p-2">Bowel function (normal/loose/constipated)</div>
          <div className="bg-white rounded-lg p-2">Seizure activity (yes/no, description)</div>
          <div className="bg-white rounded-lg p-2">Skin changes (rash, color changes)</div>
          <div className="bg-white rounded-lg p-2">Urine color (normal/dark)</div>
          <div className="bg-white rounded-lg p-2">SpO2 reading (morning + evening)</div>
          <div className="bg-white rounded-lg p-2">Any other changes noted</div>
        </div>
        <p className="text-[10px] text-gray-500 mt-2">Bring this diary to every physician appointment. Trends matter more than individual days.</p>
      </div>

      <Divider />

      {/* ─── MECHANISMS ─── */}
      <C title="How These Drugs Work Against Cancer (Mechanisms)" defaultOpen={false}>
        <div className="space-y-3">
          <div>
            <p className="font-bold text-purple-800 mb-1">Mebendazole / Fenbendazole (Benzimidazoles)</p>
            <ul className="space-y-0.5 text-gray-600">
              <li>• <strong>Microtubule disruption:</strong> Binds β-tubulin, preventing cell division (same target as chemo drugs vincristine and paclitaxel)</li>
              <li>• <strong>Glucose uptake inhibition:</strong> Reduces GLUT transporter expression, starving cancer cells of energy</li>
              <li>• <strong>p53 reactivation:</strong> Stabilizes the tumor suppressor gene p53, promoting cancer cell apoptosis</li>
              <li>• <strong>Anti-angiogenic:</strong> Inhibits new blood vessel formation tumors need to grow</li>
              <li>• <strong>Brain penetration:</strong> Mebendazole confirmed to cross the blood-brain barrier</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-blue-800 mb-1">Ivermectin</p>
            <ul className="space-y-0.5 text-gray-600">
              <li>• <strong>Akt/mTOR pathway inhibition:</strong> Suppresses major growth signaling cascade used by cancer</li>
              <li>• <strong>WNT-TCF pathway suppression:</strong> Blocks cancer stem cell maintenance signaling</li>
              <li>• <strong>Mitochondrial dysfunction:</strong> Disrupts energy production in cancer cells</li>
              <li>• <strong>PAK1 kinase inhibition:</strong> PAK1 is overactivated in &gt;70% of cancers</li>
              <li>• <strong>Immunomodulatory:</strong> May enhance anti-tumor immune responses</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-emerald-800 mb-1">Synergistic Rationale</p>
            <p className="text-gray-600">These drugs target <strong>different</strong> cancer survival pathways simultaneously — microtubules, glucose metabolism, growth signaling, stem cell pathways, and immune evasion. The theory is that multi-pathway targeting is harder for cancer cells to resist than single-agent therapy.</p>
          </div>
        </div>
      </C>

      <C title="Reference: Orthomolecular Protocol Paper" defaultOpen={false}>
        <div className="bg-indigo-50 rounded-lg p-3 mb-2">
          <p className="font-bold text-indigo-800 mb-1">"Targeting the Mitochondrial-Stem Cell Connection in Cancer Treatment: A Hybrid Orthomolecular Protocol"</p>
          <p className="text-gray-600 mb-2">Journal of Orthomolecular Medicine, Volume 39, Issue 3. By Dr. William Makis, Dr. Paul Marik, and colleagues.</p>
          <p className="text-gray-600 mb-2">This paper outlines the rationale for combining repurposed anti-parasitic drugs (ivermectin, mebendazole/fenbendazole) with metabolic interventions (fasting, ketogenic elements) and targeted supplementation to attack cancer through mitochondrial and cancer stem cell pathways.</p>
          <a href="https://isom.ca/wp-content/uploads/2024/09/Targeting-the-Mitochondrial-Stem-Cell-Connection-in-Cancer-Treatment-JOM-39.3.pdf"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors">
            <ExternalLink className="w-3 h-3" />
            Download Full Paper (PDF)
          </a>
        </div>
        <p className="text-gray-500 mt-2">Additional protocol references from earlier sections: see Benzimidazoles, Ivermectin, and Combination Therapy sections for the full study library.</p>
      </C>

      {/* ─── FOOTER ─── */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-5 mt-4">
        <p className="text-xs text-purple-800 leading-relaxed mb-2">
          <strong>This protocol document is designed to be shared with the supervising physician.</strong> 
          All doses, schedules, and monitoring plans should be reviewed and approved by the physician 
          before initiation. The physician has full authority to adjust any aspect of this protocol 
          based on their clinical judgment and the patient's response.
        </p>
        <p className="text-xs text-purple-700 leading-relaxed">
          Protocol duration: <strong>12 weeks</strong>. First imaging assessment at <strong>Week 8</strong>. 
          Endpoint assessment at <strong>Week 12</strong>. All decisions to continue, modify, or discontinue 
          will be made collaboratively between the family and the physician based on bloodwork, imaging, 
          and clinical status.
        </p>
      </div>

      <div className="text-center text-[10px] text-gray-400 mt-4">
        Based on the Makis/Marik orthomolecular protocol • To be administered under physician supervision only
      </div>
      <BackToNav />
    </section>
  );
}
