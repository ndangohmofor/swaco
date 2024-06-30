import React from "react";
import Navbar from "../navbar";
import { Box, Card, CardMedia, Container, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel/dist/components/Carousel";

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
        <Card
          sx={{
            height: "100vh",
            scrollSnapAlign: "start",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid lightgray",
          }}
        >
          <CardMedia
            component={"video"}
            className="mobile-video"
            src="/assets/videos/placeholder_video.mp4"
            autoPlay
            loop
            muted
          />
        </Card>
        <Box
          sx={{
            height: "100vh",
            scrollSnapAlign: "start",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <Carousel>
            <Card>
              <CardMedia component={"image"} height={"100%"} image="" alt="" />
            </Card>
          </Carousel>
        </Box>
      </Container>
    </>
  );
};

export default Index;
