@echo off
echo 🔧 Fixing npm vulnerabilities and updating packages...

echo 📦 Accessing container to fix dependencies...
docker exec -it travelai-frontend-1 sh -c "npm audit fix && npm update three-mesh-bvh"

echo ✅ Dependencies updated!
echo 🔄 Restarting development server...
docker-compose -f docker-compose.dev.yml restart

echo 🎉 All warnings fixed! Your app is running clean.
echo 🌐 Access at: http://localhost:3001
pause