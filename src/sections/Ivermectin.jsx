import React from 'react';
import { FlaskConical } from 'lucide-react';
import { SectionHeader, StudyCard, TestimonialCard, ProConCard, InfoBox, Divider, BackToNav } from '../components/Cards';
import XEmbed from '../components/XEmbed';

export default function Ivermectin() {
  return (
    <section id="ivermectin" className="section-card">
      <SectionHeader
        icon={<FlaskConical className="w-5 h-5" />}
        title="Ivermectin"
        subtitle="FDA-approved antiparasitic with anti-cancer research"
        color="purple"
      />

      <InfoBox variant="info" title="What is Ivermectin?">
        Ivermectin is an FDA-approved antiparasitic medication used in humans for conditions like river blindness 
        and strongyloidiasis. Its discoverers won the 2015 Nobel Prize in Medicine. Recent research has identified 
        multiple anti-cancer mechanisms including inhibition of the Akt/mTOR pathway, WNT-TCF pathway suppression, 
        and induction of mitochondrial dysfunction in cancer cells.
      </InfoBox>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Anti-Cancer Mechanisms</h3>
      <div className="grid grid-cols-1 gap-2 mb-5">
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-3">
          <p className="text-xs font-bold text-purple-800">1. Akt/mTOR Pathway Inhibition</p>
          <p className="text-[11px] text-purple-600 mt-1">Suppresses key growth signaling pathway used by many cancers</p>
        </div>
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3">
          <p className="text-xs font-bold text-indigo-800">2. WNT-TCF Pathway Suppression</p>
          <p className="text-[11px] text-indigo-600 mt-1">Blocks cancer stem cell signaling involved in tumor maintenance</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
          <p className="text-xs font-bold text-blue-800">3. Mitochondrial Dysfunction</p>
          <p className="text-[11px] text-blue-600 mt-1">Disrupts energy production specifically in cancer cells</p>
        </div>
        <div className="bg-teal-50 border border-teal-100 rounded-xl p-3">
          <p className="text-xs font-bold text-teal-800">4. Immunomodulatory Effects</p>
          <p className="text-[11px] text-teal-600 mt-1">May enhance anti-tumor immune responses</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
          <p className="text-xs font-bold text-emerald-800">5. PAK1 Kinase Inhibition</p>
          <p className="text-[11px] text-emerald-600 mt-1">Inhibits PAK1 kinase, which is overactivated in &gt;70% of cancers</p>
        </div>
      </div>

      <ProConCard
        pros={[
          'FDA-approved for human use with decades of safety data (Nobel Prize-winning drug)',
          'Multiple published studies showing anti-cancer activity in vitro and in vivo',
          'Well-characterized safety profile and pharmacokinetics in humans',
          'Extremely inexpensive and globally available',
          'Targets multiple cancer pathways simultaneously',
          'Some oncologists are beginning to include it in integrative protocols',
          'Growing number of case reports and testimonials',
          'Cancer surgeon reports witnessing ivermectin turn cancer cases around',
        ]}
        cons={[
          'No completed large-scale randomized controlled trials for cancer',
          'Most evidence is preclinical or anecdotal',
          'Optimal anti-cancer dosing in humans is not established',
          'Not approved for cancer treatment — use is off-label',
          'May interact with certain medications (CYP3A4 substrate)',
          'High doses needed for anti-cancer effect may differ from antiparasitic doses',
          'Survivorship bias in testimonials — failures may go unreported',
        ]}
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Published Studies</h3>

      <StudyCard
        title="Ivermectin: a systematic review from antiviral effects to COVID-19 complementary regimen"
        description="Comprehensive review of ivermectin's biological activities including anti-cancer properties."
        findings="Documents anti-cancer effects across multiple cancer types through various molecular pathways."
        url="https://pubmed.ncbi.nlm.nih.gov/32474842/"
        type="study"
      />

      <StudyCard
        title="The multitargeted drug ivermectin: from an antiparasitic agent to a repositioned cancer drug"
        description="Detailed review of ivermectin's potential as a repurposed cancer treatment."
        findings="Ivermectin shows activity against multiple cancer types via Akt/mTOR, WNT, and other pathways."
        url="https://pubmed.ncbi.nlm.nih.gov/27302166/"
        type="study"
      />

      <StudyCard
        title="Anti-cancer effects of ivermectin — molecular mechanisms"
        description="Study on ivermectin's molecular anti-cancer mechanisms."
        url="https://pubmed.ncbi.nlm.nih.gov/36050295/"
        type="study"
      />

      <StudyCard
        title="Ivermectin induces apoptosis in cancer cells"
        description="Research on ivermectin-triggered programmed cell death in tumor cells."
        url="https://pubmed.ncbi.nlm.nih.gov/34483925/"
        type="study"
      />

      <StudyCard
        title="Ivermectin as anti-cancer agent — preclinical data"
        description="Preclinical evidence for ivermectin's anti-tumor activity."
        url="https://pubmed.ncbi.nlm.nih.gov/31215501/"
        type="study"
      />

      <StudyCard
        title="Ivermectin in cancer treatment — recent advances (2024)"
        description="Updated review of ivermectin's role in cancer research."
        url="https://pubmed.ncbi.nlm.nih.gov/39626921/"
        type="study"
      />

      <StudyCard
        title="Ivermectin anti-tumor study (2024)"
        description="Recent research on ivermectin's anti-cancer properties."
        url="https://pubmed.ncbi.nlm.nih.gov/40425329/"
        type="study"
      />

      <StudyCard
        title="Ivermectin and cancer — comprehensive review"
        description="Systematic evaluation of ivermectin's potential in oncology."
        url="https://pubmed.ncbi.nlm.nih.gov/37814994/"
        type="study"
      />

      <StudyCard
        title="Ivermectin anti-cancer mechanisms — early research (2017)"
        description="Earlier research establishing ivermectin's anti-cancer potential."
        url="https://pubmed.ncbi.nlm.nih.gov/28847725/"
        type="study"
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Testimonials & Case Reports</h3>

      <InfoBox variant="warning">
        Testimonials are anecdotal. Many patients use multiple treatments simultaneously. 
        Included for awareness — not as proof of efficacy.
      </InfoBox>

      <TestimonialCard
        description="Skin condition cleared up with ivermectin — personal direct experience with a friend who had severe skin issues, now has flawless skin"
        url="https://x.com/doctor_williamf/status/2024279496296132624?s=46"
        outcome="positive"
      />

      <XEmbed url="https://x.com/buy_ivermectin1/status/2024563419798786237" />

      <TestimonialCard
        description="Cancer surgeon — additional testimony on ivermectin efficacy"
        url="https://x.com/ivermectinkart/status/2019031085804581273?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="World-renowned cancer biologist discusses ivermectin for cancer"
        url="https://x.com/ivermectinkart/status/2025933679009370395?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Direct testimonial — patient reports cancer improvement with ivermectin"
        url="https://x.com/ivermectinkart/status/2027033410850697467?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Lady testimonial — reports positive cancer outcome"
        url="https://x.com/johndparody/status/2013649437667840389?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Another patient testimonial — reports improvement"
        url="https://x.com/skymeds_store/status/2014058666991735039?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Dr. Paul Marik discusses ivermectin protocol for cancer"
        url="https://x.com/drpaulemarik/status/2019018268929863748?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Discussion on mechanisms of ivermectin in cancer"
        url="https://x.com/vaidyaparampara/status/2024154558570881286?s=46"
        outcome="positive"
      />
      <BackToNav />
    </section>
  );
}
