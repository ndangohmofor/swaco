import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  Routes,
} from "react-router-dom";
import HomePage from "./scenes/HomePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
