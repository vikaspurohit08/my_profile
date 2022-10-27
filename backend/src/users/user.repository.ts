import { UserDocument, UserModel } from "./user.model";
import { IAuthInputModel, IUserDetailInput, IUserModel } from "./user.type";

const documentToObject = (document: UserDocument): IUserModel => {
  return document.toObject({ getters: true }) as IUserModel;
};

const signUp = async (input: IAuthInputModel) => {
  try {
    const document = await UserModel.create(input);
    return document && documentToObject(document);
  } catch (error) {
    throw error;
  }
};

const get = async (id: string) => {
  try {
    const document = await UserModel.findOne({ id: id });
    return document && documentToObject(document);
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email: string) => {
  try {
    const document = await UserModel.findOne({ email: email });
    return document && documentToObject(document);
  } catch (error) {
    throw error;
  }
};

const patchUserDetails = async (id: string, input: IUserDetailInput) => {
  try {
    const document = await UserModel.findOneAndUpdate(
      { id: id },
      { ...input },
      { new: true }
    );
    return document && documentToObject(document);
  } catch (error) {
    throw error;
  }
};

export default {
  signUp,
  get,
  getUserByEmail,
  patchUserDetails,
};
