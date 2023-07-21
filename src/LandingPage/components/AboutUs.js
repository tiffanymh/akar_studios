import React from "react";
import Header from "./Header";
import "../../fonts/fonts.css";

import { Box, Grid, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Grid container spacing={1} justifyContent="center" mt={5}>
      <Grid item md={5}>
        <Typography
          variant="h4"
          sx={{ fontFamily: "Playfair Display", fontWeight: "600" }}
        >
          About Us
        </Typography>

        <Box mt={2}>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Playfair Display", fontWeight: "600" }}
          >
            "Origin"
          </Typography>
          <Typography sx={{ fontFamily: "Work Sans", fontWeight: "400" }}>
            Akar, which translates to 'root' in our native language, perfectly
            captures the essence of our clothing store. We were inspired to
            establish Akar_studios with the vision of creating designs deeply
            rooted in and influenced by our cultural heritage. Inspired by the
            traditional batik, we infuse these elements into modern, everyday
            apparel, creating a collection that effortlessly blends the best of
            both worlds, making you feel comfortable, confident, and proud to
            wear.
          </Typography>
        </Box>

        <Box mt={2}>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Playfair Display", fontWeight: "600" }}
          >
            "Mission"
          </Typography>
          <Typography sx={{ fontFamily: "Work Sans", fontWeight: "400" }}>
            Seamlessly combine traditional clothing with everyday wear,
            promoting cultural roots embedded into our lives. 
          </Typography>
        </Box>

        <Box mt={2}>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Playfair Display", fontWeight: "600" }}
          >
            "Vision"
          </Typography>
          <Typography sx={{ fontFamily: "Work Sans", fontWeight: "400" }}>
          Member avenger
          </Typography>
        </Box>
      </Grid>
      <Grid item md={4}></Grid>
    </Grid>
  );
};

export default AboutUs;
