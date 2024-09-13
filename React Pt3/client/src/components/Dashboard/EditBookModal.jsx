import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import useBook from "../hooks/useBook";

const EditBookModal = ({ open, handleClose, book }) => {
  const [editedBook, setEditedBook] = useState({
    _id: "",
    title: "",
    author: "",
    genre: "",
    category: "",
    bookImage: "",
    rating: 0,
  });

  const { updateBook } = useBook();

  useEffect(() => {
    if (book) {
      setEditedBook({
        _id: book._id,
        title: book.title || "",
        author: book.author || "",
        genre: book.genre || "",
        category: book.category || "",
        bookImage: book.bookImage || "",
        rating: book.rating || 0,
      });
    }
  }, [book]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleUpdateBook = async () => {
    try {
      if (editedBook._id) {
        await updateBook(editedBook);
        handleClose();
      }
    } catch (error) {
      console.error("There was an error updating the book:", error);
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
        }}
      >
        <h2>Edit Book</h2>
        <TextField
          label="Title"
          name="title"
          value={editedBook.title}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Author"
          name="author"
          value={editedBook.author}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Genre"
          name="genre"
          value={editedBook.genre}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Category"
          name="category"
          value={editedBook.category}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Image URL"
          name="bookImage" // Updated to match the schema field
          value={editedBook.bookImage}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Rating"
          name="rating"
          type="number"
          value={editedBook.rating}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />

        <Button variant="contained" color="primary" onClick={handleUpdateBook}>
          Save Changes
        </Button>
      </Box>
    </Modal>
  );
};

export default EditBookModal;
