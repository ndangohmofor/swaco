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
      >
        <Paper
          sx={{
            height: "100vh",
            scrollSnapAlign: "start",
          }}
        >
          <Card>
            <CardMedia
              component="video"
              src="/assets/videos/placeholder-video.mp4"
              title="Your Video"
              controls
              sx={{ height: "100%", width: "100%" }}
              autoPlay
              loop
              muted
            />
          </Card>
        </Paper>
      </Container>
    </>
  );
};

export default Index;
