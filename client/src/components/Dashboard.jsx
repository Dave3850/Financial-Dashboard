import { useState } from 'react';
import Tiles from './Tiles';
import MagicButton from './MagicButton';
import SuggestionModal from './SuggestionModal';
import ChartFillRate from './ChartFillRate';
import { suggestPatient, confirmPatient } from '../lib/api';
import { icons, messages } from '../lib/theme';

function Dashboard({ stats, gaps, loading, onRefresh }) {
  const [suggestion, setSuggestion] = useState(null);
  const [suggesting, setSuggesting] = useState(false);
  const [confirming, setConfirming] = useState(false);

  // Handler: klik op Magic Button
  const handleMagicClick = async () => {
    // Zoek eerste open gat
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
      console.error('Fout bij suggestie:', error);
      alert('Geen beschikbare patiënten meer of fout opgetreden');
    } finally {
      setSuggesting(false);
    }
  };

  // Handler: bevestig patiënt
  const handleConfirm = async () => {
    if (!suggestion) return;

    try {
      setConfirming(true);
      await confirmPatient(suggestion.gap.id, suggestion.patient.id);
      
      // Sluit modal en refresh data
      setSuggestion(null);
      onRefresh();
      
      // Succes feedback
      alert(`✅ ${suggestion.patient.name} is ingepland!`);
    } catch (error) {
      console.error('Fout bij bevestigen:', error);
      alert('Er ging iets mis bij het inplannen');
    } finally {
      setConfirming(false);
    }
  };

  // Handler: annuleer suggestie
  const handleCancel = () => {
    setSuggestion(null);
  };

  const hasOpenGaps = stats && stats.openGaps > 0;

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-clinch-blue-700 flex items-center gap-3">
              {icons.tooth} Clinch Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Automatisch gaten vullen met wachtlijstpatiënten
            </p>
          </div>
          <button
            onClick={onRefresh}
            disabled={loading}
            className="bg-clinch-blue-100 text-clinch-blue-700 px-4 py-2 rounded-lg
                       hover:bg-clinch-blue-200 transition-colors duration-200
                       disabled:opacity-50"
          >
            🔄 Ververs
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto">
        {/* KPI Tiles */}
        <Tiles stats={stats} />

        {/* Magic Button */}
        <MagicButton 
          onClick={handleMagicClick} 
          disabled={!hasOpenGaps || suggesting}
        />

        {/* Chart */}
        <ChartFillRate stats={stats} />

        {/* Gaps lijst (optioneel, voor debug/visibility) */}
        {gaps && gaps.length > 0 && (
          <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              📋 Huidige Gaten
            </h3>
            <div className="space-y-2">
              {gaps.map(gap => (
                <div 
                  key={gap.id}
                  className={`p-3 rounded-lg ${
                    gap.status === 'open' 
                      ? 'bg-orange-50 border border-orange-200' 
                      : 'bg-green-50 border border-green-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">
                      {gap.label}
                    </span>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      gap.status === 'open'
                        ? 'bg-orange-200 text-orange-800'
                        : 'bg-green-200 text-green-800'
                    }`}>
                      {gap.status === 'open' ? 'Open' : 'Gevuld'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Suggestion Modal */}
      <SuggestionModal
        suggestion={suggestion}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        loading={confirming}
      />
    </div>
  );
}

export default Dashboard;
