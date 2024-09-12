import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";

const Index = () => {
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
      ></Container>
    </>
  );
};

export default Index;
