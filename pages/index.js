import React from "react";
import Banner from "../components/HomeOne/Banner";
import WhyUs from "../components/WhyUs/WhyUs";
import Products from "../components/Products/Products";
import OurFeature from "../components/Common/OurFeature";
import FeedBack from "../components/HomeOne/FeedBack";
import RegisterAreaTwo from "../components/Common/RegisterAreaTwo";
import TradingViewWidget from "../components/TradingViewWidget/TradingViewWidget";
import TradingViewTickerTape from "../components/Trading/TradingViewTickerTape";

const Index = () => {
  return (
    <>
      <Banner />
     
      <TradingViewWidget />
      <div style={{overflowY:"hidden"}}>
        <TradingViewTickerTape />
      </div>
      <WhyUs title="Why Choose SAFAL?" />
      <div style={{ marginBottom: "10rem" }}>
        <Products />
      </div>
      <OurFeature title="Our Financial Services" />
      <FeedBack />
      <RegisterAreaTwo title="Start Trading on Safal" />
    </>
  );
};

export default Index;
