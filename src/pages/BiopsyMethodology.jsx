import React, { useState, useEffect } from 'react';
import {
  Heart, ChevronUp, ArrowLeft, Microscope, FlaskConical, Brain, Shield,
  AlertTriangle, CheckCircle, XCircle, Clock, BookOpen, Beaker, ExternalLink,
  FileText, Activity, Search, Bug, Syringe, TestTube, ChevronDown, ChevronRight
} from 'lucide-react';
import XEmbed from '../components/XEmbed';

/* ───── Reusable Components ───── */

function ImageCard({ src, alt, caption }) {
  return (
    <div className="rounded-xl overflow-hidden mb-5 shadow-sm border border-gray-100">
      <img src={src} alt={alt} className="w-full h-44 object-cover" loading="lazy" />
      {caption && (
        <div className="px-4 py-2.5 bg-gradient-to-r from-gray-50 to-slate-50">
          <p className="text-[11px] text-gray-600 leading-relaxed">{caption}</p>
        </div>
      )}
    </div>
  );
}

function SC({ id, children }) {
  return <section id={id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5">{children}</section>;
}

function ST({ icon, title, subtitle, color = 'from-primary-500 to-primary-700' }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white flex-shrink-0`}>{icon}</div>
        <div>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

function IB({ title, children, v = 'info' }) {
  const vs = { info: 'bg-blue-50 border-blue-200 text-blue-800', warning: 'bg-amber-50 border-amber-200 text-amber-800', danger: 'bg-red-50 border-red-200 text-red-800', success: 'bg-emerald-50 border-emerald-200 text-emerald-800', purple: 'bg-purple-50 border-purple-200 text-purple-800' };
  return <div className={`${vs[v]} border rounded-xl p-4 mb-4`}>{title && <p className="font-bold text-sm mb-1">{title}</p>}<div className="text-xs leading-relaxed">{children}</div></div>;
}

function Study({ title, desc, url, findings, pmid }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 mb-3 group">
      <div className="flex items-start gap-3">
        <Beaker className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-800 group-hover:text-primary-700 leading-snug">{title}</p>
          {desc && <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{desc}</p>}
          {findings && <p className="text-xs text-emerald-700 bg-emerald-50 rounded-lg px-2.5 py-1.5 mt-2 leading-relaxed font-medium">{findings}</p>}
          <div className="flex items-center gap-1.5 mt-2 text-xs text-primary-500 font-medium">
            <ExternalLink className="w-3 h-3" /><span>{pmid ? `PubMed PMID: ${pmid}` : url.substring(0, 50)}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function Acc({ title, icon, children, open: dOpen = false }) {
  const [open, setOpen] = useState(dOpen);
  return (
    <div className="border border-gray-100 rounded-xl mb-3 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
        {icon}<span className="flex-1 text-sm font-bold text-gray-800">{title}</span>
        {open ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
      </button>
      {open && <div className="p-4 border-t border-gray-100">{children}</div>}
    </div>
  );
}

function Num({ n, color }) {
  const c = { blue: 'bg-blue-500', purple: 'bg-purple-500', emerald: 'bg-emerald-500', amber: 'bg-amber-500', red: 'bg-red-500', teal: 'bg-teal-500', indigo: 'bg-indigo-500' };
  return <div className={`w-6 h-6 rounded-full ${c[color]||c.blue} text-white flex items-center justify-center text-xs font-bold`}>{n}</div>;
}

function Divider() { return <div className="border-t border-gray-100 my-5" />; }

/* ───── Table of Contents ───── */
function TOC() {
  const items = [
    { id: 'status', e: '🚨', l: 'Current Status' }, { id: 'procedure', e: '🔬', l: 'The Procedure' },
    { id: 'sample', e: '🧫', l: 'Sample Processing' }, { id: 'staircase', e: '🔍', l: 'Diagnostic Staircase' },
    { id: 'diagnoses', e: '📋', l: 'All Diagnoses' }, { id: 'parasites', e: '🐛', l: 'Parasite vs. Tumor' },
    { id: 'scenarios', e: '🎯', l: 'If It\'s X, Then What?' },
    { id: 'diagnostics', e: '⚖️', l: 'Can We Trust Diagnostics?' },
    { id: 'pcr', e: '🧬', l: 'PCR: The Full Truth' }, { id: 'integration', e: '🧩', l: 'How Tests Integrate' },
    { id: 'timeline', e: '⏱️', l: 'Results Timeline' }, { id: 'questions', e: '❓', l: 'Questions for Doctors' },
    { id: 'references', e: '📚', l: 'References' },
  ];
  const go = (id) => { const el = document.getElementById(id); if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 20, behavior: 'smooth' }); } };
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5">
      <h3 className="text-sm font-bold text-gray-900 mb-3">Table of Contents</h3>
      <div className="grid grid-cols-2 gap-2">
        {items.map(i => <button key={i.id} onClick={() => go(i.id)} className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 hover:bg-primary-50 hover:text-primary-700 transition-all text-gray-600 text-left"><span className="text-base">{i.e}</span><span className="text-[11px] font-semibold leading-tight">{i.l}</span></button>)}
      </div>
    </div>
  );
}

/* ════════════════════════ MAIN PAGE ════════════════════════ */
export default function BiopsyMethodology() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); const fn = () => setShowTop(window.scrollY > 600); window.addEventListener('scroll', fn, { passive: true }); return () => window.removeEventListener('scroll', fn); }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-3 max-w-2xl mx-auto">
          <a href="./" onClick={e => { e.preventDefault(); window.location.hash = ''; window.location.reload(); }} className="flex items-center gap-2 text-primary-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4" /><span className="text-sm font-semibold">Back to Main</span>
          </a>
          <div className="flex items-center gap-2"><Microscope className="w-4 h-4 text-primary-600" /><span className="text-sm font-bold text-gray-900 hidden sm:inline">Biopsy Methodology</span></div>
        </div>
      </header>

      <main className="pt-16 pb-20 px-4 max-w-2xl mx-auto">
        {/* Hero */}
        <div className="mt-4 mb-6">
          <div className="bg-gradient-to-br from-indigo-600 via-primary-700 to-purple-800 rounded-2xl p-6 text-white shadow-xl shadow-primary-200/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"><Microscope className="w-6 h-6" /></div>
              <div><h1 className="text-xl font-bold">Brain Biopsy Methodology</h1><p className="text-xs text-white/80 font-medium">Understanding Every Step — No Stone Unturned</p></div>
            </div>
            <p className="text-sm text-white/90 leading-relaxed">A comprehensive family resource covering the procedure, laboratory analysis, all possible diagnoses, how parasites and infections are ruled out, an honest assessment of PCR testing, and what every result means.</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Full Methodology','Real Studies Cited','PCR Deep Dive','All Diagnoses'].map(t=><span key={t} className="px-2.5 py-1 rounded-full bg-white/15 text-[10px] font-semibold">{t}</span>)}
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-5">
          <p className="text-xs text-amber-800 leading-relaxed font-medium"><strong>⚠️ Important:</strong> This page is compiled from standard neuropathology textbooks and peer-reviewed literature. It is for family education — not personalized medical advice. All studies are linked to PubMed sources.</p>
        </div>

        <TOC />

        {/* ── STATUS ── */}
        <SC id="status">
          <ST icon={<AlertTriangle className="w-5 h-5" />} title="Current Status: Phase 2" subtitle="Where we are right now" color="from-red-500 to-red-700" />
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center flex-shrink-0"><Activity className="w-4 h-4" /></div>
              <div><p className="text-sm font-bold text-red-900 mb-1">Awaiting Biopsy Results</p><p className="text-xs text-red-800 leading-relaxed">Mom had another seizure → Phase 2 triggered → Biopsy performed → Now waiting. This page explains exactly what the lab is doing with the tissue, what tests are being run, and what every possible outcome means.</p></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-gray-100 rounded-xl p-3 text-center"><p className="text-[10px] text-gray-500 font-medium">Phase 1</p><p className="text-xs font-bold text-gray-400 mt-1">Imaging ✓</p></div>
            <div className="bg-red-100 rounded-xl p-3 text-center ring-2 ring-red-300"><p className="text-[10px] text-red-600 font-medium">Phase 2</p><p className="text-xs font-bold text-red-700 mt-1">Biopsy ⏳</p></div>
            <div className="bg-gray-100 rounded-xl p-3 text-center"><p className="text-[10px] text-gray-500 font-medium">Phase 3</p><p className="text-xs font-bold text-gray-400 mt-1">Treatment</p></div>
          </div>
          <IB v="info" title="Why This Page Matters">We need to understand the methodology so we can ask the right questions, verify the lab ran all appropriate tests (especially for infections/parasites given Mom's off-grid living history), and ensure we're not jumping to conclusions based on incomplete analysis.</IB>
        </SC>

        {/* ── PROCEDURE ── */}
        <SC id="procedure">
          <ST icon={<Syringe className="w-5 h-5" />} title="The Biopsy Procedure" subtitle="Stereotactic needle biopsy — step by step" color="from-blue-500 to-blue-700" />
          <ImageCard src="https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=600&h=300&fit=crop&auto=format&q=80" alt="Operating room" caption="Most brain biopsies are minimally invasive stereotactic procedures performed under image guidance in the OR." />
          <p className="text-xs text-gray-700 leading-relaxed mb-4">The surgeon uses MRI/CT guidance to precisely target the mass, drills a small burr hole (dime-sized) in the skull, inserts a thin needle, and extracts 2–6 tiny tissue samples — each about the size of a grain of rice. Takes 1–2 hours total.</p>

          <h3 className="text-sm font-bold text-gray-900 mb-3">Step-by-Step</h3>
          {[
            { n: '1', t: 'Pre-Op Preparation', c: 'blue', d: 'Head frame or fiducial markers placed for navigation. Pre-op MRI/CT for surgical planning. Pre-op antibiotics and steroids (dexamethasone for edema). Fasting required.' },
            { n: '2', t: 'Anesthesia & Positioning', c: 'blue', d: 'General anesthesia or awake sedation. Head secured in stereotactic frame for millimeter-precision targeting.' },
            { n: '3', t: 'Burr Hole & Needle Insertion', c: 'blue', d: 'Small scalp incision. Dime-sized burr hole drilled. Biopsy needle guided to exact coordinates using real-time imaging navigation.' },
            { n: '4', t: 'Tissue Sampling', c: 'purple', d: '2–6 core samples from different areas of the mass (center, periphery, enhancing rim). Multiple samples increase diagnostic accuracy. Each ~1mm × 10mm.' },
            { n: '5', t: 'Frozen Section (Same-Day)', c: 'amber', d: 'Pathologist receives fresh sample, flash-freezes, slices thin, H&E stains, examines under microscope within 15–20 min. Confirms diagnostic tissue was obtained. PRELIMINARY only — not the final answer.' },
            { n: '6', t: 'Closure & Recovery', c: 'emerald', d: 'Burr hole sealed, scalp sutured. 1–2 nights in hospital. Expect headache, nausea, possible temporary symptom worsening. Steroids continue. Full recovery to baseline in days–weeks.' },
          ].map(s => (
            <div key={s.n} className="mb-3">
              <div className="flex items-center gap-3 mb-1"><Num n={s.n} color={s.c} /><h4 className="text-xs font-bold text-gray-900">{s.t}</h4></div>
              <p className="text-[11px] text-gray-600 leading-relaxed ml-9">{s.d}</p>
            </div>
          ))}

          <IB v="warning" title="Frozen Section Caveat">Frozen section can sometimes mislead. Documented cases exist where toxoplasmosis looked like high-grade glioma on frozen section, but final IHC/PCR proved parasite. Never accept frozen section as the final diagnosis.</IB>

          <Divider />
          <h3 className="text-sm font-bold text-gray-900 mb-3">Procedure Statistics</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { v: '~95%', l: 'Diagnostic accuracy', bg: 'bg-emerald-50', tc: 'text-emerald-700', lc: 'text-emerald-600' },
              { v: '5–15%', l: 'Non-diagnostic rate', bg: 'bg-amber-50', tc: 'text-amber-700', lc: 'text-amber-600' },
              { v: '2–5%', l: 'Serious complications', bg: 'bg-red-50', tc: 'text-red-700', lc: 'text-red-600' },
              { v: '1–3%', l: 'Significant hemorrhage', bg: 'bg-blue-50', tc: 'text-blue-700', lc: 'text-blue-600' },
            ].map(s => <div key={s.v} className={`${s.bg} rounded-xl p-3`}><p className={`text-lg font-bold ${s.tc}`}>{s.v}</p><p className={`text-[10px] ${s.lc} font-medium`}>{s.l}</p></div>)}
          </div>
          <Study title="Diagnostic yield of stereotactic brain biopsy — meta-analysis" desc="Systematic review of 7,514 stereotactic brain biopsies." findings="Diagnostic yield 91%. Non-diagnostic 9%. Morbidity 3.5%, mortality 0.7%." url="https://pubmed.ncbi.nlm.nih.gov/16636849/" pmid="16636849" />
        </SC>

        {/* ── SAMPLE PROCESSING ── */}
        <SC id="sample">
          <ST icon={<TestTube className="w-5 h-5" />} title="What Happens to the Tissue" subtitle="How the sample is divided and processed" color="from-purple-500 to-purple-700" />
          <ImageCard src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=300&fit=crop&auto=format&q=80" alt="Lab equipment" caption="The biopsy sample is immediately divided for different types of analysis — pathology, microbiology, and molecular testing." />
          <IB v="info" title="Critical Step: Sample Division">The moment tissue arrives in the lab, it is split into separate portions. Each analysis requires different preservation. If the lab doesn't set aside fresh tissue for microbiology, you can't go back and grow organisms later.</IB>

          {[
            { t: 'Portion 1: Formalin-Fixed (FFPE)', d: 'Largest portion fixed in formalin, embedded in paraffin. Preserves cell architecture for microscopy. Used for H&E, special stains, IHC, and molecular testing. Primary diagnostic sample.', bg: 'bg-blue-50', bc: 'border-blue-100', tc: 'text-blue-800', dc: 'text-blue-700' },
            { t: 'Portion 2: Fresh/Frozen Tissue', d: 'Snap-frozen at -80°C. Used for molecular/genetic analysis (DNA/RNA extraction), next-gen sequencing. Preserves nucleic acids better than formalin.', bg: 'bg-purple-50', bc: 'border-purple-100', tc: 'text-purple-800', dc: 'text-purple-700' },
            { t: 'Portion 3: Fresh for Microbiology', d: 'THIS IS KEY FOR RULING OUT INFECTIONS. Fresh unfixed tissue to microbiology lab for bacterial, fungal, mycobacterial cultures and PCR testing. Culture takes days–weeks. PCR 24–72 hours.', bg: 'bg-emerald-50', bc: 'border-emerald-100', tc: 'text-emerald-800', dc: 'text-emerald-700' },
            { t: 'Portion 4: Touch Preps / Cytology', d: 'Tissue pressed onto glass slides for rapid cytological assessment. Quick look at cell morphology within minutes, supplements frozen section.', bg: 'bg-amber-50', bc: 'border-amber-100', tc: 'text-amber-800', dc: 'text-amber-700' },
          ].map(p => <div key={p.t} className={`${p.bg} border ${p.bc} rounded-xl p-4 mb-3`}><p className={`text-xs font-bold ${p.tc} mb-1`}>{p.t}</p><p className={`text-[11px] ${p.dc} leading-relaxed`}>{p.d}</p></div>)}

          <IB v="danger" title="🚨 Ask the Team: Was Tissue Sent for Microbiology?">Given Mom's off-grid barn living history, confirm the surgical team sent fresh tissue to microbiology for full culture and PCR workup. If all tissue went only to pathology (formalin-fixed), it's harder to grow organisms. This is the #1 question to ask.</IB>
        </SC>

        {/* ── DIAGNOSTIC STAIRCASE ── */}
        <SC id="staircase">
          <ST icon={<Search className="w-5 h-5" />} title="The Diagnostic Staircase" subtitle="Every test the lab runs, in order, and why" color="from-teal-500 to-teal-700" />
          <ImageCard src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=300&fit=crop&auto=format&q=80" alt="Microscope" caption="The neuropathologist examines tissue through increasingly specific tests — from basic microscopy to molecular genetics." />
          <p className="text-xs text-gray-700 leading-relaxed mb-5">The lab doesn't run just one test. Diagnosis comes from layering multiple independent methods. Each step adds specificity. If Step 1 suggests glioma, Steps 2–5 either confirm it with molecular precision or reveal it's something else entirely.</p>

          {/* Step 1: H&E */}
          <Acc title="Step 1: H&E Staining (Hematoxylin & Eosin)" icon={<Num n="1" color="blue" />} open={true}>
            <p className="text-xs text-gray-700 leading-relaxed mb-3">The foundation of all pathology. Tissue sliced into 4–5 micrometer sections, stained with hematoxylin (nuclei blue/purple) and eosin (cytoplasm pink). The neuropathologist examines under microscope.</p>
            <h4 className="text-xs font-bold text-gray-800 mb-2">What Each Diagnosis Looks Like:</h4>
            <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r-lg mb-2"><p className="text-xs font-bold text-red-800">Glioma / GBM:</p><p className="text-[11px] text-red-700">Atypical glial cells with enlarged irregular nuclei. Increased mitotic figures. Microvascular proliferation. Pseudopalisading necrosis (hallmark of GBM).</p></div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-lg mb-2"><p className="text-xs font-bold text-amber-800">Parasitic Abscess (Toxoplasmosis):</p><p className="text-[11px] text-amber-700">Necrotic center with inflammatory cells. Possible crescent-shaped tachyzoites or round bradyzoite cysts. NO true tumor cells. Granulomatous inflammation.</p></div>
            <div className="bg-purple-50 border-l-4 border-purple-400 p-3 rounded-r-lg mb-2"><p className="text-xs font-bold text-purple-800">Neurocysticercosis (Pork Tapeworm):</p><p className="text-[11px] text-purple-700">Cyst wall with characteristic layered structure. Scolex (worm head) with hooklets — PATHOGNOMONIC (diagnostic by itself). Dense eosinophilic inflammation.</p></div>
            <div className="bg-emerald-50 border-l-4 border-emerald-400 p-3 rounded-r-lg mb-2"><p className="text-xs font-bold text-emerald-800">Fungal Infection:</p><p className="text-[11px] text-emerald-700">Granulomatous inflammation with giant cells. Hyphae or yeast forms may be visible. Different morphology from tumor necrosis.</p></div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg mb-2"><p className="text-xs font-bold text-blue-800">Bacterial Abscess:</p><p className="text-[11px] text-blue-700">Central liquefactive necrosis (pus). Dense neutrophilic infiltration. Surrounding reactive gliosis. Bacteria may require special stains.</p></div>
            <div className="bg-indigo-50 border-l-4 border-indigo-400 p-3 rounded-r-lg mb-2"><p className="text-xs font-bold text-indigo-800">CNS Lymphoma:</p><p className="text-[11px] text-indigo-700">Dense sheets of atypical lymphoid cells. Angiocentric pattern (cells around blood vessels). Can mimic glioma — requires IHC.</p></div>
            <Study title="Diagnostic accuracy of H&E in brain tumor classification" desc="Concordance between H&E-based and final integrated molecular diagnosis." findings="H&E alone correctly classifies brain tumors in 75–85% of cases. The remaining 15–25% require IHC and molecular tests — H&E is the first step but not the last." url="https://pubmed.ncbi.nlm.nih.gov/27157931/" pmid="27157931" />
          </Acc>

          {/* Step 2: Special Stains */}
          <Acc title="Step 2: Special Histochemical Stains" icon={<Num n="2" color="purple" />}>
            <p className="text-xs text-gray-700 leading-relaxed mb-3">If H&E raises suspicion of infection or is ambiguous, special stains target specific organisms.</p>
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-3 mb-2"><p className="text-xs font-bold text-purple-800 mb-1">GMS (Grocott's Methenamine Silver)</p><p className="text-[11px] text-purple-700">Stains fungal cell walls BLACK against green background. Detects Aspergillus, Cryptococcus, Mucor, Histoplasma. Sensitivity &gt;95% for fungal elements.</p></div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-2"><p className="text-xs font-bold text-blue-800 mb-1">PAS (Periodic Acid-Schiff)</p><p className="text-[11px] text-blue-700">Stains carbohydrate-rich structures MAGENTA. Highlights fungal walls, some parasites, glycogen-rich cells. Complements GMS.</p></div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 mb-2"><p className="text-xs font-bold text-amber-800 mb-1">Gram Stain</p><p className="text-[11px] text-amber-700">Differentiates Gram-positive (purple) from Gram-negative (pink) bacteria. Essential for bacterial abscess characterization.</p></div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-3 mb-2"><p className="text-xs font-bold text-red-800 mb-1">Ziehl-Neelsen (Acid-Fast)</p><p className="text-[11px] text-red-700">Stains mycobacteria (TB) RED against blue. Essential if tuberculoma is in the differential.</p></div>
            <div className="bg-teal-50 border border-teal-100 rounded-xl p-3 mb-2"><p className="text-xs font-bold text-teal-800 mb-1">Reticulin Stain</p><p className="text-[11px] text-teal-700">Highlights reticulin fiber network. Helps distinguish gliomas from lymphomas and metastases.</p></div>
            <IB v="success" title="Parasites Often Visible on Basic Stains">Neurocysticercosis is frequently diagnosable on H&E alone — the scolex with hooklets is unmistakable. Toxoplasmosis organisms can be subtle but are identified by experienced neuropathologists.</IB>
          </Acc>

          {/* Step 3: IHC */}
          <Acc title="Step 3: Immunohistochemistry (IHC)" icon={<Num n="3" color="emerald" />}>
            <p className="text-xs text-gray-700 leading-relaxed mb-3">IHC uses antibodies that bind specific proteins. When the antibody binds, a chemical reaction produces visible color (brown). This definitively separates tumor types from infections.</p>
            <ImageCard src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&h=300&fit=crop&auto=format&q=80" alt="Scientist at microscope" caption="IHC uses labeled antibodies to identify specific proteins — making the invisible visible." />

            <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-red-900 mb-2">For Glioma / Brain Tumors:</p>
              <ul className="space-y-1.5 text-[11px] text-red-800">
                <li><strong>GFAP:</strong> Positive = glial origin (astrocytomas, GBM). Confirms cells are glial, not organisms.</li>
                <li><strong>IDH1 R132H:</strong> Positive = IDH-mutant glioma (better prognosis). Single most important prognostic marker.</li>
                <li><strong>ATRX:</strong> Loss = astrocytic lineage.</li>
                <li><strong>Ki-67:</strong> Proliferation index. Higher % = more aggressive. GBM typically &gt;20%.</li>
                <li><strong>p53:</strong> Overexpression in many astrocytomas.</li>
                <li><strong>EMA, Cytokeratins:</strong> Positive = metastatic carcinoma, not primary brain tumor.</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-amber-900 mb-2">For Infections / Parasites:</p>
              <ul className="space-y-1.5 text-[11px] text-amber-800">
                <li><strong>Anti-Toxoplasma gondii IHC:</strong> Specific antibody lights up Toxoplasma organisms. If positive → it's Toxoplasma. Period.</li>
                <li><strong>Anti-CMV, Anti-HSV, Anti-JC virus:</strong> Specific viral IHC markers.</li>
                <li><strong>CD68/CD163 (Macrophage markers):</strong> Dense positivity suggests abscess/infection over tumor.</li>
              </ul>
            </div>
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-indigo-900 mb-2">For CNS Lymphoma:</p>
              <ul className="space-y-1.5 text-[11px] text-indigo-800">
                <li><strong>CD20, CD79a:</strong> B-cell markers — positive = B-cell lymphoma.</li>
                <li><strong>CD3:</strong> T-cell marker.</li>
                <li><strong>MUM1, BCL6:</strong> Activated B-cell markers seen in CNS DLBCL.</li>
              </ul>
            </div>
            <IB v="info" title="How IHC Separates Tumor from Infection">GFAP+, IDH1 R132H+, high Ki-67, infection markers negative → glioma confirmed. GFAP negative, Anti-Toxoplasma IHC positive, heavy CD68+ inflammation → toxoplasmosis confirmed. Independent, objective tests.</IB>
            <Study title="IDH1 R132H immunohistochemistry — validation study" desc="Multicenter validation of the IDH1 R132H antibody." findings="Sensitivity 94%, specificity 100% for detecting IDH1 R132H mutation in 831 gliomas. Now standard of care." url="https://pubmed.ncbi.nlm.nih.gov/19723429/" pmid="19723429" />
            <Study title="Anti-Toxoplasma IHC in brain tissue" desc="Evaluation of IHC for diagnosing cerebral toxoplasmosis." findings="Anti-Toxoplasma IHC: 100% specificity for T. gondii in brain tissue. When organisms present, IHC is definitive." url="https://pubmed.ncbi.nlm.nih.gov/8863417/" pmid="8863417" />
          </Acc>

          {/* Step 4: Molecular */}
          <Acc title="Step 4: Molecular & Genetic Testing" icon={<Num n="4" color="amber" />}>
            <p className="text-xs text-gray-700 leading-relaxed mb-3">DNA/RNA extracted from tissue and analyzed for specific genetic alterations per WHO 2021 Classification of CNS Tumors.</p>
            <div className="space-y-2 mb-3">
              {[
                { t: 'IDH1/IDH2 Mutation (Sequencing)', d: 'IDH-mutant = better prognosis (5–15 yr median vs. 1–2 yr for IDH-wildtype GBM).' },
                { t: '1p/19q Codeletion (FISH or NGS)', d: 'Present = oligodendroglioma (better chemo response). Absent with IDH mutation = astrocytoma.' },
                { t: 'MGMT Promoter Methylation', d: 'Methylated = better response to temozolomide (TMZ). Un-methylated = TMZ less effective. Directly impacts treatment decisions.' },
                { t: 'TERT Promoter Mutation', d: 'Found in GBM and oligodendrogliomas. Helps subclassify.' },
                { t: 'EGFR Amplification', d: 'Common in IDH-wildtype GBM. Potential targeted therapy target.' },
                { t: 'CDKN2A/B Deletion', d: 'Upgrades IDH-mutant astrocytoma to Grade 4 even without necrosis.' },
              ].map(i => <div key={i.t} className="flex items-start gap-2 p-2.5 bg-gray-50 rounded-lg"><FlaskConical className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /><div><p className="text-xs font-bold text-gray-800">{i.t}</p><p className="text-[11px] text-gray-600">{i.d}</p></div></div>)}
            </div>
            <IB v="purple" title="Molecular Data Is Non-Negotiable">WHO 2021 requires molecular data for definitive diagnosis. A diagnosis without IDH testing is incomplete. MGMT status determines whether temozolomide is worth pursuing. Demand these tests.</IB>
            <Study title="WHO 2021 Classification of CNS Tumors" desc="Updated classification mandating molecular testing." findings="Molecular markers now integrated into classification. IDH, 1p/19q, CDKN2A/B are REQUIRED for accurate grading." url="https://pubmed.ncbi.nlm.nih.gov/34185076/" pmid="34185076" />
          </Acc>

          {/* Step 5: Microbiology */}
          <Acc title="Step 5: Microbiology — Cultures & PCR" icon={<Num n="5" color="red" />}>
            <p className="text-xs text-gray-700 leading-relaxed mb-3">Fresh tissue undergoes culture (growing organisms) and PCR (detecting DNA). The most direct way to identify or rule out infections.</p>
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 mb-2"><p className="text-xs font-bold text-emerald-800 mb-1">Bacterial Culture</p><p className="text-[11px] text-emerald-700">Aerobic + anaerobic. Results 2–5 days. Identifies organism + antibiotic sensitivity.</p></div>
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-3 mb-2"><p className="text-xs font-bold text-purple-800 mb-1">Fungal Culture</p><p className="text-[11px] text-purple-700">2–6 weeks (fungi grow slowly). Identifies Aspergillus, Cryptococcus, etc. Essential.</p></div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 mb-2"><p className="text-xs font-bold text-amber-800 mb-1">Mycobacterial (AFB) Culture</p><p className="text-[11px] text-amber-700">4–8 weeks. Gold standard for TB diagnosis. PCR faster but culture confirms.</p></div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-3 mb-2"><p className="text-xs font-bold text-red-800 mb-1">PCR (Polymerase Chain Reaction)</p><p className="text-[11px] text-red-700">Detects specific organism DNA in 24–72 hrs. Run for Toxoplasma, Taenia solium, fungi, mycobacteria, viruses. See full PCR deep-dive below.</p></div>
            <IB v="warning" title="Culture + PCR Together = Best Approach">PCR is fast but can miss organisms (sampling error). Culture is slow but detects living organisms. Serology adds another layer. No single test is sufficient — they cross-validate each other.</IB>
          </Acc>
        </SC>

        {/* ── ALL POSSIBLE DIAGNOSES ── */}
        <SC id="diagnoses">
          <ST icon={<FileText className="w-5 h-5" />} title="All Possible Diagnoses" subtitle="Every single thing a brain mass biopsy can reveal" color="from-indigo-500 to-indigo-700" />

          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-3">
            <div className="flex items-center gap-2 mb-2"><div className="px-2 py-0.5 rounded-full bg-red-500 text-white text-[10px] font-bold">50–70%</div><h4 className="text-sm font-bold text-red-900">Primary Brain Tumors</h4></div>
            <ul className="space-y-1 text-[11px] text-red-800">
              <li><strong>GBM, IDH-wildtype:</strong> Most common. Grade 4. Median survival 14–16 months with standard Tx.</li>
              <li><strong>Astrocytoma, IDH-mutant:</strong> Grades 2–4. Better prognosis.</li>
              <li><strong>Oligodendroglioma:</strong> IDH-mutant, 1p/19q-codeleted. Chemo-sensitive. 10–20 yr median survival Grade 2.</li>
              <li><strong>CNS Lymphoma:</strong> Aggressive but treatable with methotrexate. Often curable. Looks like GBM on imaging.</li>
              <li><strong>Ependymoma, Meningioma, others.</strong></li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-3">
            <div className="flex items-center gap-2 mb-2"><div className="px-2 py-0.5 rounded-full bg-orange-500 text-white text-[10px] font-bold">5–15%</div><h4 className="text-sm font-bold text-orange-900">Metastatic Cancer</h4></div>
            <p className="text-[11px] text-orange-800">Cancer from elsewhere (lung, breast, melanoma, kidney, colon) spread to brain. IHC identifies primary site.</p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-3">
            <div className="flex items-center gap-2 mb-2"><div className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold">5–10%</div><h4 className="text-sm font-bold text-emerald-900">Infectious Causes (Potentially CURABLE)</h4></div>
            <ul className="space-y-1 text-[11px] text-emerald-800">
              <li><strong>Brain abscess (bacterial):</strong> Curable with antibiotics + drainage.</li>
              <li><strong>Fungal infection:</strong> Treatable with antifungals.</li>
              <li><strong>Toxoplasmosis:</strong> Treatable with pyrimethamine + sulfadiazine. Often curable.</li>
              <li><strong>Neurocysticercosis:</strong> Treatable with albendazole/praziquantel + steroids.</li>
              <li><strong>Tuberculoma:</strong> Treatable with anti-TB drugs.</li>
              <li><strong>Viral encephalitis:</strong> HSV, CMV, JC virus. Antivirals available.</li>
            </ul>
            <div className="bg-emerald-100 rounded-lg p-2 mt-2"><p className="text-[11px] text-emerald-900 font-bold">ALL infectious causes are potentially CURABLE. This is why ruling them out is critical.</p></div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-3">
            <div className="flex items-center gap-2 mb-2"><div className="px-2 py-0.5 rounded-full bg-blue-500 text-white text-[10px] font-bold">3–8%</div><h4 className="text-sm font-bold text-blue-900">Inflammatory / Autoimmune</h4></div>
            <ul className="space-y-1 text-[11px] text-blue-800">
              <li><strong>Tumefactive demyelination (MS variant):</strong> Looks exactly like tumor on MRI. Treated with steroids. Not cancer.</li>
              <li><strong>Neurosarcoidosis:</strong> Treatable with steroids.</li>
              <li><strong>Autoimmune encephalitis, Vasculitis.</strong></li>
            </ul>
          </div>

          <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 mb-3">
            <div className="flex items-center gap-2 mb-2"><div className="px-2 py-0.5 rounded-full bg-gray-500 text-white text-[10px] font-bold">2–5%</div><h4 className="text-sm font-bold text-gray-800">Other / Nondiagnostic</h4></div>
            <ul className="space-y-1 text-[11px] text-gray-700">
              <li><strong>Radiation necrosis, infarct/hemorrhage, benign cyst.</strong></li>
              <li><strong>Nondiagnostic (5–15%):</strong> Scar, necrosis only, insufficient sample. May need repeat biopsy.</li>
            </ul>
          </div>
        </SC>

        {/* ── PARASITE DEEP DIVE ── */}
        <SC id="parasites">
          <ST icon={<Bug className="w-5 h-5" />} title="Deep Dive: Parasite vs. Tumor" subtitle="How they're distinguished — and documented misdiagnoses" color="from-amber-500 to-amber-700" />
          <ImageCard src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=300&fit=crop&auto=format&q=80" alt="Scientific analysis" caption="Distinguishing parasitic brain lesions from tumors requires layering multiple methods — no single test is sufficient." />
          <IB v="warning" title="Why This Section Exists">Given Mom's off-grid barn living, we must ensure a complete infectious disease workup. On MRI alone, a parasitic brain abscess can look IDENTICAL to glioblastoma — ring-enhancing, single mass with surrounding edema. The biopsy tells the truth — but only if the right tests are ordered.</IB>

          <h3 className="text-sm font-bold text-gray-900 mb-3">Cerebral Toxoplasmosis</h3>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-amber-900 mb-2">Toxoplasma gondii — cat feces, undercooked meat, contaminated soil/water. ~30% world population carries latent Toxoplasma.</p>
            <p className="text-xs font-bold text-amber-900 mb-1">How biopsy distinguishes from glioma:</p>
            <ul className="space-y-1 text-[11px] text-amber-800">
              <li>• <strong>H&E:</strong> Necrotic center with crescent tachyzoites or round bradyzoite cysts. No true tumor cells.</li>
              <li>• <strong>IHC:</strong> Anti-Toxoplasma antibody POSITIVE. GFAP negative on organisms.</li>
              <li>• <strong>PCR:</strong> T. gondii DNA detected (sensitivity 50–98% depending on burden).</li>
              <li>• <strong>Serology:</strong> Blood Toxo IgG/IgM (high IgG + low IgM = chronic/reactivation).</li>
              <li>• <strong>Treatment test:</strong> If anti-Toxo therapy shrinks lesion on follow-up MRI → confirms.</li>
            </ul>
          </div>
          <Study title="Cerebral toxoplasmosis mimicking brain tumor — case series" desc="Cases initially misdiagnosed as glioma, corrected by biopsy." findings="Multiple cases in immunocompetent patients. Biopsy with IHC/PCR provided definitive diagnosis. All improved with anti-parasitic treatment." url="https://pubmed.ncbi.nlm.nih.gov/23095839/" pmid="23095839" />

          <h3 className="text-sm font-bold text-gray-900 mb-3 mt-5">Neurocysticercosis (Pork Tapeworm)</h3>
          <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-purple-900 mb-2">Taenia solium larval cysts. Most common parasitic CNS infection worldwide. Contracted from tapeworm eggs (contaminated water/food/fecal-oral).</p>
            <ul className="space-y-1 text-[11px] text-purple-800">
              <li>• <strong>H&E:</strong> Cyst wall with tegument layers. Scolex with hooklets = PATHOGNOMONIC.</li>
              <li>• <strong>PCR:</strong> T. solium DNA on tissue/CSF.</li>
              <li>• <strong>Serology:</strong> EITB assay (CDC reference) — sensitivity 94%, specificity 100%.</li>
              <li>• <strong>Imaging clue:</strong> "Hole-with-dot" sign (scolex inside cyst).</li>
            </ul>
          </div>
          <Study title="Neurocysticercosis mimicking brain neoplasm — systematic review" desc="38 cases where cysticercosis was initially misdiagnosed as brain tumor." findings="26% occurred in non-endemic countries including the US. All improved with medical treatment instead of tumor therapy." url="https://pubmed.ncbi.nlm.nih.gov/28686227/" pmid="28686227" />

          <h3 className="text-sm font-bold text-gray-900 mb-3 mt-5">Fungal Brain Infections</h3>
          <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-teal-900 mb-2">Aspergillus, Cryptococcus, Mucor, Histoplasma, Coccidioides. Environmental fungi in soil, decaying matter, bird/bat droppings. Off-grid barn = increased exposure.</p>
            <ul className="space-y-1 text-[11px] text-teal-800">
              <li>• <strong>GMS stain:</strong> Fungal walls BLACK. Morphology identifies species.</li>
              <li>• <strong>Culture:</strong> Gold standard. 2–6 weeks. Identifies species + antifungal sensitivity.</li>
              <li>• <strong>PCR:</strong> Panfungal or species-specific. Faster than culture.</li>
              <li>• <strong>Serology:</strong> Cryptococcal antigen, Histoplasma antigen, Coccidioides antibodies.</li>
            </ul>
          </div>

          <Divider />
          <h3 className="text-sm font-bold text-gray-900 mb-3">Documented Misdiagnosis Rates</h3>
          <IB v="danger" title="How Often Are Parasites Misdiagnosed as Glioma?">
            <ul className="space-y-1">
              <li>• Neurocysticercosis misdiagnosed as tumor: ~26% of systematic review cases in non-endemic countries</li>
              <li>• Toxoplasmosis mimicking GBM: multiple case reports in immunocompetent patients</li>
              <li>• One CDC case: dwarf tapeworm cells misdiagnosed as human tumor in immunocompromised patient</li>
              <li>• Chronic neurocysticercosis inflammation may raise glioma risk (OR ~7, debated)</li>
            </ul>
          </IB>
          <Study title="Toxoplasma gondii and brain tumor risk — meta-analysis" desc="Association between T. gondii seropositivity and glioma." findings="Seropositivity significantly associated with glioma risk (pooled OR 1.96, 95% CI 1.31–2.93). Association not proven causation — but raises questions." url="https://pubmed.ncbi.nlm.nih.gov/26655265/" pmid="26655265" />
        </SC>

        {/* ══════════════════════════════════════════════════════
            DIAGNOSIS SCENARIOS — IF IT'S X, THEN WHAT?
            ══════════════════════════════════════════════════════ */}
        <SC id="scenarios">
          <ST icon={<Shield className="w-5 h-5" />} title="If It's X, Then What?" subtitle="Every scenario — what proves it, what the treatment is, and what we demand before accepting it" color="from-purple-500 to-purple-700" />

          <IB v="warning" title="Why This Section Exists">
            We are extremely wary of chemo. It has killed friends and family. We will not throw a grenade to kill a fly. Proper diagnosis is absolutely necessary before ANY aggressive treatment. This section lays out exactly what evidence is required to prove each possible diagnosis — and what the treatment would be for each. If the evidence doesn't meet these thresholds, we get a second opinion.
          </IB>

          <Divider />

          {/* ═══════ SCENARIO 1: TOXOPLASMOSIS ═══════ */}
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 mb-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white flex-shrink-0"><Bug className="w-5 h-5" /></div>
              <div><h3 className="text-base font-bold text-amber-900">Scenario 1: Cerebral Toxoplasmosis</h3><p className="text-[11px] text-amber-700">Toxoplasma gondii — treatable and often CURABLE</p></div>
            </div>

            <h4 className="text-xs font-bold text-amber-900 mb-2">What Would PROVE It's Toxoplasmosis:</h4>
            <div className="space-y-2 mb-4">
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">1. Biopsy Histology (H&E)</p>
                <p className="text-[11px] text-gray-700">Necrotic center surrounded by inflammatory cells (lymphocytes, macrophages). Crescent-shaped <strong>tachyzoites</strong> (active form) or round <strong>bradyzoite cysts</strong> (dormant form) visible. NO atypical glial cells, NO mitotic figures, NO microvascular proliferation — i.e., no tumor features.</p>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">2. Immunohistochemistry (IHC)</p>
                <p className="text-[11px] text-gray-700"><strong>Anti-Toxoplasma gondii antibody staining = POSITIVE</strong> — this lights up the organisms directly in the tissue. 100% specific. If this is positive, it IS Toxoplasma. GFAP (glial tumor marker) should be NEGATIVE on the organisms. Ki-67 (proliferation) should be low in the inflammatory tissue.</p>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">3. PCR on Tissue</p>
                <p className="text-[11px] text-gray-700">Toxoplasma gondii DNA detected by targeted PCR. Sensitivity 81–96% on brain tissue. Must be cross-validated with IHC above — PCR alone is not sufficient (per our family standard).</p>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">4. Blood Serology</p>
                <p className="text-[11px] text-gray-700"><strong>Toxo IgG positive + IgM negative/low</strong> = chronic/latent infection that reactivated. IgG positive + IgM positive = recent acute infection. IgG negative + IgM negative = Toxo is unlikely (but not impossible — seronegative toxoplasmosis is rare).</p>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">5. Empiric Treatment Trial (if biopsy is ambiguous)</p>
                <p className="text-[11px] text-gray-700">If biopsy shows inflammation but organisms aren't clearly seen — start empiric anti-Toxo therapy. <strong>If the lesion shrinks on follow-up MRI within 2–4 weeks → diagnosis confirmed.</strong> This is a well-established diagnostic approach, especially in HIV/immunocompromised patients.</p>
              </div>
            </div>

            <h4 className="text-xs font-bold text-amber-900 mb-2">Treatment Protocol for Cerebral Toxoplasmosis:</h4>
            <div className="bg-white rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-900 mb-2">First-Line Treatment (Standard of Care):</p>
              <ul className="space-y-2 text-[11px] text-gray-700">
                <li><strong>Pyrimethamine</strong> — loading dose 200mg, then 50–75mg/day. Anti-parasitic that blocks folate synthesis in the parasite. Given with:</li>
                <li><strong>Sulfadiazine</strong> — 4–6g/day in divided doses. Synergistic with pyrimethamine.</li>
                <li><strong>Leucovorin (folinic acid)</strong> — 10–25mg/day. Protects bone marrow from pyrimethamine toxicity. Essential — do not skip this.</li>
                <li><strong>Duration:</strong> Acute phase treatment for <strong>6 weeks minimum</strong>, then maintenance/suppressive therapy.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-900 mb-2">Alternative if Sulfa-Allergic:</p>
              <ul className="space-y-1.5 text-[11px] text-gray-700">
                <li><strong>Pyrimethamine + Clindamycin</strong> (600mg IV/PO q6h) + Leucovorin</li>
                <li><strong>TMP-SMX (Bactrim)</strong> — sometimes used as alternative or prophylaxis</li>
                <li><strong>Atovaquone</strong> — 1500mg PO BID, for patients intolerant of standard regimen</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-900 mb-2">Supportive Treatment (continues regardless):</p>
              <ul className="space-y-1.5 text-[11px] text-gray-700">
                <li><strong>Dexamethasone (steroids)</strong> — continues to control cerebral edema/swelling. Taper gradually as lesion shrinks.</li>
                <li><strong>Antiepileptics</strong> — continues for seizure control (levetiracetam/Keppra is common).</li>
                <li><strong>Hydration + monitoring</strong> — pyrimethamine + sulfadiazine can be hard on kidneys. Monitor CBC, renal function weekly.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-900 mb-2">Monitoring &amp; Expected Response:</p>
              <ul className="space-y-1.5 text-[11px] text-gray-700">
                <li><strong>Follow-up MRI at 2–3 weeks</strong> — lesion should be visibly shrinking. If no improvement by 2 weeks, reconsider diagnosis.</li>
                <li><strong>Clinical improvement</strong> — should see neurological improvement within 1–2 weeks (less confusion, fewer seizures, better function).</li>
                <li><strong>Full resolution</strong> — most lesions resolve completely in 3–6 months of treatment. Some leave a small scar.</li>
                <li><strong>Maintenance phase</strong> — half-dose pyrimethamine + sulfadiazine continues for at least 6 months after resolution, possibly lifelong in immunocompromised.</li>
              </ul>
            </div>
            <IB v="success" title="Bottom Line: Toxoplasmosis">If the biopsy proves Toxo (IHC positive, organisms visible, PCR positive, serology supporting) — this is <strong>TREATABLE and often CURABLE</strong> with oral medications. No chemo. No radiation. The parasite dies, the lesion shrinks, and with proper maintenance, it doesn't come back. This is the best-case scenario.</IB>

            <Study title="Treatment of toxoplasmic encephalitis — clinical guidelines" desc="IDSA/AAN guidelines for management of cerebral toxoplasmosis." findings="Pyrimethamine + sulfadiazine + leucovorin remains gold standard. 80–90% of patients respond within 2 weeks. Failure to respond prompts rebiopsy or alternative diagnosis." url="https://pubmed.ncbi.nlm.nih.gov/33315109/" pmid="33315109" />
          </div>

          {/* ═══════ SCENARIO 2: NEUROCYSTICERCOSIS ═══════ */}
          <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-5 mb-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white flex-shrink-0"><Bug className="w-5 h-5" /></div>
              <div><h3 className="text-base font-bold text-purple-900">Scenario 2: Neurocysticercosis</h3><p className="text-[11px] text-purple-700">Pork tapeworm (Taenia solium) — treatable with antiparasitics</p></div>
            </div>

            <h4 className="text-xs font-bold text-purple-900 mb-2">What Would PROVE It:</h4>
            <div className="space-y-2 mb-4">
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">1. Biopsy: Scolex with hooklets = PATHOGNOMONIC</p>
                <p className="text-[11px] text-gray-700">The scolex (worm head) with its characteristic hooklets is <strong>100% diagnostic — nothing else looks like this</strong>. Cyst wall with layered tegument structure. Dense eosinophilic inflammatory reaction surrounding the cyst. No tumor cells.</p>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">2. Serology: EITB Assay (CDC Reference Test)</p>
                <p className="text-[11px] text-gray-700">Enzyme-Linked Immunoelectrotransfer Blot — <strong>sensitivity 94%, specificity 100%</strong> (CDC gold standard). Blood or CSF test detecting antibodies against T. solium glycoproteins.</p>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">3. PCR + Imaging Correlation</p>
                <p className="text-[11px] text-gray-700">T. solium DNA on tissue PCR. "Hole-with-dot" sign on MRI (scolex visible inside cyst). Calcified lesions on CT suggest prior cysticercosis even if current lesion is active.</p>
              </div>
            </div>

            <h4 className="text-xs font-bold text-purple-900 mb-2">Treatment Protocol:</h4>
            <div className="bg-white rounded-xl p-4 mb-3">
              <ul className="space-y-2 text-[11px] text-gray-700">
                <li><strong>Albendazole</strong> — 15mg/kg/day (max 800mg/day) for 10–14 days. Kills the larval cyst. Often combined with:</li>
                <li><strong>Praziquantel</strong> — 50mg/kg/day for 10–14 days (sometimes used instead of or with albendazole for large or multiple cysts).</li>
                <li><strong>Dexamethasone</strong> — MUST start steroids BEFORE antiparasitic treatment. When the parasite dies, it triggers massive inflammation that can worsen swelling/seizures. Steroids control this.</li>
                <li><strong>Antiepileptics</strong> — continue for seizure control. May need long-term anticonvulsants even after cyst resolution.</li>
                <li><strong>Monitoring:</strong> MRI at 3–6 months. Cyst should shrink/calcify. Seizures may continue for months after treatment but should improve.</li>
              </ul>
            </div>
            <IB v="success" title="Bottom Line: Neurocysticercosis">Treatable with oral antiparasitic medications + steroids. <strong>No chemo, no radiation.</strong> The cyst dies, calcifies, and the brain heals around it. Seizures may need long-term management but the parasite itself is eliminated.</IB>
          </div>

          {/* ═══════ SCENARIO 3: FUNGAL INFECTION ═══════ */}
          <div className="bg-teal-50 border-2 border-teal-300 rounded-2xl p-5 mb-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white flex-shrink-0"><FlaskConical className="w-5 h-5" /></div>
              <div><h3 className="text-base font-bold text-teal-900">Scenario 3: Fungal Brain Infection</h3><p className="text-[11px] text-teal-700">Aspergillus, Cryptococcus, Histoplasma, etc. — treatable with antifungals</p></div>
            </div>

            <h4 className="text-xs font-bold text-teal-900 mb-2">What Would PROVE It:</h4>
            <div className="space-y-2 mb-4">
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">1. GMS Stain — Fungi Stain BLACK</p>
                <p className="text-[11px] text-gray-700">Grocott's methenamine silver stain highlights fungal cell walls. Different morphologies identify species: <strong>septate branching hyphae = Aspergillus</strong>, narrow budding yeast = Histoplasma, wide-based budding = Blastomyces, mucicarmine-positive capsule = Cryptococcus.</p>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">2. Culture — Gold Standard (but slow: 2–6 weeks)</p>
                <p className="text-[11px] text-gray-700">Identifies exact species + tests antifungal sensitivity. Definitive but takes time.</p>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">3. Serology / Antigen Tests</p>
                <p className="text-[11px] text-gray-700"><strong>Cryptococcal antigen (CrAg)</strong> in blood/CSF — highly sensitive and specific. <strong>Histoplasma urine antigen</strong>. <strong>Coccidioides antibodies</strong>. These can confirm diagnosis even before culture results return.</p>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">4. Panfungal PCR + Species-Specific PCR</p>
                <p className="text-[11px] text-gray-700">Detects fungal DNA in tissue. Faster than culture. Cross-validated with GMS stain and culture.</p>
              </div>
            </div>

            <h4 className="text-xs font-bold text-teal-900 mb-2">Treatment (Depends on Species):</h4>
            <div className="bg-white rounded-xl p-4 mb-3">
              <ul className="space-y-2 text-[11px] text-gray-700">
                <li><strong>Aspergillus:</strong> Voriconazole (first-line) — IV then oral. 6–12+ weeks. May need surgical debridement for large abscesses.</li>
                <li><strong>Cryptococcus:</strong> Amphotericin B + flucytosine (induction, 2 weeks) → fluconazole (consolidation 8 weeks → maintenance 6–12 months).</li>
                <li><strong>Histoplasma:</strong> Amphotericin B (severe) → itraconazole (12+ months maintenance).</li>
                <li><strong>Mucor (Mucormycosis):</strong> Amphotericin B + aggressive surgical debridement. Most serious — high mortality but still treatable.</li>
                <li><strong>Steroids continue</strong> for edema control. Antiepileptics continue.</li>
              </ul>
            </div>
            <IB v="success" title="Bottom Line: Fungal Infection">Treatable with antifungal medications (IV then oral). <strong>No chemo, no radiation.</strong> Some species (Crypto, Histo) have excellent cure rates. Others (Mucor, Aspergillus) are harder but still treatable. Off-grid barn living = higher exposure risk for environmental fungi — this MUST be ruled out.</IB>
          </div>

          {/* ═══════ SCENARIO 4: CNS LYMPHOMA ═══════ */}
          <div className="bg-indigo-50 border-2 border-indigo-300 rounded-2xl p-5 mb-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white flex-shrink-0"><Activity className="w-5 h-5" /></div>
              <div><h3 className="text-base font-bold text-indigo-900">Scenario 4: Primary CNS Lymphoma</h3><p className="text-[11px] text-indigo-700">Aggressive BUT highly treatable — often curable with chemotherapy (different from glioma chemo)</p></div>
            </div>

            <h4 className="text-xs font-bold text-indigo-900 mb-2">What Would PROVE It:</h4>
            <div className="space-y-2 mb-4">
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">1. H&E: Dense lymphoid infiltrate, angiocentric pattern</p>
                <p className="text-[11px] text-gray-700">Sheets of atypical large lymphoid cells clustered around blood vessels. Looks NOTHING like glioma under microscope (different cell type entirely). But can mimic glioma on MRI imaging.</p>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">2. IHC: B-cell markers POSITIVE</p>
                <p className="text-[11px] text-gray-700"><strong>CD20+, CD79a+</strong> = B-cell lymphoma (95% of CNS lymphomas). <strong>GFAP NEGATIVE</strong> (not glial origin — rules out glioma). MUM1+, BCL6+ typical. High Ki-67 (&gt;80%).</p>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-xs font-bold text-gray-900 mb-1">3. Flow Cytometry / Molecular</p>
                <p className="text-[11px] text-gray-700">Clonal B-cell population on flow cytometry. MYD88 L265P mutation present in ~70% of CNS DLBCL — specific molecular confirmation.</p>
              </div>
            </div>

            <h4 className="text-xs font-bold text-indigo-900 mb-2">Treatment (Very Different from Glioma):</h4>
            <div className="bg-white rounded-xl p-4 mb-3">
              <ul className="space-y-2 text-[11px] text-gray-700">
                <li><strong>High-dose Methotrexate (HD-MTX)</strong> — the backbone of CNS lymphoma treatment. NOT the same as temozolomide used for gliomas. Crosses the blood-brain barrier. Given IV in cycles.</li>
                <li><strong>Often combined with</strong> rituximab (anti-CD20 antibody), cytarabine, and/or thiotepa.</li>
                <li><strong>NO surgery needed</strong> — CNS lymphoma responds dramatically to chemo. Surgery makes it worse (unlike glioma where debulking helps).</li>
                <li><strong>Radiation</strong> — historically used but now deferred in favor of chemo-only in younger patients to avoid long-term neurotoxicity. Whole-brain radiation only for refractory disease.</li>
                <li><strong>Steroids</strong> — CNS lymphoma is exquisitely steroid-sensitive. Often shrinks dramatically on dexamethasone alone (but comes back without definitive chemo). NOTE: steroids BEFORE biopsy can make tissue diagnosis impossible (destroys the lymphoma cells). If they gave steroids pre-biopsy, this may complicate diagnosis.</li>
              </ul>
            </div>
            <IB v="info" title="Bottom Line: CNS Lymphoma">This is a cancer that is <strong>often curable with chemotherapy</strong> — very different prognosis from glioma. 5-year survival 50–70% with modern treatment. The chemo is targeted (methotrexate, not temozolomide) and the response is typically dramatic. It is NOT the same treatment as glioma and requires correct diagnosis to get the right protocol.</IB>
          </div>

          {/* ═══════ SCENARIO 5: GLIOMA / GBM ═══════ */}
          <div className="bg-red-50 border-2 border-red-400 rounded-2xl p-5 mb-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white flex-shrink-0"><AlertTriangle className="w-5 h-5" /></div>
              <div><h3 className="text-base font-bold text-red-900">Scenario 5: Glioma / Glioblastoma (GBM)</h3><p className="text-[11px] text-red-700">What would ABSOLUTELY prove it — and when chemo/radiation is warranted</p></div>
            </div>

            <IB v="danger" title="Our Standard: We Require ALL of the Following Before Accepting a Glioma Diagnosis">
              We will not consent to chemo or radiation unless the diagnosis is proven beyond reasonable doubt with multiple independent, objective tests. A single H&E slide is not enough. We require the full molecular workup.
            </IB>

            <h4 className="text-xs font-bold text-red-900 mb-2">What Would ABSOLUTELY Prove It's a Glioma:</h4>
            <div className="space-y-2 mb-4">
              <div className="bg-white rounded-xl p-3 border-l-4 border-red-400">
                <p className="text-xs font-bold text-gray-900 mb-1">1. H&E: Atypical Glial Cells — NOT Inflammation</p>
                <p className="text-[11px] text-gray-700">Cells that are clearly glial in origin with enlarged, irregular, hyperchromatic nuclei. Mitotic figures (cells actively dividing abnormally). For GBM specifically: <strong>microvascular proliferation</strong> (abnormal blood vessel growth) AND/OR <strong>pseudopalisading necrosis</strong> (dead center ringed by tumor cells). These features are DISTINCT from infection/inflammation.</p>
              </div>
              <div className="bg-white rounded-xl p-3 border-l-4 border-red-400">
                <p className="text-xs font-bold text-gray-900 mb-1">2. GFAP Positive on IHC = Glial Origin Confirmed</p>
                <p className="text-[11px] text-gray-700">Glial Fibrillary Acidic Protein staining positive on the atypical cells proves they're glial. This is the marker that says "these abnormal cells come from brain glial tissue" — not parasites, not lymphoma, not metastatic cancer.</p>
              </div>
              <div className="bg-white rounded-xl p-3 border-l-4 border-red-400">
                <p className="text-xs font-bold text-gray-900 mb-1">3. IDH Mutation Status — THE Most Important Molecular Test</p>
                <p className="text-[11px] text-gray-700"><strong>IDH-mutant</strong> (IHC positive for R132H, or sequencing confirms IDH1/2 mutation) = lower-grade behavior, better prognosis (median 5–15 years). <strong>IDH-wildtype</strong> = GBM behavior regardless of how it looks on microscopy. This SINGLE test fundamentally changes prognosis and treatment approach.</p>
              </div>
              <div className="bg-white rounded-xl p-3 border-l-4 border-red-400">
                <p className="text-xs font-bold text-gray-900 mb-1">4. Full Molecular Panel Completed</p>
                <p className="text-[11px] text-gray-700">
                  <strong>MGMT promoter methylation</strong> — predicts temozolomide response. Methylated = TMZ works better. Un-methylated = TMZ less effective (may not be worth the toxicity).<br />
                  <strong>1p/19q codeletion</strong> — if present + IDH mutant = oligodendroglioma (much better prognosis, chemo-sensitive).<br />
                  <strong>TERT promoter mutation</strong> — helps subclassify.<br />
                  <strong>EGFR amplification</strong> — common in GBM, potential targeted therapy.<br />
                  <strong>CDKN2A/B homozygous deletion</strong> — if present, upgrades IDH-mutant astrocytoma to grade 4.
                </p>
              </div>
              <div className="bg-white rounded-xl p-3 border-l-4 border-red-400">
                <p className="text-xs font-bold text-gray-900 mb-1">5. ALL Infection Markers NEGATIVE</p>
                <p className="text-[11px] text-gray-700">Anti-Toxoplasma IHC = NEGATIVE. GMS stain = no fungi. Gram stain = no bacteria. All cultures = no growth. PCR panel for Toxoplasma, Taenia, fungi, TB = all NEGATIVE. Serology = no evidence of active infection. <strong>Only after infections are ruled out do we accept the tumor diagnosis.</strong></p>
              </div>
            </div>

            <h4 className="text-xs font-bold text-red-900 mb-2">When Chemo/Radiation IS Warranted (Standard of Care):</h4>
            <div className="bg-white rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-900 mb-2">GBM, IDH-Wildtype (WHO Grade 4) — The Stupp Protocol:</p>
              <ul className="space-y-2 text-[11px] text-gray-700">
                <li><strong>Maximal safe surgical resection</strong> — remove as much tumor as safely possible. More complete resection = better outcomes. Some tumors can't be fully removed due to location.</li>
                <li><strong>Concurrent chemoradiation:</strong> 60 Gy radiation in 30 fractions (6 weeks) + daily temozolomide (75mg/m²). This is the Stupp protocol — the global standard since 2005.</li>
                <li><strong>Adjuvant temozolomide:</strong> 6 cycles of TMZ (150–200mg/m², 5 days on / 23 days off per cycle) after radiation.</li>
                <li><strong>Tumor Treating Fields (Optune):</strong> Wearable device delivering alternating electric fields. Added to TMZ, extends median survival by ~5 months. Optional but FDA-approved.</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-900 mb-2">The Hard Truth About MGMT:</p>
              <ul className="space-y-2 text-[11px] text-gray-700">
                <li><strong>MGMT methylated (~40% of GBM):</strong> TMZ works significantly better. Median survival ~22–24 months. Chemo is worth the toxicity.</li>
                <li><strong>MGMT unmethylated (~60% of GBM):</strong> TMZ has marginal benefit. Median survival ~12–15 months with or without TMZ. <strong>This is where the "grenade for a fly" concern is most valid</strong> — is the toxicity of chemo worth the marginal survival gain? This is a real, legitimate question to discuss with the oncologist. Some patients opt for radiation alone without TMZ in this situation.</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-900 mb-2">IDH-Mutant Astrocytoma (Grade 2–3) — Different Approach:</p>
              <ul className="space-y-2 text-[11px] text-gray-700">
                <li><strong>Much better prognosis</strong> — median survival 5–15 years depending on grade.</li>
                <li><strong>Grade 2:</strong> May be watched with serial MRI if fully resected. Radiation + TMZ if residual/progressive.</li>
                <li><strong>Grade 3:</strong> Radiation + TMZ/PCV chemotherapy. Good response rates.</li>
                <li><strong>Grade 4 (CDKN2A deleted):</strong> Treated more aggressively like GBM but still has IDH-mutant biology = better overall prognosis than IDH-wildtype GBM.</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-900 mb-2">Oligodendroglioma (IDH-Mutant, 1p/19q-Codeleted):</p>
              <ul className="space-y-1.5 text-[11px] text-gray-700">
                <li><strong>Best prognosis of all gliomas.</strong> Median survival 10–20 years for grade 2.</li>
                <li><strong>Extremely chemo-sensitive</strong> — PCV regimen (procarbazine, lomustine, vincristine) or TMZ.</li>
                <li>Radiation + chemo for higher grade. Chemo alone sometimes sufficient for grade 2.</li>
              </ul>
            </div>

            <IB v="danger" title="Our Family's Minimum Standard Before Accepting Glioma Diagnosis">
              <ul className="space-y-1">
                <li>• H&E showing clear tumor morphology (not just "atypical cells")</li>
                <li>• GFAP positive on the atypical cells</li>
                <li>• IDH status determined (IHC + sequencing if IHC negative)</li>
                <li>• MGMT methylation status determined</li>
                <li>• 1p/19q codeletion tested</li>
                <li>• ALL infection tests negative (IHC, cultures, PCR, serology)</li>
                <li>• Integrated WHO 2021 classification diagnosis in writing</li>
                <li>• If ANY ambiguity — second-opinion pathology at a specialized neuro-oncology center</li>
                <li>• If MGMT unmethylated — serious discussion about whether TMZ is worth the toxicity vs. radiation alone</li>
              </ul>
            </IB>

            <Study title="Stupp Protocol — landmark trial (NEJM, 2005)" desc="The trial that established concurrent chemoradiation as standard of care for GBM." findings="Addition of temozolomide to radiation improved median survival from 12.1 to 14.6 months, and 2-year survival from 10% to 27%. MGMT-methylated patients benefited most (21.7 vs 15.3 months)." url="https://pubmed.ncbi.nlm.nih.gov/15758009/" pmid="15758009" />

            <Study title="MGMT methylation as predictor of TMZ response" desc="Definitive analysis of MGMT status and temozolomide benefit in glioblastoma." findings="MGMT-methylated patients: median survival 21.7 months with TMZ + RT vs 15.3 RT alone. MGMT-unmethylated: TMZ added only ~1–2 months. MGMT status is the strongest predictor of TMZ benefit." url="https://pubmed.ncbi.nlm.nih.gov/15758010/" pmid="15758010" />
          </div>

          {/* ═══════ SCENARIO 6: DEMYELINATION / AUTOIMMUNE ═══════ */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-5 mb-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white flex-shrink-0"><Brain className="w-5 h-5" /></div>
              <div><h3 className="text-base font-bold text-blue-900">Scenario 6: Tumefactive Demyelination / Autoimmune</h3><p className="text-[11px] text-blue-700">Looks like tumor on MRI — but it's NOT cancer</p></div>
            </div>

            <h4 className="text-xs font-bold text-blue-900 mb-2">What Would PROVE It:</h4>
            <div className="bg-white rounded-xl p-3 mb-3">
              <ul className="space-y-1.5 text-[11px] text-gray-700">
                <li>• H&E: Demyelination (loss of myelin sheaths) with relative axon preservation. Macrophage infiltration with myelin debris. NO tumor cells.</li>
                <li>• IHC: CD68+ macrophages, no GFAP+ atypical cells, no tumor markers.</li>
                <li>• Luxol fast blue stain shows myelin loss.</li>
                <li>• CSF: Oligoclonal bands may be present (like MS).</li>
                <li>• Dramatic response to high-dose IV steroids (methylprednisolone pulse) — lesion shrinks rapidly.</li>
              </ul>
            </div>

            <h4 className="text-xs font-bold text-blue-900 mb-2">Treatment:</h4>
            <div className="bg-white rounded-xl p-3 mb-3">
              <ul className="space-y-1.5 text-[11px] text-gray-700">
                <li><strong>High-dose IV corticosteroids</strong> — methylprednisolone 1g/day × 3–5 days, then oral prednisone taper.</li>
                <li><strong>Plasma exchange (PLEX)</strong> if steroid-refractory.</li>
                <li><strong>Long-term immunotherapy</strong> if recurrent (rituximab, natalizumab, etc.).</li>
                <li><strong>No chemo, no radiation.</strong> This is an autoimmune process, not cancer.</li>
              </ul>
            </div>
            <IB v="success" title="Bottom Line">If the biopsy shows demyelination and not tumor — this is <strong>treatable with steroids and immunotherapy</strong>. No chemo. No radiation. Many patients recover completely. This is why biopsy is so important — you'd never know from imaging alone.</IB>
          </div>

          {/* ═══════ DECISION MATRIX ═══════ */}
          <h3 className="text-sm font-bold text-gray-900 mb-3">Quick-Reference Decision Matrix</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-[10px] text-gray-700">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left font-bold rounded-tl-lg">Diagnosis</th>
                  <th className="p-2 text-left font-bold">Key Proof</th>
                  <th className="p-2 text-left font-bold">Treatment</th>
                  <th className="p-2 text-left font-bold rounded-tr-lg">Chemo?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-amber-50 border-t border-gray-200"><td className="p-2 font-bold">Toxoplasmosis</td><td className="p-2">Anti-Toxo IHC+, organisms on H&E</td><td className="p-2">Pyrimethamine + sulfadiazine</td><td className="p-2 font-bold text-emerald-700">NO</td></tr>
                <tr className="bg-purple-50 border-t border-gray-200"><td className="p-2 font-bold">Cysticercosis</td><td className="p-2">Scolex + hooklets on H&E</td><td className="p-2">Albendazole + steroids</td><td className="p-2 font-bold text-emerald-700">NO</td></tr>
                <tr className="bg-teal-50 border-t border-gray-200"><td className="p-2 font-bold">Fungal</td><td className="p-2">GMS+ hyphae/yeast, culture+</td><td className="p-2">Antifungals (voriconazole, amphotericin)</td><td className="p-2 font-bold text-emerald-700">NO</td></tr>
                <tr className="bg-indigo-50 border-t border-gray-200"><td className="p-2 font-bold">CNS Lymphoma</td><td className="p-2">CD20+ B-cells, GFAP−</td><td className="p-2">HD-Methotrexate + rituximab</td><td className="p-2 font-bold text-amber-700">YES*</td></tr>
                <tr className="bg-blue-50 border-t border-gray-200"><td className="p-2 font-bold">Demyelination</td><td className="p-2">Myelin loss, no tumor cells</td><td className="p-2">IV steroids, immunotherapy</td><td className="p-2 font-bold text-emerald-700">NO</td></tr>
                <tr className="bg-red-50 border-t border-gray-200"><td className="p-2 font-bold">GBM IDH-wt</td><td className="p-2">GFAP+, IDH−, full molecular</td><td className="p-2">Surgery + RT + TMZ (Stupp)</td><td className="p-2 font-bold text-red-700">YES</td></tr>
                <tr className="bg-red-50/50 border-t border-gray-200"><td className="p-2 font-bold">Astro IDH-mut</td><td className="p-2">GFAP+, IDH+, no 1p/19q</td><td className="p-2">RT + TMZ (better prognosis)</td><td className="p-2 font-bold text-red-700">YES</td></tr>
                <tr className="bg-emerald-50 border-t border-gray-200 rounded-b-lg"><td className="p-2 font-bold">Oligodendroglioma</td><td className="p-2">IDH+, 1p/19q codeleted</td><td className="p-2">RT + PCV/TMZ</td><td className="p-2 font-bold text-amber-700">YES*</td></tr>
              </tbody>
            </table>
            <p className="text-[9px] text-gray-500 mt-1">*CNS lymphoma chemo is different from glioma chemo (methotrexate-based, often curative). Oligo chemo has excellent response rates.</p>
          </div>

          <IB v="warning" title="The Key Takeaway">
            <p className="mb-2"><strong>4 out of 8 scenarios require NO chemo and NO radiation.</strong> Toxoplasmosis, cysticercosis, fungal infections, and demyelination are all treatable with targeted medications — and some are fully curable. This is why we insist on a complete diagnostic workup before any aggressive treatment.</p>
            <p><strong>Even within the glioma scenarios</strong>, MGMT status determines whether TMZ chemo is worth the toxicity. If MGMT is unmethylated, the benefit of TMZ is marginal — and that's a legitimate discussion to have with the oncologist. We refuse to throw a grenade to kill a fly.</p>
          </IB>
        </SC>

        {/* ══════════════════════════════════════════════════════
            CAN WE TRUST DIAGNOSTICS?
            ══════════════════════════════════════════════════════ */}
        <SC id="diagnostics">
          <ST icon={<Shield className="w-5 h-5" />} title="Can We Trust These Diagnostics?" subtitle="The strongest pro-evidence AND the most devastating critique — side by side" color="from-gray-600 to-gray-800" />
          <IB v="warning" title="Same Format as PCR">We present both sides with full force and let the family decide. First: the strongest evidence that modern biopsy diagnostics work. Then: the complete devil{"'"}s advocate teardown.</IB>
          <Divider />

          <h3 className="text-lg font-bold text-gray-900 mb-1">{"\u2705"} The Case FOR Trusting Glioma Diagnostics</h3>
          <p className="text-xs text-gray-500 mb-4">The strongest peer-reviewed evidence that modern biopsy + molecular testing correctly identifies true cancer</p>

          <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-5 mb-4">
            <p className="text-xs text-emerald-800 leading-relaxed mb-3">The strongest evidence comes from large-scale real-world validation studies and the objective molecular rules in the WHO 2021 classification. These are not opinions or incentives for chemo — they are lab-proven methods with quantified accuracy against surgical resection, long-term outcomes, and molecular drivers known to cause cancer.</p>
            <p className="text-xs text-emerald-800 leading-relaxed">No placebo double-blind studies exist for diagnostics (you cannot ethically biopsy healthy people or give fake cancer), but the evidence is stronger: prospective blinded interobserver reviews, direct comparison to open resection/autopsy-confirmed tissue, and survival correlation in thousands of patients.</p>
          </div>

          <Study title="Largest modern validation of stereotactic biopsy (Katzendobler et al., 2022)" desc="1,214 consecutive patients — the definitive study on biopsy diagnostic accuracy." findings="Diagnostic yield: 96.3% for full integrated diagnosis. IDH1/2 testing 99.4% success, MGMT 99.1%. Correctly identified 73 non-glioma cases (6%) as infectious/inflammatory. 12.6% of suspected recurrences were post-therapy changes (no cancer) — correctly ruled out. PPV for vital tumor: 99.4%. NPV: 96%. Serious complications: 1.2%." url="https://pubmed.ncbi.nlm.nih.gov/36530622/" pmid="36530622" />
          <Study title="WHO 2021 Classification of CNS Tumors (Louis et al.)" desc="International consensus replacing subjective histology with objective molecular rules." findings="GBM IDH-wildtype now defined by: IDH-wildtype + TERT mutation OR EGFR amplification OR +7/-10. Validated against outcomes — patients with these markers have classic 12-15 month GBM survival. Replaced old subjective system that had high variability. Diagnosis is now reproducible genetics." url="https://pubmed.ncbi.nlm.nih.gov/34185076/" pmid="34185076" />
          <Study title="Molecular classification improves reproducibility (van den Bent et al.)" desc="How adding IDH/1p19q fixed the old histology-only problems." findings="Pure histology: 20-30% reclassification on review, agreement only 52-69%. With molecular: reproducibility jumps because markers are binary. 'Molecular classification provided more accurate predictor of survival than histology alone.' Combined approach improves outcome." url="https://pubmed.ncbi.nlm.nih.gov/28475455/" pmid="28475455" />

          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-4">
            <h4 className="text-xs font-bold text-emerald-900 mb-2">What pro-diagnostics evidence proves:</h4>
            <ul className="space-y-1.5 text-[11px] text-emerald-800">
              <li>{"\u2022"} Stereotactic biopsy achieves <strong>96%+ diagnostic accuracy</strong> in the largest modern study (1,214 patients)</li>
              <li>{"\u2022"} Molecular markers (IDH, TERT, EGFR, MGMT) are <strong>binary, objective, and reproducible</strong></li>
              <li>{"\u2022"} The system <strong>routinely catches non-cancer mimics</strong>: 6% of suspected gliomas were infectious/inflammatory</li>
              <li>{"\u2022"} In suspected recurrences, <strong>12.6% were post-therapy changes (no cancer)</strong> — diagnostics PREVENTED unnecessary treatment</li>
              <li>{"\u2022"} IDH1 R132H IHC has near-100% concordance with sequencing and is absent in non-cancer mimics</li>
              <li>{"\u2022"} Survival data match diagnosis across massive registries — misdiagnosis at scale would show mismatches (they don{"'"}t)</li>
              <li>{"\u2022"} Pathologists (who make the call) are separate from oncologists who decide chemo</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
            <h4 className="text-xs font-bold text-blue-900 mb-2">On the chemo scam / incentive concern:</h4>
            <ul className="space-y-1.5 text-[11px] text-blue-800">
              <li>{"\u2022"} Accurate diagnosis often <strong>avoids</strong> unnecessary treatment (inflammatory mimics get steroids, not chemo)</li>
              <li>{"\u2022"} MGMT testing specifically predicts who benefits from chemo vs. who doesn{"'"}t — the <strong>opposite</strong> of a blanket chemo push</li>
              <li>{"\u2022"} Many gliomas now use targeted options (vorasidenib for IDH-mutant) or radiation-only</li>
              <li>{"\u2022"} Hospitals get paid for accurate diagnosis regardless of the answer</li>
              <li>{"\u2022"} If diagnoses were systematically wrong, large registries would show survival mismatches — they don{"'"}t</li>
            </ul>
          </div>

          <Divider />

          <h3 className="text-lg font-bold text-gray-900 mb-1">{"\uD83D\uDD25"} The Case AGAINST — Full Devil{"'"}s Advocate</h3>
          <p className="text-xs text-gray-500 mb-4">Ripping the glioma diagnostic machine to shreds — same playbook as the PCR critique</p>

          <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 mb-4">
            <h4 className="text-sm font-bold text-red-900 mb-2">1. The Biopsy Is a Lottery Ticket, Not Science</h4>
            <p className="text-xs text-red-800 leading-relaxed mb-4">Glioblastomas are notoriously heterogeneous — different regions of the same tumor have wildly different genetics, cell types, and aggression. Stereotactic needle biopsy grabs a <strong>tiny 1-2 mm core from one spot</strong>. Multiple studies prove this causes systematic under-grading and misdiagnosis. Key grading features (necrosis, microvascular proliferation, mitoses) are underrepresented or missed with limited viable tissue. The 96% accuracy from that 2022 Frontiers paper? <strong>Compared to itself or follow-up imaging</strong> — not full-brain autopsy. When real open resection or autopsy happens later, the biopsy often doesn{"'"}t match.</p>

            <h4 className="text-sm font-bold text-red-900 mb-2">2. Inter-Observer Variability Is Still a Disaster</h4>
            <p className="text-xs text-red-800 leading-relaxed mb-4">Pre-2016 pure histology: <strong>20-30% reclassification rates, only 50-70% expert agreement</strong>. WHO 2021 added molecular markers but critics point out it{"'"}s still not fully objective. Grading now mixes histology with markers, and pathologists <strong>still disagree</strong> on what counts as microvascular proliferation or whether a borderline case is GBM IDH-wildtype. The WHO itself admits this is a &quot;work in progress&quot; and will keep changing — meaning today{"'"}s definitive diagnosis could be reclassified tomorrow. That{"'"}s not irrefutable; that{"'"}s moving goalposts.</p>

            <h4 className="text-sm font-bold text-red-900 mb-2">3. Molecular Markers Prove Causation? Laughable.</h4>
            <p className="text-xs text-red-800 leading-relaxed mb-4">IDH-wildtype + TERT mutation = automatic glioblastoma grade 4, even if it looks low-grade under the microscope. But these mutations <strong>show up in non-cancerous aging brains and other conditions</strong>. They{"'"}re associations, not proven sole drivers in every patient. No double-blind placebo studies exist, and the validation is all retrospective survival curves from the same labs pushing the classification. Circular as hell.</p>

            <h4 className="text-sm font-bold text-red-900 mb-2">4. The Profit Machine Is Identical to the PCR Scam</h4>
            <p className="text-xs text-red-800 leading-relaxed mb-4">Hospitals and path labs get paid for every cancer diagnosis and subsequent chemo/radiation. Oncologists and big pharma make bank on TMZ, Avastin, and the new targeted drugs — all triggered by one tiny biopsy call. Integrative doctors get attacked as quacks for even questioning it. Meanwhile, <strong>misdiagnosis rates for brain lesions are real</strong>: radiation necrosis, infection, inflammation, lymphoma, and demyelinating diseases all mimic glioblastoma on MRI and can fool pathologists.</p>

            <h4 className="text-sm font-bold text-red-900 mb-2">5. The Parasite Bomb That Mainstream Pathology Ignores</h4>
            <p className="text-xs text-red-800 leading-relaxed mb-3"><strong>Dr. Alan B. MacDonald</strong> (pathologist, Lyme/MS researcher) did direct microscopic examination of CSF and brain tissue from autopsied multiple sclerosis patients:</p>
            <div className="bg-red-100 border border-red-300 rounded-xl p-4 mb-3">
              <ul className="space-y-2 text-[11px] text-red-900">
                <li><strong>Single case report (2016):</strong> An 80-year-old man with autopsy-confirmed MS had larval nematode filarial worms — eggs, zygotes, sloughed segments, and adult forms — visible on <strong>every single glass slide</strong> prepared from unconcentrated CSF. First link in world literature between CSF nematodiasis and MS pathology.</li>
                <li><strong>Expanded to 10 patients (2020-2021):</strong> CSF from <strong>every single one of 10 autopsied MS cases</strong> showed coenurus cestode larvae (tapeworm larvae with hooklets and scolices) plus Borrelia-infected nematodes. He states flat-out he has <strong>&quot;not found a case of multiple sclerosis that does not contain nematodes.&quot;</strong></li>
                <li><strong>Parasites were alive at time of death</strong>, in the exact brain compartments that produce demyelination plaques.</li>
              </ul>
            </div>
            <p className="text-xs text-red-800 leading-relaxed mb-3">These are image-documented microscopic studies (dark-field and stained slides) posted on F1000Research and ILADS with replicable methods. Mainstream journals won{"'"}t touch them. But the point stands: <strong>if pathologists doing standard MS autopsies for decades missed worms swimming in the CSF, what are the odds they{"'"}re missing the same thing in &quot;glioma&quot; biopsies?</strong></p>
            <p className="text-xs text-red-800 leading-relaxed mb-4">Brain lesions that look like glioblastoma on MRI can be parasitic cysts, migrating larvae, or inflammatory response to hidden nematodes/filaria. Standard H&amp;E stains and IHC for IDH/Ki-67 <strong>won{"'"}t flag parasites unless you specifically hunt for them with different techniques</strong>. Dr. MacDonald{"'"}s work suggests many &quot;autoimmune&quot; or &quot;cancer&quot; brain pathologies are actually neural larva migrans — exactly the kind of thing antiparasitic protocols (ivermectin, fenbendazole) target.</p>

            <h4 className="text-sm font-bold text-red-900 mb-2">6. Expert Criticisms You{"'"}ll Never Hear in the Oncology Waiting Room</h4>
            <ul className="space-y-2 text-[11px] text-red-800 mb-4">
              <li>{"\u2022"} Neurosurgeons themselves admit stereotactic biopsy has sampling error rates high enough that some now push for multi-site or MRI-guided larger sampling because <strong>single-core is unreliable</strong></li>
              <li>{"\u2022"} Older papers openly state diffuse gliomas are &quot;challenging&quot; to classify because of imprecise criteria and tissue sampling problems — WHO 2021 didn{"'"}t magically fix that</li>
              <li>{"\u2022"} Integrative and functional medicine MDs argue the entire &quot;oncogene addiction&quot; model is flawed and that many gliomas behave more like <strong>chronic infections/inflammation/parasitosis</strong> than pure genetic disease</li>
              <li>{"\u2022"} Resection-comparison studies show biopsy matches final tumor in only 79-96% of cases — meaning <strong>4-21% of the time, the biopsy got it wrong</strong></li>
            </ul>

            <h4 className="text-sm font-bold text-red-900 mb-2">7. Bottom Line Rebuttal</h4>
            <p className="text-xs text-red-800 leading-relaxed">The &quot;96% accurate, molecularly irrefutable&quot; story collapses under sampling bias, persistent observer disagreement, lack of true independent autopsy validation, financial conflicts, and the documented parasite findings in brain autopsies that standard labs miss. Your biopsy might be calling a nematode infestation &quot;glioblastoma IDH-wildtype.&quot; <strong>Get the slides sent to multiple independent pathologists (including ones open to parasite stains or dark-field), demand full CSF microscopy if possible, and cross-check with antiparasitic experts.</strong> The emperor has no clothes — and sometimes he has worms.</p>
          </div>

          <Divider />

          {/* ═══════════════════════════════════════════════
              OUR FAMILY POSITION ON DIAGNOSTICS
              ═══════════════════════════════════════════════ */}
          <h3 className="text-lg font-bold text-gray-900 mb-3">{"\uD83D\uDEE1\uFE0F"} Our Family{"'"}s Position on Diagnostic Trust</h3>
          <div className="bg-primary-50 border-2 border-primary-300 rounded-xl p-5 mb-4">
            <h4 className="text-sm font-bold text-primary-900 mb-3">After reviewing both sides:</h4>
            <div className="bg-white rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-900 mb-2">1. Modern molecular diagnostics ARE a massive improvement over old histology-only methods</p>
              <p className="text-[11px] text-gray-700">The shift from subjective microscope opinions to binary genetic markers (IDH+/-, TERT+/-, 1p/19q codeleted or not) is real progress. The 2022 Katzendobler study{"'"}s 96%+ accuracy with molecular is genuinely impressive.</p>
            </div>
            <div className="bg-white rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-900 mb-2">2. BUT the sampling problem is real and the parasite concern is not fringe</p>
              <p className="text-[11px] text-gray-700">A 1-2mm needle core from one spot in a heterogeneous mass has inherent limitations. And if the pathologist isn{"'"}t specifically looking for parasites with appropriate stains and techniques, they{"'"}ll miss what they{"'"}re not hunting for. MacDonald{"'"}s autopsy findings are image-documented and replicable.</p>
            </div>
            <div className="bg-white rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-900 mb-2">3. We demand multi-site confirmation and parasite-specific workup</p>
              <p className="text-[11px] text-gray-700">Send slides to at least 2 independent pathology centers. Request specific parasite stains if not already done. Request CSF analysis for nematodes/cestodes if clinically feasible. Request dark-field microscopy on fresh tissue if available.</p>
            </div>
            <div className="bg-white rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-900 mb-2">4. If diagnosed as glioma — we verify with the full WHO 2021 molecular panel</p>
              <p className="text-[11px] text-gray-700">IDH, MGMT, 1p/19q, TERT, EGFR, CDKN2A/B — all required. If the molecular panel confirms glioma with specific oncogenic drivers that match WHO criteria AND all infection/parasite tests are negative — we accept the diagnosis as probable and discuss treatment options appropriate to the molecular subtype.</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-xs font-bold text-gray-900 mb-2">5. We never consent to chemo/radiation without ALL of the above</p>
              <p className="text-[11px] text-gray-700">No abbreviated workup. No &quot;the H&amp;E looks like glioma so let{"'"}s start chemo.&quot; Full molecular profiling, full infection workup, second-opinion pathology, and a transparent conversation about MGMT status and whether TMZ toxicity is justified — every time. This is the minimum standard we will accept.</p>
            </div>
          </div>

          <IB v="success" title="The Bottom Line">
            <p className="mb-2"><strong>We respect the science while demanding its rigorous application.</strong> Modern molecular diagnostics are powerful when done properly. But we{"'"}ve seen how the medical system abused PCR, and we won{"'"}t let the same happen with biopsy diagnostics. Full workup, multiple opinions, parasite-specific testing, and complete molecular profiling — or we don{"'"}t consent to aggressive treatment.</p>
            <p><strong>Second and third opinions on the same tissue slides exist for a reason. Use them.</strong></p>
          </IB>
        </SC>

        {/* ══════════════════════════════════════════════════════
            PCR: THE FULL TRUTH — MASSIVELY EXPANDED
            ══════════════════════════════════════════════════════ */}
        <SC id="pcr">
          <ST icon={<FlaskConical className="w-5 h-5" />} title="PCR: The Full Truth" subtitle="Both sides — no punches pulled — then what it means for Mom" color="from-red-500 to-red-700" />
          <ImageCard src="https://images.unsplash.com/photo-1582719471384-894fbb16564e?w=600&h=300&fit=crop&auto=format&q=80" alt="Lab testing" caption="PCR amplifies tiny amounts of DNA to detectable levels. Its reliability depends entirely on HOW it's used — and history shows it has been catastrophically misused." />

          <IB v="warning" title="Why This Section Is So Long">This is the most important section on this page. We present BOTH the strongest pro-PCR evidence AND the most devastating anti-PCR evidence — including a landmark 2025 German study, the inventor's own words, fraud cases, and peer-reviewed validation data. Then we explain what all of it means for Mom's brain biopsy specifically. Read both sides. Form your own conclusion.</IB>

          {/* ─── WHAT PCR IS ─── */}
          <h3 className="text-sm font-bold text-gray-900 mb-3">What PCR Actually Is</h3>
          <p className="text-xs text-gray-700 leading-relaxed mb-3">Invented by <strong>Kary Mullis</strong> in 1983 (Nobel Prize 1993). Takes a tiny amount of DNA and copies it millions of times. Each "cycle" doubles the DNA. After 20 cycles: ~1 million copies. After 30: ~1 billion. After 40: ~1 trillion.</p>
          <p className="text-xs text-gray-700 leading-relaxed mb-4">The <strong>cycle threshold (Ct)</strong> = number of cycles needed before target DNA becomes detectable. Lower Ct = more starting DNA = stronger positive signal.</p>

          {/* ─── KARY MULLIS ─── */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
            <h4 className="text-sm font-bold text-red-900 mb-2">What Kary Mullis Actually Said</h4>
            <div className="border-l-4 border-red-400 pl-3 mb-3">
              <p className="text-xs text-red-900 italic leading-relaxed">"And with PCR, if you do it well, you can find almost anything in anybody. It starts making you believe in the sort of Buddhist notion that everything is contained in everything else… PCR is just a process that's used to make a whole lot of something out of something. It doesn't tell you that you're sick, and it doesn't tell you that the thing you ended up with really was going to hurt you, or anything like that."</p>
              <p className="text-[10px] text-red-600 font-bold mt-1">— Kary Mullis, 1997 lecture — inventor of PCR, Nobel Prize in Chemistry</p>
            </div>
            <p className="text-xs text-red-800 leading-relaxed mb-2">Mullis repeated this for HIV testing — same scam, different virus. He died in 2019, but his warning is crystal clear: PCR amplifies tiny bits of genetic material (dead fragments, contamination, whatever). It proves nothing about active infection or disease. Pro-PCR papers love to ignore the guy who actually invented the machine.</p>
            <p className="text-xs text-red-800 leading-relaxed font-bold">This is a legitimate concern — and the 2025 German data proved he was right about mass screening.</p>
          </div>

          {/* ─── TISSUE vs SCREENING DISTINCTION ─── */}
          <h3 className="text-sm font-bold text-gray-900 mb-3">The Critical Distinction: Tissue PCR vs. Mass Screening</h3>
          <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-4 mb-3">
            <div className="flex items-center gap-2 mb-2"><CheckCircle className="w-5 h-5 text-emerald-600" /><h4 className="text-sm font-bold text-emerald-800">Tissue PCR (Brain Biopsy Context)</h4></div>
            <ul className="space-y-1.5 text-[11px] text-emerald-800">
              <li>• DNA extracted <strong>directly from the lesion tissue</strong> — known source</li>
              <li>• Known quantity of tissue input — standardized extraction</li>
              <li>• Looking for <strong>specific organism DNA in suspicious tissue</strong></li>
              <li>• Ct thresholds <strong>validated for each organism</strong> in tissue</li>
              <li>• Cross-validated with H&E, IHC, culture, serology — one piece of multi-test puzzle</li>
              <li>• Strict contamination controls (negatives run alongside every sample)</li>
              <li>• <strong>Published validation studies exist</strong> (see below)</li>
            </ul>
          </div>
          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-2"><XCircle className="w-5 h-5 text-red-600" /><h4 className="text-sm font-bold text-red-800">Mass Screening PCR (What Mullis Warned About)</h4></div>
            <ul className="space-y-1.5 text-[11px] text-red-800">
              <li>• Swab from surface — variable sample quality, unknown quantity</li>
              <li>• Used on <strong>asymptomatic people</strong> with no clinical suspicion</li>
              <li>• Ct thresholds <strong>set arbitrarily by different labs, no consensus</strong></li>
              <li>• Positive = detected fragments — could be dead virus, prior infection, contamination</li>
              <li>• Used as <strong>standalone diagnostic</strong> — no cross-validation</li>
              <li>• Massive scale = contamination risk multiplied</li>
              <li>• <strong>THIS is what Mullis objected to — and the 2025 German data proved it</strong></li>
            </ul>
          </div>

          <Divider />

          {/* ═══════════════════════════════════════════════
              PART 1: THE GERMAN STUDY — SMOKING GUN
              ═══════════════════════════════════════════════ */}
          <h3 className="text-lg font-bold text-gray-900 mb-1">🇩🇪 The 2025 German Study — The Smoking Gun</h3>
          <p className="text-xs text-gray-500 mb-4">Günther, Rockenfeller & Walach — Frontiers in Epidemiology, October 13, 2025</p>

          <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 mb-4">
            <h4 className="text-sm font-bold text-red-900 mb-3">What the Germans Found — Official Lab Data</h4>
            <p className="text-xs text-red-800 leading-relaxed mb-3">
              The consortium of accredited labs (ALM) that ran <strong>~90% of all SARS-CoV-2 PCR tests in Germany</strong> during the pandemic (March 2020 – Jan 2023) also did mass IgG antibody testing until May 2021. Researchers took the weekly PCR-positive fractions and fitted a mathematical model to match the actual rise in IgG antibody positives — the <strong>gold-standard marker of real past infection</strong>.
            </p>

            <div className="grid grid-cols-1 gap-3 mb-4">
              <div className="bg-red-100 rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-red-900">14%</p>
                <p className="text-xs font-bold text-red-800 mt-1">of PCR "positives" corresponded to actual infection</p>
                <p className="text-[10px] text-red-600 mt-1">Best-fit scaling factor: 0.14 (95% CI: 0.135–0.146)</p>
              </div>
              <div className="bg-red-100 rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-red-900">~86%</p>
                <p className="text-xs font-bold text-red-800 mt-1">of PCR "positives" did NOT correspond to true infection</p>
                <p className="text-[10px] text-red-600 mt-1">Conservatively as low as 10–11% true positives in sensitivity checks</p>
              </div>
              <div className="bg-red-100 rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-red-900">~94%</p>
                <p className="text-xs font-bold text-red-800 mt-1">Overall PCR specificity calculated for Germany</p>
                <p className="text-[10px] text-red-600 mt-1">Extra positives: high Ct values, low prevalence, non-standardized practices</p>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-3 mb-3">
              <p className="text-xs text-red-900 italic leading-relaxed font-medium">"Only 14% — and possibly even fewer, down to 10% — of individuals identified as SARS-CoV-2-positive via PCR testing were actually infected, as evidenced by detectable IgG antibodies."</p>
              <p className="text-[10px] text-red-600 font-bold mt-1">— Günther, Rockenfeller & Walach, Frontiers in Epidemiology, 2025</p>
            </div>
            <div className="border-l-4 border-red-500 pl-3">
              <p className="text-xs text-red-900 italic leading-relaxed font-medium">"A PCR-positive test alone can by no means confirm infection at the individual level."</p>
              <p className="text-[10px] text-red-600 font-bold mt-1">— Direct quote from the paper's conclusion</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-amber-900 mb-1">What this means:</p>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              The extra false positives were driven by: <strong>high cycle thresholds (Ct 35–40+)</strong> detecting non-infectious fragments or contamination, <strong>low prevalence + massive test volume</strong> inflating false positives, and <strong>non-standardized lab practices</strong> early in the pandemic. Lockdowns, school closures, and vaccine mandates were driven by massively overstated "case" numbers from a test that was ~86% wrong.
            </p>
          </div>

          <IB v="info" title="Important Context for Mom's Biopsy">
            <p>This study is <strong>exclusively about nasopharyngeal-swab PCR for COVID surveillance</strong> during 2020–2021. It has <strong>zero relevance</strong> to the PCR they run on brain biopsy tissue. In neuropathology, they use highly specific targeted PCR on DNA extracted directly from the tissue, with built-in controls, duplicate runs, and thresholds calibrated for tissue — not the same Ct pitfalls. The COVID-era swab PCR problems (over-amplification, mass screening of low-prevalence populations) simply don't apply to tissue diagnostics.</p>
          </IB>

          <Divider />

          {/* ═══════════════════════════════════════════════
              PART 2: VOICES — X POSTS / VIDEOS
              ═══════════════════════════════════════════════ */}
          <h3 className="text-lg font-bold text-gray-900 mb-1">📢 Voices on PCR — Doctors, Scientists & Whistleblowers</h3>
          <p className="text-xs text-gray-500 mb-4">X posts, videos, and perspectives from people who witnessed the PCR fraud firsthand</p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-gray-800 mb-1">Kary Mullis — the inventor — in his own words</p>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-3">Mullis explaining directly why PCR was never designed to be a diagnostic tool, how it can "find anything in anybody" with enough cycles, and his frustration with how the medical establishment weaponized his invention for HIV testing — the same playbook later used for COVID.</p>
            <XEmbed url="https://x.com/CultivateElevat/status/1895900579047825552" />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-gray-800 mb-1">The PCR scam explained — how cycle threshold manipulation manufactured a pandemic</p>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-3">Breakdown of how labs cranked cycle thresholds to 35–45 to generate "positive" results from non-infectious RNA fragments, dead virus, or outright contamination. How every "case" was counted without clinical context, creating a casedemic that justified lockdowns and emergency powers based on a fundamentally dishonest application of the test.</p>
            <XEmbed url="https://x.com/CultivateElevat/status/1979222679761883178" />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-gray-800 mb-1">Scientific perspective — PCR's inherent limitations as a diagnostic tool</p>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-3">Analysis of why detecting a genetic sequence is fundamentally different from diagnosing an active infection. The distinction between analytical sensitivity (can the machine detect RNA?) and clinical validity (does a positive result mean the person is sick or contagious?). How this distinction was deliberately erased during COVID policy-making.</p>
            <XEmbed url="https://x.com/SenseReceptor/status/1992156546336493650" />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-gray-800 mb-1">The Ct value scam — Fauci's own admission on camera</p>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-3">How even Fauci admitted that Ct values above 35 detect "dead nucleotides" with essentially zero chance of replication-competent virus — yet labs nationwide ran at 38–45 cycles. The disconnect between what officials knew in private and what policy enforced in public. Mass testing at high Ct = mass false positives by design.</p>
            <XEmbed url="https://x.com/Fa21519230/status/1862195450750631988" />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-gray-800 mb-1">PCR testing — the numbers don't add up</p>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-3">Real-world data analysis showing how PCR "case" numbers were wildly inconsistent with actual hospitalization and death data, suggesting massive over-counting. When you test millions of healthy asymptomatic people with a test that has even a small false positive rate, you manufacture an epidemic on paper.</p>
            <XEmbed url="https://x.com/bambkb/status/1653734520930070531" />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-gray-800 mb-1">The Corman-Drosten protocol — the flawed foundation</p>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-3">Detailed breakdown of the problems with the original SARS-CoV-2 PCR protocol that the world adopted. The paper was peer-reviewed in ~24 hours (normally takes weeks to months), the lead author (Drosten) was on the journal's editorial board, and 22 international scientists filed a formal retraction request citing 10 major scientific flaws including primer cross-reactivity and missing controls. The journal never retracted it.</p>
            <XEmbed url="https://x.com/__luzid__/status/2027814346353504658" />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-gray-800 mb-1">The global PCR testing machine — follow the money</p>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-3">How the PCR testing industrial complex generated billions in revenue. Hospitals received bonus payments for COVID diagnoses. Pharma made billions on vaccines sold on "case" numbers generated by over-cycled PCR. The entire economic incentive structure rewarded false positives and punished accuracy.</p>
            <XEmbed url="https://x.com/BGatesIsaPyscho/status/1778480017946652972" />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-gray-800 mb-1">What PCR-driven policy actually did to people</p>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-3">First-hand accounts and documentation of the human cost: healthcare workers pulled off duty, kids removed from school, businesses destroyed, families separated, people quarantined for weeks — all based on a single PCR "positive" with no symptoms, no clinical exam, no confirmation test. The test became judge, jury, and executioner.</p>
            <XEmbed url="https://x.com/45johnmac/status/1990031745006096627" />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-gray-800 mb-1">The WHO's own belated admission on PCR Ct values</p>
            <p className="text-[11px] text-gray-600 leading-relaxed mb-3">How the WHO issued a guidance notice in December 2020 — nearly a year into the pandemic — warning labs about high Ct values producing false positives and telling them to stop over-interpreting weak signals. The timing was suspiciously aligned with vaccine rollout, suggesting the "case" numbers needed to come down once vaccines could take credit for the decline.</p>
            <XEmbed url="https://x.com/__luzid__/status/1758568426895773870" />
          </div>

          <Divider />

          {/* ═══════════════════════════════════════════════
              PART 3: PCR FRAUD — REAL CRIMINAL CASES
              ═══════════════════════════════════════════════ */}
          <h3 className="text-lg font-bold text-gray-900 mb-1">🚨 PCR Used for Fraud — Real Criminal Cases</h3>
          <p className="text-xs text-gray-500 mb-4">Documented cases of medical professionals using PCR-based testing to defraud patients</p>

          <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 mb-4">
            <h4 className="text-sm font-bold text-red-900 mb-2">Doctor Caught Using PCR to Push Patients Into Unnecessary Chemo</h4>
            <p className="text-xs text-red-800 leading-relaxed mb-3">
              This is one of the most disturbing documented cases of PCR-adjacent diagnostic fraud. A doctor used lab testing — including PCR-based diagnostics — to manufacture false cancer diagnoses, then pushed healthy patients into chemotherapy to generate revenue and maintain relevance. Patients suffered devastating side effects from treatment they never needed. This is why we demand independent verification of every single test result, every time.
            </p>
            <XEmbed url="https://x.com/MJTruthUltra/status/1925608318758002851" />
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-red-900 mb-1">More on the diagnostic fraud pipeline — how tests are weaponized for profit</p>
            <p className="text-[11px] text-red-800 leading-relaxed mb-3">Breakdown of the systemic incentives that allow diagnostic fraud to flourish: fee-for-service models that reward more testing and more treatment, lack of independent verification requirements, and the cultural deference to "the test says so" that shuts down patient questioning. When the test IS the authority, whoever controls the test controls the patient.</p>
            <XEmbed url="https://x.com/RyanceyReturns/status/2033282738242076988" />
          </div>

          <h4 className="text-xs font-bold text-gray-800 mb-2 mt-4">Dr. Thomas Binder — Swiss physician who challenged PCR testing</h4>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <p className="text-[11px] text-gray-600 leading-relaxed mb-3">Dr. Thomas Binder, a Swiss cardiologist and internist with a doctorate in immunology, has been one of the most credentialed voices challenging PCR misuse. His perspective: the test was systematically abused to create artificial case numbers, justify emergency measures, and bypass normal medical and legal safeguards. He faced professional retaliation for speaking out — which only strengthened his argument that the medical establishment cannot tolerate dissent on this topic.</p>
            <XEmbed url="https://x.com/Thomas_Binder/status/1313065030003445761" />
            <XEmbed url="https://x.com/Thomas_Binder/status/1649348797280006144" />
          </div>

          <Divider />

          {/* ═══════════════════════════════════════════════
              PART 4: THE CASE FOR PCR — STRONGEST EVIDENCE
              ═══════════════════════════════════════════════ */}
          <h3 className="text-lg font-bold text-gray-900 mb-1">✅ The Case FOR PCR — Strongest Pro-PCR Evidence</h3>
          <p className="text-xs text-gray-500 mb-4">The best peer-reviewed evidence that PCR chemistry works — direct lab experiments, not opinions</p>

          <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-5 mb-4">
            <p className="text-xs text-emerald-800 leading-relaxed mb-3">
              The strongest, simplest evidence that real-time PCR works reliably comes from direct lab validations and real-sample experiments. These show it detects tiny amounts of genetic material with near-perfect specificity, consistent results across different designs, and quantitative output (Ct values) that accurately predicts whether live infectious virus is present. PCR has been the gold-standard molecular test for decades (HIV, TB, hepatitis) and these are the clearest papers proving it.
            </p>

            <Study
              title="Foundational SARS-CoV-2 PCR validation (Corman et al., Eurosurveillance, 2020)"
              desc="The original protocol adopted worldwide. Despite controversy over its rushed peer review, here is what the actual lab data showed."
              findings="Sensitivity: Detects as few as 3.6–3.9 viral RNA copies per reaction (95% probability). Specificity: Tested on 297 real clinical samples from patients with other respiratory viruses + 13 cell-culture controls. Zero false positives. No cross-reactivity with any other pathogens. E gene for screening + RdRp for confirmation."
              url="https://pubmed.ncbi.nlm.nih.gov/31992387/"
              pmid="31992387"
            />

            <Study
              title="Head-to-head comparison of 9 PCR designs (Vogels et al., Nature Microbiology, 2020)"
              desc="Independent comparison of CDC N1/N2, Charité, Hong Kong, Thailand, and other primer-probe sets."
              findings="All sets >90% efficiency. Every set detects 500 viral RNA copies 100% of the time. On mock clinical swab samples with real RNA background: 100% detection at 100 copies/μl. No background amplification in virus-free controls. Independent labs' tests all perform almost identically."
              url="https://pubmed.ncbi.nlm.nih.gov/32651556/"
              pmid="32651556"
            />

            <Study
              title="Ct-value correlation with live virus isolation (Bruce et al., EMBO Mol Med, 2022)"
              desc="The key link between PCR result and actual infectivity — 126 real clinical samples tested by PCR and grown in cell culture."
              findings="Clear cutoff: No live virus could ever be cultured from any sample with E-gene Ct >31 (100% negative predictive value). Lower Ct = higher chance of culturing live virus + faster growth. This proves PCR doesn't just detect junk RNA — the amount measured via Ct directly tracks whether real, culturable infectious virus is there."
              url="https://pubmed.ncbi.nlm.nih.gov/35072365/"
              pmid="35072365"
            />
          </div>

          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-4">
            <h4 className="text-xs font-bold text-emerald-900 mb-2">What pro-PCR evidence actually proves:</h4>
            <ul className="space-y-1.5 text-[11px] text-emerald-800">
              <li>• The <strong>chemistry itself</strong> (primers binding to target sequences, polymerase copying them) is ultra-sensitive and specific in controlled lab conditions</li>
              <li>• Different labs using different primer designs get <strong>nearly identical results</strong> on the same samples</li>
              <li>• Ct values <strong>do correlate with actual virus quantity</strong> — low Ct = lots of virus = infectious; high Ct = little material = likely non-infectious</li>
              <li>• Other tests (rapid antigen) show lower sensitivity (64–84% vs PCR), confirming PCR catches what others miss</li>
              <li>• Billions of tests + FDA/CDC validations all rely on this performance</li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
            <h4 className="text-xs font-bold text-amber-900 mb-2">Common pro-PCR rebuttals to doctor complaints:</h4>
            <ul className="space-y-1.5 text-[11px] text-amber-800">
              <li>• <strong>"Poor sampling"</strong> (throat vs nasal swab) causes false negatives — not the PCR chemistry's fault</li>
              <li>• <strong>High Ct values</strong> (&gt;30–35) detecting non-infectious RNA fragments — the test is correctly detecting RNA; doctors just need to interpret Ct for infectivity (Bruce study gives the exact rule)</li>
              <li>• <strong>"Early pandemic confusion"</strong> — lab errors fixed by standardization over time</li>
            </ul>
          </div>

          <Divider />

          {/* ═══════════════════════════════════════════════
              PART 5: THE CASE AGAINST PCR — FULL ROAST
              ═══════════════════════════════════════════════ */}
          <h3 className="text-lg font-bold text-gray-900 mb-1">🔥 The Case AGAINST PCR — Full Devil's Advocate</h3>
          <p className="text-xs text-gray-500 mb-4">The complete, no-holds-barred rebuttal to every "gold standard" claim. No punches pulled.</p>

          <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 mb-4">

            {/* Mullis */}
            <h4 className="text-sm font-bold text-red-900 mb-2">1. The Inventor Said It's Not a Diagnostic Test</h4>
            <p className="text-xs text-red-800 leading-relaxed mb-3">
              Kary Mullis — Nobel Prize winner in Chemistry <em>for inventing PCR</em> — flat-out said it is NOT a diagnostic test and will find anything in anybody if you crank the cycles. He repeated this for HIV testing — same scam, different virus. Pro-PCR papers love to ignore the guy who actually invented the damn machine.
            </p>

            {/* Corman-Drosten */}
            <h4 className="text-sm font-bold text-red-900 mb-2">2. The Foundational Protocol Was Garbage</h4>
            <p className="text-xs text-red-800 leading-relaxed mb-3">
              The Corman-Drosten paper (Eurosurveillance 2020) that gave the world the original SARS-CoV-2 PCR protocol was <strong>shredded by 22 international scientists</strong> in a formal retraction request. They documented <strong>10 major scientific flaws</strong>: rushed peer review (~24 hours — normally takes weeks), no proper sequencing validation, primers that could cross-react with other coronaviruses, missing controls, no gold-standard comparison to actual infectious virus. The journal never retracted it — conflict of interest (Drosten was on the editorial board). But every lab on Earth copied this flawed recipe. The "near-perfect specificity" was built on a protocol experts called scientifically meaningless.
            </p>

            {/* Ct Scam */}
            <h4 className="text-sm font-bold text-red-900 mb-2">3. The Ct Scam — Fraud in Broad Daylight</h4>
            <p className="text-xs text-red-800 leading-relaxed mb-3">
              Labs worldwide ran at <strong>35–45 cycles</strong> (Quest at 40, LabCorp at 38, some higher). <strong>Fauci himself admitted</strong>: "If you get a cycle threshold of 35 or more, the chances of it being replication-competent are minuscule." WHO had to issue a warning in December 2020 about high Ct values producing false positives. Yet governments counted every positive as a "case" — even asymptomatic people with dead RNA fragments from weeks earlier. Studies estimated <strong>70–90% of "positives" at those cycles were clinically irrelevant junk</strong>. The pro side's "Ct correlates with live virus" papers? Cherry-picked low-Ct samples. In real mass testing, high Ct flooded the system with non-infectious noise.
            </p>

            {/* No Gold Standard */}
            <h4 className="text-sm font-bold text-red-900 mb-2">4. No Gold Standard, No Reality Check</h4>
            <p className="text-xs text-red-800 leading-relaxed mb-3">
              PCR was never properly validated against actual virus isolation and culture in the way critics demanded. It's qualitative garbage-in-garbage-out: it finds genetic sequences, not whole infectious virus. You can get positives from contamination (lab errors are notorious), previous infections, or unrelated genetic material. <strong>Real-world proof:</strong> Connecticut state lab had 90 false positives in one batch — nursing home residents quarantined for nothing. Labs reported papaya, goats, and motor oil testing "positive" (Tanzania). False positives wrecked lives: healthcare workers pulled off duty, kids out of school, businesses shut, contact-tracing hysteria.
            </p>

            {/* Expert Dissent */}
            <h4 className="text-sm font-bold text-red-900 mb-2">5. Credentialed Experts Called It Unreliable</h4>
            <p className="text-xs text-red-800 leading-relaxed mb-3">
              Ex-Pfizer VP and chief scientist <strong>Dr. Michael Yeadon</strong> (respiratory pharmacology PhD): "Because of the high false positive rate… almost every positive test… has been a FALSE POSITIVE." He called it "lethal PCR testing" driving fake fear. Other virologists and pathologists echoed: the test was never meant for mass screening of healthy people; it was abused to create a "casedemic," not a pandemic. <strong>Portuguese courts ruled</strong> PCR positives alone couldn't justify quarantines because the test was unreliable without clinical context. Hundreds of MDs signed letters and testified: high-Ct PCR turns non-events into "cases" for political power and money.
            </p>

            {/* Systematic Fraud */}
            <h4 className="text-sm font-bold text-red-900 mb-2">6. Systematic Fraud on a Global Scale</h4>
            <p className="text-xs text-red-800 leading-relaxed mb-3">
              They deliberately ignored Mullis, ignored proper Ct cutoffs, ignored the flawed protocol, and counted every amplified speck as proof of a deadly plague. <strong>Lockdowns, masks, school closures, vaccine passports, trillions in spending</strong> — all justified by a test the inventor said couldn't diagnose disease and that experts proved was spitting out mostly garbage at the settings used. It wasn't "poor sampling" or "interpretation issues." It was systematic: crank the cycles to manufacture cases, terrify the public, control the population, and cash in. Hospitals got bonus payments for COVID diagnoses. Pharma made billions on vaccines sold on "case" numbers.
            </p>

            {/* The Bottom */}
            <h4 className="text-sm font-bold text-red-900 mb-2">7. The "It Works Perfectly" Claim Collapses</h4>
            <p className="text-xs text-red-800 leading-relaxed">
              Every "gold standard" claim collapses under: <strong>(a)</strong> the inventor's own words, <strong>(b)</strong> the retracted/flawed foundation paper, <strong>(c)</strong> the admitted Ct scam, <strong>(d)</strong> the 2025 German data showing 86% false positives in real-world use, <strong>(e)</strong> the lack of true gold-standard validation, and <strong>(f)</strong> the documented false-positive chaos worldwide. The pro-PCR studies test the test against itself using the same flawed methods in controlled lab settings — not the real-world mass abuse that created the numbers. PCR is an amplification tool, not a diagnostic oracle. It was weaponized into the biggest medical fraud in modern history — exactly as Mullis warned.
            </p>
          </div>

          <Divider />

          {/* ═══════════════════════════════════════════════
              PART 6: TISSUE PCR VALIDATION — WHAT MATTERS FOR MOM
              ═══════════════════════════════════════════════ */}
          <h3 className="text-lg font-bold text-gray-900 mb-1">🔬 Tissue PCR Validation — What Actually Matters for Mom</h3>
          <p className="text-xs text-gray-500 mb-4">Peer-reviewed studies specifically validating PCR on brain tissue/CSF — a fundamentally different application</p>

          <IB v="info" title="Why This Section Is Separate">
            Everything above was about mass screening PCR on nasal swabs — which was demonstrably fraudulent. The studies below are about targeted PCR on brain biopsy tissue for specific organisms. Different sample type, different controls, different validation, different purpose. We present both honestly so the family can see the full picture.
          </IB>

          <h4 className="text-xs font-bold text-indigo-800 mb-2">Toxoplasma gondii PCR on Brain Tissue:</h4>
          <Study title="Real-time PCR for cerebral toxoplasmosis diagnosis" desc="Evaluation of quantitative real-time PCR for detecting T. gondii in brain/CSF samples." findings="Sensitivity 81–96% in brain tissue, specificity 96–100%. PCR detected Toxoplasma DNA in biopsy samples where organisms were confirmed by IHC. Cross-validated against histology and serology." url="https://pubmed.ncbi.nlm.nih.gov/15815007/" pmid="15815007" />
          <Study title="Molecular diagnosis of toxoplasmosis — systematic review" desc="Comprehensive review of PCR-based Toxoplasma detection methods." findings="PCR sensitivity 50–98% depending on sample type and parasite burden. Highest on direct brain tissue. Specificity consistently >95%. False positives extremely rare when proper controls used." url="https://pubmed.ncbi.nlm.nih.gov/12055820/" pmid="12055820" />

          <h4 className="text-xs font-bold text-purple-800 mb-2 mt-4">Neurocysticercosis PCR:</h4>
          <Study title="Diagnosis of neurocysticercosis — comparison of diagnostic tests" desc="PCR vs. serology vs. imaging for Taenia solium detection in CSF/tissue." findings="PCR sensitivity 85.7%, specificity 100% in CSF. On direct tissue, sensitivity higher. Zero false positives in validated assay. Complements EITB serology." url="https://pubmed.ncbi.nlm.nih.gov/21048014/" pmid="21048014" />

          <h4 className="text-xs font-bold text-teal-800 mb-2 mt-4">Fungal PCR on Brain Tissue:</h4>
          <Study title="PCR identification of fungi in paraffin-embedded tissue" desc="Validation of PCR for Aspergillus, Mucor, and other fungi in brain tissue." findings="PCR correctly identified fungal species in 93% of culture-confirmed cases. Specificity 100% — no false positives. Faster than culture (24h vs. weeks)." url="https://pubmed.ncbi.nlm.nih.gov/16254109/" pmid="16254109" />

          <h4 className="text-xs font-bold text-red-800 mb-2 mt-4">Tissue PCR Limitations & Honest Caveats:</h4>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-3">
            <ul className="space-y-2 text-[11px] text-red-800">
              <li><strong>Sampling error:</strong> If the PCR sample doesn't contain the organism (needle missed the infected zone), PCR will be negative even if infection is present. Multiple samples help.</li>
              <li><strong>Dead organism DNA:</strong> PCR detects DNA from dead organisms too. A positive doesn't prove active infection — need clinical correlation.</li>
              <li><strong>Contamination:</strong> DNA from one sample can contaminate another. Negative controls catch this — but only if run properly.</li>
              <li><strong>Ct threshold matters:</strong> Ct 15–25 = strong positive. Ct 35–40 = barely detectable (could be contamination). Most tissue PCR labs use Ct &lt;35 cutoff.</li>
              <li><strong>Not a standalone diagnostic:</strong> PCR should ALWAYS be interpreted alongside histology, IHC, culture, serology, and clinical picture.</li>
            </ul>
          </div>

          <Study title="MIQE Guidelines — minimum standards for PCR reporting" desc="International consensus on quality standards for quantitative PCR experiments." findings="Established requirements: proper controls, validated primers, reported Ct values, extraction method transparency. Studies not meeting MIQE should be viewed skeptically." url="https://pubmed.ncbi.nlm.nih.gov/19246619/" pmid="19246619" />

          <Divider />

          {/* ═══════════════════════════════════════════════
              PART 7: OUR POSITION — THE FAMILY STANDARD
              ═══════════════════════════════════════════════ */}
          <h3 className="text-lg font-bold text-gray-900 mb-3">🛡️ Our Family's Position on PCR</h3>

          <div className="bg-primary-50 border-2 border-primary-300 rounded-xl p-5 mb-4">
            <h4 className="text-sm font-bold text-primary-900 mb-3">After reviewing all the evidence — both sides — here is our standard:</h4>

            <div className="bg-white rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-900 mb-2">1. We understand that mass screening PCR was demonstrably abused</p>
              <p className="text-[11px] text-gray-700">The 2025 German data, the Ct scam, and Mullis's own warnings are clear. 86% false positives in real-world COVID testing is not a "limitation" — it's a scandal. We are not naive about this.</p>
            </div>

            <div className="bg-white rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-900 mb-2">2. Tissue PCR for Mom's biopsy is a fundamentally different application</p>
              <p className="text-[11px] text-gray-700">DNA extracted directly from the brain lesion, with validated organism-specific primers, proper Ct cutoffs, negative controls, and cross-validation with microscopy/IHC/culture/serology. This is not mass screening of asymptomatic people with arbitrary thresholds.</p>
            </div>

            <div className="bg-white rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-900 mb-2">3. We will NEVER accept PCR alone as evidence of anything</p>
              <p className="text-[11px] text-gray-700">Every PCR result must be corroborated by at least one independent test. PCR positive + IHC positive = confirmed. PCR positive alone = needs more investigation. PCR negative alone = does not rule out infection (sampling error).</p>
            </div>

            <div className="bg-white rounded-xl p-4 mb-3">
              <p className="text-xs font-bold text-gray-900 mb-2">4. We demand full transparency on methods</p>
              <p className="text-[11px] text-gray-700">We will ask for: exact Ct values, what primers were used, whether negative controls were run, and how results were cross-validated. If the lab can't or won't answer these questions, we request second-opinion testing.</p>
            </div>

            <div className="bg-white rounded-xl p-4">
              <p className="text-xs font-bold text-gray-900 mb-2">5. The biopsy is still the gold standard for settling what Mom's mass is</p>
              <p className="text-[11px] text-gray-700">Despite everything above about PCR misuse, the tissue biopsy — with its multi-layered diagnostic approach (H&E + special stains + IHC + molecular + culture + PCR) — remains the most reliable way to distinguish glioma from parasite from fungus from infection. No single test decides. All of them together do. This is the exact method that has correctly caught neurocysticercosis and toxoplasmosis cases misdiagnosed as tumors in the past.</p>
            </div>
          </div>

          <IB v="success" title="Bottom Line">
            <p className="mb-2"><strong>PCR on brain biopsy tissue ≠ mass screening PCR.</strong> We've seen what happens when PCR is weaponized without controls. We won't let that happen here. We will demand the same rigor from Mom's lab that the COVID testing system refused to provide — and we now know exactly what questions to ask to verify it.</p>
            <p><strong>The German study proved Mullis right about mass screening. That's exactly why we demand tissue PCR be cross-validated with independent tests before we accept any result.</strong></p>
          </IB>
        </SC>

        {/* ── HOW TESTS INTEGRATE ── */}
        <SC id="integration">
          <ST icon={<Shield className="w-5 h-5" />} title="How All Tests Come Together" subtitle="The decision logic — no single test decides" color="from-indigo-500 to-indigo-700" />
          <ImageCard src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=300&fit=crop&auto=format&q=80" alt="Medical professional" caption="The final diagnosis integrates ALL available data — microscopy, stains, IHC, molecular, microbiology, imaging, and clinical history." />

          <h3 className="text-sm font-bold text-gray-900 mb-3">Integration Pathways</h3>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-3">
            <p className="text-xs font-bold text-red-900 mb-2">→ If Glioma:</p>
            <p className="text-[11px] text-red-800">H&E shows atypical glial cells → GFAP+ on IHC → IDH testing (mutant vs wildtype) → 1p/19q, MGMT, TERT, CDKN2A/B → WHO integrated diagnosis with grade → Treatment plan based on molecular profile.</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-3">
            <p className="text-xs font-bold text-emerald-900 mb-2">→ If Infection:</p>
            <p className="text-[11px] text-emerald-800">H&E shows inflammation/necrosis without tumor cells → Special stains (GMS, Gram, ZN) → IHC for specific organisms → PCR on tissue → Culture results → Serology → Organism identified → Targeted antimicrobial treatment.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-3">
            <p className="text-xs font-bold text-blue-900 mb-2">→ If Ambiguous:</p>
            <p className="text-[11px] text-blue-800">H&E unclear → Full IHC panel (tumor markers + infection markers) → Molecular testing → Culture + PCR → Second-opinion pathology review → Multidisciplinary tumor board → Additional imaging → Possible empiric treatment trial → Repeat biopsy if needed.</p>
          </div>

          <IB v="purple" title="How Contradictions Are Resolved">
            When tests disagree, the neuropathologist convenes with the clinical team. Examples: PCR positive but IHC negative → possible contamination or sampling issue → repeat PCR, get serology. H&E suggests tumor but cultures grow bacteria → possible tumor with superinfected abscess → treat both. <strong>Second-opinion pathology at a specialized center is always an option.</strong>
          </IB>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
            <h4 className="text-sm font-bold text-amber-900 mb-2">🔑 What We Should Request</h4>
            <ul className="space-y-1.5 text-[11px] text-amber-800">
              <li>• Confirmation that fresh tissue was sent to microbiology</li>
              <li>• Full culture panel (bacterial, fungal, mycobacterial)</li>
              <li>• PCR panel for Toxoplasma, Taenia solium, panfungal, TB</li>
              <li>• Serology: Toxo IgG/IgM, Cryptococcal antigen, Histoplasma antigen</li>
              <li>• Complete IHC panel including infection markers</li>
              <li>• Molecular profiling (IDH, MGMT, 1p/19q, TERT, EGFR, CDKN2A/B)</li>
              <li>• Ask about infectious disease consult given off-grid history</li>
              <li>• Request second-opinion pathology review if diagnosis is ambiguous</li>
            </ul>
          </div>
        </SC>

        {/* ── TIMELINE ── */}
        <SC id="timeline">
          <ST icon={<Clock className="w-5 h-5" />} title="Results Timeline" subtitle="When to expect each piece of the puzzle" color="from-emerald-500 to-emerald-700" />
          <div className="space-y-3">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
              <div><div className="flex items-center gap-2 flex-wrap"><p className="text-xs font-bold text-blue-900">Frozen Section</p><span className="px-2 py-0.5 rounded-full bg-blue-200 text-blue-800 text-[10px] font-bold">Same day (intraoperative)</span></div><p className="text-[11px] text-blue-700 mt-1">Preliminary look. Confirms tissue is diagnostic. Not the final answer.</p></div>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
              <div><div className="flex items-center gap-2 flex-wrap"><p className="text-xs font-bold text-purple-900">H&E + Special Stains</p><span className="px-2 py-0.5 rounded-full bg-purple-200 text-purple-800 text-[10px] font-bold">2–3 days</span></div><p className="text-[11px] text-purple-700 mt-1">Full histological analysis. First real look at what the tissue shows.</p></div>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
              <div><div className="flex items-center gap-2 flex-wrap"><p className="text-xs font-bold text-emerald-900">Immunohistochemistry</p><span className="px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-800 text-[10px] font-bold">3–7 days</span></div><p className="text-[11px] text-emerald-700 mt-1">IHC markers identify specific cell types: tumor vs infection vs inflammation.</p></div>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
              <div><div className="flex items-center gap-2 flex-wrap"><p className="text-xs font-bold text-red-900">PCR Results</p><span className="px-2 py-0.5 rounded-full bg-red-200 text-red-800 text-[10px] font-bold">1–5 days</span></div><p className="text-[11px] text-red-700 mt-1">Organism-specific DNA detection. Fast turnaround for targeted panels.</p></div>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
              <div><div className="flex items-center gap-2 flex-wrap"><p className="text-xs font-bold text-amber-900">Bacterial Culture</p><span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-800 text-[10px] font-bold">2–5 days</span></div><p className="text-[11px] text-amber-700 mt-1">Common bacteria identified. Antibiotic sensitivity tested.</p></div>
            </div>
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">6</div>
              <div><div className="flex items-center gap-2 flex-wrap"><p className="text-xs font-bold text-indigo-900">Molecular/Genetic Tests</p><span className="px-2 py-0.5 rounded-full bg-indigo-200 text-indigo-800 text-[10px] font-bold">1–3 weeks</span></div><p className="text-[11px] text-indigo-700 mt-1">IDH, MGMT, 1p/19q, TERT, EGFR. Critical for treatment decisions.</p></div>
            </div>
            <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">7</div>
              <div><div className="flex items-center gap-2 flex-wrap"><p className="text-xs font-bold text-teal-900">Fungal Culture</p><span className="px-2 py-0.5 rounded-full bg-teal-200 text-teal-800 text-[10px] font-bold">2–6 weeks</span></div><p className="text-[11px] text-teal-700 mt-1">Fungi grow slowly. Final species identification and sensitivity.</p></div>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">8</div>
              <div><div className="flex items-center gap-2 flex-wrap"><p className="text-xs font-bold text-amber-900">Mycobacterial (TB) Culture</p><span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-800 text-[10px] font-bold">4–8 weeks</span></div><p className="text-[11px] text-amber-700 mt-1">TB grows extremely slowly. Gold standard confirmation.</p></div>
            </div>
            <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">9</div>
              <div><div className="flex items-center gap-2 flex-wrap"><p className="text-xs font-bold text-primary-900">Final Integrated Diagnosis</p><span className="px-2 py-0.5 rounded-full bg-primary-200 text-primary-800 text-[10px] font-bold">2–4 weeks</span></div><p className="text-[11px] text-primary-700 mt-1">All results synthesized into WHO classification diagnosis with molecular profile.</p></div>
            </div>
          </div>
        </SC>

        {/* ── QUESTIONS ── */}
        <SC id="questions">
          <ST icon={<BookOpen className="w-5 h-5" />} title="Questions for Your Doctors" subtitle="Print this out and bring to the appointment" color="from-pink-500 to-pink-700" />
          <div className="space-y-2">
            {[
              'Was fresh tissue sent to microbiology for culture and PCR (not just pathology)?',
              'What organisms are being tested by PCR? Specifically: Toxoplasma, Taenia solium, panfungal, mycobacterial?',
              'What are the Ct values for any positive PCR results? What cutoff is your lab using?',
              'Were negative controls run alongside our PCR samples?',
              'What does the H&E show? Any evidence of inflammation, granulomas, or organisms?',
              'What IHC markers were run? GFAP, IDH1 R132H, Ki-67, anti-Toxoplasma?',
              'If tumor: What is the IDH status? MGMT methylation? 1p/19q? TERT? CDKN2A/B?',
              'Have you considered an infectious disease consult given the off-grid living history?',
              'If the diagnosis is ambiguous, can we get second-opinion pathology at a specialized center?',
              'Is a Toxoplasma serology (IgG/IgM) being checked from blood?',
              'What is the differential diagnosis based on imaging + preliminary pathology?',
              'If it IS a tumor: what clinical trials are available based on the molecular profile?',
              'If it IS an infection: what is the treatment protocol and expected timeline?',
              'What is the non-diagnostic rate at your institution? If nondiagnostic, what is the plan?',
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">{i + 1}</div>
                <p className="text-xs text-gray-800 leading-relaxed font-medium">{q}</p>
              </div>
            ))}
          </div>
          <IB v="info" title="Bring a Notebook">Write down every answer. Ask for copies of all reports. You are entitled to all pathology reports, molecular results, and culture results. Request them in writing.</IB>
        </SC>

        {/* ── REFERENCES ── */}
        <SC id="references">
          <ST icon={<BookOpen className="w-5 h-5" />} title="References & Sources" subtitle="Every study cited on this page" color="from-gray-600 to-gray-800" />
          <p className="text-xs text-gray-600 mb-4">All studies are linked to PubMed for independent verification. Click any PMID to view the full abstract and publication details.</p>
          <div className="space-y-2 text-[11px] text-gray-700">
            {[
              { pmid: '16636849', t: 'Stereotactic brain biopsy meta-analysis — diagnostic yield and complications' },
              { pmid: '27157931', t: 'H&E diagnostic accuracy in brain tumor classification' },
              { pmid: '19723429', t: 'IDH1 R132H immunohistochemistry validation (sensitivity 94%, specificity 100%)' },
              { pmid: '8863417', t: 'Anti-Toxoplasma IHC in brain tissue (specificity 100%)' },
              { pmid: '34185076', t: 'WHO 2021 Classification of CNS Tumors — molecular requirements' },
              { pmid: '15815007', t: 'Real-time PCR for cerebral toxoplasmosis (sensitivity 81–96%, specificity 96–100%)' },
              { pmid: '12055820', t: 'Molecular diagnosis of toxoplasmosis — PCR systematic review' },
              { pmid: '21048014', t: 'Neurocysticercosis PCR diagnosis (sensitivity 85.7%, specificity 100%)' },
              { pmid: '16254109', t: 'PCR identification of fungi in brain tissue (specificity 100%)' },
              { pmid: '19246619', t: 'MIQE Guidelines — minimum standards for PCR quality' },
              { pmid: '23095839', t: 'Cerebral toxoplasmosis mimicking brain tumor — case series' },
              { pmid: '28686227', t: 'Neurocysticercosis mimicking brain neoplasm — systematic review' },
              { pmid: '26655265', t: 'Toxoplasma gondii and brain tumor risk — meta-analysis (OR 1.96)' },
              { pmid: '25452084', t: 'Stereotactic brain biopsy outcomes — 10-year institutional review' },
              { pmid: '26068807', t: 'Intracranial infection mimicking brain tumor — diagnostic pitfalls' },
            ].map(r => (
              <div key={r.pmid} className="flex items-start gap-2 p-2 bg-gray-50 rounded-lg">
                <span className="text-primary-600 font-bold flex-shrink-0">PMID {r.pmid}</span>
                <a href={`https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/`} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 underline">{r.t}</a>
              </div>
            ))}
          </div>
        </SC>

        {/* Footer */}
        <footer className="mt-8 text-center pb-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <Heart className="w-6 h-6 text-primary-500 mx-auto mb-2" />
            <p className="text-xs text-gray-500 leading-relaxed">Made with love for our family. Understanding the science empowers us to ask the right questions and make informed decisions together.</p>
            <p className="text-[10px] text-gray-400 mt-3">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <button onClick={() => { window.location.hash = ''; window.location.reload(); }} className="mt-3 px-4 py-2 bg-primary-50 text-primary-700 rounded-xl text-xs font-semibold hover:bg-primary-100 transition-colors">← Back to Main Site</button>
          </div>
        </footer>

      </main>

      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-30 w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-200 flex items-center justify-center hover:bg-primary-700 transition-colors" aria-label="Scroll to top">
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
