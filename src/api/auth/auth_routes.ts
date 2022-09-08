import { Router } from "express";
import { createAccount } from "./auth_controller";

const userRouter = Router();

userRouter.post("/createUser", createAccount);

export default userRouter;
