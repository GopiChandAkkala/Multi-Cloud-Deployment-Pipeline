FROM node:14-alpine
 
WORKDIR /
 
COPY app/package.json package.json
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "/app/app.js" ]
