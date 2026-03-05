import React from 'react';
import { Shield } from 'lucide-react';
import { SectionHeader, TestimonialCard, ProConCard, InfoBox, Divider } from '../components/Cards';
import XEmbed from '../components/XEmbed';

export default function Combination() {
  return (
    <section id="combination" className="section-card">
      <SectionHeader
        icon={<Shield className="w-5 h-5" />}
        title="Combination Therapy"
        subtitle="Fenbendazole + Ivermectin and multi-agent protocols"
        color="primary"
      />

      <InfoBox variant="info" title="Rationale for Combination">
        Many patients using alternative anti-cancer protocols combine fenbendazole (or mebendazole) with 
        ivermectin. The rationale is that these drugs target <strong>different pathways</strong>: benzimidazoles 
        primarily disrupt microtubules and glucose uptake, while ivermectin targets Akt/mTOR, WNT, and 
        mitochondrial function. Combining them may create synergistic effects against cancer cells through 
        multiple simultaneous mechanisms.
      </InfoBox>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Proposed Combination Protocol</h3>
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-4 mb-4">
        <a href="https://x.com/ivermectinkart/status/2022739869592883431?s=46" target="_blank" rel="noopener noreferrer"
          className="block">
          <p className="text-xs font-bold text-indigo-800 mb-2">Community-Shared Protocol</p>
          <p className="text-[11px] text-indigo-600 leading-relaxed">
            A proposed protocol combining fenbendazole and ivermectin has been shared within the alternative 
            cancer treatment community. This protocol typically includes dosing schedules, cycling patterns, 
            and supporting supplements (vitamin E, curcumin, CBD oil).
          </p>
          <p className="text-xs text-primary-500 font-medium mt-2">View proposed protocol →</p>
        </a>
      </div>

      <InfoBox variant="danger" title="Critical Warning">
        No combination protocol has been validated in clinical trials. These are community-derived protocols 
        based on anecdotal experience. Anyone considering these combinations should work with a knowledgeable 
        physician and monitor liver function, blood counts, and overall health closely.
      </InfoBox>

      <ProConCard
        pros={[
          'Multiple mechanisms of action targeting cancer from different angles simultaneously',
          'Both drugs have well-established safety profiles individually',
          'Growing number of reported positive outcomes with combination use',
          'Some doctors specializing in integrative oncology are recommending combinations',
          'Relatively inexpensive compared to conventional chemotherapy',
          'Community protocols provide starting frameworks for discussion with physicians',
          'Peter McCullough MD and other physicians publicly discussing these protocols',
        ]}
        cons={[
          'No clinical trial data on the combination — completely experimental',
          'Drug-drug interactions between fenbendazole and ivermectin are not well-studied',
          'Combined liver burden is unknown — both are hepatically metabolized',
          'No standardized dosing protocol — varies widely between sources',
          'Risk of false confidence leading to delay of proven treatments',
          'Community protocols may not account for individual medical situations',
          'Monitoring requirements are not well-defined',
        ]}
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Combination Testimonials</h3>

      <InfoBox variant="warning">
        Many testimonials below involve patients using fenbendazole + ivermectin together, 
        sometimes with additional supplements. Attribution to any single agent is not possible.
      </InfoBox>

      <XEmbed url="https://x.com/p_mcculloughmd/status/1957602996323246197" />

      <TestimonialCard
        description="Mel Gibson's 3 friends — reported positive outcomes with alternative cancer protocols"
        url="https://x.com/makismedicine/status/1877545575098261801?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="69-year-old with stage 4 lung cancer — improved in 2 months on combination protocol"
        url="https://x.com/makismedicine/status/1932387904359481596?s=46"
        outcome="positive"
      />

      <XEmbed url="https://x.com/makismedicine/status/1918958115808285004" />

      <TestimonialCard
        description="Pilot cured of cancer — full testimonial"
        url="https://x.com/ivermectinkart/status/1958392281159127263?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Breast cancer remission in 4 months"
        url="https://x.com/makismedicine/status/2020999584114458856?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Another breast cancer — positive outcome reported"
        url="https://x.com/makismedicine/status/1833813144474403212?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Stage 3 lymphoma (terminal) — patient has recovered"
        url="https://x.com/makismedicine/status/2021298006268707028?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Paper on 3 patients using combination protocol — documented cases"
        url="https://x.com/makismedicine/status/1956751625051341079?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Tumor shrinkage in 2 months across 2 different cancers"
        url="https://x.com/makismedicine/status/1932387904359481596?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Additional positive case reports"
        url="https://x.com/makismedicine/status/2002085325963927729?s=46"
        outcome="positive"
      />
    </section>
  );
}
