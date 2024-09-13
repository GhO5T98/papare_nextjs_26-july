import { useState, useEffect } from "react";
import axios from "axios";

const useBook = () => {
  const [books, setBooks] = useState([]);
  const API_URL = "http://localhost:5000/api/books";

  // Load books from the database when the app starts
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(API_URL);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  // Add a new book to the database
  const addBook = async (newBook) => {
    try {
      const response = await axios.post(API_URL, newBook);

      setBooks((prevBooks) => [...prevBooks, response.data]);
      console.log("Book added:", response.data);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  // Update an existing book in the database
  const updateBook = async (updatedBook) => {
    try {
      const response = await axios.put(
        `${API_URL}/${updatedBook._id}`,
        updatedBook
      );

      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book._id === updatedBook._id ? response.data : book
        )
      );
      console.log("Book updated:", response.data);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  // Delete a book from the database
  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      console.log("Book deleted:", id);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  // Get the count of books by genre
  const getBookCountByGenre = (genre) => {
    return books.filter((book) => book.genre === genre).length;
  };

  return {
    books,
    addBook,
    updateBook,
    deleteBook,
    getBookCountByGenre,
  };
};

export default useBook;
