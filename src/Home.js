import React from "react";
import Header from "./header";
import './fonts/fonts.css';
import IGTaggedPhotos from "./IGTaggedPhotos";

const Home = () => {
  return (
      <div>
        <Header />
        <IGTaggedPhotos />
      </div>
  );
};

export default Home;