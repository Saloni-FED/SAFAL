import React from "react";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/Faq/FaqContent";

const Faq = () => {
  return (
    <>
      <PageBanner
        pageTitle="Frequently Asked Question"
        pageSubTitle="How can we help you today?"
      />

      <FaqContent />
    </>
  );
};

export default Faq;
