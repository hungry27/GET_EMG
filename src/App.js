import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Logout from "./pages/Logout";
import Load from "./pages/Load";
import Emg from "./pages/Emg";
import DataPage from "./pages/DataPage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/chart" element={<Emg />} exact />
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/logout" element={<Logout />} exact />
          <Route path="/emg" element={<Load />} exact />
          <Route path="/data" element={<DataPage />} exact />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
