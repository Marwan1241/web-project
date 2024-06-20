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
            <Link to="/contact">
              <button className="btn btn-primary">START A PROJECT</button>
            </Link>

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
              <Link to="/contact" onClick={closeDrawer}>
                <button className="btn btn-primary">START A PROJECT</button>
              </Link>
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
                to="/"
                onClick={handleLinkClick("/")}
              >
                <ListItemText
                  primary="Home"
                  primaryTypographyProps={{ sx: typographyStyle }}
                />
              </ListItemButton>

              <ListItemButton
                component={Link}
                to="/insights"
                onClick={handleLinkClick("/insights")}
              >
                <ListItemText
                  primary="Our Work"
                  primaryTypographyProps={{ sx: typographyStyle }}
                />
              </ListItemButton>

              <ListItemButton
                component={Link}
                to="/about"
                onClick={handleLinkClick("/about")}
              >
                <ListItemText
                  primary="About"
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
              </ListItemButton> */}

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
              </ListItemButton>

              {/* Add more navigation links as needed */}
            </List>

            <Box>
              <Typography
                variant="h2"
                sx={{ color: "white", fontSize: "5rem", ...formulaBold }}
              >
                Curious about <br /> working together?
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "white", fontSize: "1rem", marginBottom: "2rem" }}
              >
                If you’d like to get in touch about strategic and/or creative
                opportunities, or just to say ‘Hi’, please contact us below.
              </Typography>
              <a href="/contact" rel="noopener noreferrer">
                <button className="btn btn-primary btn-hover-alt">
                  GET IN TOUCH
                </button>
              </a>

              <Stack
                spacing={{ xs: 1, sm: 5 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                sx={{ marginTop: "2rem" }}
                className="drawer-social-media"
              >
                <Box className="social-media-item">Social Media</Box>
                <Box
                  className="social-media-item"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/youngproductionss/",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <InstagramIcon />
                  Instagram
                </Box>
                <Box
                  className="social-media-item"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/young-prroductions",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <LinkedInIcon />
                  Linkedin
                </Box>
                <Box
                  className="social-media-item"
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/channel/UCuXflYNaaJTcxIpaLQFcteg",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <YouTubeIcon />
                  Youtube
                </Box>
              </Stack>
            </Box>
          </div>
        </div>
      </Drawer>
    </Box>
  );
}
