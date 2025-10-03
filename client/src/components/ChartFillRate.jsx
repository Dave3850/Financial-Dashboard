import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ChartFillRate({ stats }) {
  if (!stats) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-md">
        <div className="h-64 bg-gray-100 rounded animate-pulse"></div>
      </div>
    );
  }

  const data = {
    labels: ['Open Gaten', 'Gevulde Gaten'],
    datasets: [{
      label: 'Aantal gaten',
      data: [stats.openGaps, stats.filledGaps],
      backgroundColor: ['rgba(251, 146, 60, 0.7)', 'rgba(34, 197, 94, 0.7)'],
      borderColor: ['rgba(251, 146, 60, 1)', 'rgba(34, 197, 94, 1)'],
      borderWidth: 2,
      borderRadius: 8,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: `Fill Rate: ${stats.fillRate}%`,
        font: { size: 16, weight: 'bold' },
        color: '#1e40af',
      }
    },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 1 } }
    },
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">📊 Gaten Overzicht</h3>
      <div style={{ height: '250px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default ChartFillRate;
