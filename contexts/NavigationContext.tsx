import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type View = 'home' | 'login' | 'signup' | 'demo' | 'privacy' | 'terms';

interface NavigationContextType {
  currentView: View;
  navigateTo: (view: View, hash?: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<View>('home');

  const navigateTo = (view: View, hash?: string) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
    
    if (view === 'home' && hash) {
      // Small delay to allow home component to mount
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <NavigationContext.Provider value={{ currentView, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};