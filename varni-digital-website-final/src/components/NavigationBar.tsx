import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImage from '../assets/images/varni_digital_logo_1781071105285.png';

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/#' + id);
      setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-deep/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          <Link to="/" className="font-sans font-[800] tracking-[-1px] text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-400 flex items-center cursor-pointer relative z-50">
             VARNI DIGITAL
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 px-4 py-2.5">
            <a href="#growth-engine" onClick={(e) => scrollToSection(e, 'growth-engine')} className="uppercase tracking-[1px] text-xs font-[600] text-white/70 hover:text-white transition-colors whitespace-nowrap">Growth Engine</a>
            <Link to="/social-media" className="uppercase tracking-[1px] text-xs font-[600] text-white/70 hover:text-white transition-colors whitespace-nowrap">Social Media</Link>
            <Link to="/website" className="uppercase tracking-[1px] text-xs font-[600] text-white/70 hover:text-white transition-colors whitespace-nowrap">Website</Link>
            <Link to="/print-distribution" className="uppercase tracking-[1px] text-xs font-[600] text-white/70 hover:text-white transition-colors whitespace-nowrap">Print & Drop</Link>
            <a href="#case-studies" onClick={(e) => scrollToSection(e, 'case-studies')} className="uppercase tracking-[1px] text-xs font-[600] text-white/70 hover:text-white transition-colors whitespace-nowrap">Case Studies</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="uppercase tracking-[1px] text-xs font-[600] text-white/70 hover:text-white transition-colors whitespace-nowrap">Contact</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/contact" className="btn-secondary">
              Start Project
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-gray-300 hover:text-white p-2 relative z-50 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`md:hidden fixed inset-0 bg-navy/95 backdrop-blur-2xl transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-20 overflow-y-auto`}>
        <div className="flex flex-col items-center justify-center min-h-full gap-8 p-6 text-center">
          <a href="#growth-engine" onClick={(e) => scrollToSection(e, 'growth-engine')} className="text-2xl font-display font-medium text-white hover:text-teal-400 transition-colors uppercase tracking-widest">Growth Engine</a>
          <a href="#framework" onClick={(e) => scrollToSection(e, 'framework')} className="text-2xl font-display font-medium text-white hover:text-teal-400 transition-colors uppercase tracking-widest">Systems</a>
          <Link to="/social-media" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-medium text-white hover:text-teal-400 transition-colors uppercase tracking-widest">Social Media</Link>
          <Link to="/website" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-medium text-white hover:text-teal-400 transition-colors uppercase tracking-widest">Website</Link>
          <Link to="/print-distribution" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-medium text-white hover:text-teal-400 transition-colors uppercase tracking-widest">Print & Distribution</Link>
          <a href="#case-studies" onClick={(e) => scrollToSection(e, 'case-studies')} className="text-2xl font-display font-medium text-white hover:text-teal-400 transition-colors uppercase tracking-widest">Case Studies</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-2xl font-display font-medium text-white hover:text-teal-400 transition-colors uppercase tracking-widest">Contact</a>
          
          <div className="w-full h-px bg-white/10 my-4" />
          
          <a href="tel:0416824965" className="text-xl font-bold text-gray-300">0416 824 965</a>
          <a href="/contact" className="bg-teal-500 hover:bg-teal-400 text-navy font-bold px-8 py-4 rounded-xl w-full text-lg shadow-[0_0_20px_rgba(20,184,166,0.3)] inline-block mt-4">
            Book Discovery Call
          </a>
        </div>
      </div>
    </nav>
  );
}
