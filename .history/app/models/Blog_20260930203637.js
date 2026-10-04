import mongoose from "mongoose";

let blogSchema = mongoose.Schema({
    title:String,
    body:String,
    thumbnail:String
})
let mongoose.model('Blog',blogSchema);
