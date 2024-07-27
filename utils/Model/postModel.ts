import { Schema, model, models } from "mongoose";
import { iPostData } from "../interface";


const postModel = new Schema<iPostData>({
  image: {
    type: String,
  },

  bookTitle: {
    type: String,
  },
},{timestamps: true});

const postData = models.Post || model<iPostData>("posts", postModel);

export default postData