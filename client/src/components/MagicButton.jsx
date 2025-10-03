import { icons, messages } from '../lib/theme';

function MagicButton({ onClick, disabled }) {
  return (
    <div className="flex flex-col items-center mb-8">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          relative group
          bg-gradient-to-br from-clinch-accent-400 to-clinch-accent-600
          text-white font-bold text-xl
          px-12 py-6 rounded-2xl
          shadow-2xl hover:shadow-clinch-accent-500/50
          transition-all duration-300
          transform hover:scale-105
          disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
          ${!disabled ? 'animate-pulse-slow' : ''}
        `}
      >
        <span className="flex items-center gap-3">
          <span className="text-3xl">{icons.magic}</span>
          <span>{messages.magicButtonLabel}</span>
        </span>
        
        {!disabled && (
          <div className="absolute inset-0 rounded-2xl bg-clinch-accent-400 opacity-0 
                          group-hover:opacity-30 blur-xl transition-opacity duration-300">
          </div>
        )}
      </button>
      
      <p className="text-sm text-gray-600 mt-3">
        {disabled ? messages.noGapsMessage : messages.magicButtonSubtext}
      </p>
    </div>
  );
}

export default MagicButton;
