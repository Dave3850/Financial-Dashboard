import express from 'express';
import cors from 'cors';
import { gaps, suggestPatientForGap, confirmPatient, getStats } from './data.js';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/stats', (req, res) => {
  const stats = getStats();
  res.json({
    stats,
    gaps: gaps.map(g => ({
      ...g,
      label: `${g.date} om ${g.time} (${g.duration} min)`
    }))
  });
});

app.post('/api/suggest', (req, res) => {
  const { gapId } = req.body;
  const suggestion = suggestPatientForGap(gapId);
  if (!suggestion) {
    return res.status(404).json({ error: 'Geen beschikbare patiënten' });
  }
  res.json(suggestion);
});

app.post('/api/confirm', (req, res) => {
  const { gapId, patientId } = req.body;
  const success = confirmPatient(gapId, patientId);
  if (!success) {
    return res.status(404).json({ error: 'Gat niet gevonden' });
  }
  const stats = getStats();
  res.json({ success: true, message: 'Patiënt ingepland!', stats });
});

app.listen(PORT, () => {
  console.log(`🦷 Clinch server draait op http://localhost:${PORT}`);
});
