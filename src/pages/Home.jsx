import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import MetricCard from '../components/MetricCard';
import AlertTile from '../components/AlertTile';
import GraphPanel from '../components/GraphPanel';
import SolarFlareCanvas from '../components/SolarFlareCanvas';
import CMEVisualization from '../components/CMEVisualization';
import { supabase } from '../utils/supabase';

export default function Home() {
  const [metrics, setMetrics] = useState({
    flareClass: 'M2.5',
    cmeSpeed: 850,
    kpIndex: 5,
    solarWind: 420,
  });

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'Solar Flare',
      severity: 'critical',
      message: 'M-class solar flare detected from active region AR3234. Minor radio blackouts possible.',
      active: true,
      timestamp: '2h ago',
    },
    {
      id: 2,
      type: 'CME Warning',
      severity: 'moderate',
      message: 'Coronal mass ejection heading toward Earth. Expected arrival: 48-72 hours.',
      active: true,
      timestamp: '5h ago',
    },
    {
      id: 3,
      type: 'Geomagnetic Storm',
      severity: 'info',
      message: 'Minor geomagnetic activity detected. Aurora visible at high latitudes.',
      active: false,
      timestamp: '1d ago',
    },
  ]);

  const [graphData, setGraphData] = useState({
    solarActivity: [2, 3, 5, 8, 6, 4, 3, 5, 7, 6, 4, 2],
    cmeVelocity: [300, 400, 600, 850, 900, 750, 500, 400, 350, 300, 280, 250],
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('solar_metrics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(12);

      if (data && data.length > 0) {
        const latest = data[0];
        setMetrics({
          flareClass: latest.flare_class || 'M2.5',
          cmeSpeed: latest.cme_speed || 850,
          kpIndex: latest.kp_index || 5,
          solarWind: latest.solar_wind || 420,
        });

        setGraphData({
          solarActivity: data.map(d => d.kp_index || 0).reverse(),
          cmeVelocity: data.map(d => d.cme_speed || 0).reverse(),
        });
      }
    };

    fetchData();

    const subscription = supabase
      .channel('solar_metrics_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'solar_metrics' }, () => {
        fetchData();
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const getFlareStatus = (flareClass) => {
    if (flareClass.startsWith('X')) return 'critical';
    if (flareClass.startsWith('M')) return 'warning';
    return 'normal';
  };

  const getKpStatus = (kp) => {
    if (kp >= 7) return 'critical';
    if (kp >= 5) return 'warning';
    return 'normal';
  };

  const hasCriticalFlare = getFlareStatus(metrics.flareClass) === 'critical';
  const hasCMEAlert = alerts.some(alert => alert.type === 'CME Warning' && alert.active);

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <SolarFlareCanvas active={hasCriticalFlare} />
      <CMEVisualization active={hasCMEAlert} />
      <div className="max-w-7xl mx-auto">
        <HeroSection />

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-6">
            Live Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Solar Flare"
              value={metrics.flareClass}
              unit="Class"
              icon="🔥"
              status={getFlareStatus(metrics.flareClass)}
              delay={0}
            />
            <MetricCard
              title="CME Speed"
              value={metrics.cmeSpeed}
              unit="km/s"
              icon="💫"
              status="normal"
              delay={0.1}
            />
            <MetricCard
              title="Kp Index"
              value={metrics.kpIndex}
              unit=""
              icon="🌍"
              status={getKpStatus(metrics.kpIndex)}
              delay={0.2}
            />
            <MetricCard
              title="Solar Wind"
              value={metrics.solarWind}
              unit="km/s"
              icon="💨"
              status="normal"
              delay={0.3}
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-6">
            Active Alerts
          </h2>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <AlertTile key={alert.id} {...alert} />
            ))}
          </div>
        </section>

        <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GraphPanel
            title="24-Hour Solar Activity"
            data={graphData.solarActivity}
            labels={['0h', '2h', '4h', '6h', '8h', '10h', '12h', '14h', '16h', '18h', '20h', '22h']}
          />
          <GraphPanel
            title="CME Velocity Trends"
            data={graphData.cmeVelocity}
            labels={['0h', '2h', '4h', '6h', '8h', '10h', '12h', '14h', '16h', '18h', '20h', '22h']}
          />
        </section>
      </div>
    </div>
  );
}
