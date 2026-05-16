import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import WorkPage from './components/WorkPage';
import AboutPage from './components/AboutPage';
import FunPage from './components/FunPage';
import './App.css';

const MOBILE_BREAKPOINT = 900;

const getIsMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= MOBILE_BREAKPOINT;
};

export default function App() {
  const [activePage, setActivePage] = useState('work');
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
    // Scroll content back to top on tab switch
    const main = document.querySelector('.main');
    if (main) main.scrollTop = 0;
  };

  const renderPage = () => {
    switch (activePage) {
      case 'work':
        return <WorkPage />;
      case 'about':
        return <AboutPage />;
      case 'fun':
        return <FunPage />;
      default:
        return <WorkPage />;
    }
  };

  return (
    <div className="app-container">
      {!isMobile && <Sidebar activePage={activePage} onPageChange={handlePageChange} />}
      <main className="main">{isMobile ? <WorkPage /> : renderPage()}</main>
    </div>
  );
}
