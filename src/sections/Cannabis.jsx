import React from 'react';
import { Leaf } from 'lucide-react';
import { SectionHeader, StudyCard, ProConCard, InfoBox, Divider } from '../components/Cards';

export default function Cannabis() {
  return (
    <section id="cannabis" className="section-card">
      <SectionHeader
        icon={<Leaf className="w-5 h-5" />}
        title="Cannabis & Cannabinoids"
        subtitle="Cancer research, neurogenesis, and homeostasis"
        color="green"
      />

      <InfoBox variant="info" title="The Endocannabinoid System">
        The human body has an <strong>endocannabinoid system (ECS)</strong> — a vast network of receptors 
        (CB1, CB2) found throughout the brain and body that regulates homeostasis: the balance of pain, 
        mood, appetite, inflammation, immune response, and cell growth/death. Plant cannabinoids (THC, CBD, 
        and 100+ others) interact with this system. Research shows cannabinoids may have direct anti-cancer, 
        neuroprotective, and neuroregenative properties.
      </InfoBox>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Key Cannabinoids & Their Roles</h3>
      <div className="space-y-2 mb-5">
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
          <p className="text-xs font-bold text-emerald-800">THC (Delta-9-Tetrahydrocannabinol)</p>
          <p className="text-[11px] text-emerald-600 mt-1">The primary psychoactive compound. Shows direct anti-tumor effects in glioblastoma studies — induces autophagy (self-eating) and apoptosis in cancer cells while sparing healthy cells. Also stimulates appetite and reduces nausea.</p>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-xl p-3">
          <p className="text-xs font-bold text-green-800">CBD (Cannabidiol)</p>
          <p className="text-[11px] text-green-600 mt-1">Non-psychoactive. Anti-inflammatory, neuroprotective, and anti-cancer. Enhances THC's anti-tumor effects while reducing psychoactive side effects. Promotes neurogenesis in the hippocampus.</p>
        </div>
        <div className="bg-teal-50 border border-teal-100 rounded-xl p-3">
          <p className="text-xs font-bold text-teal-800">CBG (Cannabigerol)</p>
          <p className="text-[11px] text-teal-600 mt-1">Shows particular promise against glioblastoma in recent studies. Non-psychoactive with anti-inflammatory and neuroprotective properties.</p>
        </div>
        <div className="bg-lime-50 border border-lime-100 rounded-xl p-3">
          <p className="text-xs font-bold text-lime-800">Entourage Effect</p>
          <p className="text-[11px] text-lime-600 mt-1">Full-spectrum cannabis extracts (containing multiple cannabinoids + terpenes) may be more effective than isolated compounds. The synergy between compounds is called the "entourage effect."</p>
        </div>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Anti-Cancer Mechanisms</h3>
      <div className="grid grid-cols-1 gap-2 mb-5">
        <div className="bg-green-50 border border-green-100 rounded-xl p-3">
          <p className="text-xs font-bold text-green-800">1. Autophagy Induction</p>
          <p className="text-[11px] text-green-600 mt-1">THC triggers cancer cells to "eat themselves" — a key mechanism confirmed in glioblastoma cell lines and animal models</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
          <p className="text-xs font-bold text-emerald-800">2. Apoptosis (Programmed Cell Death)</p>
          <p className="text-[11px] text-emerald-600 mt-1">Both THC and CBD induce cancer cell death through multiple signaling pathways</p>
        </div>
        <div className="bg-teal-50 border border-teal-100 rounded-xl p-3">
          <p className="text-xs font-bold text-teal-800">3. Anti-Angiogenic</p>
          <p className="text-[11px] text-teal-600 mt-1">Cannabinoids reduce new blood vessel formation that tumors need to grow</p>
        </div>
        <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-3">
          <p className="text-xs font-bold text-cyan-800">4. Anti-Proliferative</p>
          <p className="text-[11px] text-cyan-600 mt-1">Inhibits cancer cell division and tumor growth in multiple cancer types</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
          <p className="text-xs font-bold text-blue-800">5. Selective Toxicity</p>
          <p className="text-[11px] text-blue-600 mt-1">Cannabinoids appear to selectively target cancer cells while protecting or even supporting healthy neurons</p>
        </div>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Neurogenesis & Neuroprotection</h3>
      <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-100 rounded-xl p-4 mb-5">
        <p className="text-xs text-green-800 leading-relaxed mb-2">
          <strong>CBD promotes neurogenesis</strong> — the growth of new neurons — particularly in the hippocampus. 
          This is relevant both for brain recovery after hypoxic injury and for maintaining cognitive function 
          during cancer treatment.
        </p>
        <ul className="space-y-1.5 text-[11px] text-green-700">
          <li>• CBD promotes hippocampal neurogenesis via CB1 and 5-HT1A receptor activation</li>
          <li>• THC at low doses may also promote neurogenesis (high doses may impair it)</li>
          <li>• Cannabinoids reduce neuroinflammation — a major driver of secondary brain damage after hypoxia</li>
          <li>• Endocannabinoid system activation supports neural stem cell proliferation</li>
          <li>• CBD is neuroprotective against ischemic/hypoxic brain injury in animal models</li>
        </ul>
      </div>

      <ProConCard
        pros={[
          'Direct anti-tumor effects confirmed in glioblastoma cell lines and animal models (THC + CBD)',
          'THC+CBD combination enhanced temozolomide effectiveness in preclinical studies',
          'Neuroprotective — may protect healthy brain tissue while targeting cancer cells',
          'CBD promotes neurogenesis, relevant for recovery from hypoxic brain injury',
          'Helps manage cancer symptoms: pain, nausea, appetite loss, anxiety, sleep',
          'GW Pharmaceuticals (now Jazz Pharma) conducted Phase 1/2 trial of THC:CBD for recurrent GBM',
          'Selective toxicity — targets cancer cells while sparing healthy cells in lab studies',
          'Anti-inflammatory effects may reduce tumor-associated brain swelling',
          'Homeostatic regulation through the endocannabinoid system',
        ]}
        cons={[
          'No completed Phase 3 human trials for cancer treatment',
          'Psychoactive effects of THC may be unwanted, especially with brain injury',
          'Legal status varies by jurisdiction',
          'Drug interactions possible (THC/CBD are metabolized by CYP450 enzymes)',
          'Quality control of cannabis products is inconsistent',
          'Smoking/vaping not recommended — alternative delivery methods needed',
          'Optimal anti-cancer dosing is not established',
          'May impair cognitive function at high THC doses — concern with existing brain issues',
        ]}
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Key Studies — Cannabis & Brain Cancer</h3>

      <StudyCard
        title="Cannabinoids and gliomas — anti-tumor action via multiple mechanisms"
        description="Comprehensive review of how cannabinoids affect glioblastoma through autophagy, apoptosis, and anti-angiogenesis."
        findings="THC and CBD showed synergistic anti-tumor effects against glioblastoma. THC induced autophagy-mediated cancer cell death via ER stress pathway."
        url="https://pubmed.ncbi.nlm.nih.gov/19425170/"
        type="study"
      />

      <StudyCard
        title="A pilot clinical study of THC:CBD for recurrent glioblastoma multiforme"
        description="GW Pharmaceuticals Phase 1/2 trial combining THC:CBD (Sativex) with temozolomide for recurrent GBM."
        findings="The THC:CBD group showed 83% one-year survival vs 53% in placebo group (with temozolomide). Median survival 550 days vs 369 days."
        url="https://pubmed.ncbi.nlm.nih.gov/33507244/"
        type="trial"
      />

      <StudyCard
        title="Cannabidiol induces programmed cell death in breast cancer cells"
        description="Study on CBD's anti-cancer mechanism through autophagy-mediated cell death."
        findings="CBD induced concentration-dependent cell death in breast cancer cells while having minimal effect on normal mammary cells."
        url="https://pubmed.ncbi.nlm.nih.gov/21566064/"
        type="study"
      />

      <StudyCard
        title="CBD as potential anti-cancer drug — mechanisms review"
        description="Comprehensive review of CBD's anti-cancer mechanisms across multiple cancer types."
        findings="CBD showed anti-proliferative, pro-apoptotic, and anti-migratory effects in cancer cells from brain, breast, lung, colon, and other tissues."
        url="https://pubmed.ncbi.nlm.nih.gov/22506672/"
        type="study"
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Key Studies — Neurogenesis & Neuroprotection</h3>

      <StudyCard
        title="Cannabidiol promotes hippocampal neurogenesis"
        description="Study on CBD's ability to stimulate new neuron growth in the hippocampus."
        findings="CBD promoted hippocampal progenitor proliferation and neurogenesis via CB1 receptor involvement, independent of anxiolytic effects."
        url="https://pubmed.ncbi.nlm.nih.gov/20804782/"
        type="study"
      />

      <StudyCard
        title="Neuroprotective effect of cannabidiol in ischemic brain injury"
        description="Research on CBD's ability to protect the brain from damage after blood flow restriction (directly relevant to hypoxic events)."
        findings="CBD significantly reduced brain infarct volume and improved neurological outcomes after ischemic injury in animal models. Effect mediated through 5-HT1A receptors."
        url="https://pubmed.ncbi.nlm.nih.gov/16400709/"
        type="study"
      />

      <StudyCard
        title="Endocannabinoid system and neural stem cell biology"
        description="Review of how the endocannabinoid system regulates neural stem cell proliferation and differentiation."
        findings="Endocannabinoid signaling plays a key role in adult neurogenesis. Both CB1 and CB2 receptor activation promote neural progenitor proliferation."
        url="https://pubmed.ncbi.nlm.nih.gov/17952650/"
        type="study"
      />

      <InfoBox variant="success" title="Key Takeaway">
        Cannabis research for brain cancer is among the most promising areas of cannabinoid oncology. 
        The pilot clinical trial showing 83% vs 53% one-year survival when adding THC:CBD to temozolomide 
        is particularly noteworthy. CBD's neuroprotective and neurogenic properties are also directly 
        relevant to recovery from the hypoxic event. Low-dose CBD oil may be worth discussing with 
        the medical team as a complementary approach.
      </InfoBox>
    </section>
  );
}
