const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  number:{
    type:Number,
  },
  comment: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
