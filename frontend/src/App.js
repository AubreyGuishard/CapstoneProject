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
import JoinGame from "./components/JoinGame/JoinGame";
import MyFriends from "./components/MyFriends/MyFriends";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/register/" element={<RegisterPage />} />
        <Route path="/login/" element={<LoginPage />} />
        <Route path="/postgame/" element={<PrivateRoute><AddGamePage /></PrivateRoute>} />
        <Route path="/user/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/yourgames/" element={<PrivateRoute><UserGames /></PrivateRoute>} />
        <Route path="/mycalendar/" element={<PrivateRoute><CalendarForUser /></PrivateRoute>} />
        {/* <Route path="/join/<int:pk>/" element={<PrivateRoute><JoinGame /></PrivateRoute>} /> */}
        <Route path="/myfriends/" element={<PrivateRoute><MyFriends /></PrivateRoute>} />

      </Routes>
      {/* <Footer /> */}
    </div>

  );
}

export default App;
