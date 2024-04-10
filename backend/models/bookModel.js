const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      sparse: true,
      trim: true,
      lowercase: true,
    },
    author:{
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
      sparse: true,
      trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    image:{
        type: String,
        required: true,
    }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
