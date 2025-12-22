import './App.css';
import { useState } from 'react';
import Navbar from "./Components/Home/Navbar/Navbar";
import Hero from './Components/Home/Hero/Hero';
import DigitalAgencyBanner from './Components/Home/DigitalAgencyBanner/DigitalAgencybanner';
import DiscoverSection from './Components/Home/DiscoverSection/DiscoverSection';
import Services from './Components/Home/Services/Services';
import Footer from './Components/Home/Footer/Footer';
import ContactFooter from './Components/Home/ContactFooter/ContactFooter';
import PortfolioSection from './Components/Home/PortfolioSection/PortfolioSection';
import About from './Components/About/About';
import AboutPortfolio from './Components/About/AboutPortfolio/AboutPortfolio';
import ServiceDetail from './Components/ServicesDetail/ServicesDetail';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <><About /> <AboutPortfolio /></>;
      case 'service-web-dev':
        return <ServiceDetail />;
        case 'portfolio':
          return <Portfolio/>
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <DigitalAgencyBanner />
            <DiscoverSection />
            <Services />
            <PortfolioSection />
            <ContactFooter />
          </>
        );
    }
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-customBg">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;
