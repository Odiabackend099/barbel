import React from 'react';
import { Mic, Cpu, CalendarCheck, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand-steel font-bold tracking-wider uppercase text-sm">The Solution</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-graphite mt-2 mb-4">Meet Your AI Receptionist</h2>
          <p className="text-brand-graphite/60 max-w-2xl mx-auto">
            A professional voice agent that works 24/7, never takes a sick day, and integrates perfectly with your business workflow.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0 overflow-hidden rounded-full">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-brand-steel/30"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {[
              {
                icon: <Mic size={24} />,
                title: "Inbound Call",
                desc: "Customer calls your line. AI picks up instantly, zero wait time."
              },
              {
                icon: <Cpu size={24} />,
                title: "AI Understands",
                desc: "Natural language processing understands intent, accent, and context."
              },
              {
                icon: <CalendarCheck size={24} />,
                title: "Takes Action",
                desc: "Answers questions, qualifies the lead, or books an appointment."
              },
              {
                icon: <Database size={24} />,
                title: "Data Logged",
                desc: "Call summary and details are instantly synced to your CRM/Dashboard."
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-lg shadow-gray-200/50 border border-brand-cloud flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-brand-cloud rounded-full flex items-center justify-center text-brand-steel mb-4 group-hover:bg-brand-steel group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-graphite mb-2">{step.title}</h3>
                <p className="text-sm text-brand-graphite/60">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-brand-graphite rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
             <h3 className="text-2xl font-bold text-white mb-6">Hear the difference.</h3>
             <motion.div 
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 cursor-pointer"
             >
                <div className="w-10 h-10 bg-brand-steel rounded-full flex items-center justify-center animate-pulse">
                  <Mic size={20} className="text-white" />
                </div>
                <div className="flex-1 text-left mr-8">
                  <div className="h-2 w-48 bg-white/50 rounded mb-2"></div>
                  <div className="h-2 w-32 bg-white/30 rounded"></div>
                </div>
                <button className="text-sm font-bold text-white hover:text-brand-sage transition-colors">
                  Play Sample
                </button>
             </motion.div>
          </div>
          {/* Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-steel/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;