import React from 'react';
import { Heart, AlertTriangle, Brain, Clock } from 'lucide-react';
import { SectionHeader, StatCard, InfoBox } from '../components/Cards';

export default function Overview() {
  return (
    <section id="overview" className="section-card">
      <SectionHeader
        icon={<Heart className="w-5 h-5" />}
        title="Overview"
        subtitle="Understanding the situation"
        color="primary"
      />

      <div className="bg-gradient-to-br from-primary-50 to-blue-50 border border-primary-100 rounded-2xl p-5 mb-5">
        <h3 className="text-base font-bold text-gray-900 mb-2">What We're Facing</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Our mother has been diagnosed with a <strong>brain tumor</strong>. In addition, she experienced 
          a critical event where her blood oxygen (SpO2) dropped to <strong>74% for several hours</strong>, 
          raising concerns about possible brain damage. We are also monitoring the possibility of the 
          tumor replicating and spreading.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          This resource compiles research, studies, testimonials, and data to help our family make 
          the most informed decisions possible about treatment options — both conventional and alternative.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <StatCard value="74%" label="SpO2 Event" sublabel="Prolonged low oxygen" color="red" />
        <StatCard value="~14.6mo" label="Median OS w/ Chemo" sublabel="Stupp trial (2005)" color="amber" />
        <StatCard value="~9.8%" label="5-Year Survival" sublabel="With temozolomide" color="purple" />
        <StatCard value="~1.9%" label="5-Year Survival" sublabel="Without temozolomide" color="red" />
      </div>

      <InfoBox title="Key Concerns" variant="warning">
        <ul className="space-y-1.5 mt-1">
          <li className="flex items-start gap-2">
            <Brain className="w-3 h-3 mt-0.5 flex-shrink-0" />
            <span>Brain tumor diagnosis — type and grade to be confirmed via biopsy</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" />
            <span>Prolonged hypoxia event (SpO2 74%) — potential neurological impact</span>
          </li>
          <li className="flex items-start gap-2">
            <Clock className="w-3 h-3 mt-0.5 flex-shrink-0" />
            <span>Risk of tumor spread — need to weigh biopsy risks vs. benefits</span>
          </li>
        </ul>
      </InfoBox>

      <InfoBox title="Purpose of This Resource" variant="info">
        <p>
          This site gathers published studies, clinical trials, real patient testimonials, and expert 
          opinions across <strong>conventional</strong> and <strong>alternative</strong> treatment approaches.
          Every claim is linked to its source. The goal is full transparency so our family can evaluate 
          all options with open eyes.
        </p>
      </InfoBox>

      <InfoBox title="Important Disclaimer" variant="danger">
        <p>
          Alternative approaches discussed here are <strong>not mainstream-approved cancer treatments</strong>. 
          This is a complex, evolving area that requires thorough research and professional guidance. 
          We have reached out to doctors who specialize in integrative and alternative cancer care. 
          All decisions should be made with full knowledge of the statistics, risks, and evidence — 
          and in consultation with qualified healthcare providers.
        </p>
      </InfoBox>
    </section>
  );
}
