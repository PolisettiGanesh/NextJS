import { connectDB } from "@/app/config/db";
import User from "@/app/models/User";
import bcrypt from 'bcrypt'
export default async function POST(request,{params}){
    const data = await request.json();
    const {username,email,password} = data;
    await connectDB();
    const user = User.create({
        username,
        email,
        password
    })
    let hash
    return Response.json({
        message:'user registered successfully',
        user
    })
}
