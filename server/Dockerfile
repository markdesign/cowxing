FROM node:16-alpine

WORKDIR /app
EXPOSE 4301 

COPY package.json package-lock.json ./

RUN npm install --silent

COPY . ./

CMD ["npm", "start"]