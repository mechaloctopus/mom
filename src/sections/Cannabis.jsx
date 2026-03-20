import React from 'react';

export default function Cannabis() {
  return (
    <section id="cannabis">
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        The human endocannabinoid system (ECS) — CB1/CB2 receptors throughout the brain and body — regulates homeostasis of pain, inflammation, immune response, and cell growth/death. Plant cannabinoids (THC, CBD, CBG, and 100+ others) interact with this system. Research documents direct anti-cancer, neuroprotective, and neuroregenerative properties relevant to both brain tumors and hypoxic brain injury recovery.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Key Compounds</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-gray-300">
          <thead><tr className="bg-gray-100 border-b border-gray-300"><th className="p-2.5 text-left font-semibold text-gray-700">Cannabinoid</th><th className="p-2.5 text-left font-semibold text-gray-700">Properties</th></tr></thead>
          <tbody className="text-gray-700">
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">THC</td><td className="p-2.5">Psychoactive. Direct anti-tumor effects in GBM studies — induces autophagy and apoptosis in cancer cells while sparing healthy cells. Stimulates appetite, reduces nausea.</td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">CBD</td><td className="p-2.5">Non-psychoactive. Anti-inflammatory, neuroprotective, anti-cancer. Enhances THC anti-tumor effects. Promotes hippocampal neurogenesis. Neuroprotective against ischemic injury.</td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">CBG</td><td className="p-2.5">Non-psychoactive. Particular promise against GBM in recent studies. Anti-inflammatory, neuroprotective.</td></tr>
            <tr><td className="p-2.5 font-semibold">Full-spectrum</td><td className="p-2.5">Entourage effect: multiple cannabinoids + terpenes together may be more effective than isolated compounds.</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Anti-Cancer Mechanisms</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Documented mechanisms include autophagy induction (THC triggers cancer cells to self-digest), apoptosis via multiple signaling pathways, anti-angiogenic effects (reduces tumor blood supply), anti-proliferative activity across multiple cancer types, and selective toxicity (targets cancer cells while sparing healthy neurons). THC+CBD combination enhanced temozolomide effectiveness in preclinical GBM studies.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Clinical Evidence</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        A Phase 1/2 pilot trial (GW Pharmaceuticals/Jazz Pharma) combining THC:CBD (Sativex) with temozolomide for recurrent GBM showed <strong>83% one-year survival vs. 53% in placebo group</strong>; median survival 550 days vs. 369 days. No completed Phase 3 trials to date.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Key Studies</h3>
      <ol className="list-decimal pl-6 text-sm text-gray-700 leading-relaxed space-y-1 mb-4">
        <li>Cannabinoids and gliomas — anti-tumor via autophagy, apoptosis, anti-angiogenesis. <a href="https://pubmed.ncbi.nlm.nih.gov/19425170/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 19425170</a></li>
        <li>Pilot clinical trial: THC:CBD + TMZ for recurrent GBM — 83% vs 53% 1-yr survival. <a href="https://pubmed.ncbi.nlm.nih.gov/33507244/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 33507244</a></li>
        <li>CBD induces programmed cell death in breast cancer, minimal effect on normal cells. <a href="https://pubmed.ncbi.nlm.nih.gov/21566064/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 21566064</a></li>
        <li>CBD anti-cancer mechanisms across brain, breast, lung, colon. <a href="https://pubmed.ncbi.nlm.nih.gov/22506672/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 22506672</a></li>
        <li>CBD promotes hippocampal neurogenesis via CB1 receptor. <a href="https://pubmed.ncbi.nlm.nih.gov/20804782/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 20804782</a></li>
        <li>CBD neuroprotection in ischemic brain injury — reduced infarct volume. <a href="https://pubmed.ncbi.nlm.nih.gov/16400709/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 16400709</a></li>
        <li>Endocannabinoid system and neural stem cell biology. <a href="https://pubmed.ncbi.nlm.nih.gov/17952650/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 17952650</a></li>
      </ol>

      <p className="text-sm text-gray-700 leading-relaxed">
        <strong>Relevance:</strong> Cannabis research for brain cancer is among the most promising areas of cannabinoid oncology. The pilot trial data (83% vs 53% one-year survival) is noteworthy. CBD{"'"}s neuroprotective and neurogenic properties are directly relevant to recovery from the SpO2 74% hypoxic event.
      </p>
    </section>
  );
}
