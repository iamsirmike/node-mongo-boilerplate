# node-mongo-boilerplate

A simple boilerplate for NODEJS, EXPRESS and MONGODB REST API development .

## Quick Start

1. Make sure you have [node.js v14 + npm v8 or above installed](https://nodejs.org/en/download/) and [ts-node installed](https://typestrong.org/ts-node/docs/installation/).

2. Clone this repo and cd into it using `git clone git@github.com:iamsirmike/node-mongo-boilerplate.git && cd node-mongo-boilerplate`.

3. This project requires a MongoDB server. Make sure you have an active MongoDB instance locally ([example here](https://www.prisma.io/dataguide/mongodb/setting-up-a-local-mongodb-database)) or remote ([example here](https://www.mongodb.com/basics/mongodb-atlas-tutorial))

4. Create a file named `.env` in the base of your folder and add the mongo url from step 3 above like this

`.env`

```env
MONGO_URL=<url>
```

Replace `<url>` with the actual url.

5. To get the project ready, run `npm install`.

6. To run the project: 
    - To automatically rerun when you save, run `npm run watch`
    - To run once, run `npm run start`
    - To run tests `npm run test`

Now you are ready to rumble!

## Docker

To get this built and running as a [docker](https://docs.docker.com/get-started/) container, run the following commands.
(You need [docker installed](https://docs.docker.com/get-started/#download-and-install-docker) for this)

```bash
docker build . -t node-mongo-boilerplate:latest
docker run -p 6000:6000 -d node-mongo-boilerplate:latest
```
