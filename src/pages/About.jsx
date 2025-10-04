import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  const sections = [
    {
      title: 'What is Space Weather?',
      icon: '🌌',
      content:
        'Space weather refers to conditions on the Sun and in space that can influence the performance and reliability of technology systems on Earth. Just like weather on Earth, space weather is constantly changing and can have significant impacts on our daily lives.',
    },
    {
      title: 'Solar Flares Explained',
      icon: '☀️',
      content:
        'Solar flares are intense bursts of radiation from the release of magnetic energy on the Sun. They are classified as A, B, C, M, or X according to their strength. X-class flares are the strongest and can cause planet-wide radio blackouts and long-lasting radiation storms.',
    },
    {
      title: 'Coronal Mass Ejections (CMEs)',
      icon: '💥',
      content:
        'CMEs are huge bubbles of radiation and particles from the Sun that explode into space at high speeds. When directed at Earth, they can cause geomagnetic storms that affect satellites, power grids, and create beautiful auroras in the sky.',
    },
    {
      title: 'How We Monitor the Sun',
      icon: '🛰️',
      content:
        'Scientists use a network of ground-based observatories and space-based satellites to monitor the Sun 24/7. NASA and NOAA spacecraft provide real-time data about solar activity, helping us predict space weather events before they reach Earth.',
    },
  ];

  const funFacts = [
    'The Sun releases more energy in one second than humans have used in all of history!',
    'Solar flares travel at the speed of light and reach Earth in just 8 minutes.',
    'The most powerful solar storm recorded happened in 1859, called the Carrington Event.',
    'Aurora borealis (northern lights) are caused by solar particles hitting Earth\'s atmosphere.',
    'Solar storms can interfere with GPS, satellite communications, and power grids.',
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Learn About Space Weather
          </h1>
          <p className="text-xl text-text-gray-light max-w-3xl mx-auto">
            Discover the fascinating world of solar activity and its effects on our planet
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-xl p-8 hover-glow-blue"
            >
              <div className="flex items-start space-x-4">
                <div className="text-5xl">{section.icon}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3">{section.title}</h2>
                  <p className="text-text-gray-light leading-relaxed">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-panel rounded-xl p-8 glow-cyan"
        >
          <h2 className="text-3xl font-bold text-cyber-cyan mb-6 text-center">
            Fun Space Weather Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-white/5 rounded-lg p-4 border border-cyber-cyan/30 hover-glow-cyan"
              >
                <div className="flex items-start space-x-3">
                  <span className="text-cyber-cyan font-bold text-xl">•</span>
                  <p className="text-text-gray-light text-sm leading-relaxed">{fact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-panel px-8 py-4 rounded-xl text-cyber-cyan font-semibold uppercase tracking-wider hover-glow-cyan"
            >
              Back to Dashboard
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
