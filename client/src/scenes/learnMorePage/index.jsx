import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  List,
  ListItem,
  Paper,
  styled,
  Typography,
} from "@mui/material";
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
            height: "30vh",
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
            The Southern Cameroonians Association of Ohio (SWACO) is a
            non-profit organization that brings together Southern Cameroonians
            living in Ohio. Our goal is to create a strong and unified community
            where members can support one another, celebrate their shared
            heritage, and work on projects that benefit both members and the
            broader society.
          </Typography>
        </Paper>
        <Paper
          sx={{
            height: "50vh",
            scrollSnapAlign: "start",
            position: "relative",
            elevation: 1,
          }}
        >
          <Typography
            variant="h2"
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
            Our Mission
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              position: "relative",
              top: "7%",
              width: "80%",
              textAlign: "left",
              fontSize: "1rem",
              margin: "auto",
              zIndex: 1,
            }}
          >
            SWACO is dedicated to:
          </Typography>
          <Box
            sx={{
              position: "relative",
              top: "5%",
              width: "80%",
              margin: "auto",
              zIndex: 1,
            }}
          >
            <List sx={styled} aria-label="mission statements">
              <ListItem>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    margin: "auto",
                    zIndex: 1,
                  }}
                >
                  Assisting members in times of need:
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "left",
                      fontWeight: "regular",
                      fontSize: "1rem",
                      margin: "auto",
                      zIndex: 1,
                    }}
                  >
                    We offer support to members during critical moments such as
                    illnesses, bereavements, and life milestones like weddings
                    and childbirth.
                  </Typography>
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default LearnMore;
