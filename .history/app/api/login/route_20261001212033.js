import { connectDB } from "@/app/config/db";
import User from "@/app/models/User";
import bcrypt from 'bcrypt'
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
    let isMatch = await bcrypt.compare(user.password,password);
    if(!Match){
        return Response.json({
            message:'Invalid credentials'
        })
    }
    return Response.json({
        message:'user successfully logged in',
        user
    })
}
