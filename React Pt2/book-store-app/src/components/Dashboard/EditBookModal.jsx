import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

const EditBookModal = ({ open, handleClose, book, updateBook }) => {
  const [editedBook, setEditedBook] = useState({
    id: "",
    title: "",
    author: "",
    category: "",
    price: "",
    image: "",
    rating: 0,
    amazonUrl: "",
  });

  useEffect(() => {
    if (book) {
      setEditedBook({
        id: book.id,
        title: book.title || "",
        author: book.author || "",
        genre: book.genre || "",
        category: book.category || "",
        image: book.image || "",
        rating: book.rating || 0,
        amazonUrl: book.amazonUrl || "",
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

  // Handle update book
  const handleUpdateBook = () => {
    updateBook(editedBook);
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
          name="image"
          value={editedBook.image}
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
        <TextField
          label="Amazon URL"
          name="amazonUrl"
          value={editedBook.amazonUrl}
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
