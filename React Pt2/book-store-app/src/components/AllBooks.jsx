import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import useBook from "./hooks/useBook"; // Adjust the path as necessary

const AllBooks = () => {
  const { books } = useBook(); // Get books from the custom hook

  const handleBuyNow = (url) => {
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  return (
    <Box
      sx={{
        padding: "2rem 4rem",
        backgroundColor: "#f4f4f4",
        marginTop: "2em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          All Books
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={3} key={book.id}>
            <Box
              sx={{
                backgroundColor: "#fff",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={book.image}
                alt={book.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ padding: "1rem" }}>
                <Typography variant="body1" fontWeight="bold" mb={0.5}>
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  by: {book.author}
                </Typography>
                <Typography variant="body2" fontWeight="bold" mb={1}>
                  {book.price}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                    color: "#f39c12",
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      sx={{
                        color: i < Math.floor(book.rating) ? "#f39c12" : "#ddd",
                        fontSize: "1rem",
                      }}
                    />
                  ))}
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  fullWidth
                  onClick={() => handleBuyNow(book.amazonUrl)} // Use the amazonUrl
                >
                  Buy Now 🛒
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllBooks;
