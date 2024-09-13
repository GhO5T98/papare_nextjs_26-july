import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

const DeleteBookDialog = ({ open, handleClose, handleDelete, book }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Delete Book</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete "{book?.title}"? This action cannot be
          undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDelete} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteBookDialog;
