import mongoose from 'mongoose';

const userSchema = {
    username:String,
    email:String,
    password:String,
}
const User = mongoose
