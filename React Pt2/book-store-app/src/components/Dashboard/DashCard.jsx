import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const DashCard = ({ category, count }) => (
  <Card
    sx={{
      bgcolor: "#272829",
      color: "#ffffff",
      textAlign: "center",
      userSelect: "none",
    }}
  >
    <CardContent>
      <Typography
        sx={{
          fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.6rem" },
          fontWeight: "600",
        }}
        component="div"
      >
        {count}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
          fontWeight: "400",
        }}
        component="div"
      >
        {category}
      </Typography>
    </CardContent>
  </Card>
);

export default DashCard;
