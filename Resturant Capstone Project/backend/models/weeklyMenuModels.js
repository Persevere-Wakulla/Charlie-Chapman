import mongoose from "mongoose";


const menuSchema = mongoose.Schema({
   dishName: String,
   description:String,
   price:Number,
   category:String,
   imageUrl:String,
   availability:String

})

export const Menu = mongoose.model('menus', menuSchema)