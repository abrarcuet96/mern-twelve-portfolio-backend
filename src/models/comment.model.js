import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    blogID: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: { type: String },
    email: { type: String },
    comment: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
