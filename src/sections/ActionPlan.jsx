import React, { useState } from 'react';
import { ClipboardCheck, ChevronDown, ChevronUp, AlertTriangle, ExternalLink } from 'lucide-react';
import { SectionHeader, InfoBox, Divider, BackToNav } from '../components/Cards';

function Step({ number, title, status, priority, children }) {
  const [open, setOpen] = useState(false);
  const statusColors = {
    'not-started': 'bg-gray-100 text-gray-500',
    'in-progress': 'bg-blue-100 text-blue-700',
    'blocked': 'bg-amber-100 text-amber-700',
    'done': 'bg-emerald-100 text-emerald-700',
  };
  const statusLabels = {
    'not-started': 'Not Started',
    'in-progress': 'In Progress',
    'blocked': 'Blocked',
    'done': 'Done',
  };
  const priorityColors = {
    critical: 'bg-red-500',
    high: 'bg-amber-500',
    medium: 'bg-blue-500',
  };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-3">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
        <div className={`w-7 h-7 rounded-full ${priorityColors[priority]} text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0`}>{number}</div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-gray-800 leading-snug">{title}</p>
        </div>
        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${statusColors[status]}`}>{statusLabels[status]}</span>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="p-4 text-xs text-gray-700 leading-relaxed border-t border-gray-100">{children}</div>}
    </div>
  );
}

export default function ActionPlan() {
  return (
    <section id="actionplan" className="section-card">
      <SectionHeader
        icon={<ClipboardCheck className="w-5 h-5" />}
        title="Family Action Plan"
        subtitle="The 12 steps to get Mom's care fully operational"
        color="primary"
      />

      <div className="bg-gradient-to-br from-primary-50 to-indigo-50 border border-primary-200 rounded-2xl p-5 mb-5">
        <p className="text-xs text-primary-800 leading-relaxed mb-2">
          This is our family's master checklist. Every step has an owner, a status, and clear deliverables. 
          The <strong>red numbers</strong> are critical-path items that block other work. <strong>Amber</strong> is 
          high priority. <strong>Blue</strong> can run in parallel.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-red-500 text-white">Critical Path</span>
          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-white">High Priority</span>
          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-500 text-white">Parallel Work</span>
        </div>
      </div>

      {/* ─── PHASE 1: FOUNDATION ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Phase 1 — Foundation (Weeks 1–4)</h3>

      <Step number={1} title="Utah Residency, Medicaid & SNAP" status="not-started" priority="critical">
        <p className="mb-2"><strong>Everything else depends on this.</strong> Mom needs insurance before we can engage doctors, get imaging, or fill prescriptions.</p>
        <div className="space-y-1.5">
          <p>☐ Establish Utah residency (driver's license, address, utility bill)</p>
          <p>☐ Apply for Utah Medicaid — <a href="https://medicaid.utah.gov/" target="_blank" rel="noopener noreferrer" className="underline text-primary-600">medicaid.utah.gov</a></p>
          <p>☐ Apply for SNAP (food stamps) — <a href="https://jobs.utah.gov/mycase/" target="_blank" rel="noopener noreferrer" className="underline text-primary-600">jobs.utah.gov/mycase</a></p>
          <p>☐ Confirm Medicaid covers: oncology visits, imaging (MRI/CT), bloodwork, prescriptions, PT, speech therapy</p>
        </div>
      </Step>

      <Step number={2} title="Huntsman Cancer Center Referral" status="not-started" priority="critical">
        <p className="mb-2">Get Mom into Huntsman Cancer Institute with a care team that <strong>supports her wishes</strong> — including openness to integrative approaches alongside conventional monitoring.</p>
        <div className="space-y-1.5">
          <p>☐ Call Huntsman new patient line: <strong>(801) 587-7000</strong></p>
          <p>☐ Request neuro-oncology team referral</p>
          <p>☐ Transfer all medical records from Texoma Medical Center</p>
          <p>☐ Confirm Medicaid acceptance</p>
          <p>☐ Ask about integrative oncology program at Huntsman</p>
          <p>☐ First appointment: establish baseline imaging + bloodwork</p>
        </div>
      </Step>

      <Step number={3} title="Find an IFM Doctor" status="not-started" priority="critical">
        <p className="mb-2">We need a <strong>brilliant, compassionate functional medicine doctor</strong> who can supervise the supplement and drug protocol. This person should be experienced with off-label repurposed drug protocols and comfortable working alongside conventional oncology.</p>
        <div className="space-y-1.5">
          <p>☐ Search IFM practitioner directory — <a href="https://www.ifm.org/find-a-practitioner/" target="_blank" rel="noopener noreferrer" className="underline text-primary-600">ifm.org/find-a-practitioner</a></p>
          <p>☐ Research Utah-based integrative oncology doctors</p>
          <p>☐ Hold interviews with at least 3 candidates</p>
          <p>☐ Criteria: experience with cancer protocols, empathetic, open-minded, willing to supervise off-label drugs</p>
          <p>☐ Select and engage — present our research website as the foundation</p>
        </div>
      </Step>

      <Divider />

      {/* ─── PHASE 2: PROTOCOL ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Phase 2 — Protocol Finalization (Weeks 3–6)</h3>

      <Step number={4} title="Finalize Treatment Protocol with Doctor" status="not-started" priority="critical">
        <p className="mb-2">Present the draft protocol (Drug & Supplement Protocol section) to the IFM doctor for professional oversight. This is where the <strong>rubber meets the road</strong>.</p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-3">
          <p className="text-[11px] text-amber-800"><strong>Approval Workflow:</strong></p>
          <p className="text-[11px] text-amber-700 mt-1">1. Present draft protocol to IFM doctor → 2. Doctor reviews, raises objections or modifications → 3. Family reviews doctor's recommendations → 4. Mom reviews and gives personal consent → 5. Any sibling can raise objections for discussion → 6. All amendments documented → 7. Final protocol approved by Mom + Doctor → 8. Execution begins</p>
        </div>
        <div className="space-y-1.5">
          <p>☐ Share this website with IFM doctor</p>
          <p>☐ Doctor reviews drug dosages (mebendazole, fenbendazole, ivermectin)</p>
          <p>☐ Doctor reviews organ protection supplement stack</p>
          <p>☐ Doctor establishes custom dosages for Mom's weight, liver function, and tumor specifics</p>
          <p>☐ Doctor signs off or proposes modifications</p>
          <p>☐ Family reviews modifications — any objections raised and documented</p>
          <p>☐ Mom gives informed consent</p>
          <p>☐ Protocol version 1.0 finalized and timestamped</p>
        </div>
      </Step>

      <Step number={5} title="The Three Pillars of the Working Plan" status="not-started" priority="high">
        <div className="space-y-3">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
            <p className="text-[11px] font-bold text-emerald-800 mb-1">Pillar A: Mediterranean Diet (Family-Driven)</p>
            <p className="text-[11px] text-emerald-700">Strict anti-cancer Mediterranean diet. Aaron cooks, everyone helps. The full meal plan, recipes, and grocery list are in the Nutrition Protocol section. <strong>This can start immediately — no doctor needed.</strong></p>
            <p className="text-[11px] text-emerald-600 mt-1">☐ All family members read the Nutrition Protocol section</p>
            <p className="text-[11px] text-emerald-600">☐ First grocery run using the shopping list</p>
            <p className="text-[11px] text-emerald-600">☐ Cooking rotation established</p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
            <p className="text-[11px] font-bold text-purple-800 mb-1">Pillar B: Medicine Protocol (Doctor-Supervised)</p>
            <p className="text-[11px] text-purple-700">Mebendazole, fenbendazole, ivermectin — all dosages established with IFM doctor. Organ support stack (milk thistle, NAC, ALA, etc.) running alongside. <strong>Execution pending doctor approval + Mom's consent.</strong></p>
            <p className="text-[11px] text-purple-600 mt-1">☐ Dosages confirmed by doctor for Mom's case</p>
            <p className="text-[11px] text-purple-600">☐ Organ protection timing confirmed</p>
            <p className="text-[11px] text-purple-600">☐ Drug interactions checked</p>
            <p className="text-[11px] text-purple-600">☐ Supplier orders placed (see Shopping List)</p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <p className="text-[11px] font-bold text-amber-800 mb-1">Pillar C: Herbal Supplement Protocol (Debate & Approve)</p>
            <p className="text-[11px] text-amber-700">Each herbal supplement needs to be individually debated: Is it worth including? What's the evidence? What's the dosage? Where do we draw the line? Too much can overwhelm the liver and create interactions. The full chart is in the Drug & Supplement Protocol section.</p>
            <p className="text-[11px] text-amber-600 mt-1">☐ Family reviews complete supplement chart</p>
            <p className="text-[11px] text-amber-600">☐ Doctor reviews for interactions and approves/rejects each item</p>
            <p className="text-[11px] text-amber-600">☐ Cannabis ratios (THC:CBD:CBG:CBN) discussed with dispensary pharmacist</p>
            <p className="text-[11px] text-amber-600">☐ Final supplement list approved — what stays, what goes</p>
          </div>
        </div>
      </Step>

      <Divider />

      {/* ─── PHASE 3: OPERATIONS ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Phase 3 — Operations & Ongoing (Week 4+)</h3>

      <Step number={6} title="Expense Tracking & Fair Accounting" status="not-started" priority="medium">
        <p className="mb-2">Keep impeccable records of every dollar spent on Mom's care. The intention is to reimburse everyone fairly — nobody should carry an unfair burden.</p>
        <div className="space-y-1.5">
          <p>☐ Create shared expense spreadsheet (Google Sheets)</p>
          <p>☐ Track: supplements, drugs, doctor visits, imaging, equipment, food, gas</p>
          <p>☐ Josh: $500 from item sales toward medicine/supplements</p>
          <p>☐ All contributors log their contributions</p>
          <p>☐ Monthly reconciliation — keep it transparent</p>
        </div>
      </Step>

      <Step number={7} title="Medical Records Database" status="in-progress" priority="medium">
        <p className="mb-2">All of Mom's medical records in one place — downloaded, organized, and accessible through this website.</p>
        <div className="space-y-1.5">
          <p>☑ Hospital reports transcribed (Medical Reports section)</p>
          <p>☐ Download complete records from Texoma Medical Center patient portal</p>
          <p>☐ Organize by date and type (imaging, labs, notes, orders)</p>
          <p>☐ Add to website as searchable database</p>
          <p>☐ Transfer records to Huntsman upon referral</p>
        </div>
      </Step>

      <Step number={8} title="Daily Health Diary" status="not-started" priority="medium">
        <p className="mb-2">Track Mom's daily status — energy, appetite, cognition, mood, pain, sleep quality, supplements taken, any side effects. This data is critical for the doctor to assess protocol effectiveness.</p>
        <div className="space-y-1.5">
          <p>☐ Create Google Form for daily submissions (simple, 2-minute entries)</p>
          <p>☐ Fields: date, energy (1-10), appetite (1-10), cognition (1-10), mood, pain level, sleep quality, notes</p>
          <p>☐ Responses auto-feed to Google Sheet</p>
          <p>☐ Weekly summary generated for doctor review</p>
          <p>☐ Build website dashboard to display trends over time</p>
        </div>
      </Step>

      <Step number={9} title="Monitoring Schedule (Doctor-Led)" status="not-started" priority="high">
        <p className="mb-2">The IFM doctor will establish the monitoring cadence. Anticipated schedule:</p>
        <div className="space-y-1.5">
          <p>☐ <strong>Weekly:</strong> Bloodwork (CBC, CMP, liver enzymes) — covered by Medicaid</p>
          <p>☐ <strong>Week 8:</strong> First response MRI — compare to baseline</p>
          <p>☐ <strong>Week 12:</strong> Endpoint MRI — continue/modify/stop decision</p>
          <p>☐ <strong>Quarterly:</strong> CT/MRI rotation — ongoing surveillance</p>
          <p>☐ Establish emergency fund for any uncovered diagnostics (MR Spectroscopy, FET-PET if needed)</p>
          <p>☐ All results added to Medical Records database</p>
        </div>
      </Step>

      <Step number={10} title="Shared Family Calendar" status="not-started" priority="medium">
        <p className="mb-2">One calendar that everyone can see — doctor appointments, imaging dates, bloodwork, cooking rotation, PT sessions.</p>
        <div className="space-y-1.5">
          <p>☐ Create shared Google Calendar: "Mom's Care"</p>
          <p>☐ Add all family members</p>
          <p>☐ Color-code: 🔴 Medical appointments, 🟢 Cooking rotation, 🔵 PT/Speech, 🟡 Bloodwork</p>
          <p>☐ Set reminders 24h and 1h before each appointment</p>
          <p>☐ Designate who drives Mom to each appointment</p>
        </div>
      </Step>

      <Step number={11} title="Physical Therapy & Speech Therapy" status="not-started" priority="medium">
        <p className="mb-2">A hospital doctor recommended outpatient PT and speech therapy. These are evidence-based interventions that support neurological recovery.</p>
        <div className="space-y-1.5">
          <p>☐ Check Utah Medicaid coverage for outpatient PT and speech therapy</p>
          <p>☐ If covered: get referral from Huntsman, find nearby providers</p>
          <p>☐ If not covered: establish family-run program (warm water pool therapy, chair yoga, walking, breathing exercises, speech drills)</p>
          <p>☐ Schedule: aim for 2-3 PT sessions/week, 1-2 speech sessions/week</p>
          <p>☐ Add to shared calendar</p>
        </div>
      </Step>

      <Step number={12} title="I Think That's It" status="not-started" priority="medium">
        <p className="mb-2">This is a living document. As new needs arise, new steps will be added. But right now — this covers everything we can see.</p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
          <p className="text-[11px] text-emerald-800"><strong>Remember:</strong> We don't have to do everything at once. We just have to do the next right thing, together. Mom has a family that loves her, a detailed plan, and the determination to fight. That's more than most people have.</p>
        </div>
      </Step>

      <Divider />

      <InfoBox variant="warning" title="Protocol Amendment Process">
        Any family member or Mom herself can object to any medication, food, herb, or supplement at any time. 
        Objections are documented, discussed as a family, reviewed by the IFM doctor if relevant, and the 
        protocol is amended accordingly. <strong>This is Mom's body and Mom's choice.</strong> The family's role 
        is to research, organize, cook, drive, support, and love — not to override her autonomy.
      </InfoBox>

      <div className="text-center text-[10px] text-gray-400 mt-4">
        Family Action Plan • Living document • Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
      <BackToNav />
    </section>
  );
}
