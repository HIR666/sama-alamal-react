import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

export default function Header({ mode, setMode }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (value) => () => setOpen(value);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "Products", to: "/products" },
  ];

  return (
    <>
      <AppBar position="fixed" color="primary" elevation={2}>
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          {/* LEFT: Hamburger (mobile only) */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* DESKTOP NAV LINKS (left after logo) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Link to="/">
              <Box
                component={"img"}
                src={logo}
                alt="Logo"
                sx={{ height: 65, py: 1 }}
              />
            </Link>
            {/* <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 700,
              }}
            >
              PARTIFY
            </Typography> */}

            {navLinks.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.to}
                color="inherit"
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* MOBILE: Centered Title */}
          <Typography
            variant="h6"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textAlign: "center",
              textDecoration: "none",
              fontWeight: 700,
              color: "inherit",
            }}
            component={Link}
            to="/"
          >
            PARTIFY
          </Typography>

          {/* RIGHT: Theme Toggle (desktop only) */}
          <IconButton
            sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}
            color="inherit"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 240 }} role="presentation">
          {/* Theme toggle inside drawer for mobile */}
          <Box sx={{ p: 2, textAlign: "center" }}>
            <IconButton
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Box>

          <List>
            {navLinks.map((item) => (
              <ListItemButton
                key={item.label}
                component={Link}
                to={item.to}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
