FROM node

WORKDIR /API

COPY . /API

RUN npm install

EXPOSE 3000

CMD ["npm","start"]