import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import { IUserSkillModel } from "../userSkills/userSkill.type";

interface IProjectInput {
  name: string;
  userId: string;
  description: string;
  skills: IUserSkillModel[];
}

interface IProjectRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: IProjectInput;
}

interface IProjectModel extends IProjectInput, IBaseModel {}

export { IProjectInput, IProjectRequestSchema, IProjectModel };
