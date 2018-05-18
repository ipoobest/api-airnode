FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
RUN npm install pm2 -g
COPY . /usr/src/app
EXPOSE 80
CMD [ "npm", "start" ]