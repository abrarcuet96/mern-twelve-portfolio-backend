const { default: mongoose } = require("mongoose");

const inboxSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: { type: String },
    website: { type: Number },
    message: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Inbox = mongoose.model("Inbox", inboxSchema);

export default Inbox;
