#!/bin/bash

echo "🦷 Clinch opstarten..."
echo ""

if ! command -v node &> /dev/null
then
    echo "❌ Node.js is niet geïnstalleerd!"
    echo "Download van: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js gevonden: $(node --version)"
echo ""

if [ ! -d "server/node_modules" ]; then
    echo "📦 Server dependencies installeren..."
    cd server && npm install && cd ..
fi

if [ ! -d "client/node_modules" ]; then
    echo "📦 Client dependencies installeren..."
    cd client && npm install && cd ..
fi

echo ""
echo "🚀 Servers starten..."
echo ""
echo "Backend: http://localhost:4000"
echo "Frontend: http://localhost:5173"
echo ""
echo "⚠️  Druk op Ctrl+C om beide servers te stoppen"
echo ""

cd server && npm run dev &
SERVER_PID=$!

cd ../client && npm run dev &
CLIENT_PID=$!

trap "kill $SERVER_PID $CLIENT_PID; exit" INT

wait
