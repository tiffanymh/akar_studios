import React from "react";
import "../../fonts/fonts.css";

import { Grid } from "@mui/material";

import LandingPagePhoto from "../../assets/akar_temp_bg.jpeg";

const LandingPhoto = () => {
  return (
    <Grid container justifyContent="center" mt={5}>
      <img src={LandingPagePhoto} width="80%" />
    </Grid>
  );
};

export default LandingPhoto;
