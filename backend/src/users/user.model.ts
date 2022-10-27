import { model, Schema, Document } from "mongoose";
import { Password } from "../common/util/password";
import { IUserModel } from "./user.type";

type UserDocument = IUserModel & Document;
const collectionName = "users";

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

const UserModel = model<UserDocument>(collectionName, userSchema);

export { UserDocument, UserModel };
