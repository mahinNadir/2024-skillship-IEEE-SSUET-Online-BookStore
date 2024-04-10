const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      sparse: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      sparse: true,
      trim: true,
      lowercase: true,
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
