# 🦷 Clinch - Automatische Gatenplanner voor Tandartsen

**Clinch** is een demo-applicatie (MVP) die tandartspraktijken helpt om lege gaten in hun agenda automatisch te vullen met patiënten van de wachtlijst. De app gebruikt een simpel AI-suggestie systeem om de beste match te vinden.

> ⚠️ **Belangrijk**: Dit is een **lokale demo** met **dummy data**. Er worden geen echte patiëntgegevens gebruikt en er wordt niets naar de cloud gestuurd. Alles draait volledig lokaal op je computer.

---

## 📋 Functies

✅ **KPI Dashboard** - Zie in één oogopslag hoeveel gaten open, gevuld en hoeveel extra omzet je hebt gegenereerd  
✅ **Magic Button** - Klik om automatisch een suggestie te krijgen voor het volgende gat  
✅ **Slimme Matching** - De app suggereert patiënten op basis van beschikbaarheid (MVP: random, later uitbreidbaar)  
✅ **Visuele Charts** - Bar chart met fill rate percentage  
✅ **Modern Design** - High-end dental thema met blauw/groen kleurenpalet en tand-iconen  
✅ **Privacy First** - Geen echte data, geen cloud, volledig lokaal

---

## 🚀 Installatie & Gebruik

### Vereisten

- **Node.js** versie 18 of hoger ([download hier](https://nodejs.org/))
- **npm** (komt mee met Node.js)

---

### 🎯 **OPTIE A: Automatisch starten (MAKKELIJKST)**

#### Voor Mac/Linux:
```bash
cd /workspace
./start.sh
```

#### Voor Windows:
```bash
cd /workspace
start.bat
```

✅ De scripts installeren automatisch dependencies en starten beide servers!

**Open daarna je browser op:** [http://localhost:5173](http://localhost:5173)

---

### 🎯 **OPTIE B: Handmatig starten (2 terminals nodig)**

Je moet **2 terminal vensters** openen:

#### **Terminal 1 - Backend:**
```bash
cd /workspace/server
npm install        # Eerste keer
npm run dev        # Start backend
```

✅ Wacht tot je ziet: `🦷 Clinch server draait op http://localhost:4000`

#### **Terminal 2 - Frontend:**
```bash
cd /workspace/client
npm install        # Eerste keer
npm run dev        # Start frontend
```

✅ Wacht tot je ziet: `Local: http://localhost:5173`

**Open daarna je browser op:** [http://localhost:5173](http://localhost:5173)

---

### ⚠️ **BELANGRIJK:**

1. **Beide servers moeten tegelijk draaien!** Backend op poort 4000, frontend op poort 5173
2. Sluit de terminal vensters NIET tijdens gebruik
3. Stop met `Ctrl+C` in beide terminals
4. Bij errors: check of de poorten vrij zijn

---

## 🎮 Hoe te gebruiken

1. **Login**: Klik op "Start Demo" om de demo te starten
2. **Dashboard**: Je ziet 3 KPI-tegels (open gaten, gevulde gaten, extra omzet) en een chart
3. **Magic Button**: Klik op "Vul een Gat" om een suggestie te krijgen
4. **Suggestie Modal**: Bekijk de voorgestelde patiënt en klik "Ja, plan in!" of "Nee, anders"
5. **Refresh**: Klik op 🔄 Ververs om de statistieken bij te werken

---

---

## 🆘 Problemen? Lees **SNELSTART.md** voor troubleshooting!

---

## 📁 Projectstructuur

```
/workspace
├── README.md                    # Dit bestand
├── server/                      # Backend (Node.js + Express)
│   ├── package.json
│   ├── index.js                 # Express server met API endpoints
│   └── data.js                  # Dummy data en logica
└── client/                      # Frontend (React + Vite + Tailwind)
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.cjs
    ├── postcss.config.cjs
    ├── index.html
    └── src/
        ├── main.jsx             # Entry point
        ├── index.css            # Tailwind + basis styling
        ├── App.jsx              # Hoofd component
        ├── lib/
        │   ├── api.js           # API calls
        │   └── theme.js         # Design tokens
        └── components/
            ├── Login.jsx        # Login scherm
            ├── Dashboard.jsx    # Hoofd dashboard
            ├── Tiles.jsx        # KPI tegels
            ├── MagicButton.jsx  # Magic Button component
            ├── SuggestionModal.jsx  # Suggestie popup
            └── ChartFillRate.jsx    # Bar chart

```

---

## 🔌 API Endpoints

De backend biedt de volgende endpoints:

| Method | Endpoint | Beschrijving |
|--------|----------|--------------|
| GET | `/api/stats` | Haal statistieken en gatenlijst op |
| POST | `/api/create-gap` | Maak nieuw gat aan (body: `{date, time, duration}`) |
| POST | `/api/suggest` | Vraag suggestie voor gat (body: `{gapId}`) |
| POST | `/api/confirm` | Bevestig patiënt voor gat (body: `{gapId, patientId}`) |

---

## 🎨 Design & Thema

**Kleuren:**
- Primair blauw: `#3b82f6` (Clinch blue)
- Accent groen: `#22c55e` (voor success states)
- Achtergrond: Gradient van lichtblauw

**Typografie:**
- Font: Inter (via Google Fonts)

**Iconen:**
- Emoji's voor tanden 🦷, kalender 📅, magic ✨, etc.

---

## 🔮 Toekomstige Uitbreidingen

Deze MVP kan worden uitgebreid met:

### 1. **SQLite Database**
Voeg lokale database toe in plaats van in-memory data:
```bash
npm install better-sqlite3
```

### 2. **Slimmere AI Matching**
Verbeter `suggestPatientForGap()` functie met:
- Priority score ranking
- Last visit tijd (hoe langer geleden, hoe hoger prioriteit)
- Match tussen gap duration en behandeltype
- Beschikbaarheid parsing uit notes

### 3. **Agenda Integratie**
Koppel met echte agenda systemen:
- Google Calendar API
- Outlook Calendar API
- Praktijkmanagement software (Exquise, PraktijkInfo, etc.)

### 4. **SMS/Email Notificaties**
Stuur automatisch berichten naar patiënten:
- Twilio voor SMS
- SendGrid voor Email

### 5. **Electron Wrapper**
Maak een standalone desktop app:
```bash
npm install electron electron-builder
```

### 6. **Authenticatie**
Voeg echte login toe met:
- JWT tokens
- Praktijk accounts
- Role-based access

### 7. **Multi-Praktijk Support**
Uitbreiden naar meerdere praktijken met:
- Praktijk database
- Separate patient pools
- Admin dashboard

---

## 🛠 Technische Details

**Backend:**
- Node.js 18+
- Express.js voor REST API
- CORS enabled voor cross-origin requests
- Hot reload met `--watch` flag

**Frontend:**
- React 18
- Vite voor snelle development
- Tailwind CSS voor styling
- Chart.js voor visualisaties
- Axios voor API calls

---

## ❓ Troubleshooting

### Server start niet
- Check of poort 4000 al in gebruik is: `lsof -i :4000` (Mac/Linux) of `netstat -ano | findstr :4000` (Windows)
- Probeer een andere poort in `server/index.js`

### Frontend toont "Kon geen verbinding maken"
- Zorg dat de backend draait op poort 4000
- Check CORS instellingen in `server/index.js`
- Open browser console voor meer details

### Dependencies installeren mislukt
- Verwijder `node_modules` en `package-lock.json`
- Run `npm install` opnieuw
- Update Node.js naar nieuwste LTS versie

### Chart wordt niet getoond
- Check browser console voor errors
- Zorg dat `chart.js` en `react-chartjs-2` geïnstalleerd zijn
- Refresh de pagina

---

## 📝 Licentie

Deze demo is bedoeld voor educatieve doeleinden. Gebruik op eigen risico.

---

## 👨‍💻 Contact & Support

Voor vragen of problemen, check de code comments of pas de dummy data aan in `server/data.js`.

**Veel plezier met Clinch!** 🦷✨
