import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Calendar, ShieldCheck, Zap, Globe } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl font-display font-bold text-brand-graphite mb-6">
            Enterprise-grade power.<br/>
            <span className="text-brand-steel">Simplified for you.</span>
          </h2>
          <p className="text-lg text-brand-graphite/60">
            We've packed powerful AI capability into a dashboard that anyone can use. No coding required.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Large Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 row-span-1 bg-white rounded-3xl p-8 shadow-sm border border-brand-cloud overflow-hidden relative group"
          >
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-brand-steel/10 rounded-xl flex items-center justify-center text-brand-steel mb-4">
                  <LayoutDashboard size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-graphite mb-2">Live Command Center</h3>
                  <p className="text-brand-graphite/60">Watch calls happen in real-time. Read transcripts, listen to recordings, and see appointments fill up your calendar instantly.</p>
                </div>
             </div>
             {/* Abstract UI Decoration */}
             <div className="absolute right-0 bottom-0 w-1/2 h-3/4 bg-brand-cloud/20 rounded-tl-3xl translate-y-4 translate-x-4 group-hover:translate-x-2 transition-transform duration-500"></div>
          </motion.div>

          {/* Tall Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-2 bg-brand-graphite rounded-3xl p-8 shadow-xl text-white flex flex-col justify-between relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-32 bg-brand-steel/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="relative z-10">
               <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                  <Zap size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-4">Instant<br/>Setup</h3>
               <p className="text-white/60 mb-8">
                 Get your dedicated business number and start taking calls in less than 15 minutes.
               </p>
               <ul className="space-y-3">
                 {['Choose Number', 'Upload Script', 'Go Live'].map((step, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                     <span className="w-6 h-6 rounded-full bg-brand-steel flex items-center justify-center text-xs font-bold">{i+1}</span>
                     {step}
                   </li>
                 ))}
               </ul>
             </div>
          </motion.div>

          {/* Standard Card 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-brand-cloud flex flex-col justify-between"
          >
             <div className="w-12 h-12 bg-brand-sage/20 rounded-xl flex items-center justify-center text-brand-sage mb-4">
                <Users size={24} />
             </div>
             <div>
               <h3 className="text-xl font-bold text-brand-graphite mb-2">CRM Sync</h3>
               <p className="text-sm text-brand-graphite/60">Push leads directly to HubSpot, Salesforce, or Google Sheets.</p>
             </div>
          </motion.div>

          {/* Standard Card 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-brand-cloud flex flex-col justify-between"
          >
             <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                <Calendar size={24} />
             </div>
             <div>
               <h3 className="text-xl font-bold text-brand-graphite mb-2">Smart Scheduling</h3>
               <p className="text-sm text-brand-graphite/60">Connects to your existing calendar to book slots without conflicts.</p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;