import { connectDB } from "@/app/config/db";

export async function POST(request){
    let data = await request.json();
    console.log(data);
    await connectDB();
    let blog = Blog
    return Response.json({
        message:'Blog successfully added !',
        data
    })
}
