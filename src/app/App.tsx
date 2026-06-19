import { useState } from 'react';
import { Hero } from './components/Hero';
import { IntroductionSection } from './components/IntroductionSection';
import { ProblemStatement } from './components/ProblemStatement';
import { ObjectiveSection } from './components/ObjectiveSection';
import { MethodologySection } from './components/MethodologySection';
import { AlgorithmSection } from './components/AlgorithmSection';
import { FrameworkSection } from './components/FrameworkSection';
import { InterfaceShowcase } from './components/InterfaceShowcase';
import { ResultsSection } from './components/ResultsSection';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="max-w-7xl mx-auto">
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
          <Hero />
        </section>

        <section id="introduction" className="min-h-screen flex items-center justify-center px-6 py-20">
          <IntroductionSection />
        </section>

        <section id="problem" className="min-h-screen flex items-center justify-center px-6 py-20">
          <ProblemStatement />
        </section>

        <section id="objective" className="min-h-screen flex items-center justify-center px-6 py-20">
          <ObjectiveSection />
        </section>

        <section id="methodology" className="min-h-screen flex items-center justify-center px-6 py-20">
          <MethodologySection />
        </section>

        <section id="algorithm" className="min-h-screen flex items-center justify-center px-6 py-20">
          <AlgorithmSection />
        </section>

        <section id="framework" className="min-h-screen flex items-center justify-center px-6 py-20">
          <FrameworkSection />
        </section>

        <section id="interface" className="min-h-screen flex items-center justify-center px-6 py-20">
          <InterfaceShowcase />
        </section>

        <section id="results" className="min-h-screen flex items-center justify-center px-6 py-20">
          <ResultsSection />
        </section>

        <Footer />
      </div>
    </div>
  );
}
