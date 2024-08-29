# Build Stage
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM node:18 AS runtime

WORKDIR /app
COPY --from=build /app ./
RUN npm install --only=production
CMD ["npm", "start"]

EXPOSE 3000
