import React from 'react';
import { ExternalLink } from 'lucide-react';

function Cite({ url, children }) {
  return <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline inline-flex items-center gap-0.5">{children} <ExternalLink className="w-2.5 h-2.5" /></a>;
}

export default function Chemotherapy() {
  return (
    <section id="chemo">
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        The standard of care for glioblastoma is the <strong>Stupp protocol</strong>: maximal safe surgical resection followed by 60 Gy radiation in 30 fractions with concurrent temozolomide (75 mg/m²), then 6 cycles of adjuvant temozolomide (150–200 mg/m², 5/28 days). This protocol has been the global standard since 2005.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Survival Data</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-gray-300">
          <thead><tr className="bg-gray-100 border-b border-gray-300"><th className="p-2.5 text-left font-semibold text-gray-700">Metric</th><th className="p-2.5 text-left font-semibold text-gray-700">With TMZ</th><th className="p-2.5 text-left font-semibold text-gray-700">Without TMZ</th></tr></thead>
          <tbody className="text-gray-700">
            <tr className="border-b border-gray-200"><td className="p-2.5">Median overall survival</td><td className="p-2.5 font-semibold">14.6 months</td><td className="p-2.5">12.1 months</td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5">2-year survival</td><td className="p-2.5 font-semibold">26.5%</td><td className="p-2.5">10.4%</td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5">5-year survival</td><td className="p-2.5 font-semibold">9.8%</td><td className="p-2.5">1.9%</td></tr>
            <tr><td className="p-2.5">MGMT-methylated subset</td><td className="p-2.5 font-semibold">21.7 months</td><td className="p-2.5">15.3 months</td></tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Temozolomide extends median survival by approximately 2.5 months. The benefit is substantially greater in patients with <strong>MGMT promoter methylation</strong> (~40% of GBM), where median survival reaches 21.7 months. In MGMT-unmethylated patients (~60%), the benefit is marginal (1–2 months). Real-world data often shows lower outcomes than clinical trials, with population-based studies reporting median OS of 10–11 months. Extended TMZ courses ({">"} 6 cycles) may further improve survival in select patients (19–26 months median OS).
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Considerations</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-gray-300">
          <thead><tr className="bg-gray-100 border-b border-gray-300"><th className="p-2.5 text-left font-semibold text-gray-700">Arguments For</th><th className="p-2.5 text-left font-semibold text-gray-700">Arguments Against</th></tr></thead>
          <tbody className="text-gray-700 align-top">
            <tr><td className="p-2.5">
              <ul className="list-disc pl-4 space-y-1">
                <li>Only proven treatment to extend GBM survival</li>
                <li>FDA-approved with decades of data</li>
                <li>MGMT-methylated patients derive meaningful benefit</li>
                <li>Extended cycles may improve long-term outcomes</li>
              </ul>
            </td><td className="p-2.5">
              <ul className="list-disc pl-4 space-y-1">
                <li>Median survival still under 15 months; 5-year survival under 10%</li>
                <li>Severe toxicity: myelosuppression, lymphopenia, infection risk</li>
                <li>MGMT-unmethylated patients derive marginal benefit</li>
                <li>Tumor almost always recurs even with treatment</li>
                <li>Significant quality-of-life impact</li>
                <li>Extremely expensive</li>
              </ul>
            </td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Key Studies</h3>
      <ol className="list-decimal pl-6 text-sm text-gray-700 leading-relaxed space-y-2">
        <li>Stupp R et al. Radiotherapy plus concomitant and adjuvant temozolomide for glioblastoma. <em>NEJM</em> 2005. <Cite url="https://www.nejm.org/doi/full/10.1056/NEJMoa043330">NEJM</Cite></li>
        <li>Stupp R et al. Effects of radiotherapy with concomitant and adjuvant temozolomide — 5-year analysis. <em>Lancet Oncol</em> 2009. <Cite url="https://pubmed.ncbi.nlm.nih.gov/19269895/">PMID: 19269895</Cite></li>
        <li>Grossman SA et al. Survival of patients with newly diagnosed GBM treated with radiation and TMZ on research protocols in the US. <em>Clin Cancer Res</em> 2010. <Cite url="https://pubmed.ncbi.nlm.nih.gov/20371685/">PMID: 20371685</Cite></li>
        <li>Huang J et al. Long-term adjuvant TMZ — standard vs extended treatment. <em>Front Oncol</em> 2021. <Cite url="https://pmc.ncbi.nlm.nih.gov/articles/PMC8561964/">PMC8561964</Cite></li>
        <li>Abou Jaoude JF et al. GBM and increased survival with longer chemotherapy. 2019. <Cite url="https://pmc.ncbi.nlm.nih.gov/articles/PMC6710024/">PMC6710024</Cite></li>
        <li>Damato AL et al. Temozolomide chronotherapy. <em>Neuro-Oncol Adv</em> 2021. <Cite url="https://pmc.ncbi.nlm.nih.gov/articles/PMC8086242/">PMC8086242</Cite></li>
        <li>Zhu P et al. Post-FDA approval survival benefit — population-based study. 2017. <Cite url="https://pmc.ncbi.nlm.nih.gov/articles/PMC5546458/">PMC5546458</Cite></li>
      </ol>
    </section>
  );
}
