import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Hero from "./Hero";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import galleryData from "../data/gallery1.json";
import positions from "../data/careers.json";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Careers() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slidesToScroll, setSlidesToScroll] = useState(1);

  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    const handleResize = () => {
      const newSlidesToShow = window.innerWidth < 768 ? 1 : 2.5;
      const newSlidesToScroll = window.innerWidth < 768 ? 1 : 2;

      if (newSlidesToShow !== slidesToShow) {
        setSlidesToShow(newSlidesToShow);
      }

      if (newSlidesToScroll !== slidesToScroll) {
        setSlidesToScroll(newSlidesToScroll);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slidesToShow, slidesToScroll]);

  return (
    <>
      <Hero
        text="We believe creativity blossoms when we’re at ease and amongst friends. Producing work the world needs.."
        highlightText="Come work with us."
      />

      <Box sx={{ maxWidth: "80%", margin: "auto" }}>
        <Slider {...slickSettings}>
          {galleryData.map((photo, index) => (
            <div key={index}>
              <img
                src={photo.src}
                alt={index + 1}
                style={{ borderRadius: "15px", width: "100%" }}
              />
            </div>
          ))}
        </Slider>
      </Box>

      <Box sx={{ padding: "50px", maxWidth: "90%", margin: "auto" }}>
        <Typography variant="h2" sx={{ fontFamily: "Formula Bold" }}>
          Open Positions
        </Typography>

        <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
          {positions.map((position, index) => (
            <li key={index}>
              {/* Use Link component from React Router */}
              <Link
                to={`/careers-form/${position.title}`}
                className="position-link"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #777777",
                  padding: "20px 10px",
                  cursor: "pointer",
                }}
              >
                <Box>
                  <Typography variant="body1" sx={{ color: "#777777" }}>
                    {position.type}
                  </Typography>
                  <Typography variant="h4" sx={{ fontFamily: "Formula Bold" }}>
                    {position.title}
                  </Typography>
                </Box>
                <Box sx={{ alignSelf: "center" }}>
                  <ArrowForwardIcon sx={{ fontSize: "2.5rem" }} />
                </Box>
              </Link>
            </li>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Careers;
