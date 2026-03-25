import React, { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, ChevronDown, ChevronUp, AlertTriangle, Brain, FlaskConical, ImageIcon } from 'lucide-react';

function Ref({ n }) {
  return <sup className="text-blue-700 font-medium cursor-pointer hover:underline"><a href="#hypo-refs">[{n}]</a></sup>;
}

function Expandable({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors">
        <span className="text-sm font-semibold text-gray-800">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
      </button>
      {open && <div className="px-4 pb-4 border-t border-gray-100">{children}</div>}
    </div>
  );
}

const REFS = [
  { n: 1, pmid: '17356196', t: 'Sgouros S. Cerebral correlates of hyponatremia. Curr Neurol Neurosci Rep. 2007.' },
  { n: 2, pmid: '19523569', t: 'Bhardwaj A. The brain in hyponatremia: both culprit and victim. Kidney Int. 2009.' },
  { n: 3, pmid: '7976557', t: 'Bhardwaj A et al. Severe brain edema associated with cumulative effects of hyponatremic encephalopathy. Neurology. 1995.' },
  { n: 4, pmid: '12747989', t: 'Rabinstein AA. Osmotic cerebral oedema: role of plasma osmolarity and BBB. Rev Neurol. 2003.' },
  { n: 5, pmid: '40603486', t: 'Bhowmik M et al. Effect of experimental hypoosmolar hyponatremia on the BBB. J Neurochem. 2024.' },
  { n: 6, pmid: '38184092', t: 'Rondon-Berrios H et al. Chronic hyponatremia and brain structure/function before and after treatment. JASN. 2024.' },
  { n: 7, pmid: '34136577', t: 'Singh TD et al. Osmotic demyelination syndrome: clinical, neuroimaging characteristics, outcomes. Neurology. 2021.' },
  { n: 8, pmid: '16604970', t: 'Ruzek KA et al. Diffusion MRI may provide prognostic information in ODS. J Neurol. 2006.' },
  { n: 9, pmid: '25628321', t: 'Bose P et al. Psychogenic polydipsia, hyponatremia, and osmotic myelinolysis. J Clin Neurosci. 2015.' },
  { n: 10, pmid: '26512354', t: 'Kim DK et al. Hypotonic hyponatremia by primary polydipsia caused brain death. Electrolyte Blood Press. 2015.' },
  { n: 11, pmid: '23569492', t: 'Quinn CJ et al. Acute correction of hyponatremia secondary to psychogenic polydipsia. Am J Case Rep. 2013.' },
  { n: 12, pmid: '38021912', t: 'Ahmed HM et al. Treatment of psychogenic polydipsia and hyponatremia: case report. Cureus. 2023.' },
  { n: 13, pmid: '9083241', t: 'Sjøblom E et al. Fatal hyponatraemic brain oedema due to accidental water intoxication. Intensive Care Med. 1997.' },
  { n: 14, pmid: '29734497', t: 'Abbasi AW et al. Pseudoprogression of brain tumors — definition, incidence, MRI findings. JCPSP. 2018.' },
  { n: 15, pmid: '29372493', t: 'Ramos-Fresnedo A et al. Predictive potential of hyponatremia for glioblastoma survival. J Neurooncol. 2018.' },
  { n: 16, pmid: '11061270', t: 'Uchino A et al. Cortical MRI findings associated with rapid correction of hyponatremia. Neuroradiology. 2000.' },
  { n: 17, pmid: '2301929', t: 'Brunner JE et al. Central pontine myelinolysis after rapid correction of hyponatremia. Ann Neurol. 1990.' },
  { n: 18, pmid: '9879700', t: 'Mochizuki H et al. Serial MRI of extrapontine myelinolysis of the basal ganglia. Eur Neurol. 1998.' },
  { n: 19, pmid: '11512412', t: 'Ruzek KA et al. MR imaging of seven presumed cases of CPM and EPM. AJNR. 2001.' },
  { n: 20, pmid: '34289379', t: 'Karan M et al. Effects of CBD on BBB permeability after TBI in rats. J Pharmacol Exp Ther. 2021.' },
  { n: 21, pmid: '26497782', t: 'Hind WH et al. CBD protects in vitro BBB model via PPARγ and 5-HT1A receptors. Br J Pharmacol. 2016.' },
  { n: 22, pmid: '32183416', t: 'Calapai F et al. Cannabinoids, blood-brain barrier, and brain disposition. Pharmaceutics. 2020.' },
  { n: 23, pmid: '35298887', t: 'Ghovanloo MR et al. Differential interaction of CBD with biomembranes dependent on cholesterol. ACS Chem Neurosci. 2022.' },
  { n: 24, pmid: '2173751', t: 'Thomas BF et al. Characterization of lipophilicity of natural and synthetic cannabinoids. J Pharmacol Exp Ther. 1990.' },
  { n: 25, pmid: '35088218', t: 'Filippidis AS et al. Aquaporin 4 in TBI: molecular pathways to therapeutic targets. Cells. 2022.' },
  { n: 26, pmid: '26039099', t: 'Lopez-Rodriguez AB et al. Changes in cannabinoid receptors, AQP4 after TBI. J Neurotrauma. 2015.' },
  { n: 27, pmid: '38301326', t: 'Pang R et al. CBD reduces intraventricular hemorrhage brain damage. Pediatr Res. 2024.' },
  { n: 28, pmid: '16400709', t: 'Mishima K et al. CBD prevents cerebral infarction via 5-HT1A mechanism. J Cereb Blood Flow Metab. 2006.' },
  { n: 29, pmid: '25894594', t: 'Young RJ et al. Characterization of pseudoprogression in GBM: systematic review. J Neurooncol. 2015.' },
  { n: 30, pmid: '20356447', t: 'Taya K et al. Aquaporin-4 and traumatic brain edema. Transl Stroke Res. 2010.' },
  { n: 31, pmid: '24819918', t: 'Fujii M et al. CB2 receptor stimulation attenuates brain edema. J Cereb Blood Flow Metab. 2014.' },
  { n: 33, pmid: '19425170', t: 'Salazar M et al. Cannabinoid action induces autophagy-mediated cell death in glioma. J Clin Invest. 2009.' },
  { n: 34, pmid: '7458496', t: 'Goldman MB et al. Hyponatremia in psychogenic polydipsia. Kidney Int. 1988.' },
  { n: 35, pmid: '34909286', t: 'Li YC et al. Temporal brain MRI changes from EPM to CPM. Am J Med Sci. 2022.' },
  { n: 36, pmid: '25688318', t: 'Gill M et al. Psychogenic polydipsia: result or cause of deteriorating psychotic symptoms? J Psychiatr Pract. 2015.' },
  { n: 37, pmid: '12650429', t: 'Sun MC et al. Regulation of AQP4 in a TBI model in rats. J Neurosurg. 2003.' },
  { n: 38, pmid: '19261924', t: 'Malhotra HS et al. Distinguishing tumefactive demyelinating lesions from glioma or CNS lymphoma with imaging. Radiology. 2009.' },
  { n: 39, pmid: '41732543', t: 'A misdiagnosed case of tumefactive demyelinating lesion mimicking glioma. Case report. 2024.' },
  { n: 40, pmid: '33804243', t: 'Feliú A et al. Cannabidiol and Other Cannabinoids in Demyelinating Diseases. Int J Mol Sci. 2021.' },
  { n: 41, pmid: '35327341', t: 'Maresz K et al. Neurological Benefits, Clinical Challenges, and Neuropathologic Promise of Cannabinoids in Demyelinating Disease. Biomedicines. 2022.' },
  { n: 42, pmid: '38553903', t: 'Xu Y et al. Cannabidiol alleviates neurological deficits after TBI by improving intracranial lymphatic drainage. CNS Neurosci Ther. 2024.' },
  { n: 44, pmid: '28704229', t: 'Ayus JC, Achinger SG. Treatment of Hyponatremic Encephalopathy in the Critically Ill. Crit Care Med. 2017.' },
  { n: 45, pmid: '17521521', t: 'Dundas B, Harris M, Narasimhan M. Psychogenic polydipsia review: etiology, differential, and treatment. Curr Psychiatry Rep. 2007.' },
  { n: 46, pmid: '30115676', t: 'Suh CH et al. MRI Findings in Tumefactive Demyelinating Lesions: A Systematic Review and Meta-Analysis. AJNR Am J Neuroradiol. 2018.' },
  { n: 47, pmid: '15597757', t: 'Pallud J et al. Stereotactic biopsy guidance in adults with supratentorial nonenhancing gliomas: role of perfusion-weighted magnetic resonance imaging. J Neurosurg. 2005.' },
  { n: 48, pmid: '12862395', t: 'Decaux G, Soupart A, Vassart G. Hyponatremic encephalopathy--some experimental and clinical findings. J Lab Clin Med. 2003.' },
  { n: 49, pmid: '18448591', t: 'Ayus JC, Arieff AI. Brain cell volume regulation in hyponatremia: role of sex, age, vasopressin, and hypoxia. Am J Physiol Renal Physiol. 2008.' },
  { n: 50, pmid: '2030827', t: 'Müller PJ et al. Accuracy of stereotactic brain tumor biopsy: comparison of the histologic findings in biopsy cylinders and resected tumor tissue. J Neurosurg. 1991.' },
  { n: 51, pmid: '29241178', t: 'Karschnia P et al. Role of Biopsies in the Management of Intracranial Gliomas. Curr Treat Options Neurol. 2018.' },
  { n: 52, pmid: '14735305', t: 'Noell S et al. Redistribution of aquaporin-4 in human glioblastoma correlates with loss of agrin immunoreactivity from brain capillary basal laminae. Acta Neuropathol. 2004.' },
  { n: 53, pmid: '20685122', t: 'Ding T et al. Aquaporin-4 in glioma invasion and an analysis of molecular mechanisms. J Clin Neurosci. 2010.' },
  { n: 56, pmid: '16614718', t: 'Ayus JC. Symptomatic hyponatremia with hypoxia is a medical emergency. Kidney Int. 2006.' },
  { n: 57, pmid: '7842787', t: 'Ayus JC et al. Pulmonary complications of hyponatremic encephalopathy. Noncardiogenic pulmonary edema and hypercapnic respiratory failure. Chest. 1995.' },
  { n: 58, pmid: '10787364', t: 'Ayus JC et al. Hyponatremia, cerebral edema, and noncardiogenic pulmonary edema in marathon runners. Ann Intern Med. 2000.' },
  { n: 59, pmid: '8282795', t: 'Ayus JC et al. Hypoxic and ischemic hypoxia exacerbate brain injury associated with metabolic encephalopathy in laboratory animals. J Clin Invest. 1994.' },
  { n: 60, pmid: '17506243', t: 'Widdess-Walsh P et al. Neurologic effects of hyponatremia and its treatment. Cleve Clin J Med. 2007.' },
];

const momMri1 = new URL('../../hyponatremia/mom_mri1.jpg', import.meta.url).href;
const momMri2 = new URL('../../hyponatremia/mom_mri2.jpg', import.meta.url).href;
const momMri3 = new URL('../../hyponatremia/mom_mri3.jpg', import.meta.url).href;
const diffuseHyponatremiaImg = new URL('../../hyponatremia/diffusive_hyponatremia.jpg', import.meta.url).href;
const focalHyponatremiaClosestImg = new URL('../../hyponatremia/hyponatremia image just like moms.jpg', import.meta.url).href;
const focalHyponatremiaImg = new URL('../../hyponatremia/hyponatremia image.jpg', import.meta.url).href;
const malignantEdemaHyponatremiaImg = new URL('../../hyponatremia/another hyponatremia image.jpg', import.meta.url).href;
const focalCtHyponatremiaImg = new URL('../../hyponatremia/another hyponatremia image2.jpg', import.meta.url).href;
const ccjmCtBaselineImg = new URL('../../hyponatremia/ccjm_hyponatremia_ct_baseline.jpg', import.meta.url).href;
const ccjmCtEdemaImg = new URL('../../hyponatremia/ccjm_hyponatremia_ct_edema.jpg', import.meta.url).href;
const ccjmCtResolvedImg = new URL('../../hyponatremia/ccjm_hyponatremia_ct_resolved.jpg', import.meta.url).href;
const tdlMimicImg1 = new URL('../../hyponatremia/atypical tumefactive demyelinating glioma mimic.jpg', import.meta.url).href;
const tdlMimicImg2 = new URL('../../hyponatremia/Demyelination Ring enhancement.jpg', import.meta.url).href;
const tdlMimicImg3 = new URL('../../hyponatremia/Demyelination Ring enhancement 2.jpg', import.meta.url).href;
const tdlMimicImg4 = new URL('../../hyponatremia/Inflammatory Demyelinating Disease Mimicking Glioma.jpg', import.meta.url).href;
const tdlMimicImg5 = new URL('../../hyponatremia/Tumefactive Demyelinating Lesion Mimicking Glioma.jpg', import.meta.url).href;
const tdlMimicImg6 = new URL('../../hyponatremia/tumefactive demyelinating lesion mimicking glioma.png', import.meta.url).href;

export default function HyponatremiaHypothesis() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (<div className="min-h-screen bg-white">
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="./" onClick={e => { e.preventDefault(); window.location.hash = ''; window.location.reload(); }} className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1.5"><ArrowLeft className="w-3.5 h-3.5" /> Main Site</a>
        <span className="text-xs text-gray-400 font-mono">Novel Case Hypothesis</span>
      </div>
    </header>
    <main className="max-w-3xl mx-auto px-6 py-10">
      <TitleBlock />
      <HonestyBanner />
      <Abstract />
      <CasePresentation />
      <CoreHypothesis />
      <Pathophysiology />
      <LiteratureEvidence />
      <MRIComparison />
      <DemyelinatingMimics />
      <CannabinoidSection />
      <LipophilicityHypothesis />
      <VerificationStrategy />
      <Discussion />
      <Conclusion />
      <References />
      <PageFooter />
    </main>
  </div>);
}

/* ═══ TITLE ═══ */
 function TitleBlock() {
  return (
    <div className="border-b-2 border-gray-900 pb-8 mb-10">
      <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">A Hypothesis of Hypotheses &middot; An Investigation Into How To Get Mom Better</p>
      <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight mb-4">
        Hypothetical Osmotic Demyelination Syndrome and Focal Blood–Brain Barrier Disruption Secondary to Chronic Hyponatremia from Long-Term Polydipsia, Mimicking Glioma
      </h1>
      <p className="text-lg font-serif text-gray-600 leading-relaxed mb-4">
        A case hypothesis integrating clinical chronology, ambiguous biopsy findings, and established literature on hyponatremic encephalopathy, BBB disruption, osmotic demyelination, brain-lung complications, and cannabinoid neurobiology — asking whether a 20-year water-chugging ritual produced a focal osmotic injury syndrome that now mimics glioma.
      </p>
      <p className="text-xs text-gray-400 font-mono">
        Draft: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} &middot; Author: Josh Trembath (citizen scientist) &middot; Contact: jptrembath@gmail.com
      </p>
    </div>
  );
}

/* ═══ HONESTY BANNER ═══ */
function HonestyBanner() {
  return (
    <div className="border-2 border-amber-300 bg-amber-50 rounded-lg p-5 mb-10">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm font-bold text-amber-900 mb-2">A Note on Intellectual Honesty</p>
          <p className="text-sm text-amber-800 leading-relaxed mb-2">
            This hypothesis was prepared by a family member, not a clinician. It should be read as a structured, testable differential rather than a diagnosis. Focal osmotic injury convincingly mimicking glioma is <strong>extremely rare</strong>, so uncertainty remains high. The leading possibilities are: chronic hyponatremia as the primary driver; chronic hyponatremia causing focal BBB disruption and secondary myelin injury; or a true tumor being present with hyponatremia materially amplifying edema and enhancement.
          </p>
          <p className="text-sm text-amber-800 leading-relaxed">
            Every major claim below is linked to a PubMed source. The most practical discriminator is repeat MRI after sustained fluid control, clinically guided sodium normalization, and time for recovery. If the lesion complex does not regress, the hyponatremia-led explanation weakens substantially and conventional neuro-oncologic management should proceed without delay. A major caveat, however, is that all three prior MRIs may have been obtained while she was still hyponatremic, which could have distorted the baseline picture.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══ 1. ABSTRACT ═══ */
 function Abstract() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">1. Abstract</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        We present the case of a 64-year-old woman (170 lb / 77 kg) with an estimated <strong>20-year history of extreme, stereotyped water loading</strong> — commonly 2-3 quarts before bed and another 2-3 quarts on waking, sometimes exceeding 1.5 gallons per day. Witnesses describe the intake as rapid and strikingly excessive rather than casual sipping. Following her last major episode, she developed seizures, ICU-level encephalopathy, profound cognitive disorientation, lungs reportedly filled with fluid, and severe hypoxemia with oxygen saturation around 74%.<Ref n={45} /><Ref n={56} /><Ref n={57} /><Ref n={58} />
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Neuroimaging showed one dominant lesion plus a secondary ~10–11 mm enhancing nodule interpreted as possible progression. Tissue sampling remains ambiguous rather than definitive, while laboratory evaluation reportedly showed preserved renal function and no SIADH.<Ref n={14} /><Ref n={29} />
      </p>
      <p className="text-sm text-gray-700 leading-relaxed">
        The central hypothesis is that chronic recurrent hyponatremia from primary polydipsia may be driving both the acute brain-lung crisis and part of the later lesion appearance through focal osmotic injury, BBB disruption, secondary myelin injury, or a hybrid interaction with a real underlying tumor. Within that framework, the smaller enhancing nodule may represent a reversible hyponatremia-associated component rather than fixed neoplastic progression. A published glioblastoma case of reversible hyponatremic encephalopathy mimicking pseudoprogression makes that possibility especially important here.<Ref n={15} /> Improvement after sustained fluid control, clinician-guided sodium normalization, and follow-up imaging would strengthen this interpretation, though not prove it in isolation.<Ref n={44} />
      </p>
    </section>
  );
 }

/* ═══ 2. CASE PRESENTATION ═══ */
 function CasePresentation() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">2. Detailed Case Presentation</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        A 64-year-old woman presented emergently after witnessed seizures. Family history revealed an approximately <strong>20-year ritual of extreme water intake</strong> — commonly 2-3 quarts before bedtime and again on waking, consumed rapidly as a perceived cleansing practice. Multiple witnesses independently described the behavior as extraordinary in both volume and speed. The key point for this article is behavioral and physiologic rather than psychiatric: she appears to have sincerely believed that drinking large amounts of water was health-promoting, yet the resulting intake pattern still fits the clinical literature on primary polydipsia and water-intoxication risk.<Ref n={45} />
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        On admission she exhibited profound altered mental status progressing to a near-vegetative presentation with failure of orientation testing. She was also reportedly found with dangerously low oxygen saturation, around 74%, and with fluid in the lungs. In the severe hyponatremia literature, that brain-plus-lung combination is important because symptomatic hyponatremia can be accompanied by hypoxemia and noncardiogenic pulmonary edema rather than only isolated brain findings.<Ref n={56} /><Ref n={57} /><Ref n={58} /> Brain imaging demonstrated one primary lesion and a secondary ~11 mm focus interpreted as tumor progression.<Ref n={14} /><Ref n={15} /><Ref n={29} />
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Tissue sampling remains under evaluation, and the biopsy picture is treated here as ambiguous rather than final. Comprehensive metabolic evaluation reportedly ruled out SIADH and showed intact renal function. She was managed with osmotic IV agents for presumed cerebral edema. Her weight (170 lb) and the absence of obvious alternative metabolic explanations make chronic water intoxication a serious explanatory candidate rather than a trivial side note. The low oxygen finding and lung-fluid report do not by themselves prove hyponatremia, but they do fit a syndrome already described in hyponatremic encephalopathy literature.<Ref n={56} /><Ref n={57} /><Ref n={58} />
      </p>
    </section>
  );
 }

/* ═══ 3. CORE HYPOTHESIS ═══ */
 function CoreHypothesis() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">3. The Core Hypothesis</h2>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
        <p className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-2"><Brain className="w-4 h-4" /> Central Claim</p>
        <p className="text-sm text-blue-800 leading-relaxed">
          The central proposal is that <strong>chronic recurrent hyponatremia is the main destabilizing force in this case</strong>. It could explain both the acute collapse and the later imaging puzzle through focal osmotic injury, focal BBB disruption with recurrent localized edema, secondary myelin injury, or a hybrid scenario in which a true tumor exists but hyponatremia materially worsens the imaging appearance. Twenty years of extreme polydipsia provides a biologically plausible engine for repeated acute-on-chronic osmotic stress across the BBB and, in severe episodes, the lungs as well.
        </p>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">3.1 Hypothesis of Hypotheses</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        This article is best read as a <strong>structured differential hypothesis</strong>, not a single rigid conclusion. The leading idea is that hyponatremia is doing major causal work across the case, but several downstream interpretations remain possible:
      </p>
      <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2 mb-3">
        <li><strong>Pure osmotic / BBB mechanism:</strong> repeated water intoxication caused focal BBB failure and mass-like edema.</li>
        <li><strong>Osmotic injury with secondary demyelination:</strong> large or repeated osmotic gradients produced focal myelin damage that can mimic tumor.</li>
        <li><strong>Hybrid model:</strong> an underlying tumor exists, but hyponatremia and BBB weakness are materially exaggerating edema, enhancement, and transient satellite lesions.</li>
      </ul>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        The article therefore does <strong>not</strong> claim certainty that no tumor exists. It argues that chronic extreme hyponatremia deserves serious attention as a biologically coherent explanation for at least part of what is being seen.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">3.2 Why Focal Rather Than Diffuse?</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        A common objection is that hyponatremia usually causes <strong>diffuse</strong> cerebral edema. That is generally true in acute cases.<Ref n={1} /><Ref n={2} /> The counterargument here is not that diffuse edema is unimportant, but that repeated injury may eventually localize to a vulnerable zone:
      </p>
      <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2 mb-3">
        <li><strong>BBB heterogeneity:</strong> the barrier is not uniformly robust, and once a focal weak point develops it may become the path of least resistance for later water influx.<Ref n={4} /><Ref n={5} /></li>
        <li><strong>The weak-point phenomenon:</strong> repeated osmotic insults over years could create a self-perpetuating vulnerable zone that swells preferentially during each water-loading episode.<Ref n={3} /><Ref n={7} /></li>
        <li><strong>AQP4 dysregulation:</strong> regional aquaporin changes could turn one area into a local water sink during hypo-osmolar states.<Ref n={25} /><Ref n={30} /></li>
        <li><strong>Precedent in ODS:</strong> osmotic demyelination can present as focal mass-like lesions that mimic tumors on MRI.<Ref n={7} /><Ref n={18} /><Ref n={19} /></li>
      </ul>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">3.3 The Transient Lesion: Pseudoprogression Explained</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        The ~10–11 mm enhancing nodule is one of the strongest imaging clues supporting a reversible component. A disappearing secondary focus is generally more compatible with fluctuating edema, treatment effect, or pseudoprogression than with straightforward uninterrupted tumor expansion.<Ref n={14} /><Ref n={29} /> Published literature also documents a glioblastoma patient in whom acute hyponatremia produced encephalopathy and radiographic worsening that mimicked pseudoprogression, then improved after sodium correction alone.<Ref n={15} />
      </p>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">3.4 The Alternative: A Hidden Tumor</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        If biopsy remains ambiguous, a true glioma may still exist within this region and simply have been missed by the needle biopsy. Stereotactic biopsies sample only a small tissue cylinder, and heterogeneous lesions are inherently vulnerable to sampling error; even modern review literature notes lower diagnostic yield in small or heterogeneous lesions.<Ref n={47} /><Ref n={50} /><Ref n={51} /> If a glioma exists, its abnormal vasculature could itself create focal BBB weakness, meaning hyponatremia-related fluctuation might be <strong>superimposed on a real tumor</strong> rather than replacing it as an explanation.<Ref n={15} />
      </p>
      <p className="text-sm text-gray-700 leading-relaxed">
        Differentiation therefore depends on the verification strategy in Section 10: sustained fluid control, clinician-guided sodium normalization, supportive recovery, and repeat MRI. If the lesion complex regresses without antineoplastic treatment, the hyponatremia-led explanation gains support. If the core persists but fluctuating components resolve, the hybrid scenario becomes more plausible.
      </p>
    </section>
  );
}

/* ═══ 4. PATHOPHYSIOLOGY ═══ */
function Pathophysiology() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">4. Pathophysiological Mechanisms</h2>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">4.1 Chronic Polydipsia → Dilutional Hyponatremia</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        The kidneys can excrete only a limited amount of free water per hour. Intake that repeatedly exceeds that capacity can produce dilutional hyponatremia even in the absence of renal failure or SIADH.<Ref n={11} /><Ref n={34} /><Ref n={45} /> This patient’s repeated rapid intake of multi-quart volumes is well within the range capable of overwhelming normal excretory capacity.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">4.2 Osmotic Stress → BBB Disruption → Focal Edema</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        When plasma sodium falls, water moves into brain tissue by osmosis, initially causing diffuse swelling. Brain adaptation can partially blunt that process, but when adaptation fails, astrocytic swelling, cerebral hypoxia, and structural injury follow. With repeated acute-on-chronic insults, vulnerable regions may lose barrier integrity and begin to accumulate disproportionate local edema.<Ref n={1} /><Ref n={2} /><Ref n={4} /><Ref n={5} /><Ref n={44} /><Ref n={48} /><Ref n={49} /><Ref n={59} />
      </p>
      <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2 mb-3">
        <li><strong>BBB tight-junction disruption:</strong> endothelial barrier proteins may degrade, converting a purely osmotic problem into a focal vasogenic one.</li>
        <li><strong>AQP4 dysregulation:</strong> abnormal aquaporin expression may make one area accumulate water more readily than another. Review literature on hyponatremia emphasizes early astrocytic water influx through AQP4, while brain-injury studies show injury-linked changes in AQP4 expression and polarity.<Ref n={25} /><Ref n={37} /><Ref n={49} /></li>
        <li><strong>Myelin injury:</strong> osmotic stress can damage myelin directly, creating a plausible bridge between hyponatremia and demyelinating-looking imaging patterns.<Ref n={7} /><Ref n={8} /></li>
        <li><strong>Hypoxia amplification:</strong> experimental and clinical literature suggests that hypoxia can worsen hyponatremic brain injury by impairing adaptive responses, while hyponatremic encephalopathy can itself be accompanied by hypoxemia through noncardiogenic pulmonary edema or hypercapnic respiratory failure.<Ref n={49} /><Ref n={56} /><Ref n={57} /><Ref n={58} /><Ref n={59} /></li>
      </ul>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">4.3 The Brain-Lung Link</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Severe symptomatic hyponatremia does not only threaten the brain. Once cerebral edema develops, increased intracranial pressure and neurogenic stress responses can be accompanied by <strong>noncardiogenic pulmonary edema</strong>, meaning fluid leaks into the lungs without primary heart failure. In other patients, hypoxemia may reflect hypercapnic respiratory failure from depressed ventilation during encephalopathy.<Ref n={56} /><Ref n={57} /><Ref n={58} /> This matters in the present case because a report that her lungs were full of fluid, together with oxygen saturation near 74%, fits a pattern already described in severe hyponatremic encephalopathy.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        This is also one reason such cases may initially look like pneumonia. On imaging and in the ICU, noncardiogenic pulmonary edema can present with bilateral infiltrates and respiratory distress, creating overlap with infectious or aspiration-based explanations. The discriminator is the overall syndrome: severe hypo-osmolar state, encephalopathy, edema, normal cardiac context, and improvement as sodium and brain swelling are corrected rather than a purely antibiotic-driven response.<Ref n={57} /><Ref n={58} />
      </p>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">4.4 The Self-Perpetuating Cycle</h3>
      <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-3 text-sm text-gray-700 leading-relaxed">
        <p className="font-mono text-xs text-center">
          Water chugging → ↓ serum Na⁺ → osmotic gradient → water enters vulnerable BBB zone<br />
          → cerebral edema / seizures / impaired adaptation ± lung fluid / hypoxemia<br />
          → further barrier disruption and physiologic stress → larger vulnerable region<br />
          → next episode drives more fluid inward → lesion appearance persists or fluctuates
        </p>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">
        Over years, this cycle could create a lesion complex that looks mass-like on imaging even without straightforward uninterrupted neoplastic growth.
      </p>
    </section>
  );
}

/* ═══ 5. LITERATURE EVIDENCE ═══ */
function LiteratureEvidence() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">5. Supporting Evidence from Peer-Reviewed Literature</h2>

      <Expandable title="5.1 Hyponatremia Producing Tumor-Mimicking Brain Lesions" defaultOpen={true}>
        <div className="overflow-x-auto mb-3 mt-3">
          <table className="w-full text-sm border border-gray-300">
            <thead><tr className="bg-gray-100 border-b border-gray-300">
              <th className="p-2.5 text-left font-semibold text-gray-700">Finding</th>
              <th className="p-2.5 text-left font-semibold text-gray-700">Evidence</th>
              <th className="p-2.5 text-left font-semibold text-gray-700">Ref</th>
            </tr></thead>
            <tbody className="text-gray-700 text-xs">
              <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Reversible diffuse cerebral edema</td><td className="p-2.5">Chronic hyponatremia causes measurable brain swelling on MRI that can resolve with correction.</td><td className="p-2.5"><Ref n={6} /></td></tr>
              <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Cortical enhancement mimicking tumor</td><td className="p-2.5">Rapid correction of hyponatremia produced gadolinium-enhancing abnormalities resembling tumor progression that later resolved.</td><td className="p-2.5"><Ref n={16} /></td></tr>
              <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Hyponatremia as pseudoprogression trigger</td><td className="p-2.5">A published glioblastoma case showed that acute hyponatremia produced clinical decline plus radiographic worsening mimicking pseudoprogression, and both encephalopathy and brain edema regressed after sodium correction. This is one of the most important precedents for the present hypothesis.</td><td className="p-2.5"><Ref n={15} /></td></tr>
              <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Localized edema appearing at one vulnerable site</td><td className="p-2.5">In a Cleveland Clinic case report, a patient developed new focal cerebral edema and mass effect in the region of a prior hematoma when serum sodium fell to 121 mmol/L, without recurrent hemorrhage; after correction of the hyponatremia, the edema resolved. That sequence is important because it shows a sodium-driven lesion can become localized and later reverse on imaging.<Ref n={60} /></td><td className="p-2.5"><Ref n={60} /></td></tr>
              <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Severe edema from polydipsia</td><td className="p-2.5">Primary polydipsia with normal kidneys can cause life-threatening cerebral edema.</td><td className="p-2.5"><Ref n={10} /></td></tr>
              <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Cumulative osmotic brain injury</td><td className="p-2.5">Repeated hyponatremic episodes can produce progressive brain edema with cumulative effects.</td><td className="p-2.5"><Ref n={3} /></td></tr>
              <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Hyponatremic encephalopathy is established cerebral edema</td><td className="p-2.5">Critical care literature explicitly frames symptomatic hyponatremia as cerebral edema from a hypo-osmolar state and emphasizes careful correction.</td><td className="p-2.5"><Ref n={44} /><Ref n={48} /></td></tr>
              <tr><td className="p-2.5 font-semibold">AQP4-mediated astrocyte swelling is part of the injury logic</td><td className="p-2.5">Review literature describes early hyponatremic brain swelling as water influx largely through glial cells via AQP4, helping connect low sodium to astrocytic edema biology.</td><td className="p-2.5"><Ref n={49} /></td></tr>
            </tbody>
          </table>
        </div>
      </Expandable>

      <Expandable title="5.2 Osmotic Demyelination Syndrome Mimicking Glioma">
        <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2 mb-3 mt-3">
          <li><strong>Mass-like pontine lesions</strong> from CPM have been misdiagnosed as brainstem gliomas on initial imaging.<Ref n={19} /></li>
          <li><strong>Extrapontine lesions</strong> can produce focal MRI abnormalities that evolve over time and may partially resolve.<Ref n={18} /><Ref n={35} /></li>
          <li>Some cases responded to <strong>supportive or immune-modulating therapy</strong>, confirming non-neoplastic etiology.<Ref n={7} /></li>
        </ul>
      </Expandable>

      <Expandable title="5.3 Polydipsia-Induced Hyponatremia: The Clinical Spectrum">
        <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2 mb-3 mt-3">
          <li><strong>Seizures and coma:</strong> acute symptomatic hyponatremia from polydipsia routinely causes seizures and coma.<Ref n={10} /><Ref n={13} /></li>
          <li><strong>Osmotic myelinolysis from polydipsia:</strong> severe polydipsia and water intoxication have been linked directly to osmotic myelinolysis with MRI changes.<Ref n={9} /></li>
          <li><strong>Reversibility:</strong> in survivors, water restriction alone may normalize imaging and neurologic function within days to weeks.<Ref n={11} /><Ref n={12} /></li>
          <li><strong>Review-level support:</strong> review literature on severe polydipsia describes progression from confusion and lethargy to seizures and death when water intoxication produces hyponatremia.<Ref n={45} /></li>
          <li><strong>Respiratory complications:</strong> symptomatic hyponatremia can coexist with severe hypoxemia, and case series describe hypoxia arising from noncardiogenic pulmonary edema or hypercapnic respiratory failure during hyponatremic encephalopathy; these findings can even resemble pneumonia early in the course.<Ref n={56} /><Ref n={57} /><Ref n={58} /></li>
        </ul>
      </Expandable>

      <Expandable title="5.4 The BBB Under Osmotic Assault — Molecular Details">
        <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2 mb-3 mt-3">
          <li><strong>Tight-junction degradation:</strong> experimental hyponatremia can disrupt occludin and claudin-5 at the BBB.<Ref n={4} /><Ref n={5} /></li>
          <li><strong>AQP4 dysregulation:</strong> AQP4 can become upregulated and mislocalized at injury sites, worsening water handling.<Ref n={25} /><Ref n={37} /></li>
          <li><strong>Astrocytic failure:</strong> chronic hypotonic stress can overwhelm local regulatory volume control.<Ref n={2} /><Ref n={30} /></li>
          <li><strong>Clinical framing:</strong> hyponatremic encephalopathy is clinically understood as symptomatic cerebral edema caused by a low osmolar state, reinforcing the central edema-first logic of this hypothesis.<Ref n={44} /></li>
          <li><strong>Hypoxia worsens adaptation:</strong> review and experimental literature indicate that hypoxia can interfere with the brain's adaptive response to hyponatremia, worsening edema and injury severity.<Ref n={49} /><Ref n={59} /></li>
        </ul>
      </Expandable>

    </section>
  );
}

/* ═══ 6. MRI COMPARISON ═══ */
function MRIComparison() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">6. Radiographic Comparison — Hyponatremia vs. This Patient</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        The figure set below is organized as an <strong>evidence ladder</strong>: diffuse hyponatremia first, then focal or mass-like osmotic examples, and only then comparison to this patient’s MRI.
      </p>
      <div className="border-2 border-blue-200 bg-blue-50 rounded-lg p-5 mb-6">
        <p className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-2"><ImageIcon className="w-4 h-4" /> MRI Comparison Gallery</p>
        <p className="text-sm text-blue-800 leading-relaxed mb-4">
          These images are qualitative visual comparators, not standardized radiology plates. The point is plausibility, not one-to-one diagnostic equivalence.
        </p>

        <div className="bg-white rounded border border-blue-200 p-4 mb-4">
          <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wide mb-3">Figure 6A — The Usual Pattern: Diffuse Hyponatremic Brain Swelling</h4>
          <img src={diffuseHyponatremiaImg} alt="Diffuse hyponatremia example showing global brain swelling" className="w-full rounded object-contain bg-white mb-3" />
          <p className="text-xs text-gray-600">Diffuse/global swelling is the common pattern when the BBB remains broadly intact.</p>
        </div>

        <div className="bg-white rounded border border-blue-200 p-4 mb-4">
          <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wide mb-3">Figure 6B — Literature Proof That Osmotic / Hyponatremic Injury Can Localize</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src={focalHyponatremiaClosestImg} alt="Closest focal hyponatremia comparator" className="w-full h-52 rounded border border-gray-200 object-cover object-center bg-white" />
            <img src={focalHyponatremiaImg} alt="Focal hyponatremia comparator" className="w-full h-52 rounded border border-gray-200 object-cover object-center bg-white" />
            <img src={focalCtHyponatremiaImg} alt="Focal CT hyponatremia comparator" className="w-full h-52 rounded border border-gray-200 object-cover object-center bg-white" />
          </div>
          <p className="text-xs text-gray-600 mt-3">These examples show that hyponatremic or osmotic injury can sometimes become focal rather than remaining globally diffuse.</p>
        </div>

        <div className="bg-white rounded border border-blue-200 p-4 mb-4">
          <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wide mb-3">Figure 6C — Focal Hyponatremia / Localized Edema in One Region</h4>
          <img src={malignantEdemaHyponatremiaImg} alt="Localized hyponatremia-related edema focused in one brain region" className="w-full max-h-[28rem] rounded border border-gray-200 object-contain bg-white mb-3" />
          <p className="text-xs text-gray-600">This image reinforces the same point: hyponatremia-associated edema can localize to one region.</p>
        </div>

        <div className="bg-white rounded border border-blue-200 p-4 mb-4">
          <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wide mb-3">Figure 6D — Cleveland Clinic Hyponatremia Case: Baseline, Focal Edema, Then Resolution</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <img src={ccjmCtBaselineImg} alt="Cleveland Clinic hyponatremia case baseline CT showing original hematoma" className="w-full h-52 rounded border border-gray-200 object-cover object-center bg-white mb-2" />
              <p className="text-xs text-gray-600">Admission CT: right frontotemporal capsular hematoma.</p>
            </div>
            <div>
              <img src={ccjmCtEdemaImg} alt="Cleveland Clinic hyponatremia case follow-up CT showing new focal edema and mass effect" className="w-full h-52 rounded border border-gray-200 object-cover object-center bg-white mb-2" />
              <p className="text-xs text-gray-600">21 days later: new focal cerebral edema and mass effect in the same region, with no recurrent hemorrhage.</p>
            </div>
            <div>
              <img src={ccjmCtResolvedImg} alt="Cleveland Clinic hyponatremia case follow-up CT after sodium correction showing edema resolution" className="w-full h-52 rounded border border-gray-200 object-cover object-center bg-white mb-2" />
              <p className="text-xs text-gray-600">After hyponatremia correction: the edema resolved.</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">These are CT rather than MRI images, but they are highly relevant because they document a localized, mass-like edema pattern emerging in one vulnerable region during hyponatremia and then reversing after sodium correction.<Ref n={60} /></p>
        </div>

        <div className="bg-white rounded border border-blue-200 p-4">
          <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wide mb-3">Figure 6E — This Patient vs. Similar MRI Examples of Hyponatremia</h4>
          <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.95fr] gap-5 items-start">
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <p className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wide mb-3">This Patient — Mom's MRI</p>
              <div className="space-y-4">
                <img src={momMri1} alt="Mom MRI 1" className="w-full h-64 rounded border border-gray-200 object-cover object-center bg-white" />
                <img src={momMri2} alt="Mom MRI 2" className="w-full h-64 rounded border border-gray-200 object-cover object-center bg-white" />
                <img src={momMri3} alt="Mom MRI 3" className="w-full h-64 rounded border border-gray-200 object-cover object-center bg-white" />
              </div>
              <p className="text-xs text-gray-600 mt-3">Family-provided MRI photographs shown larger here so the lesion geometry and visual pattern are easier to compare.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <p className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wide mb-3">Similar MRI's of Hyponatremia</p>
              <div className="space-y-4">
                <img src={focalHyponatremiaClosestImg} alt="Closest literature comparator of focal hyponatremia" className="w-full h-48 rounded border border-gray-200 object-cover object-center bg-white" />
                <img src={focalHyponatremiaImg} alt="Additional focal hyponatremia comparator" className="w-full h-48 rounded border border-gray-200 object-cover object-center bg-white" />
                <img src={focalCtHyponatremiaImg} alt="Additional focal hyponatremia CT comparator" className="w-full h-48 rounded border border-gray-200 object-cover object-center bg-white" />
              </div>
              <p className="text-xs text-gray-600 mt-3">These literature comparators are grouped separately to emphasize that they are similar focal hyponatremia / osmotic-injury appearances, not the patient's own scans.</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">These side-by-side panels do not prove diagnosis, but they make the visual overlap with published focal hyponatremia and osmotic-injury patterns easier to assess.</p>
        </div>
      </div>
    </section>
  );
}

function DemyelinatingMimics() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">7. Additional Comparator Class — Tumefactive and Demyelinating Glioma Mimics</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        This section adds a second non-neoplastic comparator class: <strong>tumefactive demyelinating lesions</strong>. These lesions are well known for imitating glioma through mass effect, edema, incomplete ring enhancement, and suspicious lesion geometry.<Ref n={38} /><Ref n={39} /><Ref n={46} /> The purpose is not to claim that this case must be tumefactive demyelination, but to show that <strong>myelin-related pathology can look strikingly tumor-like</strong> on MRI.
      </p>

      <div className="border-2 border-purple-200 bg-purple-50 rounded-lg p-5 mb-6">
        <p className="text-sm font-bold text-purple-900 mb-2 flex items-center gap-2"><ImageIcon className="w-4 h-4" /> Demyelinating Lesion Comparison Gallery</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
          <img src={tdlMimicImg1} alt="Tumefactive demyelinating mimic 1" className="w-full h-44 rounded object-cover object-center bg-white" />
          <img src={tdlMimicImg2} alt="Demyelination ring enhancement example 1" className="w-full h-44 rounded object-contain bg-white" />
          <img src={tdlMimicImg3} alt="Demyelination ring enhancement example 2" className="w-full h-44 rounded object-contain bg-white" />
          <img src={tdlMimicImg4} alt="Inflammatory demyelinating disease mimicking glioma" className="w-full h-44 rounded object-cover object-top bg-white" />
          <img src={tdlMimicImg5} alt="Tumefactive demyelinating mimic 2" className="w-full h-44 rounded object-contain bg-white" />
          <img src={tdlMimicImg6} alt="Tumefactive demyelinating mimic 3" className="w-full h-44 rounded object-cover object-center bg-white" />
        </div>
        <p className="text-sm text-purple-800 leading-relaxed mb-3">
          <strong>Why these images matter:</strong> osmotic and myelin-related injury can produce focal, enhancing, edematous lesions that look tumor-like on MRI. In classic osmotic demyelination syndrome, the injury is usually discussed in the setting of rapid correction of chronic hyponatremia; the broader point here is that major sodium shifts can damage myelin and create non-neoplastic radiographic patterns. In this case, 20 years of extreme polydipsia and likely repeated acute-on-chronic sodium swings raise the possibility of a related osmotic myelin-injury process rather than simple uninterrupted tumor growth.<Ref n={18} /><Ref n={35} /><Ref n={38} /><Ref n={39} /><Ref n={46} />
        </p>
        <p className="text-sm text-purple-800 leading-relaxed">
          This does not mean the article is claiming textbook central pontine myelinolysis or proving definite ODS. The narrower claim is that severe chronic hyponatremia may have produced an <strong>osmotic myelin-injury spectrum lesion</strong> — potentially extrapontine, focal, or mixed with BBB disruption. These comparators matter because they show the kind of mass-like demyelinating appearance such an injury can assume.
        </p>
      </div>
    </section>
  );
}

/* ═══ 8. CANNABINOIDS ═══ */
function CannabinoidSection() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">8. Cannabinoid Neuroprotection — CBD, THC, and Brain Water Homeostasis</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Cannabinoids are relevant here because preclinical literature suggests they can influence edema biology, BBB integrity, AQP4-linked water handling, and possibly myelin-related recovery pathways. The evidence in this section is largely mechanistic and preclinical rather than direct proof of clinical efficacy in a human lesion like this.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">8.1 Clickable Mini-Study Summaries</h3>
      <div className="space-y-3 mb-5">
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <a href="https://pubmed.ncbi.nlm.nih.gov/34289379/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-700 hover:underline inline-flex items-center gap-1">
            CBD reduced brain edema and BBB leak after TBI in rats <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <p className="text-xs text-gray-600 mt-2">
            In a rat TBI model, CBD lowered brain water content, reduced Evans-blue leakage, increased claudin-5 and occludin, and improved neurologic scores. This is one of the clearest preclinical papers supporting an anti-edema / BBB-stabilizing cannabinoid effect.<Ref n={20} />
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <a href="https://pubmed.ncbi.nlm.nih.gov/38553903/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-700 hover:underline inline-flex items-center gap-1">
            CBD improved intracranial lymphatic drainage and clearance in a murine TBI model <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <p className="text-xs text-gray-600 mt-2">
            This 2024 paper reported that CBD improved tracer clearance, enhanced movement from meningeal lymphatic vessels to deep cervical lymph nodes, increased cerebral blood flow, and partially restored AQP4 polarization. That does <strong>not</strong> prove benefit in glioma or hyponatremia, but it is directly relevant to the idea that cannabinoids may improve brain waste and fluid clearance pathways.<Ref n={42} />
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <a href="https://pubmed.ncbi.nlm.nih.gov/26039099/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-700 hover:underline inline-flex items-center gap-1">
            Cannabinoid signaling and AQP4 expression tracked with edema severity after brain injury <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <p className="text-xs text-gray-600 mt-2">
            This mouse TBI study found that AQP4 rose alongside edema and neurologic impairment, while cannabinoid-receptor changes correlated with recovery biology. It is mechanistic rather than therapeutic, but it helps justify why cannabinoid signaling and drainage-channel biology are being discussed in the same framework.<Ref n={26} />
          </p>
        </div>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">8.2 CBD and BBB Stabilization</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-gray-300">
          <thead><tr className="bg-gray-100 border-b border-gray-300">
            <th className="p-2.5 text-left font-semibold text-gray-700">Mechanism</th>
            <th className="p-2.5 text-left font-semibold text-gray-700">Evidence</th>
            <th className="p-2.5 text-left font-semibold text-gray-700">Ref</th>
          </tr></thead>
          <tbody className="text-gray-700 text-xs">
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">↑ Tight junction proteins</td><td className="p-2.5">CBD increased claudin-5 and occludin expression after TBI in rats.</td><td className="p-2.5"><Ref n={20} /></td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">↓ BBB permeability</td><td className="p-2.5">CBD reduced Evans blue extravasation and protected an in vitro BBB model.</td><td className="p-2.5"><Ref n={20} /><Ref n={21} /></td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">↓ Neuroinflammation</td><td className="p-2.5">CBD reduced inflammatory cytokines relevant to edematous brain injury.</td><td className="p-2.5"><Ref n={20} /><Ref n={27} /></td></tr>
            <tr><td className="p-2.5 font-semibold">CB2 receptor: anti-edema</td><td className="p-2.5">Cannabinoid signaling can attenuate brain edema while preserving BBB junctions.</td><td className="p-2.5"><Ref n={31} /></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">8.3 AQP4, Glymphatic Flow, and Brain Drainage</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Aquaporin-4 is the dominant water channel at the BBB interface and is tightly linked to glymphatic and meningeal-lymphatic clearance physiology. In hyponatremia, AQP4 upregulation and mislocalization are plausible contributors to cerebral edema.<Ref n={25} /><Ref n={30} /><Ref n={49} /> Cannabinoid signaling may modulate related pathways, and one recent murine TBI study reported that CBD improved intracranial lymphatic drainage, enhanced tracer clearance, and partially restored AQP4 polarization.<Ref n={26} /><Ref n={42} /> That remains <strong>preclinical evidence</strong>, but it is directly relevant to the article’s brain-water-handling hypothesis.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        There is also an important tumor-side reason to discuss AQP4 carefully: human glioblastoma studies report redistribution and upregulation of AQP4 in relation to edema biology and tumor behavior.<Ref n={52} /><Ref n={53} /> That means AQP4 cannot be treated here as evidence for only one side of the differential. It is relevant both to hyponatremic swelling biology and to genuine glioma-related edema.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">8.4 Cannabinoids and Myelin Biology</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Reviews of experimental demyelinating disease report that cannabinoids can reduce neuroinflammation, lessen demyelination severity in some models, and in certain settings may support remyelination-related biology.<Ref n={40} /><Ref n={41} /> That evidence is <strong>primarily preclinical</strong> and should not be treated as proof that cannabinoids reverse a human mass-like lesion.
      </p>
      <div className="space-y-3 mb-4">
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <a href="https://pubmed.ncbi.nlm.nih.gov/33804243/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-700 hover:underline inline-flex items-center gap-1">
            Review: cannabinoids may support remyelination biology in demyelinating disease models <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <p className="text-xs text-gray-600 mt-2">
            This review summarizes experimental evidence that cannabinoids can reduce neuroinflammation, influence oligodendrocyte lineage biology, and in some settings support remyelination-related processes. It is useful here as a mechanistic bridge between edema control and possible white-matter repair, but it remains <strong>preclinical</strong> rather than direct proof in a human lesion like this one.<Ref n={40} />
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <a href="https://pubmed.ncbi.nlm.nih.gov/35327341/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-700 hover:underline inline-flex items-center gap-1">
            Review: cannabinoid signaling may protect oligodendrocytes and create a repair-permissive environment <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <p className="text-xs text-gray-600 mt-2">
            This review discusses CB1- and CB2-linked mechanisms relevant to oligodendrocyte survival, inflammatory downshifting, and the broader neuropathologic promise of cannabinoids in demyelinating conditions. In practical terms, it supports the idea that cannabinoids are being studied not only for symptom control, but also for potential roles in limiting myelin injury and helping recovery biology.<Ref n={41} />
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Taken together, these reviews make it biologically reasonable to discuss oligodendrocyte protection and remyelination-related biology in the same article as osmotic injury and tumefactive demyelinating mimics.<Ref n={40} /><Ref n={41} /> That is relevant because one branch of this article’s differential hypothesis is that repeated osmotic stress may have produced a demyelinating or myelin-injury component rather than a purely neoplastic one.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        The boundary has to stay clear: these findings do <strong>not</strong> demonstrate that CBD or THC can reliably remyelinate a human lesion of this size or explain away a genuine tumor. They simply add mechanistic support for why cannabinoids remain scientifically interesting in a scenario where edema control, inflammatory reduction, tumor biology, and possible myelin repair may all matter at the same time.<Ref n={40} /><Ref n={41} />
      </p>
    </section>
  );
}

/* ═══ 9. LIPOPHILICITY MINI-HYPOTHESIS ═══ */
function LipophilicityHypothesis() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">9. The Lipophilic Shield — A Mini-Hypothesis on Cannabinoid Polarity and Brain Water Management</h2>

      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-5 mb-6">
        <p className="text-sm font-bold text-indigo-900 mb-2 flex items-center gap-2"><FlaskConical className="w-4 h-4" /> Speculative Sub-Hypothesis</p>
        <p className="text-sm text-indigo-800 leading-relaxed">
          The following section is intentionally speculative. It is included as a hypothesis-generating observation rather than an established claim: perhaps the extreme lipophilicity of cannabinoids helps reinforce injured lipid membranes in a way that modestly favors water exclusion.
        </p>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">9.1 The Polarity Numbers</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-gray-300">
          <thead><tr className="bg-gray-100 border-b border-gray-300">
            <th className="p-2.5 text-left font-semibold text-gray-700">Substance</th>
            <th className="p-2.5 text-left font-semibold text-gray-700">log P</th>
            <th className="p-2.5 text-left font-semibold text-gray-700">Meaning</th>
          </tr></thead>
          <tbody className="text-gray-700 text-xs">
            <tr className="border-b border-gray-200"><td className="p-2.5">Water</td><td className="p-2.5 font-mono">−1.38</td><td className="p-2.5">Maximally polar.</td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5">Typical CNS drug</td><td className="p-2.5 font-mono">2–4</td><td className="p-2.5">Common BBB-crossing range.</td></tr>
            <tr className="border-b border-gray-200 bg-green-50"><td className="p-2.5 font-semibold text-green-900">CBD</td><td className="p-2.5 font-mono font-bold text-green-900">~6.3</td><td className="p-2.5 text-green-800">Extremely lipophilic.<Ref n={24} /></td></tr>
            <tr className="border-b border-gray-200 bg-green-50"><td className="p-2.5 font-semibold text-green-900">THC</td><td className="p-2.5 font-mono font-bold text-green-900">~7.68</td><td className="p-2.5 text-green-800">Among the most lipophilic bioactives in common discussion.<Ref n={24} /></td></tr>
            <tr><td className="p-2.5">Brain myelin lipids</td><td className="p-2.5 font-mono">5–8+</td><td className="p-2.5">Highly nonpolar lipid-rich structures.</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">9.2 The Visual Intuition</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        The everyday observation that THC/CBD oil is hard to remove with water but dissolves readily in oil is chemically real. The article’s intuition is not that cannabinoids literally “squeegee” water out of the brain, but that their membrane affinity may help reinforce lipid barriers while receptor-mediated pathways support the tissue’s own repair response.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">9.3 Testable Predictions</h3>
      <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2">
        <li>In a hyponatremia model, prophylactic CBD should reduce brain water content more than would be expected from anti-inflammatory effects alone.</li>
        <li>THC might show greater membrane-related effects than CBD if lipophilicity itself matters mechanistically.</li>
        <li>Membrane capacitance studies could help separate physical membrane effects from classic receptor signaling.<Ref n={23} /></li>
      </ul>
    </section>
  );
}
 /* ═══ 10. VERIFICATION ═══ */
function VerificationStrategy() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">10. Verification Strategy — The Practical Test</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        This hypothesis makes a falsifiable prediction: if hyponatremia, focal BBB disruption, and/or secondary demyelinating injury are materially contributing to the imaging appearance, the lesion complex should <strong>partially regress, fluctuate downward, or otherwise become less conspicuous</strong> after sustained fluid control, clinician-guided sodium normalization, and a reasonable interval for recovery before repeat MRI. The same logic applies to the acute collapse: if the syndrome was substantially sodium-driven, neurologic and respiratory abnormalities should improve together as the osmotic crisis resolves.<Ref n={44} /><Ref n={56} /><Ref n={57} /><Ref n={58} />
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-gray-300">
          <thead><tr className="bg-gray-100 border-b border-gray-300">
            <th className="p-2.5 text-left font-semibold text-gray-700">Step</th>
            <th className="p-2.5 text-left font-semibold text-gray-700">Intervention</th>
            <th className="p-2.5 text-left font-semibold text-gray-700">Target</th>
            <th className="p-2.5 text-left font-semibold text-gray-700">Rationale</th>
          </tr></thead>
          <tbody className="text-gray-700 text-xs">
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">1</td><td className="p-2.5">Permanent cessation of excessive water intake</td><td className="p-2.5">{"<"}1.5–2 L total fluid/day</td><td className="p-2.5">Eliminates the osmotic trigger — the single most important intervention.</td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">2</td><td className="p-2.5">Clinician-guided maintenance of normonatremia</td><td className="p-2.5">Serum Na⁺ 135–145 mmol/L</td><td className="p-2.5">Maintains normonatremia and avoids renewed hypo-osmolar gradients. Correction should be medically supervised to avoid over-rapid shifts and osmotic demyelination.<Ref n={7} /><Ref n={44} /></td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">3</td><td className="p-2.5">Continue or discuss cannabinoid therapy</td><td className="p-2.5">CBD 100+ mg/day; THC titrated if used</td><td className="p-2.5">Adjunctive support aimed at BBB stabilization, anti-edema effects, and possibly myelin-related recovery pathways.<Ref n={20} /><Ref n={40} /></td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">4</td><td className="p-2.5">Repeat MRI with contrast</td><td className="p-2.5">After a defined interval of fluid control and supportive therapy</td><td className="p-2.5">This is the practical discriminator. If the brain is given a real chance to recover through sustained fluid restriction, sodium stabilization, and supportive care, meaningful lesion improvement would argue that a reversible water-handling component is present, even if it would not fully settle whether the process is purely osmotic, partly demyelinating, or hybrid.</td></tr>
            <tr><td className="p-2.5 font-semibold">5</td><td className="p-2.5">Clinical neurologic and respiratory reassessment</td><td className="p-2.5">Orientation, cognition, seizure frequency, oxygenation</td><td className="p-2.5">If hyponatremia meaningfully contributed to the acute syndrome, improvement in brain function and oxygenation may travel together, though oxygen abnormalities still require a standard pulmonary work-up.<Ref n={56} /><Ref n={57} /><Ref n={58} /></td></tr>
          </tbody>
        </table>
      </div>
      <div className="border border-gray-200 rounded p-4 bg-gray-50">
        <p className="text-sm font-semibold text-gray-800 mb-2">Interpreting Results</p>
        <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-1">
          <li><strong>Mass regresses without antineoplastic therapy</strong> → a non-neoplastic reversible component becomes substantially more plausible, though continued surveillance would still be required.</li>
          <li><strong>Fluctuating components resolve but core persists</strong> → hybrid scenario (tumor plus superimposed osmotic or demyelinating change) becomes more plausible. Proceed with neuro-oncologic management of the persistent core.</li>
          <li><strong>No meaningful change</strong> → the article has likely overestimated the role of hyponatremia, and conventional treatment pathways become more compelling.</li>
        </ul>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed mt-3">
        Respiratory findings should still be reviewed conventionally. If ICU records documented pulmonary edema, bilateral infiltrates, normal cardiac function, or rapid improvement with sodium correction rather than a classic infectious course, that would materially strengthen the hyponatremia-led interpretation of the acute collapse.<Ref n={57} /><Ref n={58} />
      </p>
    </section>
  );
}

/* ═══ 11. DISCUSSION ═══ */
 function Discussion() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">11. Discussion</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        The strongest parts of this hypothesis are the chronology, the biologic plausibility, the normal renal/SIADH work-up, the acute brain-lung syndrome, and the potentially transient ~10–11 mm secondary nodule. Together, they justify serious consideration of a hyponatremia-led explanation, whether purely osmotic, partly demyelinating, or hybrid with an underlying tumor. Especially important is the published glioblastoma pseudoprogression case in which hyponatremia itself drove reversible encephalopathy and radiographic worsening, because it shows that apparent progression on imaging does not automatically equal true tumor growth.<Ref n={15} />
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        <strong>Limitations</strong> are substantial. This hypothesis is authored by a family member, not a clinician. Pending serial imaging, incomplete tissue clarification, and the rarity of focal osmotic injury mimicking glioma in the literature all limit confidence. The 20+ year duration of polydipsia described here is unusual enough that there is no close published precedent for the cumulative damage pattern being proposed.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        The weakest parts are equally important to acknowledge: there is no direct sodium-at-time-of-MRI correlation yet, imaging overlap with tumor remains real, and the literature more strongly supports diffuse edema than focal tumor-like injury. The low oxygen finding and reported lung fluid are also supportive but not exclusive: in the literature, hypoxemia and noncardiogenic pulmonary edema may accompany hyponatremic encephalopathy and may worsen its brain effects, but they still have their own differential diagnosis and cannot be treated as proof of hyponatremia by themselves.<Ref n={56} /><Ref n={57} /><Ref n={58} /><Ref n={59} /> In addition, several of the mechanistic pathways discussed here — especially AQP4 biology — are not exclusive to hyponatremia and also appear in genuine glioblastoma edema biology.<Ref n={52} /><Ref n={53} /> In other words, the hypothesis is biologically coherent but still inferential. Its credibility rises or falls with the repeat MRI and the eventual tissue story.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed">
        Cannabinoids remain a mechanistically interesting adjunct because of their published relevance to edema biology, BBB stabilization, and — more speculatively — myelin-related recovery. The lipophilic shield mini-hypothesis in Section 9 remains the most speculative part of the article and should be treated as hypothesis-generating rather than evidentiary.
      </p>
    </section>
  );
}

/* ═══ 12. CONCLUSION ═══ */
 function Conclusion() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">12. Conclusion</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        We propose that this 64-year-old woman{"'"}s imaging abnormalities may be substantially shaped by 20 years of polydipsia-induced chronic hyponatremia. In this framing, the acute presentation and the later MRI findings belong to the same broader sodium-driven story rather than two unrelated problems. The leading non-neoplastic reading is focal osmotic injury with BBB disruption; a second plausible reading is osmotic injury with secondary demyelinating change; and a third is a hybrid model in which a hidden neoplasm exists but hyponatremia is materially distorting the radiographic picture.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Verification through fluid control, clinician-guided sodium normalization, supportive therapy, and repeat MRI offers a <strong>practical way to test reversibility</strong>. If the lesion complex regresses, a reversible water-handling component becomes much harder to dismiss. If it persists, conventional oncologic management proceeds without delay.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed">
        This hypothesis-of-hypotheses, grounded in clinical chronology and peer-reviewed mechanisms, warrants formal evaluation by the neuro-oncology team. Its purpose is not to replace standard diagnosis, but to show that chronic extreme hyponatremia, focal BBB disruption, and demyelinating mimicry all sit within the realm of biologic possibility here.
      </p>
    </section>
  );
}

/* ═══ 13. REFERENCES ═══ */
function References() {
  return (
    <section className="mb-10" id="hypo-refs">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">13. References</h2>
      <ol className="list-decimal pl-6 text-sm text-gray-600 leading-relaxed space-y-2">
        {REFS.map(r => (
          <li key={r.n} id={`hypo-ref-${r.n}`}>
            {r.t}{' '}
            <a href={`https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline inline-flex items-center gap-0.5">
              PMID: {r.pmid} <ExternalLink className="w-3 h-3" />
            </a>
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
      <p className="text-xs text-gray-400 leading-relaxed mb-2">This is a family-authored hypothesis, not a peer-reviewed publication. All claims require verification through the proposed imaging protocol. This document does not constitute medical advice. Discuss all treatment decisions with your neuro-oncology team.</p>
      <p className="text-sm text-gray-700 font-semibold mt-3">Contact: Josh Trembath</p>
      <p className="text-sm text-gray-600">jptrembath@gmail.com &middot; (385) 590-4074</p>
      <div className="flex gap-3 justify-center mt-4 flex-wrap">
        <button onClick={() => { window.location.hash = ''; window.location.reload(); }} className="text-xs text-gray-500 hover:text-gray-900 border border-gray-300 rounded px-3 py-1.5">Main Site</button>
        <a href="#/phoenix-tears-study" className="text-xs text-gray-500 hover:text-gray-900 border border-gray-300 rounded px-3 py-1.5">Phoenix Tears Study</a>
        <a href="#/doxycycline-anomaly" className="text-xs text-gray-500 hover:text-gray-900 border border-gray-300 rounded px-3 py-1.5">Doxycycline Anomaly</a>
        <a href="#/biopsy-methodology" className="text-xs text-gray-500 hover:text-gray-900 border border-gray-300 rounded px-3 py-1.5">Biopsy Methodology</a>
      </div>
    </footer>
  );
}
