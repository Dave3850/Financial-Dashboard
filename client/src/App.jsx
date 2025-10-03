import { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { fetchStats } from './lib/api';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [stats, setStats] = useState(null);
  const [gaps, setGaps] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await fetchStats();
      setStats(data.stats);
      setGaps(data.gaps);
    } catch (error) {
      console.error('Fout:', error);
      alert('Kon geen verbinding maken met server. Check of backend draait op poort 4000.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      loadData();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return <Dashboard stats={stats} gaps={gaps} loading={loading} onRefresh={loadData} />;
}

export default App;
