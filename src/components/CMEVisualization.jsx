import { motion } from 'framer-motion';

export default function CMEVisualization({ active = false }) {
  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0.8 }}
        animate={{ scale: [0, 2, 4], opacity: [0.8, 0.4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
        className="absolute w-32 h-32 rounded-full border-4 border-cyber-cyan"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0.8 }}
        animate={{ scale: [0, 2, 4], opacity: [0.8, 0.4, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1, ease: 'easeOut' }}
        className="absolute w-32 h-32 rounded-full border-4 border-cyber-cyan"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0.8 }}
        animate={{ scale: [0, 2, 4], opacity: [0.8, 0.4, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2, ease: 'easeOut' }}
        className="absolute w-32 h-32 rounded-full border-4 border-cyber-cyan"
      />
      <div className="w-16 h-16 bg-gradient-to-br from-cyber-cyan to-trust-blue rounded-full glow-cyan" />
    </div>
  );
}
