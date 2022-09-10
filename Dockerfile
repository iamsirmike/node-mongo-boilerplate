FROM node:buster
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
EXPOSE 6000
CMD npm run start