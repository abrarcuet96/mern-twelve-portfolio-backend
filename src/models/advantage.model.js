import mongoose from "mongoose";

const advantageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    category: { type: String },
    percent: { type: Number },
    time: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Advantage = mongoose.model("Advantage", advantageSchema);

export default Advantage;
