import { connectDB } from "@/app/config/db";

export async function POST(request){
    let data = await request.json();
    console.log(data);
    await connectDB();
    
    return Response.json({
        message:'Blog successfully added !',
        data
    })
}
