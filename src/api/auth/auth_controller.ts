import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import generateToken from "../../helpers/jwt";
import { CustomResponse } from "../../helpers/response";
import { UserInterface } from "../../interfaces/user_interface";
import UserModel from "../../models/user_model";
import { createAccountValidator } from "./auth_validator";

export const createAccount = async (req: any, res: Response) => {
  const requestBody: UserInterface = req.body;

  const validateInput = await createAccountValidator(requestBody);

  //There is a validation error when true
  if (validateInput) {
    return res.send(
      CustomResponse.responseWithoutData(StatusCodes.BAD_REQUEST, validateInput)
    );
  }

  const userExist = await UserModel.findOne({ username: requestBody.username });

  if (userExist) {
    return res.send(
      CustomResponse.responseWithoutData(
        StatusCodes.BAD_REQUEST,
        "Username already exist"
      )
    );
  }

  const user: UserInterface = await UserModel.create(requestBody);

  const userToken: string = generateToken(user);

  res.send(
    CustomResponse.responseWithData(StatusCodes.CREATED, "User created", {
      userToken: userToken,
      username: user.username,
      fullname: user.fullname,
      age: user.age,
    })
  );
};
