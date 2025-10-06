# 🚀 Quick Start Guide - TravelAI Docker & CI/CD

## Immediate Setup (5 minutes)

### 1. Test Your Setup
```cmd
# Run this first to verify everything works
scripts\test-setup.bat
```

### 2. Quick Development Start
```cmd
# Start development environment
scripts\dev-start.bat

# Your app will be available at: http://localhost:3001
```

### 3. Production Build
```cmd
# Build production Docker image
scripts\build.bat

# Start production environment
docker-compose up -d

# Your app will be available at: http://localhost:3000
```

## 🔧 Environment Setup

1. **Copy environment file:**
   ```cmd
   copy .env.example .env
   ```

2. **Edit `.env` with your external Supabase credentials:**
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

## 🚀 GitHub CI/CD Setup

1. **Push to GitHub:**
   ```cmd
   git add .
   git commit -m "Add Docker and CI/CD setup"
   git push origin main
   ```

2. **Add GitHub Secrets:**
   - Go to repository Settings → Secrets → Actions
   - Add `SUPABASE_ACCESS_TOKEN` and `SUPABASE_PROJECT_ID`

3. **Pipeline runs automatically on every push!**

## 📋 Commands Cheat Sheet

| Task | Command |
|------|---------|
| **Development** | `scripts\dev-start.bat` |
| **Production** | `docker-compose up -d` |
| **Build only** | `scripts\build.bat` |
| **View logs** | `docker-compose logs -f` |
| **Stop all** | `docker-compose down` |

## 🆘 Troubleshooting

**Docker not working?**
- Make sure Docker Desktop is running
- Restart Docker Desktop
- Check Windows containers vs Linux containers

**Build failing?**
- Run `docker system prune -a` to clean up
- Try Ubuntu build: `docker build -t travelai . -f Dockerfile.ubuntu`
- Use development mode: `docker-compose -f docker-compose.dev.yml up`

**Can't access app?**
- Check if containers are running: `docker-compose ps`
- Try different ports in docker-compose.yml

**For detailed troubleshooting**: See [DOCKER-TROUBLESHOOTING.md](DOCKER-TROUBLESHOOTING.md)

## 📖 Full Documentation

For complete setup instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

---
**Ready in 5 minutes!** 🎉