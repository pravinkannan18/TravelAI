# TravelAI Docker & CI/CD Setup Guide

This guide provides step-by-step instructions for setting up Docker containerization and CI/CD pipeline for the TravelAI project.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/Mac/Linux)
- [Node.js 18+](https://nodejs.org/) (for local development)
- [Git](https://git-scm.com/)
- A GitHub account
- [Supabase CLI](https://supabase.com/docs/guides/cli) (for Supabase functions)

## 🐳 Docker Setup

### 1. Local Development with Docker

```bash
# Clone your repository
git clone https://github.com/pravinkannan18/TravelAI.git
cd TravelAI

# Start development environment
docker-compose -f docker-compose.dev.yml up --build

# Access your application
# Frontend: http://localhost:3001
```

### 2. Production Build

```bash
# Build production image
docker build -t travelai:latest .

# Run production container
docker-compose up -d

# Access your application
# Frontend: http://localhost:3000
```

### 3. Using Build Scripts

**Windows:**
```cmd
# Build image
scripts\build.bat

# Start development
scripts\dev-deploy.bat
```

**Linux/Mac:**
```bash
# Make scripts executable
chmod +x scripts/*.sh

# Build image
./scripts/build.sh

# Start development
./scripts/dev-deploy.sh
```

## 🚀 CI/CD Pipeline Setup

### Step 1: GitHub Repository Setup

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit with Docker and CI/CD setup"
   git push origin main
   ```

2. **Enable GitHub Container Registry:**
   - Go to your GitHub repository
   - Navigate to Settings → Actions → General
   - Under "Workflow permissions", select "Read and write permissions"

### Step 2: Configure Secrets

Add the following secrets in your GitHub repository:

1. Go to **Settings → Secrets and variables → Actions**
2. Add these repository secrets:

```
SUPABASE_ACCESS_TOKEN=your_supabase_access_token
SUPABASE_PROJECT_ID=your_supabase_project_id
```

**How to get Supabase credentials:**
- Access Token: Generate from [Supabase Dashboard → Settings → API](https://supabase.com/dashboard/account/tokens)
- Project ID: Found in your Supabase project URL or dashboard

### Step 3: Environment Configuration

1. **Copy environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Configure your environment variables:**
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   VITE_API_BASE_URL=https://your-api-domain.com
   ```

### Step 4: Pipeline Workflow

The CI/CD pipeline automatically:

1. **On Pull Request:**
   - Runs tests and linting
   - Performs security scanning
   - Builds the application

2. **On Push to Main:**
   - Runs all tests
   - Builds and pushes Docker image to GitHub Container Registry
   - Deploys to production (if configured)

3. **On Supabase Functions Change:**
   - Deploys Supabase Edge Functions automatically

## 🌐 Deployment Options

### Option 1: Cloud Platforms

**Vercel (Recommended for frontend):**
```bash
npm install -g vercel
cd frontend
vercel --prod
```

**Netlify:**
```bash
# Build command: npm run build
# Publish directory: dist
# Connect your GitHub repository
```

**Railway:**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Deploy
railway login
railway link
railway up
```

### Option 2: Container Platforms

**Docker Hub:**
```bash
# Build and push
docker build -t your-username/travelai:latest .
docker push your-username/travelai:latest
```

**Google Cloud Run:**
```bash
# Build and deploy
gcloud builds submit --tag gcr.io/PROJECT_ID/travelai
gcloud run deploy --image gcr.io/PROJECT_ID/travelai --platform managed
```

**AWS ECS/Fargate:**
```bash
# Push to ECR
aws ecr create-repository --repository-name travelai
docker tag travelai:latest YOUR_ECR_URI:latest
docker push YOUR_ECR_URI:latest
```

### Option 3: Kubernetes

1. **Update k8s/deployment.yaml** with your domain and image
2. **Deploy to cluster:**
   ```bash
   kubectl apply -f k8s/deployment.yaml
   ```

## 🔧 Local Development

### Development Commands

```bash
# Start development server
cd frontend
npm run dev

# Run with Docker (hot reload)
docker-compose -f docker-compose.dev.yml up

# Build production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Debugging

**View container logs:**
```bash
docker-compose logs -f frontend
```

**Access container shell:**
```bash
docker-compose exec frontend sh
```

**Check container status:**
```bash
docker-compose ps
```

## 📊 Monitoring & Observability

### Application Monitoring

Add these environment variables for monitoring:

```env
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
VITE_ENABLE_ANALYTICS=true
```

### Docker Health Checks

The Docker setup includes:
- ✅ Nginx health checks
- ✅ Gzip compression
- ✅ Static asset caching
- ✅ Security headers

### CI/CD Monitoring

Monitor your pipeline:
- GitHub Actions tab for build status
- Container registry for image updates
- Supabase dashboard for function deployments

## 🔒 Security Best Practices

1. **Environment Variables:**
   - Never commit `.env` files
   - Use GitHub Secrets for sensitive data
   - Rotate access tokens regularly

2. **Docker Security:**
   - Use specific image tags (not `latest` in production)
   - Scan images for vulnerabilities
   - Run containers as non-root user

3. **Supabase Security:**
   - Use external Supabase service for database
   - Enable Row Level Security (RLS) in Supabase dashboard
   - Use proper JWT verification in Supabase functions
   - Limit API access with proper keys

## 🚨 Troubleshooting

### Common Issues

**Docker build fails:**
```bash
# Clear Docker cache
docker builder prune -a

# Check Docker resources
docker system df
```

**CI/CD pipeline fails:**
- Check GitHub Actions logs
- Verify secrets are set correctly
- Ensure package.json scripts work locally

**Supabase deployment fails:**
- Verify SUPABASE_ACCESS_TOKEN
- Check function syntax
- Ensure project ID is correct

### Getting Help

1. Check the GitHub Actions logs
2. Review Docker container logs
3. Test locally before pushing
4. Check Supabase function logs in dashboard

## 📝 Next Steps

1. **Set up monitoring** (Google Analytics, error tracking)
2. **Configure CDN** (Cloudflare, AWS CloudFront)
3. **Configure external Supabase** (database, authentication, functions)
4. **Set up backup strategies** for external services
5. **Configure custom domain** with SSL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with Docker
5. Submit a pull request

The CI/CD pipeline will automatically test your changes!

---

**Need help?** Open an issue in the GitHub repository or check the logs in your deployment platform.