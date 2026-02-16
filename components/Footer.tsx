import React from 'react';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import Logo from './Logo';
import { useNavigation } from '../contexts/NavigationContext';

const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-brand-cloud">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-sm text-brand-graphite/60 leading-relaxed mb-6">
              The professional AI receptionist that gives your business a voice, 24/7.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-brand-cloud/30 flex items-center justify-center text-brand-graphite hover:bg-brand-steel hover:text-white transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-graphite mb-6">Product</h4>
            <ul className="space-y-3 text-sm text-brand-graphite/60">
              <li><button onClick={() => navigateTo('home', '#features')} className="hover:text-brand-steel transition-colors text-left">Features</button></li>
              <li><button onClick={() => navigateTo('home', '#pricing')} className="hover:text-brand-steel transition-colors text-left">Pricing</button></li>
              <li><button onClick={() => navigateTo('home', '#security')} className="hover:text-brand-steel transition-colors text-left">Security</button></li>
              <li><button onClick={() => navigateTo('demo')} className="hover:text-brand-steel transition-colors text-left">Demo</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-graphite mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-brand-graphite/60">
              <li><button onClick={() => navigateTo('home')} className="hover:text-brand-steel transition-colors text-left">About</button></li>
              <li><button onClick={() => navigateTo('home')} className="hover:text-brand-steel transition-colors text-left">Blog</button></li>
              <li><button onClick={() => navigateTo('home')} className="hover:text-brand-steel transition-colors text-left">Careers</button></li>
              <li><button onClick={() => navigateTo('home')} className="hover:text-brand-steel transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-graphite mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-brand-graphite/60">
              <li><button onClick={() => navigateTo('privacy')} className="hover:text-brand-steel transition-colors text-left">Privacy</button></li>
              <li><button onClick={() => navigateTo('terms')} className="hover:text-brand-steel transition-colors text-left">Terms</button></li>
              <li><button onClick={() => navigateTo('privacy')} className="hover:text-brand-steel transition-colors text-left">Cookie Policy</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-cloud pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-graphite/40">
          <p>&copy; {new Date().getFullYear()} BARPEL AI. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;