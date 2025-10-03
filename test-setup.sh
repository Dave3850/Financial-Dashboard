#!/bin/bash

# Clinch Setup Test Script
# Test of alles correct is geïnstalleerd

echo "🔍 Clinch Setup Test"
echo "===================="
echo ""

# Test 1: Node.js
echo "Test 1: Node.js..."
if command -v node &> /dev/null; then
    echo "✅ Node.js geïnstalleerd: $(node --version)"
else
    echo "❌ Node.js NIET gevonden - download van https://nodejs.org/"
    exit 1
fi
echo ""

# Test 2: npm
echo "Test 2: npm..."
if command -v npm &> /dev/null; then
    echo "✅ npm geïnstalleerd: $(npm --version)"
else
    echo "❌ npm NIET gevonden"
    exit 1
fi
echo ""

# Test 3: Project bestanden
echo "Test 3: Project bestanden..."
files_ok=true

if [ -f "server/package.json" ]; then
    echo "✅ server/package.json"
else
    echo "❌ server/package.json ONTBREEKT"
    files_ok=false
fi

if [ -f "server/index.js" ]; then
    echo "✅ server/index.js"
else
    echo "❌ server/index.js ONTBREEKT"
    files_ok=false
fi

if [ -f "client/package.json" ]; then
    echo "✅ client/package.json"
else
    echo "❌ client/package.json ONTBREEKT"
    files_ok=false
fi

if [ -f "client/src/App.jsx" ]; then
    echo "✅ client/src/App.jsx"
else
    echo "❌ client/src/App.jsx ONTBREEKT"
    files_ok=false
fi

echo ""

# Test 4: Dependencies
echo "Test 4: Dependencies..."
if [ -d "server/node_modules" ]; then
    echo "✅ Server dependencies geïnstalleerd"
else
    echo "⚠️  Server dependencies NIET geïnstalleerd - run: cd server && npm install"
fi

if [ -d "client/node_modules" ]; then
    echo "✅ Client dependencies geïnstalleerd"
else
    echo "⚠️  Client dependencies NIET geïnstalleerd - run: cd client && npm install"
fi

echo ""

# Test 5: Poorten vrij?
echo "Test 5: Poort beschikbaarheid..."
if lsof -Pi :4000 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "⚠️  Poort 4000 is al in gebruik!"
else
    echo "✅ Poort 4000 is vrij (backend)"
fi

if lsof -Pi :5173 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "⚠️  Poort 5173 is al in gebruik!"
else
    echo "✅ Poort 5173 is vrij (frontend)"
fi

echo ""
echo "===================="

if [ "$files_ok" = true ]; then
    echo "✅ Setup test GESLAAGD!"
    echo ""
    echo "Volgende stap: run ./start.sh om Clinch te starten"
else
    echo "❌ Setup test MISLUKT - er ontbreken bestanden"
fi
