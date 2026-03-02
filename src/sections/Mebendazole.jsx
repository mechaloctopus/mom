import React from 'react';
import { Beaker } from 'lucide-react';
import { SectionHeader, StudyCard, ProConCard, InfoBox, Divider } from '../components/Cards';

export default function Mebendazole() {
  return (
    <section id="mebendazole" className="section-card">
      <SectionHeader
        icon={<Beaker className="w-5 h-5" />}
        title="Mebendazole"
        subtitle="FDA-approved human benzimidazole — closest cousin to fenbendazole"
        color="teal"
      />

      <InfoBox variant="info" title="What is Mebendazole?">
        Mebendazole is an <strong>FDA-approved human antiparasitic</strong> (used for pinworms, hookworms, etc.) 
        that is structurally nearly identical to fenbendazole. Both belong to the benzimidazole family and share 
        the same core mechanism: binding β-tubulin to disrupt microtubules. Mebendazole has progressed further 
        into human clinical trials for cancer, particularly glioblastoma, than fenbendazole.
      </InfoBox>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Structural Comparison</h3>
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 rounded-xl p-4 mb-5">
        <div className="space-y-3">
          <div>
            <p className="text-xs font-bold text-teal-800">Mebendazole (Human Drug)</p>
            <p className="text-[11px] text-teal-600 mt-0.5">Methyl 5-benzoyl-1H-benzimidazol-2-ylcarbamate</p>
            <p className="text-[11px] text-teal-500">Formula: C₁₆H₁₃N₃O₃ — Has a <strong>benzoyl</strong> (C₆H₅C=O) group</p>
          </div>
          <div className="border-t border-teal-200 pt-3">
            <p className="text-xs font-bold text-teal-800">Fenbendazole (Veterinary Drug)</p>
            <p className="text-[11px] text-teal-600 mt-0.5">Methyl 5-(phenylthio)-1H-benzimidazol-2-ylcarbamate</p>
            <p className="text-[11px] text-teal-500">Formula: C₁₅H₁₃N₃O₂S — Has a <strong>phenylthio</strong> (C₆H₅S-) group</p>
          </div>
          <div className="border-t border-teal-200 pt-3">
            <p className="text-xs font-bold text-teal-800">Key Difference</p>
            <p className="text-[11px] text-teal-600 mt-0.5">
              Only one atom/group swap (carbonyl vs. sulfur linkage). Their overall shape, size, and 
              binding properties to tubulin are highly comparable — essentially "cousins" with nearly 
              interchangeable mechanisms.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Why Mebendazole Matters</h3>
      <div className="grid grid-cols-1 gap-2 mb-5">
        <div className="bg-teal-50 border border-teal-100 rounded-xl p-3">
          <p className="text-xs font-bold text-teal-800">FDA-Approved for Humans</p>
          <p className="text-[11px] text-teal-600 mt-1">Unlike fenbendazole, mebendazole is already approved for human use with known safety data</p>
        </div>
        <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-3">
          <p className="text-xs font-bold text-cyan-800">Clinical Trials for Brain Cancer</p>
          <p className="text-[11px] text-cyan-600 mt-1">Phase 1/2 clinical trials have been conducted for glioblastoma, showing safety and early efficacy signals</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
          <p className="text-xs font-bold text-blue-800">Johns Hopkins Research</p>
          <p className="text-[11px] text-blue-600 mt-1">Johns Hopkins researchers have patented an enhanced mebendazole formulation specifically for cancer treatment</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
          <p className="text-xs font-bold text-emerald-800">Brain Penetration Confirmed</p>
          <p className="text-[11px] text-emerald-600 mt-1">Studies show mebendazole can cross the blood-brain barrier — critical for brain tumor treatment</p>
        </div>
      </div>

      <ProConCard
        pros={[
          'FDA-approved for human use — known safety profile in people',
          'Active clinical trials for glioblastoma (brain cancer) — Phase 1/2 data exists',
          'Confirmed brain penetration — crosses the blood-brain barrier',
          'Johns Hopkins researchers patented enhanced formulation for cancer',
          'Glioblastoma Foundation supporting drug development',
          'Same mechanism as fenbendazole but with stronger clinical evidence base',
          'May have slightly higher tubulin binding affinity than fenbendazole in some models',
          'Can be prescribed off-label by any physician',
        ]}
        cons={[
          'Not yet approved specifically for cancer treatment',
          'Clinical trial data is still limited (small patient numbers)',
          'Poor water solubility — bioavailability challenges',
          'Optimal cancer dosing still being determined',
          'May cause liver enzyme elevation at higher doses',
          'Less anecdotal community experience than fenbendazole for cancer',
          'Enhanced formulations not yet widely available',
        ]}
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Studies & Clinical Trials</h3>

      <StudyCard
        title="Brain Penetration and Efficacy of Different Mebendazole Formulations"
        description="Critical study examining whether mebendazole can reach brain tumors at therapeutic concentrations."
        findings="Confirmed that mebendazole crosses the blood-brain barrier — essential for treating brain cancers like glioblastoma."
        url="https://aacrjournals.org/clincancerres/article/21/15/3462/78928/Brain-Penetration-and-Efficacy-of-Different"
        type="study"
      />

      <StudyCard
        title="Mebendazole Clinical Trial for Brain Tumors (NCT01729260)"
        description="Registered clinical trial studying mebendazole for brain tumor treatment in humans."
        findings="Clinical trial data on mebendazole safety and efficacy in brain cancer patients."
        url="https://clinicaltrials.gov/study/NCT01729260"
        type="trial"
      />

      <StudyCard
        title="Mebendazole as anti-cancer agent — clinical evidence"
        description="Published evidence on mebendazole's role in cancer treatment."
        url="https://pubmed.ncbi.nlm.nih.gov/33506200/"
        type="study"
      />

      <StudyCard
        title="Johns Hopkins Enhanced Mebendazole Formulation Patent"
        description="Johns Hopkins researchers developed and patented an improved mebendazole formulation designed to enhance bioavailability specifically for cancer treatment."
        url="https://trial.medpath.com/news/a86ded46bc870bbd/johns-hopkins-researchers-patent-enhanced-mebendazole-formulation-for-cancer-treatment"
        type="article"
      />

      <StudyCard
        title="Glioblastoma Foundation Drug Development Award for Mebendazole"
        description="The Glioblastoma Foundation announced a drug development award supporting mebendazole research for brain cancer."
        url="https://glioblastomafoundation.org/news/glioblastoma-foundation-announces-drug-development-award"
        type="article"
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Expert Commentary</h3>

      <div className="testimonial-card">
        <a href="https://x.com/thehealthb0t/status/2011944781736526334?s=46" target="_blank" rel="noopener noreferrer"
          className="text-sm text-gray-700 leading-relaxed block">
          Discussion on the relationship between mebendazole and fenbendazole, their shared mechanisms, 
          and why mebendazole's FDA-approved status may make it a more accessible option for patients 
          seeking benzimidazole-based cancer treatment.
          <span className="text-xs text-primary-500 font-medium mt-2 block">View source →</span>
        </a>
      </div>

      <InfoBox variant="info" title="Key Takeaway">
        Mebendazole and fenbendazole are essentially interchangeable in mechanism. The biggest practical 
        difference is that mebendazole is approved for human use and has clinical trial data for brain cancer. 
        For a patient considering benzimidazole therapy, mebendazole may offer a more evidence-based and 
        legally prescribable pathway while maintaining the same anti-cancer mechanisms.
      </InfoBox>
    </section>
  );
}
