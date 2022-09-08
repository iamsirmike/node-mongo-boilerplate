import dotenv from "dotenv";
import express, { json } from "express";
import helmet from "helmet";
import morgan from "morgan";

import userRouter from "./src/routes/authRoute";


dotenv.config();


const app = express();

app.use(helmet());
app.use(morgan("combined"));
app.use(json());

app.use("/auth", userRouter);


export default app;
