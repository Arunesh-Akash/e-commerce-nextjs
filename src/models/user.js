import mongoose, { Schema } from "mongoose";

const userSchema=new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String
})
const User= mongoose.models.users || mongoose.model("users", userSchema);
export default User;