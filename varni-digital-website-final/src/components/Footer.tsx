import { Mail, MapPin, Phone } from 'lucide-react';
import logoImage from '../assets/images/varni_digital_logo_1781071105285.png';

export default function Footer() {
  return (
    <footer className="bg-navy-deep pt-24 pb-8 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 */}
          <div>
            <div className="mb-6">
               <img src="/varni-logo.png" alt="VARNI DIGITAL" className="h-10 object-contain" onError={(e) => { e.currentTarget.src = logoImage; }} />
            </div>
            <p className="text-gray-300 opacity-60 text-sm leading-[1.6] mb-6">
              Varni Digital & Marketing Solutions. We build predictable revenue acquisition systems and high-converting architectures for Australian businesses.
            </p>
            <div className="flex gap-4 mb-8">
               {/* Social Icons Placeholder */}
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors text-gray-400">IN</a>
               <a href="https://www.facebook.com/a.s.patel.867875/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors text-gray-400">FB</a>
               <a href="https://www.instagram.com/varni_digital_official/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors text-gray-400">IG</a>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }} className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-white uppercase tracking-wider">Subscribe to Newsletter</label>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  required
                  className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-teal-500 w-full"
                />
                <button type="submit" className="bg-teal-500 hover:bg-teal-400 text-navy font-bold px-4 py-2 rounded text-sm transition-colors uppercase tracking-wider">
                  Join
                </button>
              </div>
            </form>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="/website" className="hover:text-teal-400 transition-colors">Website Creation & Management</a></li>
              <li><a href="/social-media" className="hover:text-teal-400 transition-colors">Social Media Marketing</a></li>
              <li><a href="/print-distribution" className="hover:text-teal-400 transition-colors">Print & Letterbox Distribution</a></li>
              <li><a href="/#services" className="hover:text-teal-400 transition-colors">Google Ads Management</a></li>
              <li><a href="/#services" className="hover:text-teal-400 transition-colors">Meta Ads System</a></li>
              <li><a href="/website#website-services" className="hover:text-teal-400 transition-colors">SEO & Content</a></li>
              <li><a href="/website#infrastructure" className="hover:text-teal-400 transition-colors">CRM Automation</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Industries</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="/#industries" className="hover:text-teal-400 transition-colors">Construction & Builders</a></li>
              <li><a href="/#industries" className="hover:text-teal-400 transition-colors">Automotive & Mechanics</a></li>
              <li><a href="/#industries" className="hover:text-teal-400 transition-colors">Commercial Cleaning</a></li>
              <li><a href="/#industries" className="hover:text-teal-400 transition-colors">Healthcare & Clinics</a></li>
              <li><a href="/#industries" className="hover:text-teal-400 transition-colors">Local Tradeservices</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                <a href="tel:0416824965" className="hover:text-white transition-colors">0416 824 965</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:admin@varnidigital.com.au" className="hover:text-white transition-colors break-all">admin@varnidigital.com.au</a>
                  <a href="mailto:varni.pd1@gmail.com" className="hover:text-teal-400 transition-colors break-all text-xs text-gray-400">
                    varni.pd1@gmail.com <span className="text-teal-500">(Print Quote)</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/ZHgZ5cmiUovmLNXw6" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                  121 Hummingbird Boulevard<br/><span className="text-gray-500 mt-1 block">Tarneit VIC 3029</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>Building growth systems for Australian businesses that want measurable results, not marketing reports.</p>
          <div className="flex gap-6">
            <p>© 2026 Varni Digital & Marketing Solutions.</p>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
