const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  category: {
    type: String,
    required: true,
  },
  bookImage: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
