@echo off
REM Clinch Start Script voor Windows
REM Dit script start zowel de backend als frontend

echo 🦷 Clinch opstarten...
echo.

REM Check of Node.js geïnstalleerd is
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is niet geïnstalleerd. Download van https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js gevonden
node --version
echo.

REM Check en installeer dependencies
if not exist "server\node_modules\" (
    echo 📦 Server dependencies installeren...
    cd server
    call npm install
    cd ..
)

if not exist "client\node_modules\" (
    echo 📦 Client dependencies installeren...
    cd client
    call npm install
    cd ..
)

echo.
echo 🚀 Servers starten...
echo.
echo Backend: http://localhost:4000
echo Frontend: http://localhost:5173
echo.
echo ⚠️ Sluit dit venster NIET - de servers draaien hier
echo ⚠️ Druk op Ctrl+C om beide servers te stoppen
echo.

REM Start backend in nieuwe window
start "Clinch Backend" cmd /k "cd server && npm run dev"

REM Wacht 3 seconden
timeout /t 3 /nobreak >nul

REM Start frontend in nieuwe window
start "Clinch Frontend" cmd /k "cd client && npm run dev"

echo.
echo ✅ Beide servers zijn gestart in aparte vensters!
echo 📱 Open je browser op: http://localhost:5173
echo.
pause
