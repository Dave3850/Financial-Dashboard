import { useState } from 'react';
import Tiles from './Tiles';
import MagicButton from './MagicButton';
import SuggestionModal from './SuggestionModal';
import ChartFillRate from './ChartFillRate';
import { suggestPatient, confirmPatient } from '../lib/api';

function Dashboard({ stats, gaps, loading, onRefresh }) {
  const [suggestion, setSuggestion] = useState(null);
  const [suggesting, setSuggesting] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const handleMagicClick = async () => {
    const openGap = gaps.find(g => g.status === 'open');
    if (!openGap) {
      alert('Geen open gaten gevonden!');
      return;
    }

    try {
      setSuggesting(true);
      const result = await suggestPatient(openGap.id);
      setSuggestion(result);
    } catch (error) {
      alert('Geen beschikbare patiënten');
    } finally {
      setSuggesting(false);
    }
  };

  const handleConfirm = async () => {
    if (!suggestion) return;
    try {
      setConfirming(true);
      await confirmPatient(suggestion.gap.id, suggestion.patient.id);
      setSuggestion(null);
      onRefresh();
      alert(`✅ ${suggestion.patient.name} is ingepland!`);
    } catch (error) {
      alert('Fout bij inplannen');
    } finally {
      setConfirming(false);
    }
  };

  const hasOpenGaps = stats && stats.openGaps > 0;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-clinch-blue-700 flex items-center gap-3">
              🦷 Clinch Dashboard
            </h1>
            <p className="text-gray-600 mt-1">Automatisch gaten vullen met wachtlijstpatiënten</p>
          </div>
          <button
            onClick={onRefresh}
            disabled={loading}
            className="bg-clinch-blue-500 text-white px-4 py-2 rounded-lg hover:bg-clinch-blue-600"
          >
            🔄 Ververs
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <Tiles stats={stats} />
        <MagicButton onClick={handleMagicClick} disabled={!hasOpenGaps || suggesting} />
        <ChartFillRate stats={stats} />
      </div>

      <SuggestionModal
        suggestion={suggestion}
        onConfirm={handleConfirm}
        onCancel={() => setSuggestion(null)}
        loading={confirming}
      />
    </div>
  );
}

export default Dashboard;
