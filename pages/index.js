import React from "react";
import Banner from "../components/HomeOne/Banner";
import WhyUs from "../components/WhyUs/WhyUs";
import Products from "../components/Products/Products";
import OurFeature from "../components/Common/OurFeature";
import FeedBack from "../components/HomeOne/FeedBack";
import RegisterAreaTwo from "../components/Common/RegisterAreaTwo";
import TradingViewWidget from "../components/TradingViewWidget/TradingViewWidget";
import TradingViewTickerTape from "../components/Trading/TradingViewTickerTape";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>
          Online Stock & Commodity Trading Company | Mutual Fund Investment -
          SAFAL CAPITAL (INDIA) LIMITED
        </title>
        <meta
          name="description"
          content="Safal Capital India Limited is a leading stock broking company in India which provide online stock & commodity trading, mutual fund investment, equity trading & portfolio management services and many more."
        />
        <meta
          name="keywords"
          content="online mutual fund investment, demat account, future and options trading, online share trading, stock broking company, share trading company, stock broker in india, stock broker in gujarat, stock broker in madhya pradesh, stock broker in ahmedabad, safal capital"
        />
      </Head>
      <Banner />

      <TradingViewWidget />
      <div style={{ overflowY: "hidden" }}>
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
