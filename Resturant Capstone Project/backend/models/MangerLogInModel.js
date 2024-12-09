import mongoose from "mongoose";

const managerSchema = mongoose.Schema({
    name:String,
    password:String
})


export const Manager = mongoose.model('managers', managerSchema)