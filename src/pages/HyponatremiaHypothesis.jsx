import React, { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, ChevronDown, ChevronUp, AlertTriangle, Brain, FlaskConical, ImageIcon } from 'lucide-react';

function Ref({ n }) {
  const ref = REFS.find(r => r.n === n);
  const href = ref?.url || (ref?.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${ref.pmid}/` : null);

  if (!href) {
    return <sup className="text-gray-600 font-medium">[{n}]</sup>;
  }

  return (
    <sup className="text-blue-700 font-medium cursor-pointer hover:underline">
      <a href={href} target="_blank" rel="noopener noreferrer">[{n}]</a>
    </sup>
  );
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
  { n: 61, pmid: '38840620', t: 'Caldwell DJ et al. Acute hyponatremia post craniotomy resulting in a unilateral fixed and dilated pupil: A case study on diagnosis and management. Surg Neurol Int. 2024.' },
  { n: 62, pmid: '17572863', t: 'Carpenter J et al. Inadvertent hyponatremia leading to acute cerebral edema and early evidence of herniation. Neurocrit Care. 2007.' },
  { n: 63, pmid: '26237593', t: 'Hannon MJ, Thompson CJ. Neurosurgical Hyponatremia. J Clin Med. 2014.' },
  { n: 64, pmid: '22030327', t: 'Santos M et al. Hyponatremia--an unusual trigger of Takotsubo cardiomyopathy. Rev Port Cardiol. 2011.' },
  { n: 65, pmid: '36514473', t: 'Dodoo SN et al. Takotsubo cardiomyopathy in the setting of severe hyponatremia and beer potomania: A case report. Clin Case Rep. 2022.' },
  { n: 66, pmid: '37698728', t: 'Yalta K et al. Hyponatremia and takotsubo syndrome: a review of pathogenetic and clinical implications. Heart Fail Rev. 2023.' },
  { n: 67, pmid: '26574669', t: 'Hay JR et al. Blood-Brain Barrier Disruption Is an Early Event That May Persist for Many Years After Traumatic Brain Injury in Humans. J Neuropathol Exp Neurol. 2015.' },
  { n: 68, pmid: '32919030', t: 'van Vliet EA et al. Long-lasting blood-brain barrier dysfunction and neuroinflammation after traumatic brain injury. Neurobiol Dis. 2020.' },
  { n: 69, pmid: '33632026', t: 'Amoo M et al. Permeability of the Blood-Brain Barrier after Traumatic Brain Injury: Radiological Considerations. J Neurotrauma. 2021.' },
  { n: 70, pmid: '32973558', t: 'Wu YC et al. Blood-Brain Barrier Dysfunction in Mild Traumatic Brain Injury: What We Know and What We Should Know. Front Physiol. 2020.' },
  { n: 71, pmid: '27625888', t: 'Tyagi V et al. Traumatic brain injury and subsequent glioblastoma development: Review of the literature and case reports. Surg Neurol Int. 2016.' },
  { n: 72, pmid: '36596004', t: 'Zhou H et al. Post-traumatic brain injury glioma: Characteristics, report of two cases, and review of the literature. Medicine (Baltimore). 2022.' },
  { n: 73, url: 'https://www.who.int/publications/i/item/9241593989', t: 'World Health Organization. Nutrients in Drinking-water. Chapter: Health Risks from Drinking Demineralized Water. 2005.' },
  { n: 74, pmid: '26237487', t: 'Filippatos TD et al. Hyponatremia: Special Considerations in Older Patients. J Clin Med. 2015.' },
  { n: 75, pmid: '35852524', t: 'Adrogué HJ et al. Diagnosis and Management of Hyponatremia: A Review. JAMA. 2022.' },
];

const momMri1 = new URL('../../hyponatremia/mom_mri1.jpg', import.meta.url).href;
const momMri2 = new URL('../../hyponatremia/mom_mri2.jpg', import.meta.url).href;
const momMri3 = new URL('../../hyponatremia/mom_mri3.jpg', import.meta.url).href;
const diffuseHyponatremiaImg = new URL('../../hyponatremia/diffusive_hyponatremia.jpg', import.meta.url).href;
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
      <CardiacComplications />
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
        Hypothetical Osmotic Demyelination Syndrome and Focal Blood–Brain Barrier Disruption Secondary to Chronic Hyponatremia from Long-Term Polydipsia, Driving Acute Seizures and Encephalopathic Collapse While Mimicking Glioma or Exaggerating Glioma Size and Pseudoprogression.
      </h1>
      <p className="text-lg font-serif text-gray-600 leading-relaxed mb-4">
        A case hypothesis integrating a current working assumption of glioma, ambiguous biopsy findings, and established literature on hyponatremic encephalopathy, BBB disruption, osmotic demyelination, brain-lung complications, and cannabinoid neurobiology — asking whether a 20-year water-chugging ritual produced a focal osmotic injury syndrome now mimicking glioma or materially exaggerating its apparent size.
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
            This hypothesis was prepared by a citizen scientist family member, not a clinician. It should be read as a structured, testable differential rather than a diagnosis. Focal osmotic injury convincingly mimicking glioma is <strong>extremely rare</strong> in medical literature, so uncertainty remains high. The leading possibilities are a sodium-driven focal injury, sodium-driven injury plus secondary demyelination, or a real tumor whose edema and enhancement are being materially amplified by hyponatremia.
          </p>
          <p className="text-sm text-amber-800 leading-relaxed">
            Every major claim below is linked to a source, usually PubMed. The lesion is currently being approached clinically as presumed glioma, but imaging appearance and intraoperative impression are still less definitive than final pathology plus interval re-imaging under more stable sodium conditions, especially because glioma mimics and biopsy sampling limits are real.<Ref n={46} /><Ref n={47} /><Ref n={50} /><Ref n={51} /> The most practical discriminator is repeat MRI after sustained fluid control, clinician-guided sodium normalization, and time for recovery. If the lesion complex does not regress, the hyponatremia-led explanation weakens and conventional neuro-oncologic management should proceed without delay. Another major caveat is that all three prior MRIs may have been obtained while she was still hyponatremic, which could have distorted the baseline picture.
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
        We present the case of a 64-year-old woman (170 lb / 77 kg) with an estimated <strong>20-year history of daily rapid water chugging</strong> — usually at least 1 quart at a time, sometimes 2 quarts and sometimes 3 quarts, often before bed and again on waking, and often using reverse-osmosis water that would not provide meaningful electrolyte replacement. That low-TDS detail matters. A WHO expert review on demineralized water warns that very low-mineral water provides essentially no sodium replacement and may increase urine output and urinary electrolyte losses, making large-volume intake more destabilizing rather than less; in a water-intoxication setting, lower TDS can therefore worsen the tendency toward serum sodium decline.<Ref n={73} /> If renal free-water clearance was even modestly impaired, that repeated intake pattern could plausibly push her toward recurrent hyponatremic states and steadily feed chronic edema. In the three days leading up to her major collapse, she reportedly experienced three brief episodes of stabbing chest pain, each lasting about 30 seconds, before the later seizure, ICU-level encephalopathy, severe hypoxemia around 74%, and lungs reportedly filling with fluid — a brain-lung pattern described in severe hyponatremic encephalopathy. The chest-pain history matters not as proof of classic Takotsubo, but as a possible <strong>Takotsubo-like / brain-heart stress signal</strong> within the broader sodium-driven syndrome.<Ref n={45} /><Ref n={56} /><Ref n={57} /><Ref n={58} /><Ref n={64} /><Ref n={65} /><Ref n={66} />
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Neuroimaging showed a dominant lesion plus a secondary ~10–11 mm enhancing nodule interpreted as possible progression, while tissue sampling remained ambiguous and reported labs showed preserved renal function with no SIADH.<Ref n={14} /><Ref n={29} /> At present, the lesion may be clinically managed as presumed glioma on the basis of imaging and procedural impression, but this article treats that as a <strong>working assumption rather than a settled diagnosis</strong> until final pathology and interval re-imaging are weighed together. The central hypothesis is that recurrent hyponatremia from primary polydipsia contributed materially to both the acute collapse and the later imaging through focal osmotic injury, BBB disruption, secondary myelin injury, and possibly other systemic complications, including transient Takotsubo-like cardiac stress. The article does <strong>not</strong> assume that the BBB disruption had a single proven cause: a true tumor, demyelinating change, osmotic injury itself, prior trauma, or a hybrid of these possibilities could all be relevant. Within that broader differential, a later-reported severe waterslide head impact remains a biologically plausible cofactor because, if it caused even a small contusion, microbleed, or hematoma, the TBI literature suggests it could have left a chronic focal weak point years later and thereby shaped <strong>where</strong> sodium-driven edema accumulated rather than proving <strong>why</strong> the entire process began.<Ref n={60} /><Ref n={67} /><Ref n={68} /><Ref n={69} /><Ref n={70} /> The reversible nodule is therefore especially important given published hyponatremia-associated pseudoprogression in glioblastoma; if hyponatremia is exaggerating lesion size or creating a surrounding pool of waterlogged brain, repeat MRI after sustained fluid control and clinician-guided sodium normalization should help reveal that contribution.<Ref n={15} /><Ref n={44} /><Ref n={66} />
      </p>
      <div className="border-2 border-cyan-200 bg-cyan-50 rounded-lg p-5 mb-4">
        <p className="text-sm font-bold text-cyan-900 mb-2">Possible Cofactor: Waterslide Head Trauma as One Plausible Source of Focal BBB Vulnerability</p>
        <p className="text-sm text-cyan-800 leading-relaxed mb-2">
          The patient repeatedly reports a severe head impact on a waterslide a few years before the later edema syndrome and says she has long suspected that event may have injured the same region. About a month after that event, she reportedly developed vertigo and has had recurrent vertigo episodes several times since; this does not prove structural injury, but it is consistent with the possibility that the event was neurologically significant. This article cannot prove that an untreated hematoma or contusion occurred, and it does not claim trauma is the only possible source of BBB disruption. Tumor-related vascular abnormality, demyelinating injury, or osmotic injury from chronic hyponatremia could also contribute. Even so, if a traumatic injury did occur, it would offer a concrete explanation for <strong>why one spot became selectively vulnerable</strong> rather than the whole brain swelling uniformly.
        </p>
        <p className="text-sm text-cyan-800 leading-relaxed">
          That chronology is medically plausible: traumatic brain injury can leave long-lasting focal BBB leakage, blood-product-related inflammation, iron deposition, and perilesional vulnerability for years. In that setting, later hyponatremic episodes could preferentially draw water into the old injury site, amplifying focal edema, mass effect, and even transient pseudoprogression-like imaging rather than causing only diffuse whole-brain swelling. The key claim here is therefore modest but important: the waterslide event is a credible candidate for the <strong>location</strong> of vulnerability, while chronic hyponatremia remains the strongest candidate for the recurrent <strong>aggravating force</strong> acting on that vulnerability. Review literature also discusses a controversial possible link between prior TBI and later glioma formation, but that literature remains mixed and is far too weak to establish causation in this case.<Ref n={60} /><Ref n={67} /><Ref n={68} /><Ref n={69} /><Ref n={70} /><Ref n={71} /><Ref n={72} />
        </p>
      </div>
      <div className="overflow-x-auto mb-3">
        <table className="w-full text-sm border border-gray-300">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="p-2.5 text-left font-semibold text-gray-700">Observed history / finding</th>
              <th className="p-2.5 text-left font-semibold text-gray-700">Why it fits a hyponatremia-led interpretation</th>
              <th className="p-2.5 text-left font-semibold text-gray-700">Ref</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-xs">
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">Daily rapid water chugging, usually at least 1 quart and sometimes 2-3 quarts, often reverse-osmosis water</td>
              <td className="p-2.5">Repeated rapid intake in this range fits primary polydipsia / water-intoxication risk; if free-water clearance was even slightly weak, such chugging could repeatedly push sodium downward. Reverse-osmosis water may worsen that risk because very low-TDS water provides essentially no sodium and, in WHO's demineralized-water review, is associated with greater urinary electrolyte loss during high intake states.</td>
              <td className="p-2.5"><Ref n={45} /><Ref n={73} /></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">Severe edema / cerebral edema syndrome</td>
              <td className="p-2.5">Symptomatic hyponatremia is a hypo-osmolar cerebral-edema state and can produce severe neurologic deterioration.</td>
              <td className="p-2.5"><Ref n={44} /><Ref n={48} /></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">Seizures</td>
              <td className="p-2.5">Acute symptomatic hyponatremia from water intoxication commonly presents with seizures and encephalopathy.</td>
              <td className="p-2.5"><Ref n={10} /><Ref n={13} /></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">Low oxygen around 74%</td>
              <td className="p-2.5">Hyponatremic encephalopathy is known to coexist with severe hypoxemia, which can worsen brain injury and amplify the syndrome.</td>
              <td className="p-2.5"><Ref n={56} /><Ref n={59} /></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">Lungs reportedly filled with fluid</td>
              <td className="p-2.5">Case-series literature describes noncardiogenic pulmonary edema and respiratory failure during severe hyponatremic encephalopathy.</td>
              <td className="p-2.5"><Ref n={57} /><Ref n={58} /></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">Three consecutive days of brief stabbing chest pain before collapse</td>
              <td className="p-2.5">This is not a classic confirmed Takotsubo presentation, but published review and case-report literature shows severe hyponatremia can trigger Takotsubo / stress cardiomyopathy, with acute chest-pain presentations and broader brain-heart stress responses.</td>
              <td className="p-2.5"><Ref n={64} /><Ref n={65} /><Ref n={66} /></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">Reported severe waterslide head impact a few years earlier, never medically evaluated</td>
              <td className="p-2.5">If that event caused a small contusion, microbleed, or hematoma, it could have left a chronic focal BBB weak point. Published TBI literature shows BBB leakage can persist for years, making prior trauma one plausible location for later preferential water accumulation during hyponatremic states, without excluding tumor, demyelination, or osmotic injury as other contributors.</td>
              <td className="p-2.5"><Ref n={60} /><Ref n={67} /><Ref n={68} /><Ref n={69} /><Ref n={70} /></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2.5 font-semibold">Vertigo beginning about a month after the waterslide injury, with recurrent later episodes</td>
              <td className="p-2.5">This history does not prove a structural lesion, but it supports the possibility that the waterslide event was neurologically significant rather than trivial, which is relevant when considering prior trauma as one plausible source of focal BBB vulnerability.</td>
              <td className="p-2.5"><Ref n={67} /><Ref n={68} /><Ref n={69} /><Ref n={70} /></td>
            </tr>
            <tr>
              <td className="p-2.5 font-semibold">Possible pseudoprogression from one scan to the next</td>
              <td className="p-2.5">A published glioblastoma case and related comparator literature show that hyponatremia can worsen edema and imaging appearance in ways that mimic progression.</td>
              <td className="p-2.5"><Ref n={15} /><Ref n={16} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
 }

/* ═══ 2. CASE PRESENTATION ═══ */
 function CasePresentation() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">2. Detailed Case Presentation</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        A 64-year-old woman presented emergently after witnessed seizures. Family history describes an approximately <strong>20-year ritual of extreme daily water intake</strong> — usually at least 1 quart at a time, sometimes 2 quarts and sometimes 3 quarts, typically consumed as a straight chug, often before bedtime and again on waking, and often as reverse-osmosis water — performed as a perceived cleansing practice. Multiple witnesses described the behavior as extraordinary in both volume and speed. For this article, the key point is physiologic rather than psychiatric: the pattern fits the literature on primary polydipsia and water-intoxication risk.<Ref n={45} /> The reverse-osmosis detail is relevant because WHO's demineralized-water review argues that very low-TDS water is not neutral in this setting: it adds essentially no sodium and may favor greater urinary electrolyte loss, so the same chugging behavior may be more destabilizing with reverse-osmosis water than with mineral-containing water.<Ref n={73} />
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        She also repeatedly reports a severe head strike on a waterslide a few years before the current illness, severe enough that she now wonders whether it caused the vulnerable spot later seen on imaging. About a month later she reportedly developed vertigo, and she has had roughly five vertigo episodes since. Those symptoms do not prove a chronic structural lesion, but they strengthen the impression that the event may have been neurologically meaningful rather than minor. No medical evaluation from that event is available in this record, so an old hematoma or contusion cannot be established retrospectively. Even so, the chronology is notable because human TBI literature shows that BBB disruption can persist for years after a single injury, especially around damaged vessels and perilesional tissue. This makes prior trauma a medically plausible contributor to focal vulnerability, but not a proven explanation and not the only one; tumor, demyelination, or osmotic injury could also account for some or all of the BBB abnormality.<Ref n={67} /><Ref n={68} /><Ref n={69} /><Ref n={70} />
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        In the three days before the major collapse, she reportedly experienced sharp stabbing chest pain once per day, each episode lasting about 30 seconds. She then presented with profound altered mental status, witnessed seizures, severe hypoxemia around 74%, and lungs reportedly filled with fluid. Brain imaging demonstrated one primary lesion and a secondary ~11 mm focus interpreted as tumor progression.<Ref n={14} /><Ref n={15} /><Ref n={29} /> Tissue sampling remains under evaluation, and the lesion may currently be approached clinically as presumed grade 2 glioma based on imaging and intraoperative impression, but this article treats that as a working diagnosis rather than definitive pathology.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Comprehensive metabolic evaluation reportedly ruled out SIADH and showed intact renal function. She was managed with osmotic IV agents for presumed cerebral edema. Her weight (170 lb) and the absence of obvious alternative metabolic explanations make chronic water intoxication a serious explanatory candidate. Age also matters here: hyponatremia is especially common in older adults, in part because medications, comorbidity, lower total body water, and reduced renal water-handling reserve narrow the margin for safely clearing large water loads.<Ref n={74} /><Ref n={75} /> The pre-collapse chest-pain history does <strong>not</strong> establish classic Takotsubo cardiomyopathy retrospectively, especially because the reported episodes were brief rather than prolonged and because no ECG, troponin, echocardiographic, or angiographic confirmation is presented here. Even so, it remains noteworthy because severe hyponatremia is a recognized trigger of stress cardiomyopathy and broader brain-heart stress phenomena, making the stabbing chest pain a relevant Takotsubo-like clue rather than a standalone diagnosis.<Ref n={56} /><Ref n={57} /><Ref n={58} /><Ref n={64} /><Ref n={65} /><Ref n={66} />
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
          The central proposal is that <strong>chronic recurrent hyponatremia may be the main destabilizing and aggravating force in this case</strong>. It could link the acute collapse and the later imaging puzzle through focal osmotic injury, BBB disruption, secondary myelin injury, or a hybrid scenario in which a true tumor exists but sodium-driven edema materially worsens its appearance. Twenty years of extreme polydipsia makes repeated acute-on-chronic osmotic stress biologically plausible, and the frequent use of reverse-osmosis water may have made those water loads even less forgiving by adding almost no electrolyte replacement during large-volume chugging.<Ref n={73} /> A prior untreated head injury is one plausible reason one focal region may have become the preferred weak point for that stress rather than the only possible explanation.
        </p>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">3.1 Hypothesis of Hypotheses</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        This article is best read as a <strong>structured differential hypothesis</strong>, not a single rigid conclusion. The leading idea is that hyponatremia is doing major causal work, but several downstream interpretations remain possible:
      </p>
      <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2 mb-3">
        <li><strong>Pure osmotic / BBB mechanism:</strong> repeated water intoxication caused focal BBB failure and mass-like edema.</li>
        <li><strong>Osmotic injury with secondary demyelination:</strong> large or repeated osmotic gradients produced focal myelin damage that can mimic tumor.</li>
        <li><strong>Hybrid model:</strong> an underlying tumor exists, but hyponatremia and BBB weakness are materially exaggerating edema, enhancement, and transient satellite lesions.</li>
      </ul>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        The article therefore does <strong>not</strong> claim certainty that no tumor exists. It argues that chronic extreme hyponatremia deserves serious consideration as a contributor to what is being seen.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        A key practical concern is that if the lesion is being interpreted as glioma before final pathology is settled, imaging alone may overweight that conclusion. This article therefore places unusual emphasis on final biopsy interpretation, mimic literature, and repeat imaging after sodium stabilization rather than on appearance alone.<Ref n={46} /><Ref n={47} /><Ref n={50} /><Ref n={51} /><Ref n={69} /><Ref n={70} />
      </p>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">3.2 Why Focal Rather Than Diffuse?</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        A common objection is that hyponatremia usually causes <strong>diffuse</strong> cerebral edema. That is true in many acute cases.<Ref n={1} /><Ref n={2} /> The narrower claim here is that once the brain contains a <strong>pre-injured or structurally vulnerable region</strong>, the osmotic burden may stop distributing evenly. Case reports involving hemorrhage beds, postoperative tissue, and glioma, plus neurosurgical and TBI literature, support the possibility that low sodium can worsen edema where the BBB is already compromised or adaptation is already failing.<Ref n={15} /><Ref n={60} /><Ref n={61} /><Ref n={62} /><Ref n={63} /><Ref n={67} /><Ref n={68} />
      </p>
      <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2 mb-3">
        <li><strong>BBB heterogeneity:</strong> the barrier is not uniformly robust, and once a focal weak point develops it may become the path of least resistance for later water influx.<Ref n={4} /><Ref n={5} /></li>
        <li><strong>Clinical weak-point precedent:</strong> published cases show hyponatremia worsening edema preferentially at a prior hematoma site, after craniotomy, and during other evolving brain injuries rather than producing only perfectly symmetric swelling.<Ref n={60} /><Ref n={61} /><Ref n={62} /></li>
        <li><strong>Possible post-traumatic weak point in this case:</strong> the patient repeatedly reports a severe waterslide head impact a few years earlier. If that caused an untreated contusion, microbleed, or hematoma, long-term BBB-persistence studies make it plausible that the old injury site remained a chronic leak-prone zone into which later hyponatremic episodes preferentially pulled water. This remains one plausible weak-point explanation among others, including tumor-related BBB abnormality, demyelinating injury, or osmotic injury that itself became self-reinforcing.<Ref n={67} /><Ref n={68} /><Ref n={69} /><Ref n={70} /></li>
        <li><strong>The weak-point phenomenon:</strong> repeated osmotic insults over years could create a self-perpetuating vulnerable zone that swells preferentially during each water-loading episode.<Ref n={3} /><Ref n={7} /><Ref n={63} /></li>
        <li><strong>AQP4 dysregulation:</strong> regional aquaporin changes could turn one area into a local water sink during hypo-osmolar states.<Ref n={25} /><Ref n={30} /></li>
        <li><strong>Precedent in ODS:</strong> osmotic demyelination can present as focal mass-like lesions that mimic tumors on MRI.<Ref n={7} /><Ref n={18} /><Ref n={19} /></li>
      </ul>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">3.3 The Transient Lesion: Pseudoprogression Explained</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        The ~10–11 mm enhancing nodule is one of the strongest imaging clues supporting a reversible component. A disappearing secondary focus is generally more compatible with fluctuating edema, treatment effect, or pseudoprogression than with straightforward uninterrupted tumor expansion.<Ref n={14} /><Ref n={29} /> Published literature also documents a glioblastoma patient in whom acute hyponatremia produced encephalopathy and radiographic worsening that mimicked pseudoprogression, then improved after sodium correction alone.<Ref n={15} />
      </p>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">3.4 The Alternative: A Hidden Tumor</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        If biopsy remains ambiguous, a true glioma may still exist within this region and simply have been missed by the needle biopsy. Stereotactic biopsies sample only a small tissue cylinder, and heterogeneous lesions are inherently vulnerable to sampling error; even modern review literature notes lower diagnostic yield in small or heterogeneous lesions.<Ref n={47} /><Ref n={50} /><Ref n={51} /> If a glioma exists, its abnormal vasculature could itself create focal BBB weakness, meaning hyponatremia-related fluctuation might be <strong>superimposed on a real tumor</strong> rather than replacing it as an explanation.<Ref n={15} /> Review literature has also discussed a controversial possible association between prior TBI and later glioma formation at old injury sites, but the epidemiologic evidence remains mixed and is far too uncertain to support a causal claim in this case.<Ref n={71} /><Ref n={72} />
      </p>
      <p className="text-sm text-gray-700 leading-relaxed">
        The main practical discriminator is sustained fluid control, clinician-guided sodium normalization, time for recovery, and repeat MRI. Regression without antineoplastic treatment would strengthen a reversible hyponatremia-led component, while persistence of a core lesion with resolution of fluctuating features would favor a hybrid scenario.
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
        The kidneys can excrete only a limited amount of free water per hour. Intake that repeatedly exceeds that capacity can produce dilutional hyponatremia even in the absence of renal failure or SIADH.<Ref n={11} /><Ref n={34} /><Ref n={45} /> In this case, the reported pattern was usually at least 1 quart per episode, sometimes 2 or 3 quarts, and consumed rapidly as a chug. If free-water clearance was even modestly reduced, that repeated intake pattern could plausibly push sodium downward again and again, feeding a chronic edema-prone state rather than a single isolated episode. The use of reverse-osmosis water may have amplified the risk: WHO's demineralized-water review emphasizes that very low-TDS water contributes essentially no sodium, calcium, or magnesium and may increase urinary electrolyte loss, so repeated large chugs of low-mineral water can be a particularly poor match for someone already at risk for water intoxication.<Ref n={73} />
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        The age context also strengthens concern. Older adults have less physiologic reserve against hyponatremia, and even mild chronic reductions in serum sodium can matter clinically; severe symptoms become much more likely as levels fall further, especially when decline is acute or superimposed on chronic vulnerability.<Ref n={74} /><Ref n={75} /> In practical terms, a long-standing pattern of rapid 1-3 quart chugs of low-mineral water could plausibly produce repeated acute dips on top of chronic mild hyponatremia.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">4.2 Osmotic Stress → BBB Disruption → Focal Edema</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        When plasma sodium falls, water moves into brain tissue by osmosis, initially causing diffuse swelling. When adaptation fails, astrocytic swelling, hypoxia, and structural injury follow. In already-injured brain, that osmotic stress may become <strong>focal</strong> because water preferentially accumulates where the BBB has been weakened by hemorrhage, surgery, tumor, prior inflammatory damage, demyelinating processes, or a remote traumatic lesion that never fully normalized.<Ref n={1} /><Ref n={2} /><Ref n={4} /><Ref n={5} /><Ref n={44} /><Ref n={48} /><Ref n={49} /><Ref n={59} /><Ref n={60} /><Ref n={61} /><Ref n={62} /><Ref n={63} /><Ref n={67} /><Ref n={68} /><Ref n={69} /><Ref n={70} />
      </p>
      <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2 mb-3">
        <li><strong>BBB tight-junction disruption:</strong> endothelial barrier proteins may degrade, converting a purely osmotic problem into a focal vasogenic one.</li>
        <li><strong>AQP4 dysregulation:</strong> abnormal aquaporin expression may make one area accumulate water more readily than another. Review literature on hyponatremia emphasizes early astrocytic water influx through AQP4, while brain-injury studies show injury-linked changes in AQP4 expression and polarity.<Ref n={25} /><Ref n={37} /><Ref n={49} /></li>
        <li><strong>Myelin injury:</strong> osmotic stress can damage myelin directly, creating a plausible bridge between hyponatremia and demyelinating-looking imaging patterns.<Ref n={7} /><Ref n={8} /></li>
        <li><strong>Remote-trauma persistence:</strong> post-traumatic BBB leak can persist for years, so a prior untreated contusion or hematoma is a plausible explanation for why one location kept behaving like a water sink long after the original injury, even though other mechanisms could have created that same vulnerability.<Ref n={67} /><Ref n={68} /><Ref n={69} /><Ref n={70} /></li>
        <li><strong>Hypoxia amplification:</strong> experimental and clinical literature suggests that hypoxia can worsen hyponatremic brain injury by impairing adaptive responses, while hyponatremic encephalopathy can itself be accompanied by hypoxemia through noncardiogenic pulmonary edema or hypercapnic respiratory failure.<Ref n={49} /><Ref n={56} /><Ref n={57} /><Ref n={58} /><Ref n={59} /></li>
      </ul>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">4.3 The Brain-Lung Link</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Severe symptomatic hyponatremia can injure both brain and lungs. Once cerebral edema develops, increased intracranial pressure and neurogenic stress responses may be accompanied by <strong>noncardiogenic pulmonary edema</strong>; in other patients, hypoxemia may reflect hypercapnic respiratory failure during encephalopathy.<Ref n={56} /><Ref n={57} /><Ref n={58} /> Here, the report that her lungs were full of fluid, together with oxygen saturation near 74%, fits a pattern already described in severe hyponatremic encephalopathy.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        This overlap is one reason such cases may initially look like pneumonia. Noncardiogenic pulmonary edema can present with bilateral infiltrates and respiratory distress, creating overlap with infectious or aspiration-based explanations. The discriminator is the overall syndrome: severe hypo-osmolar state, encephalopathy, edema, normal cardiac context, and improvement as sodium and brain swelling are corrected rather than a purely antibiotic-driven response.<Ref n={57} /><Ref n={58} />
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

function CardiacComplications() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">5. Cardiac Complications — Sharp Chest Pain and Hyponatremia-Triggered Stress Cardiomyopathy</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Severe hyponatremia can affect more than the brain and lungs. Review literature now specifically discusses an association between severe hyponatremia and <strong>Takotsubo syndrome</strong>, a usually reversible stress cardiomyopathy that often presents with sudden chest pain, ECG changes, troponin elevation, and characteristic ventricular ballooning despite no obstructive coronary artery disease.<Ref n={64} /><Ref n={65} /><Ref n={66} /> The proposed link runs through catecholamine surge, osmotic stress, and brain-heart signaling during severe systemic physiologic stress.<Ref n={66} />
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        In this case, she reportedly experienced stabbing chest pain on three consecutive days in the run-up to the main collapse, with each episode lasting only about 30 seconds. That is <strong>not</strong> a classic confirmed Takotsubo presentation, which more often involves more sustained chest-pain syndromes plus objective cardiac findings, and this article is not claiming an established retrospective diagnosis from symptoms alone. The value of the history is narrower: it suggests a possible <strong>Takotsubo-like brain-heart stress signal</strong> occurring just before the later seizure, hypoxemia, and fluid-filled-lung picture, and it creates a concrete chart-review question about whether those brief episodes were accompanied by ECG abnormalities, troponin elevation, echocardiographic wall-motion changes, or documentation of transient cardiomyopathy.<Ref n={64} /><Ref n={65} /><Ref n={66} />
      </p>
      <div className="border border-gray-200 rounded p-4 bg-gray-50">
        <p className="text-sm font-semibold text-gray-800 mb-2">What would strengthen this link in the records</p>
        <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-1">
          <li><strong>Documentation of the 3-day pre-collapse chest-pain sequence</strong> during confirmed or suspected hyponatremia.</li>
          <li><strong>ECG or troponin abnormalities</strong> suggesting acute myocardial stress rather than only subjective pain.</li>
          <li><strong>Echocardiographic or ventriculographic evidence</strong> of transient apical or mid-ventricular ballooning / wall-motion abnormality.</li>
          <li><strong>Recovery after sodium correction</strong> without evidence of obstructive coronary disease.<Ref n={64} /><Ref n={65} /></li>
        </ul>
      </div>
    </section>
  );
}

/* ═══ 5. LITERATURE EVIDENCE ═══ */
function LiteratureEvidence() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">6. Supporting Evidence from Peer-Reviewed Literature</h2>

      <Expandable title="6.1 Hyponatremia Producing Tumor-Mimicking Brain Lesions" defaultOpen={true}>
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
              <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Post-craniotomy focal deterioration without a new mass lesion</td><td className="p-2.5">A 2024 case report described acute hyponatremia after bifrontal craniotomy causing mental-status decline plus a unilateral fixed dilated pupil. CT showed expected postoperative changes rather than a new hematoma or other localizing lesion, and hyperosmolar therapy plus sodium correction reversed the focal neurologic deterioration. This supports the idea that low sodium can produce focal clinical worsening in already-injured postoperative brain.<Ref n={61} /></td><td className="p-2.5"><Ref n={61} /></td></tr>
              <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Acute sodium drop worsening an evolving intracranial injury</td><td className="p-2.5">In a child with aneurysmal subarachnoid hemorrhage, an inadvertent drop in serum sodium to 128 mEq/L was associated with neurologic deterioration and early transtentorial herniation on emergent CT; the findings quickly reversed after sodium correction. This is especially relevant because it shows hyponatremia can act as a secondary edema amplifier in structurally compromised brain.<Ref n={62} /></td><td className="p-2.5"><Ref n={62} /></td></tr>
              <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Review-level support in neurosurgical patients</td><td className="p-2.5">Neurosurgical review literature emphasizes that acute hyponatremia is particularly dangerous after brain insult, including subarachnoid hemorrhage, traumatic injury, intracranial procedures, and brain tumors, because the osmotic gradient promotes cerebral edema and neurologic compromise. This supports the general weak-site principle even when a paper does not show a single focal image set.<Ref n={63} /></td><td className="p-2.5"><Ref n={63} /></td></tr>
              <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Severe edema from polydipsia</td><td className="p-2.5">Primary polydipsia with normal kidneys can cause life-threatening cerebral edema.</td><td className="p-2.5"><Ref n={10} /></td></tr>
              <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Cumulative osmotic brain injury</td><td className="p-2.5">Repeated hyponatremic episodes can produce progressive brain edema with cumulative effects.</td><td className="p-2.5"><Ref n={3} /></td></tr>
              <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Hyponatremic encephalopathy is established cerebral edema</td><td className="p-2.5">Critical care literature explicitly frames symptomatic hyponatremia as cerebral edema from a hypo-osmolar state and emphasizes careful correction.</td><td className="p-2.5"><Ref n={44} /><Ref n={48} /></td></tr>
              <tr><td className="p-2.5 font-semibold">AQP4-mediated astrocyte swelling is part of the injury logic</td><td className="p-2.5">Review literature describes early hyponatremic brain swelling as water influx largely through glial cells via AQP4, helping connect low sodium to astrocytic edema biology.</td><td className="p-2.5"><Ref n={49} /></td></tr>
            </tbody>
          </table>
        </div>
      </Expandable>

      <Expandable title="6.2 Osmotic Demyelination Syndrome Mimicking Glioma">
        <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2 mb-3 mt-3">
          <li><strong>Mass-like pontine lesions</strong> from CPM have been misdiagnosed as brainstem gliomas on initial imaging.<Ref n={19} /></li>
          <li><strong>Extrapontine lesions</strong> can produce focal MRI abnormalities that evolve over time and may partially resolve.<Ref n={18} /><Ref n={35} /></li>
          <li>Some cases responded to <strong>supportive or immune-modulating therapy</strong>, confirming non-neoplastic etiology.<Ref n={7} /></li>
        </ul>
      </Expandable>

      <Expandable title="6.3 Polydipsia-Induced Hyponatremia: The Clinical Spectrum">
        <ul className="list-disc pl-6 text-sm text-gray-700 leading-relaxed space-y-2 mb-3 mt-3">
          <li><strong>Seizures and coma:</strong> acute symptomatic hyponatremia from polydipsia routinely causes seizures and coma.<Ref n={10} /><Ref n={13} /></li>
          <li><strong>Osmotic myelinolysis from polydipsia:</strong> severe polydipsia and water intoxication have been linked directly to osmotic myelinolysis with MRI changes.<Ref n={9} /></li>
          <li><strong>Reversibility:</strong> in survivors, water restriction alone may normalize imaging and neurologic function within days to weeks.<Ref n={11} /><Ref n={12} /></li>
          <li><strong>Review-level support:</strong> review literature on severe polydipsia describes progression from confusion and lethargy to seizures and death when water intoxication produces hyponatremia.<Ref n={45} /></li>
          <li><strong>Respiratory complications:</strong> symptomatic hyponatremia can coexist with severe hypoxemia, and case series describe hypoxia arising from noncardiogenic pulmonary edema or hypercapnic respiratory failure during hyponatremic encephalopathy; these findings can even resemble pneumonia early in the course.<Ref n={56} /><Ref n={57} /><Ref n={58} /></li>
          <li><strong>Cardiac stress presentations:</strong> review and case-report literature also links severe hyponatremia to Takotsubo / stress cardiomyopathy and related brain-heart stress phenomena, usually with more classic sustained chest-pain syndromes plus objective cardiac findings; in this case, the reported brief stabbing episodes are used more cautiously as a Takotsubo-like clue than as a diagnosis.<Ref n={64} /><Ref n={65} /><Ref n={66} /></li>
        </ul>
      </Expandable>

      <Expandable title="6.4 The BBB Under Osmotic Assault — Molecular Details">
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
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">7. Radiographic Comparison — Hyponatremia vs. This Patient</h2>
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
          <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wide mb-3">Figure 6B — Cleveland Clinic Hyponatremia Case: Baseline, Focal Edema, Then Resolution</h4>
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
          <p className="text-xs text-gray-600 mt-3">This is the strongest comparator in the article because it shows a localized, mass-like edema pattern emerging during hyponatremia and then reversing after sodium correction.<Ref n={60} /></p>
        </div>

        <div className="bg-white rounded border border-blue-200 p-4 mb-4">
          <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wide mb-3">Figure 6C — This Patient vs. the Strongest Hyponatremia Comparator</h4>
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
              <p className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wide mb-3">Published Hyponatremia Comparator</p>
              <div className="space-y-4">
                <img src={ccjmCtBaselineImg} alt="Published hyponatremia comparator baseline CT" className="w-full h-48 rounded border border-gray-200 object-cover object-center bg-white" />
                <img src={ccjmCtEdemaImg} alt="Published hyponatremia comparator focal edema CT" className="w-full h-48 rounded border border-gray-200 object-cover object-center bg-white" />
                <img src={ccjmCtResolvedImg} alt="Published hyponatremia comparator resolved edema CT" className="w-full h-48 rounded border border-gray-200 object-cover object-center bg-white" />
              </div>
              <p className="text-xs text-gray-600 mt-3">These published comparator images are shown separately to emphasize that they are not the patient's scans, but a documented hyponatremia case with focal edema that later reversed after sodium correction.<Ref n={60} /></p>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">These side-by-side panels do not prove diagnosis, but they keep the comparison focused on the strongest documented hyponatremia case rather than weaker or uncertain visual analogies.</p>
        </div>
      </div>
    </section>
  );
}

function DemyelinatingMimics() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">8. Additional Comparator Class — Tumefactive and Demyelinating Glioma Mimics</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        This section adds a second non-neoplastic comparator class: <strong>tumefactive demyelinating lesions</strong>. These lesions are well known for imitating glioma through mass effect, edema, incomplete ring enhancement, and suspicious geometry.<Ref n={38} /><Ref n={39} /><Ref n={46} /> The point is not that this case must be tumefactive demyelination, but that <strong>myelin-related pathology can look strikingly tumor-like</strong> on MRI.
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
          <strong>Why these images matter:</strong> osmotic and myelin-related injury can produce focal, enhancing, edematous lesions that look tumor-like on MRI. Classic osmotic demyelination is usually discussed after rapid correction of chronic hyponatremia, but the broader point is that major sodium shifts can damage myelin and create non-neoplastic radiographic patterns. Here, decades of extreme polydipsia and likely repeated sodium swings make some form of osmotic myelin injury plausible rather than simple uninterrupted tumor growth.<Ref n={18} /><Ref n={35} /><Ref n={38} /><Ref n={39} /><Ref n={46} />
        </p>
      </div>
    </section>
  );
}

function CannabinoidSection() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">9. Cannabinoid-Relevant Mechanisms and Adjunctive Rationale</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        This section is intentionally narrower than the main hyponatremia argument. It does <strong>not</strong> claim cannabinoids diagnose the lesion or exclude tumor. It asks a more limited question: whether published cannabinoid literature on edema, BBB stabilization, fluid handling, and myelin biology helps explain why these agents remain relevant as adjuncts while the core differential is still being tested.
      </p>
      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">9.1 Clickable Mini-Study Summaries</h3>
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

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">9.2 CBD and BBB Stabilization</h3>
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

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">9.3 AQP4, Glymphatic Flow, and Brain Drainage</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Aquaporin-4 is the dominant water channel at the BBB interface and is tightly linked to glymphatic and meningeal-lymphatic clearance physiology. In hyponatremia, AQP4 upregulation and mislocalization are plausible contributors to cerebral edema.<Ref n={25} /><Ref n={30} /><Ref n={49} /> Cannabinoid signaling may modulate related pathways, and one recent murine TBI study reported that CBD improved intracranial lymphatic drainage, enhanced tracer clearance, and partially restored AQP4 polarization.<Ref n={26} /><Ref n={42} /> That remains <strong>preclinical evidence</strong>, but it is directly relevant to the article’s brain-water-handling hypothesis.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        There is also a tumor-side reason to discuss AQP4 carefully: human glioblastoma studies report redistribution and upregulation of AQP4 in relation to edema biology and tumor behavior.<Ref n={52} /><Ref n={53} /> AQP4 therefore cannot be treated as evidence for only one side of the differential.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">9.4 Cannabinoids and Myelin Biology</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Reviews of experimental demyelinating disease report that cannabinoids can reduce neuroinflammation, lessen demyelination severity in some models, and in some settings support remyelination-related biology.<Ref n={40} /><Ref n={41} /> That evidence is <strong>primarily preclinical</strong>.
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
        Taken together, these reviews make it biologically reasonable to discuss oligodendrocyte protection and remyelination-related biology alongside osmotic injury and tumefactive demyelinating mimics.<Ref n={40} /><Ref n={41} /> They do <strong>not</strong> show that CBD or THC can reverse a human lesion of this size or explain away a genuine tumor; they simply keep cannabinoids mechanistically relevant in a scenario where edema control, inflammation, and possible myelin repair may all matter.
      </p>
    </section>
  );
}

/* ═══ 9. LIPOPHILICITY MINI-HYPOTHESIS ═══ */
  function LipophilicityHypothesis() {
   return (
     <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">10. The Lipophilic Shield — A Mini-Hypothesis on Cannabinoid Polarity and Brain Water Management</h2>

      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-5 mb-6">
        <p className="text-sm font-bold text-indigo-900 mb-2 flex items-center gap-2"><FlaskConical className="w-4 h-4" /> Speculative Sub-Hypothesis</p>
        <p className="text-sm text-indigo-800 leading-relaxed">
          The following section is intentionally speculative. It is included as a hypothesis-generating observation rather than an established claim: perhaps the extreme lipophilicity of cannabinoids helps reinforce injured lipid membranes in a way that modestly favors water exclusion.
        </p>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">10.1 The Polarity Numbers</h3>
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

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">10.2 The Visual Intuition</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        The everyday observation that THC/CBD oil is hard to remove with water but dissolves readily in oil is chemically real. The article’s intuition is not that cannabinoids literally “squeegee” water out of the brain, but that their membrane affinity may help reinforce lipid barriers while receptor-mediated pathways support the tissue’s own repair response.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mt-4 mb-2">10.3 Testable Predictions</h3>
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
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">11. Verification Strategy — The Practical Test</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        This hypothesis makes a falsifiable prediction: if hyponatremia, focal BBB disruption, and/or secondary demyelinating injury are materially contributing to the imaging appearance, the lesion complex should <strong>partially regress, fluctuate downward, or otherwise become less conspicuous</strong> after sustained fluid control, clinician-guided sodium normalization, and a reasonable recovery interval before repeat MRI. In practical terms, if hyponatremia is exaggerating glioma size or creating a pool of waterlogged brain around a real lesion, better sodium control should help reveal that by letting some of the reversible water component dry out before the next scan. The same logic applies to the acute collapse: if the syndrome was substantially sodium-driven, neurologic and respiratory abnormalities should improve together as the osmotic crisis resolves.<Ref n={44} /><Ref n={56} /><Ref n={57} /><Ref n={58} />
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
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">4</td><td className="p-2.5">Repeat MRI with contrast ± interval CT</td><td className="p-2.5">Ideally after ~4-8 weeks of fluid control and supportive therapy, if clinically feasible</td><td className="p-2.5">This is the key practical discriminator. If the brain is given a real chance to recover through fluid restriction, sodium stabilization, and supportive care, meaningful lesion improvement would argue for a reversible water-handling component or for hyponatremia-driven exaggeration of a real lesion, even if it would not fully settle whether the process is purely osmotic, partly demyelinating, or hybrid.</td></tr>
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
        Respiratory findings should still be reviewed conventionally. ICU documentation of pulmonary edema, bilateral infiltrates, normal cardiac function, or rapid improvement with sodium correction rather than a classic infectious course would materially strengthen the hyponatremia-led interpretation of the acute collapse.<Ref n={57} /><Ref n={58} />
      </p>
    </section>
  );
}

/* ═══ 11. DISCUSSION ═══ */
 function Discussion() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">12. Discussion</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        The strongest parts of this hypothesis are the chronology, the normal renal/SIADH work-up, the acute brain-lung syndrome, and the potentially transient ~10–11 mm secondary nodule. Together, these features justify serious consideration of a hyponatremia-led explanation, whether purely osmotic, partly demyelinating, or hybrid with an underlying tumor. Especially important is the published glioblastoma pseudoprogression case in which hyponatremia itself drove reversible encephalopathy and radiographic worsening, because it shows that apparent progression on imaging does not automatically equal true tumor growth.<Ref n={15} />
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        The article's practical argument is narrower than “the doctors are wrong” or “this cannot be glioma.” It is that if the lesion is currently being treated as presumed glioma before final pathology is fully settled, then a potentially reversible hyponatremic water component still deserves attention because it could distort both apparent lesion size and apparent progression. In that scenario, final pathology plus interval imaging after better sodium control may be diagnostically more informative than relying on visual resemblance alone.<Ref n={14} /><Ref n={29} /><Ref n={46} /><Ref n={47} /><Ref n={50} /><Ref n={51} />
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        <strong>Limitations</strong> are substantial. This hypothesis is authored by a family member, not a clinician; there is no direct sodium-at-time-of-MRI correlation yet; imaging overlap with tumor remains real; and the literature supports diffuse edema more strongly than focal tumor-like injury. The low oxygen finding and reported lung fluid are supportive but not specific, and several mechanistic pathways discussed here — especially AQP4 biology — also appear in genuine glioblastoma edema biology.<Ref n={52} /><Ref n={53} /><Ref n={56} /><Ref n={57} /><Ref n={58} /><Ref n={59} /> The waterslide chronology is relevant because it offers one plausible source of focal BBB vulnerability, but it cannot be elevated above the rest of the differential without stronger imaging, pathology, or historical evidence. The article’s more defensible bottom line is narrower: whatever started the focal lesion biology, chronic hyponatremia may still be materially aggravating it. Its credibility ultimately rises or falls with the repeat MRI and the eventual tissue story.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed">
        Cannabinoids remain an interesting mechanistic adjunct because of their published relevance to edema biology, BBB stabilization, and — more speculatively — myelin-related recovery. The lipophilic shield mini-hypothesis in Section 10 is the most speculative part of the article and should be treated as hypothesis-generating rather than evidentiary.
      </p>
    </section>
  );
}

/* ═══ 12. CONCLUSION ═══ */
 function Conclusion() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">13. Conclusion</h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        We propose that this 64-year-old woman's imaging abnormalities may be substantially shaped by 20 years of polydipsia-induced chronic hyponatremia. In this framing, the acute presentation and later MRI findings belong to the same broader sodium-driven story. The leading non-neoplastic reading is focal osmotic injury with BBB disruption; a second is osmotic injury with secondary demyelinating change; and a third is a hybrid model in which a hidden neoplasm exists but hyponatremia is materially distorting the radiographic picture. A prior waterslide head injury remains a plausible contributor to <strong>where</strong> the vulnerability localized, but it is not presented here as the single established cause of BBB disruption.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Verification through fluid control, clinician-guided sodium normalization, supportive therapy, and repeat MRI offers a <strong>practical test of reversibility</strong>. If the lesion complex regresses, a reversible water-handling component becomes much harder to dismiss. If it does not, conventional oncologic management should proceed without delay. The purpose of this article is not to replace standard diagnosis, but to show that chronic extreme hyponatremia, focal BBB disruption, and demyelinating mimicry remain biologically plausible in this case. The strongest final takeaway is therefore not that one mechanism has been proven, but that <strong>chronic hyponatremia is very likely aggravating the condition</strong> and deserves serious clinical attention even if tumor, demyelination, trauma, or several processes at once are part of the underlying story.
      </p>
    </section>
  );
}

/* ═══ 13. REFERENCES ═══ */
function References() {
  return (
    <section className="mb-10" id="hypo-refs">
      <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 border-b border-gray-200 pb-1">14. References</h2>
      <ol className="list-decimal pl-6 text-sm text-gray-600 leading-relaxed space-y-2">
        {REFS.map(r => (
          <li key={r.n} id={`hypo-ref-${r.n}`}>
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
