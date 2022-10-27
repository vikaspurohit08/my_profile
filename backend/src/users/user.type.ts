import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import { SkillsEnum } from "../userSkills/skills.enum";

interface IAuthInputModel {
  email: string;
  password: string;
}

interface IAuthInputRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: IAuthInputModel;
}

interface IUserDetailInput {
  name?: string;
  contact?: string;
  description?: string;
  location?: string;
}

interface IUserInputModel extends IAuthInputModel, IUserDetailInput {}

interface IUserModel extends IUserInputModel, IBaseModel {}

export {
  IAuthInputModel,
  IAuthInputRequest,
  IUserDetailInput,
  IUserInputModel,
  IUserModel,
};
