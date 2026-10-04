import { connectDB } from "@/app/config/db";

export default async function POST(request,{params}){
    await connectDB();
}
