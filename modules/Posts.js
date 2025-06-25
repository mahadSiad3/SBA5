import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
  
})

let posts = mongoose.model("Posts", postSchema);
export default posts