import React from 'react';
import { Stethoscope } from 'lucide-react';
import { SectionHeader, StudyCard, StatCard, ProConCard, InfoBox, Divider } from '../components/Cards';

export default function Chemotherapy() {
  return (
    <section id="chemo" className="section-card">
      <SectionHeader
        icon={<Stethoscope className="w-5 h-5" />}
        title="Standard Treatment: Temozolomide"
        subtitle="Chemotherapy — the recommended conventional option"
        color="red"
      />

      <InfoBox variant="warning" title="Current Situation">
        The recommended conventional option is extremely expensive and has limited effectiveness. 
        The standard of care for glioblastoma (GBM) is the Stupp protocol: maximal surgical resection 
        followed by radiation therapy with concurrent and adjuvant temozolomide chemotherapy.
      </InfoBox>

      <h3 className="text-sm font-bold text-gray-900 mb-3">Key Statistics</h3>
      <div className="grid grid-cols-2 gap-3 mb-5">
        <StatCard value="14.6 mo" label="Median Survival" sublabel="With temozolomide" color="amber" />
        <StatCard value="12.1 mo" label="Median Survival" sublabel="Radiation only" color="red" />
        <StatCard value="9.8%" label="5-Year Survival" sublabel="With temozolomide" color="purple" />
        <StatCard value="1.9%" label="5-Year Survival" sublabel="Without temozolomide" color="red" />
      </div>

      <p className="text-xs text-gray-500 leading-relaxed mb-4">
        The landmark 2005 Stupp trial showed temozolomide extends median overall survival by about 2.5 months 
        (14.6 vs 12.1 months). At 2 years, 26.5% survive with chemo vs 10.4% without. 
        At 5 years, only ~9.8% survive with temozolomide. More recent real-world data sometimes shows 
        15–20+ months in select groups, but prognosis remains poor overall.
      </p>

      <ProConCard
        pros={[
          'Only proven treatment to extend survival in GBM (by ~2.5 months median)',
          'FDA-approved standard of care with decades of data',
          '5-year survival improves from 1.9% to 9.8% (Stupp trial)',
          'MGMT methylation status can predict better response (~21.7 months median OS)',
          'Extended cycles (>6) may improve survival in some patients (19–26 months)',
        ]}
        cons={[
          'Median survival still only ~14.6 months — most patients do not survive long-term',
          'Severe side effects: myelosuppression, nausea, fatigue, lymphopenia, infection risk',
          'Extremely expensive treatment',
          '5-year survival is still less than 10%',
          'Quality of life concerns during treatment',
          'Tumor almost always recurs even with treatment',
          'Some real-world populations show worse outcomes than clinical trials (10–11 month median OS)',
        ]}
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Landmark Studies</h3>

      <StudyCard
        title="Stupp Trial — Radiotherapy plus temozolomide for glioblastoma (NEJM 2005)"
        description="Phase III trial establishing the standard of care. 573 patients randomized to radiation alone vs. radiation + temozolomide."
        findings="Median OS 14.6 months (chemo) vs 12.1 months (radiation only). 2-year survival 26.5% vs 10.4%. This became the global standard."
        url="https://www.nejm.org/doi/full/10.1056/NEJMoa043330"
        type="study"
      />

      <StudyCard
        title="Stupp Trial 5-Year Update (Lancet Oncology 2009)"
        description="Long-term follow-up of the original Stupp trial with 5-year survival data."
        findings="5-year OS 9.8% with temozolomide vs 1.9% without. 27.2% survived to 2 years. Benefit durable but small in absolute terms."
        url="https://pubmed.ncbi.nlm.nih.gov/19269895/"
        type="study"
      />

      <Divider />
      <h3 className="text-sm font-bold text-gray-900 mb-3">Additional Studies</h3>

      <StudyCard
        title="Survival in research studies in the US (Grossman et al., 2010)"
        description="Combined analysis of US research populations receiving temozolomide."
        findings="Median OS around 14–16 months in aligned clinical trial populations."
        url="https://pubmed.ncbi.nlm.nih.gov/20371685/"
        type="study"
      />

      <StudyCard
        title="Long-term adjuvant temozolomide effect (Huang et al., 2021)"
        description="Compares standard (6 cycles) vs extended temozolomide treatment duration."
        findings="Standard: median OS 19.4 months, 2-year survival 36%. Extended: median OS 25.6 months, 2-year survival 66%."
        url="https://pmc.ncbi.nlm.nih.gov/articles/PMC8561964/"
        type="study"
      />

      <StudyCard
        title="GBM and increased survival with longer chemo (Abou Jaoude et al., 2019)"
        description="Retrospective study on whether longer temozolomide courses improve outcomes."
        findings="Longer temozolomide linked to better long-term survival; 5-year survival ~4%."
        url="https://pmc.ncbi.nlm.nih.gov/articles/PMC6710024/"
        type="study"
      />

      <StudyCard
        title="Temozolomide chronotherapy (Damato et al., 2021)"
        description="Examined whether timing of temozolomide dosing affects outcomes."
        findings="Median OS ~15 months overall with variations by timing/dosing schedule."
        url="https://pmc.ncbi.nlm.nih.gov/articles/PMC8086242/"
        type="study"
      />

      <StudyCard
        title="Post-FDA approval survival benefit (Zhu et al., 2017)"
        description="Population-based study of survival trends after temozolomide and bevacizumab approval."
        findings="Real-world median OS improved to 10–11 months in post-approval eras (lower than clinical trials)."
        url="https://pmc.ncbi.nlm.nih.gov/articles/PMC5546458/"
        type="study"
      />
    </section>
  );
}
