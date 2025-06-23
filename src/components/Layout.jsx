import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Signup from "./Signup";
import WelcomeSection from "./Welcome";
import SketchSection from "./SketchSection";
import Highlights from "./Highlights";
import { Helmet } from "react-helmet-async";

const Layout = () => {
  return (
    <>
      <Helmet>
        <title>Home | Arivra</title>
        <meta
          name="description"
          content="Welcome to Arivra – Learn Web Dev, AI/ML, and DSA interactively."
        />
        <meta name="keywords" content="Arivra, Web Dev, AI, DSA, Tutorials" />
      </Helmet>
      <Navbar />
      <WelcomeSection />
      <Outlet /> {/* This is where the page content will go */}
      <Highlights />
      <SketchSection />
      <Footer />
    </>
  );
};

export default Layout;
