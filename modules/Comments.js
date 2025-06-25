import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({

    _id: ObjectId,
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    },
    favoriteGenres: [String],
    joinedAt: Date

})