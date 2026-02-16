import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import { useNavigation } from '../contexts/NavigationContext';

const PricingSection: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section className="py-32 bg-brand-graphite text-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Transparent Pricing</h2>
          <p className="text-brand-silver">No setup fees. No contracts. Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          
          {/* Starter */}
          <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
             <h3 className="font-display font-bold text-xl mb-2">Starter</h3>
             <div className="text-3xl font-bold mb-6">₦25,000<span className="text-sm font-normal text-brand-silver">/mo</span></div>
             <p className="text-sm text-brand-silver mb-8">For solo entrepreneurs.</p>
             <ul className="space-y-4 mb-8 text-sm">
               <li className="flex gap-3"><Check size={18} className="text-brand-steel"/> 200 Minutes/mo</li>
               <li className="flex gap-3"><Check size={18} className="text-brand-steel"/> 1 AI Number</li>
               <li className="flex gap-3"><Check size={18} className="text-brand-steel"/> Basic Call Forwarding</li>
             </ul>
             <Button fullWidth variant="outline" className="border-white/20 text-white hover:bg-white hover:text-brand-graphite" onClick={() => navigateTo('signup')}>Start Trial</Button>
          </div>

          {/* Growth (Highlighted) */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 rounded-3xl bg-brand-steel relative shadow-2xl shadow-brand-steel/20"
          >
             <div className="absolute top-0 right-0 bg-white/20 px-4 py-1 rounded-bl-xl rounded-tr-xl text-xs font-bold tracking-wide uppercase">Best Value</div>
             <h3 className="font-display font-bold text-2xl mb-2">Business</h3>
             <div className="text-4xl font-bold mb-6">₦60,000<span className="text-base font-normal text-blue-100">/mo</span></div>
             <p className="text-sm text-blue-100 mb-8">For growing SMEs.</p>
             <ul className="space-y-4 mb-10 text-sm">
               <li className="flex gap-3"><Check size={18} className="text-white"/> 1,000 Minutes/mo</li>
               <li className="flex gap-3"><Check size={18} className="text-white"/> CRM Integration</li>
               <li className="flex gap-3"><Check size={18} className="text-white"/> Appointment Booking</li>
               <li className="flex gap-3"><Check size={18} className="text-white"/> Call Transcripts</li>
             </ul>
             <Button fullWidth className="bg-white text-brand-steel hover:bg-gray-100" onClick={() => navigateTo('signup')}>Start Free Trial</Button>
          </motion.div>

          {/* Enterprise */}
          <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
             <h3 className="font-display font-bold text-xl mb-2">Enterprise</h3>
             <div className="text-3xl font-bold mb-6">Custom</div>
             <p className="text-sm text-brand-silver mb-8">For high volume needs.</p>
             <ul className="space-y-4 mb-8 text-sm">
               <li className="flex gap-3"><Check size={18} className="text-brand-steel"/> Unlimited Minutes</li>
               <li className="flex gap-3"><Check size={18} className="text-brand-steel"/> Custom Voice Clone</li>
               <li className="flex gap-3"><Check size={18} className="text-brand-steel"/> API Access</li>
             </ul>
             <Button fullWidth variant="outline" className="border-white/20 text-white hover:bg-white hover:text-brand-graphite" onClick={() => navigateTo('demo')}>Contact Sales</Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;