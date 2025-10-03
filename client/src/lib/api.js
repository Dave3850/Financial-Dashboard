// api.js - API calls naar Clinch backend
import axios from 'axios';

const API_BASE = 'http://localhost:4000';

// Axios instance met basis configuratie
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Haal statistieken en gaten op
export const fetchStats = async () => {
  const response = await api.get('/api/stats');
  return response.data;
};

// Maak nieuw gat aan
export const createGap = async (date, time, duration = 30) => {
  const response = await api.post('/api/create-gap', { date, time, duration });
  return response.data;
};

// Vraag suggestie voor een gat
export const suggestPatient = async (gapId) => {
  const response = await api.post('/api/suggest', { gapId });
  return response.data;
};

// Bevestig patiënt voor een gat
export const confirmPatient = async (gapId, patientId) => {
  const response = await api.post('/api/confirm', { gapId, patientId });
  return response.data;
};

export default api;
