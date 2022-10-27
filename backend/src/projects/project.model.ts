import { model, Schema, Document } from "mongoose";
import { userSkillSchema } from "../userSkills/userSkill.model";
import { IProjectModel } from "./project.type";

type ProjectDocument = IProjectModel & Document;
const collectionName = "projects";

const projectSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
    },
    skills: {
      type: Array,
      items: userSkillSchema,
    },
  },
  {
    timestamps: true,
  }
);

const ProjectModel = model<ProjectDocument>(collectionName, projectSchema);

export { ProjectDocument, ProjectModel };
