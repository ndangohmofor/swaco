import React from "react";
import Navbar from "../navbar";
import { Box, Card, CardMedia, Container, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const Index = () => {
  const photos = [
    {
      img: "/assets/photos/mobile/1.png",
      alt: "Beautiful Swaco ladies",
    },
    {
      img: "/assets/photos/mobile/2.png",
      alt: "Swaco meeting in progress",
    },
    {
      img: "/assets/photos/mobile/3.png",
      alt: "Swaco group photo",
    },
    {
      img: "/assets/photos/mobile/4.png",
      alt: "Swaco women in solidarity",
    },
    {
      img: "/assets/photos/mobile/5.png",
      alt: "Swaco men behind the women",
    },
    {
      img: "/assets/photos/mobile/6.png",
      alt: "Swaco meeting item 11",
    },
  ];
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
        <Paper
          sx={{
            height: "100vh",
            scrollSnapAlign: "start",
          }}
        >
          <Carousel>
            {photos.map((item, index) => (
              <Card key={index}>
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.alt}
                  sx={{ height: "100vh", width: "100%" }}
                />
              </Card>
            ))}
          </Carousel>
        </Paper>
      </Container>
    </>
  );
};

export default Index;
