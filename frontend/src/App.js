// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddGamePage from "./pages/AddGamePage/AddGamePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import UserGames from "./components/UserGames/UserGames";
import CalendarForUser from "./components/CalendarForUser/CalendarForUser";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/postgame" element={<PrivateRoute><AddGamePage /></PrivateRoute>} />
        <Route path="/user" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/yourgames" element={<PrivateRoute><UserGames /></PrivateRoute>} />
        <Route path="/gamescalendar" element={<PrivateRoute><CalendarForUser /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
