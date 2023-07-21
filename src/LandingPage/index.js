import React from "react";
import Header from "./components/Header";
import "../fonts/fonts.css";

import { Box } from "@mui/material";
import LandingPhoto from "./components/LandingPhoto";
import AboutUs from "./components/AboutUs";
import IGTaggedPhotos from "./components/IGTaggedPhotos";

const Home = () => {
  return (
    <Box p={6}>
      <Header />
      <LandingPhoto />
      <AboutUs />
      <IGTaggedPhotos />
    </Box>
  );
};

export default Home;
