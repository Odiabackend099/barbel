import React from 'react';

const Legal: React.FC<{ type: 'privacy' | 'terms' }> = ({ type }) => {
  const title = type === 'privacy' ? 'Privacy Policy' : 'Terms of Service';
  
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-display font-bold text-brand-graphite mb-8">{title}</h1>
      <div className="prose prose-lg text-brand-graphite/70">
        <p>Last updated: August 20, 2025</p>
        
        <h3>1. Introduction</h3>
        <p>
          Welcome to Barpel.AI. We are committed to protecting your personal information and your right to privacy. 
          If you have any questions or concerns about this policy, or our practices with regards to your personal information, 
          please contact us.
        </p>

        <h3>2. Information We Collect</h3>
        <p>
          We collect personal information that you voluntarily provide to us when you register on the website, 
          express an interest in obtaining information about us or our products and services, when you participate 
          in activities on the website or otherwise when you contact us.
        </p>

        <h3>3. How We Use Your Information</h3>
        <p>
          We use personal information collected via our website for a variety of business purposes described below. 
          We process your personal information for these purposes in reliance on our legitimate business interests, 
          in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
        </p>

        <h3>4. Contact Us</h3>
        <p>
          If you have questions or comments about this policy, you may email us at support@barpel.ai
        </p>
      </div>
    </div>
  );
};

export default Legal;