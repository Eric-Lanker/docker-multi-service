# Use official Node.js image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
