# 🦷 START HIER - CLINCH DEMO APP

## Je hebt 3 opties om te starten:

---

### 🟢 OPTIE 1: Automatische start (AANGERADEN)

**Mac/Linux - kopieer en plak in terminal:**
```bash
cd /workspace
./start.sh
```

**Windows - dubbelklik op dit bestand:**
```
start.bat
```

→ Wacht 10-20 seconden  
→ Open browser op: http://localhost:5173

---

### 🟡 OPTIE 2: Handmatig (2 terminals)

**Terminal 1:**
```bash
cd /workspace/server
npm install
npm run dev
```
Laat dit venster open!

**Terminal 2 (nieuw venster):**
```bash
cd /workspace/client  
npm install
npm run dev
```
Laat ook dit venster open!

→ Open browser op: http://localhost:5173

---

### 🔵 OPTIE 3: Test eerst of alles werkt

```bash
cd /workspace
./test-setup.sh
```

Dit checkt of alles correct geïnstalleerd is.

---

## 📱 Wat je zou moeten zien in de browser:

### Login Scherm:
```
🦷

Welkom bij Clinch
Vul je agenda automatisch met wachtlijstpatiënten

[Start Demo ✨]

🔒 Geen echte patiëntdata - alleen lokale demo met dummy gegevens
```

### Dashboard na login:
```
🦷 Clinch Dashboard                           [🔄 Ververs]
Automatisch gaten vullen met wachtlijstpatiënten

┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ 📅          │  │ ✅          │  │ 💶          │
│ Open Gaten  │  │ Gevulde     │  │ Extra Omzet │
│     2       │  │ Gaten: 0    │  │    €0       │
└─────────────┘  └─────────────┘  └─────────────┘

           ┌──────────────────────┐
           │  ✨ Vul een Gat     │
           └──────────────────────┘
       Klik om een suggestie te krijgen

┌────────────────────────────────────────────┐
│ 📊 Gaten Overzicht                        │
│                                            │
│   [Grafiek met 2 balken]                  │
│                                            │
└────────────────────────────────────────────┘
```

---

## ❓ Werkt het niet?

1. **Lees:** `SNELSTART.md` voor troubleshooting
2. **Check:** Beide terminals draaien nog?
3. **Test:** http://localhost:4000/api/stats geeft JSON?
4. **Restart:** Stop alles (Ctrl+C) en probeer opnieuw

---

## 🎯 Quick Demo Flow:

1. Klik "Start Demo"
2. Dashboard laadt → zie 2 open gaten
3. Klik "Vul een Gat" 
4. Popup: "Emma de Vries" of andere patiënt
5. Klik "Ja, plan in!"
6. Succes! Tegels updaten
7. Herhaal tot alle gaten vol

---

## 📂 Belangrijke bestanden:

| Bestand | Doel |
|---------|------|
| `START-HIER.md` | 👈 Dit bestand |
| `README.md` | Volledige documentatie |
| `SNELSTART.md` | Troubleshooting guide |
| `start.sh` / `start.bat` | Auto-start scripts |
| `test-setup.sh` | Test je installatie |

---

## 🚨 Belangrijke tips:

✅ **Beide servers** moeten tegelijk draaien  
✅ **Sluit terminals NIET** tijdens gebruik  
✅ **Poort 4000** = Backend API  
✅ **Poort 5173** = Frontend app  
✅ **Dummy data** = geen echte patiënten  

---

**Veel succes! Bij problemen → lees SNELSTART.md** 🦷✨
