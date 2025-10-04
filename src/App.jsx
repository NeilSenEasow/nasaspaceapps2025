import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-deep-space">
        <ParticleBackground />
        <ThemeToggle />
        <div className="relative z-10">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
