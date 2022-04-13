FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm set progress=false && \
    npm config set depth 0 && \
    npm install --only=production && \
    npm cache clean --force
COPY . /app
ENV NODE_ENV=production
ENTRYPOINT ["node", "src/server.js"]
EXPOSE 3000
