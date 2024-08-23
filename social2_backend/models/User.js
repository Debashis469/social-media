import mongoose from "mongoose" ;

const userSchema = new mongoose.Schema( {
    username : {
        type: String ,
        required: true ,
        min: 3,
        max: 20,
        unique: true
    }, 
    email : {
        type: String, 
        required: true,
        max: 50,
        unique: true
    },
    password : {
        type: String,
        required : true,
        min: 6
    },
    profilePicture : {
        type: String,
        default: ""
    },
    coverPicture : {
        type: String, 
        default: ""
    },
    followers : {
        type: Array,
        default: []
    }, 
    followings : {
        type: Array,
        default: []
    },
    isAdmin : {
        type: Boolean,
        default: false
    },
    desc : {
        type : String,
        max: 50
    },
    city : {
        type: String,
        max : 50
    },
    from : {
        type: String,  // hometown
        max : 50  
    } ,
    relationships : {
        type : Number,
        enum : [1,2,3] // can only be 1 2 or 3
    },
} ,
{timestamps: true}
)

export const User = mongoose.model("User", userSchema);