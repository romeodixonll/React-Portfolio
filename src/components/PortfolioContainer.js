import React, { useState } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NavTabs from './NavTabs';
import Footer from './Footer';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
  
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
    
  
    }
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
     
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer/>
      </div>
    );
  }