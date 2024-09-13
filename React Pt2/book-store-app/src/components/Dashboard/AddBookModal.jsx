import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

const AddBookModal = ({ open, handleClose, addBook }) => {
  const [newBook, setNewBook] = useState({
    id: "",
    title: "",
    author: "",
    genre: "",
    category: "",
    image: "",
    rating: 0,
    amazonUrl: "", // New field for Amazon URL
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  // Handle add book
  const handleAddBook = () => {
    addBook(newBook);
    handleClose();
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
          label="Image URL"
          name="image"
          value={newBook.image}
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
          label="Amazon URL"
          name="amazonUrl"
          value={newBook.amazonUrl}
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
