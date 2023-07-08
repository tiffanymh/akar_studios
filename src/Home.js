import React from "react";
import Header from "./Header";
import SignIn from "./SignIn";
import './fonts/fonts.css';
import IGTaggedPhotos from "./IGTaggedPhotos";
import { Typography, Link } from "@mui/material";

const Home = () => {
  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (
      <div>
        <Header />
        <SignIn />
        <IGTaggedPhotos />
        <Copyright />
      </div>
  );
};

export default Home;