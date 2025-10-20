import React, { useState } from 'react';
import HomePage from './components/HomePage';
import PreOrderPage from './components/PreOrderPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {/* Container untuk HomePage */}
      <div className={`page-container ${currentPage === 'home' ? 'visible' : 'hidden'}`}>
        <HomePage onWidgetClick={() => navigateTo('form')} />
      </div>

      {/* Container untuk PreOrderPage */}
      <div className={`page-container ${currentPage === 'form' ? 'visible' : 'hidden'}`}>
        <PreOrderPage onBack={() => navigateTo('home')} />
      </div>
    </div>
  );
}

export default App;