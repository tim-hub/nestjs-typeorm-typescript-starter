FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run test
RUN npm run build

CMD ["/bin/sh", "./infra/entry.sh"]
