FROM node:23-alpine AS client

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
