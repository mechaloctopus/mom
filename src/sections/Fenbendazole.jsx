import React from 'react';
import { Pill } from 'lucide-react';
import { SectionHeader, StudyCard, TestimonialCard, ProConCard, InfoBox, Divider, StatCard } from '../components/Cards';
import XEmbed from '../components/XEmbed';

export default function Fenbendazole() {
  return (
    <section id="fenbendazole" className="section-card">
      <SectionHeader
        icon={<Pill className="w-5 h-5" />}
        title="Fenbendazole"
        subtitle="Veterinary benzimidazole with anti-cancer research"
        color="primary"
      />

      <InfoBox variant="info" title="What is Fenbendazole?">
        Fenbendazole is a veterinary antiparasitic (dewormer) in the <strong>benzimidazole</strong> family. 
        It works by binding to β-tubulin and disrupting microtubule formation — the same mechanism targeted 
        by some chemotherapy drugs (e.g., vincristine, paclitaxel). Preclinical research shows it may also 
        inhibit glucose uptake in cancer cells and induce apoptosis. It is virtually identical in structure 
        to mebendazole, which is FDA-approved for human use.
      </InfoBox>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Mechanism of Action</h3>
      <div className="grid grid-cols-1 gap-2 mb-5">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
          <p className="text-xs font-bold text-blue-800">1. Microtubule Disruption</p>
          <p className="text-[11px] text-blue-600 mt-1">Binds β-tubulin, preventing cell division — similar to taxane chemotherapy drugs</p>
        </div>
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-3">
          <p className="text-xs font-bold text-purple-800">2. Glucose Uptake Inhibition</p>
          <p className="text-[11px] text-purple-600 mt-1">Reduces glucose transport in cancer cells, starving them of energy</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
          <p className="text-xs font-bold text-emerald-800">3. p53 Stabilization</p>
          <p className="text-[11px] text-emerald-600 mt-1">May reactivate the tumor suppressor gene p53, promoting cancer cell death</p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
          <p className="text-xs font-bold text-amber-800">4. Anti-angiogenic Effects</p>
          <p className="text-[11px] text-amber-600 mt-1">May inhibit new blood vessel formation that tumors need to grow</p>
        </div>
      </div>

      <ProConCard
        pros={[
          'Multiple animal studies show significant anti-tumor activity across cancer types',
          'Extremely low toxicity profile — virtually identical to mebendazole (FDA-approved human drug)',
          'Very inexpensive and widely available',
          'Targets multiple cancer pathways (microtubules, glucose, p53, angiogenesis)',
          'No documented cases of patient harm from fenbendazole in reported use',
          'Growing body of anecdotal evidence and case reports',
          'Joe Tippens case (stage 4 lung cancer, reported complete remission) brought widespread attention',
          'Some doctors are beginning to include it in integrative cancer protocols',
        ]}
        cons={[
          'No completed human clinical trials specifically for cancer',
          'Evidence is primarily preclinical (cell lines and animal models)',
          'Not FDA-approved for human use (veterinary drug)',
          'Anecdotal evidence is subject to survivorship bias and confounding factors',
          'Optimal dosing for cancer in humans is unknown',
          'May interact with other medications (limited pharmacokinetic data in humans)',
          'Could give false hope and delay proven treatments',
          'Quality control varies between veterinary products',
        ]}
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Animal Studies — Anti-Cancer Effects</h3>

      <StudyCard
        title="Fenbendazole acts as a moderate microtubule destabilizing agent and causes cancer cell death"
        description="Study examining fenbendazole's effect on human non-small cell lung cancer cells."
        findings="Fenbendazole showed significant anti-tumor effects through microtubule disruption, p53 stabilization, and interference with glucose metabolism."
        url="https://pubmed.ncbi.nlm.nih.gov/39736624/"
        type="study"
      />

      <StudyCard
        title="Anti-cancer properties of fenbendazole — preclinical study"
        description="Investigation of fenbendazole's anti-tumor mechanisms in cell and animal models."
        url="https://pubmed.ncbi.nlm.nih.gov/39477286/"
        type="study"
      />

      <StudyCard
        title="Fenbendazole anti-tumor activity study (2024)"
        description="Recent research examining fenbendazole's effects on tumor growth in animal models."
        url="https://pubmed.ncbi.nlm.nih.gov/40799435/"
        type="study"
      />

      <StudyCard
        title="Benzimidazoles and cancer — fenbendazole research"
        description="Study on fenbendazole's anti-cancer mechanisms and potential applications."
        url="https://pubmed.ncbi.nlm.nih.gov/36039738/"
        type="study"
      />

      <StudyCard
        title="Fenbendazole — anti-proliferative effects on cancer cells"
        description="Research demonstrating fenbendazole's ability to inhibit cancer cell growth."
        url="https://pubmed.ncbi.nlm.nih.gov/36854536/"
        type="study"
      />

      <StudyCard
        title="Repurposing fenbendazole for cancer treatment"
        description="Drug repurposing study examining fenbendazole's potential as an anti-cancer agent."
        url="https://pubmed.ncbi.nlm.nih.gov/35020278/"
        type="study"
      />

      <StudyCard
        title="Fenbendazole induces apoptosis in cancer cells"
        description="Mechanistic study on how fenbendazole triggers programmed cell death in tumor cells."
        url="https://pubmed.ncbi.nlm.nih.gov/37998737/"
        type="study"
      />

      <StudyCard
        title="Benzimidazole anthelmintics and cancer (2008)"
        description="Early research linking antiparasitic benzimidazoles to anti-cancer activity."
        url="https://pubmed.ncbi.nlm.nih.gov/19049251/"
        type="study"
      />

      <StudyCard
        title="Fenbendazole anti-tumor activity — additional evidence"
        description="Further preclinical evidence supporting fenbendazole's anti-cancer properties."
        url="https://pubmed.ncbi.nlm.nih.gov/37170725/"
        type="study"
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Human Studies</h3>

      <StudyCard
        title="Fenbendazole in human cancer patients — observational data (2024)"
        description="One of the first studies examining fenbendazole use in actual human cancer patients."
        findings="Emerging human data on fenbendazole for cancer — important step beyond animal models."
        url="https://pubmed.ncbi.nlm.nih.gov/40605964/"
        type="study"
      />

      <StudyCard
        title="Fenbendazole human cancer study (2024)"
        description="Additional human-level data on fenbendazole in cancer patients."
        url="https://pubmed.ncbi.nlm.nih.gov/39197912/"
        type="study"
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Patient Testimonials & Case Reports</h3>

      <InfoBox variant="warning">
        Testimonials are anecdotal evidence. They may involve multiple treatments simultaneously, 
        survivorship bias, or incomplete information. They are included for awareness, not as proof of efficacy.
      </InfoBox>

      <XEmbed url="https://x.com/ivermaccess/status/1972636438543122654" />

      <TestimonialCard
        description="Brain cancer battle — patient reports improvement using fenbendazole protocol"
        url="https://x.com/ivermaccess/status/1972636438543122654?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Terminal cancer patient — 2.5 months later reported cancer free"
        url="https://x.com/makismedicine/status/1837078871201444106?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Boy in Switzerland with brain tumor — reported shrinkage"
        url="https://x.com/makismedicine/status/1987732188692185577?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="12-year-old boy — tumor shrinkage of 40% in 6 months"
        url="https://x.com/makismedicine/status/2006045981729767735?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Brain cancer patient doing better with alternative protocol"
        url="https://x.com/makismedicine/status/1894344610287136878?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="More brain cancer cases — additional reports"
        url="https://x.com/ivermectinkart/status/2026644201006301404?s=46"
        outcome="positive"
      />

      <XEmbed url="https://x.com/makismedicine/status/1925853465898570164" />

      <TestimonialCard
        description="Tumors shrank 98% in patient in India"
        url="https://x.com/makismedicine/status/1925853465898570164?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Patient reports on fenbendazole for cancer"
        url="https://x.com/skymeds_store/status/1999323888686366792?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Joe Tippens — the original fenbendazole cancer story (news report)"
        url="https://x.com/ivermectin_net/status/1983147525843337444?s=46"
        outcome="positive"
      />

      <XEmbed url="https://x.com/thehealthb0t/status/2006417338057502832" />

      <TestimonialCard
        description="Joe Tippens full story — stage 4 lung cancer, reported complete remission"
        url="https://x.com/thehealthb0t/status/2006417338057502832?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Joe Rogan discusses fenbendazole for cancer"
        url="https://x.com/thehealthb0t/status/2010907660317786310?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Guy in Bulgaria — reports improvement with fenbendazole"
        url="https://x.com/makismedicine/status/2027144270801436850?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Redneck direct testimonial — reports cancer improvement"
        url="https://x.com/ivermectinkart/status/2027375665960698220?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Given 2 months to live — now reported cancer free"
        url="https://x.com/makismedicine/status/1906658090990129422?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Asian father beat stage 4 cancer — direct testimonial"
        url="https://x.com/makismedicine/status/1927427741126676580?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Girl cured of cancer — reported testimonial"
        url="https://x.com/medsnest/status/2015699650314125760?s=46"
        outcome="positive"
      />

      <TestimonialCard
        description="Dr. Mark Gordon discusses fenbendazole"
        url="https://x.com/joetippen/status/2027672788631212096?s=46"
        outcome="positive"
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Cases Where It Did NOT Work</h3>

      <TestimonialCard
        description="Testimonial where fenbendazole/alternative approach did not succeed"
        url="https://x.com/mjtruthultra/status/1924497763133231198?s=46"
        outcome="negative"
      />

      <InfoBox variant="danger">
        It is critical to acknowledge that alternative treatments do not work for everyone. 
        This negative testimonial is included for transparency and honest evaluation.
      </InfoBox>
    </section>
  );
}
