import jsonwebtoken from "jsonwebtoken";
import { UserInterface } from "../interfaces/user_interface";

function generateToken(user: UserInterface) {
  return jsonwebtoken.sign(
    { username: user.username },
    process.env.JWT_TOKEN!,
    {
      expiresIn: "24h",
    }
  );
}

export default generateToken;
