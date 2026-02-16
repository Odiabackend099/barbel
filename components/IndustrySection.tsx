import React from 'react';
import { Home, Car, Stethoscope, Briefcase, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const IndustrySection: React.FC = () => {
  const industries = [
    { icon: <Home size={24} />, name: "Real Estate", benefit: "Schedule viewings instantly." },
    { icon: <Car size={24} />, name: "Auto Dealerships", benefit: "Book test drives & service." },
    { icon: <Stethoscope size={24} />, name: "Clinics", benefit: "Manage patient appointments." },
    { icon: <Briefcase size={24} />, name: "Service Business", benefit: "Quote estimates 24/7." },
    { icon: <ShoppingBag size={24} />, name: "Retail & SMEs", benefit: "Answer inventory FAQs." },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-3xl font-bold text-brand-graphite mb-4">Built for Your Industry</h2>
              <p className="text-brand-graphite/60 max-w-xl">
                Our AI models are trained on industry-specific scenarios to ensure accurate, professional handling of every conversation.
              </p>
           </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {industries.map((ind, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-brand-cloud hover:shadow-lg hover:shadow-brand-steel/10 hover:border-brand-steel/50 transition-all group cursor-default"
            >
              <div className="w-12 h-12 bg-brand-cloud text-brand-graphite rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-steel group-hover:text-white transition-colors">
                {ind.icon}
              </div>
              <h3 className="font-bold text-brand-graphite mb-1">{ind.name}</h3>
              <p className="text-xs text-brand-graphite/50">{ind.benefit}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySection;