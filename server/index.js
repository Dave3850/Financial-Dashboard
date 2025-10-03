// index.js - Clinch Express server
import express from 'express';
import cors from 'cors';
import { 
  gaps, 
  createGap, 
  suggestPatientForGap, 
  confirmPatient, 
  getStats 
} from './data.js';

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// GET /api/stats - Haal huidige statistieken en gatenlijst op
app.get('/api/stats', (req, res) => {
  const stats = getStats();
  res.json({
    stats,
    gaps: gaps.map(g => ({
      ...g,
      // Voeg een label toe voor frontend
      label: `${g.date} om ${g.time} (${g.duration} min)`
    }))
  });
});

// POST /api/create-gap - Maak nieuw gat in agenda
app.post('/api/create-gap', (req, res) => {
  const { date, time, duration } = req.body;
  
  if (!date || !time) {
    return res.status(400).json({ error: 'Datum en tijd zijn verplicht' });
  }

  const newGap = createGap(date, time, duration || 30);
  const stats = getStats();

  res.json({
    success: true,
    gap: newGap,
    stats
  });
});

// POST /api/suggest - Suggereer patiënt voor een gat
app.post('/api/suggest', (req, res) => {
  const { gapId } = req.body;

  if (!gapId) {
    return res.status(400).json({ error: 'Gap ID is verplicht' });
  }

  const suggestion = suggestPatientForGap(gapId);

  if (!suggestion) {
    return res.status(404).json({ 
      error: 'Geen beschikbare patiënten of gat niet gevonden' 
    });
  }

  res.json(suggestion);
});

// POST /api/confirm - Bevestig patiënt voor een gat
app.post('/api/confirm', (req, res) => {
  const { gapId, patientId } = req.body;

  if (!gapId || !patientId) {
    return res.status(400).json({ 
      error: 'Gap ID en Patient ID zijn verplicht' 
    });
  }

  const success = confirmPatient(gapId, patientId);

  if (!success) {
    return res.status(404).json({ error: 'Gat niet gevonden' });
  }

  const stats = getStats();

  res.json({
    success: true,
    message: 'Patiënt succesvol ingepland!',
    stats
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Clinch server draait!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🦷 Clinch server draait op http://localhost:${PORT}`);
  console.log(`📊 Test met: http://localhost:${PORT}/api/stats`);
});
