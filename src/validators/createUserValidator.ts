import joi from "joi";
import { UserInterface } from "../interfaces/userInterface";
import { joiValidator } from "../helpers/joiValidator";

export const createAccountValidator = async(data: UserInterface) => {
const joiObject = joi.object({
        username: joi.string().min(4).required().label("Username"),
        fullname: joi.string().email().required().label("Fullname"),
        age: joi.number().required().label("Role"),
        password: joi.string().required().label("Password"),
    });
  const validate = joiValidator(joiObject, data);

  return validate;
}