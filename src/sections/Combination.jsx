import React from 'react';
import XEmbed from '../components/XEmbed';

export default function Combination() {
  return (
    <section id="combination">
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        The rationale for combining fenbendazole/mebendazole with ivermectin is that they target <strong>different pathways</strong>: benzimidazoles disrupt microtubules and glucose uptake while ivermectin targets Akt/mTOR, WNT, and mitochondrial function. The combination may create synergistic anti-tumor effects through multiple simultaneous mechanisms. Both drugs have individually established safety profiles. No combination protocol has been validated in clinical trials — these are community-derived protocols based on anecdotal experience.
      </p>

      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Community-shared protocol available: <a href="https://x.com/ivermectinkart/status/2022739869592883431" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">proposed dosing schedule with cycling patterns and supporting supplements</a>. Anyone considering these combinations should work with a physician and monitor liver function, blood counts, and overall health.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Considerations</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-gray-300">
          <thead><tr className="bg-gray-100 border-b border-gray-300"><th className="p-2.5 text-left font-semibold text-gray-700">For</th><th className="p-2.5 text-left font-semibold text-gray-700">Against</th></tr></thead>
          <tbody className="text-gray-700 align-top">
            <tr><td className="p-2.5"><ul className="list-disc pl-4 space-y-1">
              <li>Multiple mechanisms targeting cancer from different angles</li>
              <li>Both drugs individually well-established for safety</li>
              <li>Growing number of reported positive outcomes</li>
              <li>Some integrative oncologists recommending combinations</li>
              <li>Inexpensive compared to conventional chemotherapy</li>
            </ul></td><td className="p-2.5"><ul className="list-disc pl-4 space-y-1">
              <li>No clinical trial data on the combination</li>
              <li>Drug-drug interactions not well-studied</li>
              <li>Combined hepatic burden unknown</li>
              <li>No standardized dosing protocol</li>
              <li>Risk of false confidence delaying proven treatments</li>
            </ul></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Case Reports &amp; Testimonials</h3>
      <p className="text-sm text-gray-500 italic mb-3">Many involve multiple agents simultaneously. Attribution to any single agent is not possible.</p>

      <XEmbed url="https://x.com/p_mcculloughmd/status/1957602996323246197" />
      <XEmbed url="https://x.com/makismedicine/status/1918958115808285004" />

      <div className="space-y-1 text-sm text-gray-700 mb-4">
        <p><a href="https://x.com/makismedicine/status/1877545575098261801" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Mel Gibson{"'"}s 3 friends — reported positive outcomes with alternative protocols</a></p>
        <p><a href="https://x.com/makismedicine/status/1932387904359481596" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">69-year-old stage 4 lung cancer — improved in 2 months</a></p>
        <p><a href="https://x.com/makismedicine/status/2020999584114458856" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Breast cancer remission in 4 months</a></p>
        <p><a href="https://x.com/makismedicine/status/2021298006268707028" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Stage 3 lymphoma (terminal) — patient recovered</a></p>
        <p><a href="https://x.com/makismedicine/status/2002085325963927729" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Additional positive case reports</a></p>
      </div>
    </section>
  );
}
