FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Create the production image
FROM nginx:alpine
COPY --from=node /app/dist/iot /usr/share/nginx/html
  