import React from "react";
import "../../fonts/fonts.css";


import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

function Header() {
  return (
    <Grid container spacing={1} alignItems="flex-end" justifyContent="center">
      <Grid item md={1}>
        <Typography variant="caption">SHOP ALL</Typography>
      </Grid>
      <Grid item>
        <Typography variant="caption">LOOKBOOK</Typography>
      </Grid>
      <Grid item md={6} display="flex" justifyContent="center">
        <Typography
          variant="h4"
          sx={{ fontFamily: "Playfair Display", fontWeight: "700" }}
        >
          Akar Studios
        </Typography>
      </Grid>
      <Grid item md={1} >
        <Typography variant="caption">MY ACCOUNT</Typography>
      </Grid>
      <Grid item>
        <Typography variant="caption">CART (0)</Typography>
      </Grid>
    </Grid>
  );
}

export default Header;
