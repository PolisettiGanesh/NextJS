import mongoose from "mongoose";

export async function connectDB(){
        await mongoose.connect('http://localhost:27017')
}
