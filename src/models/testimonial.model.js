const { default: mongoose } = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
    },
    address: { type: String },
    img: { type: String },
    feedback: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;
