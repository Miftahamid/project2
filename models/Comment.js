const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: String,
    createdAt: {
      type: Date,
      default: Date.now()
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    comments: [Comment]
  });
  
               
  
  
  module.exports = mongoose.model("Comment", Comment)