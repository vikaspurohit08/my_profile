import { BadRequestError } from "../common/errors/bad-request-error";
import { IUserInputModel } from "../users/user.type";
import userSkillRepository from "./userSkill.repository";
import { IUserSkillInput } from "./userSkill.type";

const create = async (input: IUserSkillInput) => {
  try {
    return await userSkillRepository.create(input);
  } catch (error) {
    console.error("Failed to create user skill", error);
    throw new BadRequestError("Failed to create user skill");
  }
};

const getByUserId = async (userId: string) => {
  try {
    return await userSkillRepository.getByUserId(userId);
  } catch (error) {
    console.error("Failed to get user skills for userId ", userId);
    throw new BadRequestError("Failed to get user skills");
  }
};

export default {
  create,
  getByUserId,
};
