FROM node:10-alpine

COPY . .

EXPOSE 8080

CMD [ "yarn", "start" ]