import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Hero from "./Hero";
import People from "./People";

const teamPhoto = process.env.PUBLIC_URL + "/assets/Team-Photo-1.webp";

const About = () => {
  return (
    <>
      <Hero
        text="We’re a bunch of sharp thinkers and creative makers on a mission to do the best work of our lives—"
        highlightText="and always enjoy the ride."
        bgColor="white"
        textColor="black"
      />

      <Box className="team-photo">
        <img src={teamPhoto} alt="team photo #1" style={{ width: "100%" }} />
      </Box>

      <Box
        className="services"
        sx={{
          backgroundColor: "black",
          color: "white",
          textAlign: "left",
          padding: "30px 20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "Formula Bold", color: "#777777" }}
        >
          Our Services
        </Typography>

        <Box className="services-list" sx={{ marginTop: "20px" }}>
          <Box className="service-item">
            <Box className="service-item-header" sx={{ flex: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Formula Bold",
                  color: "white",
                }}
              >
                Production
              </Typography>
            </Box>

            <Box className="service-item-body" sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ color: "#white7" }}>
                Lights, camera, action! Our production team thrives on bringing
                ideas to life in the most captivating and visually stunning way
                possible. Whether it's crafting compelling videos, shooting
                breathtaking photographs, or producing immersive multimedia
                experiences, we've got the expertise and the enthusiasm to make
                your vision a reality. From concept development to
                post-production, we handle every step with precision and
                panache, ensuring that your project shines bright like a
                Hollywood star.
              </Typography>

              <Box sx={{ marginTop: "20px" }}>
                <Grid container spacing={1}>
                  {/* List items */}
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Advertising
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Documentaries
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Post Production
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Photography
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Short Films
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Campaigns
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>

          <Box className="service-item">
            <Box className="service-item-header" sx={{ flex: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Formula Bold",
                  color: "white",
                }}
              >
                Marketing
              </Typography>
            </Box>

            <Box className="service-item-body" sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ color: "#white7" }}>
                In a world buzzing with noise, how do you make your voice heard?
                That's where our marketing wizards come into play. Armed with
                ingenious strategies and out-of-the-box thinking, we'll help you
                cut through the clutter and connect with your audience in
                meaningful ways. From crafting engaging content to devising
                strategic campaigns, we're here to elevate your brand and
                amplify your message. With our tailored approach and data-driven
                insights, get ready to stand out from the crowd and leave a
                lasting impression.
              </Typography>

              <Box sx={{ marginTop: "20px" }}>
                <Grid container spacing={1}>
                  {/* List items */}
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Media Buying
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      SEO & Content Strategy
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Platform Campaigns
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Email Marketing
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>

          <Box className="service-item">
            <Box className="service-item-header" sx={{ flex: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Formula Bold",
                  color: "white",
                }}
              >
                Digital Solutions
              </Typography>
            </Box>

            <Box className="service-item-body" sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ color: "#white7" }}>
                In today's digital age, your online presence is more crucial
                than ever. Luckily, we're here to make sure you shine bright in
                the digital realm. Whether you're in need of a sleek and
                responsive website, a captivating brand identity, or a robust
                digital strategy, our team of tech-savvy experts has got you
                covered. We specialize in creating bespoke digital solutions
                that not only look stunning but also drive results. From
                pixel-perfect designs to seamless user experiences, we'll help
                you leave a mark in the digital landscape and take your online
                presence to new heights.
              </Typography>

              <Box sx={{ marginTop: "20px" }}>
                <Grid container spacing={1}>
                  {/* List items */}
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Web Design
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Full-Stack Development
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      UI/ UX Design
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Motion & Animation Design
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      eCommerce
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Hosting & Maintainance
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>

          <Box className="service-item">
            <Box className="service-item-header" sx={{ flex: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Formula Bold",
                  color: "white",
                }}
              >
                Branding
              </Typography>
            </Box>

            <Box className="service-item-body" sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ color: "#white7" }}>
                Welcome to the essence of your identity. At Young Productions,
                we craft brands that resonate, captivate, and endure. From logos
                to brand strategy, we distill your story into a visual and
                verbal language that sets you apart. Let's create a brand that
                leaves a lasting impression. Ready to make your mark? Let's
                talk.
              </Typography>

              <Box sx={{ marginTop: "20px" }}>
                <Grid container spacing={1}>
                  {/* List items */}
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Brand Strategy
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Brand Identity
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Brand Postioning
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Logo Design
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Art Direction
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ color: "#777777" }}>
                      Marketing Assets
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          textAlign: "left",
          padding: "30px 20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "Formula Bold", color: "#777777" }}
        >
          By the numbers
        </Typography>

        <Box className="numbers-list" sx={{ marginTop: "20px" }}>
          <Box className="numbers-item">
            <Typography variant="h3">Founded</Typography>
            <Typography
              variant="h4"
              sx={{ fontFamily: "Formula Bold", fontSize: "6rem" }}
            >
              2019
            </Typography>
          </Box>

          <Box className="numbers-item">
            <Typography variant="h3">Team Members</Typography>
            <Typography
              variant="h4"
              sx={{ fontFamily: "Formula Bold", fontSize: "6rem" }}
            >
              20+
            </Typography>
          </Box>

          <Box className="numbers-item">
            <Typography variant="h3">Projects Completed</Typography>
            <Typography
              variant="h4"
              sx={{ fontFamily: "Formula Bold", fontSize: "6rem" }}
            >
              100+
            </Typography>
          </Box>
        </Box>
      </Box>

      <People />
    </>
  );
};

export default About;
