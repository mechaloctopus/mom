import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

function C({ title, count, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <span className="text-xs font-bold text-gray-800">{title}</span>
        <div className="flex items-center gap-2">
          {count && <span className="text-[10px] bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full font-bold">{count}</span>}
          {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </div>
      </button>
      {open && <div className="p-4 text-xs text-gray-700 leading-relaxed">{children}</div>}
    </div>
  );
}

function Item({ name, dose, link, note, priority }) {
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
      <input type="checkbox" className="mt-1 rounded border-gray-300 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[11px] font-bold text-gray-800">{name}</p>
          {priority && <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-bold">{priority}</span>}
        </div>
        {dose && <p className="text-[10px] text-gray-500 mt-0.5">{dose}</p>}
        {note && <p className="text-[10px] text-gray-600 mt-0.5">{note}</p>}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] text-primary-600 font-medium mt-1 hover:text-primary-800"
          >
            <ExternalLink className="w-2.5 h-2.5" />
            <span className="truncate max-w-[220px]">Product link</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function ShoppingList() {
  return (
    <section id="shopping" className="space-y-4">
      <div className="border border-gray-200 rounded-2xl p-5 bg-white">
        <p className="text-sm text-gray-700 leading-relaxed mb-2">
          This section consolidates the non-food supplies across the protocol so the family can stage purchases in the right order: urgent monitoring first, physician-controlled drugs second, then supportive supplements and household logistics.
        </p>
        <p className="text-xs text-gray-500 leading-relaxed">
          Grocery items remain in the Metabolic Therapy chapter. Anything prescription-only should be discussed with the treating team before purchase or scheduling.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="border border-amber-200 bg-amber-50 rounded-xl p-4">
          <p className="text-[11px] font-bold text-amber-900 mb-1">First priority</p>
          <p className="text-[11px] text-amber-800 leading-relaxed">Oxygen / sleep monitoring, a symptom log, and a pill organizer.</p>
        </div>
        <div className="border border-blue-200 bg-blue-50 rounded-xl p-4">
          <p className="text-[11px] font-bold text-blue-900 mb-1">Second priority</p>
          <p className="text-[11px] text-blue-800 leading-relaxed">Confirm which physician-approved prescriptions and baseline labs are actually being used.</p>
        </div>
        <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-4">
          <p className="text-[11px] font-bold text-emerald-900 mb-1">Third priority</p>
          <p className="text-[11px] text-emerald-800 leading-relaxed">Add supportive supplements only after the core schedule is stable and documented.</p>
        </div>
      </div>

      <C title="Monitoring Equipment & Daily Tracking" count="5 items" defaultOpen={true}>
        <Item
          name="Overnight pulse oximeter with alarm"
          dose="Continuous SpO2 and heart-rate monitoring during sleep"
          link="https://vibeatstore.com/products/oxyu-wrist-pulse-oximeter"
          note="Most actionable home device if nocturnal desaturation or sleep apnea is suspected."
          priority="urgent"
        />
        <Item
          name="Backup finger pulse oximeter"
          dose="Spot checks during the day and for device verification"
          note="Useful if the overnight wearable is charging or gives an uncertain reading."
        />
        <Item
          name="Automatic blood-pressure cuff"
          dose="Daily seated readings, especially during steroid changes"
          note="Helps document hypertension, dizziness, or dehydration trends."
        />
        <Item
          name="7-day pill organizer"
          dose="Separate AM / PM compartments preferred"
          note="Reduces dosing confusion once prescriptions, supplements, and PRNs accumulate."
        />
        <Item
          name="Symptom and seizure log"
          dose="Notebook or phone-based tracker"
          note="Track alertness, intake, vomiting, headaches, seizures, gait, sleep, and oxygen saturation."
          priority="urgent"
        />
      </C>

      <C title="Physician-Controlled Medications" count="4 items" defaultOpen={true}>
        <Item
          name="Mebendazole"
          dose="Only if the treating physician approves the repurposed-drug plan"
          note="Human-use formulation is preferred if this pathway is pursued."
          priority="physician"
        />
        <Item
          name="Ivermectin"
          dose="Only after medication interaction review and dose confirmation"
          note="Do not add casually alongside seizure drugs, steroids, or evolving inpatient plans."
          priority="physician"
        />
        <Item
          name="Anti-seizure medications"
          dose="Exact agent and dose per neurology / hospital discharge plan"
          note="The active seizure regimen should be written down in one place before any adjunct changes."
          priority="core"
        />
        <Item
          name="Steroid plan and GI protection"
          dose="Dexamethasone schedule plus acid suppression if prescribed"
          note="Confirm taper schedule, indication, and who is managing dose adjustments."
          priority="core"
        />
      </C>

      <C title="Core Supportive Supplements" count="8 items" defaultOpen={true}>
        <Item
          name="Fish oil"
          dose="High-EPA/DHA formulation used in the site protocol"
          link="https://www.nordicnaturals.com/products/ultimate-omega"
          note="Neuro-supportive adjunct; add only if swallowing and GI tolerance are acceptable."
        />
        <Item
          name="Lion's Mane or mushroom blend"
          dose="Choose one primary mushroom product rather than several overlapping ones"
          link="https://hostdefense.com/products/mycommunity-capsules"
          note="Keep the schedule simple enough to track."
        />
        <Item
          name="Curcumin"
          dose="Enhanced-absorption formulation if used"
          link="https://www.qunol.com/products/extra-strength-turmeric-curcumin"
          note="Document the exact product and daily total dose, since labels vary widely."
        />
        <Item
          name="NAC"
          dose="Used here as a liver and oxidative-stress support adjunct"
          note="Most useful if a physician-monitored drug protocol is actually underway."
        />
        <Item
          name="Milk thistle"
          dose="Hepatic support during medication-heavy phases"
          link="https://www.nowfoods.com/products/supplements/silymarin-milk-thistle-extract-300-mg-veg-capsules"
        />
        <Item
          name="Magnesium glycinate"
          dose="Bedtime support if constipation, muscle tension, or poor sleep are issues"
          link="https://doublewoodsupplements.com/products/magnesium-glycinate"
        />
        <Item
          name="Kefir or probiotic staple"
          dose="Consistent household supply rather than many small probiotic products"
          note="Choose a product the patient will actually tolerate regularly."
        />
        <Item
          name="Cannabis products"
          dose="Only if legally obtained and clinically tolerated"
          note="Keep daytime and nighttime products clearly labeled to avoid accidental over-sedation."
        />
      </C>

      <C title="Household Setup for Home Care" count="5 items" defaultOpen={false}>
        <Item
          name="Hydration station"
          dose="Measured cups, straw cup, electrolyte packets if approved"
          note="Helpful when intake is inconsistent or swallowing is slower."
        />
        <Item
          name="Protein shake backup"
          dose="Ready-to-drink option for poor appetite days"
          note="Not a replacement for meals, but useful when oral intake falls off."
        />
        <Item
          name="Bedside basket"
          dose="Medication sheet, tissues, lip balm, emesis bags, thermometer"
          note="Reduces chaos during overnight symptoms or seizures."
        />
        <Item
          name="Shower chair or transfer support"
          dose="As needed for weakness, dizziness, or fall risk"
          note="A simple safety item can be more valuable than another supplement purchase."
        />
        <Item
          name="Appointment binder"
          dose="Imaging reports, lab trends, medication list, questions for each specialty"
          note="Keeps the medical narrative consistent across oncology, neurology, and primary care."
        />
      </C>

      <C title="Procurement order" count="3 steps" defaultOpen={false}>
        <ol className="space-y-2 list-decimal pl-4">
          <li>Buy the monitoring and tracking items first.</li>
          <li>Do not purchase a large supplement stack until the active physician plan is clear.</li>
          <li>Once the regimen is stable, standardize on a small number of repeat products instead of many rotating brands.</li>
        </ol>
      </C>
    </section>
  );
}
