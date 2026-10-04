import { connectDB } from "@/app/config/db";

export async function POST(request){
    let data = await request.json();
    console.log(data);
    await connectDB();https://dotnettrickscloud.blob.core.windows.net/article/5720250716183159.png
    return Response.json({
        message:'Blog successfully added !',
        data
    })
}
