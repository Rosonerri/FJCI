import userData from "@/utils/Model/userModel";
import { dbConfig } from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";


export const POST = async (req: NextRequest) =>{
    try {
        const {email, password} =await req.json()

        await dbConfig()

        const post  = await userData.findOne({email})

        if (post) {
            const check = await bcrypt.compare(password, post.password)

            if (check){
                return NextResponse.json({
                    status: 201,
                    message: "Post Created Successfully",
                    data: post,
                })
            } else{
                return NextResponse.json({
                    status: 404,
                    message: "password Error"
                })
            }
        } else {
            return NextResponse.json({
                status: 404,
                message: "Email Error"
            })
        }
    } catch (error) {
        return NextResponse.json({
            status: 404,
            message: "Error"
        })
    }
}