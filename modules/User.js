import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({

     username :{
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true,
        
    },
    favoriteGenres: String,
    joinedAt: {
        type: Date,
        default: Date.now
    }

})

let users = mongoose.model("Users",userSchema);
export default users