import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import ClientBrandWall from './components/ClientBrandWall';
import WhyAgenciesFail from './components/WhyAgenciesFail';
import BlueprintGrid from './components/BlueprintGrid';
import VarniGrowthEngine from './components/VarniGrowthEngine';
import Services from './components/Services';
import WebsiteFrontSection from './components/WebsiteFrontSection';
import PrintDistributionFrontSection from './components/PrintDistributionFrontSection';
import Industries from './components/Industries';
import CaseStudies from './components/CaseStudies';
import HowWeWork from './components/HowWeWork';
import ROICalculator from './components/ROICalculator';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <div className="bg-navy text-white min-h-screen selection:bg-teal-500/30 selection:text-teal-200">
      <NavigationBar />
      
      <main>
        <Hero />
        <ClientBrandWall />
        <WhyAgenciesFail />
        <BlueprintGrid />
        <VarniGrowthEngine />
        <Services />
        <WebsiteFrontSection />
        <PrintDistributionFrontSection />
        <Industries />
        <CaseStudies />
        <HowWeWork />
        <ROICalculator />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

