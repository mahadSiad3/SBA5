import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema({

})

let comments = mongoose.model("Comments",commentSchema);
export default comments
