import { Document } from "mongoose"

export interface iPost{
    bookTitle: string
    image: string
}

interface iPostData extends iPost, Document{}


export interface iUser {
  name: string;
  email: string;
  password: string
  role: string
}

interface iUserData extends iUser, Document{}