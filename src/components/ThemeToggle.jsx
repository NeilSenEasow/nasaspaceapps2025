import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('neon');

  useEffect(() => {
    const savedTheme = localStorage.getItem('solar-watch-theme') || 'neon';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme) => {
    const root = document.documentElement;

    if (newTheme === 'calm') {
      root.style.setProperty('--color-accent', '#105bd8');
      root.style.setProperty('--color-glow', 'rgba(16, 91, 216, 0.5)');
    } else {
      root.style.setProperty('--color-accent', '#00FFFF');
      root.style.setProperty('--color-glow', 'rgba(0, 255, 255, 0.5)');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'neon' ? 'calm' : 'neon';
    setTheme(newTheme);
    localStorage.setItem('solar-watch-theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 glass-panel p-4 rounded-full hover-glow-cyan"
      title={`Switch to ${theme === 'neon' ? 'Calm NASA Blue' : 'Energetic Neon'} mode`}
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        {theme === 'neon' ? (
          <svg
            className="w-6 h-6 text-cyber-cyan"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-trust-blue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
