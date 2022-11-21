FROM node:lts

WORKDIR /app

EXPOSE 3000

RUN yarn add global nodemon ts-node

RUN yarn install

CMD ["yarn", "dev"]