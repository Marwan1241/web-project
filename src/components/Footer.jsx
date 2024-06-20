import React from "react";
import { Box, Typography, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const footerLogo = process.env.PUBLIC_URL + "/assets/footer-logo.webp";
const gdLogo = process.env.PUBLIC_URL + "/assets/gd-icon.png";

const Footer = () => {
  return (
    <Box
      className="footer"
      sx={{
        backgroundColor: "black",

        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignContent: "flex-start",
          maxWidth: "1200px",
          margin: "0 auto",
          flexDirection: { xs: "column", md: "row" },
          padding: "50px 20px",
        }}
      >
        {/* Section 1 */}
        <Box
          sx={{
            marginBottom: { xs: "20px", md: "0", textAlign: "left", flex: "1" },
          }}
        >
          <Typography
            variant="h3"
            sx={{ marginBottom: "15px", fontFamily: "Formula Bold" }}
          >
            Well, Okay then.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "15px", color: "" }}>
            Contact us to create work that matters, whether you're a global
            brand or an emerging start-up. Let's work together.
          </Typography>
          <Link
            className="btn btn-primary link-btn"
            sx={{ color: "white", textDecoration: "none" }}
            href="/contact"
          >
            GET IN TOUCH
          </Link>
        </Box>

        {/* Section 2 */}
        <Box
          sx={{
            marginBottom: { xs: "20px", md: "0", flex: "1", textAlign: "left" },
            marginLeft: "15px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginBottom: "15px", color: "#777777" }}
          >
            Explore
          </Typography>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/insights">Insights</Link>
            </li>
            <li>
              <Link href="/joinUs">Join Us</Link>
            </li>
          </ul>
        </Box>

        {/* Section 3 */}
        <Box
          sx={{
            marginBottom: { xs: "20px", md: "0", flex: "1", textAlign: "left" },
            marginLeft: "15px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginBottom: "15px", color: "#777777" }}
          >
            Social
          </Typography>
          <ul className="footer-social-navigation">
            <li>
              <InstagramIcon />
              <Link href="https://www.instagram.com/youngproductionss/">
                Instagram
              </Link>
            </li>
            <li>
              <LinkedInIcon />
              <Link href="https://www.linkedin.com/company/young-prroductions">
                LinkedIn
              </Link>
            </li>
            <li>
              <YouTubeIcon />
              <Link href="https://www.youtube.com/channel/UCuXflYNaaJTcxIpaLQFcteg">
                Youtube
              </Link>
            </li>
          </ul>
        </Box>

        {/* Section 4 */}
        <Box sx={{ flex: "1", textAlign: "left" }}>
          <Typography
            variant="body2"
            sx={{ marginBottom: "15px", color: "#777777" }}
          >
            Copyright © 2023 Young Productions. All rights reserved.
          </Typography>
        </Box>
      </Box>

      <Box classname="footer-bottom" sx={{ padding: "0px 10px" }}>
        <img
          src={footerLogo}
          alt="Logo"
          style={{ width: "100%", position: "relative", bottom: 0 }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
