import React from 'react';

export default function SleepApnea() {
  return (
    <section id="sleepapnea">
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Patient has <strong>severe obstructive sleep apnea (OSA)</strong>, a brain tumor, and experienced prolonged hypoxemia (SpO2 74%). A sleep study was completed and CPAP therapy was initiated immediately — however, the subsequent seizure episode occurred shortly after. Large cohort studies demonstrate a significant association between OSA and increased brain/CNS tumor risk, creating a potential bidirectional cycle: OSA causes chronic intermittent hypoxia → hypoxia may promote tumor growth via HIF-1 activation → brain tumors can worsen sleep apnea by affecting brainstem respiratory centers → more hypoxia.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Epidemiological Data</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-gray-300">
          <thead><tr className="bg-gray-100 border-b border-gray-300"><th className="p-2.5 text-left font-semibold text-gray-700">Study</th><th className="p-2.5 text-left font-semibold text-gray-700">Finding</th></tr></thead>
          <tbody className="text-gray-700">
            <tr className="border-b border-gray-200"><td className="p-2.5">Taiwan cohort (n=23,055, 10-yr f/u)</td><td className="p-2.5">HR 1.54 for CNS cancers; HR 1.71 for brain cancers; HR 2.20 with OSA + insomnia. <a href="https://pubmed.ncbi.nlm.nih.gov/24891080" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 24891080</a></td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5">Korean cohort (n=198,574, 4.8-yr f/u)</td><td className="p-2.5">HR 1.67 for malignant brain tumors. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7660473" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMC7660473</a></td></tr>
            <tr><td className="p-2.5">Meta-analysis (70 studies)</td><td className="p-2.5">Strong association between sleep apnea and CNS tumors across age groups. <a href="https://medcraveonline.com/IJRRT/correlation-between-sleep-apnea-and-cns-tumors-meta-analysis.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Rai et al., 2023</a></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Mechanisms: Intermittent Hypoxia &amp; Tumor Promotion</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        <strong>HIF-1 pathway activation:</strong> Intermittent hypoxia activates the same Hypoxia-Inducible Factor signaling that glioblastoma exploits for growth, invasion, and chemoresistance. <strong>Angiogenesis:</strong> Hypoxia stimulates VEGF and new blood vessel formation that tumors require. <strong>Inflammation:</strong> Repetitive oxygen drops generate ROS surges and inflammatory cytokines, creating a pro-tumor microenvironment. <strong>Immune suppression:</strong> Impaired NK cell function and altered tumor-associated macrophages. <strong>Selection pressure:</strong> Intermittent hypoxia selects for more aggressive, therapy-resistant cancer cell phenotypes.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">CPAP &amp; Cancer Risk Reduction</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Emerging evidence suggests CPAP may have a protective effect against cancer incidence in OSA patients. Patient received CPAP immediately after sleep study, prior to the current seizure episode. Regardless of cancer impact, eliminating intermittent hypoxia removes a documented tumor-promoting stimulus and is indicated for the OSA itself.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Basal Ganglia Satellite Lesion: Hypoxic Contribution?</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        The 9.8 mm satellite lesion near the left basal ganglia is officially interpreted as satellite glioma. However, the basal ganglia are the <strong>most vulnerable brain region to oxygen deprivation</strong> due to high metabolic rate, dense excitatory receptors, and watershed vascular territory. The primary tumor{"'"}s mass effect may additionally compromise local blood supply. Reactive gliosis from hypoxic injury can produce focal T2/FLAIR signal abnormality mimicking a small mass on MRI. Non-invasive differentiation methods include MR spectroscopy (elevated choline/NAA = tumor; different profile = gliosis), perfusion MRI (elevated blood volume = tumor), and FET-PET (amino acid uptake). Serial MRI monitoring on CPAP could clarify — if the lesion shrinks without anti-tumor treatment, hypoxic origin is strongly suggested.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Complete Source Library</h3>
      <ol className="list-decimal pl-6 text-sm text-gray-700 leading-relaxed space-y-1 mb-4">
        <li>OSA and primary CNS cancer risk — Taiwan cohort. <a href="https://pubmed.ncbi.nlm.nih.gov/24891080" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 24891080</a></li>
        <li>Malignant brain tumor incidence in OSA — Korean cohort. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7660473" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMC7660473</a></li>
        <li>Sleep apnea and CNS tumors meta-analysis (70 studies). <a href="https://medcraveonline.com/IJRRT/correlation-between-sleep-apnea-and-cns-tumors-meta-analysis.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Rai 2023</a></li>
        <li>Cancer and OSA — updated meta-analysis. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8913079" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMC8913079</a></li>
        <li>Intermittent hypoxia enhances cancer progression — mouse model. <a href="https://publications.ersnet.org/content/erj/39/1/215" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">ERJ</a></li>
        <li>Accelerated tumor growth under intermittent hypoxia — HIF-1 dependent. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5617448" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMC5617448</a></li>
        <li>Intermittent hypoxia selects for aggressive cancer phenotypes. <a href="https://pubmed.ncbi.nlm.nih.gov/26026686/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 26026686</a></li>
        <li>Does CPAP protect against cancer in OSA? <a href="https://pubmed.ncbi.nlm.nih.gov/40310575" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 40310575</a></li>
        <li>CPAP to reduce cancer risk — meta-analysis of 3 RCTs. <a href="https://onlinelibrary.wiley.com/doi/10.1111/jsr.70153" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">JSR</a></li>
        <li>Vicious interplay: disrupted sleep and malignant brain tumors. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8491053" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMC8491053</a></li>
        <li>GBM comorbidities — OSA as prognostic risk factor (n=867). <a href="https://pubmed.ncbi.nlm.nih.gov/39800000/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 39800000</a></li>
        <li>Selective vulnerability of basal ganglia to hypoxic-ischemic injury. <a href="https://pubmed.ncbi.nlm.nih.gov/15930087/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 15930087</a></li>
        <li>MRI patterns of hypoxic-ischemic encephalopathy — basal ganglia. <a href="https://pubmed.ncbi.nlm.nih.gov/16166544/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 16166544</a></li>
        <li>OSA causes gray matter loss in basal ganglia. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2491498/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMC2491498</a></li>
        <li>GBM response to hypoxia — drives aggressiveness and chemoresistance. <a href="https://pubmed.ncbi.nlm.nih.gov/32408609/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 32408609</a></li>
      </ol>

      <p className="text-sm text-gray-600 italic">
        30+ studies compiled. These are observational associations, not definitive proof of causation. CPAP treatment is indicated regardless of cancer impact. Discuss with neurology and pulmonology teams.
      </p>
    </section>
  );
}
