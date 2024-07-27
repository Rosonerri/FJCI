import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import userData from "@/utils/Model/userModel";
import { dbConfig } from "@/utils/dbConfig";


export const POST = async (req: NextRequest) =>{
    try {
        const {name, email, password} = await req.json();

        await dbConfig();

        const salt = await bcrypt.genSalt(10)
        const hashed  = await bcrypt.hash(password, salt)

        const post = await userData.create({
            name,
            email,
            password: hashed,
            role: "user"
        })

        return NextResponse.json({
            status: 201,
            message: "User Created Successfuly",
            data: post
        })
        
    } catch (error) {
        return NextResponse.json({
            status: 404,
            message: "Error Creating"
        })
    }
}

export const GET = async (req: NextRequest) =>{
    try {
        await dbConfig()


        const post  = await userData.find()
        return NextResponse.json({
            status: 201,
            message: "User Found Successfully",
            data: post
        });
    } catch (error) {
        return NextResponse.json({
            status: 404,
            message: "Error Finding User"
        })
    }
}