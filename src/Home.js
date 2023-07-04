import React from "react";
import Header from "./header";
import "./home.css";

const Home = () => {
  return (
      <div className="box">
          <div className="landing-page-wrapper">
              <div className="landing-page">
                <Header />
                  <div className="looks-by-you">
                      <img className="rectangle" alt="Rectangle" src="rectangle-6.png" />
                      <img className="img" alt="Rectangle" src="rectangle-7.png" />
                      <img className="rectangle-2" alt="Rectangle" src="rectangle-8.png" />
                      <img className="rectangle-3" alt="Rectangle" src="rectangle-9.png" />
                      <img className="rectangle-4" alt="Rectangle" src="rectangle-10.png" />
                      <div className="best-sellers">Best Sellers</div>
                  </div>
                  <p className="mid-year-sale-off">Mid Year Sale: 50% Off + Free Shipping Indonesia + Usa</p>
                  <p className="p">Mid Year Sale: 50% Off + Free Shipping Indonesia + Usa</p>
                  <p className="mid-year-sale-off-2">Mid Year Sale: 50% Off + Free Shipping Indonesia + Usa</p>
                  <img className="img-2" alt="Img" src="9179844ac7029f8cfbcef5e8684a9f41-1.png" />
              </div>
          </div>
      </div>
  );
};

export default Home;