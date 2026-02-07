# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy package files and install production dependencies only
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Copy built application from build stage
COPY --from=build /app/dist ./dist

# Server listens on PORT (default 8050), bound to 0.0.0.0
ENV PORT=8050
EXPOSE 8050

# Run the Angular SSR server
CMD ["node", "dist/ArogyaGhar/server/server.mjs"]
