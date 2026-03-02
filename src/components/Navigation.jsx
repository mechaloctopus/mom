import React, { useState, useEffect } from 'react';
import {
  Menu, X, Heart, Brain, Pill, Shield, Beaker, Leaf,
  Apple, FlaskConical, AlertTriangle, Microscope,
  Stethoscope, ChevronRight, Home, ClipboardList, FileText
} from 'lucide-react';

const sections = [
  { id: 'overview', label: 'Overview', icon: <Home className="w-4 h-4" />, color: 'text-primary-600' },
  { id: 'chemo', label: 'Standard Treatment', icon: <Stethoscope className="w-4 h-4" />, color: 'text-red-600' },
  { id: 'biopsy', label: 'Biopsy Considerations', icon: <Microscope className="w-4 h-4" />, color: 'text-amber-600' },
  { id: 'fenbendazole', label: 'Fenbendazole', icon: <Pill className="w-4 h-4" />, color: 'text-blue-600' },
  { id: 'ivermectin', label: 'Ivermectin', icon: <FlaskConical className="w-4 h-4" />, color: 'text-purple-600' },
  { id: 'mebendazole', label: 'Mebendazole', icon: <Beaker className="w-4 h-4" />, color: 'text-teal-600' },
  { id: 'combination', label: 'Combination Therapy', icon: <Shield className="w-4 h-4" />, color: 'text-indigo-600' },
  { id: 'safety', label: 'Safety & Toxicity', icon: <AlertTriangle className="w-4 h-4" />, color: 'text-orange-600' },
  { id: 'lionsmane', label: "Lion's Mane", icon: <Brain className="w-4 h-4" />, color: 'text-amber-600' },
  { id: 'diet', label: 'Diet & Nutrition', icon: <Apple className="w-4 h-4" />, color: 'text-green-600' },
  { id: 'cannabis', label: 'Cannabis Research', icon: <Leaf className="w-4 h-4" />, color: 'text-emerald-600' },
  { id: 'probiotics', label: 'Probiotics & Gut Health', icon: <Heart className="w-4 h-4" />, color: 'text-pink-600' },
  { id: 'medical', label: "Mom's Medical Reports", icon: <FileText className="w-4 h-4" />, color: 'text-blue-600' },
  { id: 'plan', label: "Josh's Proposed Plan", icon: <ClipboardList className="w-4 h-4" />, color: 'text-primary-600' },
];

export default function Navigation({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 safe-area-top">
        <div className="flex items-center justify-between px-4 py-3 max-w-lg mx-auto">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-gray-900 leading-tight">Mom's Health Research</h1>
              <p className="text-[10px] text-gray-400 font-medium">Family Resource Guide</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5 text-gray-600" /> : <Menu className="w-5 h-5 text-gray-600" />}
          </button>
        </div>
      </header>

      {/* Slide-over menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <div
            className="absolute right-0 top-0 bottom-0 w-[280px] bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pt-20 pb-8 px-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-4">Table of Contents</p>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={`nav-link w-full text-left ${activeSection === section.id ? 'active' : ''}`}
                  >
                    <span className={section.color}>{section.icon}</span>
                    <span className="flex-1">{section.label}</span>
                    <ChevronRight className="w-3 h-3 text-gray-300" />
                  </button>
                ))}
              </nav>
              <div className="mt-6 mx-4 p-3 bg-amber-50 border border-amber-100 rounded-xl">
                <p className="text-[10px] text-amber-700 leading-relaxed font-medium">
                  <strong>Disclaimer:</strong> This is a family research resource. 
                  Alternative approaches are not mainstream-approved. Always consult qualified medical professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { sections };
