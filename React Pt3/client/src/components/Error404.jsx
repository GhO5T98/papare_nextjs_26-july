import React from "react";
import { Box, Typography } from "@mui/material";

const Error404 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" component="div" sx={{ color: "#ff1744" }}>
        404
      </Typography>
      <Typography variant="h6" component="div" sx={{ ml: 2 }}>
        Page Not Found
      </Typography>
    </Box>
  );
};

export default Error404;
