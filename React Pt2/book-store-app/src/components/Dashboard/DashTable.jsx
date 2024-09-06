import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const DashTable = ({ books, deleteBook, updateBook }) => {
  return (
    <TableContainer component={Paper} sx={{ bgcolor: "#272829", mt: 1 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
              Image
            </TableCell>
            <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
              Title
            </TableCell>
            <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
              Category
            </TableCell>
            <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
              Edit
            </TableCell>
            <TableCell sx={{ color: "#ffffff", fontWeight: 600 }}>
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell>
                <img src={book.image} alt={book.title} height="50" width="80" />
              </TableCell>
              <TableCell sx={{ color: "#ffffff" }}>{book.title}</TableCell>
              <TableCell sx={{ color: "#ffffff" }}>{book.category}</TableCell>
              <TableCell>
                <IconButton onClick={() => updateBook(book)}>
                  <EditIcon sx={{ color: "#ffffff" }} />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => deleteBook(book)}>
                  <DeleteIcon sx={{ color: "#ffffff" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashTable;
