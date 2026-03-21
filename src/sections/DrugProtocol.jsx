import { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, ExternalLink } from 'lucide-react';

function C({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <span className="text-xs font-bold text-gray-800">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
      </button>
      {open && <div className="p-4 text-xs text-gray-700 leading-relaxed">{children}</div>}
    </div>
  );
}

function Divider() {
  return <div className="border-t border-gray-100 my-5" />;
}

function InfoBox({ title, variant = 'info', children }) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    danger: 'bg-red-50 border-red-200 text-red-900',
    success: 'bg-emerald-50 border-emerald-200 text-emerald-900',
  };

  return (
    <div className={`border rounded-xl p-4 mb-4 ${styles[variant]}`}>
      {title && <p className="text-xs font-bold mb-1.5">{title}</p>}
      <div className="text-xs leading-relaxed">{children}</div>
    </div>
  );
}

const PROTOCOL_ROWS = [
  {
    drug: 'Mebendazole',
    dose: '200 mg twice daily',
    schedule: 'Days 1-3 each week, taken with a fat-containing meal',
    notes: 'Preferred benzimidazole if prescribed for human use.',
  },
  {
    drug: 'Fenbendazole',
    dose: '222 mg once daily',
    schedule: 'Days 1-3 each week only if the physician chooses it as substitute or adjunct',
    notes: 'Use only under physician direction; avoid duplicating benzimidazoles without a clear plan.',
  },
  {
    drug: 'Ivermectin',
    dose: '0.2-0.4 mg/kg once or twice weekly',
    schedule: 'Example cadence: Monday and Thursday, adjusted to tolerance and clinician preference',
    notes: 'Start low and titrate only after medication review and baseline labs.',
  },
];

const MONITORING_ROWS = [
  ['CBC with differential', 'Baseline, then every 1-2 weeks early', 'Watch for marrow suppression, eosinophilia, or intercurrent infection.'],
  ['CMP / liver enzymes', 'Baseline, then every 1-2 weeks early', 'AST, ALT, bilirubin, alkaline phosphatase, creatinine.'],
  ['Neurologic exam', 'At each clinical review', 'Track alertness, speech, strength, gait, seizure burden, and headache pattern.'],
  ['Medication reconciliation', 'Before start and at each change', 'Check seizure drugs, steroids, anticoagulants, and QT-risk combinations.'],
  ['Brain imaging', 'Per oncology / neurosurgery schedule', 'MRI is required to judge response; symptoms alone are not enough.'],
];

export default function DrugProtocol() {
  return (
    <section id="drugprotocol" className="space-y-4">
      <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-4 h-4 text-red-600" />
          <p className="text-xs font-bold text-red-900">PHYSICIAN SUPERVISION REQUIRED</p>
        </div>
        <p className="text-xs text-red-800 leading-relaxed mb-2">
          This section is a discussion document for the treating physician, not a self-directed treatment plan. Any repurposed-drug approach must be approved by the clinical team, reconciled against seizure medicines and steroids, and paired with baseline labs plus follow-up monitoring.
        </p>
        <p className="text-xs text-red-800 leading-relaxed">
          The goal here is to organize one possible mebendazole-centered option clearly enough for physician review while preserving the rest of the site&apos;s nutrition, sleep, and supportive-care sections as separate adjuncts.
        </p>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
        <p className="text-xs font-bold text-indigo-800 mb-1">Reference Paper</p>
        <p className="text-[11px] text-indigo-700 leading-relaxed mb-2">
          This protocol framework is adapted from the orthomolecular repurposed-drug discussion already cited elsewhere in the project. It should be treated as hypothesis-generating, not as evidence equivalent to standard chemoradiation trials.
        </p>
        <a
          href="https://isom.ca/wp-content/uploads/2024/09/Targeting-the-Mitochondrial-Stem-Cell-Connection-in-Cancer-Treatment-JOM-39.3.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[11px] text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
          <span>Targeting the Mitochondrial-Stem Cell Connection in Cancer Treatment</span>
        </a>
      </div>

      <h3 className="text-sm font-bold text-gray-900">Protocol Overview</h3>
      <p className="text-sm text-gray-700 leading-relaxed">
        If the care team elects to consider a repurposed-drug trial, the structure should prioritize one lead benzimidazole, cautious ivermectin use, and tight laboratory surveillance. The scientific case remains investigational, so the operational priority is safety, documentation, and rapid stopping if toxicity or clinical decline appears.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-[11px] border border-gray-200 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 font-bold text-gray-700 border-b border-gray-200">Agent</th>
              <th className="text-left p-3 font-bold text-gray-700 border-b border-gray-200">Starting Dose Framework</th>
              <th className="text-left p-3 font-bold text-gray-700 border-b border-gray-200">Schedule</th>
              <th className="text-left p-3 font-bold text-gray-700 border-b border-gray-200">Clinical Note</th>
            </tr>
          </thead>
          <tbody>
            {PROTOCOL_ROWS.map((row, index) => (
              <tr key={row.drug} className={index % 2 ? 'bg-gray-50' : 'bg-white'}>
                <td className="p-3 border-b border-gray-100 font-semibold text-gray-800 align-top">{row.drug}</td>
                <td className="p-3 border-b border-gray-100 text-gray-700 align-top">{row.dose}</td>
                <td className="p-3 border-b border-gray-100 text-gray-700 align-top">{row.schedule}</td>
                <td className="p-3 border-b border-gray-100 text-gray-600 align-top">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <InfoBox title="Practical interpretation" variant="info">
        Use one clearly documented schedule, not several overlapping informal ideas. A simple written plan with start date, dose, hold criteria, and lab cadence is safer than a dense protocol that cannot be followed consistently.
      </InfoBox>

      <Divider />

      <h3 className="text-sm font-bold text-gray-900">Monitoring Schedule</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-[11px] border border-gray-200 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 font-bold text-gray-700 border-b border-gray-200">Item</th>
              <th className="text-left p-3 font-bold text-gray-700 border-b border-gray-200">Timing</th>
              <th className="text-left p-3 font-bold text-gray-700 border-b border-gray-200">Why it matters</th>
            </tr>
          </thead>
          <tbody>
            {MONITORING_ROWS.map(([item, timing, why], index) => (
              <tr key={item} className={index % 2 ? 'bg-gray-50' : 'bg-white'}>
                <td className="p-3 border-b border-gray-100 font-semibold text-gray-800 align-top">{item}</td>
                <td className="p-3 border-b border-gray-100 text-gray-700 align-top">{timing}</td>
                <td className="p-3 border-b border-gray-100 text-gray-600 align-top">{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="border border-gray-200 rounded-xl p-4 bg-white">
          <p className="text-[11px] font-bold text-gray-900 mb-1">Week 0</p>
          <p className="text-[11px] text-gray-600 leading-relaxed">Reconcile medications, confirm baseline CBC/CMP, document neuro status, and define the exact physician-approved schedule.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-4 bg-white">
          <p className="text-[11px] font-bold text-gray-900 mb-1">Weeks 1-4</p>
          <p className="text-[11px] text-gray-600 leading-relaxed">Start conservatively, review tolerance frequently, and repeat labs early enough to catch liver or marrow toxicity before symptoms declare themselves.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-4 bg-white">
          <p className="text-[11px] font-bold text-gray-900 mb-1">Weeks 5-12</p>
          <p className="text-[11px] text-gray-600 leading-relaxed">Continue only if the patient is clinically stable, labs remain acceptable, and MRI plus symptom trend justify ongoing exposure.</p>
        </div>
      </div>

      <Divider />

      <C title="When the protocol should be held immediately" defaultOpen={true}>
        <ul className="space-y-2">
          <li>New or worsening confusion, somnolence, focal deficit, or seizure escalation.</li>
          <li>Clinically meaningful AST/ALT rise, bilirubin elevation, creatinine worsening, or neutropenia.</li>
          <li>Inability to maintain oral intake, severe nausea, rash, or suspected drug-drug interaction.</li>
          <li>Any disagreement between physician teams about safety while the diagnosis or standard-of-care plan is still being finalized.</li>
        </ul>
      </C>

      <C title="What this section is trying to accomplish" defaultOpen={false}>
        <ul className="space-y-2">
          <li>Provide a readable physician-facing framework instead of scattered dosing notes.</li>
          <li>Separate investigational repurposed-drug thinking from established glioma care.</li>
          <li>Make monitoring obligations as prominent as the drugs themselves.</li>
          <li>Keep the site clinically organized without overstating certainty.</li>
        </ul>
      </C>

      <C title="Questions to settle before any start date" defaultOpen={false}>
        <ul className="space-y-2">
          <li>Which single benzimidazole is preferred, and why?</li>
          <li>What exact hold thresholds should be used for AST, ALT, bilirubin, ANC, and symptoms?</li>
          <li>Which current seizure drugs or steroids change the safety profile?</li>
          <li>What MRI date or clinical checkpoint determines whether the plan is helping, neutral, or harmful?</li>
        </ul>
      </C>

      <InfoBox title="Bottom line" variant="warning">
        This page now functions as a complete overview instead of a blank section, but it intentionally frames the protocol as investigational and physician-controlled. If standard oncology treatment is initiated, that plan remains the clinical anchor.
      </InfoBox>
    </section>
  );
}
