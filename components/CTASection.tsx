import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { useNavigation } from '../contexts/NavigationContext';

const CTASection: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="bg-brand-gradient rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-steel/30"
        >
          {/* Abstract Shapes */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-64 h-64 bg-brand-graphite/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
          />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let Your AI Answer While You Grow.</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Join hundreds of Nigerian businesses automating their reception today. 
              Setup takes less than 15 minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="white" onClick={() => navigateTo('signup')}>Get Started Now</Button>
              <Button size="lg" className="bg-brand-graphite text-white hover:bg-brand-black border-none shadow-none" onClick={() => navigateTo('demo')}>Schedule Demo</Button>
            </div>
            <p className="mt-6 text-sm text-white/60">
              No credit card required for trial • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;