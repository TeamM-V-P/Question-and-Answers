FROM node:10.15.3

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package*.json /src/app/

COPY . /src/app/

RUN npm install

EXPOSE 3003

CMD [ "npm", "start" ]