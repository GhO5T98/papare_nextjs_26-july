import React, { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import DashCard from "./DashCard";
import DashTable from "./DashTable";
import DashDrawer from "./DashDrawer";
import useBook from "../hooks/useBook";
import AddBookModal from "./AddBookModal";
import DeleteBookDialog from "./DeleteBookDialog";
import EditBookModal from "./EditBookModal";

const Dashboard = () => {
  const drawerWidth = 200;
  const { books, addBook, updateBook, deleteBook, getBookCountByGenre } =
    useBook();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleOpenAddModal = () => setIsAddModalOpen(true);
  const handleCloseAddModal = () => setIsAddModalOpen(false);

  const handleOpenDeleteModal = (book) => {
    setSelectedBook(book);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedBook(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteBook = () => {
    deleteBook(selectedBook.id);
    handleCloseDeleteModal();
  };

  const handleOpenEditModal = (book) => {
    setSelectedBook(book);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedBook(null);
    setIsEditModalOpen(false);
  };

  const handleUpdateBook = (updatedBook) => {
    updateBook(updatedBook);
    handleCloseEditModal();
  };

  return (
    <Box sx={{ display: "flex", bgcolor: "#151515", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: "100%", bgcolor: "#151515", zIndex: "1" }}
      >
        <Toolbar
          sx={{
            bgcolor: "#272829",
            display: "flex",
            justifyContent: "center",
            gap: 2,
            ml: { sx: 10, sm: "10em", md: "10em" },
          }}
        >
          <BookIcon sx={{ fontSize: "2rem" }} />
          <Typography variant="h5" noWrap component="div">
            Book Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <DashDrawer drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 2, bgcolor: "#151515", color: "#ffffff", mt: 3 }}
      >
        <Toolbar />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <DashCard category="Novel" count={getBookCountByGenre("Novel")} />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <DashCard category="Roman" count={getBookCountByGenre("Roman")} />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <DashCard
              category="Fantasy"
              count={getBookCountByGenre("Fantasy")}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            sx={{
              mb: 2,
              backgroundColor: "#272829",
              color: "#f2f2f2",
              fontWeight: "600",
              textTransform: "capitalize",
              border: "1px solid #f2f2f2",
              "&:hover": { backgroundColor: "#f2f2f2", color: "#272829" },
            }}
            onClick={handleOpenAddModal}
          >
            Add Book
          </Button>
          <DashTable
            books={books}
            deleteBook={handleOpenDeleteModal}
            updateBook={handleOpenEditModal}
          />
        </Box>
      </Box>

      <AddBookModal
        open={isAddModalOpen}
        handleClose={handleCloseAddModal}
        addBook={addBook}
      />
      <DeleteBookDialog
        open={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        handleDelete={handleDeleteBook}
        book={selectedBook}
      />
      <EditBookModal
        open={isEditModalOpen}
        handleClose={handleCloseEditModal}
        book={selectedBook}
        updateBook={handleUpdateBook}
      />
    </Box>
  );
};

export default Dashboard;
