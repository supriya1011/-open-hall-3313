import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Products from "../pages/Products";
import SignUp from "../pages/sign_up/SignUp";
import Login from "../pages/log_in/Login";
import LoggedIn from "../pages/logged-in/LoggedIn";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logged-in" element={<LoggedIn />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
