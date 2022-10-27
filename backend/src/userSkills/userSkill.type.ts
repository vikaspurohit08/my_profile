import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import { SkillsEnum } from "./skills.enum";

interface IUserBodyInput {
  name: SkillsEnum;
  rating: number;
}

interface IUserQueryInput {
  userId: string;
}

interface IUserQuerySchema extends ValidatedRequestSchema {
  [ContainerTypes.Params]: IUserQueryInput;
}

interface IUserSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: IUserBodyInput;
}

interface IUserSkillInput extends IUserBodyInput {
  userId: string;
}

interface IUserSkillModel extends IBaseModel, IUserSkillInput {}

export {
  IUserBodyInput,
  IUserQueryInput,
  IUserQuerySchema,
  IUserSchema,
  IUserSkillInput,
  IUserSkillModel,
};
