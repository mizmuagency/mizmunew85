import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import WebsiteDevelopment from './pages/Webdesign-development';
import DigitalMarketing from './pages/DigitalMarketing';
import BrandingIdentity from './pages/BrandingIdentity';
import VirtualAssistance from './pages/VirtualAssistance';
import About from './pages/About';
import Kontakt from './pages/Kontakt';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Privacy from './pages/Privacy';
import Impressum from './pages/Impressum';
import Projects from './pages/Projects';
import Hanfgartenweg from './pages/Hanfgartenweg';
import Dazzleye from './pages/Dazzleye';
import IsiGlobal from './pages/IsiGlobal';
import Newsletter from './pages/Newsletter';
import NewsletterConfirmation from './pages/NewsletterConfirmation';
import FAQ from './pages/FAQ';
import { useScrollToTop } from './hooks/useScrollToTop';
import PageTransition from './components/PageTransition';

const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/webdesign" element={<PageTransition><WebsiteDevelopment /></PageTransition>} />
        <Route path="/digital-marketing" element={<PageTransition><DigitalMarketing /></PageTransition>} />
        <Route path="/branding-identity" element={<PageTransition><BrandingIdentity /></PageTransition>} />
        <Route path="/virtual-assistance" element={<PageTransition><VirtualAssistance /></PageTransition>} />
        <Route path="/projekte" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/projekte/hanfgartenweg" element={<PageTransition><Hanfgartenweg /></PageTransition>} />
        <Route path="/projekte/dazzleye" element={<PageTransition><Dazzleye /></PageTransition>} />
        <Route path="/projekte/isi-global" element={<PageTransition><IsiGlobal /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/kontakt" element={<PageTransition><Kontakt /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/blog/:id" element={<PageTransition><BlogPost /></PageTransition>} />
        <Route path="/datenschutz" element={<PageTransition><Privacy /></PageTransition>} />
        <Route path="/impressum" element={<PageTransition><Impressum /></PageTransition>} />
        <Route path="/newsletter" element={<PageTransition><Newsletter /></PageTransition>} />
        <Route path="/newsletter-confirmation" element={<PageTransition><NewsletterConfirmation /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;