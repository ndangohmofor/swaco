import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";

const JoinUs = () => {
  const navigate = useNavigate();
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
          }}
        >
          <Typography
            variant="h1"
            sx={{
              position: "relative",
              top: "8%",
              textAlign: "center",
              width: "100%",
              color: "#2792A9",
              fontWeight: "bold",
              fontSize: "1.5rem",
              zIndex: 1,
              display: "block",
            }}
          >
            How to Join SWACO
          </Typography>
          <Divider />
          <Typography
            variant="body1"
            sx={{
              position: "relative",
              top: "10%",
              width: "80%",
              textAlign: "center",
              margin: "auto",
              fontWeight: "regular",
              fontSize: "1rem",
              zIndex: 1,
              display: "block",
            }}
          >
            The Southern Cameroonians Association of Ohio (SWACO) is a
            non-profit organization that brings together Southern Cameroonians
            living in Ohio. Our goal is to create a strong and unified community
            where members can support one another, celebrate their shared
            heritage, and work on projects that benefit both members and the
            broader society.
          </Typography>
          <Box
            sx={{
              position: "relative",
              top: "10%",
              width: "100%",
              height: "10%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                color: "#000000",
                position: "relative",
              }}
              onClick={() => navigate("/signup")}
              variant="contained"
              style={{
                borderRadius: 50,
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default JoinUs;
