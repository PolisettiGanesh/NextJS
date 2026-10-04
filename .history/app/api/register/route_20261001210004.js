import { connectDB } from "@/app/config/db";

export default async function POST(request,{params}){
    const data = await request.json();
    const {username,email,password} = data;
    User.create

    await connectDB();
}
