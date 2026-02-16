import React, { useRef } from 'react';
import { Play, Check, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';
import { useNavigation } from '../contexts/NavigationContext';

const HeroSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const { navigateTo } = useNavigation();
  
  const yHero = useTransform(scrollY, [0, 1000], [0, 400]);
  const yCards = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacityCards = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section ref={ref} className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: yHero }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-steel/5 rounded-full blur-3xl mix-blend-multiply" 
        />
        <motion.div 
          style={{ y: yHero }}
          className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-brand-sage/10 rounded-full blur-3xl mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left: Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl lg:w-1/2 pt-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cloud bg-white/50 backdrop-blur-sm mb-6 lg:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-steel opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-steel"></span>
              </span>
              <span className="text-xs font-semibold text-brand-graphite tracking-wide uppercase">AI Receptionist Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-brand-graphite leading-[1.1] tracking-tight mb-6 lg:mb-8">
              Your business never <span className="text-brand-steel">misses a call.</span>
            </h1>
            
            <p className="text-lg text-brand-graphite/70 mb-8 lg:mb-10 leading-relaxed max-w-md font-light">
              BARPEL.AI is the professional voice agent that answers, qualifies, and schedules. 
              <br className="hidden md:block" /> Calm, reliable, and indistinguishable from human.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Button size="lg" variant="primary" className="group justify-center" onClick={() => navigateTo('signup')}>
                Start Free Trial
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 justify-center" onClick={() => navigateTo('demo')}>
                <Play size={16} fill="currentColor" /> Hear Demo
              </Button>
            </div>

            <div className="mt-10 lg:mt-12 flex items-center gap-6 lg:gap-8 text-sm text-brand-graphite/50 font-medium">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-brand-cloud flex items-center justify-center overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover opacity-80" />
                  </div>
                ))}
              </div>
              <p>Trusted by 500+ businesses</p>
            </div>
          </motion.div>

          {/* Right: UI Mockup */}
          <motion.div 
            style={{ y: yCards, opacity: opacityCards }}
            className="lg:w-1/2 relative w-full max-w-lg lg:max-w-none"
          >
            {/* Background Blob behind Mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-steel/20 to-transparent rounded-full blur-3xl transform scale-90 translate-y-10 -z-10" />

            {/* Main Interface Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
              className="bg-white rounded-2xl shadow-2xl shadow-brand-graphite/10 border border-brand-cloud overflow-hidden z-20 relative"
            >
              <div className="bg-brand-graphite text-white p-4 flex justify-between items-center border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-steel/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-brand-steel rounded-full animate-pulse" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Inbound Call</div>
                    <div className="text-xs text-white/50">Recording in progress...</div>
                  </div>
                </div>
                <div className="text-xs font-mono text-white/40">00:42</div>
              </div>
              
              <div className="p-6 bg-brand-graphite/5 space-y-4">
                {/* Chat Bubbles */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-brand-cloud/50 max-w-[85%]"
                >
                  <p className="text-sm text-brand-graphite">Hi, I'd like to book a viewing for the property on Lekki Phase 1.</p>
                </motion.div>

                <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 1.5 }}
                   className="bg-brand-steel text-white p-4 rounded-2xl rounded-tr-none shadow-md shadow-brand-steel/10 ml-auto max-w-[85%]"
                >
                  <div className="flex items-center gap-2 mb-2 opacity-50">
                    <div className="w-1 h-3 bg-white rounded-full animate-[music_1s_ease-in-out_infinite]" />
                    <div className="w-1 h-4 bg-white rounded-full animate-[music_1.2s_ease-in-out_infinite]" />
                    <div className="w-1 h-2 bg-white rounded-full animate-[music_0.8s_ease-in-out_infinite]" />
                    <span className="text-xs uppercase tracking-wider font-bold">Barpel AI</span>
                  </div>
                  <p className="text-sm leading-relaxed">
                    I can certainly help with that. We have slots available tomorrow at 2 PM or 4 PM. Which works best for you?
                  </p>
                </motion.div>
                
                {/* Action Tag */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 2.5 }}
                   className="flex justify-center"
                >
                  <span className="bg-brand-sage/20 text-brand-graphite text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-2">
                    <Check size={12} className="text-brand-sage" /> Action: Calendar Slot Offered
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Stats Card (Parallax) */}
            <motion.div 
              style={{ y: useTransform(scrollY, [0, 400], [0, -40]) }}
              className="absolute -right-6 -bottom-10 bg-white p-5 rounded-xl shadow-xl border border-brand-cloud z-30 hidden md:block"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-brand-steel text-white rounded-full flex items-center justify-center font-bold">
                  85%
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-graphite">Conversion Rate</div>
                  <div className="text-xs text-brand-graphite/50">vs 15% Voicemail</div>
                </div>
              </div>
              <div className="w-48 h-2 bg-brand-cloud/30 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
                  className="h-full bg-brand-steel" 
                />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;