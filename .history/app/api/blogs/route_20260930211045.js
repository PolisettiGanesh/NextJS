import { connectDB } from "@/app/config/db";
import Blog from "@/app/models/Blog";

export async function

export async function POST(request){
    let data = await request.json();
    console.log(data);
    await connectDB();
    let blog = await Blog.create(data);
    return Response.json({
        message:'Blog successfully added !',
        blog
    })
}
