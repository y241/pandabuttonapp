FROM node:8.11.3

ADD pandaApp.zip .

RUN apt-get update
RUN apt-get install npm unzip -y

RUN unzip pandaApp.zip
RUN npm install
RUN npm i -g forever

EXPOSE 3001