import React, { useState, useEffect, useRef } from 'react';
import { BookHeart, Lock, ChevronDown, ChevronUp, Download, Upload, Calendar, TrendingUp, Plus, Save, Trash2 } from 'lucide-react';
import { SectionHeader, Divider, BackToNav } from '../components/Cards';

const STORAGE_KEY = 'mom_symptom_diary';
const AUTH_KEY = 'mom_diary_auth';

/* ─── DATA ─── */
const MEDICATIONS = [
  { id: 'mebendazole', label: 'Mebendazole' },
  { id: 'fenbendazole', label: 'Fenbendazole' },
  { id: 'ivermectin', label: 'Ivermectin' },
];
const SUPPLEMENTS = [
  { id: 'curcumin', label: 'Curcumin 2,000mg' },
  { id: 'fish_oil', label: 'Fish Oil 3,000mg' },
  { id: 'mycommunity', label: 'MyCommunity / Lion\'s Mane' },
  { id: 'lions_mane_powder', label: 'Lion\'s Mane Powder' },
  { id: 'ashwagandha', label: 'Ashwagandha KSM-66' },
  { id: 'bacopa', label: 'Bacopa Monnieri' },
  { id: 'gotu_kola', label: 'Gotu Kola' },
  { id: 'rosemary', label: 'Rosemary Extract' },
  { id: 'tulsi', label: 'Tulsi (Holy Basil)' },
  { id: 'egcg', label: 'EGCG Green Tea Extract' },
  { id: 'quercetin', label: 'Quercetin + Bromelain' },
  { id: 'black_seed', label: 'Black Seed Oil' },
  { id: 'berberine', label: 'Berberine' },
  { id: 'olive_leaf', label: 'Olive Leaf Extract' },
  { id: 'mcp', label: 'Modified Citrus Pectin' },
  { id: 'milk_thistle', label: 'Milk Thistle' },
  { id: 'nac', label: 'NAC' },
  { id: 'ala', label: 'Alpha Lipoic Acid' },
  { id: 'vit_e', label: 'Vitamin E' },
  { id: 'coq10', label: 'CoQ10' },
  { id: 'zinc', label: 'Zinc Picolinate' },
  { id: 'magnesium', label: 'Magnesium Glycinate' },
  { id: 'kefir', label: 'Lifeway Kefir' },
  { id: 'wheat_grass', label: 'Wheat/Barley Grass' },
  { id: 'cannabis_day', label: 'Cannabis — Daytime (THC:CBD:CBG)' },
  { id: 'cannabis_night', label: 'Cannabis — Nighttime (THC:CBD:CBN)' },
];
const SIDE_EFFECTS = [
  'Headache', 'Dizziness', 'Nausea', 'Vomiting', 'Diarrhea', 'Constipation',
  'Fatigue', 'Rash/Skin', 'Numbness/Tingling', 'Blurred Vision', 'Confusion',
  'Loss of Appetite', 'Abdominal Pain', 'Joint/Muscle Pain', 'Swelling',
  'Difficulty Speaking', 'Difficulty Walking', 'Seizure Activity', 'Fever',
];
const BRISTOL = [
  { v: 1, label: 'Type 1 — Separate hard lumps (constipated)' },
  { v: 2, label: 'Type 2 — Lumpy, sausage-shaped' },
  { v: 3, label: 'Type 3 — Sausage with cracks (normal)' },
  { v: 4, label: 'Type 4 — Smooth, soft sausage (ideal)' },
  { v: 5, label: 'Type 5 — Soft blobs with clear edges' },
  { v: 6, label: 'Type 6 — Mushy, fluffy pieces' },
  { v: 7, label: 'Type 7 — Watery, no solid (diarrhea)' },
];
const MOODS = ['😊 Good', '😐 Okay', '😔 Low', '😢 Sad', '😡 Irritable', '😰 Anxious', '😴 Exhausted'];

function todayStr() { return new Date().toISOString().split('T')[0]; }

function blankEntry(date) {
  return {
    date: date || todayStr(),
    energy: 5, appetite: 5, cognition: 5, pain: 0, sleepQuality: 5, nausea: 0,
    mood: '😐 Okay',
    bowelCount: 0, bowelType: 4,
    weight: '',
    sideEffects: [],
    medications: [],
    supplements: [],
    breakfast: '', lunch: '', dinner: '', snacks: '',
    notes: '',
  };
}

/* ─── SLIDER ─── */
function Slider({ label, value, onChange, max = 10, lowLabel = 'Low', highLabel = 'High', color = 'primary' }) {
  const colors = { primary: 'accent-primary-600', red: 'accent-red-500', amber: 'accent-amber-500', emerald: 'accent-emerald-500' };
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[11px] font-bold text-gray-700">{label}</span>
        <span className="text-[11px] font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">{value}/{max}</span>
      </div>
      <input type="range" min={0} max={max} value={value} onChange={e => onChange(+e.target.value)}
        className={`w-full h-2 rounded-full ${colors[color]} cursor-pointer`} />
      <div className="flex justify-between text-[9px] text-gray-400 mt-0.5"><span>{lowLabel}</span><span>{highLabel}</span></div>
    </div>
  );
}

/* ─── CHECKBOX GROUP ─── */
function CheckGroup({ items, selected, onChange, columns = 2 }) {
  const toggle = (id) => {
    onChange(selected.includes(id) ? selected.filter(x => x !== id) : [...selected, id]);
  };
  return (
    <div className={`grid grid-cols-${columns} gap-1`}>
      {items.map(item => (
        <label key={item.id || item} className="flex items-center gap-1.5 text-[10px] text-gray-700 p-1 rounded hover:bg-gray-50 cursor-pointer">
          <input type="checkbox" checked={selected.includes(item.id || item)} onChange={() => toggle(item.id || item)}
            className="w-3 h-3 rounded accent-primary-600" />
          <span>{item.label || item}</span>
        </label>
      ))}
    </div>
  );
}

/* ─── COLLAPSIBLE ─── */
function C({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-3">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
        <span className="text-[11px] font-bold text-gray-800">{title}</span>
        {open ? <ChevronUp className="w-3.5 h-3.5 text-gray-400" /> : <ChevronDown className="w-3.5 h-3.5 text-gray-400" />}
      </button>
      {open && <div className="p-3">{children}</div>}
    </div>
  );
}

/* ─── MINI CALENDAR ─── */
function MiniCalendar({ entries, selectedDate, onSelectDate }) {
  const [viewDate, setViewDate] = useState(new Date());
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = viewDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const entryDates = new Set(entries.map(e => e.date));
  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 mb-3">
      <div className="flex items-center justify-between mb-2">
        <button onClick={() => setViewDate(new Date(year, month - 1))} className="text-gray-400 hover:text-gray-700 p-1">◀</button>
        <span className="text-xs font-bold text-gray-800">{monthName}</span>
        <button onClick={() => setViewDate(new Date(year, month + 1))} className="text-gray-400 hover:text-gray-700 p-1">▶</button>
      </div>
      <div className="grid grid-cols-7 gap-0.5 text-center text-[9px]">
        {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} className="font-bold text-gray-400 p-1">{d}</div>)}
        {days.map((d, i) => {
          if (!d) return <div key={`e${i}`} />;
          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
          const hasEntry = entryDates.has(dateStr);
          const isSelected = dateStr === selectedDate;
          const isToday = dateStr === todayStr();
          return (
            <button key={d} onClick={() => onSelectDate(dateStr)}
              className={`p-1 rounded-lg text-[10px] font-medium transition-all
                ${isSelected ? 'bg-primary-600 text-white' : ''}
                ${!isSelected && hasEntry ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' : ''}
                ${!isSelected && !hasEntry && isToday ? 'bg-amber-50 text-amber-700 ring-1 ring-amber-300' : ''}
                ${!isSelected && !hasEntry && !isToday ? 'text-gray-600 hover:bg-gray-100' : ''}
              `}>
              {d}
              {hasEntry && !isSelected && <div className="w-1 h-1 bg-emerald-500 rounded-full mx-auto mt-0.5" />}
            </button>
          );
        })}
      </div>
      <div className="flex gap-3 mt-2 text-[9px] text-gray-400">
        <span className="flex items-center gap-1"><span className="w-2 h-2 bg-emerald-100 rounded" /> Has entry</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 bg-primary-600 rounded" /> Selected</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 bg-amber-50 ring-1 ring-amber-300 rounded" /> Today</span>
      </div>
    </div>
  );
}

/* ─── TREND CHART ─── */
function TrendChart({ entries }) {
  if (entries.length < 2) return <p className="text-[11px] text-gray-400 text-center py-4">Need at least 2 diary entries to show trends.</p>;
  const sorted = [...entries].sort((a, b) => a.date.localeCompare(b.date)).slice(-14);
  const metrics = [
    { key: 'energy', label: 'Energy', color: '#3b82f6' },
    { key: 'appetite', label: 'Appetite', color: '#10b981' },
    { key: 'cognition', label: 'Cognition', color: '#8b5cf6' },
    { key: 'pain', label: 'Pain', color: '#ef4444' },
    { key: 'sleepQuality', label: 'Sleep', color: '#f59e0b' },
  ];
  const w = 300, h = 120, pad = 25;
  const xStep = (w - pad * 2) / (sorted.length - 1);
  return (
    <div className="overflow-x-auto mb-3">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-md mx-auto" style={{ minWidth: 280 }}>
        {[0, 5, 10].map(v => (
          <g key={v}>
            <line x1={pad} y1={h - pad - (v / 10) * (h - pad * 2)} x2={w - pad} y2={h - pad - (v / 10) * (h - pad * 2)} stroke="#e5e7eb" strokeWidth="0.5" />
            <text x={pad - 4} y={h - pad - (v / 10) * (h - pad * 2) + 3} textAnchor="end" fontSize="7" fill="#9ca3af">{v}</text>
          </g>
        ))}
        {metrics.map(m => {
          const points = sorted.map((e, i) => `${pad + i * xStep},${h - pad - (e[m.key] / 10) * (h - pad * 2)}`).join(' ');
          return <polyline key={m.key} points={points} fill="none" stroke={m.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />;
        })}
        {sorted.map((e, i) => (
          <text key={i} x={pad + i * xStep} y={h - 5} textAnchor="middle" fontSize="6" fill="#9ca3af">
            {e.date.slice(5)}
          </text>
        ))}
      </svg>
      <div className="flex flex-wrap justify-center gap-3 text-[9px] mt-1">
        {metrics.map(m => <span key={m.key} className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ background: m.color }} />{m.label}</span>)}
      </div>
    </div>
  );
}

/* ─── LOGIN GATE ─── */
function LoginGate({ onAuth }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.toLowerCase().trim() === 'mom' && pass.toLowerCase().trim() === 'mom') {
      localStorage.setItem(AUTH_KEY, 'true');
      onAuth(true);
    } else {
      setErr('Incorrect username or password');
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary-50 to-indigo-50 border border-primary-200 rounded-2xl p-6">
      <div className="flex items-center justify-center mb-4">
        <Lock className="w-8 h-8 text-primary-400" />
      </div>
      <p className="text-center text-sm font-bold text-gray-800 mb-1">Mom's Medical Diary</p>
      <p className="text-center text-[11px] text-gray-500 mb-4">This section is private. Enter credentials to access.</p>
      <form onSubmit={handleLogin} className="space-y-3 max-w-xs mx-auto">
        <input type="text" placeholder="Username" value={user} onChange={e => setUser(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none" />
        <input type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none" />
        {err && <p className="text-[11px] text-red-600 text-center">{err}</p>}
        <button type="submit" className="w-full py-2 bg-primary-600 text-white rounded-lg text-sm font-bold hover:bg-primary-700 transition-colors">
          Unlock Diary
        </button>
      </form>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════ */
export default function SymptomDiary() {
  const [authed, setAuthed] = useState(() => localStorage.getItem(AUTH_KEY) === 'true');
  const [entries, setEntries] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch { return []; }
  });
  const [selectedDate, setSelectedDate] = useState(todayStr());
  const [view, setView] = useState('form'); // form | calendar | trends
  const fileRef = useRef(null);

  // Persist entries
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(entries)); }, [entries]);

  // Current entry for selected date
  const existingIdx = entries.findIndex(e => e.date === selectedDate);
  const currentEntry = existingIdx >= 0 ? entries[existingIdx] : blankEntry(selectedDate);

  const updateField = (field, value) => {
    const updated = { ...currentEntry, [field]: value };
    if (existingIdx >= 0) {
      const copy = [...entries];
      copy[existingIdx] = updated;
      setEntries(copy);
    } else {
      setEntries([...entries, updated]);
    }
  };

  const deleteEntry = () => {
    if (existingIdx >= 0 && confirm('Delete this diary entry?')) {
      setEntries(entries.filter((_, i) => i !== existingIdx));
    }
  };

  // Export
  const handleExport = () => {
    const blob = new Blob([JSON.stringify(entries, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mom_diary_${todayStr()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import
  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (Array.isArray(data)) {
          // Merge: imported entries override existing for same date
          const merged = [...entries];
          data.forEach(imported => {
            const idx = merged.findIndex(m => m.date === imported.date);
            if (idx >= 0) merged[idx] = imported;
            else merged.push(imported);
          });
          merged.sort((a, b) => a.date.localeCompare(b.date));
          setEntries(merged);
          alert(`Imported ${data.length} entries (${merged.length} total).`);
        }
      } catch { alert('Invalid file format. Please use a JSON file exported from this diary.'); }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const logout = () => { localStorage.removeItem(AUTH_KEY); setAuthed(false); };

  return (
    <section id="diary" className="section-card">
      <SectionHeader
        icon={<BookHeart className="w-5 h-5" />}
        title="Mom's Medical Diary"
        subtitle="Daily symptom tracking, medication log, and health trends"
        color="pink"
      />

      {!authed ? (
        <LoginGate onAuth={setAuthed} />
      ) : (
        <>
          {/* Top bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1">
              {[
                { id: 'form', icon: <Plus className="w-3.5 h-3.5" />, label: 'Entry' },
                { id: 'calendar', icon: <Calendar className="w-3.5 h-3.5" />, label: 'Calendar' },
                { id: 'trends', icon: <TrendingUp className="w-3.5 h-3.5" />, label: 'Trends' },
              ].map(t => (
                <button key={t.id} onClick={() => setView(t.id)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold transition-all
                    ${view === t.id ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  {t.icon}{t.label}
                </button>
              ))}
            </div>
            <button onClick={logout} className="text-[9px] text-gray-400 hover:text-red-500 transition-colors">Lock</button>
          </div>

          {/* Calendar view */}
          {view === 'calendar' && (
            <>
              <MiniCalendar entries={entries} selectedDate={selectedDate} onSelectDate={(d) => { setSelectedDate(d); setView('form'); }} />
              <p className="text-[10px] text-gray-400 text-center mb-2">{entries.length} total entries · Tap a green date to view/edit</p>
              <div className="flex gap-2 justify-center">
                <button onClick={handleExport} className="flex items-center gap-1 px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-lg text-[10px] font-bold hover:bg-emerald-200">
                  <Download className="w-3 h-3" /> Export All ({entries.length})
                </button>
                <button onClick={() => fileRef.current?.click()} className="flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-[10px] font-bold hover:bg-blue-200">
                  <Upload className="w-3 h-3" /> Import
                </button>
                <input ref={fileRef} type="file" accept=".json" onChange={handleImport} className="hidden" />
              </div>
            </>
          )}

          {/* Trends view */}
          {view === 'trends' && (
            <>
              <h3 className="text-xs font-bold text-gray-800 mb-2">Last 14 Days — Symptom Trends</h3>
              <TrendChart entries={entries} />
              {entries.length >= 2 && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-[10px] text-gray-600">
                  <p className="font-bold text-gray-700 mb-1">Reading the Chart:</p>
                  <p>• <strong>Energy, Appetite, Cognition, Sleep</strong> — higher is better (aim for 7+)</p>
                  <p>• <strong>Pain</strong> — lower is better (aim for 0–2)</p>
                  <p>• Look for patterns: do symptoms worsen on drug days? Does sleep improve over time?</p>
                  <p>• Share this chart with the IFM doctor at each visit.</p>
                </div>
              )}
            </>
          )}

          {/* Entry form */}
          {view === 'form' && (
            <>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)}
                    className="px-2 py-1 rounded-lg border border-gray-300 text-[11px] font-bold focus:ring-2 focus:ring-primary-300 outline-none" />
                  {existingIdx >= 0 && <span className="text-[9px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">Saved</span>}
                </div>
                {existingIdx >= 0 && (
                  <button onClick={deleteEntry} className="text-red-400 hover:text-red-600 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                )}
              </div>

              {/* Symptom Scales */}
              <C title="How Are You Feeling Today?" defaultOpen={true}>
                <Slider label="Energy Level" value={currentEntry.energy} onChange={v => updateField('energy', v)} lowLabel="Exhausted" highLabel="Full Energy" />
                <Slider label="Appetite" value={currentEntry.appetite} onChange={v => updateField('appetite', v)} lowLabel="No Appetite" highLabel="Very Hungry" />
                <Slider label="Cognition / Clarity" value={currentEntry.cognition} onChange={v => updateField('cognition', v)} lowLabel="Very Foggy" highLabel="Sharp & Clear" />
                <Slider label="Pain Level" value={currentEntry.pain} onChange={v => updateField('pain', v)} lowLabel="No Pain" highLabel="Severe" color="red" />
                <Slider label="Sleep Quality (last night)" value={currentEntry.sleepQuality} onChange={v => updateField('sleepQuality', v)} lowLabel="Terrible" highLabel="Excellent" />
                <Slider label="Nausea" value={currentEntry.nausea} onChange={v => updateField('nausea', v)} lowLabel="None" highLabel="Severe" color="amber" />

                <div className="mb-3">
                  <span className="text-[11px] font-bold text-gray-700 block mb-1">Mood</span>
                  <div className="flex flex-wrap gap-1">
                    {MOODS.map(m => (
                      <button key={m} onClick={() => updateField('mood', m)}
                        className={`px-2 py-1 rounded-full text-[10px] font-medium transition-all
                          ${currentEntry.mood === m ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[11px] font-bold text-gray-700 block mb-1">Weight (lbs)</span>
                    <input type="number" value={currentEntry.weight} onChange={e => updateField('weight', e.target.value)}
                      placeholder="Optional" className="w-full px-2 py-1.5 rounded-lg border border-gray-300 text-[11px] focus:ring-2 focus:ring-primary-300 outline-none" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-700 block mb-1">Bowel Movements</span>
                    <input type="number" min={0} max={10} value={currentEntry.bowelCount} onChange={e => updateField('bowelCount', +e.target.value)}
                      className="w-full px-2 py-1.5 rounded-lg border border-gray-300 text-[11px] focus:ring-2 focus:ring-primary-300 outline-none" />
                  </div>
                </div>

                <div className="mt-3">
                  <span className="text-[11px] font-bold text-gray-700 block mb-1">Stool Type (Bristol Scale)</span>
                  <select value={currentEntry.bowelType} onChange={e => updateField('bowelType', +e.target.value)}
                    className="w-full px-2 py-1.5 rounded-lg border border-gray-300 text-[10px] focus:ring-2 focus:ring-primary-300 outline-none bg-white">
                    {BRISTOL.map(b => <option key={b.v} value={b.v}>{b.label}</option>)}
                  </select>
                </div>
              </C>

              {/* Side Effects */}
              <C title="Side Effects Today">
                <CheckGroup items={SIDE_EFFECTS} selected={currentEntry.sideEffects} onChange={v => updateField('sideEffects', v)} columns={2} />
              </C>

              {/* Medications */}
              <C title="Anti-Tumor Drugs Taken Today">
                <CheckGroup items={MEDICATIONS} selected={currentEntry.medications} onChange={v => updateField('medications', v)} columns={1} />
              </C>

              {/* Supplements */}
              <C title="Supplements & Herbs Taken Today">
                <CheckGroup items={SUPPLEMENTS} selected={currentEntry.supplements} onChange={v => updateField('supplements', v)} columns={2} />
                <div className="mt-2 flex gap-2">
                  <button onClick={() => updateField('supplements', SUPPLEMENTS.map(s => s.id))}
                    className="text-[9px] text-primary-600 font-bold hover:underline">Check All</button>
                  <button onClick={() => updateField('supplements', [])}
                    className="text-[9px] text-gray-400 font-bold hover:underline">Uncheck All</button>
                </div>
              </C>

              {/* Food Log */}
              <C title="Food Log">
                {['breakfast', 'lunch', 'dinner', 'snacks'].map(meal => (
                  <div key={meal} className="mb-2">
                    <span className="text-[11px] font-bold text-gray-700 block mb-1 capitalize">{meal}</span>
                    <textarea value={currentEntry[meal]} onChange={e => updateField(meal, e.target.value)}
                      placeholder={`What did you eat for ${meal}?`} rows={2}
                      className="w-full px-2 py-1.5 rounded-lg border border-gray-300 text-[11px] focus:ring-2 focus:ring-primary-300 outline-none resize-none" />
                  </div>
                ))}
              </C>

              {/* Notes */}
              <C title="Notes — How Was Your Day?" defaultOpen={true}>
                <textarea value={currentEntry.notes} onChange={e => updateField('notes', e.target.value)}
                  placeholder="Anything on your mind? How are you feeling overall? Any concerns? Side effects? Wins? Whatever you want to share..."
                  rows={4}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-[11px] focus:ring-2 focus:ring-primary-300 outline-none resize-none" />
              </C>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-center">
                <Save className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                <p className="text-[11px] text-emerald-700 font-bold">Auto-saved to your browser</p>
                <p className="text-[9px] text-emerald-500">Use the Calendar tab to export/backup your data</p>
              </div>
            </>
          )}
        </>
      )}
      <BackToNav />
    </section>
  );
}
