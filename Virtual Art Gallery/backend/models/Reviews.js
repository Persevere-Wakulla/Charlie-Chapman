import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    img:String,
    userName:String,
    review:String,
    date:Date
})

export const Review = mongoose.model('review', reviewSchema)
