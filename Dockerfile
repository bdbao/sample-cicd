# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json và cài đặt dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ source code
COPY . .

# Expose port và chạy app
EXPOSE 3000
CMD ["npm", "start"]
