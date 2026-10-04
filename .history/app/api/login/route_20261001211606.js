import { connectDB } from "@/app/config/db";
import User from "@/app/models/User";

export async function POST(request){
    const data = await request.json();
    const {email,password} = data;
    await connectDB();

    let user = await User.findOne()
}
