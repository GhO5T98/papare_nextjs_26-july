const express = require("express");
const router = express.Router();
const Book = require("../models/Books");

// Middleware to parse JSON bodies
router.use(express.json());

// Create a new book
router.post("/", async (req, res) => {
  try {
    const { title, author, genre, category, rating, bookImage } = req.body;

    const newBook = new Book({
      title,
      author,
      genre,
      category,
      rating,
      bookImage,
    });

    await newBook.save();
    res.status(201).json(newBook);
    console.log(newBook);
  } catch (error) {
    console.error("Error saving book:", error);
    res.status(500).json({ error: "Failed to add the book." });
  }
});

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a book by ID
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a book by ID
router.put("/:id", async (req, res) => {
  try {
    const { title, author, genre, category, rating, bookImage } = req.body;

    const bookData = {
      title,
      author,
      genre,
      category,
      rating,
      bookImage,
    };

    const book = await Book.findByIdAndUpdate(req.params.id, bookData, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a book by ID
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
