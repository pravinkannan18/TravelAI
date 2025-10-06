@echo off
REM Build and push Docker image script for Windows
setlocal enabledelayedexpansion

REM Configuration
set IMAGE_NAME=travelai
set REGISTRY=ghcr.io/pravinkannan18
set VERSION=%1
if "%VERSION%"=="" set VERSION=latest

echo 🚀 Building TravelAI Docker image...

REM Build the image
echo 📦 Building production image...
docker build -t %IMAGE_NAME%:%VERSION% .
if errorlevel 1 (
    echo ❌ Docker build failed!
    echo.
    echo 💡 Try these solutions:
    echo    1. Clear Docker cache: docker system prune -a
    echo    2. Check if ports 3000/3001 are available
    echo    3. Update Docker Desktop
    echo    4. Use development mode: scripts\dev-start.bat
    pause
    exit /b 1
)

echo ✅ Build successful!

REM Tag for registry
docker tag %IMAGE_NAME%:%VERSION% %REGISTRY%/%IMAGE_NAME%:%VERSION%
docker tag %IMAGE_NAME%:%VERSION% %REGISTRY%/%IMAGE_NAME%:latest

echo ✅ Image built and tagged successfully!

REM Push to registry (optional - uncomment if you want to push)
REM echo 📤 Pushing to registry...
REM docker push %REGISTRY%/%IMAGE_NAME%:%VERSION%
REM docker push %REGISTRY%/%IMAGE_NAME%:latest
REM echo ✅ Image pushed successfully!

echo 🎉 Build complete! Image: %IMAGE_NAME%:%VERSION%
pause