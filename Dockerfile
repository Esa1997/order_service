FROM node:18-alpine3.14

WORKDIR /app

COPY . .

RUN npm install express mongodb body-parser

EXPOSE 3000

CMD ["node", "server.js"]