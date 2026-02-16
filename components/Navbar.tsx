import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Button from './Button';
import Logo from './Logo';
import { useNavigation } from '../contexts/NavigationContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { navigateTo } = useNavigation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    navigateTo('home', `#${sectionId}`);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md py-4 border-b border-brand-cloud/50 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button onClick={() => navigateTo('home')} className="flex items-center group z-50 relative focus:outline-none">
              <Logo />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {['Features', 'How it Works', 'Pricing', 'Security'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => handleNavClick(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="text-sm font-medium text-brand-graphite hover:text-brand-steel transition-colors relative"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => navigateTo('login')}
                className="text-sm font-semibold text-brand-graphite hover:text-brand-steel transition-colors"
              >
                Log In
              </button>
              <Button size="sm" variant="primary" onClick={() => navigateTo('signup')}>Get Started</Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-brand-graphite z-50 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8 p-4 w-full max-w-sm">
              {['Features', 'How it Works', 'Pricing', 'Security'].map((item, i) => (
                <motion.button 
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleNavClick(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="text-2xl font-display font-bold text-brand-graphite"
                >
                  {item}
                </motion.button>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full pt-8 flex flex-col gap-4"
              >
                <Button fullWidth variant="primary" onClick={() => { setMobileMenuOpen(false); navigateTo('signup'); }}>
                  Start Free Trial
                </Button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); navigateTo('login'); }} 
                  className="text-brand-graphite font-medium hover:text-brand-steel"
                >
                  Log In
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;