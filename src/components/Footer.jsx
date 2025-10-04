import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative mt-20 py-8 border-t border-cyan-500/20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-sm text-text-gray-light">
            <p>Solar Watch Mission Control</p>
            <p className="text-xs mt-1">Monitoring space weather for Earth's safety</p>
          </div>

          <div className="flex items-center space-x-6 text-xs text-text-gray-light">
            <span>Data: NASA/NOAA</span>
            <span>•</span>
            <span>© 2025 Solar Watch</span>
          </div>
        </div>

        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent opacity-50" />

        <div className="mt-4 text-center text-xs text-text-gray-light/70">
          Educational dashboard for space weather monitoring and awareness
        </div>
      </motion.div>
    </footer>
  );
}
