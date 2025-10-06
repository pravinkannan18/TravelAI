#!/bin/bash

# Build and push Docker image script
set -e

# Configuration
IMAGE_NAME="travelai"
REGISTRY="ghcr.io/pravinkannan18"
VERSION=${1:-latest}

echo "🚀 Building TravelAI Docker image..."

# Build the image
docker build -t $IMAGE_NAME:$VERSION .

# Tag for registry
docker tag $IMAGE_NAME:$VERSION $REGISTRY/$IMAGE_NAME:$VERSION
docker tag $IMAGE_NAME:$VERSION $REGISTRY/$IMAGE_NAME:latest

echo "✅ Image built successfully!"

# Push to registry (optional - uncomment if you want to push)
# echo "📤 Pushing to registry..."
# docker push $REGISTRY/$IMAGE_NAME:$VERSION
# docker push $REGISTRY/$IMAGE_NAME:latest
# echo "✅ Image pushed successfully!"

echo "🎉 Build complete! Image: $IMAGE_NAME:$VERSION"