import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId
    },
    animeTitle: String,
    title: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

let posts = mongoose.model("Posts", postSchema);
export default posts