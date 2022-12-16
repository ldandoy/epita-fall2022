FROM node:lts

WORKDIR /app

EXPOSE 4500

RUN yarn add global nodemon ts-node

RUN yarn install

CMD ["yarn", "dev"]