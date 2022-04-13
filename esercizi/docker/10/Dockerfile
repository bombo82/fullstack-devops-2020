FROM node:alpine AS builder
COPY package.json /app/
WORKDIR /app
RUN npm install

FROM node:alpine
COPY --from=builder /app/node_modules /app/node_modules
COPY server.js /app/

EXPOSE 3000

ENTRYPOINT [ "node", "/app/server.js" ]
