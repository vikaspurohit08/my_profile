import { UserSkillDocument, UserSkillModel } from "./userSkill.model";
import { IUserSkillInput, IUserSkillModel } from "./userSkill.type";

const documentToObject = (document: UserSkillDocument): IUserSkillModel => {
  return document.toObject({ getters: true }) as IUserSkillModel;
};

const create = async (input: IUserSkillInput) => {
  try {
    const document = await UserSkillModel.create(input);
    return document && documentToObject(document);
  } catch (error) {
    throw error;
  }
};

const getByUserId = async (userId: string) => {
  try {
    const documents = await UserSkillModel.find({ userId: userId });
    return documents.map((document) => documentToObject(document));
  } catch (error) {
    throw error;
  }
};

export default { create, getByUserId };
