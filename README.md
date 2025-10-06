# 🌍 TravelAI - Smart Travel Planning Platform

A modern, AI-powered travel planning application built with React, TypeScript, and external Supabase integration.

## 🏗️ Architecture

```
TravelAI (Containerized Frontend)
├── React + TypeScript + Vite
├── Docker Container (Production Ready)
├── Nginx (Static File Serving)
└── External Integrations:
    ├── Supabase (Database + Auth + Functions)
    ├── AI Services (Travel Planning)
    └── Third-party APIs
```

## 🚀 Quick Start

**Want to get up and running fast?** 
👉 **[QUICK START GUIDE](QUICK-START.md)** - Ready in 5 minutes!

## 📚 Documentation

- 📖 **[Full Deployment Guide](DEPLOYMENT.md)** - Complete Docker & CI/CD setup
- 🚀 **[Quick Start](QUICK-START.md)** - Get running in 5 minutes
- 🔧 **[Development Setup](#development)** - Local development guide

## 🐳 Docker & CI/CD Ready

This project includes:
- ✅ Multi-stage Docker builds
- ✅ GitHub Actions CI/CD pipeline
- ✅ Automated testing and security scanning
- ✅ Container registry integration
- ✅ Production-ready deployments

### Quick Commands

```bash
# 🚀 Start development environment
docker-compose -f docker-compose.dev.yml up

# 🏗️ Build production image
scripts/build.bat  # Windows
./scripts/build.sh # Linux/Mac

# 🌐 Deploy production
docker-compose up -d
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI
- **3D Graphics**: Three.js, React Three Fiber
- **Backend**: External Supabase (Database, Auth, Functions)
- **State Management**: TanStack Query
- **Deployment**: Docker, GitHub Actions
- **Infrastructure**: No local database - uses external services

## 💻 Development

### Prerequisites
- Node.js 18+
- Docker Desktop
- Git

### Local Setup

1. **Clone and install:**
   ```bash
   git clone <your-repo-url>
   cd TravelAI
   cd frontend
   npm install
   ```

2. **Environment setup:**
   ```bash
   cp .env.example .env
   # Edit .env with your Supabase credentials
   ```

3. **Start development:**
   ```bash
   npm run dev
   # Or with Docker: docker-compose -f docker-compose.dev.yml up
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🌐 Deployment Options

| Platform | Setup | Documentation |
|----------|-------|---------------|
| **Docker** | `docker-compose up` | [Full Guide](DEPLOYMENT.md) |
| **Vercel** | Connect GitHub repo | [Vercel Docs](https://vercel.com/docs) |
| **Netlify** | Connect GitHub repo | [Netlify Docs](https://docs.netlify.com) |
| **Railway** | `railway up` | [Railway Docs](https://docs.railway.app) |

## 🔄 CI/CD Pipeline

The GitHub Actions pipeline automatically:

1. **🧪 Tests & Quality:**
   - Runs ESLint and type checking
   - Builds the application
   - Security vulnerability scanning

2. **🏗️ Build & Deploy:**
   - Builds Docker images
   - Pushes to GitHub Container Registry
   - Deploys Supabase functions

3. **🚀 Environments:**
   - **Staging**: `develop` branch
   - **Production**: `main` branch

## 🗂️ Project Structure

```
TravelAI/
├── 🐳 Docker files (Dockerfile, docker-compose.yml)
├── 🔄 CI/CD (.github/workflows/)
├── 📜 Scripts (scripts/)
├── ☸️ Kubernetes (k8s/)
└── frontend/
    ├── src/
    │   ├── components/     # React components
    │   ├── pages/         # Page components
    │   ├── hooks/         # Custom hooks
    │   └── lib/           # Utilities
    └── supabase/
        └── functions/     # Edge functions
```

## 🔧 Configuration

### Environment Variables

```env
# Supabase
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key

# Optional
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
VITE_ENABLE_ANALYTICS=true
```

### Docker Configuration

- **Development**: `docker-compose.dev.yml`
- **Production**: `docker-compose.yml`
- **Kubernetes**: `k8s/deployment.yaml`

## 📊 Features

- 🤖 **AI Travel Planning** - Smart itinerary generation
- 🗺️ **Interactive Maps** - Explore destinations
- 👥 **Local Guides** - Connect with local experts
- 📱 **Responsive Design** - Works on all devices
- 🔐 **Authentication** - Secure user accounts
- 💬 **Real-time Chat** - AI-powered assistance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with Docker: `docker-compose -f docker-compose.dev.yml up`
5. Submit a pull request

The CI/CD pipeline will automatically test your changes!

## 📞 Support

- 📖 **Documentation**: Check [DEPLOYMENT.md](DEPLOYMENT.md)
- 🐛 **Issues**: Open a GitHub issue
- 💬 **Discussions**: Use GitHub Discussions

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**🚀 Ready to deploy?** Start with the [Quick Start Guide](QUICK-START.md)!