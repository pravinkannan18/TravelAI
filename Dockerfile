# Multi-stage build for React frontend
FROM node:18-alpine AS frontend-builder

# Set working directory
WORKDIR /app/frontend

# Install build dependencies for native modules
RUN apk add --no-cache python3 make g++

# Copy package files
COPY frontend/package*.json ./

# Clean install with proper platform support
RUN npm ci --include=dev --ignore-scripts

# Rebuild native dependencies for Alpine Linux
RUN npm rebuild

# Copy source code
COPY frontend/ .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine AS production

# Copy built assets from builder stage
COPY --from=frontend-builder /app/frontend/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]