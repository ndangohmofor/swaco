import React from "react";
import Navbar from "../navbar";
import { Box, Card, CardMedia, Container, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const Index = () => {
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
