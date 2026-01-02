import mongoose from "mongoose";

const fileSchema = mongoose.Schema(
  {
    filename: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const File = mongoose.model("File", fileSchema);
export default File;
