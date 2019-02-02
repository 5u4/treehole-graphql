FROM node:alpine

WORKDIR /opt/treehole-server

EXPOSE 4000

CMD yarn serve
