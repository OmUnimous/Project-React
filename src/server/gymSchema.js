import mongoose, { Schema } from "mongoose";

const Registration=new Schema({
    name:String,
    password:String,
    email:String,
    contact:Number,
    gender :  String
});

export const user=mongoose.model("client",Registration);