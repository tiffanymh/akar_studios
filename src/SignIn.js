import React from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Box, Typography, TextField, Button, Link, Grid } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        color: "black",
        fontFamily: "Work Sans",
        fontSize: "20px",
      }
    },
    MuiLink: {
      defaultProps: {
        color: grey[400]
      }
    }
  }
})

const StyledButton = styled(Button)(({ theme }) => ({
  color: grey[50],
  backgroundColor: grey[400],
  '&:hover': {
    backgroundColor: grey[500],
  },
  height: "30px",
  width: "200px"
}));

function EmailPasswordSignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // TODO: change to use database
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Typography>
        Email
      </Typography>
      <TextField
        margin="dense"
        required
        fullWidth
        id="email"
        name="email"
        autoComplete="email"
        autoFocus
        size="small"
      />
      <Typography>
        Password
      </Typography>
      <TextField
        margin="dense"
        required
        fullWidth
        name="password"
        type="password"
        id="password"
        autoComplete="current-password"
        size="small"
      />
      <Link href="#" variant="body2">
        Forgot password?
      </Link>
      <StyledButton
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2, float: "right" }}
      >
        Sign In
      </StyledButton>
      <Grid container direction="row" spacing={1} justifyContent={"center"}>
        <Grid item>
          <Typography>
            Don't have an account?
          </Typography>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            Sign up
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: '100px'
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <EmailPasswordSignIn />
      </Box>
    </ThemeProvider>
  );
}

export default SignIn;