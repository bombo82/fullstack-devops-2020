FROM node:alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm set progress=false && \
    npm config set depth 0 && \
    npm install
COPY . /app
RUN npm run ng build -- --prod --outputPath=./dist/out

FROM nginx
COPY --from=builder /app/dist/out usr/share/nginx/html
