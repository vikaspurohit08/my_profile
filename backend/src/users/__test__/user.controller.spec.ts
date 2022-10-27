import request from "supertest";
import { app } from "../../app";
import userService from "../user.service";
import { mockUserModel } from "../__mock__/user.data";

jest.mock("../user.service");

describe("User controller", () => {
  let server = request(app);
  describe("#signup", () => {
    it("returns 201 on successful signup", async () => {
      (userService.signUp as jest.Mock).mockResolvedValueOnce(mockUserModel);

      const response = await server.post("/users/signup").send({
        email: "abc@test.com",
        password: "12345",
        confirmPassword: "12345",
      });

      expect(response.statusCode).toBe(201);
      expect(userService.signUp).toHaveBeenCalledTimes(1);
      expect(response.body).toEqual(mockUserModel);
    });

    it("returns fail to signup if confirm password is not same as password", async () => {
      const response = await server.post("/users/signup").send({
        email: "abc@test.com",
        password: "12345",
        confirmPassword: "123",
      });

      expect(response.statusCode).toBe(400);
    });

    it("returns fail to signup if email is not valid", async () => {
      const response = await server.post("/users/signup").send({
        email: "abctestcom",
        password: "12345",
        confirmPassword: "123",
      });

      expect(response.statusCode).toBe(400);
    });

    it("returns fail to signup if email or password is provided", async () => {
      const response = await server.post("/users/signup").send({});

      expect(response.statusCode).toBe(400);
    });
  });
});
