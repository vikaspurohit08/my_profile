import { InternalServerError } from "../common/errors/internal-server-error";
import projectRepository from "./project.repository";
import { IProjectInput } from "./project.type";

const update = async (input: IProjectInput) => {
  try {
    return await projectRepository.upsert(input);
  } catch (error) {
    console.error("Failed to update project", input);
    throw new InternalServerError();
  }
};

const getByUserId = async (userId: string) => {
  try {
    return await projectRepository.getProjectsByUserId(userId);
  } catch (error) {
    console.error("Failed to get projects for user", userId);
    throw new InternalServerError();
  }
};

export default {
  update,
  getByUserId,
};
