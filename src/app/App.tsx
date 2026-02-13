import { useEffect, useState } from 'react';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { ClientPortal } from './components/ClientPortal';
import { BackOffice } from './components/BackOffice';
import { ManualUsuario } from './components/ManualUsuario';

type View = 'home' | 'tenant-login' | 'tenant-dashboard' | 'client' | 'admin' | 'manual';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  useEffect(() => {
    const syncViewWithHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'manual' || hash === '/manual') {
        setCurrentView('manual');
      }
    };

    syncViewWithHash();
    window.addEventListener('hashchange', syncViewWithHash);
    return () => window.removeEventListener('hashchange', syncViewWithHash);
  }, []);

  const handlePortalSelection = (portal: 'tenant' | 'client' | 'admin') => {
    if (portal === 'tenant') {
      setCurrentView('tenant-login');
    } else if (portal === 'client') {
      setCurrentView('client');
    } else if (portal === 'admin') {
      setCurrentView('admin');
    }
  };

  const handleLogin = () => {
    setCurrentView('tenant-dashboard');
  };

  const handleBackToHome = () => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    setCurrentView('home');
  };

  return (
    <div className="size-full">
      {currentView === 'home' && (
        <Home onSelectPortal={handlePortalSelection} />
      )}
      
      {currentView === 'tenant-login' && (
        <Login onLogin={handleLogin} onBack={handleBackToHome} />
      )}
      
      {currentView === 'tenant-dashboard' && (
        <Dashboard onBack={handleBackToHome} />
      )}
      
      {currentView === 'client' && (
        <ClientPortal onBack={handleBackToHome} />
      )}
      
      {currentView === 'admin' && (
        <BackOffice onBack={handleBackToHome} />
      )}

      {currentView === 'manual' && (
        <ManualUsuario onBack={handleBackToHome} />
      )}
    </div>
  );
}
