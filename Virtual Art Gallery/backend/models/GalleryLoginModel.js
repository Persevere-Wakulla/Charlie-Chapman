import mongoose from "mongoose";

const galleryAdminSchema = mongoose.Schema({
    name:String,
    password:String
})


export const AdminLogin = mongoose.model('galleryAdmin', galleryAdminSchema)