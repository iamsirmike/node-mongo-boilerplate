import jsonwebtoken from "jsonwebtoken";
import { UserInterface } from "../interfaces/userInterface";

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
