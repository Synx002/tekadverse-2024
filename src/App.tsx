import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Kabo from './pages/Kabo';
import KitchenLady from './pages/KitchenLady';
import Bravy from './pages/Bravy';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/kabo" element={<Kabo />} />
        <Route path="/kitchen-lady" element={<KitchenLady />} />
        <Route path="/bravy" element={<Bravy />} />
      </Routes>
    </Router>
  );
}

export default App;
