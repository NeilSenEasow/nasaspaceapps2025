import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-trust-blue/20 via-transparent to-deep-space pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.div
          animate={{
            textShadow: [
              '0 0 20px rgba(0, 255, 255, 0.5)',
              '0 0 40px rgba(0, 255, 255, 0.8)',
              '0 0 20px rgba(0, 255, 255, 0.5)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-4">
            Mission Control
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-cyber-cyan">
            Space Weather Dashboard
          </h2>
        </motion.div>

        <p className="text-lg md:text-xl text-text-gray-light font-light leading-relaxed mb-8 max-w-3xl mx-auto">
          Track solar flares, coronal mass ejections, and geomagnetic storms in real-time.
          Your window into the dynamic forces shaping our solar system.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass-panel px-8 py-4 rounded-xl text-cyber-cyan font-semibold text-lg uppercase tracking-wider hover-glow-cyan"
        >
          Explore Data
        </motion.button>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-space to-transparent pointer-events-none" />
    </div>
  );
}
