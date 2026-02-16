import React from 'react';
import { motion } from 'framer-motion';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: "Forward Your Calls",
      desc: "We give you a dedicated number. You forward your missed calls (or all calls) to it.",
      number: "01"
    },
    {
      title: "AI Takes Over",
      desc: "Our agent answers immediately, using your business knowledge base to chat naturally.",
      number: "02"
    },
    {
      title: "Results Delivered",
      desc: "You get a text/email summary instantly. Appointments appear on your calendar.",
      number: "03"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-brand-cloud/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <div className="md:w-1/3 sticky top-32">
            <h2 className="text-4xl font-display font-bold text-brand-graphite mb-6">
              How it works
            </h2>
            <p className="text-brand-graphite/60 text-lg">
              Complex technology, invisible to you. <br/>
              It just feels like hiring the world's best receptionist.
            </p>
          </div>

          <div className="md:w-2/3 space-y-12 relative">
             {/* Vertical Line */}
             <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-cloud -z-10 md:left-8"></div>

             {steps.map((step, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ delay: idx * 0.2 }}
                 className="flex gap-6 md:gap-10 items-start bg-white py-4"
               >
                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border border-brand-cloud flex items-center justify-center flex-shrink-0 shadow-sm text-lg font-bold text-brand-steel">
                   {step.number}
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-brand-graphite mb-3">{step.title}</h3>
                   <p className="text-brand-graphite/60 leading-relaxed text-lg">{step.desc}</p>
                 </div>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;