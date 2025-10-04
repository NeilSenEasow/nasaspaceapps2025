import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function GraphPanel({ title, data, labels }) {
  const chartData = {
    labels: labels || ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
    datasets: [
      {
        label: title,
        data: data || [2, 3, 5, 8, 6, 4, 3],
        borderColor: '#00FFFF',
        backgroundColor: 'rgba(0, 255, 255, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#00FFFF',
        pointBorderColor: '#00FFFF',
        pointHoverBackgroundColor: '#FF10F0',
        pointHoverBorderColor: '#FF10F0',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(6, 31, 74, 0.9)',
        titleColor: '#00FFFF',
        bodyColor: '#aeb0b5',
        borderColor: '#105bd8',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          title: (context) => `Time: ${context[0].label}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(16, 91, 216, 0.1)',
          borderColor: 'rgba(16, 91, 216, 0.3)',
        },
        ticks: {
          color: '#aeb0b5',
          font: {
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(16, 91, 216, 0.1)',
          borderColor: 'rgba(16, 91, 216, 0.3)',
        },
        ticks: {
          color: '#aeb0b5',
          font: {
            size: 11,
          },
        },
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-panel rounded-xl p-6 glow-blue"
    >
      <h3 className="text-lg font-semibold text-white uppercase tracking-wide mb-6">
        {title}
      </h3>
      <div className="h-64 md:h-80">
        <Line data={chartData} options={options} />
      </div>
    </motion.div>
  );
}
