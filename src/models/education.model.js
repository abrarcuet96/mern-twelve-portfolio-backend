import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    institute: { type: String },
    description: { type: String },
    time: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Education = mongoose.model("Education", educationSchema);

export default Education;
