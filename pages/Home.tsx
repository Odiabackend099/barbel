import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import HowItWorksSection from '../components/HowItWorksSection';
import IndustrySection from '../components/IndustrySection';
import FeaturesSection from '../components/FeaturesSection';
import TrustSection from '../components/TrustSection';
import PricingSection from '../components/PricingSection';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <IndustrySection />
      <FeaturesSection />
      <TrustSection />
      <PricingSection />
      <CTASection />
    </>
  );
};

export default Home;