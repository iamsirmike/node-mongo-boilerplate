export interface UserInterface {
  username: String;
  fullname: String;
  age: Number;
  password: String;
}

export interface UserInstanceMethods {
  comparePassword(password: string): Promise<boolean>;
}
