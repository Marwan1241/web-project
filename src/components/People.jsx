import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const People = () => {
  const [hoveredPersonIndex, setHoveredPersonIndex] = useState(null);
  const [teams, setTeams] = useState([]);

  const handleMouseOver = (index) => {
    setHoveredPersonIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredPersonIndex(null);
  };

  useEffect(() => {
    fetch("https://youngproductions-768ada043db3.herokuapp.com/api/teams") // Fetch data from the API endpoint
      .then((response) => response.json())
      .then((data) => {
        // Sort the teams array based on the "order" value
        const sortedTeams = data.sort((a, b) => a.order - b.order);
        setTeams(sortedTeams);
      })
      .catch((error) => {
        console.error("Error fetching clients:", error);
      });
  }, []);

  return (
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
        Our People
      </Typography>

      <Box
        className="people-section"
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box className="people-list" sx={{ flex: 2 }}>
          {teams.map((team, index) => (
            <Box
              key={index}
              className="people-item"
              sx={{
                borderBottom: "1px solid #303030",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "30px 0px",
              }}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={team.image}
                  alt={team.name}
                  style={{
                    width: "65px",
                    height: "70px",
                    borderRadius: "50%",
                    marginRight: "20px",
                  }}
                />
                <div>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#777777",
                      fontFamily: "Formula Bold",
                      marginBottom: "5px",
                    }}
                  >
                    {team.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textTransform: "uppercase",
                      fontSize: "0.8rem",
                      color: "#777777",
                    }}
                  >
                    {team.role}
                  </Typography>
                </div>
              </Box>
              {hoveredPersonIndex === index && (
                <Typography variant="body2">{team.bio}</Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default People;
