FROM node:10.15.3

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

EXPOSE 3003

CMD [ "npm", "start" ]