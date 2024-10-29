FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --output-path=dist/devops-app

FROM nginx:alpine
COPY --from=build /app/dist/devops-app /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]