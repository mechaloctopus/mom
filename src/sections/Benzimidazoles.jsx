import React from 'react';
import XEmbed from '../components/XEmbed';

export default function Benzimidazoles() {
  return (
    <section id="benzimidazoles">
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        <strong>Fenbendazole</strong> (veterinary) and <strong>mebendazole</strong> (FDA-approved for humans) are nearly identical benzimidazole-class anthelmintics differing by a single atom. Both bind β-tubulin to disrupt microtubule formation — the same mechanism targeted by taxane chemotherapy agents (vincristine, paclitaxel). Additional documented mechanisms include glucose uptake inhibition in cancer cells, p53 stabilization, and anti-angiogenic effects. Mebendazole has confirmed blood-brain barrier penetration and has progressed into Phase 1/2 clinical trials for glioblastoma (NCT01729260). The proposed protocol uses both agents.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Considerations</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-gray-300">
          <thead><tr className="bg-gray-100 border-b border-gray-300"><th className="p-2.5 text-left font-semibold text-gray-700">Arguments For</th><th className="p-2.5 text-left font-semibold text-gray-700">Arguments Against</th></tr></thead>
          <tbody className="text-gray-700 align-top">
            <tr><td className="p-2.5"><ul className="list-disc pl-4 space-y-1">
              <li>Significant anti-tumor activity in animal models across multiple cancer types</li>
              <li>Extremely low toxicity — virtually identical safety profile to FDA-approved mebendazole</li>
              <li>Very inexpensive and widely available</li>
              <li>Targets multiple cancer pathways simultaneously</li>
              <li>Mebendazole has confirmed BBB penetration and active GBM clinical trials</li>
              <li>Growing body of anecdotal case reports including brain tumors</li>
            </ul></td><td className="p-2.5"><ul className="list-disc pl-4 space-y-1">
              <li>No completed human RCTs specifically for cancer</li>
              <li>Evidence primarily preclinical (cell lines, animal models)</li>
              <li>Fenbendazole not FDA-approved for human use</li>
              <li>Anecdotal evidence subject to survivorship bias</li>
              <li>Optimal cancer dosing in humans unknown</li>
              <li>Quality control varies between products</li>
            </ul></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Preclinical Studies</h3>
      <ol className="list-decimal pl-6 text-sm text-gray-700 leading-relaxed space-y-1 mb-4">
        <li>Fenbendazole as microtubule destabilizer causing cancer cell death. <a href="https://pubmed.ncbi.nlm.nih.gov/39736624/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 39736624</a></li>
        <li>Anti-cancer properties of fenbendazole — preclinical investigation. <a href="https://pubmed.ncbi.nlm.nih.gov/39477286/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 39477286</a></li>
        <li>Fenbendazole anti-tumor activity in animal models (2024). <a href="https://pubmed.ncbi.nlm.nih.gov/40799435/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 40799435</a></li>
        <li>Benzimidazoles and cancer mechanisms. <a href="https://pubmed.ncbi.nlm.nih.gov/36039738/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 36039738</a></li>
        <li>Anti-proliferative effects on cancer cells. <a href="https://pubmed.ncbi.nlm.nih.gov/36854536/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 36854536</a></li>
        <li>Drug repurposing — fenbendazole as anti-cancer agent. <a href="https://pubmed.ncbi.nlm.nih.gov/35020278/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 35020278</a></li>
        <li>Fenbendazole induces apoptosis in cancer cells. <a href="https://pubmed.ncbi.nlm.nih.gov/37998737/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 37998737</a></li>
        <li>Benzimidazole anthelmintics and cancer (2008). <a href="https://pubmed.ncbi.nlm.nih.gov/19049251/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 19049251</a></li>
        <li>Additional preclinical evidence. <a href="https://pubmed.ncbi.nlm.nih.gov/37170725/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 37170725</a></li>
      </ol>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Emerging Human Data</h3>
      <ol className="list-decimal pl-6 text-sm text-gray-700 leading-relaxed space-y-1 mb-4">
        <li>Fenbendazole in human cancer patients — observational data (2024). <a href="https://pubmed.ncbi.nlm.nih.gov/40605964/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 40605964</a></li>
        <li>Human cancer study (2024). <a href="https://pubmed.ncbi.nlm.nih.gov/39197912/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 39197912</a></li>
      </ol>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Mebendazole — Clinical Development for GBM</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        Mebendazole is FDA-approved, crosses the BBB at therapeutic concentrations, and Johns Hopkins researchers have patented an enhanced formulation specifically for cancer. It can be prescribed off-label by any physician.
      </p>
      <ol className="list-decimal pl-6 text-sm text-gray-700 leading-relaxed space-y-1 mb-4">
        <li>Brain penetration and efficacy of different mebendazole formulations. <a href="https://aacrjournals.org/clincancerres/article/21/15/3462/78928/Brain-Penetration-and-Efficacy-of-Different" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Clin Cancer Res</a></li>
        <li>Phase 1/2 clinical trial for brain tumors. <a href="https://clinicaltrials.gov/study/NCT01729260" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">NCT01729260</a></li>
        <li>Mebendazole as anti-cancer agent — clinical evidence. <a href="https://pubmed.ncbi.nlm.nih.gov/33506200/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 33506200</a></li>
        <li>Johns Hopkins enhanced formulation patent. <a href="https://trial.medpath.com/news/a86ded46bc870bbd/johns-hopkins-researchers-patent-enhanced-mebendazole-formulation-for-cancer-treatment" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">MedPath</a></li>
        <li>GBM Foundation drug development award for mebendazole. <a href="https://glioblastomafoundation.org/news/glioblastoma-foundation-announces-drug-development-award" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">GBM Foundation</a></li>
      </ol>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Case Reports &amp; Testimonials</h3>
      <p className="text-sm text-gray-500 italic mb-3">Anecdotal evidence. Subject to survivorship bias and confounding factors. Included for completeness, not as proof of efficacy.</p>

      <XEmbed url="https://x.com/ivermaccess/status/1972636438543122654" />
      <XEmbed url="https://x.com/makismedicine/status/1925853465898570164" />
      <XEmbed url="https://x.com/thehealthb0t/status/2006417338057502832" />

      <div className="space-y-1 text-sm text-gray-700 mb-4">
        <p><a href="https://x.com/makismedicine/status/1837078871201444106" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Terminal cancer patient — reported cancer free after 2.5 months</a></p>
        <p><a href="https://x.com/makismedicine/status/1987732188692185577" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Boy in Switzerland with brain tumor — reported shrinkage</a></p>
        <p><a href="https://x.com/makismedicine/status/2006045981729767735" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">12-year-old — tumor shrinkage of 40% in 6 months</a></p>
        <p><a href="https://x.com/makismedicine/status/1894344610287136878" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Brain cancer patient doing better with alternative protocol</a></p>
        <p><a href="https://x.com/ivermectinkart/status/2026644201006301404" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Additional brain cancer case reports</a></p>
        <p><a href="https://x.com/ivermectin_net/status/1983147525843337444" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Joe Tippens — original fenbendazole cancer story</a></p>
        <p><a href="https://x.com/thehealthb0t/status/2010907660317786310" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Joe Rogan discusses fenbendazole for cancer</a></p>
        <p><a href="https://x.com/makismedicine/status/2027144270801436850" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Patient in Bulgaria — reports improvement</a></p>
        <p><a href="https://x.com/makismedicine/status/1906658090990129422" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Given 2 months to live — now reported cancer free</a></p>
        <p><a href="https://x.com/makismedicine/status/1927427741126676580" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Stage 4 cancer beat — direct testimonial</a></p>
        <p><a href="https://x.com/medsnest/status/2015699650314125760" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Reported cancer cure testimonial</a></p>
        <p><a href="https://x.com/joetippen/status/2027672788631212096" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Dr. Mark Gordon discusses fenbendazole</a></p>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Cases Where It Did Not Work</h3>
      <p className="text-sm text-gray-700 mb-3">
        It is critical to acknowledge that alternative treatments do not work for everyone. <a href="https://x.com/mjtruthultra/status/1924497763133231198" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Negative testimonial included for transparency.</a>
      </p>
    </section>
  );
}
