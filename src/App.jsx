import React, { useState, useEffect } from 'react';
import { Heart, ChevronUp } from 'lucide-react';
import Navigation from './components/Navigation';
import Overview from './sections/Overview';
import Chemotherapy from './sections/Chemotherapy';
import Biopsy from './sections/Biopsy';
import Benzimidazoles from './sections/Benzimidazoles';
import Ivermectin from './sections/Ivermectin';
import Combination from './sections/Combination';
import LionsMane from './sections/LionsMane';
import Cannabis from './sections/Cannabis';
import Probiotics from './sections/Probiotics';
import SleepApnea from './sections/SleepApnea';
import NutritionProtocol from './sections/NutritionProtocol';
import MedicalReports from './sections/MedicalReports';
import ProposedPlan from './sections/ProposedPlan';
import DrugProtocol from './sections/DrugProtocol';
import ShoppingList from './sections/ShoppingList';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-30 w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-200 flex items-center justify-center hover:bg-primary-700 transition-colors"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}

function QuickNav() {
  const sections = [
    { id: 'overview', emoji: '📋', label: 'Overview' },
    { id: 'chemo', emoji: '💊', label: 'Chemo' },
    { id: 'biopsy', emoji: '🔬', label: 'Biopsy' },
    { id: 'benzimidazoles', emoji: '�', label: 'Benzimidazoles' },
    { id: 'ivermectin', emoji: '🧪', label: 'Ivermectin' },
    { id: 'combination', emoji: '🛡️', label: 'Combo' },
    { id: 'lionsmane', emoji: '🧠', label: "Lion's Mane" },
    { id: 'cannabis', emoji: '🌿', label: 'Cannabis' },
    { id: 'probiotics', emoji: '❤️', label: 'Probiotics' },
    { id: 'sleepapnea', emoji: '😴', label: 'Sleep & Brain' },
    { id: 'nutrition', emoji: '🥗', label: 'Nutrition' },
    { id: 'medical', emoji: '🏥', label: 'Medical Reports' },
    { id: 'drugprotocol', emoji: '�', label: 'Drug Protocol' },
    { id: 'shopping', emoji: '🛒', label: 'Shopping List' },
    { id: 'plan', emoji: '📝', label: 'Care Protocol' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="section-card">
      <h3 className="text-sm font-bold text-gray-900 mb-3">Quick Navigation</h3>
      <div className="grid grid-cols-3 gap-2">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="flex flex-col items-center gap-1 p-3 rounded-xl bg-gray-50 hover:bg-primary-50 hover:text-primary-700 transition-all text-gray-600"
          >
            <span className="text-lg">{s.emoji}</span>
            <span className="text-[10px] font-semibold leading-tight text-center">{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const sectionIds = [
      'overview', 'chemo', 'biopsy', 'benzimidazoles', 'ivermectin',
      'combination', 'lionsmane', 'cannabis', 'probiotics',
      'sleepapnea', 'nutrition', 'medical', 'drugprotocol', 'shopping', 'plan'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeSection={activeSection} />

      {/* Main content */}
      <main className="pt-16 pb-20 px-4 max-w-lg mx-auto">
        {/* Hero */}
        <div className="mt-4 mb-6">
          <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-800 rounded-2xl p-6 text-white shadow-xl shadow-primary-200/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Mom's Health Research</h1>
                <p className="text-xs text-white/80 font-medium">Family Resource & Treatment Guide</p>
              </div>
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              Research, medical records, sourced studies, and a proposed care protocol — 
              compiled so our family can navigate treatment decisions with full transparency.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-2.5 py-1 rounded-full bg-white/15 text-[10px] font-semibold">Medical Records</span>
              <span className="px-2.5 py-1 rounded-full bg-white/15 text-[10px] font-semibold">70+ Sourced Studies</span>
              <span className="px-2.5 py-1 rounded-full bg-white/15 text-[10px] font-semibold">Treatment Options</span>
              <span className="px-2.5 py-1 rounded-full bg-white/15 text-[10px] font-semibold">Care Protocol</span>
            </div>
          </div>
        </div>

        {/* Disclaimer banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4">
          <p className="text-xs text-amber-800 leading-relaxed font-medium">
            <strong>⚠️ Important Disclaimer:</strong> This resource is for family research purposes only. 
            Alternative treatments discussed here are not mainstream-approved. All claims are linked to sources. 
            Always consult with qualified medical professionals before making treatment decisions. We have 
            contacted doctors specializing in integrative approaches for guidance.
          </p>
        </div>

        <QuickNav />

        {/* All sections */}
        <div className="space-y-4 mt-4">
          <Overview />
          <Chemotherapy />
          <Biopsy />
          <Benzimidazoles />
          <Ivermectin />
          <Combination />
          <LionsMane />
          <Cannabis />
          <Probiotics />
          <SleepApnea />
          <NutritionProtocol />
          <MedicalReports />
          <DrugProtocol />
          <ShoppingList />
          <ProposedPlan />
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center pb-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <Heart className="w-6 h-6 text-primary-500 mx-auto mb-2" />
            <p className="text-xs text-gray-500 leading-relaxed">
              Made with love for our family. This resource is continuously updated as new information 
              becomes available. All studies and sources are linked for verification.
            </p>
            <p className="text-[10px] text-gray-400 mt-3">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </footer>
      </main>

      <ScrollToTop />
    </div>
  );
}
