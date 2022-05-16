FROM node:18-alpine3.14

WORKDIR /app

COPY . .

RUN npm install -save express mongodb body-parser
RUN npm install --save-dev nodemon

EXPOSE 3000

CMD ["npm", "run", "dev"]