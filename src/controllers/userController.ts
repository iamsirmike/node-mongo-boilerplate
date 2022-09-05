import { Response } from "express";
import generateToken from "../helpers/jwt";
import { CustomResponse } from "../helpers/response";
import { UserInterface } from "../interfaces/userInterface";
import UserModel from "../models/userModel";
import { createAccountValidator } from "../validators/createUserValidator";

export const createUser = async (req: any, res: Response) =>{
    const requestBody: UserInterface = req.body;

    const validateInput = await createAccountValidator(requestBody);

    //There is a validation error when true
    if(validateInput){
        return res.send(CustomResponse.responseWithoutData(400,validateInput ));
      }

    const userExist = await UserModel.findOne({username: requestBody.username});

    if (userExist) {
    return res.send(CustomResponse.responseWithoutData(401, "Username already exist"));
    }

   const user: UserInterface = await UserModel.create(requestBody);

   const userToken: string = generateToken(user);


   res.send(CustomResponse.responseWithData(201, "User created", {userToken, user: user}));

    
}