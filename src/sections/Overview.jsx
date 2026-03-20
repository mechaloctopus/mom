import React from 'react';

export default function Overview() {
  return (
    <section id="overview">
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        <strong>Brenda Tullis, 64-year-old female</strong>, presents with a left parietal lobe infiltrative mass first identified on MRI in July 2025 as a large non-enhancing signal abnormality measuring 9.3 × 5.1 × 5.6 cm, most suggestive of glioma. A February 2026 follow-up MRI demonstrated interval evolution: the primary mass now measures 3.7 × 5.8 × 4.4 cm with emerging minimal peripheral enhancement, surrounding vasogenic edema extending into adjacent lobes, and a <strong>new 9.8 mm minimally enhancing satellite lesion</strong> in the anterior thalamic cortex — consistent with progressing infiltrative glioma with possible grade transition. Biopsy is pending.
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Key Clinical Parameters</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-gray-300">
          <tbody className="text-gray-700">
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold w-40">Primary mass</td><td className="p-2.5">3.7 × 5.8 × 4.4 cm, left parietal lobe, minimal peripheral enhancement</td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Satellite lesion</td><td className="p-2.5">9.8 mm, anterior thalamic cortex (new finding, Feb 2026)</td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Midline shift</td><td className="p-2.5">~3 mm left-to-right</td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Edema</td><td className="p-2.5">Confluent vasogenic edema, refractory to corticosteroids + osmotic therapy</td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">Seizures</td><td className="p-2.5">Refractory, requiring multiple anti-epileptic agents</td></tr>
            <tr className="border-b border-gray-200"><td className="p-2.5 font-semibold">SpO2 event</td><td className="p-2.5">Prolonged hypoxemia to 74% during prior hospitalization</td></tr>
            <tr><td className="p-2.5 font-semibold">Incidental finding</td><td className="p-2.5">Indeterminate left adrenal nodule (2.8 cm) — requires follow-up to exclude metastatic disease</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Environmental History</h3>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        Patient resides in dilapidated housing with exposure to chickens, rabbits, and routine contact with stray animals including potential feline exposure. This environmental profile is relevant to infectious differential diagnoses, particularly toxoplasmosis, fungal infections, and other opportunistic organisms (see <a href="#/doxycycline-anomaly" className="text-blue-700 hover:underline">Doxycycline Anomaly Report</a>).
      </p>

      <h3 className="text-sm font-bold text-gray-900 mb-2">Scope of This Document</h3>
      <p className="text-sm text-gray-700 leading-relaxed">
        This compilation integrates peer-reviewed research, the patient{"'"}s medical records, proposed treatment protocols (conventional and investigational), nutritional strategy, and real-time clinical observations. Each chapter includes sourced studies with PubMed links for independent verification. The document is maintained as a living resource and updated as new data becomes available.
      </p>
    </section>
  );
}
