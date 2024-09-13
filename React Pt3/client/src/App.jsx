import React from "react";
import { EarthoOneProvider } from "@eartho/one-client-react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import AllBooks from "./components/AllBooks";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Error404 from "./components/Error404";
import "./App.css";

const App = () => {
  const location = useLocation();

  const isDashboard = location.pathname === "/Dashboard";

  return (
    <EarthoOneProvider clientId={import.meta.env.VITE_EARTHO_CLIENT_ID}>
      {!isDashboard && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllBooks" element={<AllBooks />} />
        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error404 />} />{" "}
      </Routes>
    </EarthoOneProvider>
  );
};

export default App;
