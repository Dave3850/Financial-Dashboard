// data.js - Dummy data en logica voor Clinch demo
// Let op: dit is ALLEEN dummy data, geen echte patiëntgegevens!

// Dummy patiënten met fictieve gegevens
export const dummyPatients = [
  {
    id: 'p1',
    name: 'Emma de Vries',
    phone: '06-12345678',
    lastVisit: '2025-08-15',
    treatmentType: 'Controle',
    priority: 8,
    notes: 'Wil graag ochtenden'
  },
  {
    id: 'p2',
    name: 'Lucas Janssen',
    phone: '06-23456789',
    lastVisit: '2025-07-20',
    treatmentType: 'Vulling',
    priority: 6,
    notes: 'Flexibel beschikbaar'
  },
  {
    id: 'p3',
    name: 'Sophie Bakker',
    phone: '06-34567890',
    lastVisit: '2025-09-01',
    treatmentType: 'Reiniging',
    priority: 9,
    notes: 'Heeft wachtlijst aangegeven'
  },
  {
    id: 'p4',
    name: 'Noah van Dijk',
    phone: '06-45678901',
    lastVisit: '2025-06-10',
    treatmentType: 'Controle',
    priority: 7,
    notes: 'Bij voorkeur donderdag'
  },
  {
    id: 'p5',
    name: 'Mila Peters',
    phone: '06-56789012',
    lastVisit: '2025-08-30',
    treatmentType: 'Kroon plaatsing',
    priority: 10,
    notes: 'Urgent - wil snel ingepland'
  },
  {
    id: 'p6',
    name: 'Daan Vermeulen',
    phone: '06-67890123',
    lastVisit: '2025-07-05',
    treatmentType: 'Wortelkanaal',
    priority: 5,
    notes: 'Alleen op maandag beschikbaar'
  }
];

// Gatenlijst (open slots in agenda)
export let gaps = [
  {
    id: 'g1',
    date: '2025-10-05',
    time: '10:00',
    duration: 30,
    status: 'open',
    patientId: null
  },
  {
    id: 'g2',
    date: '2025-10-07',
    time: '14:30',
    duration: 60,
    status: 'open',
    patientId: null
  }
];

let nextGapId = 3;

// Functie: creëer nieuw gat in de agenda
export function createGap(date, time, duration = 30) {
  const newGap = {
    id: `g${nextGapId++}`,
    date,
    time,
    duration,
    status: 'open',
    patientId: null
  };
  gaps.push(newGap);
  return newGap;
}

// Functie: suggereer patiënt voor een gat (MVP = random)
export function suggestPatientForGap(gapId) {
  const gap = gaps.find(g => g.id === gapId);
  if (!gap || gap.status !== 'open') {
    return null;
  }

  const availablePatients = dummyPatients.filter(p => {
    return !gaps.some(g => g.patientId === p.id && g.status === 'filled');
  });

  if (availablePatients.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * availablePatients.length);
  const suggestedPatient = availablePatients[randomIndex];

  return {
    gap,
    patient: suggestedPatient
  };
}

// Functie: bevestig patiënt voor een gat
export function confirmPatient(gapId, patientId) {
  const gap = gaps.find(g => g.id === gapId);
  if (!gap) {
    return false;
  }

  gap.status = 'filled';
  gap.patientId = patientId;
  return true;
}

// Functie: bereken statistieken voor dashboard
export function getStats() {
  const openGaps = gaps.filter(g => g.status === 'open').length;
  const filledGaps = gaps.filter(g => g.status === 'filled').length;
  const totalGaps = gaps.length;
  
  const extraRevenue = filledGaps * 150;
  const fillRate = totalGaps > 0 ? Math.round((filledGaps / totalGaps) * 100) : 0;

  return {
    openGaps,
    filledGaps,
    totalGaps,
    extraRevenue,
    fillRate
  };
}
