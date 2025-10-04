import { motion } from 'framer-motion';

export default function MetricCard({ title, value, unit, icon, status = 'normal', delay = 0 }) {
  const getStatusColor = () => {
    switch (status) {
      case 'critical':
        return 'border-solar-pink glow-pink';
      case 'warning':
        return 'border-cyber-cyan glow-cyan';
      default:
        return 'border-trust-blue/20';
    }
  };

  const getValueColor = () => {
    switch (status) {
      case 'critical':
        return 'text-solar-pink';
      case 'warning':
        return 'text-cyber-cyan';
      default:
        return 'text-white';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`glass-panel rounded-xl p-6 transition-all duration-300 ${getStatusColor()} ${
        status === 'critical' ? 'animate-pulse-glow' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-2xl">{icon}</div>
        {status === 'critical' && (
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-3 h-3 bg-solar-pink rounded-full glow-pink"
          />
        )}
      </div>

      <h3 className="text-sm text-text-gray-light font-medium uppercase tracking-wider mb-2">
        {title}
      </h3>

      <div className="flex items-baseline space-x-2">
        <motion.span
          key={value}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`text-4xl font-extrabold ${getValueColor()}`}
          style={{ textShadow: '0 0 10px currentColor' }}
        >
          {value}
        </motion.span>
        <span className="text-lg text-text-gray-light font-light">{unit}</span>
      </div>
    </motion.div>
  );
}
