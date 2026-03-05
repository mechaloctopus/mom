import React from 'react';
import { Microscope } from 'lucide-react';
import { SectionHeader, StudyCard, TestimonialCard, ProConCard, InfoBox, Divider } from '../components/Cards';
import XEmbed from '../components/XEmbed';

export default function Biopsy() {
  return (
    <section id="biopsy" className="section-card">
      <SectionHeader
        icon={<Microscope className="w-5 h-5" />}
        title="Biopsy Considerations"
        subtitle="When to biopsy and when to hold off"
        color="amber"
      />

      <InfoBox variant="info" title="Current Situation">
        The doctor has recommended a biopsy to determine more about the brain tumor (type, grade, 
        molecular markers like MGMT methylation, IDH mutation). However, biopsies carry risks — 
        especially for brain tumors in sensitive locations.
      </InfoBox>

      <h3 className="text-sm font-bold text-gray-900 mb-3">When a Biopsy is Important</h3>
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-4">
        <ul className="space-y-2 text-xs text-emerald-800 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="font-bold text-emerald-600 mt-0">1.</span>
            <span><strong>Treatment planning:</strong> Knowing the exact tumor type (GBM vs. lower-grade glioma vs. metastasis) fundamentally changes treatment options and prognosis</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-emerald-600 mt-0">2.</span>
            <span><strong>Molecular profiling:</strong> MGMT methylation status predicts temozolomide response. IDH mutation status is a major prognostic factor (IDH-mutant tumors have much better outcomes)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-emerald-600 mt-0">3.</span>
            <span><strong>Tumor is accessible:</strong> Located in a non-eloquent area of the brain where a stereotactic needle biopsy can be safely performed</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-emerald-600 mt-0">4.</span>
            <span><strong>Diagnosis is uncertain:</strong> Imaging alone cannot definitively distinguish tumor types — lymphoma, abscess, and demyelination can mimic gliomas on MRI</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-emerald-600 mt-0">5.</span>
            <span><strong>Clinical trials:</strong> Most trials require tissue confirmation and molecular data before enrollment</span>
          </li>
        </ul>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-3">When to Be Cautious About Biopsy</h3>
      <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-4">
        <ul className="space-y-2 text-xs text-red-800 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="font-bold text-red-600">1.</span>
            <span><strong>Eloquent brain areas:</strong> Tumor near speech, motor, or vision centers — higher risk of permanent neurological deficits</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-red-600">2.</span>
            <span><strong>Deeply seated tumors:</strong> Brainstem, thalamus, or deep midline lesions — stereotactic biopsy has higher complication rates (5–10% morbidity)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-red-600">3.</span>
            <span><strong>Bleeding risk:</strong> Highly vascular tumors or patients on anticoagulants have elevated hemorrhage risk (1–3% significant hemorrhage rate from stereotactic biopsy)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-red-600">4.</span>
            <span><strong>Patient frailty:</strong> If the patient's overall condition makes surgery/anesthesia high-risk</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-red-600">5.</span>
            <span><strong>Tumor seeding concern:</strong> Though rare for brain tumors, there is a theoretical risk of spreading tumor cells along the needle tract</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-red-600">6.</span>
            <span><strong>Injury to the tumor:</strong> A biopsy that is too invasive could injure the tumor in a way that it cannot heal, creating additional complications</span>
          </li>
        </ul>
      </div>

      <ProConCard
        pros={[
          'Provides definitive diagnosis — treatment cannot be optimized without knowing the exact tumor type',
          'Molecular markers (MGMT, IDH) are critical prognostic and treatment-selection tools',
          'Modern stereotactic techniques are minimally invasive with ~95% diagnostic accuracy',
          'Allows access to clinical trials requiring tissue confirmation',
          'May reveal a more treatable tumor than suspected on imaging alone',
        ]}
        cons={[
          'Risk of hemorrhage (1–3% for stereotactic biopsy, can be fatal in rare cases)',
          'Risk of neurological deficit (1–5% depending on tumor location)',
          'Non-diagnostic rate of 5–10% (may need repeat procedure)',
          'Theoretical risk of tumor seeding along needle tract',
          'Risk of injuring the tumor causing complications that would not have occurred otherwise',
          'General anesthesia risks for frail patients',
          'Psychological stress of an invasive procedure',
        ]}
      />

      <Divider />

      <h3 className="text-sm font-bold text-gray-900 mb-3">Biopsy Statistics to Know</h3>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-blue-50 rounded-xl p-3">
          <p className="text-lg font-bold text-blue-700">~95%</p>
          <p className="text-[10px] text-blue-600 font-medium">Diagnostic accuracy of stereotactic biopsy</p>
        </div>
        <div className="bg-amber-50 rounded-xl p-3">
          <p className="text-lg font-bold text-amber-700">5–10%</p>
          <p className="text-[10px] text-amber-600 font-medium">Non-diagnostic rate (may need repeat)</p>
        </div>
        <div className="bg-red-50 rounded-xl p-3">
          <p className="text-lg font-bold text-red-700">1–3%</p>
          <p className="text-[10px] text-red-600 font-medium">Significant hemorrhage risk</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-3">
          <p className="text-lg font-bold text-purple-700">1–5%</p>
          <p className="text-[10px] text-purple-600 font-medium">Risk of new neurological deficit</p>
        </div>
      </div>

      <InfoBox variant="warning" title="Key Consideration">
        The decision to biopsy should be individualized based on tumor location, the patient's overall 
        health status, and what additional information the biopsy would provide for treatment decisions. 
        In some cases, advanced MRI techniques (perfusion, spectroscopy) and liquid biopsy (blood-based 
        tumor markers) may provide useful information non-invasively, though these are not yet substitutes 
        for tissue diagnosis in most situations.
      </InfoBox>

      <Divider />

      {/* ───── NEEDLE TRACT SEEDING ───── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">The Case Against Premature Biopsies</h3>

      <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-4">
        <h4 className="text-sm font-bold text-red-900 mb-2">Needle-Tract Seeding & Biopsy-Induced Metastasis</h4>
        <p className="text-xs text-red-800 leading-relaxed mb-3">
          A growing body of research suggests that biopsies — particularly needle biopsies of cancerous tumors — 
          may inadvertently cause more harm than good. When a tumor is pierced during a biopsy, it can release 
          cancerous cells into the bloodstream, potentially causing the cancer to spread to other parts of the body.
        </p>
        <p className="text-xs text-red-800 leading-relaxed mb-3">
          <strong>Needle-tract seeding</strong> occurs when cancer cells are dislodged by a biopsy needle and 
          grow along its path. The body can brilliantly self-contain tumors in a protective fibrin sheath — 
          but a needle biopsy can breach that barrier, potentially unleashing cells into the bloodstream and lymph system.
        </p>
        <p className="text-xs text-red-800 leading-relaxed">
          What was contained can become chaotic: inflammation surges, the immune response is distracted, 
          and metastasis risk may increase. Local trauma from the biopsy itself can kickstart growth, 
          and the immune system — now overwhelmed — may be less able to contain the spread.
        </p>
      </div>

      {/* ───── DOCTOR QUOTES ───── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Doctors Sounding the Alarm on Biopsy Risks</h3>

      <div className="space-y-2 mb-5">
        <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-3">
          <p className="text-xs text-red-900 italic leading-relaxed">"Biopsies are the kiss of death. The needle punches a hole in the tumor, dragging cancer cells & spreading them."</p>
          <p className="text-[10px] text-red-600 font-bold mt-1">— Dr. Ben Johnson</p>
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-3">
          <p className="text-xs text-red-900 italic leading-relaxed">"Biopsies introduce cancer cells into the bloodstream."</p>
          <p className="text-[10px] text-red-600 font-bold mt-1">— Dr. Leonard Gomella, Urologic Oncologist, Thomas Jefferson University</p>
          <p className="text-[10px] text-red-500 mt-0.5">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/24293081/" target="_blank" rel="noopener noreferrer" className="underline">Gomella et al., discussion on biopsy seeding risks (PMID: 24293081)</a></p>
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-3">
          <p className="text-xs text-red-900 italic leading-relaxed">"Manipulation of an intact tumor... is associated with an increase in the incidence of sentinel node metastasis."</p>
          <p className="text-[10px] text-red-600 font-bold mt-1">— John Wayne Cancer Institute (2022)</p>
          <p className="text-[10px] text-red-500 mt-0.5">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/15611998/" target="_blank" rel="noopener noreferrer" className="underline">Hansen et al., JWCI, tumor manipulation & sentinel node metastasis (PMID: 15611998)</a></p>
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-3">
          <p className="text-xs text-red-900 italic leading-relaxed">"Biopsies spread early cancers."</p>
          <p className="text-[10px] text-red-600 font-bold mt-1">— Dr. Jonathan Wright</p>
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-3">
          <p className="text-xs text-red-900 italic leading-relaxed">"Biopsies cause cancer cells to spread & the risk is higher in certain types of cancers like prostate & kidney cancers."</p>
          <p className="text-[10px] text-red-600 font-bold mt-1">— Dr. Hal Schofield</p>
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-3">
          <p className="text-xs text-red-900 italic leading-relaxed">"Biopsies cause cancer to disseminate further into the body & this has serious implications to patient outcomes."</p>
          <p className="text-[10px] text-red-600 font-bold mt-1">— Dr. Robert Nagourney, Oncologist</p>
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-3">
          <p className="text-xs text-red-900 italic leading-relaxed">"Cutting out a section... endangered the person's life by aggravating the malignant growth."</p>
          <p className="text-[10px] text-red-600 font-bold mt-1">— Dr. Perry Nichols</p>
        </div>
      </div>

      <Divider />

      {/* ───── PUBLISHED STUDIES ───── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Published Studies — Biopsy Risks & Tumor Seeding</h3>

      <InfoBox variant="danger" title="What the Research Shows">
        Multiple peer-reviewed studies have documented that biopsy procedures can cause tumor cell 
        dissemination, increase metastasis rates, and promote cancer cell proliferation. These are 
        published in major oncology journals.
      </InfoBox>

      <StudyCard
        title="Biopsy of primary tumors increases lung metastasis incidence"
        description="Study showing that biopsy of primary tumors resulted in significantly increased incidence and number of lung metastases."
        findings="Biopsy of primary tumors resulted in significantly increased incidence and number of lung metastasis in animal models."
        url="https://pubmed.ncbi.nlm.nih.gov/25061543/"
        type="study"
      />

      <StudyCard
        title="Biopsies promote intraperitoneal tumor dissemination & progression"
        description="Research demonstrating that biopsy procedures promote tumor spread within the peritoneal cavity."
        findings="Biopsy procedures promoted intraperitoneal tumor dissemination and progression."
        url="https://pubmed.ncbi.nlm.nih.gov/23258276/"
        type="study"
      />

      <StudyCard
        title="Core needle biopsy of breast tumors increases distant metastases"
        description="Study examining whether core needle biopsy of breast cancers increases the risk of distant spread."
        findings="Core needle biopsy of breast tumors was associated with increased distant metastases compared to excisional biopsy."
        url="https://pubmed.ncbi.nlm.nih.gov/25425969/"
        type="study"
      />

      <StudyCard
        title="Biopsies lead to tumor cell dissemination & seeding of malignant tumors"
        description="Review of evidence on needle-tract seeding and tumor cell dissemination from biopsy procedures."
        findings="Documented evidence that biopsies lead to tumor cell dissemination and seeding of malignant tumors along the needle tract."
        url="https://pubmed.ncbi.nlm.nih.gov/22686607/"
        type="study"
      />

      <StudyCard
        title="Human breast cancer biopsies enhance adjacent cancer cell proliferation"
        description="Study showing that the biopsy process itself can stimulate nearby cancer cells to proliferate."
        findings="Breast cancer biopsies enhanced proliferation of adjacent cancer cells — the mechanical trauma of biopsy may stimulate tumor growth."
        url="https://pubmed.ncbi.nlm.nih.gov/27249999/"
        type="study"
      />

      <StudyCard
        title="Needle tract seeding following biopsy of liver lesions — systematic review"
        description="Systematic review of needle tract seeding incidence across multiple cancer types after percutaneous biopsy."
        findings="Documented needle tract seeding rates ranging from 0.003% to 5.1% depending on cancer type, with hepatocellular carcinoma showing highest rates. Seeding is not as rare as commonly stated."
        url="https://pubmed.ncbi.nlm.nih.gov/18063529/"
        type="study"
      />

      <StudyCard
        title="Tumor seeding complicating percutaneous needle biopsy — rare but real"
        description="Analysis of tumor seeding as a complication of percutaneous needle biopsy procedures."
        findings="While overall incidence varies, tumor seeding is a documented complication that can have devastating consequences. Risk is cancer-type dependent."
        url="https://pubmed.ncbi.nlm.nih.gov/23099189/"
        type="study"
      />

      <StudyCard
        title="Incisional biopsy and melanoma prognosis — sentinel node study"
        description="Study from John Wayne Cancer Institute examining whether tumor manipulation during biopsy affects sentinel lymph node metastasis rates."
        findings="Pre-biopsy manipulation of intact tumors was associated with increased incidence of sentinel node metastasis, suggesting tumor handling can promote spread."
        url="https://pubmed.ncbi.nlm.nih.gov/15611998/"
        type="study"
      />

      <StudyCard
        title="Risk of needle tract seeding after percutaneous biopsy of pancreatic cancer"
        description="Study quantifying the risk of cancer seeding along the needle path after pancreatic biopsy."
        findings="Needle tract seeding was documented in pancreatic cancer biopsies, with implications for surgical candidacy and long-term outcomes."
        url="https://pubmed.ncbi.nlm.nih.gov/15316905/"
        type="study"
      />

      <StudyCard
        title="Local recurrence and needle tract seeding after fine needle aspiration of brain tumors"
        description="Directly relevant study examining needle-tract tumor seeding specifically in brain tumor biopsies."
        findings="Cases of needle tract seeding documented after stereotactic brain biopsy, demonstrating that this risk applies to brain tumors as well."
        url="https://pubmed.ncbi.nlm.nih.gov/12517654/"
        type="study"
      />

      <StudyCard
        title="Tumor cell displacement after fine needle aspiration biopsy — increased occurrence"
        description="Pathological study measuring actual tumor cell displacement caused by biopsy needles."
        findings="Histological evidence of displaced tumor cells along needle tracts was found in a significant proportion of cases, demonstrating the physical mechanism of seeding."
        url="https://pubmed.ncbi.nlm.nih.gov/10466769/"
        type="study"
      />

      <Divider />

      {/* ───── TESTIMONIALS ───── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Testimonials & Doctors Explaining Biopsy Risks</h3>

      <XEmbed url="https://x.com/newstart_2024/status/1999513001972404625" />

      <XEmbed url="https://x.com/thehealthb0t/status/2012659911885455375" />

      <TestimonialCard
        description="Patient/family testimonial on biopsy experience — when the biopsy was a bad move and made things worse"
        url="https://x.com/ValerieAnne1970/status/1910205612652118188?s=20"
        outcome="negative"
      />

      <Divider />

      {/* ───── NON-INVASIVE ALTERNATIVES ───── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Safer Non-Invasive Diagnostic Alternatives</h3>

      <InfoBox variant="info" title="Diagnose Without Disturbing the Tumor">
        Before undergoing a biopsy, patients should seek second opinions and ask about the risks involved. 
        With advances in medical imaging and liquid biopsy technology, there may be safer, less invasive 
        ways to diagnose and monitor tumors without triggering further complications.
      </InfoBox>

      <div className="space-y-3 mb-5">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p className="text-xs font-bold text-blue-800 mb-1">1. Multiparametric MRI (mpMRI)</p>
          <p className="text-[11px] text-blue-700 leading-relaxed">
            High-resolution imaging that combines structural, functional, and metabolic data. Can assess 
            tumor vascularity, cellularity, and metabolic activity without any radiation or tissue invasion. 
            Advanced MRI spectroscopy can even suggest tumor type and grade non-invasively.
          </p>
          <p className="text-[10px] text-blue-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/28643752/" target="_blank" rel="noopener noreferrer" className="underline">Multiparametric MRI for brain tumor characterization (PMID: 28643752)</a></p>
        </div>

        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
          <p className="text-xs font-bold text-purple-800 mb-1">2. Liquid Biopsy (ctDNA / CTC Testing)</p>
          <p className="text-[11px] text-purple-700 leading-relaxed">
            A simple blood draw that analyzes circulating tumor DNA (ctDNA), RNA, exosomes, or circulating 
            tumor cells (CTCs) in blood, urine, or saliva. Can identify genetic mutations, monitor treatment 
            response, and detect recurrence — all without touching the tumor. This technology is rapidly advancing.
          </p>
          <p className="text-[10px] text-purple-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/31175339/" target="_blank" rel="noopener noreferrer" className="underline">Liquid biopsy for brain tumors — ctDNA in cerebrospinal fluid (PMID: 31175339)</a></p>
        </div>

        <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
          <p className="text-xs font-bold text-teal-800 mb-1">3. PET Scan (Positron Emission Tomography)</p>
          <p className="text-[11px] text-teal-700 leading-relaxed">
            Shows metabolic activity of tumors — can distinguish active cancer from scar tissue or necrosis. 
            FDG-PET and amino acid PET (e.g., FET-PET) are increasingly used for brain tumor characterization 
            and can suggest tumor grade without tissue sampling.
          </p>
          <p className="text-[10px] text-teal-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/27909868/" target="_blank" rel="noopener noreferrer" className="underline">PET imaging for brain tumor grading and management (PMID: 27909868)</a></p>
        </div>

        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
          <p className="text-xs font-bold text-emerald-800 mb-1">4. Color Doppler Ultrasound</p>
          <p className="text-[11px] text-emerald-700 leading-relaxed">
            Real-time blood flow mapping within tumors. No radiation, no tissue damage. Can characterize 
            tumor vascularity and help assess tumor behavior. Limited use for deep brain tumors but useful 
            for accessible tumor types.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs font-bold text-amber-800 mb-1">5. Thermography (Infrared Imaging)</p>
          <p className="text-[11px] text-amber-700 leading-relaxed">
            Infrared heat detection that spots abnormal vascular and metabolic patterns early. 
            Completely painless, radiation-free, and non-invasive. Primarily used as a screening 
            and monitoring tool rather than definitive diagnosis.
          </p>
        </div>

        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
          <p className="text-xs font-bold text-indigo-800 mb-1">6. MR Spectroscopy (MRS)</p>
          <p className="text-[11px] text-indigo-700 leading-relaxed">
            Measures the chemical composition of brain tissue. Can detect metabolic signatures specific 
            to different tumor types (choline, NAA, lactate peaks). May help distinguish between tumor 
            grades and even differentiate tumor from non-neoplastic lesions — without any tissue sampling.
          </p>
          <p className="text-[10px] text-indigo-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/16159035/" target="_blank" rel="noopener noreferrer" className="underline">MR spectroscopy for brain tumor diagnosis and grading (PMID: 16159035)</a></p>
        </div>
      </div>

      <InfoBox variant="success" title="Bottom Line">
        <p className="mb-2">
          Non-invasive diagnostics have advanced dramatically. While tissue biopsy remains the gold standard 
          for definitive diagnosis in conventional medicine, the risks of needle-tract seeding and 
          biopsy-induced metastasis documented in research are real and should be part of every 
          informed-consent conversation.
        </p>
        <p>
          <strong>Recommendation:</strong> Before consenting to any biopsy, request a full non-invasive 
          workup first (multiparametric MRI, MR spectroscopy, PET scan if indicated, and ask about liquid 
          biopsy availability). Get a second opinion. Understand the specific risks for your tumor type 
          and location. Only proceed with biopsy if the information it provides will genuinely change 
          the treatment decision — and if the alternative approaches cannot provide sufficient information.
        </p>
      </InfoBox>
    </section>
  );
}
