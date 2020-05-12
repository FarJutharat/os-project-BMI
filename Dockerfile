FROM node:9-alpine

COPY . /src
RUN cd /src && npm install
EXPOSE 3003
CMD ["node", "/src/server.js"]

