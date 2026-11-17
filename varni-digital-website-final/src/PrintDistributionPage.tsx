import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import PrintDistribution from './components/PrintDistribution';

export default function PrintDistributionPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-[#030712] text-[#F9FAFB] min-h-screen selection:bg-teal-500/30 selection:text-teal-200">
      <NavigationBar />
      
      <main className="pt-20">
        <PrintDistribution />
      </main>

      <Footer />
    </div>
  );
}
