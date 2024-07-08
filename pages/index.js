import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../components/HomeOne/Banner";
import Funfact from "../components/Common/Funfact";
import BuySell from "../components/HomeOne/BuySell";
import AccountCreate from "../components/Common/AccountCreate";
import Platform from "../components/HomeOne/Platform";
import FeedBack from "../components/HomeOne/FeedBack";
import Portfolio from "../components/Common/Portfolio";
import OurFeature from "../components/Common/OurFeature";
import AppDownload from "../components/Common/AppDownload";
import RegisterAreaTwo from "../components/Common/RegisterAreaTwo";
import WhyUs from "../components/WhyUs/WhyUs";
import Products from "../components/Products/Products";
import Listing from "../components/Listing/Listing";

const Index = () => {
  return (
    <>
      <Banner />

      {/* <Funfact pt100='pt-100' /> */}

      <WhyUs title="Why Choose SAFAL?" />

      {/* <BuySell pt70='pt-70' /> */}

      <div style={{marginBottom: "10rem"}}>
        <Products />
      </div>

      {/* <AccountCreate title='Get Started in a Few Minutes' /> */}

      {/* <Platform /> */}

      {/* <FeedBack /> */}

      {/* <Portfolio bgColor='bg-f9f9f9' /> */}

      {/* <OurFeature title='Our Features' /> */}

      {/* <AppDownload /> */}

      <Listing />

      <RegisterAreaTwo title="Start Trading on Safal" />
    </>
  );
};

export default Index;
