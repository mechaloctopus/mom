import { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Microscope, TestTube, FileText, Clock, Shield, Brain } from 'lucide-react';

function Ref({ href, title, meta }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-start gap-3">
        <ExternalLink className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm font-semibold text-gray-900 leading-snug">{title}</p>
          <p className="text-xs text-gray-500 mt-1">{meta}</p>
        </div>
      </div>
    </a>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mb-10">
      <div className="border-b border-gray-200 pb-2 mb-4">
        <h2 className="text-lg font-serif font-bold text-gray-900">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

export default function BiopsyMethodology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toc = [
    { id: 'question', label: 'Clinical Question' },
    { id: 'procedure', label: 'How the Biopsy Works' },
    { id: 'processing', label: 'How the Tissue Is Processed' },
    { id: 'staircase', label: 'Diagnostic Staircase' },
    { id: 'differential', label: 'Most Relevant Diagnoses' },
    { id: 'infection', label: 'How Infection Is Ruled In or Out' },
    { id: 'timeline', label: 'Timeline and Result Logic' },
    { id: 'questions', label: 'Questions for the Team' },
    { id: 'references', label: 'References' },
  ];

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 20;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <a
            href="./"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
              window.location.reload();
            }}
            className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Main Site
          </a>
          <span className="text-xs text-gray-400 font-mono">Diagnostic Deep Dive</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        <div className="border-b-2 border-gray-900 pb-8 mb-10">
          <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Biopsy Methodology &amp; Diagnostic Interpretation</p>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 leading-tight mb-4">
            What the Brain Biopsy Can Actually Tell Us
          </h1>
          <p className="text-lg font-serif text-gray-600 leading-relaxed mb-4">
            A concise, scientific overview of the stereotactic biopsy workflow, the laboratory testing sequence, and how pathology, molecular markers, and microbiology combine into a final diagnosis.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            The biopsy is not just a yes-or-no tumor test. It is the point where the team determines whether the lesion is glioma, another neoplasm, treatment-related change, inflammatory disease, or a less likely infectious mimic. The strongest answer comes from integrating histology, immunohistochemistry, molecular profiling, imaging, and clinical context.
          </p>
          <p className="text-xs text-gray-400 font-mono">
            Compiled: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="mb-10 border border-amber-200 bg-amber-50 rounded-xl p-4">
          <p className="text-sm font-semibold text-amber-900 mb-1">Important framing</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            This page is written for family understanding and physician discussion. It is intentionally focused on standard neuropathology workflow and keeps low-probability infectious explanations in their proper place rather than making them the center of the analysis.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide font-mono">Contents</h3>
          <div className="border-t border-gray-200">
            {toc.map((item, index) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="w-full flex items-center gap-4 py-2.5 border-b border-gray-100 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-xs font-mono text-gray-400 w-8 flex-shrink-0">{index + 1}</span>
                <span className="text-sm text-gray-700 hover:text-gray-900">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <Section id="question" title="1. Clinical Question" subtitle="What this biopsy is being asked to resolve">
          <div className="grid gap-3 sm:grid-cols-3 mb-5">
            <div className="border border-gray-200 rounded-xl p-4">
              <Microscope className="w-5 h-5 text-blue-700 mb-2" />
              <p className="text-xs font-bold text-gray-900 mb-1">Primary task</p>
              <p className="text-xs text-gray-600 leading-relaxed">Establish tissue diagnosis rather than relying on imaging pattern alone.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <Brain className="w-5 h-5 text-blue-700 mb-2" />
              <p className="text-xs font-bold text-gray-900 mb-1">Most likely category</p>
              <p className="text-xs text-gray-600 leading-relaxed">Diffuse infiltrating glioma remains the leading working diagnosis on current imaging.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <Shield className="w-5 h-5 text-blue-700 mb-2" />
              <p className="text-xs font-bold text-gray-900 mb-1">Critical safeguard</p>
              <p className="text-xs text-gray-600 leading-relaxed">Exclude alternative neoplastic, inflammatory, or infectious causes before definitive treatment decisions.</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            In practical terms, the biopsy must answer three things: <strong>what the lesion is</strong>, <strong>how aggressive it appears biologically</strong>, and <strong>whether molecular features change treatment selection</strong>. For diffuse gliomas, modern diagnosis is no longer based on appearance alone; it depends on integrated histologic and molecular classification.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            That means a preliminary impression can be useful, but the final diagnosis should not be considered complete until the molecular layer is added.
          </p>
        </Section>

        <Section id="procedure" title="2. How the Biopsy Works" subtitle="Stereotactic sampling under image guidance">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Most deep or infiltrative brain lesions are sampled using a stereotactic needle biopsy. MRI or CT guidance is used to target the lesion precisely, a small burr hole is made, and multiple small cores are taken from representative regions. The aim is not to remove the mass, but to obtain enough tissue for diagnosis with the lowest acceptable procedural risk.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
              <p className="text-xs font-bold text-gray-900 mb-2">Why multiple cores matter</p>
              <p className="text-xs text-gray-600 leading-relaxed">A heterogeneous lesion may contain lower-grade tissue, higher-grade tissue, necrosis, reactive brain, or inflammatory material in different areas. More than one sample improves diagnostic yield.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
              <p className="text-xs font-bold text-gray-900 mb-2">What same-day pathology can do</p>
              <p className="text-xs text-gray-600 leading-relaxed">Frozen section can confirm that diagnostic tissue was obtained, but it is an early read only. Final interpretation belongs to permanent sections plus ancillary testing.</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Metric</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Typical range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-100 text-gray-800">Diagnostic yield</td>
                  <td className="p-3 border-b border-gray-100 text-gray-600">High in modern series, generally around 90% or better</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border-b border-gray-100 text-gray-800">Non-diagnostic sampling</td>
                  <td className="p-3 border-b border-gray-100 text-gray-600">Usually a minority, often due to sampling error or scant tissue</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100 text-gray-800">Major complication risk</td>
                  <td className="p-3 border-b border-gray-100 text-gray-600">Low but real, mainly hemorrhage or neurologic worsening</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 text-gray-800">Best use</td>
                  <td className="p-3 text-gray-600">Defining diagnosis when imaging is insufficient to guide treatment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="processing" title="3. How the Tissue Is Processed" subtitle="Why one biopsy can generate several different answers">
          <div className="grid gap-4 md:grid-cols-3 mb-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <FileText className="w-5 h-5 text-blue-700 mb-2" />
              <p className="text-xs font-bold text-gray-900 mb-1">Formalin-fixed tissue</p>
              <p className="text-xs text-gray-600 leading-relaxed">Used for permanent sections, H&amp;E review, immunohistochemistry, and many molecular assays.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <TestTube className="w-5 h-5 text-blue-700 mb-2" />
              <p className="text-xs font-bold text-gray-900 mb-1">Fresh or frozen tissue</p>
              <p className="text-xs text-gray-600 leading-relaxed">Preferred for DNA/RNA-based studies and some specialized testing when available.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <Shield className="w-5 h-5 text-blue-700 mb-2" />
              <p className="text-xs font-bold text-gray-900 mb-1">Microbiology reserve</p>
              <p className="text-xs text-gray-600 leading-relaxed">If infection is a real concern, a portion must be handled in a way that preserves microbiologic utility.</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            The tissue-processing step matters because each laboratory question has different material requirements. Histology needs preserved architecture. Molecular testing needs recoverable nucleic acids. Microbiology may require fresh material or a specific PCR workflow. Once tissue is fixed or exhausted, some later options become limited.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            For that reason, clear communication between neurosurgery, pathology, and the clinical team is essential when there is a meaningful differential beyond routine glioma classification.
          </p>
        </Section>

        <Section id="staircase" title="4. Diagnostic Staircase" subtitle="How neuropathology reaches a final integrated diagnosis">
          <div className="space-y-3 mb-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-xs font-bold text-gray-900 mb-1">Step 1 — Histology</p>
              <p className="text-xs text-gray-600 leading-relaxed">H&amp;E sections assess architecture, cellularity, atypia, mitoses, necrosis, vascular proliferation, inflammation, and whether the tissue looks primarily neoplastic or reactive.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
              <p className="text-xs font-bold text-gray-900 mb-1">Step 2 — Immunohistochemistry</p>
              <p className="text-xs text-gray-600 leading-relaxed">Markers such as GFAP, OLIG2, ATRX, p53, IDH1 R132H, Ki-67, and others refine lineage and proliferative behavior. This often distinguishes glioma from metastasis, lymphoma, inflammation, or infection-related reactive change.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-xs font-bold text-gray-900 mb-1">Step 3 — Molecular classification</p>
              <p className="text-xs text-gray-600 leading-relaxed">IDH status, 1p/19q codeletion, MGMT methylation, CDKN2A/B status, EGFR amplification, TERT promoter mutation, and chromosome 7/10 patterns may define the tumor more accurately than morphology alone.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
              <p className="text-xs font-bold text-gray-900 mb-1">Step 4 — Correlation</p>
              <p className="text-xs text-gray-600 leading-relaxed">The final report should reconcile pathology with MRI behavior, patient age, clinical tempo, steroid response, and any microbiology findings rather than treating each stream in isolation.</p>
            </div>
          </div>
          <div className="border border-blue-200 bg-blue-50 rounded-xl p-4">
            <p className="text-sm font-semibold text-blue-900 mb-1">Why this matters</p>
            <p className="text-sm text-blue-800 leading-relaxed">
              A modern CNS diagnosis is strongest when it is integrated. A label such as “glioblastoma” or “astrocytoma” now carries specific molecular criteria, not just a visual impression under the microscope.
            </p>
          </div>
        </Section>

        <Section id="differential" title="5. Most Relevant Diagnoses" subtitle="Ordered by practical importance rather than speculation">
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Category</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Why it stays in the differential</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">What pathology should clarify</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-100 font-semibold text-gray-800 align-top">Diffuse glioma</td>
                  <td className="p-3 border-b border-gray-100 text-gray-600 align-top">Best overall fit with infiltrative imaging pattern and current working assumption.</td>
                  <td className="p-3 border-b border-gray-100 text-gray-600 align-top">IDH status, tumor type, grade-defining features, and MGMT relevance.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border-b border-gray-100 font-semibold text-gray-800 align-top">Other neoplasm</td>
                  <td className="p-3 border-b border-gray-100 text-gray-600 align-top">Metastasis, lymphoma, or another primary CNS tumor can occasionally mimic glioma radiographically.</td>
                  <td className="p-3 border-b border-gray-100 text-gray-600 align-top">Lineage markers, cellular morphology, and molecular profile.</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100 font-semibold text-gray-800 align-top">Inflammatory / demyelinating process</td>
                  <td className="p-3 border-b border-gray-100 text-gray-600 align-top">Can produce edema, enhancement, and mass effect in selected cases.</td>
                  <td className="p-3 border-b border-gray-100 text-gray-600 align-top">Pattern of inflammation, macrophages, myelin injury, and absence of true neoplasm.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-semibold text-gray-800 align-top">Infectious mimic</td>
                  <td className="p-3 text-gray-600 align-top">Important not to miss, but lower-probability than glioma on the currently described imaging pattern.</td>
                  <td className="p-3 text-gray-600 align-top">Organisms, granulomatous change, special stains, and targeted PCR if clinically indicated.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            The key design principle of this differential is proportionality: the page should stay centered on the leading diagnosis while still preserving a pathway for less likely but consequential alternatives.
          </p>
        </Section>

        <Section id="infection" title="6. How Infection Is Ruled In or Out" subtitle="Necessary, but not the center of the page">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Infection belongs in the diagnostic framework because certain CNS infections can mimic tumor. However, infectious causes should be weighted according to imaging pattern, host factors, and what the tissue actually shows. In other words, infection is a branch of the biopsy workup, not the default explanation.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
              <p className="text-xs font-bold text-gray-900 mb-1">When suspicion rises</p>
              <p className="text-xs text-gray-600 leading-relaxed">Marked inflammation, necrosis with organisms, granulomatous change, unexpected microbiology, immunosuppression, or clinical data that do not fit the tumor narrative.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
              <p className="text-xs font-bold text-gray-900 mb-1">When suspicion falls</p>
              <p className="text-xs text-gray-600 leading-relaxed">Typical infiltrative glioma histology, supportive glial immunophenotype, concordant molecular profile, and no organisms or microbiologic signal.</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            If pathology raises a real infectious question, the lab can use special stains, immunohistochemistry, and targeted PCR. Toxoplasmosis is one example of a CNS mimic, but it should be handled as a lower-probability exclusion unless the tissue or clinical setting specifically points there.
          </p>
          <div className="border border-gray-200 rounded-xl p-4">
            <p className="text-xs font-bold text-gray-900 mb-2">Practical standard</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              A high-confidence tumor diagnosis should be supported positively by tumor features, not merely by the absence of a parasite test. Conversely, an infectious diagnosis should be supported by tissue or molecular evidence, not by speculation alone.
            </p>
          </div>
        </Section>

        <Section id="timeline" title="7. Timeline and Result Logic" subtitle="What usually comes first, and what actually closes the case">
          <div className="grid gap-3 sm:grid-cols-3 mb-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <Clock className="w-5 h-5 text-blue-700 mb-2" />
              <p className="text-xs font-bold text-gray-900 mb-1">Same day</p>
              <p className="text-xs text-gray-600 leading-relaxed">Frozen section or preliminary comment confirming diagnostic tissue and broad impression.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <FileText className="w-5 h-5 text-blue-700 mb-2" />
              <p className="text-xs font-bold text-gray-900 mb-1">Several days</p>
              <p className="text-xs text-gray-600 leading-relaxed">Permanent histology, core immunostains, and an initial formal pathology report.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <TestTube className="w-5 h-5 text-blue-700 mb-2" />
              <p className="text-xs font-bold text-gray-900 mb-1">1-3 weeks</p>
              <p className="text-xs text-gray-600 leading-relaxed">Molecular markers, integrated final diagnosis, and treatment-shaping biomarkers.</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            The correct reading strategy is sequential: a preliminary result may guide immediate discussions, but the clinically decisive answer is the <strong>final integrated report</strong>. That report should specify the tumor class or alternative diagnosis, the relevant molecular features, and the level of certainty if tissue is limited.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            If the report is non-diagnostic or discordant with imaging, the right next step is clarification, not overconfidence. Limited sampling can happen, especially with heterogeneous infiltrative lesions.
          </p>
        </Section>

        <Section id="questions" title="8. Questions for the Team" subtitle="Concise questions that actually matter">
          <div className="border border-gray-200 rounded-xl p-5 bg-gray-50">
            <ol className="space-y-3 list-decimal pl-4 text-sm text-gray-700 leading-relaxed">
              <li>Was the sample considered adequate for both histology and molecular classification?</li>
              <li>What is the preliminary histologic impression, and what uncertainty remains before the final report?</li>
              <li>Which immunostains and molecular markers are being run?</li>
              <li>Is the current tissue sufficient to assign an integrated WHO-style diagnosis?</li>
              <li>Did anything in the tissue raise a genuine inflammatory or infectious concern that required special stains or PCR?</li>
              <li>If the sample is limited or heterogeneous, how could that affect grading or confidence?</li>
              <li>What exact pending result is most likely to change treatment planning?</li>
            </ol>
          </div>
        </Section>

        <Section id="references" title="9. References" subtitle="Core sources supporting the workflow above">
          <div className="space-y-3">
            <Ref
              href="https://pubmed.ncbi.nlm.nih.gov/16636849/"
              title="Diagnostic yield of stereotactic brain biopsy"
              meta="Meta-analysis of stereotactic biopsy performance. PMID: 16636849"
            />
            <Ref
              href="https://pubmed.ncbi.nlm.nih.gov/36530622/"
              title="Modern validation of stereotactic biopsy for integrated diagnosis"
              meta="Large contemporary series demonstrating high diagnostic success with molecular testing. PMID: 36530622"
            />
            <Ref
              href="https://pubmed.ncbi.nlm.nih.gov/34185076/"
              title="WHO 2021 Classification of CNS Tumors"
              meta="Molecularly integrated framework for current CNS tumor diagnosis. PMID: 34185076"
            />
            <Ref
              href="https://pubmed.ncbi.nlm.nih.gov/27157931/"
              title="Histology versus final integrated brain tumor diagnosis"
              meta="Illustrates why morphology alone is often incomplete. PMID: 27157931"
            />
            <Ref
              href="https://pubmed.ncbi.nlm.nih.gov/15815007/"
              title="PCR support for cerebral toxoplasmosis diagnosis"
              meta="Useful as an example of how targeted molecular testing is applied when infection is genuinely suspected. PMID: 15815007"
            />
            <Ref
              href="https://pubmed.ncbi.nlm.nih.gov/23095839/"
              title="Cerebral toxoplasmosis mimicking brain tumor"
              meta="Included here only to document that infectious mimics exist, not to elevate them above the leading glioma hypothesis. PMID: 23095839"
            />
          </div>
        </Section>
      </main>
    </div>
  );
}
