FROM node:16
WORKDIR usr/src/app/angular-app
COPY angular-app/ .
RUN npm install
RUN npm run build --configuration=production

WORKDIR /usr/src/app/express-server
COPY express-server/ .
RUN npm install

EXPOSE 8080
CMD ["node", "server.js"]