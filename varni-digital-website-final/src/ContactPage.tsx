import { useEffect } from 'react';
import { Check, Mail, Phone } from 'lucide-react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import EnquiryForm from './components/EnquiryForm';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Book a Free Strategy Call | Varni Digital';
  }, []);

  return (
    <div className="bg-navy-deep text-white min-h-screen selection:bg-teal-500/30 selection:text-teal-200">
      <NavigationBar />
      <main className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 lg:pt-8">
            <span className="badge-primary mb-6">Customer Enquiry</span>
            <h1 className="text-4xl md:text-5xl leading-tight mb-6">
              Let's build your <span className="text-teal-400 italic">growth system.</span>
            </h1>
            <p className="text-lg text-gray-300/80 font-sans mb-8">
              Tell us about your business, goals and marketing needs. We'll come back with a clear strategy — social
              media, content, paid ads, websites, SEO or full digital marketing.
            </p>
            <ul className="space-y-3 font-sans text-gray-300 mb-10">
              {['No obligation', '15-minute consultation', 'Australia-wide', 'Actionable recommendations'].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-teal-400" /> {t}
                </li>
              ))}
            </ul>
            <div className="space-y-3 font-sans text-sm">
              <a href="tel:0416824965" className="flex items-center gap-3 text-white/80 hover:text-teal-400">
                <Phone className="w-4 h-4 text-teal-400" /> 0416 824 965
              </a>
              <a href="mailto:admin@varnidigital.com.au" className="flex items-center gap-3 text-white/80 hover:text-teal-400">
                <Mail className="w-4 h-4 text-teal-400" /> admin@varnidigital.com.au
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 glass-panel-heavy rounded-2xl p-6 md:p-10 border border-teal-500/20">
            <EnquiryForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
