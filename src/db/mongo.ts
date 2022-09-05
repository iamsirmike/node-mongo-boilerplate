import mongoose from "mongoose";

const MONGO_URL: string = process.env.MONGO_URL!;

mongoose.connection.once("open", () => {
  console.log("Mongo connection is ready!");
});

mongoose.connection.on("err", () => {
  console.error("Mongo connection error!");
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

export default {
  mongoConnect,
  mongoDisconnect,
};
