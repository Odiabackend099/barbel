import React, { useRef } from 'react';
import { Shield, Lock, Server } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TrustSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={ref} className="py-20 bg-brand-graphite text-white relative overflow-hidden" id="security">
      {/* Background patterns */}
      <motion.div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          y: yBg,
          backgroundImage: 'radial-gradient(#3EB4A8 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Built for Reliability & Security</h2>
            <p className="text-brand-silver mb-8 text-lg">
              We understand that your business voice data is sensitive. BARPEL.AI is engineered with enterprise-grade security standards suitable for the Nigerian market and beyond.
            </p>
            <ul className="space-y-4">
              {[
                "End-to-end data encryption",
                "NDPR Compliant data handling",
                "99.9% Uptime Guarantee",
                "Local latency optimization"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Shield size={20} className="text-brand-steel" />
                  <span className="font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              { icon: Lock, title: "Encrypted", sub: "AES-256 Standard" },
              { icon: Server, title: "Secure Host", sub: "AWS Infrastructure" },
              { icon: Shield, title: "Compliant", sub: "Data Protection" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-xl text-center hover:bg-white/20 transition-colors">
                <item.icon className="mx-auto text-brand-steel mb-4" size={32} />
                <div className="font-bold text-lg mb-1">{item.title}</div>
                <div className="text-xs text-brand-silver">{item.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;