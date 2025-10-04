import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-trust-blue to-cyber-cyan rounded-full glow-blue group-hover:glow-cyan transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-lg md:text-xl">☀</span>
          </div>
          <span className="text-white text-lg md:text-xl font-bold tracking-tight uppercase">
            Solar Watch
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 hover-glow-cyan ${
              isActive('/')
                ? 'text-cyber-cyan'
                : 'text-text-gray-light hover:text-cyber-cyan'
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 hover-glow-cyan ${
              isActive('/about')
                ? 'text-cyber-cyan'
                : 'text-text-gray-light hover:text-cyber-cyan'
            }`}
          >
            About
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 hover-glow-cyan"
        >
          <motion.span
            animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-cyber-cyan transition-all"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-cyber-cyan transition-all"
          />
          <motion.span
            animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-cyber-cyan transition-all"
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 max-w-7xl mx-auto glass-panel rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-3">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 py-3 px-4 rounded-lg ${
                  isActive('/')
                    ? 'text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/30'
                    : 'text-text-gray-light hover:text-cyber-cyan hover:bg-white/5'
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 py-3 px-4 rounded-lg ${
                  isActive('/about')
                    ? 'text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/30'
                    : 'text-text-gray-light hover:text-cyber-cyan hover:bg-white/5'
                }`}
              >
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
