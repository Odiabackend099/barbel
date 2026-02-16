import React from 'react';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BookDemo from './pages/BookDemo';
import Legal from './pages/Legal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const MainContent: React.FC = () => {
  const { currentView } = useNavigation();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-brand-steel selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {currentView === 'home' && <Home />}
        {currentView === 'login' && <Login />}
        {currentView === 'signup' && <Signup />}
        {currentView === 'demo' && <BookDemo />}
        {(currentView === 'privacy' || currentView === 'terms') && <Legal type={currentView} />}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <MainContent />
    </NavigationProvider>
  );
};

export default App;