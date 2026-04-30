import { useState } from 'react';
import Sidebar from './components/Sidebar';
import WorkPage from './components/WorkPage';
import AboutPage from './components/AboutPage';
import FunPage from './components/FunPage';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('work');

  const handlePageChange = (page) => {
    setActivePage(page);
    // Scroll content back to top on tab switch
    document.querySelector('.main').scrollTop = 0;
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
      <Sidebar activePage={activePage} onPageChange={handlePageChange} />
      <main className="main">{renderPage()}</main>
    </div>
  );
}
