import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Updated to use the new brand gradient
    primary: "bg-brand-gradient text-white hover:opacity-90 shadow-lg shadow-brand-steel/20 border border-transparent",
    secondary: "bg-brand-steel text-white hover:bg-[#2A9D8F] shadow-lg shadow-brand-steel/20 border border-transparent",
    outline: "bg-transparent border border-brand-graphite/20 text-brand-graphite hover:border-brand-graphite hover:bg-brand-graphite/5",
    ghost: "bg-transparent text-brand-graphite hover:bg-brand-cloud/50",
    white: "bg-white text-brand-graphite hover:bg-brand-cloud shadow-lg"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <motion.button 
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props as any}
    >
      {children}
    </motion.button>
  );
};

export default Button;