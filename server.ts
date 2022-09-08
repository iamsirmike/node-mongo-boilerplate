//Create our server using http and pass app to it.
//App is coming from app.js which is our express app.
//We now use express as a middleware to handle our requests.

import { createServer, Server } from "http";

import app from "./app";
import mongo from "./src/db/mongo";

//You will have to put the port number in dotenv
const PORT = process.env.PORT || 6000;

const server: Server = createServer(app);

async function startServer() {
  try {
    await mongo.mongoConnect();

    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
