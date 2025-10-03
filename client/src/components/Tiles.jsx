import { icons } from '../lib/theme';

function Tiles({ stats }) {
  if (!stats) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-md animate-pulse">
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  const tiles = [
    {
      label: 'Open Gaten',
      value: stats.openGaps,
      icon: icons.calendar,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      label: 'Gevulde Gaten',
      value: stats.filledGaps,
      icon: icons.check,
      color: 'text-clinch-accent-600',
      bgColor: 'bg-clinch-accent-50'
    },
    {
      label: 'Extra Omzet',
      value: `€${stats.extraRevenue}`,
      icon: icons.euro,
      color: 'text-clinch-blue-600',
      bgColor: 'bg-clinch-blue-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {tiles.map((tile, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className={`text-4xl mb-3 ${tile.bgColor} w-14 h-14 rounded-lg 
                           flex items-center justify-center`}>
            <span className={tile.color}>{tile.icon}</span>
          </div>
          
          <p className="text-sm text-gray-500 font-medium mb-1">
            {tile.label}
          </p>
          
          <p className={`text-3xl font-bold ${tile.color}`}>
            {tile.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Tiles;
