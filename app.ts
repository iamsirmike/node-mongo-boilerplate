import dotenv from "dotenv";
import express, { json } from "express";
import helmet from "helmet";
import { StatusCodes } from "http-status-codes";
import morgan from "morgan";

import userRouter from "./src/routes/authRoute";

dotenv.config();

const errorHandling = (err: any, req: any, res: any, next: any) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    msg: err.message,
    success: false,
  });
};

const app = express();

app.use(helmet());
app.use(morgan("combined"));
app.use(json());

app.use("/auth", userRouter);

app.use(errorHandling);

export default app;
