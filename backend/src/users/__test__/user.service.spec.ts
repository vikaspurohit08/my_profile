import { InternalServerError } from "../../common/errors/internal-server-error";
import userRepository from "../user.repository";
import userService from "../user.service";
import { IUserModel } from "../user.type";
import { mockUserModel } from "../__mock__/user.data";

jest.mock("../user.repository");

describe("User Service", () => {
  beforeEach(async () => {
    jest.resetAllMocks();
  });

  afterEach(async () => {
    expect.hasAssertions();
  });

  describe("#signup", () => {
    it("should signup successfully if email and password are valid", async () => {
      //Given
      (userRepository.signUp as jest.Mock).mockResolvedValueOnce(mockUserModel);

      const result: IUserModel = await userService.signUp({
        email: mockUserModel.email,
        password: mockUserModel.password,
      });

      expect(result).toEqual(mockUserModel);
      expect(userRepository.signUp).toBeCalledTimes(1);
    });

    it("should throw error if sign up fails", async () => {
      //Given

      (userRepository.signUp as jest.Mock).mockImplementationOnce(() => {
        throw new Error("Some Error");
      });

      try {
        const result: IUserModel = await userService.signUp({
          email: mockUserModel.email,
          password: mockUserModel.password,
        });
      } catch (err) {
        expect(err).toBeInstanceOf(InternalServerError);
      }
    });
  });
});
