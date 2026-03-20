import React from 'react';

export default function LionsMane() {
  return (
    <section id="lionsmane">
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        <em>Hericium erinaceus</em> (Lion's Mane) is one of the few natural substances documented to stimulate <strong>Nerve Growth Factor (NGF)</strong> and <strong>Brain-Derived Neurotrophic Factor (BDNF)</strong> production — critical proteins for neuron growth, repair, and survival. This dual neuroregenerative and anti-cancer profile makes it particularly relevant for brain tumor contexts with concurrent hypoxic injury.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Mechanisms</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        <strong>Neuroregenerative:</strong> Hericenones (fruiting body) and erinacines (mycelium) stimulate NGF synthesis. BDNF enhancement supports neuroplasticity and cognitive recovery. Animal studies demonstrate accelerated myelin repair and reduced infarct volume after ischemic injury. Anti-inflammatory and neuroprotective against oxidative stress.<br /><br />
        <strong>Anti-cancer:</strong> In vitro inhibition of gastric, colon, liver, and leukemia cancer cell lines. Beta-glucans stimulate macrophages and NK cells. Some evidence of anti-angiogenic activity. No human cancer trials to date.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Key Studies</h3>
      <ol className="list-decimal pl-6 text-sm text-gray-700 leading-relaxed space-y-1 mb-4">
        <li>Neurotrophic properties — NGF synthesis via hericenones and erinacines. <a href="https://pubmed.ncbi.nlm.nih.gov/24266378/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 24266378</a></li>
        <li>Double-blind RCT — cognitive improvement at 3g/day in mild cognitive impairment. <a href="https://pubmed.ncbi.nlm.nih.gov/18844328/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 18844328</a></li>
        <li>Peripheral nerve regeneration after crush injury in rats. <a href="https://pubmed.ncbi.nlm.nih.gov/21383512/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 21383512</a></li>
        <li>Hippocampal neurogenesis and memory improvement — compounds cross BBB. <a href="https://pubmed.ncbi.nlm.nih.gov/36692723/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 36692723</a></li>
        <li>Neuroprotection against ischemic brain injury — reduced infarct volume. <a href="https://pubmed.ncbi.nlm.nih.gov/25159861/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 25159861</a></li>
        <li>Anti-cancer activity — anti-proliferative across multiple cancer types. <a href="https://pubmed.ncbi.nlm.nih.gov/26547693/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 26547693</a></li>
        <li>Immunomodulatory — beta-glucans activate macrophages and NK cells. <a href="https://pubmed.ncbi.nlm.nih.gov/28266682/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 28266682</a></li>
        <li>Apoptosis induction in human colorectal cancer cells. <a href="https://pubmed.ncbi.nlm.nih.gov/25006989/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 25006989</a></li>
      </ol>

      <p className="text-sm text-gray-700 leading-relaxed">
        <strong>Relevance to this case:</strong> Addresses two concerns simultaneously — potential neuroregeneration after the hypoxic event (SpO2 74%) and possible anti-cancer support. Excellent safety profile (edible mushroom, centuries of use, no significant toxicity). Can be safely combined with other treatments. Available without prescription.
      </p>
    </section>
  );
}
