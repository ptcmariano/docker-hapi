FROM node:10

COPY . /src
RUN cd /src; npm install
EXPOSE 9000
CMD ["node", "/src/server.js"]
