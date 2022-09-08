import request from "supertest";
import app from "../../../app";
import mongo from "../../db/mongo";

describe("Creating user test", () => {
  beforeAll(async () => {
    await mongo.mongoConnect();
  });

  afterAll(async () => {
    await mongo.mongoDisconnect();
  });

  describe("Test POST createUser", () => {
    test("Create user should pass", async () => {
      const userData = {
        fullname: "Michael Asamoah",
        username: "iniesta340",
        password: "12345",
        age: 20,
      };
      await request(app).post("/auth/createUser").send(userData).expect(201);
    });
  });
});
