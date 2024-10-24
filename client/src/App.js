import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./scenes/homePage/index";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Index from "./scenes/LandingPage";
import Constitution from "./scenes/constitution";
import LearnMore from "./scenes/learnMorePage";
import JoinUs from "./scenes/joinUsPage";
import SignUp from "./scenes/signUpPage";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/constitution" element={<Constitution />} />
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/login" />}
            />
            <Route path="/learnmore" element={<LearnMore />} />
            <Route path="/joinus" element={<JoinUs />} />
            <Route path="/signup" element={<LoginPage pageType={"register"} />} />
            <Route path="/login" element={<LoginPage pageType={"login"} />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
