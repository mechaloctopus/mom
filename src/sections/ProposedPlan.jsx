import React from 'react';
import { ClipboardList, Utensils, Dumbbell, Pill, Moon, Sun, Activity, HeartPulse, Users, AlertTriangle } from 'lucide-react';
import { SectionHeader, InfoBox, Divider } from '../components/Cards';

function DecisionBlock({ number, title, color, children }) {
  const colors = {
    blue: 'from-blue-500 to-blue-600',
    red: 'from-red-500 to-red-600',
    green: 'from-emerald-500 to-emerald-600',
    amber: 'from-amber-500 to-amber-600',
    purple: 'from-purple-500 to-purple-600',
    teal: 'from-teal-500 to-teal-600',
    pink: 'from-pink-500 to-pink-600',
    indigo: 'from-indigo-500 to-indigo-600',
    orange: 'from-orange-500 to-orange-600',
  };
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${colors[color]} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
          {number}
        </div>
        <h3 className="text-sm font-bold text-gray-900">{title}</h3>
      </div>
      <div className="ml-11">{children}</div>
    </div>
  );
}

function CostRow({ item, cost, note }) {
  return (
    <tr className="border-b border-gray-100 last:border-0">
      <td className="py-2 pr-3 text-xs text-gray-700 font-medium">{item}</td>
      <td className="py-2 pr-3 text-xs text-emerald-700 font-bold whitespace-nowrap">{cost}</td>
      {note && <td className="py-2 text-[10px] text-gray-400">{note}</td>}
    </tr>
  );
}

export default function ProposedPlan() {
  return (
    <section id="plan" className="section-card">
      <SectionHeader
        icon={<ClipboardList className="w-5 h-5" />}
        title="Josh's Proposed Treatment & Care Plan"
        subtitle="Decision framework, nutrition, therapy, and monitoring"
        color="primary"
      />

      <div className="bg-gradient-to-br from-primary-50 to-indigo-50 border border-primary-100 rounded-2xl p-5 mb-5">
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          Josh has spent extensive time researching and deliberating — reviewing published studies, 
          gathering testimonials, consulting with multiple cutting-edge AI models for deep analysis, 
          and reaching out to doctors who specialize in integrative cancer care. This proposal is the 
          result of that research.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          This plan is <strong>intentional and deliberate</strong> — it is designed to adapt as new 
          information presents itself, while taking concrete action to address the issues Mom is facing 
          rather than ignoring them and hoping for the best. Every decision outlined below is ultimately 
          <strong> Mom's decision</strong> as long as she can make decisions. Our role is to arm her 
          with the clearest, most thorough data possible.
        </p>
        <p className="text-xs text-gray-500 leading-relaxed">
          This is a living document. The plan will adjust as medical data, diagnostic results, and 
          Mom's preferences evolve. What matters is that we are proactive, informed, and unified as a family.
        </p>
      </div>

      {/* ───── DECISION 1: BIOPSY ───── */}
      <DecisionBlock number="1" title="Decision: Biopsy — Yes or No?" color="amber">
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-3">
          <p className="text-xs text-amber-800 leading-relaxed mb-2">
            <strong>The first decision Mom needs to make.</strong> A biopsy would tell us the exact tumor 
            type, grade, and molecular markers (MGMT, IDH). This information is critical if she chooses 
            conventional treatment (chemo). However, a biopsy is invasive and carries risks.
          </p>
          <div className="space-y-2 mt-3">
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-amber-800">When biopsy MAKES sense:</p>
              <ul className="text-[11px] text-amber-700 mt-1 space-y-1">
                <li>• The tumor is in a non-eloquent ("dumb") area of the brain — low risk of neurological damage</li>
                <li>• Mom is considering chemotherapy — knowing molecular markers (MGMT methylation) is essential for treatment selection</li>
                <li>• The diagnosis is uncertain — it might not be cancer at all, or might be a more treatable type</li>
                <li>• It is guaranteed to be safe and minimally invasive (stereotactic needle biopsy)</li>
              </ul>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-red-800">When biopsy may NOT make sense:</p>
              <ul className="text-[11px] text-red-700 mt-1 space-y-1">
                <li>• The tumor is in an eloquent ("important") area — near speech, motor, or vision centers</li>
                <li>• Mom has already decided she will not pursue chemotherapy regardless of results</li>
                <li>• The risk of hemorrhage or tumor seeding outweighs the diagnostic benefit</li>
                <li>• Her overall health makes anesthesia high-risk</li>
              </ul>
            </div>
          </div>
        </div>
        <InfoBox variant="warning" title="Key Question We Need Answered">
          <strong>Where exactly is the tumor located?</strong> Is it in an eloquent (critical function) 
          or non-eloquent (less risky) area? This single piece of information heavily influences whether 
          biopsy is advisable. We need the neurosurgeon to clearly explain the location, the planned 
          biopsy approach, and the specific risk percentages for Mom's case.
        </InfoBox>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-3">
          <p className="text-[11px] text-blue-800 leading-relaxed">
            <strong>Josh's current recommendation:</strong> Unless the biopsy is extremely non-invasive 
            and in a safe location, or is absolutely required for a treatment decision Mom intends to make — 
            <strong>lean toward no biopsy</strong> at this time. If she is not planning to pursue chemo, 
            the main benefit of biopsy (treatment selection) is less relevant.
          </p>
        </div>
      </DecisionBlock>

      <Divider />

      {/* ───── DECISION 2: CHEMOTHERAPY ───── */}
      <DecisionBlock number="2" title="Decision: Chemotherapy — Yes or No?" color="red">
        <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-3">
          <p className="text-xs text-red-800 leading-relaxed mb-2">
            If it is confirmed that Mom has cancer, the standard recommendation will be temozolomide 
            chemotherapy (the Stupp protocol). This decision must weigh:
          </p>
          <ul className="text-[11px] text-red-700 space-y-1.5 mt-2">
            <li>• <strong>Survival benefit:</strong> Median ~2.5 extra months (14.6 vs 12.1 months). 5-year survival ~9.8%</li>
            <li>• <strong>Quality of life:</strong> Severe side effects — nausea, fatigue, immunosuppression, infection risk</li>
            <li>• <strong>Dignity:</strong> If Mom chooses to not undergo chemo to preserve quality of life and dignity, that is a valid and respected choice</li>
            <li>• <strong>Cost:</strong> Extremely expensive (see cost estimates below)</li>
            <li>• <strong>Combined approach:</strong> Some patients do chemo + alternative protocols simultaneously</li>
          </ul>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-3">
          <p className="text-[11px] text-blue-800 leading-relaxed">
            <strong>Josh's perspective:</strong> This is likely Mom's decision to decline, which is understandable 
            given the modest survival benefit vs. significant quality-of-life impact. If she declines chemo, we 
            move forward with the alternative care plan below. All considerations must be laid on the table 
            transparently so she can decide with full knowledge.
          </p>
        </div>
      </DecisionBlock>

      <Divider />

      {/* ───── PLAN A: NUTRITION ───── */}
      <DecisionBlock number="3" title="Nutrition & Supplement Plan (No-Brainer — Do This Regardless)" color="green">
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <Utensils className="w-4 h-4 text-emerald-600" />
            <p className="text-xs font-bold text-emerald-800">This is the easiest YES decision — we should do this no matter what.</p>
          </div>
          <p className="text-[11px] text-emerald-700 leading-relaxed mb-3">
            Put Mom on a strict Mediterranean-based anti-cancer nutrition plan. Aaron has volunteered to cook, 
            and others can help too. We all chip in to ensure she has the exact food required for optimal 
            anti-cancer metabolism, neuroregeneration, and overall health.
          </p>

          <div className="space-y-2">
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-emerald-800">Core Diet</p>
              <p className="text-[10px] text-emerald-600 mt-1">
                Mediterranean diet: fatty fish (salmon, sardines), cruciferous vegetables (broccoli, kale), 
                berries, extra virgin olive oil, walnuts, legumes, whole grains, garlic, onions, green tea. 
                Minimize sugar, processed foods, red meat.
              </p>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-emerald-800">Supplements & Herbs</p>
              <ul className="text-[10px] text-emerald-600 mt-1 space-y-0.5">
                <li>• <strong>Lion's Mane mushroom</strong> — NGF/BDNF stimulation, neuroregeneration, anti-cancer</li>
                <li>• <strong>Turmeric/Curcumin</strong> (with black pepper for absorption) — anti-inflammatory, anti-cancer, crosses blood-brain barrier</li>
                <li>• <strong>CBD oil</strong> — neuroprotective, anti-cancer, anti-inflammatory, promotes neurogenesis</li>
                <li>• <strong>Omega-3 fish oil</strong> (high DHA) — brain structure support, anti-inflammatory</li>
                <li>• <strong>Ashwagandha</strong> — adaptogenic, neuroprotective, anti-cancer</li>
                <li>• <strong>Bacopa Monnieri</strong> — BDNF enhancement, memory support</li>
                <li>• <strong>Gotu Kola</strong> — neurogenesis, nerve repair</li>
                <li>• <strong>Rosemary extract</strong> — carnosic acid, neuroprotective</li>
                <li>• <strong>Green tea extract (EGCG)</strong> — anti-cancer, neuroprotective</li>
                <li>• <strong>Fermented foods</strong> (kefir, yogurt, kimchi) — gut-brain axis, immune support</li>
              </ul>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-emerald-800">Meal Planning with AI</p>
              <p className="text-[10px] text-emerald-600 mt-1">
                We can use cutting-edge AI models to generate weekly meal plans tailored to anti-cancer 
                nutrition, managing her specific dietary needs, taste preferences, and ensuring every meal 
                is optimized. Shopping lists, prep instructions, and nutritional breakdowns can all be 
                AI-generated and updated weekly.
              </p>
            </div>
          </div>
        </div>
      </DecisionBlock>

      <Divider />

      {/* ───── PLAN B: PHYSICAL THERAPY ───── */}
      <DecisionBlock number="4" title="Physical Therapy & Activity" color="blue">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <Dumbbell className="w-4 h-4 text-blue-600" />
            <p className="text-xs font-bold text-blue-800">Movement is medicine — adapted for her needs.</p>
          </div>
          <p className="text-[11px] text-blue-700 leading-relaxed mb-3">
            Mom needs physical therapy but has bad knees, so we need to be creative. Family members 
            can take turns working with her on a consistent routine.
          </p>
          <div className="space-y-2">
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-blue-800">Best Option: Warm Water Pool Therapy</p>
              <p className="text-[10px] text-blue-600 mt-1">
                A slightly heated swimming pool is ideal — water supports body weight (reducing knee stress), 
                provides gentle resistance, and warmth soothes joints. Aquatic therapy is evidence-based for 
                patients with joint issues and limited mobility.
              </p>
              <p className="text-[10px] text-blue-500 mt-1">
                Source: <a href="https://pubmed.ncbi.nlm.nih.gov/26695760/" target="_blank" className="underline">Aquatic exercise for musculoskeletal conditions (PMID: 26695760)</a>
              </p>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-blue-800">Additional Therapies</p>
              <ul className="text-[10px] text-blue-600 mt-1 space-y-0.5">
                <li>• <strong>Gentle chair yoga / seated exercises</strong> — low-impact, improves circulation</li>
                <li>• <strong>Walking (short distances)</strong> — with family members, outdoors when possible</li>
                <li>• <strong>Range-of-motion exercises</strong> — maintain joint mobility</li>
                <li>• <strong>Breathing exercises</strong> — important given SpO2 history</li>
              </ul>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-blue-800">Animal & Dolphin Therapy</p>
              <p className="text-[10px] text-blue-600 mt-1">
                Animal-assisted therapy (dogs, horses) and dolphin therapy have shown benefits for 
                neurological patients — reducing stress, improving mood, and promoting engagement. 
                These can be explored as supplemental activities.
              </p>
              <p className="text-[10px] text-blue-500 mt-1">
                Source: <a href="https://pubmed.ncbi.nlm.nih.gov/25160810/" target="_blank" className="underline">Animal-assisted therapy and neurological rehabilitation (PMID: 25160810)</a>
              </p>
            </div>
          </div>
        </div>
      </DecisionBlock>

      <Divider />

      {/* ───── PLAN C: ALTERNATIVE PROTOCOL ───── */}
      <DecisionBlock number="5" title="Alternative Treatment Protocol (Hardest Decision)" color="purple">
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <Pill className="w-4 h-4 text-purple-600" />
            <p className="text-xs font-bold text-purple-800">Ivermectin + Mebendazole/Fenbendazole Protocol — Under Doctor Supervision</p>
          </div>
          <p className="text-[11px] text-purple-700 leading-relaxed mb-3">
            The most difficult decision: should Mom consider, under a doctor's care, an ivermectin + 
            mebendazole/fenbendazole anti-cancer protocol? Josh has been in contact with various doctors 
            who could be on our team to supervise this approach.
          </p>

          <div className="space-y-2">
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-purple-800">Proposed Protocol Components</p>
              <ul className="text-[10px] text-purple-600 mt-1 space-y-0.5">
                <li>• <strong>Ivermectin</strong> — dosed per doctor guidance, targeting Akt/mTOR and WNT pathways</li>
                <li>• <strong>Mebendazole or Fenbendazole</strong> — microtubule disruption, glucose inhibition (mebendazole preferred as it's FDA-approved for humans)</li>
                <li>• <strong>Milk thistle (Silymarin)</strong> — liver protection during protocol</li>
                <li>• <strong>Regular liver function monitoring</strong> — blood tests every 2–4 weeks</li>
                <li>• <strong>Vitamin E, curcumin, CBD oil</strong> — supporting supplements per community protocols</li>
              </ul>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-purple-800">Monitoring Plan</p>
              <ul className="text-[10px] text-purple-600 mt-1 space-y-0.5">
                <li>• <strong>Baseline imaging</strong> — CT or MRI scan before starting protocol</li>
                <li>• <strong>2-month minimum</strong> — commit to at least 2 months on protocol before assessing</li>
                <li>• <strong>Follow-up imaging at 2 months</strong> — PET/CT scan to assess tumor response</li>
                <li>• <strong>Blood work every 2–4 weeks</strong> — liver enzymes, CBC, tumor markers if available</li>
                <li>• <strong>Symptom diary</strong> — track energy, appetite, cognition, side effects daily</li>
              </ul>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-purple-800">Decision Points</p>
              <ul className="text-[10px] text-purple-600 mt-1 space-y-0.5">
                <li>• <strong>If tumor shrinks (2–4 months):</strong> Continue protocol, maintain nutrition plan, continue monitoring</li>
                <li>• <strong>If no change (2–4 months):</strong> Consider adjusting dosing or adding agents, continue monitoring</li>
                <li>• <strong>If protocol doesn't work (4 months):</strong> Discontinue drugs, maintain nutrition plan, schedule monthly CT scans for 6 months to monitor developments</li>
                <li>• <strong>If cancer is growing despite efforts:</strong> Return to biopsy option for more data, or prepare for hospice care with pain management if Mom chooses not to pursue chemo</li>
              </ul>
            </div>
          </div>
        </div>
        <InfoBox variant="warning" title="Doctor Supervision Required">
          This protocol should ONLY be pursued under the care of a physician experienced with these 
          medications. Josh has been in contact with doctors who specialize in this approach and who 
          could join our care team. No one should self-medicate without medical oversight.
        </InfoBox>
      </DecisionBlock>

      <Divider />

      {/* ───── SLEEP APNEA ───── */}
      <DecisionBlock number="6" title="CRITICAL: Sleep Apnea Must Be Addressed" color="red">
        <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <Moon className="w-4 h-4 text-red-600" />
            <p className="text-xs font-bold text-red-800">This is potentially life-threatening and may have caused the SpO2 crisis.</p>
          </div>
          <p className="text-[11px] text-red-700 leading-relaxed mb-3">
            Mom has terrible sleep apnea. This is potentially responsible for her losing oxygen 
            and passing out (SpO2 dropping to 74%). Other family members also have life-threatening 
            apnea — this is a familial pattern that <strong>must</strong> be taken seriously.
          </p>
          <div className="space-y-2">
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-red-800">Immediate Actions</p>
              <ul className="text-[10px] text-red-600 mt-1 space-y-0.5">
                <li>• <strong>Sleep study (polysomnography)</strong> — confirm severity and type of apnea</li>
                <li>• <strong>CPAP/BiPAP machine</strong> — continuous positive airway pressure to keep airways open during sleep</li>
                <li>• <strong>Pulse oximeter monitoring</strong> — overnight monitoring of SpO2 levels at home</li>
                <li>• <strong>Sleep position</strong> — elevate head, side sleeping may reduce apnea episodes</li>
                <li>• <strong>Weight management</strong> — if applicable, weight loss significantly reduces apnea severity</li>
              </ul>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-red-800">Why This Is Urgent</p>
              <p className="text-[10px] text-red-600 mt-1">
                Untreated severe sleep apnea causes repeated oxygen desaturation events every night. 
                This chronic hypoxia can worsen brain damage, impair healing, increase stroke risk, 
                and accelerate cognitive decline. Addressing this may be the single most impactful 
                immediate intervention.
              </p>
              <p className="text-[10px] text-red-500 mt-1">
                Source: <a href="https://pubmed.ncbi.nlm.nih.gov/19250347/" target="_blank" className="underline">Obstructive sleep apnea and cognitive decline (PMID: 19250347)</a>
              </p>
            </div>
          </div>
        </div>
      </DecisionBlock>

      <Divider />

      {/* ───── CIRCADIAN + SUNLIGHT ───── */}
      <DecisionBlock number="7" title="Circadian Rhythm & Sunlight" color="orange">
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <Sun className="w-4 h-4 text-orange-600" />
            <p className="text-xs font-bold text-orange-800">Reset her internal clock and get daily sunlight.</p>
          </div>
          <div className="space-y-2">
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-orange-800">Fix the Nocturnal Pattern</p>
              <p className="text-[10px] text-orange-600 mt-1">
                Gradually shift her schedule: activities earlier in the morning, consistent wake times, 
                wind-down routine in the evening, dim lights after sunset, no screens before bed. 
                A regular circadian rhythm improves immune function, hormone regulation, and brain repair.
              </p>
              <p className="text-[10px] text-orange-500 mt-1">
                Source: <a href="https://pubmed.ncbi.nlm.nih.gov/30311830/" target="_blank" className="underline">Circadian disruption and cancer outcomes (PMID: 30311830)</a>
              </p>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-orange-800">Daily Sunlight: 15–30 Minutes</p>
              <p className="text-[10px] text-orange-600 mt-1">
                Get Mom outdoors for 15–30 minutes daily doing anything — sitting, gentle walking, 
                gardening. Natural sunlight regulates melatonin, boosts vitamin D (anti-cancer), 
                improves mood, and reinforces circadian rhythm. Morning sunlight is most effective.
              </p>
              <p className="text-[10px] text-orange-500 mt-1">
                Source: <a href="https://pubmed.ncbi.nlm.nih.gov/24494042/" target="_blank" className="underline">Vitamin D and cancer: current evidence (PMID: 24494042)</a>
              </p>
            </div>
          </div>
        </div>
      </DecisionBlock>

      <Divider />

      {/* ───── LIVING SITUATION ───── */}
      <DecisionBlock number="8" title="Living Situation & Care Routine" color="teal">
        <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-teal-600" />
            <p className="text-xs font-bold text-teal-800">Create a healing environment with consistent care.</p>
          </div>
          <div className="space-y-2">
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-teal-800">Move into Marcus's or Jake's House</p>
              <p className="text-[10px] text-teal-600 mt-1">
                Mom will move into a room at either Marcus's or Jake's house. She will have a dedicated 
                space where she is comfortable and cared for. The environment should be calm, clean, 
                well-lit during the day, and dark at night.
              </p>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-teal-800">Care Schedule</p>
              <p className="text-[10px] text-teal-600 mt-1">
                Either one dedicated person works with her, or family members take turns on a rotation. 
                Tasks include: preparing meals per the nutrition plan, administering supplements, 
                accompanying her for physical therapy/walks, monitoring sleep/oxygen levels, and 
                providing companionship and emotional support.
              </p>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-teal-800">Daily Routine Template</p>
              <ul className="text-[10px] text-teal-600 mt-1 space-y-0.5">
                <li>• <strong>7:00–8:00 AM</strong> — Wake up, morning sunlight, light breakfast</li>
                <li>• <strong>8:00–9:00 AM</strong> — Supplements, medications if applicable</li>
                <li>• <strong>9:00–10:00 AM</strong> — Gentle activity (walk, chair exercises, pool therapy)</li>
                <li>• <strong>12:00 PM</strong> — Nutritious lunch per meal plan</li>
                <li>• <strong>2:00–3:00 PM</strong> — Rest/nap, or light activity (art, music, animal therapy)</li>
                <li>• <strong>5:30 PM</strong> — Dinner per meal plan</li>
                <li>• <strong>7:00 PM</strong> — Wind down, dim lights, relaxation</li>
                <li>• <strong>9:00–10:00 PM</strong> — Sleep (with CPAP, pulse ox monitor)</li>
              </ul>
            </div>
          </div>
        </div>
      </DecisionBlock>

      <Divider />

      {/* ───── DATA WE NEED ───── */}
      <DecisionBlock number="9" title="Data & Diagnostics We Need to Gather" color="indigo">
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-indigo-600" />
            <p className="text-xs font-bold text-indigo-800">To make the best decisions, we need the clearest data possible.</p>
          </div>

          <div className="space-y-2 mb-3">
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-indigo-800">Critical Questions to Answer</p>
              <ul className="text-[10px] text-indigo-600 mt-1 space-y-0.5">
                <li>• <strong>Exact tumor location</strong> — eloquent vs. non-eloquent brain area?</li>
                <li>• <strong>Tumor size and number</strong> — single tumor or multiple?</li>
                <li>• <strong>Growth rate</strong> — is it actively growing? How fast?</li>
                <li>• <strong>Suspected tumor type/grade</strong> — based on imaging characteristics</li>
                <li>• <strong>Extent of damage from hypoxic event</strong> — neurological assessment results</li>
                <li>• <strong>Sleep apnea severity</strong> — AHI score from sleep study</li>
                <li>• <strong>Current cognitive/neurological baseline</strong> — what functions are affected?</li>
                <li>• <strong>Overall health status</strong> — blood work, organ function, nutritional status</li>
                <li>• <strong>Survival statistics</strong> — for each possible action (or inaction), given her specific case</li>
              </ul>
            </div>
          </div>

          <p className="text-[11px] font-bold text-indigo-800 mb-2">Available Diagnostic Tools</p>
          <div className="space-y-2">
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-indigo-800">MRI (Magnetic Resonance Imaging)</p>
              <p className="text-[10px] text-indigo-600 mt-1">
                <strong>Best for:</strong> Detailed brain tumor imaging. Shows tumor size, location, and surrounding tissue. 
                Contrast-enhanced MRI can show blood supply to tumor. Advanced MRI (perfusion, spectroscopy) 
                can sometimes suggest tumor type without biopsy.
              </p>
              <p className="text-[10px] text-indigo-500 mt-1">Typical cost: <strong>$1,000–$5,000</strong> (with insurance: $250–$1,000 copay)</p>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-indigo-800">CT Scan (Computed Tomography)</p>
              <p className="text-[10px] text-indigo-600 mt-1">
                <strong>Best for:</strong> Quick imaging, detecting bleeding, monitoring tumor size over time. 
                Less detailed than MRI for soft tissue but faster and cheaper. Good for regular monitoring scans.
              </p>
              <p className="text-[10px] text-indigo-500 mt-1">Typical cost: <strong>$300–$3,000</strong> (with insurance: $100–$500 copay)</p>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-indigo-800">PET Scan (Positron Emission Tomography)</p>
              <p className="text-[10px] text-indigo-600 mt-1">
                <strong>Best for:</strong> Showing metabolic activity — distinguishes active cancer from dead/scar tissue. 
                Shows if treatment is working (reduced metabolic activity = tumor responding). Often combined with CT (PET/CT).
              </p>
              <p className="text-[10px] text-indigo-500 mt-1">Typical cost: <strong>$3,000–$6,000</strong> (with insurance: $500–$1,500 copay)</p>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-indigo-800">Blood Tests / Tumor Markers</p>
              <p className="text-[10px] text-indigo-600 mt-1">
                <strong>Best for:</strong> Monitoring liver function (critical if on drug protocol), blood counts, 
                inflammation markers (CRP, ESR), and general health. Some liquid biopsy tests can detect 
                tumor DNA in blood (emerging technology).
              </p>
              <p className="text-[10px] text-indigo-500 mt-1">Typical cost: <strong>$100–$500</strong> per panel (with insurance: $20–$100 copay)</p>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-indigo-800">Sleep Study (Polysomnography)</p>
              <p className="text-[10px] text-indigo-600 mt-1">
                <strong>Best for:</strong> Diagnosing and measuring severity of sleep apnea. Records breathing, 
                oxygen levels, brain waves, and heart rate during sleep. Results determine CPAP settings.
              </p>
              <p className="text-[10px] text-indigo-500 mt-1">Typical cost: <strong>$1,000–$3,000</strong> (with insurance: $200–$600 copay). Home tests: $300–$600</p>
            </div>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-[11px] font-bold text-indigo-800">Pulse Oximeter (Home Monitoring)</p>
              <p className="text-[10px] text-indigo-600 mt-1">
                <strong>Best for:</strong> Daily/nightly monitoring of blood oxygen levels at home. 
                Fingertip models cost $20–$50. Continuous overnight models with recording: $50–$200. 
                Essential given her SpO2 history.
              </p>
              <p className="text-[10px] text-indigo-500 mt-1">Cost: <strong>$20–$200</strong> (no insurance needed)</p>
            </div>
          </div>
        </div>

        <h4 className="text-xs font-bold text-gray-900 mb-2 ml-0">Rough Cost Estimates Summary</h4>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-[11px] border-collapse bg-white rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-2.5 font-bold text-gray-700 border-b border-gray-200">Item</th>
                <th className="text-left p-2.5 font-bold text-gray-700 border-b border-gray-200">Est. Cost</th>
                <th className="text-left p-2.5 font-bold text-gray-700 border-b border-gray-200">Note</th>
              </tr>
            </thead>
            <tbody>
              <CostRow item="Temozolomide chemo (6 months)" cost="$10K–$30K+" note="With insurance varies widely" />
              <CostRow item="Brain MRI" cost="$1K–$5K" note="Insurance typically covers" />
              <CostRow item="CT Scan" cost="$300–$3K" note="Good for monitoring" />
              <CostRow item="PET/CT Scan" cost="$3K–$6K" note="Best for treatment response" />
              <CostRow item="Brain biopsy" cost="$5K–$15K+" note="Surgical procedure" />
              <CostRow item="Sleep study" cost="$1K–$3K" note="Home test: $300–$600" />
              <CostRow item="CPAP machine" cost="$500–$1,500" note="Often covered by insurance" />
              <CostRow item="Pulse oximeter" cost="$20–$200" note="Buy immediately" />
              <CostRow item="Blood work panels" cost="$100–$500/ea" note="Every 2–4 weeks on protocol" />
              <CostRow item="Ivermectin (monthly)" cost="$10–$50" note="Generic, very cheap" />
              <CostRow item="Mebendazole (monthly)" cost="$20–$100" note="Prescription, generic" />
              <CostRow item="Fenbendazole (monthly)" cost="$15–$40" note="Veterinary, OTC" />
              <CostRow item="Milk thistle (monthly)" cost="$10–$20" note="Supplement" />
              <CostRow item="Lion's Mane (monthly)" cost="$20–$40" note="Quality supplement" />
              <CostRow item="CBD oil (monthly)" cost="$30–$80" note="Full-spectrum" />
              <CostRow item="Supplements total (monthly)" cost="$100–$250" note="All supplements combined" />
              <CostRow item="Nutrition plan (monthly)" cost="$400–$800" note="Healthy food for one person" />
            </tbody>
          </table>
        </div>
      </DecisionBlock>

      <Divider />

      {/* ───── FINAL SUMMARY ───── */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-800 rounded-2xl p-6 text-white mb-4">
        <div className="flex items-center gap-3 mb-4">
          <HeartPulse className="w-6 h-6" />
          <h3 className="text-base font-bold">Summary: Josh's Proposed Approach</h3>
        </div>

        <div className="space-y-3 text-sm text-white/90 leading-relaxed">
          <div className="flex items-start gap-2">
            <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">1</span>
            <p><strong>Biopsy:</strong> Unless required or extremely non-invasive — lean toward <strong>no biopsy</strong> at this time. Gather more data on tumor location first.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">2</span>
            <p><strong>Chemotherapy:</strong> Present all data transparently. If Mom declines (likely), respect her choice fully.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">3</span>
            <p><strong>Sleep apnea:</strong> Address <strong>immediately</strong>. Get a sleep study, get a CPAP, buy a pulse oximeter now. This may have caused the crisis and is fixable.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">4</span>
            <p><strong>Nutrition plan:</strong> Start <strong>immediately</strong>. Mediterranean anti-cancer diet with supplements (Lion's Mane, curcumin, CBD, omega-3s, fermented foods). Aaron cooks, everyone helps. AI-planned meals weekly.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">5</span>
            <p><strong>Physical therapy:</strong> Warm pool therapy for knees, gentle daily movement, animal/dolphin therapy as supplemental healing.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">6</span>
            <p><strong>Circadian rhythm:</strong> Fix sleep schedule, 15–30 min sunlight daily, wind-down routine at night.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">7</span>
            <p><strong>Living situation:</strong> Move Mom into Marcus's or Jake's house. Dedicated room, care rotation, consistent daily routine.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">8</span>
            <p><strong>Alternative protocol:</strong> If family agrees — ivermectin + mebendazole under doctor supervision with milk thistle. <strong>Minimum 2 months.</strong> Monitor with imaging and blood work. Adjust based on results.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">9</span>
            <p><strong>If protocol fails (2–4 months):</strong> Stop drugs, maintain nutrition. Monthly CT scans for 6 months. Re-evaluate biopsy or transition to hospice/comfort care per Mom's wishes.</p>
          </div>
        </div>
      </div>

      {/* AUTONOMY */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-5 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <h3 className="text-sm font-bold text-amber-900">Mom's Autonomy & Our Role</h3>
        </div>
        <p className="text-xs text-amber-800 leading-relaxed mb-2">
          <strong>Ultimately, every decision is Mom's to make</strong> as long as she is able to make decisions. 
          Our job as a family is to:
        </p>
        <ul className="text-xs text-amber-700 space-y-1.5">
          <li className="flex items-start gap-2"><span className="text-amber-500">•</span>Gather the most thorough, transparent data possible</li>
          <li className="flex items-start gap-2"><span className="text-amber-500">•</span>Present all options honestly — with statistics, costs, and quality-of-life implications</li>
          <li className="flex items-start gap-2"><span className="text-amber-500">•</span>Respect her choices, even if they differ from what we would choose</li>
          <li className="flex items-start gap-2"><span className="text-amber-500">•</span>Provide unwavering love, support, and practical care no matter what path is chosen</li>
          <li className="flex items-start gap-2"><span className="text-amber-500">•</span>Adjust the plan as new information comes in — this is a living document</li>
        </ul>
        <p className="text-xs text-amber-800 leading-relaxed mt-3">
          This plan will evolve as we learn more. Every piece of relevant data will be taken into 
          consideration, and the approach will be adjusted as needed. We are all on Mom's team.
        </p>
      </div>

      <div className="text-center text-xs text-gray-400 mt-4">
        <p>Proposed by Josh — with love for our family</p>
        <p className="mt-1">This is a living document. Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
    </section>
  );
}
