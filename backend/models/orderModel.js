const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      trim: true,
      ref: "User",
    },
    book: {
      type: mongoose.Types.ObjectId,
      required: true,
      trim: true,
      ref: "Book",
    },
    status: {
      type: String,
      required: true,
      trim: true,
      default: "pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
