import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import AllBooks from "./components/AllBooks";
import Home from "./components/Home/Home";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  const location = useLocation();

  const isDashboard = location.pathname === "/Dashboard";
  return (
    <>
      {!isDashboard && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllBooks" element={<AllBooks />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
