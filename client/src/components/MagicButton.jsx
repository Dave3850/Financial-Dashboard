function MagicButton({ onClick, disabled }) {
  return (
    <div className="flex flex-col items-center mb-8">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          bg-gradient-to-br from-clinch-accent-400 to-clinch-accent-600
          text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl
          transition-all duration-300 transform hover:scale-105
          disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
          ${!disabled ? 'animate-pulse-slow' : ''}
        `}
      >
        <span className="flex items-center gap-3">
          <span className="text-3xl">✨</span>
          <span>Vul een Gat</span>
        </span>
      </button>
      <p className="text-sm text-gray-600 mt-3">
        {disabled ? 'Geen open gaten beschikbaar' : 'Klik om een suggestie te krijgen'}
      </p>
    </div>
  );
}

export default MagicButton;
