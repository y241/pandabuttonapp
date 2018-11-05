FROM node:8.11.3

ADD pandaApp.zip .

RUN apt-get update
RUN apt-get install npm unzip -y

RUN unzip pandaApp.zip
RUN npm install

RUN ./node_modules/.bin/gulp

EXPOSE 3000

CMD date ; npm start