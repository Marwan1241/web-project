import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, useTheme, useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadingScreen from "./LoadingScreen";

const Testimonial = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3; // Maximum number of retries
  const [loading, setLoading] = useState(false); // State to manage loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://youngproductions-768ada043db3.herokuapp.com/api/testimonials"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTestimonials(data);
        setError(null);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setError(error.message);
        setLoading(false);
        // Retry logic
        if (retryCount < maxRetries) {
          setTimeout(() => {
            setRetryCount(retryCount + 1);
          }, 1000); // Retry after 1 second
        }
      }
    };

    fetchData();
  }, [retryCount]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
      // Add more breakpoints as needed
    ],
  };

  // Conditionally render loading screen while data is being fetched
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Box sx={{ padding: "50px", backgroundColor: "#F6F6F6" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          gap: isMobile ? "20px" : "50px",
        }}
        className="testimonial-section"
      >
        <Box
          className="testimonial-header"
          sx={{
            textAlign: "left",
            maxWidth: "600px", // Set your desired maximum width
          }}
        >
          <Typography variant="body1">Proud</Typography>
          <Typography
            variant="h2"
            sx={{
              marginTop: "20px",
              fontFamily: "Formula Bold",
            }}
          >
            What our dear friends and clients say...
          </Typography>
        </Box>
        <Box
          className="testimonial-cards"
          sx={{
            width: isMobile ? "100%" : "50%",
            maxWidth: "800px",
          }}
        >
          <Slider
            {...sliderSettings}
            sx={{
              width: "100%", // Full width of the container
              margin: "0 auto", // Center the slider
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Paper
                className="testimonial-card"
                key={index}
                sx={{
                  // padding: "30px",
                  // textAlign: "center",
                  backgroundColor: "black",
                  color: "white",
                  minHeight: "300px",
                  // overflow: "hidden",
                  whiteSpace: "pre-wrap",
                  border: "1px solid white",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={testimonial.logoUrl}
                  alt={`Client ${index + 1}`}
                  style={{
                    width: "80px",
                  }}
                />
                <Typography
                  className="testimonial-comment"
                  variant="h4"
                  sx={{
                    fontStyle: "italic",
                    fontFamily: "Formula Bold",
                    letterSpacing: "1px",
                    textAlign: "left",
                    fontSize: "20px",
                    lineHeight: "1.5",
                    marginBottom: "60px",
                  }}
                >
                  "{testimonial.comment}"
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ position: "absolute", bottom: "45px" }}
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "gray", position: "absolute", bottom: "25px" }}
                >
                  {testimonial.role}
                </Typography>
              </Paper>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
