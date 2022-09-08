import bcrypt from "bcrypt";
import mongoose from "mongoose";

import { UserInstanceMethods, UserInterface } from "../interfaces/userInterface";

const UserSchema = new mongoose.Schema<UserInterface>({
    username:{
        type: String,
        unique: true,
        required: true
    },
    fullname: {
        type: String,
        required: true,
    },
    age:{
        type: Number
    },
    password:{
        type: String,
        required: true,
    }
});

// hash the password before saving
UserSchema.pre("save", async function (next) {
    const user = this as UserInterface;
    const hash = await bcrypt.hash(user.password, 10);
  
    this.password = hash;
    return next();
  });

//compare passwords during sign in
UserSchema.methods.comparePassword = async function (
	password: string
): Promise<boolean> {
	const user = this;
	const isMatch = bcrypt.compare(password, user.password);
	return isMatch;
};

export default mongoose.model<UserInterface & UserInstanceMethods>("User", UserSchema);