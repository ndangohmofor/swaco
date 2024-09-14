import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
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

  const paperStyle = {
    height: "100vh",
    scrollSnapAlign: "start",
    position: "relative",
    elevation: 1,
  };

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
        <Paper sx={paperStyle}>
          <Typography
            variant="h1"
            sx={{
              position: "relative",
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
              top: "2%",
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
          <Card sx={{ position: "relative", top: "2%", zIndex: 1 }}>
            <CardMedia
              sx={{
                height: "70vh",
                width: "90%",
                margin: "auto",
                position: "relative",
              }}
              component="img"
              image="/assets/photos/Learnmore.png"
              alt="members of SWACO"
            />
          </Card>
        </Paper>
        <Paper sx={paperStyle}>
          <Typography
            variant="h2"
            sx={{
              position: "relative",
              top: "1%",
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
              top: "5%",
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
            <Divider />
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
              <Divider component={"li"} />
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
                  Fostering unity and solidarity:
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
                    By promoting a strong sense of community, we encourage
                    members to build meaningful relationships, stand by one
                    another, and collaborate for the common good.
                  </Typography>
                </Typography>
              </ListItem>
              <Divider component={"li"} />
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
                  Promoting and developing community projects:
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
                    We contribute to initiatives that uplift our community and
                    create opportunities for collective progress.
                  </Typography>
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Paper>

        <Paper sx={paperStyle}>
          <Typography
            variant="h2"
            sx={{
              position: "relative",
              top: "1%",
              textAlign: "center",
              width: "100%",
              color: "#2792A9",
              fontWeight: "bold",
              fontSize: "1.5rem",
              zIndex: 1,
            }}
          >
            <Divider> Key Objectives</Divider>
          </Typography>

          <Box
            sx={{
              position: "relative",
              top: "1%",
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
                  1. Monthly Meetings:
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
                    SWACO holds monthly meetings at member's homes. These
                    gatherings are more than administrative—they are social
                    events where bonds are strengthened, and decisions are made
                    about the future of our association. Meetings occur on the
                    last Sunday of each month from 5 PM to 8 PM.
                  </Typography>
                </Typography>
              </ListItem>
              <Divider component={"li"} />
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
                  2. Support and Benefits:
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
                    Members enjoy various forms of support, from financial
                    assistance during life events to social engagement. Whether
                    it's welcoming a newborn with a "born house" celebration or
                    attending a member's wedding, SWACO is committed to
                    celebrating and supporting each other.
                  </Typography>
                </Typography>
              </ListItem>
              <Divider component={"li"} />
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
                  3. Membership:
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
                    Membership is open to all Southern Cameroonians aged 18 and
                    above in Ohio, and their spouses and children. Members are
                    required to uphold our constitution and pay dues to sustain
                    our activities.
                  </Typography>
                </Typography>
              </ListItem>
              <Divider component={"li"} />
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
                  4. Executive Committee:
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
                    An executive team of a President, Vice President, Secretary,
                    etc. ensures the smooth running of the association and
                    upholds the values of unity, transparency, and
                    accountability.
                  </Typography>
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Paper>
        <Paper sx={paperStyle}>
          <Typography
            variant="h2"
            sx={{
              position: "relative",
              top: "5%",
              textAlign: "center",
              width: "100%",
              color: "#2792A9",
              fontWeight: "bold",
              fontSize: "1.2rem",
              zIndex: 1,
            }}
          >
            Financial Contributions & Benefits
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default LearnMore;
