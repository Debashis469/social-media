import mongoose from "mongoose" ;

const postSchema = new mongoose.Schema({
    userId : {
        type: String,
        required : true
    } ,
    desc : {
        type: String,
        max: 500
    } ,
    img : {
        type: String
    } , 
    likes : {
        type: Array
    }
}, 
{timestamps: true}) ;

export const Post = mongoose.model("Post" , postSchema) ;