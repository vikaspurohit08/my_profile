import { IUserDetailInput, IUserInputModel, IUserModel } from "../user.type";

const mockAuthInput: IUserInputModel = {
  email: "abc@xyz.com",
  password: "123456",
};

const mockUserModel: IUserModel = {
  email: "abc@xyz.com",
  password: "123456",
  name: "abc",
  id: "id",
  contact: "contact",
  description: "description",
  location: "location",
};

const mockUserDetailInput: IUserDetailInput = {
  name: "abc",
  contact: "12345",
  description: "desc",
  location: "loc",
};

export { mockAuthInput, mockUserModel, mockUserDetailInput };
