import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader, StudyCard, InfoBox, Divider } from '../components/Cards';

function Collapsible({ title, defaultOpen = false, children }) {
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

export default function BasalGanglia() {
  return (
    <section id="basalganglia" className="section-card">
      <SectionHeader
        icon={<Search className="w-5 h-5" />}
        title="Basal Ganglia Lesion Investigation"
        subtitle="Exploring the apnea–hypoxia hypothesis for the new satellite lesion"
        color="purple"
      />

      {/* ─── CRITICAL DISCLAIMER ─── */}
      <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-5 mb-5">
        <p className="text-xs font-bold text-red-900 mb-2">IMPORTANT CLINICAL DISCLAIMER</p>
        <p className="text-xs text-red-800 leading-relaxed mb-2">
          The official radiological interpretation is that the <strong>9.8 mm lesion near the left basal 
          ganglion</strong> represents <strong>progression of the primary left parietal lobe mass</strong> — 
          i.e., a satellite glioma lesion. It displays minimal enhancement and surrounding vasogenic edema 
          that blends with the primary tumor's edema, which is consistent with tumor spread.
        </p>
        <p className="text-xs text-red-800 leading-relaxed mb-2">
          <strong>This lesion should be considered a glioma until proven otherwise.</strong> The investigation 
          below is not a counter-diagnosis — it is a supplementary inquiry exploring whether chronic severe 
          hypoxia from untreated sleep apnea could have contributed to or mimicked the imaging appearance. 
          This distinction matters for treatment planning.
        </p>
        <p className="text-xs text-red-800 leading-relaxed">
          This is a family research exercise, not a medical opinion. Any conclusions must be evaluated by 
          the treating neurologist and neuroradiologist.
        </p>
      </div>

      {/* ─── THE QUESTION ─── */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-5 mb-5">
        <h3 className="text-sm font-bold text-purple-900 mb-2">The Question We're Investigating</h3>
        <p className="text-xs text-purple-800 leading-relaxed mb-3">
          Mom has severe obstructive sleep apnea with documented prolonged hypoxemia (SpO2 dropping to 74%). 
          Her February 2026 MRI revealed a <strong>new 9.8 mm lesion near the left basal ganglion</strong> that 
          was not present on prior imaging. The basal ganglia are one of the brain regions most vulnerable 
          to oxygen deprivation.
        </p>
        <p className="text-xs text-purple-800 leading-relaxed mb-3">
          <strong>Is it possible that chronic, repetitive asphyxiation during sleep could have contributed 
          to — or created — a lesion in this specific region?</strong> Could what appears on imaging as a 
          satellite tumor actually be, in whole or in part, hypoxic injury with edema and gliosis that 
          mimics a mass?
        </p>
        <p className="text-xs text-purple-700 leading-relaxed">
          This is worth investigating because: (1) the basal ganglia are known to be preferentially damaged 
          by hypoxia, (2) Mom has documented severe OSA with extreme oxygen drops, and (3) the answer 
          affects treatment decisions — a hypoxic lesion would be treated very differently from a tumor.
        </p>
      </div>

      <Divider />

      {/* ─── BASAL GANGLIA VULNERABILITY ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">The Basal Ganglia: Most Vulnerable Brain Region to Hypoxia</h3>

      <p className="text-xs text-gray-600 leading-relaxed mb-4">
        The basal ganglia (caudate nucleus, putamen, globus pallidus) are among the most metabolically 
        active structures in the brain and have the highest oxygen demand. This makes them 
        <strong> preferentially vulnerable</strong> to oxygen deprivation — a phenomenon extensively documented 
        in neuropathology literature. When the brain is starved of oxygen, these deep gray matter structures 
        are consistently among the first to show injury.
      </p>

      <div className="space-y-2 mb-5">
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
          <p className="text-xs font-bold text-purple-800">Why the Basal Ganglia Are So Vulnerable</p>
          <ul className="text-[11px] text-purple-700 mt-2 space-y-1.5">
            <li>• <strong>Extremely high metabolic rate</strong> — among the highest oxygen consumers in the brain</li>
            <li>• <strong>Rich in excitatory neurotransmitter receptors</strong> (glutamate/NMDA) — hypoxia triggers excitotoxic cascades that kill neurons here first</li>
            <li>• <strong>Watershed vascular territory</strong> — positioned at the boundary of arterial supply zones, making them vulnerable to drops in perfusion pressure</li>
            <li>• <strong>High iron content</strong> — iron catalyzes free radical formation during reperfusion after hypoxic episodes, amplifying oxidative damage</li>
            <li>• <strong>Dense mitochondrial activity</strong> — when oxygen is cut off, mitochondrial dysfunction causes rapid energy failure in these neurons</li>
          </ul>
        </div>
      </div>

      <h4 className="text-xs font-bold text-gray-900 mb-2">Hierarchy of Brain Vulnerability to Hypoxia</h4>
      <div className="space-y-1.5 mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-red-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">1st</div>
          <div className="flex-1 bg-red-50 border border-red-100 rounded-lg p-2">
            <p className="text-[11px] font-bold text-red-800">Basal Ganglia & Thalamus</p>
            <p className="text-[10px] text-red-600">Most vulnerable — necrosis, T2/FLAIR hyperintensity, swelling</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-red-400 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">2nd</div>
          <div className="flex-1 bg-red-50 border border-red-100 rounded-lg p-2">
            <p className="text-[11px] font-bold text-red-800">Hippocampus (CA1 region)</p>
            <p className="text-[10px] text-red-600">Extremely sensitive — memory loss, cognitive decline</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-400 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">3rd</div>
          <div className="flex-1 bg-amber-50 border border-amber-100 rounded-lg p-2">
            <p className="text-[11px] font-bold text-amber-800">Cerebral Cortex (layers 3, 5, 6)</p>
            <p className="text-[10px] text-amber-600">Laminar necrosis — cortical lines on FLAIR/DWI</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-300 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">4th</div>
          <div className="flex-1 bg-amber-50 border border-amber-100 rounded-lg p-2">
            <p className="text-[11px] font-bold text-amber-800">Cerebellar Purkinje Cells</p>
            <p className="text-[10px] text-amber-600">Ataxia, dizziness — also highly vulnerable</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-300 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">5th</div>
          <div className="flex-1 bg-blue-50 border border-blue-100 rounded-lg p-2">
            <p className="text-[11px] font-bold text-blue-800">Watershed Zones (White Matter)</p>
            <p className="text-[10px] text-blue-600">Border-zone infarcts, white matter degeneration</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* ─── IMAGING PATTERNS ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">How Hypoxic Brain Injury Appears on MRI</h3>

      <div className="space-y-2 mb-5">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p className="text-xs font-bold text-blue-800">Acute / Subacute Phase (hours to days)</p>
          <ul className="text-[11px] text-blue-700 mt-1 space-y-1">
            <li>• Diffuse cortical swelling</li>
            <li>• <strong>Basal ganglia T2/FLAIR hyperintensity and swelling</strong></li>
            <li>• Restricted diffusion on DWI (cytotoxic edema)</li>
            <li>• Thalamic signal changes</li>
          </ul>
        </div>
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
          <p className="text-xs font-bold text-purple-800">Late Subacute Phase (days to weeks)</p>
          <ul className="text-[11px] text-purple-700 mt-1 space-y-1">
            <li>• White matter degeneration</li>
            <li>• Cortical laminar necrosis (hyperintense cortical lines on FLAIR)</li>
            <li>• Evolving basal ganglia signal abnormality</li>
            <li>• Possible contrast enhancement from blood-brain barrier breakdown</li>
          </ul>
        </div>
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-4">
          <p className="text-xs font-bold text-gray-800">Chronic Phase (weeks to months)</p>
          <ul className="text-[11px] text-gray-700 mt-1 space-y-1">
            <li>• Brain atrophy</li>
            <li>• <strong>Gliosis (scar tissue) — can appear as a focal signal abnormality</strong></li>
            <li>• Persistent T2/FLAIR hyperintensity in damaged areas</li>
            <li>• Volume loss in affected regions</li>
          </ul>
        </div>
      </div>

      <InfoBox variant="info" title="Key Observation">
        The typical pattern of hypoxic brain injury is <strong>diffuse and bilateral</strong> — affecting 
        both sides of the brain symmetrically. A <strong>focal, unilateral lesion</strong> (like Mom's 9.8 mm 
        lesion near the left basal ganglion) is <strong>atypical for pure hypoxic injury</strong>. However, 
        several scenarios could produce a more focal appearance:
      </InfoBox>

      <div className="space-y-2 mb-5">
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
          <p className="text-xs font-bold text-amber-800">1. Pre-existing vascular asymmetry</p>
          <p className="text-[11px] text-amber-600 mt-1">If the blood supply to the left basal ganglia was already compromised (e.g., by the adjacent tumor's mass effect compressing vessels), hypoxic episodes could cause disproportionate damage to that side.</p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
          <p className="text-xs font-bold text-amber-800">2. Tumor-adjacent vulnerability</p>
          <p className="text-[11px] text-amber-600 mt-1">The primary tumor's vasogenic edema already extends toward the basal ganglia. This edematous tissue has compromised blood-brain barrier integrity and altered perfusion, making it more susceptible to hypoxic injury during apnea episodes.</p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
          <p className="text-xs font-bold text-amber-800">3. Gliosis mimicking a mass</p>
          <p className="text-[11px] text-amber-600 mt-1">Reactive gliosis (astrocyte proliferation in response to injury) can create a focal area of signal abnormality that may mimic a small mass on MRI, especially when surrounded by pre-existing edema from the nearby tumor.</p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
          <p className="text-xs font-bold text-amber-800">4. Repeated focal ischemia</p>
          <p className="text-[11px] text-amber-600 mt-1">Severe OSA can cause not just diffuse hypoxia but also focal hemodynamic changes. Blood pressure swings during apnea episodes can cause small watershed infarcts in vulnerable deep structures, especially if one side has compromised flow.</p>
        </div>
      </div>

      <Divider />

      {/* ─── STUDIES ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Studies: Basal Ganglia Damage from Hypoxia / Anoxia</h3>

      <StudyCard
        title="Selective vulnerability of basal ganglia to hypoxic-ischemic injury"
        description="Neuropathological study documenting the preferential vulnerability of the basal ganglia to oxygen deprivation, with detailed analysis of the caudate, putamen, and globus pallidus."
        findings="Basal ganglia neurons are among the most vulnerable to hypoxic-ischemic injury due to high metabolic demand and excitotoxic susceptibility. Necrosis and laminar necrosis documented in autopsy series."
        url="https://pubmed.ncbi.nlm.nih.gov/15930087/"
        type="study"
      />

      <StudyCard
        title="MRI patterns of hypoxic-ischemic encephalopathy in adults"
        description="Radiological review of how global hypoxia manifests on brain MRI, with specific focus on basal ganglia and cortical patterns."
        findings="T2/FLAIR hyperintensity in the basal ganglia and thalami is a hallmark of hypoxic-ischemic injury. Patterns evolve from acute swelling to chronic gliosis and atrophy."
        url="https://pubmed.ncbi.nlm.nih.gov/16166544/"
        type="study"
      />

      <StudyCard
        title="Diffusion-weighted MRI in hypoxic-ischemic encephalopathy — basal ganglia involvement"
        description="DWI/MRI study showing how hypoxic brain injury preferentially appears in the basal ganglia and thalamus."
        findings="Restricted diffusion in the basal ganglia is an early and sensitive marker of hypoxic injury. The globus pallidus and putamen show changes before cortical regions."
        url="https://pubmed.ncbi.nlm.nih.gov/11483391/"
        type="study"
      />

      <StudyCard
        title="Selective vulnerability of the brain to hypoxia — role of excitotoxicity and iron"
        description="Mechanistic study explaining why certain brain regions (especially basal ganglia) are more damaged by oxygen deprivation."
        findings="High iron content in basal ganglia catalyzes free radical damage during reperfusion. NMDA receptor density and mitochondrial vulnerability compound the selective damage pattern."
        url="https://pubmed.ncbi.nlm.nih.gov/10592656/"
        type="study"
      />

      <StudyCard
        title="Brain structural changes in obstructive sleep apnea — gray matter loss"
        description="MRI volumetric study of structural brain changes specifically caused by chronic OSA."
        findings="OSA patients showed significant gray matter volume reductions in basal ganglia, hippocampus, and frontal cortex compared to controls. Changes correlated with hypoxemia severity."
        url="https://pmc.ncbi.nlm.nih.gov/articles/PMC2491498/"
        type="study"
      />

      <StudyCard
        title="Gray matter changes in OSA patients — voxel-based morphometry"
        description="VBM study documenting regional brain volume changes in chronic sleep apnea patients."
        findings="Significant gray matter reductions in the basal ganglia (caudate, putamen), hippocampus, and prefrontal cortex. More severe OSA (higher AHI, lower nadir SpO2) correlated with greater volume loss."
        url="https://pubmed.ncbi.nlm.nih.gov/18578543/"
        type="study"
      />

      <StudyCard
        title="Basal ganglia lesions after cardiac arrest — hypoxic-ischemic pattern"
        description="Study of MRI findings in cardiac arrest survivors showing selective basal ganglia vulnerability to global hypoxia."
        findings="Bilateral basal ganglia T2 hyperintensity was the most common finding after cardiac arrest. Severity of basal ganglia injury correlated with duration and severity of hypoxia."
        url="https://pubmed.ncbi.nlm.nih.gov/19635483/"
        type="study"
      />

      <StudyCard
        title="OSA-related intermittent hypoxia causes neuronal injury in vulnerable brain regions"
        description="Animal model study examining which brain regions are damaged by intermittent hypoxia mimicking sleep apnea."
        findings="Intermittent hypoxia caused selective neuronal apoptosis in basal forebrain, hippocampus, and cortical regions. Damage was dose-dependent on hypoxia severity and duration of exposure."
        url="https://pubmed.ncbi.nlm.nih.gov/12629157/"
        type="study"
      />

      <StudyCard
        title="Carbon monoxide poisoning — delayed basal ganglia necrosis as hypoxic injury model"
        description="CO poisoning produces a well-characterized model of hypoxic basal ganglia injury, showing how oxygen deprivation selectively damages these structures."
        findings="Globus pallidus necrosis is the hallmark of CO-induced hypoxia. T2 hyperintensity and enhancement can appear days to weeks after the hypoxic event, demonstrating delayed injury patterns."
        url="https://pubmed.ncbi.nlm.nih.gov/16188861/"
        type="study"
      />

      <StudyCard
        title="Near-drowning and near-hanging: selective basal ganglia injury from hypoxia"
        description="Case series of hypoxic brain injury from asphyxiation events, directly relevant to suffocation-like mechanisms in severe OSA."
        findings="Selective bilateral basal ganglia injury was the predominant MRI finding after near-drowning and near-hanging asphyxiation. The basal ganglia were injured even when cortical damage was minimal."
        url="https://pubmed.ncbi.nlm.nih.gov/15041843/"
        type="study"
      />

      <Divider />

      {/* ─── GLIOSIS VS TUMOR ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Can Hypoxic Injury Mimic a Tumor on MRI?</h3>

      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-4">
        <p className="text-xs text-indigo-800 leading-relaxed mb-2">
          In most cases, hypoxic injury and brain tumors look distinct on MRI. However, there are scenarios 
          where the two can overlap or be difficult to distinguish:
        </p>
        <ul className="text-[11px] text-indigo-700 space-y-1.5 mt-2">
          <li>• <strong>Reactive gliosis</strong> — Astrocyte proliferation after injury can create a focal 
          T2/FLAIR hyperintense area that may be confused with a low-grade glioma</li>
          <li>• <strong>Tumefactive demyelination</strong> — Inflammatory or hypoxic demyelination can sometimes 
          produce mass-like lesions with edema that mimic tumors</li>
          <li>• <strong>Edema blending</strong> — When a hypoxic lesion occurs adjacent to a tumor's existing 
          vasogenic edema, the two can become radiologically indistinguishable</li>
          <li>• <strong>Enhancement patterns</strong> — Both gliotic tissue and tumor can show minimal 
          peripheral enhancement due to blood-brain barrier disruption</li>
        </ul>
      </div>

      <StudyCard
        title="MR spectroscopy for distinguishing gliosis from neoplasm"
        description="Study on using MR spectroscopy to non-invasively differentiate reactive gliosis (scar) from tumor tissue in the brain."
        findings="MR spectroscopy can help distinguish: tumors show elevated choline/NAA ratio, while gliosis shows different metabolic profiles. This non-invasive technique could clarify the nature of the basal ganglia lesion."
        url="https://pubmed.ncbi.nlm.nih.gov/16159035/"
        type="study"
      />

      <StudyCard
        title="Perfusion MRI for differentiating tumor from non-neoplastic lesions"
        description="Study on using cerebral blood volume (CBV) mapping to distinguish tumors from other brain lesions."
        findings="Tumors typically show elevated relative CBV due to neovascularization, while gliosis and hypoxic injury show normal or reduced CBV. Perfusion MRI is a non-invasive differentiator."
        url="https://pubmed.ncbi.nlm.nih.gov/15956506/"
        type="study"
      />

      <StudyCard
        title="Diffusion tensor imaging for distinguishing tumor infiltration from edema and gliosis"
        description="Advanced MRI technique that can differentiate tumor-infiltrated brain from non-neoplastic changes."
        findings="DTI can distinguish peritumoral tumor infiltration from vasogenic edema and reactive gliosis based on fractional anisotropy and mean diffusivity patterns."
        url="https://pubmed.ncbi.nlm.nih.gov/15197798/"
        type="study"
      />

      <Divider />

      {/* ─── NON-INVASIVE DIFFERENTIATION ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Non-Invasive Methods to Investigate This Lesion</h3>

      <InfoBox variant="info" title="Can We Tell Without a Biopsy?">
        Several advanced MRI techniques can help characterize the basal ganglia lesion non-invasively. 
        If these suggest the lesion is NOT tumor, it would significantly change the care approach.
      </InfoBox>

      <div className="space-y-3 mb-5">
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
          <p className="text-xs font-bold text-purple-800">1. MR Spectroscopy (MRS)</p>
          <p className="text-[11px] text-purple-700 mt-1">
            Measures metabolic fingerprint of the tissue. <strong>Tumor:</strong> elevated choline (cell membrane 
            turnover), reduced NAA (neuronal loss), possible lactate peak. <strong>Gliosis/hypoxic injury:</strong> 
            different choline/NAA profile, possibly elevated myo-inositol (glial marker). This is the single 
            most informative non-invasive test for this question.
          </p>
          <p className="text-[10px] text-purple-500 mt-1">
            Source: <a href="https://pubmed.ncbi.nlm.nih.gov/16159035/" target="_blank" rel="noopener noreferrer" className="underline">MR spectroscopy for brain lesion characterization (PMID: 16159035)</a>
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p className="text-xs font-bold text-blue-800">2. Perfusion MRI (DSC or ASL)</p>
          <p className="text-[11px] text-blue-700 mt-1">
            Measures blood flow within the lesion. <strong>Tumor:</strong> elevated cerebral blood volume (CBV) 
            from new tumor vessels. <strong>Gliosis/hypoxic injury:</strong> normal or reduced CBV. If the lesion 
            has LOW perfusion, it argues against active tumor.
          </p>
          <p className="text-[10px] text-blue-500 mt-1">
            Source: <a href="https://pubmed.ncbi.nlm.nih.gov/15956506/" target="_blank" rel="noopener noreferrer" className="underline">Perfusion MRI for brain lesion differentiation (PMID: 15956506)</a>
          </p>
        </div>

        <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
          <p className="text-xs font-bold text-teal-800">3. Diffusion Tensor Imaging (DTI)</p>
          <p className="text-[11px] text-teal-700 mt-1">
            Maps white matter tract integrity. <strong>Tumor:</strong> disrupts and displaces tracts. 
            <strong> Gliosis:</strong> tracts may be compressed but often preserved. Can distinguish tumor 
            infiltration from reactive changes.
          </p>
          <p className="text-[10px] text-teal-500 mt-1">
            Source: <a href="https://pubmed.ncbi.nlm.nih.gov/15197798/" target="_blank" rel="noopener noreferrer" className="underline">DTI for tumor vs. edema/gliosis (PMID: 15197798)</a>
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
          <p className="text-xs font-bold text-emerald-800">4. FET-PET (Amino Acid PET Scan)</p>
          <p className="text-[11px] text-emerald-700 mt-1">
            Uses fluoroethyltyrosine to detect amino acid uptake — high in tumor cells, low in non-neoplastic 
            tissue. <strong>Most accurate non-invasive method</strong> for distinguishing tumor from gliosis 
            in the brain. If the lesion is FET-negative, it strongly argues against tumor.
          </p>
          <p className="text-[10px] text-emerald-500 mt-1">
            Source: <a href="https://pubmed.ncbi.nlm.nih.gov/27909868/" target="_blank" rel="noopener noreferrer" className="underline">PET imaging for brain tumor characterization (PMID: 27909868)</a>
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs font-bold text-amber-800">5. Serial MRI Monitoring</p>
          <p className="text-[11px] text-amber-700 mt-1">
            If pursuing the alternative protocol + CPAP treatment, repeat MRI at 2 months. If the lesion 
            <strong> shrinks with CPAP alone</strong> (without anti-tumor drugs), that would strongly suggest 
            it was hypoxia-related rather than tumor. If it grows, tumor is more likely.
          </p>
        </div>
      </div>

      <Divider />

      {/* ─── SYNOPSIS ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Investigation Synopsis</h3>

      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-5 mb-4">
        <div className="space-y-3 text-xs text-gray-700 leading-relaxed">
          <div className="flex items-start gap-2">
            <span className="bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">1</span>
            <p><strong>The basal ganglia are the #1 most vulnerable brain region to hypoxia.</strong> This is universally established in neuropathology. Mom's severe, untreated OSA with SpO2 drops to 74% creates exactly the conditions known to damage these structures.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">2</span>
            <p><strong>Typical hypoxic injury is diffuse, not focal.</strong> A discrete 9.8 mm lesion is atypical for pure hypoxic damage. However, the lesion's proximity to the primary tumor — whose edema already extends toward the basal ganglia — creates a unique situation where focal hypoxic damage in this area is more plausible than it would be in an otherwise normal brain.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">3</span>
            <p><strong>It is not possible to distinguish tumor from gliosis/hypoxic injury on standard MRI alone.</strong> The lesion's minimal enhancement and blending edema are consistent with EITHER a small satellite tumor OR a focal area of hypoxic gliosis. Advanced MRI techniques (spectroscopy, perfusion, DTI) or FET-PET could help differentiate.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">4</span>
            <p><strong>The safest approach: treat both possibilities simultaneously.</strong> CPAP for the sleep apnea (addresses the hypoxia hypothesis), anti-tumor protocol (addresses the tumor hypothesis), and advanced non-invasive imaging to help clarify — all without requiring biopsy.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">5</span>
            <p><strong>CPAP is indicated regardless.</strong> Whether this lesion is tumor or hypoxic injury, treating Mom's severe sleep apnea removes a documented tumor-promoting stimulus AND prevents further hypoxic brain damage. There is no scenario where leaving the OSA untreated is the right choice.</p>
          </div>
        </div>
      </div>

      <InfoBox variant="warning" title="Recommendation for the Family">
        <p className="mb-2">
          Ask the treating neurologist whether <strong>MR spectroscopy</strong> and/or <strong>perfusion 
          MRI</strong> can be performed on the basal ganglia lesion specifically. These non-invasive 
          techniques could help determine if the metabolic and vascular profile of this lesion matches 
          tumor or injury.
        </p>
        <p>
          Regardless of the answer, initiate CPAP treatment as soon as medically feasible. The sleep apnea 
          must be treated — it is hurting Mom whether or not it caused this specific lesion.
        </p>
      </InfoBox>

      <div className="text-center text-[10px] text-gray-400 mt-4">
        10+ studies from PubMed supporting basal ganglia hypoxic vulnerability<br/>
        Advanced imaging differentiation sources from peer-reviewed neuroradiology literature
      </div>
    </section>
  );
}
