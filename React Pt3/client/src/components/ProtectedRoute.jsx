import React from "react";
import { useEarthoOne } from "@eartho/one-client-react";
import Error404 from "./Error404";

const ProtectedRoute = ({ children }) => {
  const { isConnected, user } = useEarthoOne();

  const adminEmail = import.meta.env.VITE_EARTHO_ADMIN_EMAIL;

  return !isConnected || user?.email !== adminEmail ? <Error404 /> : children;
};

export default ProtectedRoute;
