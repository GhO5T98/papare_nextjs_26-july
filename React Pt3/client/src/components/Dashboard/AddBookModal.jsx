import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import useBook from "../hooks/useBook";

const AddBookModal = ({ open, handleClose }) => {
  const { addBook } = useBook();
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    category: "",
    rating: 0,
    bookImage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleAddBook = async () => {
    try {
      await addBook(newBook);
      setNewBook({
        title: "",
        author: "",
        genre: "",
        category: "",
        rating: 0,
        bookImage: "",
      });
      handleClose();
    } catch (error) {
      console.error("There was an error adding the book:", error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: 400,
        }}
      >
        <h2>Add New Book</h2>
        <TextField
          label="Title"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Author"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Genre"
          name="genre"
          value={newBook.genre}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Category"
          name="category"
          value={newBook.category}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Rating"
          name="rating"
          type="number"
          value={newBook.rating}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          label="Image URL"
          name="bookImage"
          value={newBook.bookImage}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />

        <Button variant="contained" color="primary" onClick={handleAddBook}>
          Add Book
        </Button>
      </Box>
    </Modal>
  );
};

export default AddBookModal;
