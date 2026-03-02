import React from 'react';
import { Apple } from 'lucide-react';
import { SectionHeader, StudyCard, InfoBox, Divider } from '../components/Cards';

export default function Diet() {
  return (
    <section id="diet" className="section-card">
      <SectionHeader
        icon={<Apple className="w-5 h-5" />}
        title="Diet & Nutrition"
        subtitle="Anti-cancer foods, Mediterranean diet, and neuroregenerative nutrition"
        color="green"
      />

      <InfoBox variant="info" title="Why Diet Matters">
        Diet plays a significant role in cancer outcomes and brain health. Research shows that certain 
        dietary patterns can modulate inflammation, oxidative stress, immune function, and even directly 
        affect tumor metabolism. The Mediterranean diet in particular has been associated with reduced 
        cancer risk and better outcomes. For brain health and neuroregeneration, specific nutrients and 
        foods can support repair processes.
      </InfoBox>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Mediterranean Diet</h3>
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-4 mb-5">
        <p className="text-xs font-bold text-green-800 mb-2">The Gold Standard Anti-Cancer Diet Pattern</p>
        <p className="text-[11px] text-green-700 leading-relaxed mb-3">
          The Mediterranean diet — rich in olive oil, fish, vegetables, fruits, nuts, legumes, and whole 
          grains — is the most extensively studied dietary pattern for cancer prevention and is associated 
          with reduced risk of multiple cancer types and improved survival.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/70 rounded-lg p-2">
            <p className="text-[10px] font-bold text-green-800">Core Components</p>
            <p className="text-[10px] text-green-600 mt-0.5">Extra virgin olive oil, fatty fish, leafy greens, berries, nuts, legumes, whole grains</p>
          </div>
          <div className="bg-white/70 rounded-lg p-2">
            <p className="text-[10px] font-bold text-green-800">Key Benefits</p>
            <p className="text-[10px] text-green-600 mt-0.5">Anti-inflammatory, antioxidant, anti-angiogenic, immune-supportive</p>
          </div>
        </div>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Top Anti-Cancer Foods & Compounds</h3>
      <div className="space-y-2 mb-5">
        <div className="bg-green-50 border border-green-100 rounded-xl p-3">
          <p className="text-xs font-bold text-green-800">Cruciferous Vegetables (Broccoli, Kale, Cauliflower)</p>
          <p className="text-[11px] text-green-600 mt-1">Contain sulforaphane and indole-3-carbinol — shown to inhibit cancer cell growth and promote apoptosis. Sulforaphane crosses the blood-brain barrier.</p>
          <p className="text-[10px] text-green-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/22877795/" target="_blank" className="underline">PMID: 22877795</a></p>
        </div>
        <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-3">
          <p className="text-xs font-bold text-yellow-800">Turmeric / Curcumin</p>
          <p className="text-[11px] text-yellow-700 mt-1">Potent anti-inflammatory and anti-cancer compound. Studies show it can cross the blood-brain barrier and inhibit glioblastoma cell growth. Enhances temozolomide sensitivity.</p>
          <p className="text-[10px] text-yellow-600 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/26851267/" target="_blank" className="underline">PMID: 26851267</a></p>
        </div>
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-3">
          <p className="text-xs font-bold text-purple-800">Berries (Blueberries, Blackberries, Raspberries)</p>
          <p className="text-[11px] text-purple-600 mt-1">Rich in anthocyanins and ellagic acid. Shown to inhibit cancer cell proliferation, reduce oxidative stress, and support neurogenesis.</p>
          <p className="text-[10px] text-purple-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/27697159/" target="_blank" className="underline">PMID: 27697159</a></p>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
          <p className="text-xs font-bold text-emerald-800">Green Tea (EGCG)</p>
          <p className="text-[11px] text-emerald-600 mt-1">Epigallocatechin gallate (EGCG) has shown anti-cancer and neuroprotective effects. Inhibits tumor angiogenesis and promotes cancer cell apoptosis.</p>
          <p className="text-[10px] text-emerald-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/26092246/" target="_blank" className="underline">PMID: 26092246</a></p>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-3">
          <p className="text-xs font-bold text-orange-800">Fatty Fish (Salmon, Sardines, Mackerel)</p>
          <p className="text-[11px] text-orange-600 mt-1">Omega-3 fatty acids (EPA/DHA) are anti-inflammatory, support brain health, and have shown anti-tumor effects in multiple studies. DHA is a key structural component of brain tissue.</p>
          <p className="text-[10px] text-orange-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/24505395/" target="_blank" className="underline">PMID: 24505395</a></p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-3">
          <p className="text-xs font-bold text-red-800">Garlic & Onions (Allium Vegetables)</p>
          <p className="text-[11px] text-red-600 mt-1">Allicin and organosulfur compounds show anti-cancer activity. Higher allium vegetable intake is associated with reduced cancer risk in epidemiological studies.</p>
          <p className="text-[10px] text-red-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/25586902/" target="_blank" className="underline">PMID: 25586902</a></p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
          <p className="text-xs font-bold text-amber-800">Extra Virgin Olive Oil</p>
          <p className="text-[11px] text-amber-600 mt-1">Oleocanthal and polyphenols have direct anti-cancer and anti-inflammatory properties. Cornerstone of the Mediterranean diet.</p>
          <p className="text-[10px] text-amber-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/25019344/" target="_blank" className="underline">PMID: 25019344</a></p>
        </div>
        <div className="bg-teal-50 border border-teal-100 rounded-xl p-3">
          <p className="text-xs font-bold text-teal-800">Walnuts</p>
          <p className="text-[11px] text-teal-600 mt-1">Rich in omega-3 ALA, polyphenols, and melatonin. Animal studies show walnut consumption slowed glioblastoma growth.</p>
          <p className="text-[10px] text-teal-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/25162569/" target="_blank" className="underline">PMID: 25162569</a></p>
        </div>
      </div>

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Neuroregenerative Foods & Herbs</h3>
      <div className="space-y-2 mb-5">
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3">
          <p className="text-xs font-bold text-indigo-800">Rosemary (Carnosic Acid)</p>
          <p className="text-[11px] text-indigo-600 mt-1">Carnosic acid is neuroprotective and promotes neurogenesis. Also shows anti-glioblastoma activity in preclinical studies.</p>
          <p className="text-[10px] text-indigo-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/26556085/" target="_blank" className="underline">PMID: 26556085</a></p>
        </div>
        <div className="bg-pink-50 border border-pink-100 rounded-xl p-3">
          <p className="text-xs font-bold text-pink-800">Ginger (Gingerols, Shogaols)</p>
          <p className="text-[11px] text-pink-600 mt-1">Anti-inflammatory and neuroprotective. 6-Shogaol has shown anti-cancer activity against brain tumor cells in lab studies.</p>
          <p className="text-[10px] text-pink-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/25230520/" target="_blank" className="underline">PMID: 25230520</a></p>
        </div>
        <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-3">
          <p className="text-xs font-bold text-cyan-800">Ashwagandha (Withania somnifera)</p>
          <p className="text-[11px] text-cyan-600 mt-1">Adaptogenic herb with neuroprotective, neuroregenative, and anti-cancer properties. Withanolides show activity against brain tumor cells.</p>
          <p className="text-[10px] text-cyan-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/21369449/" target="_blank" className="underline">PMID: 21369449</a></p>
        </div>
        <div className="bg-violet-50 border border-violet-100 rounded-xl p-3">
          <p className="text-xs font-bold text-violet-800">Bacopa Monnieri (Brahmi)</p>
          <p className="text-[11px] text-violet-600 mt-1">Traditional brain tonic with proven neuroprotective and neuroregenative effects. Enhances BDNF levels and supports memory recovery.</p>
          <p className="text-[10px] text-violet-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/24252493/" target="_blank" className="underline">PMID: 24252493</a></p>
        </div>
        <div className="bg-lime-50 border border-lime-100 rounded-xl p-3">
          <p className="text-xs font-bold text-lime-800">Gotu Kola (Centella asiatica)</p>
          <p className="text-[11px] text-lime-600 mt-1">Promotes neurogenesis and nerve regeneration. Asiatic acid component shows neuroprotective effects after ischemic injury.</p>
          <p className="text-[10px] text-lime-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/25655581/" target="_blank" className="underline">PMID: 25655581</a></p>
        </div>
      </div>

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Foods to Avoid / Reduce</h3>
      <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-4">
        <ul className="space-y-2 text-xs text-red-800 leading-relaxed">
          <li className="flex items-start gap-2"><span className="text-red-400">•</span><span><strong>Refined sugar / high-glycemic foods:</strong> Cancer cells have increased glucose uptake (Warburg effect). Minimizing sugar may help starve tumors.</span></li>
          <li className="flex items-start gap-2"><span className="text-red-400">•</span><span><strong>Processed meats:</strong> WHO classifies as Group 1 carcinogen. Associated with increased cancer risk.</span></li>
          <li className="flex items-start gap-2"><span className="text-red-400">•</span><span><strong>Excessive alcohol:</strong> Known carcinogen and neurotoxin. Impairs brain recovery.</span></li>
          <li className="flex items-start gap-2"><span className="text-red-400">•</span><span><strong>Trans fats / ultra-processed foods:</strong> Pro-inflammatory and associated with worse cancer outcomes.</span></li>
          <li className="flex items-start gap-2"><span className="text-red-400">•</span><span><strong>Excessive red meat:</strong> Associated with increased risk of certain cancers in large epidemiological studies.</span></li>
        </ul>
      </div>

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Key Studies</h3>

      <StudyCard
        title="Mediterranean diet and cancer risk — systematic review and meta-analysis"
        description="Large-scale analysis of Mediterranean diet adherence and cancer outcomes."
        findings="Higher adherence to Mediterranean diet associated with significant reduction in cancer mortality and incidence across multiple cancer types."
        url="https://pubmed.ncbi.nlm.nih.gov/20810976/"
        type="study"
      />

      <StudyCard
        title="Ketogenic diet and brain tumors — metabolic approach"
        description="Research on how restricting glucose through ketogenic diet may affect brain tumor growth."
        findings="Preliminary evidence that ketogenic diet may complement standard brain cancer treatment by restricting glucose availability to tumor cells."
        url="https://pubmed.ncbi.nlm.nih.gov/25401061/"
        type="study"
      />

      <StudyCard
        title="Sulforaphane and brain cancer — preclinical evidence"
        description="Study on broccoli-derived sulforaphane's effects on glioblastoma cells."
        findings="Sulforaphane inhibited glioblastoma cell growth and enhanced temozolomide sensitivity. Crosses the blood-brain barrier."
        url="https://pubmed.ncbi.nlm.nih.gov/22877795/"
        type="study"
      />

      <StudyCard
        title="Omega-3 fatty acids and neuroregeneration after brain injury"
        description="Review of omega-3s' role in brain repair and neuroprotection."
        findings="DHA supplementation improved neurological outcomes after brain injury in animal models. Supports membrane repair and reduces neuroinflammation."
        url="https://pubmed.ncbi.nlm.nih.gov/24505395/"
        type="study"
      />

      <InfoBox variant="success" title="Practical Recommendation">
        A Mediterranean-style diet enriched with anti-cancer and neuroregenerative foods (cruciferous 
        vegetables, berries, turmeric, green tea, fatty fish, walnuts, olive oil) while minimizing sugar 
        and processed foods represents a well-supported, low-risk nutritional strategy that can complement 
        any treatment approach. Consider consulting a nutritionist experienced with cancer patients.
      </InfoBox>
    </section>
  );
}
