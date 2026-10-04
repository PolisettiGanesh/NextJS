import mongoose from "mongoose";

let blogSchema = mongoose.Schema({
    title:String,
    body:String,
    thumbnail:String
})
mongoose.model('Blog',blogSchema)
