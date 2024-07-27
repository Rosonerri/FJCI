import { Schema, model, models } from "mongoose";
import { iUserData } from "../interface";


const userModel = new Schema<iUserData>(
  {
    name: {
      type: String,
    },

    email: {
      type: String,
      unique: true
    },

    password: {
      type: String,
    },

    role: {
      type: String,
    },
  },
  { timestamps: true }
);

const userData = models.Post || model<iUserData>("users", userModel);

export default userData;