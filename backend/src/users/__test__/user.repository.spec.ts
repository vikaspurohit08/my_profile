import { MongoError } from "mongodb";
import { UserModel } from "../user.model";
import userRepository from "../user.repository";
import {
  mockAuthInput,
  mockUserDetailInput,
  mockUserModel,
} from "../__mock__/user.data";

describe("user repository", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterEach(async () => {
    await UserModel.remove({});
  });

  describe("#signUp", () => {
    it("should signup successfully if email is unique", async () => {
      // When
      const result = await userRepository.signUp(mockAuthInput);

      // Then
      expect(result).not.toBeNull();
      expect(result?.email).toEqual(mockAuthInput.email);
    });

    it("should throw error if email already exists", async () => {
      // Given
      await UserModel.create(mockAuthInput);

      try {
        // When
        await userRepository.signUp(mockAuthInput);
      } catch (error) {
        // Then
        expect(error).not.toBeNull();
        expect((error as MongoError)?.name).toEqual("MongoServerError");
        expect((error as MongoError)?.message).toContain(
          "E11000 duplicate key error collection"
        );
      }
    });
  });

  describe("#get", () => {
    it("should give user by email successfully", async () => {
      // Given
      const response = await UserModel.create(mockAuthInput);

      // When
      const result = await userRepository.get(response.id);

      // Then
      expect(result).not.toBeNull();
      expect(result?.email).toEqual(response.email);
    });

    it("should return null if no user found", async () => {
      // When
      const result = await userRepository.get("userId");

      // Then
      expect(result).toBeNull();
    });
  });

  describe("#getUserByEmail", () => {
    it("should give user by email successfully", async () => {
      // Given
      const response = await UserModel.create(mockAuthInput);

      // When
      const result = await userRepository.getUserByEmail(mockAuthInput.email);

      // Then
      expect(result).not.toBeNull();
      expect(result?.email).toEqual(response.email);
    });

    it("should return null if no user found", async () => {
      // When
      const result = await userRepository.getUserByEmail("abc@test.com");

      // Then
      expect(result).toBeNull();
    });
  });

  describe("#patchUser", () => {
    it("should patch user details successfully", async () => {
      // Given
      const response = await UserModel.create(mockUserModel);

      // When
      const result = await userRepository.patchUserDetails(
        response.id,
        mockUserDetailInput
      );

      // Then
      expect(result).not.toBeNull();
      expect(result?.email).toEqual(response.email);
      expect(result?.contact).toEqual(mockUserDetailInput.contact);
      expect(result?.description).toEqual(mockUserDetailInput.description);
      expect(result?.location).toEqual(mockUserDetailInput.location);
    });

    it("should not patch user details if user does not exist successfully", async () => {
      // When
      const result = await userRepository.patchUserDetails(
        "random id",
        mockUserDetailInput
      );

      // Then
      expect(result).toBeNull();
    });
  });
});
