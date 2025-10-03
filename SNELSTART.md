# 🚀 CLINCH - SUPER SNELLE START

## Voor mensen die het snel willen werkend hebben!

### ✅ Stap 1: Check of je Node.js hebt

Open een terminal en typ:
```bash
node --version
```

**Zie je een versie nummer (bijv. v18.x.x)?** → Ga naar Stap 2  
**Foutmelding?** → [Download Node.js hier](https://nodejs.org/) en installeer eerst

---

### ✅ Stap 2: Kies je methode

#### 🟢 MAKKELIJK (1 commando):

**Mac/Linux:**
```bash
cd /workspace
./start.sh
```

**Windows (dubbelklik in Verkenner):**
```
start.bat
```

#### 🟡 HANDMATIG (als automatisch niet werkt):

**Open 2 terminals:**

**Terminal 1:**
```bash
cd /workspace/server
npm install
npm run dev
```
→ Laat dit venster open! Wacht tot je ziet: "🦷 Clinch server draait"

**Terminal 2:**
```bash
cd /workspace/client
npm install
npm run dev
```
→ Laat dit venster ook open! Wacht tot je ziet: "Local: http://localhost:5173"

---

### ✅ Stap 3: Open je browser

Ga naar: **http://localhost:5173**

Je zou het **Clinch login scherm** moeten zien met een grote tandarts emoji! 🦷

---

## ❌ Werkt het nog steeds niet?

### Fout: "EADDRINUSE" of "poort al in gebruik"

**Probleem:** Poort 4000 of 5173 is al bezet.

**Oplossing:**

**Op Mac/Linux:**
```bash
# Zoek wat draait op poort 4000
lsof -i :4000
lsof -i :5173

# Stop ze
kill -9 [PID nummer]
```

**Op Windows:**
```bash
# Zoek wat draait op poort 4000
netstat -ano | findstr :4000
netstat -ano | findstr :5173

# Stop ze (vervang PID met het nummer)
taskkill /PID [PID] /F
```

---

### Fout: "Cannot GET /api/stats" of "Network Error"

**Probleem:** Backend draait niet.

**Oplossing:** 
1. Check Terminal 1 - staat daar "🦷 Clinch server draait"?
2. Zo niet, stop alles en herstart Terminal 1
3. Test: open http://localhost:4000/api/stats in je browser
4. Je zou JSON data moeten zien!

---

### Fout: Witte pagina of "Vite" error

**Probleem:** Frontend dependencies niet goed geïnstalleerd.

**Oplossing:**
```bash
cd /workspace/client
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

### Nog steeds problemen?

1. **Herstart je computer** 💻
2. **Update Node.js** naar de nieuwste LTS versie
3. **Check firewall** - staat deze Node.js toe?

---

## ✅ Checklist als alles werkt:

- [ ] Terminal 1 toont: "🦷 Clinch server draait op http://localhost:4000"
- [ ] Terminal 2 toont: "Local: http://localhost:5173"
- [ ] Browser op http://localhost:5173 toont login scherm met 🦷
- [ ] Je kan klikken op "Start Demo ✨"
- [ ] Dashboard laadt met 3 gekleurde tegels
- [ ] Magic Button "Vul een Gat" is zichtbaar

**Gefeliciteerd! Clinch werkt!** 🎉

---

## 🎮 Hoe de demo te gebruiken:

1. Klik **"Start Demo ✨"**
2. Je ziet het **Dashboard** met:
   - 3 KPI tegels (open gaten, gevuld, omzet)
   - Een groene **"Vul een Gat"** knop met animatie
   - Een grafiek onderaan
3. Klik op **"Vul een Gat"**
4. Een popup verschijnt met een **patiënt suggestie**
5. Klik **"Ja, plan in!"**
6. De statistieken worden bijgewerkt!
7. Klik op 🔄 **Ververs** om opnieuw te laden

**Herhaal stappen 3-6 om meer gaten te vullen!**

---

📝 **Let op:** Dit is dummy data! Geen echte patiënten, alles lokaal.
