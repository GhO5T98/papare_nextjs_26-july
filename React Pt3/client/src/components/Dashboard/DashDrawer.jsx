// DashboardDrawer.js
import React, { useState } from "react";
import {
  Drawer,
  SwipeableDrawer,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ViewListIcon from "@mui/icons-material/ViewList";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useEarthoOne } from "@eartho/one-client-react";
import "./dashStyle.scss";

const drawerWidth = 180;

const DashDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useEarthoOne();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () =>
    logout()
      .then(() => navigate("/"))
      .catch((error) => console.error("Logout error:", error));

  const drawerContent = (
    <Box
      sx={{
        width: drawerWidth,
        bgcolor: "#272829",
        color: "#ffffff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          pt: 3,
          alignItems: "flex-start",
          gap: 3,
        }}
      >
        <Link to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
          <Typography noWrap className="drawer-menu">
            <HomeIcon /> Home
          </Typography>
        </Link>
        <Link
          to="/AllBooks"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <Typography noWrap className="drawer-menu">
            <ViewListIcon /> All Books
          </Typography>
        </Link>
        <Typography
          noWrap
          className="drawer-menu"
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
        >
          <LogoutIcon /> Logout
        </Typography>
      </Toolbar>
    </Box>
  );

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <SwipeableDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          onOpen={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawerContent}
        </SwipeableDrawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: "3px solid #f2f2f2",
              overflowX: "hidden",
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          display: { sm: "none" },
          position: "fixed",
          fontSize: "30em",
          top: 4,
          left: 20,
          color: "#f2f2f2",
          zIndex: "2",
        }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DashDrawer;
