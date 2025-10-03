import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' }
});

export const fetchStats = async () => {
  const response = await api.get('/api/stats');
  return response.data;
};

export const suggestPatient = async (gapId) => {
  const response = await api.post('/api/suggest', { gapId });
  return response.data;
};

export const confirmPatient = async (gapId, patientId) => {
  const response = await api.post('/api/confirm', { gapId, patientId });
  return response.data;
};

export default api;
