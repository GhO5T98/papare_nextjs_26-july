import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <BookIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1, ml: 5 }}
            />
            <Typography
              style={{ color: "black" }}
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".5rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BOOKERY
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/`}
                    >
                      Home
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/AllBooks`}
                    >
                      AllBooks
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/Properties`}
                    >
                      About Us{" "}
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <BookIcon sx={{ display: { xs: "flex", md: "none" }, ml: 2 }} />
            <Typography
              style={{ color: "black" }}
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BOOKERY
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 30 }}
            >
              <Button
                disableRipple
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: "black", display: "block", mr: 2 }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    letterSpacing: "2px",
                  }}
                  to={"/"}
                >
                  Home
                </Link>
              </Button>
              <Button
                disableRipple
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: "black", display: "block", mr: 2 }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    letterSpacing: "2px",
                  }}
                  to={"/AllBooks"}
                >
                  AllBooks
                </Link>
              </Button>
              <Button
                disableRipple
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: "black", display: "block", mr: 2 }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    letterSpacing: "2px",
                  }}
                  to={"/Properties"}
                >
                  About Us
                </Link>
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Box>
                <Link
                  to={"/Dashboard"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography style={{ textAlign: "center" }}>
                    Dashboard <LoginIcon />
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
