import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
// import Services from './pages/Services';
// import Kabo from './pages/Kabo';
// import KitchenLady from './pages/KitchenLady';
// import Bravy from './pages/Bravy';
function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/kabo" element={<Kabo />} />
          <Route path="/kitchen-lady" element={<KitchenLady />} />
          <Route path="/bravy" element={<Bravy />} /> */}
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
export default App;