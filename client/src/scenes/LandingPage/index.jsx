import React from "react";
import Navbar from "../navbar";
import { Box, Card, CardMedia, Container } from "@mui/material";

const Index = () => {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Container
        sx={{
          height: "100vh",
          overflow: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            scrollSnapAlign: "start",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <CardMedia
            component={"video"}
            className="mobile-video"
            src="/assets/placeholder_video.mp4"
            autoPlay
            loop
            muted
          />
        </Box>
        <Card
          sx={{
            height: "100vh",
            scrollSnapAlign: "start",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid lightgrey",
          }}
        ></Card>
      </Container>
    </>
  );
};

export default Index;
