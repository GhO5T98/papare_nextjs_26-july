import React from "react";
import { Box, Typography, Grid, Button } from "@mui/joy";
import StarIcon from "@mui/icons-material/Star";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import useBook from "../hooks/useBook";
import { Link } from "react-router-dom";

const TopTen = () => {
  const { books } = useBook();

  const classic = books.filter((book) => book.category === "Classic");

  return (
    <Box sx={{ padding: "2rem 5rem", backgroundColor: "#f4f4f4" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography level="h2" fontSize="2rem" fontWeight="bold">
          Classics
        </Typography>
        <Link
          to="/AllBooks"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <Button variant="text" color="primary" sx={{ fontSize: "1rem" }}>
            See all
          </Button>
        </Link>
      </Box>
      <Grid container spacing={4}>
        {classic.map((book, index) => (
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
                src={book.bookImage}
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
                  onClick={() =>
                    window.open(
                      `https://www.amazon.com/s?k=${encodeURIComponent(
                        book.title
                      )}`,
                      "_blank"
                    )
                  }
                >
                  Buy Now <ShoppingBagIcon />
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
