import Navbar from "../navbar";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  ListItem,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { StarBorder } from "@mui/icons-material";

const Constitution = () => {
  const navigate = useNavigate();
  const constition = [
    {
      article: "Article 1",
      title: "Name",
      content: [
        "The association is named Southern Cameroonians Association of Ohio (SWACO).",
      ],
    },
    {
      article: "Article 2",
      title: "Objective",
      content: [
        "Assist members in times of need.",
        "Foster fraternal love, unity, and solidarity.",
        "Promote and develop projects.",
      ],
    },
    {
      article: "Article 3",
      title: "Place, Attendance, and Time of Meeting",
      content: [
        "Meetings at members' homes.",
        "Held on the last Sunday of each month, 5 PM to 8 PM.",
        "Late fee of $1.00 for arrival after 5:15 PM.",
        "Missing three meetings results in loss of membership benefits; four absences lead to expulsion.",
      ],
    },
    {
      article: "Article 4",
      title: "Organization",
      content: [
        "Incorporated as a non-profit under U.S. laws.",
        "Official languages are English and Pidgin English.",
      ],
    },
    {
      article: "Article 5",
      title: "Membership",
      content: [
        "Open to Cameroonians 18 and above in Ohio, and their families.",
        "Membership dues and registration fees apply.",
        "Probation period of six months for new members.",
        "Benefits include end-of-year parties, gifts, and event support.",
      ],
    },
    {
      article: "Article 6",
      title: "Executive Committee and Duties",
      content: [
        "Board includes President, Vice President, Secretary, Vice Secretary, Financial Secretary, Treasurer, Public Relations Officer, and Chief Whip.",
        "Terms are two years, with a maximum of three consecutive terms.",
        "Responsibilities include presiding over meetings, managing finances, maintaining order, and overseeing social events.",
      ],
    },
    {
      article: "Article 7",
      title: "Finances",
      content: [
        "Sources include registration, sinking funds, fines, special levies, and donations.",
        "Specific contribution amounts for various events and activities.",
        "Financial benefits for members include support for births, weddings, illnesses, and funerals.",
      ],
    },
    {
      article: "Article 8",
      title: "Audit and Amendment",
      content: [
        "Annual auditing of the association's finances.",
        "Constitution to be revised every two years.",
      ],
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
            position: "relative",
          }}
        >
          <Carousel stopAutoPlayOnHover interval={5000} duration={1000}>
            {constition.map((item, index) => {
              return (
                <Card index={index}>
                  <CardContent>
                    <Typography
                      variant="h3"
                      sx={{ fontWeight: "bold", fontSize: "20px" }}
                      color={"primary"}
                      gutterBottom
                    >
                      {item.article}
                    </Typography>
                    <Typography
                      color={"text.secondary"}
                      textAlign={"center"}
                      variant="h4"
                      component={"div"}
                      gutterBottom
                      sx={{ fontWeight: "bold", padding: "10px" }}
                    >
                      {item.title}
                    </Typography>
                    <List component="div" sx={{ padding: "10px" }}>
                      {item.content.map((c, idx) => (
                        <>
                          <ListItem>
                            <ListItemButton key={idx}>
                              <ListItemIcon>
                                <StarBorder />
                              </ListItemIcon>
                              <ListItemText
                                primaryTypographyProps={{
                                  padding: "10px",
                                  fontWeight: "medium",
                                  fontSize: "16px",
                                }}
                                primary={c}
                              />
                            </ListItemButton>
                          </ListItem>
                          <Divider variant="inset" component="li" />
                        </>
                      ))}
                    </List>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              );
            })}
          </Carousel>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{ padding: "10px" }}
              onClick={() => navigate(-1)}
              size="large"
            >
              Back
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Constitution;
