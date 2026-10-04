import mongoose from "mongoose";

let blogSchema = mongoose.Schema({
    title:String,
    body:String,
    thumbnail:String
})
let Blog = mongoose.model('Blog',blogSchema);
export default Blog;
