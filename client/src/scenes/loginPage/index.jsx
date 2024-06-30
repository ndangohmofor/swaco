import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        width={"100%"}
        backgroundColor={theme.palette.background.alt}
        p={"1rem 6%"}
        textAlign={"center"}
      >
        <Typography
          onClick={() => navigate("/")}
          fontWeight={"bold"}
          fontSize={"32px"}
          color={"primary"}
        >
          SWACO
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p={"2rem"}
        m={"2rem auto"}
        borderRadius={"1.5rem"}
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight={"500"}
          variant="h5"
          sx={{ mb: "1.5rem" }}
          textAlign={"center"}
        >
          Southern Cameroons Association of Ohio
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};
export default LoginPage;
