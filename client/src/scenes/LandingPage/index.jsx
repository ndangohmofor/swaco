import React from "react";
import Navbar from "../navbar";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const photos = [
    {
      img: "/assets/photos/mobile/1.png",
      alt: "Beautiful Swaco ladies",
      cardAction: "About us",
      cardActionLink: "/about",
    },
    {
      img: "/assets/photos/mobile/2.png",
      alt: "Swaco meeting in progress",
      cardAction: "Our Members",
      cardActionLink: "/members",
    },
    {
      img: "/assets/photos/mobile/3.png",
      alt: "Swaco group photo",
      cardAction: "Our Ex Co",
      cardActionLink: "/exco",
    },
    {
      img: "/assets/photos/mobile/4.png",
      alt: "Swaco women in solidarity",
      cardAction: "Our Constitution",
      cardActionLink: "/constitution",
    },
    {
      img: "/assets/photos/mobile/5.png",
      alt: "Swaco men behind the women",
      cardAction: "Becoming a member",
      cardActionLink: "/membership",
    },
    {
      img: "/assets/photos/mobile/6.png",
      alt: "Swaco meeting item 11",
      cardAction: "Planning the end of year meeting",
      // cardActionLink: "/contactus",
    },
  ];

  const pictures = [
    {
      img: "/assets/photos/mobile2/11.jpeg",
      alt: "Members of SWACO",
      cardAction: "Members of SWACO",
      // cardActionLink: "/about",
    },
    {
      img: "/assets/photos/mobile2/12.jpeg",
      alt: "Part of our abled excecutive team",
      cardAction: "Part of our abled excecutive team",
      // cardActionLink: "/members",
    },
    {
      img: "/assets/photos/mobile2/13.jpeg",
      alt: "Swaco meeting session in progress",
      cardAction: "Swaco meeting session in progress",
      // cardActionLink: "/exco",
    },
    {
      img: "/assets/photos/mobile2/14.jpeg",
      alt: "About to start a Sunday session of SWACO",
      cardAction: "About to start a Sunday session of SWACO",
      // cardActionLink: "/constitution",
    },
    {
      img: "/assets/photos/mobile2/15.jpeg",
      alt: "Swaco men behind the women",
      cardAction: "Witnessing a member tie the knot",
      // cardActionLink: "/membership",
    },
    {
      img: "/assets/photos/mobile2/16.jpeg",
      alt: "Swaco meeting item 11",
      cardAction: "About to go out and show love to the bride and groom",
      // cardActionLink: "/contactus",
    },
    {
      img: "/assets/photos/mobile2/17.jpeg",
      alt: "Swaco meeting item 11",
      cardAction: "Ready! Set! Dance!",
      // cardActionLink: "/contactus",
    },
    {
      img: "/assets/photos/mobile2/18.jpeg",
      alt: "Swaco meeting item 11",
      cardAction: "We are together. We are one!",
      // cardActionLink: "/contactus",
    },
    {
      img: "/assets/photos/mobile2/19.jpeg",
      alt: "Swaco meeting item 11",
      cardAction: "Nothing beats the time we spend together",
      // cardActionLink: "/contactus",
    },
    {
      img: "/assets/photos/mobile2/20.jpeg",
      alt: "Swaco meeting item 11",
      cardAction: "Living and bonding in solidarity",
      // cardActionLink: "/contactus",
    },
    {
      img: "/assets/photos/mobile2/21.jpeg",
      alt: "Swaco meeting item 11",
      cardAction: "Laughter is the music that fills our lives.",
      // cardActionLink: "/contactus",
    },
    {
      img: "/assets/photos/mobile2/22.jpeg",
      alt: "Swaco meeting item 11",
      cardAction: "Joy brings us together",
      // cardActionLink: "/contactus",
    },
  ];

  const navigate = useNavigate();
  const { palette } = useTheme();

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
            backgroundImage: `url("/assets/photos/Cameroon.png")`,
            backgroundSize: "cover", // Fill the entire section
            backgroundPosition: "center", // Center the image
            backgroundRepeat: "no-repeat", // Do not repeat the image
          }}
        >
          <Typography
            variant="h1"
            sx={{
              position: "relative",
              top: "10%",
              textAlign: "center",
              width: "100%",
              color: "#2792A9",
              fontWeight: "bold",
              fontSize: "1.5rem",
              zIndex: 1,
            }}
          >
            Southern Cameroonians Association of Ohio
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
              onClick={() => navigate("/learnmore")}
              variant="contained"
              style={{
                borderRadius: 50,
              }}
            >
              Learn More
            </Button>
          </Box>
          <Stack
            spacing={3}
            sx={{
              position: "relative",
              top: "30%",
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
                margin: "auto",
              }}
              onClick={() => navigate("/calendar")}
              variant="contained"
              style={{
                borderRadius: 50,
              }}
            >
              Calendar
            </Button>
            <Button
              sx={{
                color: "#000000",
                position: "relative",
                margin: "auto",
              }}
              onClick={() => navigate("/events")}
              variant="contained"
              style={{
                borderRadius: 50,
              }}
            >
              Events
            </Button>
            <Button
              sx={{
                color: "#000000",
                position: "relative",
                margin: "auto",
              }}
              onClick={() => navigate("/projects")}
              variant="contained"
              style={{
                borderRadius: 50,
              }}
            >
              Projects
            </Button>
          </Stack>
          <Box
            sx={{
              position: "relative",
              top: "50%",
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
                margin: "auto",
              }}
              onClick={() => navigate("/joinus")}
              variant="contained"
              style={{
                borderRadius: 50,
              }}
            >
              Join Us
            </Button>
          </Box>
        </Paper>
        <Paper
          sx={{
            height: "100vh",
            scrollSnapAlign: "start",
            position: "relative", // Ensure the paper container is the positioning reference
          }}
        >
          <Carousel>
            {pictures.map((item, index) => (
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
                      m: "2rem 0",
                      p: "1rem",
                      color: palette.background.alt,
                      "&:hover": {
                        cursor: "default",
                        color: palette.primary.light,
                      },
                    }}
                  >
                    {item.cardAction}
                  </Button>
                </Stack>
              </Box>
            ))}
          </Carousel>
        </Paper>

        <Paper
          sx={{
            height: "100vh",
            scrollSnapAlign: "start",
            position: "relative", // Ensure the paper container is the positioning reference
          }}
        >
          <Card>
            <CardMedia
              component="video"
              src="/assets/videos/Swaco_Low.mp4"
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
                    onClick={() => navigate(item.cardActionLink)}
                    sx={{
                      m: "2rem 0",
                      p: "1rem",
                      color: palette.background.alt,
                      "&:hover": {
                        cursor: "default",
                        color: palette.primary.light,
                      },
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
