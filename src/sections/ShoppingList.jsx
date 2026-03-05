import React, { useState } from 'react';
import { ShoppingCart, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader, InfoBox, Divider, BackToNav } from '../components/Cards';

function C({ title, count, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-3">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
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

function Item({ name, dose, link, note }) {
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
      <input type="checkbox" className="mt-1 rounded border-gray-300 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-bold text-gray-800">{name}</p>
        {dose && <p className="text-[10px] text-gray-500">{dose}</p>}
        {note && <p className="text-[10px] text-amber-600 mt-0.5">{note}</p>}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] text-primary-600 font-medium mt-1 hover:text-primary-800">
            <ExternalLink className="w-2.5 h-2.5" />
            <span className="truncate max-w-[220px]">Buy link</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function ShoppingList() {
  return (
    <section id="shopping" className="section-card">
      <SectionHeader
        icon={<ShoppingCart className="w-5 h-5" />}
        title="Master Shopping List"
        subtitle="Everything needed for the full protocol — supplements, equipment, and drugs"
        color="green"
      />

      <InfoBox variant="info" title="How This List Is Organized">
        This is the <strong>master shopping list</strong> for all non-food items in the protocol. 
        Food/grocery shopping is in the Nutrition & Supplement Protocol section. Checkboxes are 
        interactive — tap to mark items as purchased. Buy links go to recommended products.
      </InfoBox>

      <Divider />

      {/* ─── MONITORING EQUIPMENT ─── */}
      <C title="Monitoring Equipment & Medical Devices" count="4 items" defaultOpen={true}>
        <Item
          name="Overnight Wrist Pulse Oximeter with Alarm"
          dose="Vibeat OxyU — continuous SpO2 + heart rate monitoring during sleep"
          link="https://vibeatstore.com/products/oxyu-wrist-pulse-oximeter"
          note="PRIORITY — needed immediately for sleep apnea monitoring"
        />
        <Item
          name="Ring-Style Pulse Oximeter (alternative)"
          dose="Facelake FL340 — ring style with alert support"
          link="https://facelake.com/products/fl340-pulse-oximeter"
          note="Alternative to wrist model — get one or the other"
        />
        <Item
          name="CPAP / BiPAP Machine"
          dose="Prescription required — physician will order after sleep study"
          note="PRIORITY — critical for sleep apnea treatment. Insurance typically covers."
        />
        <Item
          name="Symptom Diary Notebook"
          dose="Any small notebook or use phone notes app"
          note="For daily tracking: energy, appetite, nausea, pain, cognition, sleep, SpO2"
        />
      </C>

      {/* ─── MUSHROOM SUPPLEMENTS ─── */}
      <C title="Mushroom Supplements" count="2 items" defaultOpen={true}>
        <Item
          name="Host Defense MyCommunity Capsules (Paul Stamets)"
          dose="2 capsules daily (1,000 mg) — with breakfast"
          link="https://hostdefense.com/products/mycommunity-capsules"
          note="17-species mushroom complex including Lion's Mane, Turkey Tail, Reishi, Maitake, Chaga"
        />
        <Item
          name="Host Defense Lion's Mane Powder"
          dose="1 tsp daily — add to kefir smoothies"
          link="https://hostdefense.com/products/lions-mane-powder"
          note="For NGF/BDNF stimulation and neuroregeneration"
        />
      </C>

      {/* ─── ANTI-TUMOR BIOACTIVES ─── */}
      <C title="Anti-Tumor Bioactive Supplements (NEW)" count="5 items" defaultOpen={true}>
        <Item
          name="Black Seed Oil (Thymoquinone) — 2,000 mg/day"
          dose="1,000 mg twice daily on empty stomach"
          link="https://www.amazon.com/Amazing-Herbs-Premium-Black-Softgels/dp/B002RL8FBG"
          note="Inhibits proliferation, promotes apoptosis, suppresses angiogenesis"
        />
        <Item
          name="Berberine — 1,000 mg/day"
          dose="500 mg twice daily with food"
          link="https://www.amazon.com/Toniiq-Berberine-Supplement-Concentrated-Standardized/dp/B085DPBK2M"
          note="Cell cycle arrest, Akt/mTOR inhibitor, blood sugar control, chemosensitizer"
        />
        <Item
          name="Olive Leaf Extract (Oleuropein) — 1,000 mg/day"
          dose="500 mg twice daily with food"
          link="https://www.amazon.com/Olive-Leaf-Extract-Oleuropein-Supplement/dp/B00F1J7KRA"
          note="Anti-proliferative, anti-angiogenic, COX-2 suppression"
        />
        <Item
          name="Modified Citrus Pectin — 15 g/day"
          dose="5 g three times daily (powder in water, with food)"
          link="https://www.amazon.com/EcoNugenics-PectaSol-Modified-Citrus-Pectin/dp/B001F1GJNU"
          note="PectaSol-C brand — blocks galectin-3, core anti-metastasis agent"
        />
        <Item
          name="Curcumin (Nano or w/ BioPerine) — 2,000 mg/day"
          dose="1,000 mg twice daily with fatty food"
          link="https://www.qunol.com/products/extra-strength-turmeric-curcumin"
          note="Updated to 2,000 mg/day. Nano or BioPerine form for 20x absorption. Crosses BBB."
        />
      </C>

      {/* ─── NEUROREGENERATION SUPPLEMENTS ─── */}
      <C title="Neuroregeneration & Brain Health Supplements" count="7 items" defaultOpen={false}>
        <Item
          name="Fish Oil — Nordic Naturals Ultimate Omega"
          dose="3,000 mg/day (2,000 AM + 1,000 PM, ≥600 mg DHA)"
          link="https://www.nordicnaturals.com/products/ultimate-omega"
        />
        <Item
          name="Ashwagandha KSM-66 — NOW Foods"
          dose="600 mg daily — with breakfast"
          link="https://www.nowfoods.com/products/supplements/ashwagandha-k-sm-66"
        />
        <Item
          name="Bacopa Monnieri — Bacognize 300mg"
          dose="300 mg daily (std. 50% bacosides) — with breakfast"
          link="https://nootropicsdepot.com/bacognize-bacopa-monnieri-extract-capsules-300mg"
        />
        <Item
          name="EGCG Green Tea Extract — NOW Foods 400mg"
          dose="400 mg daily — with lunch"
          link="https://www.nowfoods.com/products/supplements/egcg-green-tea-extract-400-mg-veg-capsules"
        />
        <Item
          name="Gotu Kola — 500mg"
          dose="500 mg daily — with lunch"
          link="https://www.vitacost.com/carlyle-gotu-kola"
        />
        <Item
          name="Rosemary Extract — NOW Foods"
          dose="400 mg daily — with dinner"
          link="https://www.vitacost.com/now-rosemary-extract"
        />
        <Item
          name="Organic Wheat Grass Powder — Amazing Grass"
          dose="1 tsp every other day — stirred into fresh juice"
          link="https://www.amazinggrass.com/products/organic-wheat-grass-powder"
        />
        <Item
          name="Organic Barley Grass Powder"
          dose="1 tsp alternating with wheat grass — stirred into fresh juice"
          link="https://www.amazon.com/Organic-Barley-Grass-Powder-Antioxidants/dp/B00JGEQEAS"
        />
      </C>

      {/* ─── ORGAN PROTECTION (DRUG PROTOCOL) ─── */}
      <C title="Organ Protection Supplements (Drug Protocol)" count="7 items" defaultOpen={true}>
        <Item
          name="Milk Thistle (Silymarin)"
          dose="420 mg/day (140 mg 3x daily) — LIVER PROTECTION"
          link="https://www.nowfoods.com/products/supplements/silymarin-milk-thistle-extract-300-mg-veg-capsules"
          note="Primary hepatoprotectant — start 3-5 days before drug protocol begins"
        />
        <Item
          name="NAC (N-Acetyl Cysteine) — 600mg"
          dose="600 mg twice daily (1,200 mg/day) — liver + kidney protection"
          link="https://www.walmart.com/ip/N-Acetyl-L-Cysteine-NAC-Capsules-600-MG-30-Capsules/13093468590"
          note="Precursor to glutathione — master antioxidant"
        />
        <Item
          name="Vitamin E — 400 IU (mixed tocopherols)"
          dose="400 IU daily — cell membrane protection"
          link="https://www.nowfoods.com/products/supplements/vitamin-e-400-softgels"
          note="Part of original Tippens protocol"
        />
        <Item
          name="CoQ10 (Ubiquinol) — 200mg"
          dose="200 mg daily — mitochondrial + heart protection"
          link="https://www.nowfoods.com/products/supplements/coq10-200-mg-veg-capsules"
        />
        <Item
          name="Alpha Lipoic Acid — 600mg"
          dose="300 mg twice daily (600 mg/day) — nerve + liver protection (crosses BBB)"
          link="https://www.nowfoods.com/products/supplements/alpha-lipoic-acid-extra-strength-600-mg-veg-capsules"
        />
        <Item
          name="Quercetin with Bromelain"
          dose="500 mg twice daily (1,000 mg/day) — anti-inflammatory + synergist"
          link="https://www.kalvitamins.com/products/quercetin-reacta-c-bromelain"
          note="Zinc ionophore — enhances other agents"
        />
        <Item
          name="Tulsi (Holy Basil) Extract — 600mg"
          dose="600 mg twice per week (Tue + Sat) — adaptogenic, radioprotective, anti-cancer"
          link="https://www.amazon.com/dp/B0013OQGO6"
          note="Ursolic acid: anti-tumor, immunomodulatory. Synergizes with ashwagandha."
        />
        <Item
          name="Zinc Picolinate — 30mg"
          dose="30 mg daily — immune support"
          link="https://www.walgreens.com/store/c/nature-made-zinc-30-mg-tablets/ID=prod3504-product"
          note="Works with ivermectin and quercetin as zinc ionophore"
        />
      </C>

      {/* ─── BEDTIME ─── */}
      <C title="Sleep & Bedtime Supplements" count="2 items" defaultOpen={false}>
        <Item
          name="Magnesium Glycinate — 400mg"
          dose="400 mg at bedtime — nerve + muscle, promotes sleep"
          link="https://doublewoodsupplements.com/products/magnesium-glycinate"
          note="Glycinate form is gentle on GI"
        />
        <Item
          name="Cannabis Gummies — Nighttime (THC:CBD:CBN)"
          dose="5 mg THC / 5 mg CBD / 5 mg CBN — 30 min before sleep"
          note="Medical card required — ask dispensary for 1:1:1 THC:CBD:CBN blend"
        />
      </C>

      {/* ─── CANNABIS ─── */}
      <C title="Cannabis Protocol (Medical Card)" count="2 items" defaultOpen={false}>
        <Item
          name="Daytime Gummy — 1:1:1 THC:CBD:CBG"
          dose="5 mg THC / 5 mg CBD / 5 mg CBG — afternoon (2-3 PM)"
          note="Anti-tumor, anti-inflammatory, neuroprotective. CBG shows promise against glioblastoma."
        />
        <Item
          name="Nighttime Gummy — THC:CBD:CBN"
          dose="5 mg THC / 5 mg CBD / 5 mg CBN — 30 min before bedtime"
          note="CBN promotes sleep onset. Helps regulate circadian rhythm."
        />
      </C>

      {/* ─── PROBIOTICS ─── */}
      <C title="Probiotics & Fermented" count="2 items" defaultOpen={false}>
        <Item
          name="Lifeway Kefir — Plain, 12-Strain Probiotic"
          dose="8 oz twice daily (morning + evening) with food"
          note="Buy 4 quarts per week. Available at most grocery stores in dairy section."
        />
        <Item
          name="Greek Yogurt — Full Fat, Plain"
          dose="For recipes (tzatziki, smoothie bowls)"
          note="Buy 2 large containers per week. Fage or Chobani whole milk preferred."
        />
      </C>

      {/* ─── DRUGS (PRESCRIPTION / OTC) ─── */}
      <C title="Anti-Tumor Drugs (Physician Required)" count="2 items" defaultOpen={false}>
        <InfoBox variant="danger" title="Physician Must Prescribe / Approve">
          Do NOT purchase or start any of these without physician approval and baseline bloodwork.
        </InfoBox>
        <Item
          name="Ivermectin (1,000 mg) + Mebendazole (14,400 mg) — Makis Protocol Bundle"
          dose="Ivermectin: 0.5 mg/kg 2x/week · Mebendazole: 200 mg 2x/day, 3 on / 4 off"
          link="https://allfamilypharmacy.com/makis/"
          note="$364 for both — All Family Pharmacy (Makis protocol bundle)"
        />
        <Item
          name="Fenbendazole 222mg Capsules — 120 Count (8,000 mg total)"
          dose="222 mg once daily, 3 days on / 4 days off"
          link="https://shopbplife.com/collections/fenbendazole-capsules/products/fenbendazole-222mg-capsules-120-count?variant=43367925022860"
          note="$75 — BP Life fenbendazole capsules (human-grade, physician should approve)"
        />
      </C>

      {/* ─── JUICING ─── */}
      <C title="Kitchen & Meal Prep" count="3 items" defaultOpen={false}>
        <Item
          name="Cold-Press Juicer — Omega J8006HDS"
          dose="For fresh green and beet juices (3x/week)"
          link="https://www.amazon.com/Omega-J8006HDS-Nutrition-Center-Quiet/dp/B00CIU92S2"
          note="Slow masticating juicer — preserves more nutrients than centrifugal"
        />
        <Item
          name="Glass Meal Prep Containers — 10 Pack"
          dose="For storing pre-made meals in fridge (chef preps weekly)"
          link="https://www.amazon.com/Bayco-Glass-Meal-Prep-Containers/dp/B07F19DZR7"
          note="BPA-free glass — microwave and dishwasher safe"
        />
        <Item
          name="Weekly Pill Organizer — AM/PM"
          dose="For organizing 15+ daily supplements into morning/midday/evening doses"
          link="https://www.amazon.com/AUVON-Organizer-Moisture-Proof-Design-Supplement/dp/B07MYD6MRZ"
          note="Essential for managing this many supplements — prevents missed doses"
        />
      </C>

      {/* ─── CIRCADIAN & SLEEP ─── */}
      <C title="Circadian Rhythm & Sleep Environment" count="4 items" defaultOpen={false}>
        <Item
          name="Wedge Pillow — Bed Elevation"
          dose="Elevate head 30-45° during sleep to reduce apnea episodes and aspiration risk"
          link="https://www.amazon.com/Cushy-Form-Wedge-Pillow-Sleeping/dp/B07RFZ3S51"
          note="Elevating head reduces OSA severity and GERD — recommended for all apnea patients"
        />
        <Item
          name="Blackout Curtains"
          dose="For bedroom — complete darkness for circadian rhythm reset"
          link="https://www.amazon.com/NICETOWN-Blackout-Curtains-Panels-Bedroom/dp/B0116PK4CU"
          note="Dark environment triggers melatonin production — essential for sleep protocol"
        />
        <Item
          name="Blue Light Blocking Glasses"
          dose="Wear after sunset during wind-down routine"
          link="https://www.amazon.com/TIJN-Blocking-Glasses-Computer-Eyeglasses/dp/B082DGR59T"
          note="Blocks blue light that suppresses melatonin — supports circadian reset"
        />
        <Item
          name="Sunrise Alarm Clock"
          dose="Gradual light that simulates dawn — place at bedside"
          link="https://www.amazon.com/Philips-SmartSleep-Wake-Up-Simulation-HF3520/dp/B0093162RM"
          note="Gradual light wakes naturally, reinforces morning circadian signal"
        />
      </C>

      {/* ─── HOME MONITORING ─── */}
      <C title="Home Health Monitoring" count="3 items" defaultOpen={false}>
        <Item
          name="Blood Pressure Monitor — Upper Arm"
          dose="Check daily — morning before medications"
          link="https://www.amazon.com/OMRON-Platinum-Bluetooth-Pressure-Monitor/dp/B07N1GCYDP"
          note="Monitor BP during drug protocol — report any significant changes to physician"
        />
        <Item
          name="Digital Thermometer"
          dose="Check if feeling unwell — fever may indicate infection"
          link="https://www.amazon.com/iHealth-Thermometer-Adults-Forehead-PT3/dp/B085DX38LJ"
          note="Forehead no-contact style — easy and hygienic"
        />
        <Item
          name="Medical Records Binder"
          dose="Organize all bloodwork results, imaging reports, medication logs"
          link="https://www.amazon.com/UniKeep-Medical-Records-Organizer-Binder/dp/B07Q6JFXJQ"
          note="Bring to every doctor appointment — keeps everything in one place"
        />
      </C>

      <Divider />

      {/* ─── QUICK REFERENCE ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Quick Count Summary</h3>
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-purple-50 rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-purple-700">5</p>
          <p className="text-[10px] text-purple-600 font-medium">Anti-Tumor Bioactives</p>
        </div>
        <div className="bg-amber-50 rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-amber-700">7</p>
          <p className="text-[10px] text-amber-600 font-medium">Brain/Neuro Supps</p>
        </div>
        <div className="bg-emerald-50 rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-emerald-700">7</p>
          <p className="text-[10px] text-emerald-600 font-medium">Organ Protection</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-blue-700">2</p>
          <p className="text-[10px] text-blue-600 font-medium">Mushroom Supps</p>
        </div>
        <div className="bg-red-50 rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-red-700">2</p>
          <p className="text-[10px] text-red-600 font-medium">Anti-Tumor Drugs</p>
        </div>
        <div className="bg-pink-50 rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-pink-700">2</p>
          <p className="text-[10px] text-pink-600 font-medium">Cannabis</p>
        </div>
        <div className="bg-indigo-50 rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-indigo-700">4</p>
          <p className="text-[10px] text-indigo-600 font-medium">Monitoring</p>
        </div>
        <div className="bg-teal-50 rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-teal-700">4</p>
          <p className="text-[10px] text-teal-600 font-medium">Sleep/Circadian</p>
        </div>
        <div className="bg-orange-50 rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-orange-700">3</p>
          <p className="text-[10px] text-orange-600 font-medium">Home Health</p>
        </div>
        <div className="bg-cyan-50 rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-cyan-700">3</p>
          <p className="text-[10px] text-cyan-600 font-medium">Kitchen/Prep</p>
        </div>
      </div>

      <InfoBox variant="warning" title="Reminder: Food Shopping Is Separate">
        The weekly grocery/food shopping list (proteins, vegetables, fruits, grains, herbs, etc.) 
        is in the <strong>Nutrition & Supplement Protocol</strong> section. This list covers only 
        supplements, equipment, cannabis, and medications.
      </InfoBox>

      <div className="text-center text-[10px] text-gray-400 mt-4">
        Buy links are recommendations — equivalent products from trusted brands are acceptable<br/>
        Always verify supplement quality (third-party tested, GMP certified preferred)
      </div>
      <BackToNav />
    </section>
  );
}
