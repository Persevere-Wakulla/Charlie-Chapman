import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true,
    },
    publishYear:{
        type:Number,
        required:true,
    },
},
    {
        timestamps:true,
    }
)


export const Comment = mongoose.model('talks', commentSchema);