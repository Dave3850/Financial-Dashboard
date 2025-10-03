import { icons, messages } from '../lib/theme';

function Login({ onLogin }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center">
        <div className="text-6xl mb-4">
          {icons.tooth}
        </div>
        
        <h1 className="text-3xl font-bold text-clinch-blue-700 mb-2">
          {messages.loginTitle}
        </h1>
        
        <p className="text-gray-600 mb-8">
          {messages.loginSubtitle}
        </p>
        
        <button
          onClick={onLogin}
          className="w-full bg-gradient-to-r from-clinch-blue-500 to-clinch-blue-600 
                     text-white font-semibold py-4 px-8 rounded-xl 
                     hover:from-clinch-blue-600 hover:to-clinch-blue-700 
                     transition-all duration-300 shadow-lg hover:shadow-xl
                     transform hover:scale-105"
        >
          Start Demo {icons.magic}
        </button>
        
        <p className="text-xs text-gray-400 mt-6">
          🔒 Geen echte patiëntdata - alleen lokale demo met dummy gegevens
        </p>
      </div>
    </div>
  );
}

export default Login;
