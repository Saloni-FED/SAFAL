import React from "react";
import PageBanner from "../components/Common/PageBanner";
import PriceDetailsContent from "../components/Prices/PriceDetailsContent";

const PriceDetails = () => {
  return (
    <>
      <PageBanner
        pageTitle="Contact Us"
        pageSubTitle="Contact us with your details & ready to start with us."
      />

      <PriceDetailsContent />
    </>
  );
};

export default PriceDetails;
