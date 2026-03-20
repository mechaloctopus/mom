import React from 'react';

export default function Probiotics() {
  return (
    <section id="probiotics">
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        The gut microbiome communicates with the brain via the <strong>gut-brain axis</strong> — a bidirectional network involving the vagus nerve, immune signaling, and microbial metabolites. Research shows gut bacteria influence neuroinflammation, neurogenesis, immune function, and cancer treatment outcomes. Composition can be modified through diet, probiotics, and fermented foods.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Key Strains for Brain &amp; Cancer</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-gray-300">
          <thead><tr className="bg-gray-100 border-b border-gray-300"><th className="p-2.5 text-left font-semibold text-gray-700">Strain</th><th className="p-2.5 text-left font-semibold text-gray-700">Documented Properties</th></tr></thead>
          <tbody className="text-gray-700">
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">L. rhamnosus GG</td><td className="p-2.5">Reduces neuroinflammation via vagus nerve. Modulates GABA receptors. Enhances anti-tumor immune responses. <a href="https://pubmed.ncbi.nlm.nih.gov/21876150/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 21876150</a></td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">L. plantarum</td><td className="p-2.5">Produces BDNF-enhancing metabolites. Anti-cancer activity against colorectal cancer cells. Reduces oxidative stress and brain inflammation. <a href="https://pubmed.ncbi.nlm.nih.gov/30974495/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 30974495</a></td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">B. longum</td><td className="p-2.5">Reduces cortisol/stress. Produces SCFAs that cross BBB and support neurons. Enhances immune checkpoint therapy effectiveness. <a href="https://pubmed.ncbi.nlm.nih.gov/27793220/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">PMID: 27793220</a></td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">L. acidophilus</td><td className="p-2.5">Classic probiotic. Supports gut barrier integrity. Immune system modulation. Anti-inflammatory.</td></tr>
            <tr><td className="p-2.5 font-semibold">S. thermophilus</td><td className="p-2.5">Yogurt culture. Produces folate and antioxidants. Supports gut-brain axis communication. Synergistic with L. bulgaricus.</td></tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        <strong>Cancer relevance:</strong> Gut microbiome composition affects immunotherapy response. Patients with diverse microbiomes show better anti-PD-1/PD-L1 response rates. Probiotics may help maintain gut integrity during chemotherapy. SCFAs produced by gut bacteria (butyrate, propionate) have documented anti-cancer properties and cross the blood-brain barrier to support neuronal health.
      </p>

      <p className="text-sm text-gray-700 leading-relaxed">
        <strong>Practical approach:</strong> Daily probiotic supplementation (multi-strain, 50+ billion CFU) combined with fermented foods (yogurt, kefir, sauerkraut) and prebiotic fiber. Safe to combine with any treatment protocol. Particularly important if antibiotics are administered (to restore microbiome diversity).
      </p>
    </section>
  );
}
