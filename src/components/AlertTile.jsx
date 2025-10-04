import { motion } from 'framer-motion';

export default function AlertTile({ type, severity, message, active, timestamp }) {
  const getSeverityStyle = () => {
    if (!active) {
      return {
        border: 'border-trust-blue/20',
        bg: 'bg-white/5',
        text: 'text-text-gray-light',
        icon: '✓',
      };
    }

    switch (severity) {
      case 'critical':
        return {
          border: 'border-solar-pink animate-blink',
          bg: 'bg-solar-pink/10',
          text: 'text-solar-pink',
          icon: '⚠',
        };
      case 'moderate':
        return {
          border: 'border-cyber-cyan',
          bg: 'bg-cyber-cyan/10',
          text: 'text-cyber-cyan',
          icon: '!',
        };
      default:
        return {
          border: 'border-trust-blue',
          bg: 'bg-trust-blue/10',
          text: 'text-trust-blue',
          icon: 'i',
        };
    }
  };

  const style = getSeverityStyle();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className={`glass-panel rounded-lg p-4 border ${style.border} ${style.bg} transition-all duration-300`}
    >
      <div className="flex items-start space-x-4">
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full ${style.bg} border ${style.border} flex items-center justify-center ${style.text} font-bold text-xl`}
        >
          {style.icon}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className={`text-sm font-semibold uppercase tracking-wide ${style.text}`}>
              {type}
            </h4>
            {timestamp && (
              <span className="text-xs text-text-gray-light">{timestamp}</span>
            )}
          </div>

          <p className="text-sm text-text-gray-light leading-relaxed">{message}</p>

          {active && (
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-2 flex items-center space-x-2"
            >
              <div className={`w-2 h-2 rounded-full ${style.text === 'text-solar-pink' ? 'bg-solar-pink' : 'bg-cyber-cyan'}`} />
              <span className="text-xs text-text-gray-light uppercase tracking-wider">
                Active Alert
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
