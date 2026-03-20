import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Biopsy() {
  return (
    <section id="biopsy">
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Stereotactic needle biopsy has been recommended to obtain tissue diagnosis, molecular profiling (IDH, MGMT, 1p/19q, TERT, EGFR, CDKN2A/B), and definitive classification per WHO 2021 criteria. The procedure involves MRI-guided insertion of a thin needle through a dime-sized burr hole to extract 2–6 tissue cores (~1mm × 10mm each). Diagnostic accuracy is approximately 95% in large series, with a 5–15% non-diagnostic rate and 2–5% serious complication rate.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Risk-Benefit Summary</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-gray-300">
          <thead><tr className="bg-gray-100 border-b border-gray-300"><th className="p-2.5 text-left font-semibold text-gray-700">For Biopsy</th><th className="p-2.5 text-left font-semibold text-gray-700">Against Biopsy</th></tr></thead>
          <tbody className="text-gray-700 align-top">
            <tr><td className="p-2.5"><ul className="list-disc pl-4 space-y-1"><li>Definitive tissue diagnosis required for treatment optimization</li><li>Molecular markers (MGMT, IDH) are critical prognostic tools</li><li>~95% diagnostic accuracy with modern stereotactic techniques</li><li>May reveal treatable mimic (infection, demyelination, lymphoma)</li><li>Required for most clinical trial enrollment</li></ul></td>
            <td className="p-2.5"><ul className="list-disc pl-4 space-y-1"><li>Hemorrhage risk 1–3% (can be fatal)</li><li>Neurological deficit risk 1–5% (location-dependent)</li><li>Documented needle-tract seeding in brain tumor biopsies</li><li>Non-diagnostic rate 5–15% may require repeat procedure</li><li>Biopsy-induced tumor cell dissemination documented in multiple cancer types</li></ul></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Needle-Tract Seeding</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Multiple peer-reviewed studies document that needle biopsy can cause tumor cell displacement and seeding along the needle tract. Rates range from 0.003% to 5.1% depending on cancer type. Brain-specific cases of needle-tract seeding after stereotactic biopsy have been reported. The mechanical trauma of biopsy may also stimulate adjacent cancer cell proliferation. These risks, while statistically uncommon, are documented and should be part of informed consent.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Non-Invasive Alternatives</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Emerging non-invasive modalities include multiparametric MRI (structural + metabolic data), MR spectroscopy (chemical composition suggesting tumor type/grade), amino acid PET (FET-PET for tumor grading), and liquid biopsy (circulating tumor DNA in blood). While none currently replace tissue diagnosis for definitive classification, they can provide supplementary information and should be considered as part of a comprehensive workup.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Key Studies on Biopsy Risks</h3>
      <ol className="list-decimal pl-6 text-sm text-gray-700 leading-relaxed space-y-1 mb-4">
        <li>Biopsy increases lung metastasis incidence in animal models. <a href="https://pubmed.ncbi.nlm.nih.gov/25061543/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 25061543</a></li>
        <li>Needle-tract seeding after brain tumor FNA. <a href="https://pubmed.ncbi.nlm.nih.gov/12517654/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 12517654</a></li>
        <li>Breast biopsy enhances adjacent cancer cell proliferation. <a href="https://pubmed.ncbi.nlm.nih.gov/27249999/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 27249999</a></li>
        <li>Needle-tract seeding rates 0.003–5.1% — systematic review. <a href="https://pubmed.ncbi.nlm.nih.gov/18063529/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 18063529</a></li>
        <li>Tumor manipulation increases sentinel node metastasis (JWCI). <a href="https://pubmed.ncbi.nlm.nih.gov/15611998/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 15611998</a></li>
      </ol>

      <p className="text-sm text-gray-600 italic border-t border-gray-200 pt-3">
        For the full biopsy methodology analysis including PCR deep dive, diagnostic staircase, all possible diagnoses, and scenario planning, see the <a href="#/biopsy-methodology" className="text-blue-700 hover:underline font-semibold">Biopsy Methodology &amp; Diagnostic Deep Dive</a> companion report.
      </p>
    </section>
  );
}
