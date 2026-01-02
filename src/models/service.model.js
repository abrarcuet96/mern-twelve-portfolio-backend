import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: { type: String },
    img: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;
