import React from "react";

import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        align: "center",
        color: "black",
        fontFamily: "Work Sans",
        fontSize: "20px",
        fontWeight: "400",
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          boxShadow: "none",
        }
      }
    }
  }
})

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item display="flex" alignItems="flex-end">
              <Typography> About Us </Typography>
            </Grid>
            <Grid item display="flex" alignItems="flex-end">
              <Typography> Shop </Typography>
            </Grid>
            <Grid item md={true}>
              <Typography sx={{ fontFamily: "Playfair Display", fontWeight: "700", fontSize: "40px"}}> 
              Akar Studios
              </Typography>
            </Grid>
            <Grid item display="flex" alignItems="flex-end">
              <Typography> IDR </Typography>
            </Grid>
            <Grid item display="flex" alignItems="flex-end">
              <Typography> My Account </Typography>
            </Grid>
            <Grid item display="flex" alignItems="flex-end">
              <Typography> Cart (0) </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header;