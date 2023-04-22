import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default RootLayout;
