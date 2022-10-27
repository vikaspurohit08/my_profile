import { BadRequestError } from "../common/errors/bad-request-error";
import { InternalServerError } from "../common/errors/internal-server-error";
import { Password } from "../common/util/password";
import userRepository from "./user.repository";
import { IAuthInputModel, IUserDetailInput } from "./user.type";

const signUp = async (authInput: IAuthInputModel) => {
  try {
    return await userRepository.signUp(authInput);
  } catch (error) {
    console.error("Failed to signup with error", error);
    throw new InternalServerError();
  }
};

const signIn = async (loginInput: IAuthInputModel) => {
  try {
    const exisitingUser = await userRepository.getUserByEmail(loginInput.email);
    if (!exisitingUser) {
      throw new BadRequestError("Invalid credentials", "email");
    }
    const passwordsMatch = await Password.compare(
      exisitingUser.password,
      loginInput.password
    );

    if (!passwordsMatch) {
      throw new BadRequestError("Invalid credentials", "password");
    }
    return exisitingUser;
  } catch (error) {
    console.error("Failed to login with error", error);
    throw error;
  }
};

const patchUser = async (id: string, input: IUserDetailInput) => {
  const existingUser = await userRepository.get(id);
  console.log("existing");
  if (!existingUser) {
    throw new BadRequestError(`User with id: ${id} does not exist`);
  }
  const updatedUser = await userRepository.patchUserDetails(id, input);
  if (!updatedUser) {
    throw new InternalServerError(`Failed to update user with id: ${id}`);
  }
  return updatedUser;
};

export default {
  signUp,
  signIn,
  patchUser,
};
