import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { useNavigation } from '../contexts/NavigationContext';
import Logo from '../components/Logo';

const Login: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-brand-cloud max-w-md w-full"
      >
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <h2 className="text-2xl font-bold text-center text-brand-graphite mb-2">Welcome back</h2>
        <p className="text-center text-brand-graphite/60 mb-8">Login to your command center</p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-brand-graphite mb-1">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-brand-cloud focus:border-brand-steel focus:ring-2 focus:ring-brand-steel/20 outline-none transition-all"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-graphite mb-1">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl border border-brand-cloud focus:border-brand-steel focus:ring-2 focus:ring-brand-steel/20 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          <div className="flex justify-end">
            <a href="#" className="text-sm text-brand-steel hover:underline">Forgot password?</a>
          </div>
          <Button fullWidth onClick={() => alert("This is a demo! Login functionality coming soon.")}>
            Log In
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-brand-graphite/60">
          Don't have an account?{' '}
          <button onClick={() => navigateTo('signup')} className="text-brand-steel font-semibold hover:underline">
            Sign up
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;