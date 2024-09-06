import { useState, useEffect } from "react";

const useBook = () => {
  const [books, setBooks] = useState([]);

  // Load books from localStorage when the app starts
  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  // Save books to localStorage whenever they change
  useEffect(() => {
    if (books.length > 0) {
      localStorage.setItem("books", JSON.stringify(books));
    } else {
      localStorage.removeItem("books"); // Clear localStorage when no books remain
    }
  }, [books]);

  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const updateBook = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

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
