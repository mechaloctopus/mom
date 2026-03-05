import React, { useState } from 'react';
import { Utensils, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import { SectionHeader, StudyCard, InfoBox, Divider, BackToNav } from '../components/Cards';

function C({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-3">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
        <span className="text-xs font-bold text-gray-800">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
      </button>
      {open && <div className="p-4 text-xs text-gray-700 leading-relaxed">{children}</div>}
    </div>
  );
}

function MealRow({ time, meal, cal, desc }) {
  return (
    <tr className="border-b border-gray-100 last:border-0">
      <td className="py-2 pr-2 text-[10px] font-bold text-gray-500 whitespace-nowrap align-top">{time}</td>
      <td className="py-2 pr-2 align-top">
        <p className="text-[11px] font-bold text-gray-800">{meal}</p>
        <p className="text-[10px] text-gray-500 mt-0.5">{desc}</p>
      </td>
      <td className="py-2 text-[10px] text-gray-400 whitespace-nowrap align-top">{cal}</td>
    </tr>
  );
}

function DayPlan({ day, label, meals }) {
  return (
    <C title={`${day} — ${label}`} defaultOpen={day === 'Monday'}>
      <table className="w-full"><tbody>
        {meals.map((m, i) => <MealRow key={i} {...m} />)}
      </tbody></table>
      <p className="text-[10px] text-gray-400 mt-2 text-right">Daily total: ~1,700 cal</p>
    </C>
  );
}

const DAYS = [
  { day: 'Monday', label: 'Salmon & Lentil Day', meals: [
    { time: '7:30 AM', meal: 'Turmeric Golden Oatmeal', cal: '~380', desc: 'Steel-cut oats with turmeric, black pepper, cinnamon, blueberries, ground flaxseed, drizzle of raw honey. Green tea.' },
    { time: '10:00 AM', meal: 'Kefir Berry Smoothie', cal: '~160', desc: 'Lifeway 12-strain kefir, raspberries, 1 tsp Lion\'s Mane powder, dash of ginger.' },
    { time: '12:30 PM', meal: 'Grilled Salmon with Broccoli & Quinoa', cal: '~520', desc: 'Wild-caught salmon fillet, roasted broccoli florets, quinoa, lemon-garlic EVOO dressing, fresh dill.' },
    { time: '3:30 PM', meal: 'Hummus & Veggie Sticks', cal: '~150', desc: 'Organic hummus with carrot sticks, cucumber slices, and cherry tomatoes.' },
    { time: '6:30 PM', meal: 'Mediterranean Lentil Soup', cal: '~490', desc: 'Red lentils, kale, diced tomatoes, garlic, onion, rosemary, cumin, EVOO. Served with whole grain bread.' },
  ]},
  { day: 'Tuesday', label: 'Sardine & Chicken Day', meals: [
    { time: '7:30 AM', meal: 'Avocado Toast with Microgreens', cal: '~390', desc: 'Whole grain sourdough, mashed avocado, cherry tomatoes, microgreens, EVOO drizzle, hemp seeds. Green tea.' },
    { time: '10:00 AM', meal: 'Mixed Berry Bowl', cal: '~140', desc: 'Blueberries, blackberries, raspberries with a handful of raw almonds.' },
    { time: '12:30 PM', meal: 'Sardine & Arugula Salad', cal: '~510', desc: 'Wild sardines on bed of arugula, cherry tomatoes, Kalamata olives, red onion, capers, lemon-EVOO dressing.' },
    { time: '3:30 PM', meal: 'Turmeric-Ginger Kefir', cal: '~150', desc: 'Lifeway kefir blended with fresh turmeric, ginger, black pepper, dash of honey.' },
    { time: '6:30 PM', meal: 'Herb-Roasted Chicken Thigh', cal: '~510', desc: 'Bone-in chicken thigh with rosemary, thyme, garlic. Sweet potato mash, steamed cauliflower with EVOO.' },
  ]},
  { day: 'Wednesday', label: 'Green Smoothie & Mackerel Day', meals: [
    { time: '7:30 AM', meal: 'Green Power Smoothie', cal: '~370', desc: 'Spinach, banana, blueberries, ground flaxseed, fresh ginger, Lion\'s Mane powder, coconut water.' },
    { time: '10:00 AM', meal: 'Apple & Almond Butter', cal: '~160', desc: 'Sliced organic apple with 2 tbsp raw almond butter.' },
    { time: '12:30 PM', meal: 'Mediterranean Chickpea Bowl', cal: '~530', desc: 'Roasted chickpeas, roasted red peppers, zucchini, red onion, quinoa, tahini-lemon dressing, fresh parsley.' },
    { time: '3:30 PM', meal: 'Celery, Hummus & Olives', cal: '~140', desc: 'Celery sticks with hummus, Castelvetrano olives.' },
    { time: '6:30 PM', meal: 'Baked Mackerel & Brussels Sprouts', cal: '~500', desc: 'Whole baked mackerel with lemon, garlic, herbs. Roasted Brussels sprouts, brown rice with turmeric.' },
  ]},
  { day: 'Thursday', label: 'Overnight Oats & Fish Stew Day', meals: [
    { time: '7:30 AM', meal: 'Overnight Oats', cal: '~380', desc: 'Rolled oats soaked in almond milk with chia seeds, raspberries, cinnamon, date syrup, hemp seeds. Green tea.' },
    { time: '10:00 AM', meal: 'Blackberry Kefir Smoothie', cal: '~160', desc: 'Lifeway kefir, blackberries, 1 tsp Lion\'s Mane powder, pinch of turmeric.' },
    { time: '12:30 PM', meal: 'Turkey Stuffed Bell Peppers', cal: '~520', desc: 'Bell peppers stuffed with ground turkey, quinoa, tomato sauce, garlic, oregano, topped with fresh basil.' },
    { time: '3:30 PM', meal: 'Guacamole & Veggies', cal: '~150', desc: 'Fresh guacamole (avocado, lime, cilantro, tomato) with jicama and bell pepper sticks.' },
    { time: '6:30 PM', meal: 'Mediterranean Fish Stew', cal: '~490', desc: 'Wild cod and halibut in saffron-tomato broth with fennel, garlic, onion, fresh herbs. Crusty whole grain bread.' },
  ]},
  { day: 'Friday', label: 'Frittata & Lamb Stew Day', meals: [
    { time: '7:30 AM', meal: 'Spinach Mushroom Frittata', cal: '~400', desc: 'Eggs with spinach, shiitake mushrooms, onion, garlic, fresh herbs. Side of mixed berries. Green tea.' },
    { time: '10:00 AM', meal: 'Fresh Green Juice + Grass', cal: '~120', desc: 'Kale, celery, cucumber, lemon, ginger juice. 1 tsp wheat/barley grass powder stirred in.' },
    { time: '12:30 PM', meal: 'Salmon Quinoa Power Bowl', cal: '~540', desc: 'Grilled salmon, quinoa, avocado, edamame, pickled ginger, sesame-ginger dressing, nori strips.' },
    { time: '3:30 PM', meal: 'Rosemary Roasted Chickpeas', cal: '~150', desc: 'Crispy oven-roasted chickpeas with rosemary, garlic powder, smoked paprika, EVOO.' },
    { time: '6:30 PM', meal: 'Slow-Cooked Lamb Stew', cal: '~510', desc: 'Lamb shoulder with carrots, parsnips, sweet potato, garlic, rosemary, thyme in bone broth. Whole grain bread.' },
  ]},
  { day: 'Saturday', label: 'Smoothie Bowl & Cod Day', meals: [
    { time: '7:30 AM', meal: 'Berry-Turmeric Smoothie Bowl', cal: '~390', desc: 'Blended açaí, blueberries, banana, turmeric. Topped with hemp seeds, coconut flakes, almonds, chia. Green tea.' },
    { time: '10:00 AM', meal: 'Dates & Kefir', cal: '~160', desc: 'Lifeway kefir with 2-3 Medjool dates and cinnamon.' },
    { time: '12:30 PM', meal: 'Mediterranean Tuna Salad', cal: '~510', desc: 'Wild tuna (EVOO-packed), mixed greens, white beans, artichoke hearts, red onion, capers, lemon-herb dressing.' },
    { time: '3:30 PM', meal: 'Olive Tapenade & Crackers', cal: '~150', desc: 'Kalamata olive tapenade on whole grain seed crackers with fresh tomato.' },
    { time: '6:30 PM', meal: 'Herb-Crusted Baked Cod', cal: '~490', desc: 'Cod with herb-almond crust, roasted asparagus, garlic mashed cauliflower with EVOO and nutritional yeast.' },
  ]},
  { day: 'Sunday', label: 'Hash & Mushroom Risotto Day', meals: [
    { time: '7:30 AM', meal: 'Sweet Potato & Kale Hash', cal: '~410', desc: 'Diced sweet potato, kale, onion, garlic sautéed in EVOO. Topped with 2 poached eggs and avocado slices. Green tea.' },
    { time: '10:00 AM', meal: 'Fresh Beet Juice + Grass', cal: '~130', desc: 'Carrot, beet, apple, ginger juice. 1 tsp wheat/barley grass powder stirred in.' },
    { time: '12:30 PM', meal: 'Chicken Souvlaki Plate', cal: '~530', desc: 'Grilled herb-marinated chicken, tzatziki (Greek yogurt, cucumber, garlic, dill), cucumber-tomato salad, whole wheat pita.' },
    { time: '3:30 PM', meal: 'Trail Mix & Figs', cal: '~150', desc: 'Raw almonds, pecans, pumpkin seeds, dried figs (no added sugar).' },
    { time: '6:30 PM', meal: 'Mushroom & Barley Risotto', cal: '~480', desc: 'Pearl barley risotto with shiitake, maitake, oyster mushrooms, roasted garlic, fresh rosemary, EVOO, nutritional yeast.' },
  ]},
];

export default function NutritionProtocol() {
  return (
    <section id="nutrition" className="section-card">
      <SectionHeader
        icon={<Utensils className="w-5 h-5" />}
        title="Nutrition & Supplement Protocol"
        subtitle="Mediterranean anti-cancer meal plan, supplements, and cannabis protocol"
        color="green"
      />

      {/* ─── NUTRITION GUIDANCE ARTICLE ─── */}
      <C title="The Anti-Cancer Diet: A Complete Guide for Our Family" defaultOpen={true}>
        <div className="space-y-4">
          {/* PET SCAN / SUGAR VISUAL */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="font-bold text-red-900 mb-2">Why Sugar Feeds Tumors — The PET Scan Proof</p>
            <p className="text-gray-700 mb-2">
              When doctors need to find tumors in the body, they inject a radioactive <strong>sugar solution</strong> (fluorodeoxyglucose / FDG) 
              and watch where it goes on a PET scan. <strong>Tumors light up because they consume glucose at 
              up to 200x the rate of normal cells.</strong> This is called the <strong>Warburg Effect</strong> — 
              cancer cells are addicted to sugar for energy.
            </p>
            <p className="text-gray-700 mb-2">
              The fact that doctors literally use dyed sugar to find cancer tells you everything you need 
              to know about sugar and tumors. Every gram of refined sugar in the diet is potential fuel 
              for tumor growth.
            </p>
            <p className="text-[10px] text-red-600">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/15297418/" target="_blank" rel="noopener noreferrer" className="underline">Warburg Effect in cancer metabolism (PMID: 15297418)</a> · <a href="https://pubmed.ncbi.nlm.nih.gov/22972295/" target="_blank" rel="noopener noreferrer" className="underline">FDG-PET and tumor glucose metabolism (PMID: 22972295)</a></p>
          </div>

          {/* GLUCOSE vs FRUCTOSE vs SUCROSE */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="font-bold text-amber-900 mb-2">Glucose vs. Fructose vs. Sucrose — Are They All Bad?</p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Glucose:</strong> The primary fuel for most cancer cells. Tumors have upregulated glucose 
              transporters (GLUT1) that suck it in. Refined glucose (white sugar, bread, pasta, white rice) 
              causes rapid blood sugar spikes that directly feed tumors. <strong>Minimize aggressively.</strong></p>
              <p><strong>Fructose:</strong> Processed differently than glucose — metabolized primarily in the liver. 
              Research shows fructose may actually be <em>worse</em> than glucose for some cancers: it promotes 
              pancreatic cancer cell proliferation, drives de novo lipogenesis (fat creation that tumors use for 
              membranes), and activates cancer-promoting pathways. High-fructose corn syrup is particularly harmful. 
              <strong>Avoid all added fructose</strong> (HFCS, agave syrup, fruit juice concentrates).</p>
              <p><strong>Sucrose (table sugar):</strong> Is 50% glucose + 50% fructose — the worst of both worlds. 
              Provides glucose directly to tumors AND fructose for liver-mediated cancer promotion. <strong>Eliminate entirely.</strong></p>
              <p><strong>Bottom line:</strong> All refined sugars feed cancer through different but complementary mechanisms. 
              The only acceptable sweet sources are <strong>whole fruits</strong> (fiber slows absorption), small amounts 
              of raw honey, and date syrup — and even these should be moderate.</p>
            </div>
            <p className="text-[10px] text-amber-600 mt-2">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/20660076/" target="_blank" rel="noopener noreferrer" className="underline">Fructose and pancreatic cancer (PMID: 20660076)</a> · <a href="https://pubmed.ncbi.nlm.nih.gov/29330843/" target="_blank" rel="noopener noreferrer" className="underline">Sugar and cancer: updated review (PMID: 29330843)</a></p>
          </div>

          {/* SPIRIT OF THE MEDITERRANEAN DIET */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="font-bold text-emerald-900 mb-2">The Spirit of the Mediterranean Diet</p>
            <p className="text-gray-700 mb-2">
              The Mediterranean diet isn't a rigid rulebook — it's a <strong>philosophy of eating</strong>. 
              It comes from cultures where people cooked with fresh, local ingredients, ate together as families, 
              and prioritized whole foods over processed ones. For anti-cancer purposes, we're taking this 
              philosophy and optimizing it with modern research.
            </p>
            <p className="text-gray-700 mb-2"><strong>The core principles:</strong></p>
            <ul className="space-y-1 text-gray-700 mb-2">
              <li>• <strong>Abundance:</strong> Vegetables, leafy greens, herbs, garlic, onions, olive oil — eat as much as you want</li>
              <li>• <strong>Daily:</strong> Berries, nuts (no walnuts — allergy), legumes, whole grains, fermented foods</li>
              <li>• <strong>Several times/week:</strong> Fatty fish (salmon, sardines, mackerel), eggs, poultry</li>
              <li>• <strong>Sparingly:</strong> Red meat (1-2x/month max), natural sweeteners</li>
              <li>• <strong>Never:</strong> Refined sugar, processed foods, fast food, soda, HFCS, trans fats</li>
            </ul>
            <p className="text-gray-700">
              The emphasis is on <strong>anti-inflammatory, antioxidant-rich, nutrient-dense whole foods</strong> — 
              with extra virgin olive oil as the primary fat. Every meal should be colorful, fresh, and 
              made from real ingredients you can name.
            </p>
          </div>

          {/* IS FRUIT OK? */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-900 mb-2">Is Fruit OK? Yes — With Guidance</p>
            <p className="text-gray-700 mb-2">
              <strong>Whole fruits are not the enemy.</strong> Despite containing natural sugars, whole fruits 
              come packaged with fiber, water, vitamins, minerals, and powerful anti-cancer phytochemicals 
              (anthocyanins, ellagic acid, quercetin) that actually <em>fight</em> cancer. The fiber slows 
              sugar absorption dramatically — a cup of blueberries does not spike blood sugar like a 
              tablespoon of white sugar.
            </p>
            <p className="font-bold text-blue-800 mb-1">Best fruits (high anti-cancer, low glycemic):</p>
            <ul className="space-y-0.5 text-gray-700 mb-2">
              <li>• <strong>Berries</strong> — blueberries, blackberries, raspberries (among the most powerful anti-cancer foods known)</li>
              <li>• <strong>Citrus</strong> — lemons, limes, oranges (vitamin C, limonene)</li>
              <li>• <strong>Avocado</strong> — technically a fruit, loaded with healthy fats</li>
              <li>• <strong>Apples</strong> — quercetin in skin, good fiber</li>
              <li>• <strong>Pomegranate</strong> — potent antioxidant, anti-tumor punicalagins</li>
            </ul>
            <p className="font-bold text-amber-800 mb-1">Limit these (higher sugar):</p>
            <ul className="space-y-0.5 text-gray-700 mb-2">
              <li>• Grapes, bananas, mangoes, pineapple — eat small portions, not large bowls</li>
              <li>• Dried fruits — concentrated sugar, eat only a few (dates, figs are OK in small amounts)</li>
            </ul>
            <p className="font-bold text-red-800 mb-1">Avoid completely:</p>
            <ul className="space-y-0.5 text-gray-700">
              <li>• Fruit juices (no fiber = pure sugar hit), smoothies with added sugar, canned fruit in syrup</li>
              <li>• <strong>Cranberries</strong> — Mom is allergic</li>
            </ul>
          </div>

          {/* MEAT GUIDANCE */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p className="font-bold text-orange-900 mb-2">Meat, Fish & Protein — What's Safe?</p>
            <div className="space-y-2 text-gray-700">
              <p><strong className="text-emerald-700">Best proteins (eat freely):</strong> Wild-caught fatty fish 
              (salmon, sardines, mackerel, cod, halibut) — omega-3 rich, anti-inflammatory, brain-supportive. 
              Aim for 3-4 fish meals per week. Also: organic eggs, organic chicken/turkey.</p>

              <p><strong className="text-amber-700">OK sparingly (1-2x/month):</strong> Grass-fed beef, lamb — 
              red meat contains iron and B12 but also heme iron that may promote oxidative stress in excess. 
              Our meal plan includes lamb once per week, which is reasonable. Choose grass-fed/pasture-raised 
              when possible — better omega-3:omega-6 ratio.</p>

              <p><strong className="text-red-700">Avoid or strictly limit:</strong></p>
              <ul className="space-y-0.5">
                <li>• <strong>Processed meats</strong> (bacon, sausage, hot dogs, deli meats) — WHO classifies as Group 1 carcinogen (same category as cigarettes). Nitrates/nitrites form N-nitroso compounds that are directly carcinogenic.</li>
                <li>• <strong>Charred/blackened meat</strong> — HCAs and PAHs from high-heat cooking are carcinogenic. If grilling, use lower heat and marinades (herbs, EVOO, citrus reduce HCA formation by up to 90%).</li>
                <li>• <strong>Factory-farmed pork</strong> — high omega-6, inflammatory. If eating pork at all, choose pasture-raised and very sparingly.</li>
                <li>• <strong>Shellfish</strong> — Mom is allergic (shrimp, crab, lobster, mussels, clams).</li>
              </ul>
            </div>
            <p className="text-[10px] text-orange-600 mt-2">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/26514947/" target="_blank" rel="noopener noreferrer" className="underline">WHO/IARC: processed meat and cancer (PMID: 26514947)</a> · <a href="https://pubmed.ncbi.nlm.nih.gov/15199546/" target="_blank" rel="noopener noreferrer" className="underline">Herb marinades reduce HCA in grilled meat (PMID: 15199546)</a></p>
          </div>

          {/* FATS GUIDANCE */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="font-bold text-green-900 mb-2">Fats — The Good, The Bad, and The Essential</p>
            <div className="space-y-2 text-gray-700">
              <p><strong className="text-emerald-700">Eat generously:</strong> Extra virgin olive oil (EVOO) is 
              the foundation — use it for cooking, dressings, drizzling. Rich in oleocanthal (anti-inflammatory 
              comparable to ibuprofen) and polyphenols. Also: avocado, raw nuts (almonds, pecans), seeds 
              (flax, chia, hemp, pumpkin), fatty fish fat (omega-3).</p>
              <p><strong className="text-amber-700">Use moderately:</strong> Coconut oil (MCTs can support brain 
              energy), butter from grass-fed sources (occasional).</p>
              <p><strong className="text-red-700">Avoid completely:</strong> Trans fats (partially hydrogenated oils), 
              vegetable/seed oils high in omega-6 (soybean, corn, canola, sunflower — these are pro-inflammatory), 
              margarine, deep-fried anything.</p>
            </div>
          </div>

          {/* QUICK REFERENCE CARD */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="font-bold text-gray-900 mb-2">Quick Reference: The Family Fridge Rule</p>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="bg-emerald-100 rounded-lg p-2">
                <p className="font-bold text-emerald-800">EAT FREELY</p>
                <p className="text-emerald-600 mt-1">Vegetables, leafy greens, herbs, garlic, EVOO, berries, fatty fish, eggs, nuts, seeds, legumes, fermented foods, green tea</p>
              </div>
              <div className="bg-amber-100 rounded-lg p-2">
                <p className="font-bold text-amber-800">EAT SPARINGLY</p>
                <p className="text-amber-600 mt-1">Red meat (1-2x/mo), whole grains, starchy veg (sweet potato), natural sweeteners, higher-sugar fruits, butter</p>
              </div>
              <div className="bg-red-100 rounded-lg p-2">
                <p className="font-bold text-red-800">NEVER EAT</p>
                <p className="text-red-600 mt-1">Refined sugar, processed meat, soda, HFCS, trans fats, seed oils, fast food, white bread/pasta, fried food, walnuts/cranberries/shellfish</p>
              </div>
            </div>
          </div>
        </div>
      </C>

      <Divider />

      {/* ─── PATIENT PROFILE ─── */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-5 mb-5">
        <h3 className="text-sm font-bold text-emerald-900 mb-2">Patient Profile</h3>
        <div className="grid grid-cols-2 gap-2 text-[11px] mb-3">
          <div className="bg-white/70 rounded-lg p-2"><strong>Age:</strong> 64</div>
          <div className="bg-white/70 rounded-lg p-2"><strong>Weight:</strong> 180 lbs (82 kg)</div>
          <div className="bg-white/70 rounded-lg p-2"><strong>Daily Calories:</strong> ~1,700 kcal</div>
          <div className="bg-white/70 rounded-lg p-2"><strong>Protein Target:</strong> ~80g/day</div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="w-3 h-3 text-red-600" />
            <p className="text-[11px] font-bold text-red-800">ALLERGIES — AVOID COMPLETELY</p>
          </div>
          <p className="text-[11px] text-red-700"><strong>Walnuts</strong> · <strong>Cranberries</strong> · <strong>Shellfish</strong> (shrimp, crab, lobster, mussels, clams)</p>
        </div>
        <div className="mt-3 text-[11px] text-emerald-700">
          <strong>Diet Focus:</strong> Mediterranean anti-tumor, neuroregenerative. Organic fresh food. No refined sugar, 
          no processed foods, no pro-tumor foods. Vitamins/minerals from real food whenever possible.
        </div>
      </div>

      <Divider />

      {/* ─── SUPPLEMENT REFERENCE ─── */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4">
        <p className="text-xs font-bold text-purple-800 mb-1">Supplements, Drugs & Cannabis Protocol</p>
        <p className="text-[11px] text-purple-700 leading-relaxed">
          The complete supplement dosing schedule (25+ supplements organized by category), anti-tumor drug 
          protocol (12-week plan), organ protection agents, cannabis protocol, bloodwork monitoring, and 
          imaging timeline are all consolidated in the <strong>Drug & Supplement Protocol</strong> section. 
          The <strong>Shopping List</strong> section has buy links for everything.
        </p>
      </div>

      <Divider />

      {/* ─── 7-DAY MEAL PLAN ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">7-Day Meal Plan</h3>
      <p className="text-xs text-gray-500 mb-3">3 meals + 2 snacks daily. ~1,700 calories, ~80g protein. Tap any day to expand.</p>

      {DAYS.map((d) => <DayPlan key={d.day} {...d} />)}

      <Divider />

      {/* ─── SHOPPING LIST ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Weekly Shopping List (3 People)</h3>
      <p className="text-xs text-gray-500 mb-3">All quantities scaled for 3 people for 1 week. Organic/fresh preferred.</p>

      <C title="Proteins (Fish, Poultry, Meat, Eggs)" defaultOpen={false}>
        <ul className="space-y-1">
          <li>• Wild-caught salmon fillets — 2 lbs (4 fillets)</li>
          <li>• Wild sardines (canned in EVOO) — 4 cans</li>
          <li>• Wild mackerel (whole or fillets) — 1.5 lbs</li>
          <li>• Wild cod fillets — 1 lb</li>
          <li>• Wild halibut fillets — 1 lb</li>
          <li>• Wild tuna (canned in EVOO) — 3 cans</li>
          <li>• Bone-in chicken thighs — 3 lbs</li>
          <li>• Boneless chicken breast — 2 lbs (for souvlaki)</li>
          <li>• Ground turkey (lean) — 1.5 lbs</li>
          <li>• Lamb shoulder (stew cut) — 2 lbs</li>
          <li>• Organic eggs — 2 dozen</li>
          <li>• Bone broth (organic) — 2 quarts</li>
        </ul>
      </C>

      <C title="Vegetables & Leafy Greens" defaultOpen={false}>
        <ul className="space-y-1">
          <li>• Broccoli — 2 large heads</li>
          <li>• Kale (curly or lacinato) — 3 bunches</li>
          <li>• Spinach (baby) — 3 large containers (15 oz each)</li>
          <li>• Arugula — 2 containers (5 oz each)</li>
          <li>• Mixed greens — 1 large container</li>
          <li>• Cauliflower — 2 heads</li>
          <li>• Brussels sprouts — 1.5 lbs</li>
          <li>• Asparagus — 2 bunches</li>
          <li>• Sweet potatoes — 6 medium</li>
          <li>• Bell peppers (mixed colors) — 8</li>
          <li>• Zucchini — 4 medium</li>
          <li>• Carrots — 2 lbs</li>
          <li>• Celery — 2 bunches</li>
          <li>• Cucumber — 4 large</li>
          <li>• Cherry tomatoes — 3 pints</li>
          <li>• Roma tomatoes — 8</li>
          <li>• Red onions — 4</li>
          <li>• Yellow onions — 4</li>
          <li>• Garlic — 4 heads (use generously)</li>
          <li>• Fresh ginger root — 1 large piece</li>
          <li>• Fresh turmeric root — 1 piece (or use ground)</li>
          <li>• Fennel bulb — 1</li>
          <li>• Parsnips — 3</li>
          <li>• Jicama — 1 small</li>
          <li>• Beets — 3 medium</li>
          <li>• Microgreens — 1 container</li>
          <li>• Artichoke hearts (jarred in water) — 1 jar</li>
          <li>• Roasted red peppers (jarred) — 1 jar</li>
        </ul>
      </C>

      <C title="Fruits & Berries" defaultOpen={false}>
        <ul className="space-y-1">
          <li>• Blueberries — 3 pints</li>
          <li>• Blackberries — 2 pints</li>
          <li>• Raspberries — 2 pints</li>
          <li>• Bananas — 6</li>
          <li>• Apples (Fuji or Gala) — 6</li>
          <li>• Lemons — 8</li>
          <li>• Limes — 4</li>
          <li>• Avocados — 8 (buy at varying ripeness)</li>
          <li>• Medjool dates — 1 small container</li>
          <li>• Dried figs (no added sugar) — 1 bag</li>
          <li>• Frozen açaí packets — 1 pack (4 packets)</li>
          <li>• <strong>NO CRANBERRIES</strong> (allergy)</li>
        </ul>
      </C>

      <C title="Grains, Legumes & Starches" defaultOpen={false}>
        <ul className="space-y-1">
          <li>• Quinoa — 2 lbs</li>
          <li>• Brown rice — 2 lbs</li>
          <li>• Pearl barley — 1 lb</li>
          <li>• Steel-cut oats — 1 canister</li>
          <li>• Rolled oats (for overnight oats) — 1 canister</li>
          <li>• Whole grain sourdough bread — 2 loaves</li>
          <li>• Whole wheat pita — 1 package</li>
          <li>• Whole grain seed crackers — 1 box</li>
          <li>• Dried red lentils — 1 lb</li>
          <li>• Canned chickpeas — 4 cans (15 oz)</li>
          <li>• Canned white beans (cannellini) — 2 cans</li>
          <li>• Frozen edamame (shelled) — 1 bag</li>
        </ul>
      </C>

      <C title="Healthy Fats, Nuts & Seeds" defaultOpen={false}>
        <ul className="space-y-1">
          <li>• Extra virgin olive oil (high quality) — 1 liter</li>
          <li>• Raw almonds — 1 lb</li>
          <li>• Raw pecans — 8 oz</li>
          <li>• Pumpkin seeds (pepitas) — 8 oz</li>
          <li>• Raw almond butter — 1 jar</li>
          <li>• Tahini — 1 jar</li>
          <li>• Ground flaxseed — 1 bag</li>
          <li>• Chia seeds — 1 bag</li>
          <li>• Hemp seeds (hearts) — 1 bag</li>
          <li>• Unsweetened coconut flakes — 1 small bag</li>
          <li>• <strong>NO WALNUTS</strong> (allergy)</li>
        </ul>
      </C>

      <C title="Dairy & Fermented" defaultOpen={false}>
        <ul className="space-y-1">
          <li>• Lifeway Kefir (plain, 12-strain) — 4 quarts (32 oz each)</li>
          <li>• Greek yogurt (full fat, plain) — 2 containers (32 oz)</li>
          <li>• Almond milk (unsweetened) — 2 cartons</li>
          <li>• Coconut water — 4 bottles</li>
          <li>• Kalamata olives — 1 jar</li>
          <li>• Castelvetrano olives — 1 container</li>
          <li>• Capers — 1 jar</li>
          <li>• Nutritional yeast — 1 container</li>
        </ul>
      </C>

      <C title="Herbs, Spices & Condiments" defaultOpen={false}>
        <ul className="space-y-1">
          <li>• Fresh rosemary — 2 bunches</li>
          <li>• Fresh thyme — 2 bunches</li>
          <li>• Fresh dill — 1 bunch</li>
          <li>• Fresh basil — 2 bunches</li>
          <li>• Fresh parsley (flat-leaf) — 2 bunches</li>
          <li>• Fresh cilantro — 1 bunch</li>
          <li>• Fresh mint — 1 bunch</li>
          <li>• Ground turmeric — 1 jar</li>
          <li>• Ground cumin — 1 jar</li>
          <li>• Smoked paprika — 1 jar</li>
          <li>• Ground cinnamon — 1 jar</li>
          <li>• Black pepper (whole peppercorns + grinder)</li>
          <li>• Sea salt or Himalayan pink salt</li>
          <li>• Dried oregano — 1 jar</li>
          <li>• Saffron threads — 1 small container</li>
          <li>• Sesame seeds — 1 bag</li>
          <li>• Nori sheets — 1 pack</li>
          <li>• Raw honey (local, unprocessed) — 1 jar</li>
          <li>• Date syrup (no sugar added) — 1 bottle</li>
          <li>• Dijon mustard — 1 jar</li>
          <li>• Apple cider vinegar (with mother) — 1 bottle</li>
          <li>• Pickled ginger — 1 jar</li>
        </ul>
      </C>

      <div className="bg-purple-50 border border-purple-100 rounded-xl p-3 mb-3">
        <p className="text-[11px] text-purple-700 font-medium">
          <strong>Supplements & drugs:</strong> Full list with buy links in the <a href="#shopping" className="underline text-purple-600">Shopping List</a> section. 
          Complete dosing schedule in the <a href="#drugprotocol" className="underline text-purple-600">Drug & Supplement Protocol</a> section.
        </p>
      </div>

      <C title="For Fresh Juicing" defaultOpen={false}>
        <ul className="space-y-1">
          <li>• Extra kale — 2 bunches</li>
          <li>• Extra celery — 2 bunches</li>
          <li>• Extra cucumber — 4</li>
          <li>• Extra carrots — 2 lbs</li>
          <li>• Extra beets — 3</li>
          <li>• Extra ginger root — 1 large piece</li>
          <li>• Extra lemons — 6</li>
          <li>• Extra apples — 4 (for juice)</li>
          <li>• A cold-press juicer (if not already owned)</li>
        </ul>
      </C>

      <Divider />

      {/* ─── KEY RECIPES ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">Key Recipes</h3>
      <p className="text-xs text-gray-500 mb-3">Detailed instructions for the chef. All recipes serve 3.</p>

      <C title="Turmeric Golden Oatmeal (Monday Breakfast)" defaultOpen={false}>
        <p className="font-bold mb-1">Ingredients:</p>
        <ul className="space-y-0.5 mb-2">
          <li>• 1½ cups steel-cut oats</li>
          <li>• 3 cups water + 1 cup almond milk</li>
          <li>• 1 tsp ground turmeric</li>
          <li>• ½ tsp cinnamon, pinch black pepper</li>
          <li>• 1 cup fresh blueberries</li>
          <li>• 3 tbsp ground flaxseed</li>
          <li>• Drizzle of raw honey</li>
        </ul>
        <p className="font-bold mb-1">Instructions:</p>
        <p>Bring water and almond milk to boil. Add oats, reduce heat, simmer 20-25 min stirring occasionally. Stir in turmeric, cinnamon, black pepper in last 2 minutes. Serve topped with blueberries, flaxseed, and honey drizzle.</p>
      </C>

      <C title="Grilled Salmon with Broccoli & Quinoa (Monday Lunch)" defaultOpen={false}>
        <p className="font-bold mb-1">Ingredients:</p>
        <ul className="space-y-0.5 mb-2">
          <li>• 3 wild salmon fillets (6 oz each)</li>
          <li>• 2 large heads broccoli, cut into florets</li>
          <li>• 1½ cups quinoa</li>
          <li>• 4 tbsp EVOO</li>
          <li>• 4 cloves garlic, minced</li>
          <li>• 2 lemons (juice + zest)</li>
          <li>• Fresh dill, salt, pepper</li>
        </ul>
        <p className="font-bold mb-1">Instructions:</p>
        <p>Cook quinoa per package (1:2 ratio with water, 15 min). Toss broccoli with 2 tbsp EVOO, salt, pepper. Roast at 425°F for 20 min. Season salmon with salt, pepper, lemon zest. Grill or pan-sear 4-5 min per side. Dressing: whisk 2 tbsp EVOO, lemon juice, minced garlic, salt. Plate quinoa, top with broccoli and salmon. Drizzle dressing, garnish with fresh dill.</p>
      </C>

      <C title="Mediterranean Lentil Soup (Monday Dinner)" defaultOpen={false}>
        <p className="font-bold mb-1">Ingredients:</p>
        <ul className="space-y-0.5 mb-2">
          <li>• 2 cups red lentils, rinsed</li>
          <li>• 1 large bunch kale, stems removed, chopped</li>
          <li>• 1 can (28 oz) diced tomatoes</li>
          <li>• 1 large onion, diced</li>
          <li>• 6 cloves garlic, minced</li>
          <li>• 6 cups vegetable or bone broth</li>
          <li>• 3 tbsp EVOO</li>
          <li>• 2 sprigs fresh rosemary</li>
          <li>• 1 tsp cumin, salt, pepper</li>
        </ul>
        <p className="font-bold mb-1">Instructions:</p>
        <p>Heat EVOO in large pot. Sauté onion 5 min, add garlic 1 min. Add cumin, stir 30 sec. Add lentils, tomatoes, broth, rosemary. Bring to boil, reduce to simmer 20 min. Add kale, cook 5 more min until wilted. Season with salt and pepper. Serve with whole grain bread drizzled with EVOO.</p>
      </C>

      <C title="Mediterranean Fish Stew (Thursday Dinner)" defaultOpen={false}>
        <p className="font-bold mb-1">Ingredients:</p>
        <ul className="space-y-0.5 mb-2">
          <li>• 1 lb wild cod, cubed</li>
          <li>• 1 lb wild halibut, cubed</li>
          <li>• 1 can (28 oz) San Marzano tomatoes</li>
          <li>• 1 fennel bulb, sliced</li>
          <li>• 1 large onion, diced</li>
          <li>• 6 cloves garlic, minced</li>
          <li>• Pinch saffron threads (soaked in 2 tbsp warm water)</li>
          <li>• 3 cups fish or vegetable broth</li>
          <li>• 3 tbsp EVOO, fresh parsley, salt, pepper</li>
        </ul>
        <p className="font-bold mb-1">Instructions:</p>
        <p>Heat EVOO in large Dutch oven. Sauté fennel and onion 5 min. Add garlic 1 min. Add tomatoes (crush by hand), broth, saffron with liquid. Simmer 15 min. Gently add fish cubes, cook 8-10 min until fish flakes easily. Season with salt, pepper. Garnish with fresh parsley. Serve with crusty whole grain bread.</p>
      </C>

      <C title="Mushroom & Barley Risotto (Sunday Dinner)" defaultOpen={false}>
        <p className="font-bold mb-1">Ingredients:</p>
        <ul className="space-y-0.5 mb-2">
          <li>• 1½ cups pearl barley</li>
          <li>• 8 oz shiitake mushrooms, sliced</li>
          <li>• 6 oz maitake mushrooms, torn</li>
          <li>• 6 oz oyster mushrooms, sliced</li>
          <li>• 1 head garlic, roasted (350°F 40 min, squeezed)</li>
          <li>• 5 cups warm vegetable broth</li>
          <li>• 1 large onion, diced fine</li>
          <li>• 4 tbsp EVOO</li>
          <li>• 3 tbsp nutritional yeast</li>
          <li>• Fresh rosemary, salt, pepper</li>
        </ul>
        <p className="font-bold mb-1">Instructions:</p>
        <p>Sauté mushrooms in 2 tbsp EVOO over high heat until golden (5-7 min), set aside. In same pot, add 2 tbsp EVOO, sauté onion 5 min. Add barley, stir 2 min. Add broth 1 cup at a time, stirring frequently, waiting for absorption (total ~35-40 min). In last 5 min, fold in mushrooms, roasted garlic, nutritional yeast. Season with salt, pepper. Garnish with fresh rosemary and a drizzle of EVOO.</p>
      </C>

      <C title="Chicken Souvlaki with Tzatziki (Sunday Lunch)" defaultOpen={false}>
        <p className="font-bold mb-1">Marinade:</p>
        <ul className="space-y-0.5 mb-2">
          <li>• 2 lbs chicken breast, cubed</li>
          <li>• 4 tbsp EVOO, juice of 2 lemons</li>
          <li>• 4 cloves garlic, minced</li>
          <li>• 2 tsp dried oregano, 1 tsp cumin, salt, pepper</li>
          <li>• Marinate 2+ hours or overnight</li>
        </ul>
        <p className="font-bold mb-1">Tzatziki:</p>
        <ul className="space-y-0.5 mb-2">
          <li>• 1 cup Greek yogurt</li>
          <li>• 1 cucumber, grated and squeezed dry</li>
          <li>• 2 cloves garlic, minced</li>
          <li>• 1 tbsp EVOO, juice of 1 lemon, fresh dill, salt</li>
        </ul>
        <p className="font-bold mb-1">Instructions:</p>
        <p>Thread chicken onto skewers. Grill or broil 4-5 min per side until cooked through. Make tzatziki by combining all ingredients. Serve with warmed whole wheat pita, cucumber-tomato-red onion salad dressed with EVOO and lemon.</p>
      </C>

      <C title="Kefir Berry Smoothie (Template — use all week)" defaultOpen={false}>
        <p className="font-bold mb-1">Ingredients (per serving):</p>
        <ul className="space-y-0.5 mb-2">
          <li>• 8 oz Lifeway plain kefir</li>
          <li>• ¾ cup mixed berries (vary: raspberries, blackberries, blueberries)</li>
          <li>• 1 tsp Lion's Mane powder (or Host Defense)</li>
          <li>• ½ tsp fresh grated ginger (optional)</li>
          <li>• Pinch of turmeric + black pepper (optional)</li>
        </ul>
        <p className="font-bold mb-1">Instructions:</p>
        <p>Blend all ingredients until smooth. Serve immediately. This is the base morning snack — vary the berries each day for phytonutrient diversity.</p>
      </C>

      <C title="Fresh Anti-Cancer Juice (Template — use on juice days)" defaultOpen={false}>
        <p className="font-bold mb-1">Green Juice (Friday AM):</p>
        <ul className="space-y-0.5 mb-2">
          <li>• 4 large kale leaves</li>
          <li>• 4 celery stalks</li>
          <li>• 1 cucumber</li>
          <li>• 1 lemon (peeled)</li>
          <li>• 1 inch fresh ginger</li>
          <li>• 1 tsp wheat/barley grass powder (stir in after)</li>
        </ul>
        <p className="font-bold mb-1">Beet Juice (Sunday AM):</p>
        <ul className="space-y-0.5 mb-2">
          <li>• 2 medium beets</li>
          <li>• 3 large carrots</li>
          <li>• 1 apple</li>
          <li>• 1 inch fresh ginger</li>
          <li>• 1 tsp wheat/barley grass powder (stir in after)</li>
        </ul>
        <p>Run all ingredients through cold-press juicer. Stir in grass powder. Drink immediately for maximum nutrient content.</p>
      </C>

      <Divider />

      {/* ─── SCIENCE ─── */}
      <h3 className="text-sm font-bold text-gray-900 mb-3">The Science Behind This Protocol</h3>

      <C title="Why Mediterranean Diet for Brain Cancer" defaultOpen={false}>
        <p className="mb-2">The Mediterranean diet is the most extensively studied dietary pattern for cancer prevention and outcomes. Key mechanisms:</p>
        <ul className="space-y-1 mb-3">
          <li>• <strong>Anti-inflammatory:</strong> EVOO polyphenols, omega-3 fatty acids, and phytonutrients reduce chronic inflammation — a key driver of tumor growth</li>
          <li>• <strong>Anti-angiogenic:</strong> Compounds in berries, green tea, turmeric, and cruciferous vegetables inhibit new blood vessel formation that tumors need</li>
          <li>• <strong>Immune-supportive:</strong> High-fiber, probiotic-rich foods support gut microbiome diversity, which directly influences anti-tumor immunity</li>
          <li>• <strong>Low glycemic:</strong> No refined sugar starves cancer cells of their preferred fuel (Warburg effect)</li>
        </ul>
        <StudyCard title="Mediterranean diet and cancer risk — meta-analysis" description="Systematic review showing Mediterranean diet adherence reduces cancer mortality." url="https://pubmed.ncbi.nlm.nih.gov/20810976/" type="study" />
        <StudyCard title="Sulforaphane (broccoli) inhibits glioblastoma cell growth" description="Crosses blood-brain barrier, enhances temozolomide sensitivity." url="https://pubmed.ncbi.nlm.nih.gov/22877795/" type="study" />
        <StudyCard title="Omega-3 DHA and neuroregeneration after brain injury" description="DHA supplementation improves neurological outcomes, supports membrane repair." url="https://pubmed.ncbi.nlm.nih.gov/24505395/" type="study" />
      </C>

      <C title="Why These Specific Supplements" defaultOpen={false}>
        <p className="mb-2"><strong>Lion's Mane / Host Defense MyCommunity:</strong> Stimulates NGF and BDNF for neuroregeneration. Beta-glucans enhance anti-tumor immunity. Paul Stamets' Host Defense contains 17 mushroom species including Lion's Mane, Turkey Tail, Reishi, Maitake, and Chaga — all with documented anti-cancer and immune-modulating properties.</p>
        <StudyCard title="Neurotrophic properties of Lion's Mane — NGF stimulation" description="Hericenones and erinacines promote nerve growth factor synthesis." url="https://pubmed.ncbi.nlm.nih.gov/24266378/" type="study" />

        <p className="mb-2 mt-3"><strong>Curcumin 2,000 mg/day (nano or with BioPerine):</strong> Crosses the blood-brain barrier. Anti-inflammatory, anti-cancer. Inhibits GBM cell growth and enhances chemo sensitivity. Nano-curcumin or piperine increases absorption 2,000%.</p>
        <StudyCard title="Curcumin effects on glioblastoma" description="Crosses BBB, inhibits GBM cell growth, enhances temozolomide sensitivity." url="https://pubmed.ncbi.nlm.nih.gov/26851267/" type="study" />

        <p className="mb-2 mt-3"><strong>Ashwagandha KSM-66:</strong> Adaptogenic herb with neuroprotective and anti-cancer properties. Withanolides show activity against brain tumor cells. Reduces cortisol and stress.</p>
        <StudyCard title="Ashwagandha — neuroprotective and anti-cancer properties" description="Withanolides show activity against brain tumor cells." url="https://pubmed.ncbi.nlm.nih.gov/21369449/" type="study" />

        <p className="mb-2 mt-3"><strong>Bacopa Monnieri:</strong> Proven neuroprotective effects, enhances BDNF, supports memory and cognition recovery.</p>
        <StudyCard title="Bacopa Monnieri — BDNF enhancement and memory support" url="https://pubmed.ncbi.nlm.nih.gov/24252493/" type="study" />

        <p className="mb-2 mt-3"><strong>Gotu Kola:</strong> Promotes neurogenesis and nerve regeneration. Asiatic acid is neuroprotective after ischemic injury.</p>
        <StudyCard title="Gotu Kola — neurogenesis and nerve repair" url="https://pubmed.ncbi.nlm.nih.gov/25655581/" type="study" />

        <p className="mb-2 mt-3"><strong>Fish Oil (high DHA):</strong> DHA is the primary structural fatty acid in brain tissue. Anti-inflammatory. Supports membrane repair and reduces neuroinflammation.</p>
        <p className="mb-2 mt-3"><strong>Green Tea Extract (EGCG):</strong> Anti-cancer and neuroprotective. Inhibits tumor angiogenesis.</p>
        <StudyCard title="EGCG — anti-cancer and neuroprotective effects" url="https://pubmed.ncbi.nlm.nih.gov/26092246/" type="study" />

        <p className="mb-2 mt-3"><strong>Rosemary Extract:</strong> Carnosic acid is neuroprotective and shows anti-glioblastoma activity.</p>
        <StudyCard title="Rosemary carnosic acid — neuroprotective and anti-GBM" url="https://pubmed.ncbi.nlm.nih.gov/26556085/" type="study" />
      </C>

      <C title="Why Lifeway 12-Strain Kefir (2x Daily)" defaultOpen={false}>
        <p className="mb-2">Gut microbiome composition directly affects cancer treatment outcomes and brain health via the gut-brain axis. Lifeway kefir contains 12 probiotic strains including Lactobacillus and Bifidobacterium species.</p>
        <ul className="space-y-1 mb-3">
          <li>• Patients with diverse gut bacteria respond better to cancer treatment</li>
          <li>• Specific strains enhance anti-tumor immune responses</li>
          <li>• Short-chain fatty acids from gut bacteria cross the blood-brain barrier and support neurons</li>
          <li>• Taken 2x daily (morning + evening) with food for maximum colonization</li>
        </ul>
        <StudyCard title="Gut microbiome modulates cancer immunotherapy response" description="Favorable gut bacteria dramatically improve treatment outcomes." url="https://pubmed.ncbi.nlm.nih.gov/29097494/" type="study" />
        <StudyCard title="Lactobacillus regulates brain GABA receptors via vagus nerve" description="Gut bacteria directly affect brain chemistry." url="https://pubmed.ncbi.nlm.nih.gov/21876150/" type="study" />
      </C>

      <C title="Why Cannabis (THC:CBD:CBG + CBN)" defaultOpen={false}>
        <p className="mb-2"><strong>Daytime (THC:CBD:CBG):</strong> Anti-tumor, anti-inflammatory, neuroprotective. CBG shows particular promise against glioblastoma. The 1:1:1 ratio provides balanced effects with manageable psychoactivity.</p>
        <p className="mb-2"><strong>Nighttime (THC:CBD:CBN):</strong> CBN is a mild sedative cannabinoid that promotes sleep onset and maintenance. Combined with THC and CBD, it helps regulate the circadian rhythm — critical for immune function and cancer recovery.</p>
        <StudyCard title="THC:CBD pilot trial for recurrent glioblastoma" description="83% vs 53% one-year survival when adding THC:CBD to temozolomide." findings="Median survival 550 days vs 369 days in the placebo group." url="https://pubmed.ncbi.nlm.nih.gov/33507244/" type="trial" />
        <StudyCard title="CBD promotes hippocampal neurogenesis" description="CBD stimulates new neuron growth via CB1 and 5-HT1A receptors." url="https://pubmed.ncbi.nlm.nih.gov/20804782/" type="study" />
      </C>

      <C title="Why No Refined Sugar + Foods to Avoid" defaultOpen={false}>
        <p className="mb-2">Cancer cells consume glucose at rates up to 200x higher than normal cells (the Warburg effect). Minimizing refined sugar reduces excess glucose available to tumor cells.</p>
        <ul className="space-y-1 mb-3">
          <li>• All natural sweetness comes from whole fruits, dates, and small amounts of raw honey</li>
          <li>• Complex carbs (quinoa, barley, oats) provide steady glucose without spikes</li>
          <li>• High fiber slows glucose absorption</li>
        </ul>
        <p className="font-bold mb-1 text-red-800">Foods to Avoid / Reduce:</p>
        <ul className="space-y-1 text-red-700">
          <li>• <strong>Refined sugar / high-glycemic foods</strong> — feeds tumor metabolism (Warburg effect)</li>
          <li>• <strong>Processed meats</strong> — WHO Group 1 carcinogen, increased cancer risk</li>
          <li>• <strong>Excessive alcohol</strong> — known carcinogen and neurotoxin, impairs brain recovery</li>
          <li>• <strong>Trans fats / ultra-processed foods</strong> — pro-inflammatory, worse cancer outcomes</li>
          <li>• <strong>Excessive red meat</strong> — associated with increased risk of certain cancers</li>
          <li>• <strong>Sodas, pastries, white flour</strong> — glucose spikes with no nutritional value</li>
        </ul>
      </C>

      <div className="text-center text-[10px] text-gray-400 mt-4">
        Meal plan designed for a 64-year-old, 180-lb female on anti-cancer Mediterranean protocol<br/>
        All supplement dosages based on published research — consult physician before starting<br/>
        Allergies excluded: walnuts, cranberries, shellfish
      </div>
      <BackToNav />
    </section>
  );
}
