import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    animeName: String,
    episode: String,
    Season: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

let comments = mongoose.model("Comments", commentSchema);
export default comments
