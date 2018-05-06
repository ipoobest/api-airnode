FROM node:alpine
RUN mkdir -p /usr/src/app
ENV TZ=Asia/Bangkok
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app
RUN npm install
RUN npm install pm2 -g
COPY . /usr/src/app
EXPOSE 80
CMD [ "npm", "start" ]
