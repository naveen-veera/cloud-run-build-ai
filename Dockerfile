FROM node:14-alpine
RUN apk add --no-cache bash
USER root

RUN apk update
COPY ./app.js /
COPY ./package.json /

RUN npm install
EXPOSE 3000
CMD node app.js

