import React from "react";
import { Box, Typography, Grid, Button } from "@mui/joy";
import StarIcon from "@mui/icons-material/Star";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Camus from "../../assets/theStranger.jpg";
import Kafka from "../../assets/derProcess.jpg";
import Dante from "../../assets/divineComedy.jpg";

const TopTen = () => {
  const books = [
    {
      title: "The Spoke Zarathustra",
      author: "Friedrich Nietzsche",
      price: "$32.00",
      image: Kafka,
      rating: 5,
    },
    {
      title: "The Spoke Zarathustra",
      author: "Friedrich Nietzsche",
      price: "$32.00",
      image: Camus,
      rating: 5,
    },
    {
      title: "The Spoke Zarathustra",
      author: "Friedrich Nietzsche",
      price: "$32.00",
      image: Dante,
      rating: 5,
    },
    {
      title: "The Spoke Zarathustra",
      author: "Friedrich Nietzsche",
      price: "$32.00",
      image: Kafka,
      rating: 5,
    },
  ];

  return (
    <Box sx={{ padding: "2rem 4rem", backgroundColor: "#f4f4f4" }}>
      <Typography level="h2" fontSize="2rem" fontWeight="bold" mb={4}>
        Top - 10 Best Selling Books
      </Typography>
      <Grid container spacing={4}>
        {books.map((book, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#1a1a1a",
                color: "#fff",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box
                component="img"
                src={book.image}
                alt={book.title}
                sx={{ width: "50%", height: "220px", objectFit: "cover" }}
              />
              <Box sx={{ padding: "1.5rem", flexGrow: 1 }}>
                <Typography
                  level="h3"
                  fontSize="1.25rem"
                  fontWeight="bold"
                  color="#fff"
                  mb={1}
                >
                  {book.title}
                </Typography>
                <Typography level="body2" color="#fff" mb={1}>
                  by: {book.author}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1.5,
                    color: "#f39c12",
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      sx={{
                        color: i < Math.floor(book.rating) ? "#f39c12" : "#ddd",
                        fontSize: "1.2rem",
                      }}
                    />
                  ))}
                </Box>
                <Typography level="body1" fontWeight="bold" color="#fff" mb={2}>
                  {book.price}
                </Typography>
                <Button
                  variant="solid"
                  color="primary"
                  size="md"
                  sx={{
                    fontSize: "1rem",
                    padding: "0.5rem 2rem",
                    backgroundColor: "#333",
                    color: "#fff",
                  }}
                >
                  Add <ShoppingBagIcon />
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopTen;
