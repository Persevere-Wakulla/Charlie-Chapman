import mongoose from "mongoose";


const artistShema = mongoose.Schema({
    picOfPiece:String,
    pieceName:String,
   description:String,
   artistName:String,
    category:String,
    year:Number
})

export const Piece = mongoose.model('piece', artistShema)