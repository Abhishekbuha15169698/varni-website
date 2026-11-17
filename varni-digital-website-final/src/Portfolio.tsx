import { useEffect } from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import PortfolioHero from './components/portfolio/PortfolioHero';
import PerformanceCounter from './components/portfolio/PerformanceCounter';
import CaseStudyShowcase from './components/portfolio/CaseStudyShowcase';
import ClientResultsTimeline from './components/portfolio/ClientResultsTimeline';
import VideoTestimonialsSection from './components/portfolio/VideoTestimonialsSection';
import TechnologyStack from './components/portfolio/TechnologyStack';
import TerritoryLockCTA from './components/portfolio/TerritoryLockCTA';
import HowWeHelp from './components/portfolio/HowWeHelp';

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-navy-deep text-white min-h-screen selection:bg-teal-500/30 selection:text-teal-200">
      <NavigationBar />
      
      <main className="pt-24">
        <PortfolioHero />
        <PerformanceCounter />
        <CaseStudyShowcase />
        <ClientResultsTimeline />
        <VideoTestimonialsSection />
        <TechnologyStack />
        <HowWeHelp />
        <TerritoryLockCTA />
      </main>

      <Footer />
    </div>
  );
}


