import React from 'react';
import { Heart } from 'lucide-react';
import { SectionHeader, StudyCard, ProConCard, InfoBox, Divider, BackToNav } from '../components/Cards';

export default function Probiotics() {
  return (
    <section id="probiotics" className="section-card">
      <SectionHeader
        icon={<Heart className="w-5 h-5" />}
        title="Probiotics & Gut Health"
        subtitle="Gut-brain axis, yogurt cultures, neurogenesis, and cancer"
        color="pink"
      />

      <InfoBox variant="info" title="The Gut-Brain Axis">
        The gut microbiome communicates directly with the brain via the <strong>gut-brain axis</strong> — 
        a bidirectional network involving the vagus nerve, immune signaling, and microbial metabolites. 
        Research increasingly shows that gut bacteria influence brain health, neuroinflammation, 
        neurogenesis, immune function, and even cancer treatment outcomes. The composition of gut 
        bacteria can be modified through diet, probiotics, and fermented foods like yogurt.
      </InfoBox>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Beneficial Bacteria for Brain & Cancer</h3>
      <div className="space-y-2 mb-5">
        <div className="bg-pink-50 border border-pink-100 rounded-xl p-3">
          <p className="text-xs font-bold text-pink-800">Lactobacillus rhamnosus (GG)</p>
          <p className="text-[11px] text-pink-600 mt-1">One of the most studied probiotics. Reduces neuroinflammation via vagus nerve signaling. Shown to modulate GABA receptors in the brain. Enhances anti-tumor immune responses.</p>
          <p className="text-[10px] text-pink-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/21876150/" target="_blank" className="underline">PMID: 21876150</a></p>
        </div>
        <div className="bg-rose-50 border border-rose-100 rounded-xl p-3">
          <p className="text-xs font-bold text-rose-800">Lactobacillus plantarum</p>
          <p className="text-[11px] text-rose-600 mt-1">Produces BDNF-enhancing metabolites. Shows anti-cancer activity against colorectal cancer cells. Reduces oxidative stress and inflammation in the brain.</p>
          <p className="text-[10px] text-rose-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/30974495/" target="_blank" className="underline">PMID: 30974495</a></p>
        </div>
        <div className="bg-fuchsia-50 border border-fuchsia-100 rounded-xl p-3">
          <p className="text-xs font-bold text-fuchsia-800">Bifidobacterium longum</p>
          <p className="text-[11px] text-fuchsia-600 mt-1">Reduces cortisol and stress responses. Produces short-chain fatty acids (SCFAs) that cross the blood-brain barrier and support neuronal health. Enhances immune checkpoint therapy effectiveness.</p>
          <p className="text-[10px] text-fuchsia-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/27793220/" target="_blank" className="underline">PMID: 27793220</a></p>
        </div>
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-3">
          <p className="text-xs font-bold text-purple-800">Lactobacillus acidophilus</p>
          <p className="text-[11px] text-purple-600 mt-1">Common yogurt culture. Supports immune function, reduces gut inflammation, and may enhance anti-tumor immunity. Produces hydrogen peroxide which has anti-cancer properties.</p>
          <p className="text-[10px] text-purple-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/24882755/" target="_blank" className="underline">PMID: 24882755</a></p>
        </div>
        <div className="bg-violet-50 border border-violet-100 rounded-xl p-3">
          <p className="text-xs font-bold text-violet-800">Akkermansia muciniphila</p>
          <p className="text-[11px] text-violet-600 mt-1">Emerging "next-generation" probiotic. Strengthens gut barrier, reduces systemic inflammation, and dramatically improves response to cancer immunotherapy (anti-PD-1). Found in higher levels in cancer immunotherapy responders.</p>
          <p className="text-[10px] text-violet-500 mt-1">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/29097494/" target="_blank" className="underline">PMID: 29097494</a></p>
        </div>
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3">
          <p className="text-xs font-bold text-indigo-800">Streptococcus thermophilus</p>
          <p className="text-[11px] text-indigo-600 mt-1">Standard yogurt culture. Produces antioxidants, supports immune function, and has shown anti-proliferative effects against cancer cells in laboratory studies.</p>
        </div>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Bacteria That May Be Harmful</h3>
      <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-5">
        <p className="text-xs font-bold text-red-800 mb-2">Bacteria to be Cautious About</p>
        <div className="space-y-2 text-[11px] text-red-700 leading-relaxed">
          <div>
            <p className="font-bold">Fusobacterium nucleatum</p>
            <p>Promotes tumor growth and suppresses anti-tumor immunity. Associated with colorectal cancer progression. Found in some tumor tissues — reducing its abundance may be beneficial.</p>
          </div>
          <div className="border-t border-red-200 pt-2">
            <p className="font-bold">Bacteroides fragilis (Enterotoxigenic strains)</p>
            <p>Toxin-producing strains promote inflammation and are associated with colorectal cancer. Standard yogurt cultures do not contain this, but broad-spectrum antibiotics can allow overgrowth.</p>
          </div>
          <div className="border-t border-red-200 pt-2">
            <p className="font-bold">Certain Clostridium species</p>
            <p>Some Clostridium species produce metabolites that may promote cancer. However, Clostridium butyricum (butyrate producer) is actually beneficial — specificity matters.</p>
          </div>
        </div>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Gut Microbiome & Cancer Treatment</h3>
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 rounded-xl p-4 mb-5">
        <p className="text-xs text-pink-800 leading-relaxed mb-2">
          <strong>Critical finding:</strong> Gut microbiome composition significantly affects cancer treatment outcomes. 
          Patients with diverse, healthy gut bacteria respond better to immunotherapy, chemotherapy, and radiation.
        </p>
        <ul className="space-y-1.5 text-[11px] text-pink-700">
          <li>• Patients with high Akkermansia responded 3x better to anti-PD-1 immunotherapy</li>
          <li>• Antibiotic use during cancer treatment worsened survival — disrupts beneficial gut bacteria</li>
          <li>• Fecal microbiota transplant from treatment responders improved outcomes in non-responders</li>
          <li>• High-fiber diet promotes SCFA production, which enhances anti-tumor immunity</li>
          <li>• Fermented foods (yogurt, kefir, kimchi) help maintain microbiome diversity</li>
        </ul>
      </div>

      <ProConCard
        pros={[
          'Gut microbiome directly influences cancer treatment outcomes and immune function',
          'Probiotics are extremely safe with virtually no serious side effects',
          'Fermented foods (yogurt, kefir) provide diverse beneficial bacteria naturally',
          'Specific strains (Akkermansia, Bifidobacterium) shown to enhance cancer immunotherapy',
          'Gut-brain axis means gut health directly impacts brain health and neuroregeneration',
          'Short-chain fatty acids (from gut bacteria) cross blood-brain barrier and support neurons',
          'Easily implementable alongside any treatment approach',
          'May help counteract gut damage from medications or poor appetite',
        ]}
        cons={[
          'Probiotic supplements vary widely in quality and viability',
          'Specific therapeutic strains may not be available in standard yogurt',
          'Effects of probiotics on brain cancer specifically are not well-studied',
          'In severely immunocompromised patients, live bacteria carry theoretical infection risk (very rare)',
          'Not all fermented foods contain the same beneficial strains',
          'Microbiome testing is expensive and not standardized',
          'Effects take time — weeks to months to shift microbiome composition meaningfully',
        ]}
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Key Studies</h3>

      <StudyCard
        title="Gut microbiome modulates response to anti-PD-1 immunotherapy in cancer"
        description="Landmark study showing that gut bacteria composition determines response to cancer immunotherapy."
        findings="Patients with favorable gut microbiome (high Akkermansia muciniphila) had significantly better response to anti-PD-1 therapy. Fecal transplant from responders could transfer this benefit."
        url="https://pubmed.ncbi.nlm.nih.gov/29097494/"
        type="study"
      />

      <StudyCard
        title="Ingestion of Lactobacillus strain regulates emotional behavior and central GABA receptor expression via vagus nerve"
        description="Groundbreaking study proving gut bacteria directly affect brain chemistry through the vagus nerve."
        findings="L. rhamnosus changed GABA receptor expression in multiple brain regions, reducing anxiety and depression-like behavior. Effect was abolished when the vagus nerve was cut — proving direct gut-brain communication."
        url="https://pubmed.ncbi.nlm.nih.gov/21876150/"
        type="study"
      />

      <StudyCard
        title="Gut microbiota composition and diversity are related to brain function"
        description="Study linking gut microbiome diversity to brain structure and cognitive function."
        findings="Higher microbiome diversity was associated with better brain connectivity and cognitive performance. Specific bacterial metabolites (SCFAs) showed neuroprotective properties."
        url="https://pubmed.ncbi.nlm.nih.gov/28265034/"
        type="study"
      />

      <StudyCard
        title="Antibiotics and cancer immunotherapy outcomes"
        description="Study on how antibiotic use impacts cancer treatment effectiveness."
        findings="Antibiotic use within 30 days of immunotherapy start was associated with significantly worse survival — highlighting the importance of maintaining gut microbiome health during cancer treatment."
        url="https://pubmed.ncbi.nlm.nih.gov/29255092/"
        type="study"
      />

      <StudyCard
        title="Probiotics and glioblastoma — emerging gut-brain-tumor axis"
        description="Review of how gut microbiome may influence brain tumor biology and treatment."
        findings="Emerging evidence that gut-brain axis modulation through probiotics may influence brain tumor microenvironment, immune infiltration, and treatment response."
        url="https://pubmed.ncbi.nlm.nih.gov/34072951/"
        type="study"
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Best Fermented Foods for Gut Health</h3>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="bg-pink-50 rounded-xl p-3 text-center">
          <p className="text-xs font-bold text-pink-800">Yogurt</p>
          <p className="text-[10px] text-pink-600 mt-0.5">L. acidophilus, S. thermophilus, L. bulgaricus</p>
        </div>
        <div className="bg-rose-50 rounded-xl p-3 text-center">
          <p className="text-xs font-bold text-rose-800">Kefir</p>
          <p className="text-[10px] text-rose-600 mt-0.5">30+ beneficial strains, more diverse than yogurt</p>
        </div>
        <div className="bg-orange-50 rounded-xl p-3 text-center">
          <p className="text-xs font-bold text-orange-800">Kimchi</p>
          <p className="text-[10px] text-orange-600 mt-0.5">Lactobacillus spp., anti-cancer compounds</p>
        </div>
        <div className="bg-amber-50 rounded-xl p-3 text-center">
          <p className="text-xs font-bold text-amber-800">Sauerkraut</p>
          <p className="text-[10px] text-amber-600 mt-0.5">L. plantarum, vitamin C, anti-inflammatory</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-3 text-center">
          <p className="text-xs font-bold text-yellow-800">Miso</p>
          <p className="text-[10px] text-yellow-600 mt-0.5">B. subtilis, anti-cancer isoflavones</p>
        </div>
        <div className="bg-emerald-50 rounded-xl p-3 text-center">
          <p className="text-xs font-bold text-emerald-800">Kombucha</p>
          <p className="text-[10px] text-emerald-600 mt-0.5">Diverse bacteria + yeast, antioxidants</p>
        </div>
      </div>

      <InfoBox variant="success" title="Practical Recommendation">
        Incorporating diverse fermented foods (especially kefir, which has the most strain diversity) 
        into the daily diet is a simple, safe, and well-supported strategy. Look for plain, unsweetened 
        yogurt/kefir with live cultures. Avoid during active severe immunosuppression without physician 
        guidance. Consider a high-quality multi-strain probiotic supplement containing Lactobacillus and 
        Bifidobacterium species.
      </InfoBox>
      <BackToNav />
    </section>
  );
}
