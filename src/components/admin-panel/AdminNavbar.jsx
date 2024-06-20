import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { ListItemButton, ListItemText, List, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const logoUrl = process.env.PUBLIC_URL + "/assets/young-logo-white.webp";

const typographyStyle = {
  color: "white",
  fontSize: "3rem",
  fontFamily: "Formula Bold",
};

const formulaBold = {
  fontFamily: "Formula Bold",
};

export default function ButtonAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  // Function to close drawer and navigate to the specified link
  const handleLinkClick = (path) => () => {
    closeDrawer();
    // You can perform additional logic here before navigating
  };

  //Navbar Scroll Effect
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure effect runs only once

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className={`${scrolled ? "app-bar app-bar-scrolled" : "app-bar"}`}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img
              src={logoUrl}
              alt="Logo"
              style={{ width: "150px", height: "37px" }}
            />
          </Link>

          <Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ width: "100%" }}
      >
        <div style={{ width: "100%", height: "100%" }} className="nav-drawer">
          <div className="nav-drawer-options">
            <Link to="/">
              <img
                src={logoUrl}
                alt="Logo"
                style={{ width: "150px", height: "37px" }}
              />
            </Link>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CloseIcon
                onClick={closeDrawer}
                sx={{ fontSize: "2.5rem", color: "white", cursor: "pointer" }}
              />
            </Box>
          </div>

          <div className="nav-drawer-flex">
            <List>
              <ListItemButton
                component={Link}
                to="/admin/dashboard"
                onClick={handleLinkClick("/admin/dashboard")}
              >
                <ListItemText
                  primary="Dashboard"
                  primaryTypographyProps={{ sx: typographyStyle }}
                />
              </ListItemButton>

              <ListItemButton
                component={Link}
                to="/admin/users"
                onClick={handleLinkClick("/admin/users")}
              >
                <ListItemText
                  primary="Users"
                  primaryTypographyProps={{ sx: typographyStyle }}
                />
              </ListItemButton>

              <ListItemButton
                component={Link}
                to="/admin/settings"
                onClick={handleLinkClick("/admin/settings")}
              >
                <ListItemText
                  primary="Settings"
                  primaryTypographyProps={{ sx: typographyStyle }}
                />
              </ListItemButton>

              {/* <ListItemButton
                component={Link}
                to="/insights"
                onClick={handleLinkClick("/insights")}
              >
                <ListItemText
                  primary="Insights"
                  primaryTypographyProps={{ sx: typographyStyle }}
                />
              </ListItemButton>

              <ListItemButton
                component={Link}
                to="/careers"
                onClick={handleLinkClick("/careers")}
              >
                <ListItemText
                  primary="Join Us"
                  primaryTypographyProps={{ sx: typographyStyle }}
                />
              </ListItemButton>

              <ListItemButton
                component={Link}
                to="/contact"
                onClick={handleLinkClick("/contact")}
              >
                <ListItemText
                  primary="Contact Us"
                  primaryTypographyProps={{ sx: typographyStyle }}
                />
              </ListItemButton> */}

              {/* Add more navigation links as needed */}
            </List>

            <Box>
              <Typography
                variant="h2"
                sx={{ color: "white", fontSize: "5rem", ...formulaBold }}
              >
                Welcome Jojo <br /> How are you today?
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "white", fontSize: "1rem", marginBottom: "2rem" }}
              >
                This is your custom space to monitor and control everything!
              </Typography>
            </Box>
          </div>
        </div>
      </Drawer>
    </Box>
  );
}
