import { ProjectDocument, ProjectModel } from "./project.model";
import { IProjectInput, IProjectModel } from "./project.type";

const documentToObject = (document: ProjectDocument) => {
  return document.toObject({ getters: true }) as IProjectModel;
};

const upsert = async (input: IProjectInput) => {
  try {
    const document = await ProjectModel.findOneAndUpdate(
      { name: input.name },
      input,
      {
        new: true,
        upsert: true,
      }
    );

    return document && documentToObject(document);
  } catch (error) {
    return error;
  }
};

const getProjectsByUserId = async (userId: string) => {
  try {
    const documents = await ProjectModel.find({ userId: userId });
    return documents && documents.map((doc) => documentToObject(doc));
  } catch (error) {
    return error;
  }
};

export default { upsert, getProjectsByUserId };
