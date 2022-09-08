import mongoose from "mongoose";

const MONGO_URL: string = process.env.MONGO_URL!;

if (!MONGO_URL)
  throw "Please add a MONGO_URL to the .env file. Read README for help";

mongoose.connection.once("open", () => {
  console.log("Mongo connection is ready!");
});

mongoose.connection.on("err", (err) => {
  console.log("mongo error: " + err.toString());
});

async function mongoConnect() {
  try {
    await mongoose.connect(MONGO_URL);
  } catch (error) {
    console.log(error);
  }
}

async function mongoDisconnect() {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.log;
  }
}

export default {
  mongoConnect,
  mongoDisconnect,
};
