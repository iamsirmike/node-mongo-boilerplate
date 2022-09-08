import { Router } from "express";
import { createUser } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/createUser", createUser);

export default userRouter;
