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
      console.error('Fout bij ophalen data:', error);
      alert('Kon geen verbinding maken met de server. Zorg dat de backend draait op poort 4000.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      loadData();
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRefresh = () => {
    loadData();
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Dashboard 
      stats={stats}
      gaps={gaps}
      loading={loading}
      onRefresh={handleRefresh}
    />
  );
}

export default App;
