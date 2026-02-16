import React from 'react';

interface LogoProps {
  className?: string;
  withText?: boolean;
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", withText = true, textColor = "text-brand-graphite" }) => {
  return (
    <div className="flex items-center gap-2">
      <svg 
        viewBox="0 0 100 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        aria-label="BARPEL.AI Logo"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1D2B45" /> {/* Brand Navy */}
            <stop offset="50%" stopColor="#3EB4A8" /> {/* Brand Teal */}
            <stop offset="100%" stopColor="#8BD7C9" /> {/* Brand Light Teal */}
          </linearGradient>
        </defs>
        
        {/* Group to flip the logo vertically */}
        <g transform="translate(0, 120) scale(1, -1)">
          {/* Main "B" Shape */}
          <path 
            d="M10 0C4.477 0 0 4.477 0 10V90C0 106.569 13.431 120 30 120H60C82.091 120 100 102.091 100 80C100 65.17 91.95 52.12 80 45C91.95 37.88 100 24.83 100 10C100 4.477 95.523 0 90 0H10Z" 
            fill="url(#logoGradient)" 
          />
          {/* Sound Waves (White) */}
          <path 
            d="M30 40C40 35 60 35 70 45" 
            stroke="white" 
            strokeWidth="8" 
            strokeLinecap="round" 
          />
          <path 
            d="M25 55C40 48 65 48 80 60" 
            stroke="white" 
            strokeWidth="8" 
            strokeLinecap="round" 
          />
          <path 
            d="M20 70C35 63 60 63 70 75" 
            stroke="white" 
            strokeWidth="8" 
            strokeLinecap="round" 
          />
        </g>
      </svg>
      
      {withText && (
        <span className={`text-xl font-display font-bold tracking-tight ${textColor}`}>
          BARPEL.AI
        </span>
      )}
    </div>
  );
};

export default Logo;