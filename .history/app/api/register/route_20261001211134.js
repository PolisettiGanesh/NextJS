import { connectDB } from "@/app/config/db";
import User from "@/app/models/User";
import bcrypt from 'bcrypt'
export async function POST(request,{params}){
    const data = await request.json();
    const {username,email,password} = data;
    console.log(username)
    await connectDB();
    let hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        username,
        email,
        password:hashedPassword
    })
    return Response.json({
        message:'user registered successfully',
        user
    })
}
