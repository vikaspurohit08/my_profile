import { Schema, model, Document } from "mongoose";
import { SkillsEnum } from "./skills.enum";
import { IUserSkillModel } from "./userSkill.type";

type UserSkillDocument = IUserSkillModel & Document;
const collectionName = "user_skills";

const userSkillSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
      enum: Object.values(SkillsEnum),
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

const UserSkillModel = model<UserSkillDocument>(
  collectionName,
  userSkillSchema
);

export { UserSkillDocument, userSkillSchema, UserSkillModel };
