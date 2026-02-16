import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-graphite text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            The Cost of "Leave a Message"
          </motion.h2>
          <p className="text-brand-silver max-w-xl mx-auto text-lg">
            Most businesses lose 30% of revenue simply by not picking up the phone instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
          {/* Divider Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          {/* Old Way */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-brand-silver text-sm uppercase tracking-widest font-bold mb-8">Without Barpel</div>
            
            {[
              "Calls go to voicemail after 5pm",
              "Front desk overwhelmed by simple FAQs",
              "Lost leads due to busy signals",
              "Unorganized sticky notes & missed details"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <XCircle className="text-red-500/50 mt-1 flex-shrink-0 group-hover:text-red-500 transition-colors" size={24} />
                <p className="text-lg text-brand-silver/80 group-hover:text-white transition-colors">{item}</p>
              </div>
            ))}
          </motion.div>

          {/* New Way */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-brand-steel text-sm uppercase tracking-widest font-bold mb-8">With Barpel</div>
            
            {[
              "Instant answer, 24/7/365",
              "Unlimited concurrent calls handled",
              "Leads qualified & synced to CRM instantly",
              "Appointments booked while you sleep"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <CheckCircle className="text-brand-steel mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-white font-medium">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;