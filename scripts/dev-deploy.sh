#!/bin/bash

# Local development deployment script
set -e

echo "🔧 Starting TravelAI local development environment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Stop any existing containers
echo "🛑 Stopping existing containers..."
docker-compose -f docker-compose.dev.yml down

# Build and start development environment
echo "🚀 Starting development environment..."
docker-compose -f docker-compose.dev.yml up --build -d

# Show container status
echo "📊 Container status:"
docker-compose -f docker-compose.dev.yml ps

echo "✅ Development environment started!"
echo "🌐 Frontend available at: http://localhost:3001"
echo "📝 To view logs: docker-compose -f docker-compose.dev.yml logs -f"
echo "🛑 To stop: docker-compose -f docker-compose.dev.yml down"