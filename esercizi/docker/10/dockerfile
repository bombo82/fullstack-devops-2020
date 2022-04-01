FROM node:alpine AS builder

WORKDIR /app

COPY package*.json . 

RUN npm install




FROM node:alpine

WORKDIR /app

COPY server.js .

COPY --from=builder /app/node_modules ./node_modules 

EXPOSE 3000

CMD ["node", "/app/server.js"]
