import { useEffect } from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import SocialMediaMarketing from './components/SocialMediaMarketing';

export default function SocialMediaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-navy-deep text-white min-h-screen selection:bg-teal-500/30 selection:text-teal-200">
      <NavigationBar />
      
      <main className="pt-24">
        <SocialMediaMarketing />
      </main>

      <Footer />
    </div>
  );
}
