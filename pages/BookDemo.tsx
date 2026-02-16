import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Calendar, Clock, Globe } from 'lucide-react';

const BookDemo: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-brand-cloud">
        
        {/* Info Side */}
        <div className="md:w-1/3 p-8 bg-brand-graphite text-white">
          <h2 className="text-2xl font-bold mb-6">Barpel Product Demo</h2>
          <div className="space-y-6 text-brand-silver">
             <div className="flex items-center gap-3">
               <Clock size={20} />
               <span>30 min</span>
             </div>
             <div className="flex items-center gap-3">
               <Globe size={20} />
               <span>Google Meet</span>
             </div>
             <p className="leading-relaxed pt-4 border-t border-white/10">
               Book a time to speak with our experts. We will show you how to:
               <ul className="list-disc ml-5 mt-4 space-y-2">
                 <li>Set up your AI voice</li>
                 <li>Integrate with your CRM</li>
                 <li>Review call analytics</li>
               </ul>
             </p>
          </div>
        </div>

        {/* Calendar Side (Mock) */}
        <div className="md:w-2/3 p-8">
           <h3 className="text-xl font-bold mb-6 text-brand-graphite">Select a Date & Time</h3>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mock Date Picker */}
              <div className="bg-brand-cloud/20 rounded-xl p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold">August 2025</span>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-200 rounded">&lt;</button>
                    <button className="p-1 hover:bg-gray-200 rounded">&gt;</button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                  {['S','M','T','W','T','F','S'].map(d => <span key={d} className="text-gray-400 py-2">{d}</span>)}
                  {Array.from({length: 31}, (_, i) => i+1).map(d => (
                    <button key={d} className={`py-2 rounded-full hover:bg-brand-steel/10 hover:text-brand-steel ${d === 15 ? 'bg-brand-steel text-white' : ''}`}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="space-y-3">
                <div className="text-sm font-medium mb-2">Wednesday, Aug 15</div>
                {['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'].map(time => (
                  <button key={time} className="w-full py-2 px-4 border border-brand-steel text-brand-steel rounded-lg hover:bg-brand-steel hover:text-white transition-colors font-medium">
                    {time}
                  </button>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;