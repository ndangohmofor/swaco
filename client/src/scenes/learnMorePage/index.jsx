import { useTheme } from "@emotion/react";
import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";

const LearnMore = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Container
        sx={{
          height: "100vh",
          padding: "0px",
          scrollbarWidth: "none",
          overflow: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        <Paper
          sx={{
            height: "100vh",
            scrollSnapAlign: "start",
            position: "relative",
            elevation: 1,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              position: "relative",
              top: "5%",
              textAlign: "center",
              width: "100%",
              color: "#2792A9",
              fontWeight: "bold",
              fontSize: "1.5rem",
              zIndex: 1,
            }}
          >
            Who We Are
          </Typography>
          <Typography
            variant="body1"
            sx={{
              position: "relative",
              top: "7%",
              width: "80%",
              textAlign: "center",
              margin: "auto",
              fontWeight: "regular",
              fontSize: "1rem",
              zIndex: 1,
              display: "block",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default LearnMore;
