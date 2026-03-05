import React from 'react';
import { Heart, AlertTriangle, Brain, Clock } from 'lucide-react';
import { SectionHeader, StatCard, InfoBox, BackToNav } from '../components/Cards';

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
          Our mother, <strong>Brenda Tullis (64)</strong>, has a <strong>left parietal lobe brain tumor</strong> measuring 
          3.7 × 5.8 × 4.4 cm, first discovered in July 2025. A February 2026 MRI confirmed the tumor and revealed 
          a <strong>new satellite lesion</strong> (9.8 mm) near the left basal ganglion — indicating progression. 
          She was admitted to the ICU with altered awareness, seizures, hypoxemia (SpO2 dropped to 74%), and active RSV infection.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          This resource compiles published studies, clinical data, patient testimonials, and her actual 
          hospital records to help our family make the most informed decisions possible — both conventional and alternative.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <StatCard value="3.7×5.8cm" label="Primary Tumor" sublabel="Left parietal lobe" color="red" />
        <StatCard value="9.8mm" label="New Satellite Lesion" sublabel="Near left basal ganglion" color="red" />
        <StatCard value="3mm" label="Midline Shift" sublabel="Brain pushed right" color="amber" />
        <StatCard value="74%" label="SpO2 Event" sublabel="Prolonged low oxygen" color="purple" />
      </div>

      <InfoBox title="Key Concerns" variant="warning">
        <ul className="space-y-1.5 mt-1">
          <li className="flex items-start gap-2">
            <Brain className="w-3 h-3 mt-0.5 flex-shrink-0" />
            <span>Brain tumor with new satellite lesion — local progression confirmed on Feb 2026 MRI</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" />
            <span>ICU admission — altered awareness, seizures, hypoxemia (SpO2 74%), active RSV</span>
          </li>
          <li className="flex items-start gap-2">
            <Clock className="w-3 h-3 mt-0.5 flex-shrink-0" />
            <span>Indeterminate left adrenal nodule (2.8 cm) — needs non-invasive follow-up to rule out spread</span>
          </li>
        </ul>
      </InfoBox>

      <InfoBox title="How to Use This Resource" variant="info">
        <p>
          Use the menu (top right) or quick-nav grid above to jump between sections. Each section 
          includes sourced studies, arguments for and against, and key statistics. Mom's actual 
          hospital reports are transcribed in the <strong>Medical Reports</strong> section. The 
          <strong>Proposed Care Protocol</strong> at the end ties everything into an actionable plan.
        </p>
      </InfoBox>
      <BackToNav />
    </section>
  );
}
