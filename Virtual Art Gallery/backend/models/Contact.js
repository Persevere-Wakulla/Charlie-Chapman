import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name:String,
    email:String,
    message:String
})

export const ContactInfo = mongoose.model('contact', contactSchema)