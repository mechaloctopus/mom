import React, { useState } from 'react';
import { Moon, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader, StudyCard, InfoBox, Divider, StatCard } from '../components/Cards';

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

export default function SleepApnea() {
  return (
    <section id="sleepapnea" className="section-card">
      <SectionHeader
        icon={<Moon className="w-5 h-5" />}
        title="Sleep Apnea & Brain Tumor Association"
        subtitle="OSA, intermittent hypoxia, and CNS tumor research"
        color="red"
      />

      <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-5 mb-5">
        <h3 className="text-sm font-bold text-red-900 mb-2">Why This Matters for Mom</h3>
        <p className="text-xs text-red-800 leading-relaxed mb-2">
          Mom has <strong>severe sleep apnea</strong>, a <strong>brain tumor</strong>, and experienced 
          <strong> prolonged hypoxemia (SpO2 74%)</strong>. A growing body of research shows that obstructive 
          sleep apnea (OSA) and the chronic intermittent hypoxia it causes are associated with 
          <strong> increased risk of brain and CNS tumors</strong>. While this is not proven direct causation, 
          the association is supported by large cohort studies, meta-analyses, and animal models.
        </p>
        <p className="text-xs text-red-800 leading-relaxed">
          This creates a potential <strong>vicious cycle</strong>: OSA causes chronic hypoxia → hypoxia may 
          promote tumor growth → brain tumors can worsen sleep apnea by affecting breathing control areas → 
          more hypoxia. <strong>Treating the sleep apnea is one of the most actionable interventions</strong> to 
          break this cycle.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <StatCard value="54%" label="Higher CNS Cancer Risk" sublabel="OSA patients (Taiwan cohort)" color="red" />
        <StatCard value="1.71x" label="Brain Cancer Hazard Ratio" sublabel="Chen et al., 2014" color="red" />
        <StatCard value="1.67x" label="Brain Tumor Risk" sublabel="Korean cohort (Cho, 2020)" color="amber" />
        <StatCard value="2.20x" label="Risk w/ OSA + Insomnia" sublabel="Combined sleep disorders" color="purple" />
      </div>

      <Divider />

      {/* ─── KEY FINDINGS ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Key Human Study Findings</h3>

      <div className="space-y-3 mb-5">
        <div className="bg-red-50 border border-red-100 rounded-xl p-4">
          <p className="text-xs font-bold text-red-800 mb-1">Taiwan Nationwide Cohort (23,055 OSA patients, 10-year follow-up)</p>
          <p className="text-[11px] text-red-700 leading-relaxed">
            OSA patients had a <strong>54% higher adjusted risk</strong> (HR 1.54) of developing primary CNS cancers. 
            The risk was even higher specifically for brain cancers (<strong>HR 1.71</strong>). 
            Patients with both OSA and insomnia had the highest risk (<strong>HR 2.20</strong>).
          </p>
          <p className="text-[10px] text-red-500 mt-1">
            Source: <a href="https://pubmed.ncbi.nlm.nih.gov/24891080" target="_blank" rel="noopener noreferrer" className="underline">Chen et al., Sleep Medicine, 2014 (PMID: 24891080)</a>
          </p>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-xl p-4">
          <p className="text-xs font-bold text-red-800 mb-1">Korean National Cohort (198,574 OSA patients, ~4.8-year follow-up)</p>
          <p className="text-[11px] text-red-700 leading-relaxed">
            The adjusted hazard ratio for malignant brain tumor incidence was <strong>1.67</strong> in OSA patients 
            compared to matched controls. The risk was higher in men than women in subgroup analyses.
          </p>
          <p className="text-[10px] text-red-500 mt-1">
            Source: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7660473" target="_blank" rel="noopener noreferrer" className="underline">Cho et al., PLOS ONE, 2020</a>
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs font-bold text-amber-800 mb-1">Meta-Analysis of 70 Studies — CNS Tumor Association</p>
          <p className="text-[11px] text-amber-700 leading-relaxed">
            A meta-analysis concluded a strong association between sleep apnea (obstructive and central types) 
            and CNS tumors, including pituitary adenomas and brainstem gliomas. The association applied across 
            age groups, with mixed sleep apnea (obstructive + central) most commonly linked.
          </p>
          <p className="text-[10px] text-amber-500 mt-1">
            Source: <a href="https://medcraveonline.com/IJRRT/correlation-between-sleep-apnea-and-cns-tumors-meta-analysis.html" target="_blank" rel="noopener noreferrer" className="underline">Rai et al., 2023</a>
          </p>
        </div>
      </div>

      <Divider />

      {/* ─── MECHANISMS ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">How Intermittent Hypoxia May Promote Tumors</h3>
      <p className="text-xs text-gray-600 leading-relaxed mb-3">
        Research reveals multiple biological mechanisms by which chronic intermittent hypoxia from OSA 
        could contribute to tumor development or accelerate existing tumor growth:
      </p>

      <div className="grid grid-cols-1 gap-2 mb-5">
        <div className="bg-red-50 border border-red-100 rounded-xl p-3">
          <p className="text-xs font-bold text-red-800">HIF-1 Pathway Activation</p>
          <p className="text-[11px] text-red-600 mt-1">
            Intermittent hypoxia activates Hypoxia-Inducible Factor (HIF-1) signaling — the same pathway 
            glioblastoma tumors exploit for growth, invasion, and chemotherapy resistance. OSA may feed 
            the tumor's preferred survival mechanism.
          </p>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-3">
          <p className="text-xs font-bold text-orange-800">Angiogenesis (New Blood Vessel Formation)</p>
          <p className="text-[11px] text-orange-600 mt-1">
            Hypoxia stimulates VEGF and new blood vessel growth — exactly what tumors need to sustain 
            their expanding mass. Chronic OSA may continuously provide this pro-angiogenic signal.
          </p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
          <p className="text-xs font-bold text-amber-800">Chronic Inflammation & Oxidative Stress</p>
          <p className="text-[11px] text-amber-600 mt-1">
            Repetitive oxygen drops cause surges of reactive oxygen species and inflammatory cytokines. 
            This chronic inflammatory state promotes DNA damage and creates a pro-tumor microenvironment.
          </p>
        </div>
        <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-3">
          <p className="text-xs font-bold text-yellow-800">Immune System Dysregulation</p>
          <p className="text-[11px] text-yellow-700 mt-1">
            Intermittent hypoxia impairs natural killer cell function and alters tumor-associated macrophages, 
            weakening the immune system's ability to detect and destroy cancer cells.
          </p>
        </div>
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-3">
          <p className="text-xs font-bold text-purple-800">Brain Tissue Damage</p>
          <p className="text-[11px] text-purple-600 mt-1">
            Chronic OSA causes white matter changes, cognitive decline, and ischemic lesions in the brain. 
            This damaged tissue environment may be more susceptible to abnormal cell growth.
          </p>
        </div>
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3">
          <p className="text-xs font-bold text-indigo-800">Cancer Cell Selection</p>
          <p className="text-[11px] text-indigo-600 mt-1">
            Intermittent hypoxia can select for more aggressive, therapy-resistant cancer cell phenotypes — 
            cells that thrive in low-oxygen conditions persist and become dominant, making tumors harder to treat.
          </p>
        </div>
      </div>

      <InfoBox variant="danger" title="The Vicious Cycle">
        Research documents a <strong>bidirectional relationship</strong>: OSA causes hypoxia that may promote 
        tumor growth, and brain tumors can worsen sleep apnea by affecting brainstem breathing control areas. 
        This creates a self-reinforcing cycle. <strong>Breaking the cycle with CPAP treatment is critical.</strong>
      </InfoBox>

      <Divider />

      {/* ─── CPAP / TREATMENT ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Can Treating OSA Help?</h3>
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-4">
        <p className="text-xs text-emerald-800 leading-relaxed mb-2">
          <strong>Emerging evidence suggests CPAP treatment may reduce cancer risk in OSA patients.</strong> 
          While the data is still evolving, some studies and randomized controlled trials suggest that 
          treating OSA with CPAP could protect against cancer incidence — which means addressing Mom's 
          sleep apnea is not just about comfort, it could be part of the anti-cancer strategy.
        </p>
        <div className="space-y-1 text-[11px] text-emerald-700">
          <p>• Systematic review found potential protective effect of CPAP on cancer risk in OSA</p>
          <p>• Meta-analysis of 3 RCTs evaluated CPAP's role in reducing cancer incidence</p>
          <p>• Even without conclusive proof, treating hypoxemia removes a known tumor-promoting stimulus</p>
        </div>
      </div>

      <StudyCard
        title="Does CPAP increase or protect against cancer risk in OSA?"
        description="Systematic review and meta-analysis examining whether CPAP treatment affects cancer incidence in OSA patients."
        findings="Evidence suggests CPAP may have a protective effect against cancer in OSA patients, though more research is needed."
        url="https://pubmed.ncbi.nlm.nih.gov/40310575"
        type="study"
      />

      <StudyCard
        title="CPAP to reduce the risk of cancer in OSA — meta-analysis of 3 RCTs"
        description="Meta-analysis of randomized controlled trials evaluating CPAP's impact on cancer risk."
        url="https://onlinelibrary.wiley.com/doi/10.1111/jsr.70153"
        type="study"
      />

      <StudyCard
        title="Can CPAP protect from cancer incidence in OSA patients?"
        description="Editorial/analysis discussing the biological plausibility and early evidence for CPAP cancer protection."
        url="https://publications.ersnet.org/content/erj/59/4/2102742"
        type="article"
      />

      <Divider />

      {/* ─── ALL STUDIES ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Complete Source Library</h3>

      <Collapsible title="Human Cohort Studies — OSA Preceding Brain/CNS Cancers" defaultOpen={true}>
        <StudyCard
          title="Sleep apnea increased incidence of primary CNS cancers — Taiwan cohort"
          description="23,055 OSA patients vs matched controls, 10-year follow-up. Nationwide cohort study."
          findings="OSA patients had HR 1.54 for CNS cancers, HR 1.71 for brain cancers specifically. OSA + insomnia group: HR 2.20."
          url="https://pubmed.ncbi.nlm.nih.gov/24891080"
          type="study"
        />
        <StudyCard
          title="Incidence of malignant brain tumors increased in OSA patients — Korean survey"
          description="198,574 OSA adults vs 992,870 controls, ~4.8-year follow-up. National health insurance data."
          findings="Adjusted HR 1.67 for malignant brain tumor incidence in OSA patients. Higher risk in men."
          url="https://pmc.ncbi.nlm.nih.gov/articles/PMC7660473"
          type="study"
        />
      </Collapsible>

      <Collapsible title="Meta-Analyses & Systematic Reviews" defaultOpen={false}>
        <StudyCard
          title="Correlation between sleep apnea and CNS tumors — meta-analysis"
          description="Aggregation of 70 studies on sleep apnea and CNS tumor association across age groups."
          findings="Strong association between sleep apnea and CNS tumors. Mixed apnea (obstructive + central) most commonly linked."
          url="https://medcraveonline.com/IJRRT/correlation-between-sleep-apnea-and-cns-tumors-meta-analysis.html"
          type="study"
        />
        <StudyCard
          title="Cancer and obstructive sleep apnea — updated meta-analysis (2022)"
          description="Broad cancer-OSA meta-analysis including mechanistic framing."
          url="https://pmc.ncbi.nlm.nih.gov/articles/PMC8913079"
          type="study"
        />
        <StudyCard
          title="OSA and incidence of malignant tumors — meta-analysis (2021)"
          description="Broad malignancy incidence meta-analysis."
          url="https://www.sciencedirect.com/science/article/abs/pii/S1389945721003087"
          type="study"
        />
      </Collapsible>

      <Collapsible title="Mechanistic & Animal Studies — Intermittent Hypoxia and Cancer" defaultOpen={false}>
        <StudyCard
          title="Intermittent hypoxia enhances cancer progression in a mouse model of sleep apnoea"
          description="Animal model demonstrating that sleep-apnea-like hypoxia accelerates cancer progression."
          url="https://publications.ersnet.org/content/erj/39/1/215"
          type="study"
        />
        <StudyCard
          title="Accelerated tumor growth under intermittent hypoxia — HIF-1 dependent"
          description="Intermittent hypoxia frequency linked to HIF-1-dependent tumor growth acceleration."
          url="https://pmc.ncbi.nlm.nih.gov/articles/PMC5617448"
          type="study"
        />
        <StudyCard
          title="Models of intermittent hypoxia and OSA — molecular pathways in cancer"
          description="Comprehensive review of how OSA-like hypoxia patterns alter tumor microenvironment."
          url="https://journals.physiology.org/doi/full/10.1152/ajpregu.00036.2018"
          type="study"
        />
        <StudyCard
          title="Intermittent hypoxia changes tumor-associated macrophages and tumor malignancy"
          description="Mouse model showing immune microenvironment changes from intermittent hypoxia."
          url="https://pubmed.ncbi.nlm.nih.gov/25061543/"
          type="study"
        />
        <StudyCard
          title="Intermittent hypoxia selects for aggressive, therapy-resistant cancer phenotypes"
          description="In vitro work showing hypoxia selects for heritable aggressive tumor traits."
          url="https://pubmed.ncbi.nlm.nih.gov/26026686/"
          type="study"
        />
        <StudyCard
          title="Intermittent hypoxia regulates stem-like characteristics in neuroblastoma cells"
          description="Hypoxia increases HIF signaling and stem-like properties in nervous system tumor model."
          url="https://pubmed.ncbi.nlm.nih.gov/22552284/"
          type="study"
        />
        <StudyCard
          title="Chronic intermittent hypoxia enhances disease progression in myeloma"
          description="Evidence that chronic intermittent hypoxia accelerates cancer progression."
          url="https://pmc.ncbi.nlm.nih.gov/articles/PMC6589607"
          type="study"
        />
        <StudyCard
          title="Chronic intermittent hypoxia increases cell proliferation in hepatocellular carcinoma"
          description="Intermittent hypoxia promotes cancer cell proliferation in liver cancer model."
          url="https://www.mdpi.com/2073-4409/11/13/2051"
          type="study"
        />
      </Collapsible>

      <Collapsible title="Brain Damage, Hypoxia & Neurodegeneration from OSA" defaultOpen={false}>
        <StudyCard
          title="Intermittent hypoxia from OSA may cause neuronal impairment via microglia"
          description="Mechanisms of neuronal damage from chronic intermittent hypoxia in OSA."
          url="https://pmc.ncbi.nlm.nih.gov/articles/PMC3742344"
          type="study"
        />
        <StudyCard
          title="Nocturnal cerebral hypoxia in OSA — randomized controlled trial"
          description="RCT documenting nocturnal brain oxygen drops in OSA patients."
          url="https://publications.ersnet.org/content/erj/51/5/1800032"
          type="study"
        />
        <StudyCard
          title="Brain structural changes in obstructive sleep apnea"
          description="MRI-documented brain changes from chronic OSA."
          url="https://pmc.ncbi.nlm.nih.gov/articles/PMC2491498"
          type="study"
        />
        <StudyCard
          title="Impact of chronic intermittent hypoxia on cognitive function"
          description="How chronic intermittent hypoxia affects cognition and hippocampal function."
          url="https://www.dovepress.com/impact-of-chronic-intermittent-hypoxia-on-cognitive-function-and-hippo-peer-reviewed-fulltext-article-NSS"
          type="study"
        />
        <StudyCard
          title="Chronic intermittent hypoxia induces oxidative stress and inflammation in brain"
          description="Intermittent hypoxia causes oxidative stress in brain regions linked to neurodegeneration."
          url="https://physoc.onlinelibrary.wiley.com/doi/10.14814/phy2.13258"
          type="study"
        />
      </Collapsible>

      <Collapsible title="Bidirectional: Brain Tumors Worsening Sleep Apnea" defaultOpen={false}>
        <StudyCard
          title="The vicious interplay between disrupted sleep and malignant brain tumors"
          description="Narrative review of the bidirectional relationship between sleep disruption and brain tumors."
          url="https://pmc.ncbi.nlm.nih.gov/articles/PMC8491053"
          type="study"
        />
        <StudyCard
          title="Central sleep apnoea as initial presentation of posterior fossa astrocytoma"
          description="Case report of brain tumor presenting first as central sleep apnea."
          url="https://casereports.bmj.com/content/15/12/e253025"
          type="study"
        />
        <StudyCard
          title="Correlation of sleep disturbance and location of glioma tumors"
          description="Narrative review compiling multiple tumor-sleep apnea case reports across glioma types."
          url="https://www.mdpi.com/2077-0383/12/12/4058"
          type="article"
        />
        <StudyCard
          title="Glioblastoma comorbidities and survival — OSA as prognostic risk factor"
          description="Retrospective study of 867 GBM patients showing untreated OSA as potential prognostic risk."
          url="https://pubmed.ncbi.nlm.nih.gov/39800000/"
          type="study"
        />
      </Collapsible>

      <Collapsible title="Glioblastoma & Hypoxia Microenvironment" defaultOpen={false}>
        <StudyCard
          title="Investigating glioblastoma response to hypoxia"
          description="Review of how hypoxic cores in GBM drive aggressiveness and chemoresistance."
          url="https://pubmed.ncbi.nlm.nih.gov/32408609/"
          type="study"
        />
        <StudyCard
          title="Relationship between sleep apnea and cancer"
          description="Review discussing cancer links from OSA with citation of CNS cohort evidence."
          url="https://www.archbronconeumol.org/en-relationship-between-sleep-apnea-cancer-articulo-S1579212915002724"
          type="article"
        />
      </Collapsible>

      <Divider />

      {/* ─── RELEVANCE SYNOPSIS ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Relevance to Mom's Situation</h3>

      <div className="bg-gradient-to-br from-primary-50 to-indigo-50 border border-primary-200 rounded-2xl p-5 mb-4">
        <div className="space-y-3 text-xs text-gray-700 leading-relaxed">
          <div className="flex items-start gap-2">
            <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">1</span>
            <p><strong>Mom has both OSA and a brain tumor.</strong> Two large national cohort studies show OSA patients have 54–67% higher risk of developing brain/CNS cancers. While we can't know if her OSA caused the tumor, the association is documented.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">2</span>
            <p><strong>Untreated OSA may be feeding the tumor.</strong> Intermittent hypoxia activates HIF-1 pathways, promotes angiogenesis, causes inflammation, and suppresses anti-tumor immunity — all mechanisms that glioblastoma tumors exploit. Every night of untreated OSA may be providing the tumor with growth signals.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">3</span>
            <p><strong>The SpO2 74% event may reflect the vicious cycle.</strong> The tumor may be worsening her sleep apnea by affecting brainstem respiratory centers, which causes more hypoxia, which may accelerate tumor growth.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">4</span>
            <p><strong>CPAP is an actionable intervention.</strong> Treating OSA with CPAP eliminates the intermittent hypoxia stimulus. Emerging evidence suggests CPAP may reduce cancer risk. Even without conclusive proof, removing a documented tumor-promoting exposure is sound logic.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">5</span>
            <p><strong>This supports the Proposed Care Protocol.</strong> The protocol already prioritizes sleep apnea treatment. This research provides strong scientific backing for that decision — it's not just about sleep quality, it's about removing a potential tumor growth driver.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* ─── BASAL GANGLIA INVESTIGATION ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Basal Ganglia Lesion Investigation</h3>

      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4 mb-3">
        <p className="text-[11px] font-bold text-red-900 mb-1">CLINICAL DISCLAIMER</p>
        <p className="text-[11px] text-red-800 leading-relaxed">
          The official interpretation is that Mom's 9.8 mm basal ganglia lesion is a <strong>satellite glioma</strong>. 
          It should be considered tumor until proven otherwise. This investigation explores whether chronic severe 
          hypoxia could have contributed to or mimicked this lesion — it is supplementary, not a counter-diagnosis.
        </p>
      </div>

      <Collapsible title="Could Hypoxia Have Caused the Basal Ganglia Lesion?" defaultOpen={false}>
        <p className="mb-3">The basal ganglia are the <strong>#1 most vulnerable brain region to oxygen deprivation</strong> due to extremely high metabolic rate, dense excitatory receptors, watershed vascular territory, and high iron content. Mom's SpO2 drops to 74% create exactly the conditions known to damage these structures.</p>

        <p className="font-bold mb-1">Brain Vulnerability Hierarchy to Hypoxia:</p>
        <ol className="space-y-0.5 mb-3 list-decimal list-inside">
          <li><strong>Basal Ganglia & Thalamus</strong> — most vulnerable (necrosis, T2/FLAIR hyperintensity)</li>
          <li><strong>Hippocampus (CA1)</strong> — memory loss, cognitive decline</li>
          <li><strong>Cerebral Cortex (layers 3, 5, 6)</strong> — laminar necrosis</li>
          <li><strong>Cerebellar Purkinje Cells</strong> — ataxia, dizziness</li>
          <li><strong>Watershed Zones</strong> — white matter degeneration</li>
        </ol>

        <p className="font-bold mb-1">Why a Focal Lesion Could Still Be Hypoxic:</p>
        <ul className="space-y-1 mb-3">
          <li>• <strong>Tumor compresses nearby vessels</strong> — the primary tumor's mass effect may compromise blood supply specifically to the left basal ganglia, making that side more vulnerable to hypoxic episodes</li>
          <li>• <strong>Edema blending</strong> — the primary tumor's vasogenic edema already extends toward the basal ganglia, creating tissue with compromised blood-brain barrier integrity</li>
          <li>• <strong>Gliosis can mimic a mass</strong> — reactive astrocyte proliferation after injury creates focal T2/FLAIR signal abnormality that can look like a small tumor on MRI</li>
        </ul>

        <p className="font-bold mb-1">Key Studies — Basal Ganglia Hypoxic Vulnerability:</p>
        <StudyCard title="Selective vulnerability of basal ganglia to hypoxic-ischemic injury" description="Neuropathological documentation of preferential basal ganglia damage from oxygen deprivation." url="https://pubmed.ncbi.nlm.nih.gov/15930087/" type="study" />
        <StudyCard title="MRI patterns of hypoxic-ischemic encephalopathy — basal ganglia involvement" description="T2/FLAIR hyperintensity in basal ganglia as hallmark of hypoxic injury." url="https://pubmed.ncbi.nlm.nih.gov/16166544/" type="study" />
        <StudyCard title="OSA causes gray matter loss in basal ganglia" description="OSA patients show significant gray matter volume reductions in basal ganglia correlating with hypoxemia severity." url="https://pmc.ncbi.nlm.nih.gov/articles/PMC2491498/" type="study" />
        <StudyCard title="OSA intermittent hypoxia causes selective neuronal injury" description="Intermittent hypoxia causes dose-dependent neuronal apoptosis in vulnerable brain regions." url="https://pubmed.ncbi.nlm.nih.gov/12629157/" type="study" />
        <StudyCard title="Near-drowning: selective basal ganglia injury from asphyxiation" description="Basal ganglia injured even when cortical damage was minimal — directly relevant to suffocation in severe OSA." url="https://pubmed.ncbi.nlm.nih.gov/15041843/" type="study" />

        <p className="font-bold mb-1 mt-3">Non-Invasive Methods to Differentiate Tumor vs. Hypoxic Injury:</p>
        <ul className="space-y-1 mb-3">
          <li>• <strong>MR Spectroscopy</strong> — tumor shows elevated choline/NAA; gliosis shows different metabolic profile (<a href="https://pubmed.ncbi.nlm.nih.gov/16159035/" target="_blank" rel="noopener noreferrer" className="underline text-primary-600">PMID: 16159035</a>)</li>
          <li>• <strong>Perfusion MRI</strong> — tumor shows elevated blood volume; gliosis shows normal/reduced (<a href="https://pubmed.ncbi.nlm.nih.gov/15956506/" target="_blank" rel="noopener noreferrer" className="underline text-primary-600">PMID: 15956506</a>)</li>
          <li>• <strong>FET-PET</strong> — amino acid uptake high in tumor, low in non-neoplastic tissue — most accurate non-invasive differentiator</li>
          <li>• <strong>Serial MRI</strong> — if lesion shrinks with CPAP alone (no anti-tumor drugs), strongly suggests hypoxic origin</li>
        </ul>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
          <p className="text-[11px] text-emerald-800"><strong>Bottom line:</strong> The safest approach is to treat both possibilities simultaneously — CPAP for the hypoxia hypothesis, anti-tumor protocol for the tumor hypothesis, and advanced non-invasive imaging to clarify. CPAP is indicated regardless.</p>
        </div>
      </Collapsible>

      <Divider />

      <InfoBox variant="warning" title="Important Caveats">
        <ul className="space-y-1 mt-1">
          <li>• These are <strong>observational associations</strong>, not definitive proof of causation</li>
          <li>• Confounders like obesity (common in OSA) could partly explain the association</li>
          <li>• Mom's tumor type has not been tissue-confirmed — imaging suggests high-grade glioma</li>
          <li>• The adrenal nodule and liver lesions need separate workup unrelated to OSA</li>
          <li>• CPAP treatment data for cancer reduction is still emerging</li>
          <li>• This is not medical advice — discuss with her neurology and pulmonology teams</li>
        </ul>
      </InfoBox>

      <div className="text-center text-[10px] text-gray-400 mt-4">
        30+ studies compiled from PubMed, PubMed Central, peer-reviewed journals, and meta-analyses
      </div>
    </section>
  );
}
