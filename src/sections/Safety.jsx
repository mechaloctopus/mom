import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { SectionHeader, StudyCard, InfoBox, Divider } from '../components/Cards';

export default function Safety() {
  return (
    <section id="safety" className="section-card">
      <SectionHeader
        icon={<AlertTriangle className="w-5 h-5" />}
        title="Safety & Toxicity"
        subtitle="What we know about the safety of these agents"
        color="orange"
      />

      <InfoBox variant="success" title="Key Safety Point">
        Fenbendazole is virtually identical to mebendazole, which is an FDA-approved human medicine. 
        There has <strong>never been a documented, proven case of patient harm</strong> from fenbendazole 
        in reported use for cancer. Both drugs have extremely wide safety margins.
      </InfoBox>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Fenbendazole / Mebendazole Safety</h3>
      <div className="space-y-3 mb-5">
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
          <p className="text-xs font-bold text-emerald-800 mb-1">Extremely Wide Safety Margin</p>
          <p className="text-[11px] text-emerald-700 leading-relaxed">
            Benzimidazoles are among the safest drugs known. In veterinary use, fenbendazole is given at 
            doses far exceeding proposed anti-cancer doses with minimal side effects. Mebendazole has been 
            used in humans for decades at therapeutic doses with an excellent safety record.
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p className="text-xs font-bold text-blue-800 mb-1">Selective Toxicity</p>
          <p className="text-[11px] text-blue-700 leading-relaxed">
            Benzimidazoles bind more avidly to parasite (and potentially cancer cell) tubulin than to 
            normal mammalian cell tubulin, providing a degree of selectivity that many chemotherapy drugs lack.
          </p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs font-bold text-amber-800 mb-1">Potential Side Effects (Rare)</p>
          <p className="text-[11px] text-amber-700 leading-relaxed">
            At higher doses or prolonged use: liver enzyme elevation (monitor with blood tests), 
            mild GI upset (nausea, diarrhea), rare bone marrow suppression at very high doses. 
            These are generally reversible upon dose reduction.
          </p>
        </div>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Ivermectin Safety</h3>
      <div className="space-y-3 mb-5">
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
          <p className="text-xs font-bold text-purple-800 mb-1">Nobel Prize-Winning Safety Record</p>
          <p className="text-[11px] text-purple-700 leading-relaxed">
            Ivermectin has been administered billions of times worldwide since the 1980s. It is on the 
            WHO's List of Essential Medicines. At standard antiparasitic doses (0.2 mg/kg), serious 
            adverse effects are extremely rare.
          </p>
        </div>
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
          <p className="text-xs font-bold text-indigo-800 mb-1">Higher Doses for Cancer</p>
          <p className="text-[11px] text-indigo-700 leading-relaxed">
            Anti-cancer protocols may use higher doses than standard antiparasitic dosing. Safety at 
            these higher doses is less well-established. Some protocols use up to 1-2 mg/kg, which 
            exceeds standard dosing. Monitoring is recommended.
          </p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs font-bold text-amber-800 mb-1">Known Side Effects</p>
          <p className="text-[11px] text-amber-700 leading-relaxed">
            Dizziness, nausea, diarrhea, and Mazzotti reaction (in patients with parasitic infections). 
            At high doses: potential neurotoxicity (if P-glycoprotein function is compromised), 
            liver enzyme elevation. Drug interactions with CYP3A4 inhibitors/inducers.
          </p>
        </div>
      </div>

      <Divider />

      <StudyCard
        title="Fenbendazole toxicity documentation — no proven cases of patient harm"
        description="Discussion of fenbendazole's safety record in the context of human cancer use."
        findings="No documented, proven case of patient harm from fenbendazole has been reported."
        url="https://x.com/makismedicine/status/1994967866488312208?s=46"
        type="article"
      />

      <Divider />

      <h3 className="text-sm font-bold text-gray-900 mb-3">Comparison: Alternative vs. Chemotherapy Toxicity</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-[11px] border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2.5 font-bold text-gray-700 border-b border-gray-200">Factor</th>
              <th className="text-left p-2.5 font-bold text-emerald-700 border-b border-gray-200">Fen/Iver/Meb</th>
              <th className="text-left p-2.5 font-bold text-red-700 border-b border-gray-200">Temozolomide</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2.5 border-b border-gray-100 font-medium">Bone marrow suppression</td><td className="p-2.5 border-b border-gray-100 text-emerald-600">Very rare</td><td className="p-2.5 border-b border-gray-100 text-red-600">Common (major toxicity)</td></tr>
            <tr className="bg-gray-50"><td className="p-2.5 border-b border-gray-100 font-medium">Nausea/vomiting</td><td className="p-2.5 border-b border-gray-100 text-emerald-600">Mild, uncommon</td><td className="p-2.5 border-b border-gray-100 text-red-600">Common, often severe</td></tr>
            <tr><td className="p-2.5 border-b border-gray-100 font-medium">Infection risk</td><td className="p-2.5 border-b border-gray-100 text-emerald-600">Not increased</td><td className="p-2.5 border-b border-gray-100 text-red-600">Significantly increased</td></tr>
            <tr className="bg-gray-50"><td className="p-2.5 border-b border-gray-100 font-medium">Liver effects</td><td className="p-2.5 border-b border-gray-100 text-amber-600">Monitor at high doses</td><td className="p-2.5 border-b border-gray-100 text-red-600">Hepatotoxicity risk</td></tr>
            <tr><td className="p-2.5 border-b border-gray-100 font-medium">Fatigue</td><td className="p-2.5 border-b border-gray-100 text-emerald-600">Minimal</td><td className="p-2.5 border-b border-gray-100 text-red-600">Significant</td></tr>
            <tr className="bg-gray-50"><td className="p-2.5 border-b border-gray-100 font-medium">Hair loss</td><td className="p-2.5 border-b border-gray-100 text-emerald-600">No</td><td className="p-2.5 border-b border-gray-100 text-amber-600">Possible</td></tr>
            <tr><td className="p-2.5 border-b border-gray-100 font-medium">Quality of life impact</td><td className="p-2.5 border-b border-gray-100 text-emerald-600">Minimal</td><td className="p-2.5 border-b border-gray-100 text-red-600">Significant</td></tr>
            <tr className="bg-gray-50"><td className="p-2.5 font-medium">Proven cancer efficacy</td><td className="p-2.5 text-amber-600">Preclinical/anecdotal</td><td className="p-2.5 text-emerald-600">Proven (modest benefit)</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox variant="warning" title="Important Note" >
        While the safety profile of benzimidazoles and ivermectin is considerably better than chemotherapy, 
        temozolomide remains the only treatment with proven survival benefit in randomized controlled trials 
        for glioblastoma. The decision between options involves weighing quality of life, proven efficacy, 
        and individual values.
      </InfoBox>
    </section>
  );
}
