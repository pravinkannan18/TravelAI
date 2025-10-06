@echo off
echo 🚀 Quick Fix - TravelAI Development Start
echo.

REM Check if Docker is running
docker info >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker is not running. Please start Docker Desktop and try again.
    pause
    exit /b 1
)

echo ✅ Docker is running

echo � Stopping any existing containers...
docker-compose -f docker-compose.dev.yml down

echo �🔨 Starting development environment (skips production build)...
docker-compose -f docker-compose.dev.yml up --build

echo.
echo 🎉 Development environment started!
echo 🌐 Access your app at: http://localhost:3001
echo 📖 For production builds, see DOCKER-TROUBLESHOOTING.md
pause