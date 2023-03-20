// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddGamePage from "./pages/AddGamePage/AddGamePage";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timgrid/main.css';
// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import UserGames from "./components/UserGames/UserGames";
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
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
