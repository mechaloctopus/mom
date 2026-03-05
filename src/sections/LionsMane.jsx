import React from 'react';
import { Brain } from 'lucide-react';
import { SectionHeader, StudyCard, ProConCard, InfoBox, Divider, BackToNav } from '../components/Cards';

export default function LionsMane() {
  return (
    <section id="lionsmane" className="section-card">
      <SectionHeader
        icon={<Brain className="w-5 h-5" />}
        title="Lion's Mane Mushroom"
        subtitle="Neuroregeneration, neuroprotection, and anti-cancer research"
        color="amber"
      />

      <InfoBox variant="info" title="What is Lion's Mane?">
        Lion's Mane (<em>Hericium erinaceus</em>) is an edible medicinal mushroom with a long history 
        in traditional Chinese medicine. It is one of the few natural substances shown to stimulate 
        <strong>Nerve Growth Factor (NGF)</strong> and <strong>Brain-Derived Neurotrophic Factor (BDNF)</strong> 
        production — critical proteins for neuron growth, repair, and survival. This makes it particularly 
        relevant for both brain tumor contexts and recovery from hypoxic brain injury.
      </InfoBox>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Neuroregenerative Properties</h3>
      <div className="space-y-2 mb-5">
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
          <p className="text-xs font-bold text-amber-800">NGF Stimulation</p>
          <p className="text-[11px] text-amber-600 mt-1">Hericenones and erinacines in Lion's Mane stimulate NGF synthesis, promoting neuron growth and repair — confirmed in multiple animal studies</p>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-3">
          <p className="text-xs font-bold text-orange-800">BDNF Enhancement</p>
          <p className="text-[11px] text-orange-600 mt-1">Increases BDNF levels, supporting neuroplasticity, memory formation, and cognitive function recovery</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-3">
          <p className="text-xs font-bold text-yellow-800">Myelin Repair</p>
          <p className="text-[11px] text-yellow-700 mt-1">Animal studies show acceleration of myelin sheath repair — critical for nerve signal transmission after brain injury</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
          <p className="text-xs font-bold text-emerald-800">Anti-inflammatory / Neuroprotective</p>
          <p className="text-[11px] text-emerald-600 mt-1">Reduces neuroinflammation and protects neurons from oxidative stress and ischemic damage</p>
        </div>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Anti-Cancer Properties</h3>
      <div className="space-y-2 mb-5">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
          <p className="text-xs font-bold text-blue-800">Direct Anti-Tumor Effects</p>
          <p className="text-[11px] text-blue-600 mt-1">Lab studies show Lion's Mane extracts can inhibit growth of various cancer cell lines including gastric, colon, and liver cancer</p>
        </div>
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-3">
          <p className="text-xs font-bold text-purple-800">Immune System Enhancement</p>
          <p className="text-[11px] text-purple-600 mt-1">Beta-glucans in Lion's Mane stimulate immune cells (macrophages, NK cells) that fight cancer</p>
        </div>
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3">
          <p className="text-xs font-bold text-indigo-800">Anti-Angiogenic</p>
          <p className="text-[11px] text-indigo-600 mt-1">Some studies suggest inhibition of new blood vessel formation needed for tumor growth</p>
        </div>
      </div>

      <ProConCard
        pros={[
          'One of the few natural substances proven to stimulate NGF and BDNF production',
          'Excellent safety profile — edible mushroom with centuries of use, no significant toxicity reported',
          'Dual benefit: neuroregeneration (important after hypoxic event) AND anti-cancer properties',
          'Human clinical trials show cognitive improvement in mild cognitive impairment patients',
          'Anti-inflammatory properties may help reduce tumor-associated brain swelling',
          'Widely available as supplement, no prescription needed',
          'Can be safely combined with other treatments (conventional or alternative)',
          'Beta-glucans provide immune system support during cancer treatment',
        ]}
        cons={[
          'Anti-cancer effects are primarily from in vitro and animal studies — no human cancer trials',
          'NGF stimulation is a theoretical concern — could it stimulate tumor growth? (No evidence of this, but not studied)',
          'Supplement quality varies significantly between brands',
          'Optimal dosing for neuroregeneration or anti-cancer effect in humans is not established',
          'Effects may take weeks to months to manifest',
          'Should not replace proven treatments without physician guidance',
        ]}
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Key Studies — Neuroregeneration</h3>

      <StudyCard
        title="Neurotrophic properties of the Lion's Mane medicinal mushroom"
        description="Comprehensive review of Hericium erinaceus compounds that stimulate nerve growth factor synthesis."
        findings="Hericenones (from fruiting body) and erinacines (from mycelium) both confirmed to promote NGF synthesis in vitro and in vivo. Erinacine A showed the strongest activity."
        url="https://pubmed.ncbi.nlm.nih.gov/24266378/"
        type="study"
      />

      <StudyCard
        title="Improvement of cognitive functions by oral intake of Hericium erinaceus"
        description="Double-blind, placebo-controlled human clinical trial in Japanese adults aged 50-80 with mild cognitive impairment."
        findings="Significant cognitive improvement at weeks 8, 12, and 16 of Lion's Mane intake (3g/day). Effects declined 4 weeks after discontinuation."
        url="https://pubmed.ncbi.nlm.nih.gov/18844328/"
        type="trial"
      />

      <StudyCard
        title="Hericium erinaceus promotes peripheral nerve regeneration after crush injury"
        description="Animal study on nerve repair acceleration with Lion's Mane supplementation."
        findings="Lion's Mane extract significantly accelerated recovery of nerve function and promoted nerve regeneration in rats with crush injuries."
        url="https://pubmed.ncbi.nlm.nih.gov/21383512/"
        type="study"
      />

      <StudyCard
        title="Lion's Mane and neurogenesis — hippocampal growth"
        description="Study examining whether Lion's Mane can promote new neuron growth in the hippocampus."
        findings="Hericium erinaceus extracts promoted hippocampal neurogenesis and improved memory in mice. Active compounds crossed the blood-brain barrier."
        url="https://pubmed.ncbi.nlm.nih.gov/36692723/"
        type="study"
      />

      <StudyCard
        title="Neuroprotective effects of Hericium erinaceus against ischemic brain injury"
        description="Study directly relevant to hypoxic/ischemic brain damage — examines whether Lion's Mane can protect brain tissue."
        findings="Lion's Mane extract reduced infarct volume and improved neurological outcomes after ischemic injury in animal models."
        url="https://pubmed.ncbi.nlm.nih.gov/25159861/"
        type="study"
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Key Studies — Anti-Cancer Effects</h3>

      <StudyCard
        title="Anti-cancer activity of Hericium erinaceus — in vitro and in vivo evidence"
        description="Review of Lion's Mane's anti-cancer mechanisms across different cancer types."
        findings="Demonstrated anti-proliferative effects against gastric, colorectal, hepatocellular, and leukemia cancer cells through multiple mechanisms."
        url="https://pubmed.ncbi.nlm.nih.gov/26547693/"
        type="study"
      />

      <StudyCard
        title="Immunomodulatory activities of Hericium erinaceus polysaccharides"
        description="Study on how Lion's Mane's beta-glucans enhance immune function."
        findings="Polysaccharides from H. erinaceus activated macrophages and increased NK cell activity — both critical for anti-tumor immunity."
        url="https://pubmed.ncbi.nlm.nih.gov/28266682/"
        type="study"
      />

      <StudyCard
        title="Hericium erinaceus induces apoptosis in human cancer cells"
        description="In vitro study on Lion's Mane-triggered cancer cell death."
        findings="Lion's Mane extract induced apoptosis (programmed cell death) in human colorectal cancer cells in a dose-dependent manner."
        url="https://pubmed.ncbi.nlm.nih.gov/25006989/"
        type="study"
      />

      <InfoBox variant="success" title="Relevance to Our Situation">
        Lion's Mane is particularly relevant because it addresses <strong>two concerns simultaneously</strong>: 
        (1) potential neuroregeneration after the hypoxic event (SpO2 74%), and (2) possible anti-cancer 
        support. Its excellent safety profile makes it a reasonable supplement to discuss with the medical team.
      </InfoBox>
      <BackToNav />
    </section>
  );
}
