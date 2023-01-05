FROM node:19-slim AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm i
COPY . ./ 
RUN npm run build

FROM nginx:1.19-alpine
COPY --from=build /app/dist /usr/share/nginx/html