FROM node:18-alpine

WORKDIR /app

COPY BackEnd/package*.json ./

RUN npm install

COPY BackEnd/ .

EXPOSE 8000

CMD ["npm", "start"] 