import joi from "joi";
import { joiValidator } from "../helpers/joiValidator";
import { UserInterface } from "../interfaces/userInterface";

export const createAccountValidator = async(data: UserInterface) => {
const joiObject = joi.object({
        username: joi.string().min(4).required().label("Username"),
        fullname: joi.string().required().label("Fullname"),
        age: joi.number().required().label("Age"),
        password: joi.string().required().label("Password"),
    });
  const validate = joiValidator(joiObject, data);

  return validate;
}