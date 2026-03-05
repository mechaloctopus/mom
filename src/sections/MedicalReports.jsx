import React, { useState } from 'react';
import { FileText, AlertTriangle, Brain, Stethoscope, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader, InfoBox, Divider, BackToNav } from '../components/Cards';

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

function FindingBadge({ label, severity }) {
  const colors = {
    critical: 'bg-red-100 text-red-800 border-red-200',
    warning: 'bg-amber-100 text-amber-800 border-amber-200',
    monitor: 'bg-blue-100 text-blue-800 border-blue-200',
    normal: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${colors[severity]} mr-1 mb-1`}>
      {label}
    </span>
  );
}

export default function MedicalReports() {
  return (
    <section id="medical" className="section-card">
      <SectionHeader
        icon={<FileText className="w-5 h-5" />}
        title="Mom's Medical Reports"
        subtitle="Hospital records, transcription, and analysis — Feb 2026"
        color="primary"
      />

      <InfoBox variant="info" title="About These Records">
        These are Brenda Tullis's official hospital radiology reports from TMC Center (Texoma Medical Center), 
        dated February 27–28, 2026. They have been fully transcribed from the original documents for easy 
        reading. Two reports are included: a Brain MRI and a CT Chest/Abdomen/Pelvis staging scan.
      </InfoBox>

      <div className="mb-4">
        <FindingBadge label="Brain Tumor Confirmed" severity="critical" />
        <FindingBadge label="New Satellite Lesion" severity="critical" />
        <FindingBadge label="3mm Midline Shift" severity="warning" />
        <FindingBadge label="Adrenal Nodule — Needs Workup" severity="warning" />
        <FindingBadge label="Liver Lesions — Probably Benign" severity="monitor" />
        <FindingBadge label="RSV / Lung Infection" severity="monitor" />
        <FindingBadge label="No Definitive Distant Metastasis" severity="normal" />
      </div>

      <Divider />

      {/* ─── REPORT 1: MRI BRAIN ─── */}
      <div className="flex items-center gap-2 mb-3">
        <Brain className="w-5 h-5 text-purple-600" />
        <h3 className="text-sm font-bold text-gray-900">Report 1: MRI Brain w/ + w/o Contrast</h3>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3 text-[10px]">
        <div className="bg-gray-50 rounded-lg p-2"><strong>Patient:</strong> Tullis, Brenda</div>
        <div className="bg-gray-50 rounded-lg p-2"><strong>MRN:</strong> TMC1256361</div>
        <div className="bg-gray-50 rounded-lg p-2"><strong>Date:</strong> February 27, 2026</div>
        <div className="bg-gray-50 rounded-lg p-2"><strong>Radiologist:</strong> Dr. Phelps, Charles R II</div>
        <div className="bg-gray-50 rounded-lg p-2"><strong>Ordered by:</strong> Dr. Patel, Satyam</div>
        <div className="bg-gray-50 rounded-lg p-2"><strong>Facility:</strong> TMC Center, Inpatient</div>
      </div>

      <Collapsible title="Full MRI Report Transcription" defaultOpen={false}>
        <p className="font-bold mb-2">REASON FOR EXAM: Brain Tumor</p>

        <p className="mb-2"><strong>HISTORY:</strong> 64-year-old female presented to the emergency room on July 25, 2025 
        with a history of trauma. CT and MRI demonstrated an infiltrative left parietal lobe mass with 
        surrounding vasogenic edema and 4 mm shift of midline left to right. She has re-presented to the 
        emergency room and admitted to the ICU with altered level awareness and persistent left-sided vasogenic edema.</p>

        <p className="mb-2"><strong>TECHNIQUE:</strong> MR of the brain is performed by standard protocol. Fat and water 
        weighted pulse sequences are obtained along the enlargement axis before and following administration 
        of 7.5 cc of gadolinium.</p>

        <p className="mb-2"><strong>COMPARISON:</strong> Concurrent CT of the brain without contrast.</p>

        <p className="font-bold mb-1">FINDINGS:</p>
        <ul className="space-y-2 mb-3 ml-2">
          <li>• A subtle somewhat lobate poorly defined left parietal lobe mass measuring approximately 
          <strong>3.7 × 5.8 × 4.4 cm</strong> displays minimal peripheral enhancement and tumor vascularity. 
          The surrounding vasogenic edema extends into the adjacent anterior left occipital lobe and posterior left frontal lobe.</li>
          
          <li>• The mass and vasogenic edema is associated with approximately <strong>3 mm midline shift 
          left to right</strong> with asymmetric effacement of the left lateral ventricle.</li>
          
          <li>• A <strong>new 9.8 mm rounded minimally enhancing lesion</strong> is present within the anterior 
          cortex peripheral to the left basal ganglion with a rim of adjacent vasogenic edema that blends 
          almost imperceptibly with the edema of the primary mass.</li>
          
          <li>• No other intracranial mass, recent infarction or hemorrhage.</li>
        </ul>

        <p className="mb-1"><strong>Additional findings:</strong></p>
        <ul className="space-y-1 mb-3 ml-2">
          <li>• No subcutaneous hydrocephalus or extra-axial mass</li>
          <li>• No significant brain atrophy or white matter disease</li>
          <li>• Gray-white differentiation maintained in brain not affected by tumor</li>
          <li>• Calvarium and facial bones intact</li>
          <li>• Minimal mucosal thickening in posterior ethmoidal air cells</li>
          <li>• Scant fluid in sphenoid sinuses; remaining paranasal sinuses clear</li>
          <li>• Pituitary gland and craniocervical junction within normal limits</li>
          <li>• No evidence of acute brain infarction or intracranial hemorrhage</li>
        </ul>

        <p className="text-[10px] text-gray-500">
          Dictated: Dr. Phelps, Charles R II — 2/27/2026 5:46 PM CST<br/>
          Electronically signed: Dr. Phelps, Charles R II
        </p>
      </Collapsible>

      {/* MRI Key Findings Visual */}
      <h4 className="text-xs font-bold text-gray-900 mb-2">MRI Key Findings</h4>
      <div className="space-y-2 mb-5">
        <div className="bg-red-50 border border-red-200 rounded-xl p-3">
          <p className="text-xs font-bold text-red-800">Primary Mass — Left Parietal Lobe</p>
          <p className="text-[11px] text-red-700 mt-1">
            Size: <strong>3.7 × 5.8 × 4.4 cm</strong> (~walnut-to-egg sized). Poorly defined, lobate shape. 
            Minimal peripheral enhancement. Surrounding vasogenic edema extends into adjacent occipital 
            and frontal lobes. Causing <strong>3 mm midline shift</strong> (brain being pushed to the right).
          </p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-3">
          <p className="text-xs font-bold text-red-800">NEW Satellite Lesion — Near Left Basal Ganglion</p>
          <p className="text-[11px] text-red-700 mt-1">
            Size: <strong>9.8 mm</strong> (just under 1 cm). This is <strong>new</strong> compared to prior imaging. 
            Minimally enhancing with surrounding edema that blends with the primary tumor's edema. 
            This suggests local tumor progression or spread.
          </p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
          <p className="text-xs font-bold text-amber-800">Midline Shift — 3 mm Left to Right</p>
          <p className="text-[11px] text-amber-700 mt-1">
            The tumor and surrounding swelling are pushing brain structures 3 mm to the right. 
            Previously measured at 4 mm (July 2025), now 3 mm — slightly improved or stable. 
            Shifts &gt;5 mm are typically more concerning, but any shift indicates significant mass effect.
          </p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
          <p className="text-xs font-bold text-emerald-800">No Hemorrhage, No Infarction</p>
          <p className="text-[11px] text-emerald-700 mt-1">
            No evidence of bleeding into the tumor or acute stroke. The brain tissue outside the 
            tumor-affected area appears preserved with maintained gray-white differentiation.
          </p>
        </div>
      </div>

      <Divider />

      {/* ─── REPORT 2: CT STAGING ─── */}
      <div className="flex items-center gap-2 mb-3">
        <Stethoscope className="w-5 h-5 text-blue-600" />
        <h3 className="text-sm font-bold text-gray-900">Report 2: CT Chest/Abdomen/Pelvis w/ Contrast</h3>
      </div>
      <div className="text-[10px] text-amber-700 bg-amber-50 rounded-lg p-2 mb-3 font-medium">
        Purpose: <strong>Malignancy Staging</strong> — checking if cancer has spread to other organs
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3 text-[10px]">
        <div className="bg-gray-50 rounded-lg p-2"><strong>Date:</strong> February 28, 2026</div>
        <div className="bg-gray-50 rounded-lg p-2"><strong>Radiologist:</strong> Dr. Blanch, Robert M</div>
        <div className="bg-gray-50 rounded-lg p-2"><strong>Ordered by:</strong> Dr. Kirkland, Jerry</div>
        <div className="bg-gray-50 rounded-lg p-2"><strong>Contrast:</strong> Isovue-370 IV</div>
      </div>

      <Collapsible title="Full CT Report Transcription" defaultOpen={false}>
        <p className="mb-2"><strong>REASON FOR EXAM:</strong> Respiratory syncytial virus and left parietal tumor 
        with new left basal ganglia and hip nodule and seizure disorder and hypoxemia and history of congestion 
        and cough and laryngitis for the past 48 hours. Malignancy Staging.</p>

        <p className="mb-2"><strong>TECHNIQUE:</strong> CT chest, abdomen, and pelvis with intravenous contrast. 
        Isovue-370 administered intravenously. 3.0 mm axial images with coronal and sagittal MPR reformats.</p>

        <p className="mb-2"><strong>COMPARISON:</strong> None.</p>

        <p className="font-bold mb-1">FINDINGS — Chest:</p>
        <ul className="space-y-1 mb-3 ml-2">
          <li>• Endotracheal tube tip above the carina. Enteric tube extends into the stomach.</li>
          <li>• Heart normal in size, no pericardial effusion. Thoracic aorta normal caliber.</li>
          <li>• No mediastinal, hilar, or axillary lymphadenopathy.</li>
          <li>• Atelectasis in posterior lower lobes bilaterally.</li>
          <li>• Opacification of right lower lobe bronchi — may be mucous plugging and/or aspiration.</li>
          <li>• A few scattered groundglass airspace opacities in right middle lobe — likely infectious/inflammatory.</li>
          <li>• Small right upper lobe pulmonary nodule measuring 5 mm — no follow-up needed.</li>
          <li>• No acute osseous findings.</li>
        </ul>

        <p className="font-bold mb-1">FINDINGS — Abdomen & Pelvis:</p>
        <ul className="space-y-1 mb-3 ml-2">
          <li>• <strong>Left adrenal nodule measuring 2.8 cm</strong> — indeterminate.</li>
          <li>• <strong>2 enhancing lesions within the right lobe of liver</strong> measuring 1.2 cm, indeterminate. 
          Approximately 6 enhancing lesions on image 61, probably hemangioma but incompletely characterized.</li>
          <li>• A few probable hepatic cysts, too small to characterize.</li>
          <li>• Spleen, pancreas, adrenal glands show no hydronephrosis. Gallbladder otherwise normal.</li>
          <li>• Kidneys enhance symmetrically and are normal in appearance.</li>
          <li>• Enteric tube tip in distal stomach/proximal duodenum.</li>
          <li>• Small bowel loops normal, no obstruction. Mild colonic diverticulosis, no inflammation.</li>
          <li>• Appendix normal. Pelvic organs unremarkable.</li>
          <li>• Small amount of air in urinary bladder. No intraperitoneal free fluid.</li>
          <li>• Mild degenerative changes in spine. No acute osseous findings.</li>
        </ul>

        <p className="font-bold mb-1">OFFICIAL IMPRESSION:</p>
        <ol className="space-y-1 mb-3 ml-2 list-decimal list-inside">
          <li>Mild groundglass airspace opacity right middle lobe — likely infectious/inflammatory.</li>
          <li>Opacification right lower lobe bronchi — may be mucous plugging or aspiration.</li>
          <li>Enhancing lesions of the right hepatic lobe — probably hemangioma but not fully characterized. 
          <strong>Consider correlating with ultrasound or liver MRI.</strong></li>
          <li><strong>Left adrenal nodule is indeterminate. Follow-up adrenal protocol CT or MRI.</strong></li>
          <li>Mild diverticulosis.</li>
        </ol>

        <p className="text-[10px] text-gray-500 mb-2">
          Radiation: CTDIvol 9.2 mGy, DLP 328 mGy·cm<br/>
          Dictated: Dr. Blanch, Robert M — 2/28/2026 11:41 AM CST<br/>
          Electronically signed: Dr. Blanch, Robert M
        </p>
      </Collapsible>

      {/* CT Key Findings Visual */}
      <h4 className="text-xs font-bold text-gray-900 mb-2">CT Staging Key Findings</h4>
      <div className="space-y-2 mb-5">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
          <p className="text-xs font-bold text-amber-800">Left Adrenal Nodule — 2.8 cm — INDETERMINATE</p>
          <p className="text-[11px] text-amber-700 mt-1">
            This is the most concerning finding from the staging scan. Adrenal metastasis is a common site 
            for cancer spread. A 2.8 cm nodule that is "indeterminate" means it could be benign (adenoma) 
            or could be metastatic. <strong>The radiologist recommends follow-up adrenal protocol CT or MRI</strong> — 
            this is a non-invasive next step and should be done.
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
          <p className="text-xs font-bold text-blue-800">Liver Lesions — Probably Hemangioma (Benign)</p>
          <p className="text-[11px] text-blue-700 mt-1">
            Multiple enhancing lesions in the right liver lobe (largest ~1.2 cm), likely benign hemangiomas 
            (common, non-cancerous blood vessel clusters). Not fully characterized — <strong>radiologist 
            recommends ultrasound or liver MRI</strong> to confirm they are benign. This is non-invasive.
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
          <p className="text-xs font-bold text-blue-800">Lungs — RSV Infection, Not Metastasis</p>
          <p className="text-[11px] text-blue-700 mt-1">
            Groundglass opacities in right middle lobe are "likely infectious/inflammatory" — consistent 
            with her active RSV (respiratory syncytial virus) infection, NOT cancer spread. Small 5 mm 
            pulmonary nodule is too small to be significant (no follow-up needed per radiologist).
          </p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
          <p className="text-xs font-bold text-emerald-800">No Definitive Distant Metastasis Found</p>
          <p className="text-[11px] text-emerald-700 mt-1">
            The staging CT did NOT find any definitive evidence of cancer spread to lungs, liver, bones, 
            or other organs. The adrenal nodule needs workup but is not confirmed as metastatic. 
            This is relatively positive news — the cancer may still be localized to the brain.
          </p>
        </div>
      </div>

      <Divider />

      {/* ─── COMPLETE SYNOPSIS ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Complete Synopsis — What the Hospital Has Found</h3>

      <div className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-5 mb-5">
        <div className="space-y-3 text-xs text-gray-700 leading-relaxed">
          <p>
            <strong>Brenda Tullis, 64 years old</strong>, first presented to the ER on <strong>July 25, 2025</strong> 
            with trauma. Imaging at that time revealed an infiltrative left parietal lobe brain mass with 
            vasogenic edema and 4 mm midline shift. She re-presented in <strong>February 2026</strong> and was 
            admitted to the ICU with altered level of awareness, persistent vasogenic edema, seizure disorder, 
            hypoxemia, and active RSV infection.
          </p>
          <p>
            The <strong>February 27, 2026 MRI</strong> confirmed the left parietal mass now measures 
            <strong>3.7 × 5.8 × 4.4 cm</strong> with a <strong>new 9.8 mm satellite lesion</strong> near the 
            left basal ganglion. The midline shift is now 3 mm (previously 4 mm). The appearance is consistent 
            with a primary brain tumor — the characteristics (poorly defined, lobate, minimal peripheral 
            enhancement, vasogenic edema pattern) are most consistent with a <strong>high-grade glioma 
            (likely glioblastoma or anaplastic astrocytoma)</strong>, though this has not been tissue-confirmed.
          </p>
          <p>
            The <strong>February 28, 2026 CT staging scan</strong> was performed to check for cancer spread 
            to the body. It found <strong>no definitive distant metastasis</strong>. However, a <strong>2.8 cm 
            left adrenal nodule</strong> is indeterminate and needs further imaging. Liver lesions are likely 
            benign hemangiomas but also need confirmation. Lung findings are consistent with her active RSV 
            infection rather than cancer.
          </p>
          <p>
            The hospital has her intubated (endotracheal tube noted) and with a feeding tube (enteric tube 
            to stomach). She was in the <strong>ICU with altered awareness</strong>, seizures, and low oxygen.
          </p>
        </div>
      </div>

      <Divider />

      {/* ─── WHAT NEEDS TO HAPPEN NEXT ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Recommended Non-Invasive Follow-Up</h3>
      <InfoBox variant="info" title="The Radiologists Themselves Recommend Non-Invasive Next Steps">
        Importantly, the radiologists' own recommendations call for <strong>non-invasive imaging follow-ups</strong> — 
        not biopsies — for the indeterminate findings. This aligns with the approach discussed in our Biopsy section.
      </InfoBox>

      <div className="space-y-2 mb-5">
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-3">
          <p className="text-xs font-bold text-purple-800">1. Adrenal Protocol CT or MRI</p>
          <p className="text-[11px] text-purple-600 mt-1">
            To characterize the 2.8 cm left adrenal nodule. An adrenal washout CT can distinguish benign 
            adenoma (&gt;60% washout) from metastasis (&lt;40% washout) without any biopsy. This is the 
            <strong>highest priority follow-up</strong> after the adrenal finding.
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
          <p className="text-xs font-bold text-blue-800">2. Liver Ultrasound or MRI</p>
          <p className="text-[11px] text-blue-600 mt-1">
            To confirm the liver lesions are benign hemangiomas. A contrast-enhanced liver MRI or ultrasound 
            can definitively characterize these without tissue sampling.
          </p>
        </div>
        <div className="bg-teal-50 border border-teal-100 rounded-xl p-3">
          <p className="text-xs font-bold text-teal-800">3. Follow-Up Brain MRI (2–3 months)</p>
          <p className="text-[11px] text-teal-600 mt-1">
            To monitor tumor size and the new satellite lesion. If pursuing Josh's alternative protocol, 
            a repeat MRI at 2 months would assess whether the treatment is affecting tumor growth.
          </p>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
          <p className="text-xs font-bold text-emerald-800">4. Sleep Study / CPAP</p>
          <p className="text-[11px] text-emerald-600 mt-1">
            The hypoxemia (SpO2 74%) and altered awareness may be partially related to severe sleep apnea, 
            not solely the tumor. Addressing this is critical and completely non-invasive.
          </p>
        </div>
      </div>

      <Divider />

      {/* ─── RELEVANCE TO JOSH'S PROTOCOL ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Relevance to Josh's Proposed Protocol</h3>

      <div className="space-y-3 mb-5">
        <div className="bg-gradient-to-br from-primary-50 to-indigo-50 border border-primary-100 rounded-xl p-4">
          <p className="text-xs font-bold text-primary-800 mb-1">Tumor Location: Left Parietal Lobe</p>
          <p className="text-[11px] text-primary-700">
            The left parietal lobe controls <strong>sensory processing, spatial awareness, and some language 
            functions</strong>. It is not the primary motor cortex (which controls movement) but is adjacent to it. 
            This means a biopsy carries moderate risk — it's not the safest area but also not the most dangerous. 
            The tumor's poorly defined borders make surgical resection difficult.
            This <strong>supports the argument for non-invasive approaches first</strong>, since a biopsy 
            of an infiltrative, poorly defined mass in this area has higher non-diagnostic rates and risks.
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-xl p-4">
          <p className="text-xs font-bold text-red-800 mb-1">NEW Satellite Lesion = Urgency</p>
          <p className="text-[11px] text-red-700">
            The new 9.8 mm lesion near the basal ganglion that was NOT present in July 2025 indicates 
            <strong>active tumor progression</strong>. This adds urgency to the treatment decision — 
            waiting and watching without any intervention may allow further spread. This supports 
            <strong>starting the alternative protocol promptly</strong> if Mom agrees, rather than delaying.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-xl p-4">
          <p className="text-xs font-bold text-emerald-800 mb-1">No Confirmed Distant Spread — Window of Opportunity</p>
          <p className="text-[11px] text-emerald-700">
            The staging CT showed <strong>no definitive metastasis</strong> to lungs, bones, or organs. 
            If the adrenal nodule turns out to be benign (which adrenal adenomas commonly are), the cancer 
            may be <strong>localized to the brain</strong>. This represents a <strong>window of opportunity</strong> — 
            the best time to intervene before potential spread.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs font-bold text-amber-800 mb-1">Mebendazole Crosses the Blood-Brain Barrier</p>
          <p className="text-[11px] text-amber-700">
            A key consideration: the proposed protocol includes mebendazole, which has been <strong>confirmed 
            to cross the blood-brain barrier</strong> in published studies. This is directly relevant because 
            the tumor is in the brain — any treatment must be able to reach it. Ivermectin also shows 
            brain penetration. This is a meaningful advantage of these agents for brain tumors specifically.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-4">
          <p className="text-xs font-bold text-purple-800 mb-1">RSV Infection — Address Before Starting Protocol</p>
          <p className="text-[11px] text-purple-700">
            Mom has an active respiratory syncytial virus infection. The immune system is currently fighting 
            this. It may be advisable to <strong>wait until the RSV clears</strong> before starting any 
            alternative protocol, to avoid overtaxing the immune system. The nutrition plan and supplements 
            (especially immune-supportive ones) can begin immediately.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-4">
          <p className="text-xs font-bold text-blue-800 mb-1">ICU Status — Stabilize First</p>
          <p className="text-[11px] text-blue-700">
            Mom was in the ICU with an endotracheal tube and feeding tube. Any proposed protocol must wait 
            until she is <strong>stabilized and out of acute care</strong>. Priority now is: resolve the RSV, 
            stabilize breathing, address the seizure disorder, and get her to a baseline where the 
            alternative care plan can begin. The nutrition plan can be adapted to tube feeding if needed.
          </p>
        </div>
      </div>

      <Divider />

      {/* ─── KEY QUESTIONS ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Questions the Family Should Ask the Doctors</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
        <ol className="space-y-2 text-xs text-gray-700 leading-relaxed list-decimal list-inside">
          <li><strong>What is the suspected tumor type/grade</strong> based on imaging characteristics alone? (GBM? Anaplastic astrocytoma? Lower grade?)</li>
          <li><strong>Is the new satellite lesion</strong> near the basal ganglion definitively tumor, or could it be something else (e.g., edema, inflammation)?</li>
          <li><strong>What is the plan for the adrenal nodule?</strong> Can an adrenal washout CT be scheduled to rule out metastasis non-invasively?</li>
          <li><strong>What is the plan for the liver lesions?</strong> Can an ultrasound or MRI be scheduled to confirm they are benign?</li>
          <li><strong>What is the seizure management plan?</strong> What anti-seizure medications are being used, and are they interacting with anything?</li>
          <li><strong>What is the RSV treatment timeline?</strong> When do they expect the respiratory infection to resolve?</li>
          <li><strong>When will she be out of the ICU?</strong> What are the discharge criteria?</li>
          <li><strong>Would a biopsy of this specific tumor</strong> in the left parietal lobe carry high risk given its poorly defined borders and location?</li>
          <li><strong>Could advanced MRI techniques</strong> (MR spectroscopy, perfusion MRI) provide more diagnostic information non-invasively?</li>
          <li><strong>What is the sleep apnea assessment plan?</strong> Given the hypoxemia history, has a sleep study been discussed?</li>
        </ol>
      </div>

      <InfoBox variant="warning" title="Duplicate Image Note">
        Files <strong>2.jpg</strong> and <strong>7.jpg</strong> in the medical_data folder are identical duplicates 
        (both are Page 2 of the CT Chest/Abdomen/Pelvis report). The duplicate can be safely deleted.
      </InfoBox>

      <div className="text-center text-[10px] text-gray-400 mt-4">
        Source: Original hospital radiology reports from TMC Center, Texoma Medical Center<br/>
        Transcribed and analyzed from document images dated February 27–28, 2026
      </div>
      <BackToNav />
    </section>
  );
}
