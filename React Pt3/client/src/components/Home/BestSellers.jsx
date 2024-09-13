import React from "react";
import { Box, Typography, Grid, Button } from "@mui/joy";
import StarIcon from "@mui/icons-material/Star";
import useBook from "../hooks/useBook";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const BestSellers = () => {
  const { books } = useBook();

  // Filter books by "Bestseller" category
  const bestSellers = books.filter((book) => book.category === "Bestseller");

  return (
    <Box
      sx={{
        padding: "2rem 5rem",
        backgroundColor: "#f4f4f4",
        marginTop: "4em",
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
        <Typography level="h2" fontSize="2rem" fontWeight="bold">
          Bestsellers
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
      <Grid container spacing={3}>
        {bestSellers.map((book, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                backgroundColor: "#fff",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={book.bookImage}
                alt={book.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ padding: "1rem" }}>
                <Typography level="body1" fontWeight="bold" mb={0.5}>
                  {book.title}
                </Typography>
                <Typography level="body2" color="text.secondary" mb={1}>
                  by: {book.author}
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
                  variant="solid"
                  size="sm"
                  fullWidth
                  sx={{
                    fontSize: "1rem",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#191919",
                    color: "#f4f4f4",
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

export default BestSellers;
