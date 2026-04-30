FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start the application
CMD ["node", "server.js"]
