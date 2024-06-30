import React from "react";
import Navbar from "../navbar";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardActions,
  Container,
  Paper,
  Stack,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

const Index = () => {
  const photos = [
    {
      img: "/assets/photos/mobile/1.png",
      alt: "Beautiful Swaco ladies",
      cardAction: "About us",
    },
    {
      img: "/assets/photos/mobile/2.png",
      alt: "Swaco meeting in progress",
      cardAction: "Our Members",
    },
    {
      img: "/assets/photos/mobile/3.png",
      alt: "Swaco group photo",
      cardAction: "Our Ex Co",
    },
    {
      img: "/assets/photos/mobile/4.png",
      alt: "Swaco women in solidarity",
      cardAction: "Our Constitution",
    },
    {
      img: "/assets/photos/mobile/5.png",
      alt: "Swaco men behind the women",
      cardAction: "Becoming a member",
    },
    {
      img: "/assets/photos/mobile/6.png",
      alt: "Swaco meeting item 11",
      cardAction: "Contact us",
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
            position: "relative", // Ensure the paper container is the positioning reference
          }}
        >
          <Carousel>
            {photos.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  height: "100vh",
                  width: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.alt}
                  sx={{ height: "100vh", width: "100%" }}
                />
                <Stack
                  direction={"row"}
                  spacing={2}
                  sx={{
                    position: "absolute",
                    bottom: 160,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                    background: "rgba(0, 0, 0, 0.5)", //Make the button more visible
                    padding: 1, // Adds padding to the button
                    borderRadius: 1, // Add round corners to the button
                  }}
                >
                  <Button
                    key={index}
                    variant="outlined"
                    sx={{
                      color: "white",
                    }}
                  >
                    {item.cardAction}
                  </Button>
                </Stack>
              </Box>
            ))}
          </Carousel>
        </Paper>
      </Container>
    </>
  );
};

export default Index;
