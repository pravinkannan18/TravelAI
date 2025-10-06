@echo off
echo 🔍 Test# Test build (dry run)
echo 🔨 Testing Docker build...
docker build -t travelai-test . --no-cache
if errorlevel 1 (
    echo ❌ Alpine build failed, trying Ubuntu-based build...
    docker build -t travelai-test . -f Dockerfile.ubuntu --no-cache
    if errorlevel 1 (
        echo ❌ Both Docker builds failed
        echo 💡 Common solutions:
        echo    1. Clear Docker cache: docker system prune -a
        echo    2. Update Docker Desktop
        echo    3. Try development mode: scripts\dev-start.bat
        pause
        exit /b 1
    )
    echo ✅ Ubuntu-based Docker build successful!
) else (
    echo ✅ Alpine-based Docker build successful!
)AI Docker Setup...
echo.

REM Check if Docker is running
docker info >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker is not running. Please start Docker Desktop and try again.
    pause
    exit /b 1
)

echo ✅ Docker is running

REM Check if we're in the right directory
if not exist "frontend\package.json" (
    echo ❌ Please run this script from the TravelAI root directory
    pause
    exit /b 1
)

echo ✅ Found frontend directory

REM Test build (dry run)
echo 🔨 Testing Docker build...
docker build -t travelai-test . --no-cache
if errorlevel 1 (
    echo ❌ Docker build failed
    pause
    exit /b 1
)

echo ✅ Docker build successful!
echo.
echo 🎉 Setup verification complete!
echo.
echo Next steps:
echo 1. Copy .env.example to .env and configure your Supabase credentials
echo 2. Run: docker-compose up -d (for production)
echo 3. Or run: docker-compose -f docker-compose.dev.yml up (for development)
echo 4. Configure external Supabase service for database and functions
echo.
pause