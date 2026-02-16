import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { useNavigation } from '../contexts/NavigationContext';
import Logo from '../components/Logo';
import { Check } from 'lucide-react';

const Signup: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-brand-cloud max-w-lg w-full"
      >
        <div className="text-center mb-8">
           <h2 className="text-3xl font-display font-bold text-brand-graphite mb-2">Get Started Free</h2>
           <p className="text-brand-graphite/60">14-day free trial. No credit card required.</p>
        </div>

        <div className="space-y-4 mb-8">
          {['Instant AI Number Setup', '200 Free Minutes', 'Basic CRM Integration'].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-brand-graphite/80">
              <div className="w-5 h-5 rounded-full bg-brand-sage/20 flex items-center justify-center text-brand-steel">
                <Check size={12} strokeWidth={3} />
              </div>
              {item}
            </div>
          ))}
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-brand-graphite mb-1">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-brand-cloud focus:border-brand-steel focus:ring-2 focus:ring-brand-steel/20 outline-none" placeholder="John" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-graphite mb-1">Last Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-brand-cloud focus:border-brand-steel focus:ring-2 focus:ring-brand-steel/20 outline-none" placeholder="Doe" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-graphite mb-1">Work Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-brand-cloud focus:border-brand-steel focus:ring-2 focus:ring-brand-steel/20 outline-none" placeholder="john@company.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-graphite mb-1">Password</label>
            <input type="password" className="w-full px-4 py-3 rounded-xl border border-brand-cloud focus:border-brand-steel focus:ring-2 focus:ring-brand-steel/20 outline-none" placeholder="••••••••" />
          </div>
          
          <Button fullWidth onClick={() => alert("Welcome aboard! Check your email to verify.")}>
            Create Account
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-brand-graphite/60">
          Already have an account?{' '}
          <button onClick={() => navigateTo('login')} className="text-brand-steel font-semibold hover:underline">
            Log in
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;