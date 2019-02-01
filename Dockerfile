FROM node:alpine

WORKDIR /opt/treehole-server

COPY . ./

RUN yarn

EXPOSE 4000

CMD yarn prod
