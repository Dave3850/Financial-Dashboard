import { icons } from '../lib/theme';

function SuggestionModal({ suggestion, onConfirm, onCancel, loading }) {
  if (!suggestion) return null;

  const { gap, patient } = suggestion;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-slide-up">
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">{icons.magic}</div>
          <h2 className="text-2xl font-bold text-clinch-blue-700 mb-2">
            Match Gevonden!
          </h2>
          <p className="text-gray-600 text-sm">
            We hebben de perfecte patiënt voor dit gat
          </p>
        </div>

        <div className="bg-clinch-blue-50 rounded-xl p-4 mb-4">
          <p className="text-xs text-gray-500 mb-1">Beschikbaar gat</p>
          <p className="font-semibold text-clinch-blue-700">
            {icons.calendar} {gap.date} om {gap.time}
          </p>
          <p className="text-sm text-gray-600">
            Duur: {gap.duration} minuten
          </p>
        </div>

        <div className="bg-clinch-accent-50 rounded-xl p-4 mb-6">
          <p className="text-xs text-gray-500 mb-1">Voorgestelde patiënt</p>
          <p className="font-semibold text-clinch-accent-700 mb-2">
            {icons.tooth} {patient.name}
          </p>
          <div className="text-sm text-gray-700 space-y-1">
            <p>📞 {patient.phone}</p>
            <p>🩺 {patient.treatmentType}</p>
            <p>📅 Laatste bezoek: {patient.lastVisit}</p>
            {patient.notes && (
              <p className="text-xs italic text-gray-500 mt-2">
                💬 {patient.notes}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            disabled={loading}
            className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 px-6 
                       rounded-xl hover:bg-gray-300 transition-colors duration-200
                       disabled:opacity-50"
          >
            Nee, anders
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 bg-gradient-to-r from-clinch-accent-500 to-clinch-accent-600 
                       text-white font-semibold py-3 px-6 rounded-xl 
                       hover:from-clinch-accent-600 hover:to-clinch-accent-700 
                       transition-all duration-200 shadow-lg
                       disabled:opacity-50"
          >
            {loading ? 'Bezig...' : `${icons.check} Ja, plan in!`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuggestionModal;
