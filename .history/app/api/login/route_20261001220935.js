import { connectDB } from "@/app/config/db";
import User from "@/app/models/User";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
export async function POST(request){
    const data = await request.json();
    const {email,password} = data;
    await connectDB();

    let user = await User.findOne({email});
    if(!user){
        return Response.json({
            message:'user not exists'
        })
    }
    let isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return Response.json({
            message:'Invalid credentials'
        })
    }
    let token = jwt.sign({
        _id: user._id,
        name: user.username,
        email:user.email
    },'codekipathshala',)

    let cookieStore = await cookies();
    cookieStore.set('token',token,{
        httpOnly:true,
        secure:true,
        
    })
    return Response.json({
        message:'user successfully logged in',
        user,
        token
    })
}
