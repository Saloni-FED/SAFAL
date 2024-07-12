import React, { useState } from "react";
import PageBanner from "../Common/PageBanner";
import GuidesStep from "../Guides/GuidesStep";
import Navbar2 from "../Navbar2/Navbar2";
import SubNavbar from "../Navbar2/SubNavbar";
// import ChildEducationCalculator from "../Calculators/ChildEducationCalculator";
// import RetirementCalculator from "../Calculators/RetirementCalculator";
import RetirementCalculator from "../Calculator/RetirementCalculator";
import ChildEducationCalculator from "../Calculator/ChidEducationClaculator";

import MarriageForChild from "../Calculator/MarriageForChild";
import SIPGrowthCalculator from "../Calculator/Sip/SipGrowthCalculator";
import SIPNeedCalculator from "../Calculator/Sip/SipNeedCalculator";
import SIPDelayCostCalculator from "../Calculator/Sip/SipDelayCostCalculator";
// import other calculators as needed
// Quick Tools
import InvestmentCalculator from "../Calculator/QuickTools/InvestmentCalculator";
import IrregularCashFlowCalculator from "../Calculator/QuickTools/IrregularCashFlowCalculator";
import WeightedCalculator from "../Calculator/QuickTools/WeightedCalculator";

const Mutual = () => {
  const [selectedNav, setSelectedNav] = useState("life-goal");
  // const [selectedSubNav, setSelectedSubNav] = useState("Retirement");
  const [selectedSubNav, setSelectedSubNav] = useState(() => {
    switch (selectedNav) {
      case "life-goal":
        return "Retirement";
      case "financial":
        return "Growth";
      case "quick-tools":
        return "Single Amount"; // Adjust this default value based on your requirement
      default:
        return "Retirement"; // Defaulting to "Retirement" if selectedNav doesn't match expected values
    }
  });

  //  'life-goal': ['Retirement', 'Education', 'Child'],
  //  'financial': ["Growth", "Need", "Delay Cost"],

  console.log(selectedSubNav, "Sub nav");
  console.log(selectedNav, "Main nav");
  const renderCalculator = () => {
    if (selectedNav === "life-goal") {
      switch (selectedSubNav) {
        case "Retirement":
          return <RetirementCalculator />;

        case "Education":
          return <ChildEducationCalculator />;
        case "Child":
          return <MarriageForChild />;
        default:
          return <div>Please select a sub-category</div>;
      }
    }
    if (selectedNav === "financial") {
      switch (selectedSubNav) {
        case "Growth":
          return <SIPGrowthCalculator />;

        case "Need":
          return <SIPNeedCalculator />;
        case "Delay Cost":
          return <SIPDelayCostCalculator />;
        // Add components for financial calculators here
        default:
          return <div>Please select a sub-category</div>;
      }
    }

    // 'quick-tools': ['Single Amount', '', 'Weighted Avg. Returns'],
    if (selectedNav === "quick-tools") {
      switch (selectedSubNav) {
        case "Single Amount":
          return <InvestmentCalculator />;
        case "Irregular Cash Flow":
          return <IrregularCashFlowCalculator />;
        case "Weighted Avg. Returns":
          return <WeightedCalculator />;
        // Add components for quick tools here
        default:
          return <div>Please select a sub-category</div>;
      }
    }
    return null;
  };

  return (
    <div>
      <div className="container">
        <div className="blog-details-header row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="content">
              <a href="#" className="category">
                Mutual Funds
              </a>
              <h1>Things to know About Mutual Funds</h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="image">
              <img src="/images/blog/blog1.jpg" alt="image" />
            </div>
          </div>
        </div>

        <div className="blog-details-desc">
          <div className="article-content">
            <h3>What is Term Mutual Funds?</h3>
            <p>
              Mutual funds are investment vehicles that pool money from multiple
              investors to invest in a diversified portfolio of securities, such
              as stocks, bonds, money market instruments, and other assets. They
              are managed by professional portfolio managers who allocate the
              fund's investments and attempt to produce capital gains or income
              for the fund's investors. Here’s a detailed look into mutual
              funds, their types, benefits, and how they work.
            </p>
            <h3>How Mutual Funds Work?</h3>
            <ul>
              <li>
                Investors purchase shares in a mutual fund. This pooled money is
                then invested in a diversified portfolio of assets.
              </li>
              <li>
                Experienced fund managers make decisions about buying, holding,
                or selling securities in the fund’s portfolio, based on research
                and analysis.
              </li>
              <li>
                Mutual funds typically invest in a wide variety of assets, which
                helps spread risk.
              </li>
              <li>
                The value of the mutual fund is determined by its Net Asset
                Value (NAV), which is the total value of the fund’s assets minus
                its liabilities, divided by the number of shares outstanding.
              </li>
            </ul>
            <h3>Benefits of Mutual Funds</h3>
            <ul>
              <li>
                By investing in a mutual fund, investors gain exposure to a
                diversified portfolio, reducing individual security risk.
              </li>
              <li>
                Fund managers bring expertise and experience in selecting and
                managing investments.
              </li>
              <li>
                Mutual fund shares can be bought or sold at the fund’s NAV at
                the end of each trading day.
              </li>
              <li>
                Mutual funds have relatively low minimum investment
                requirements, making them accessible to a broad range of
                investors.
              </li>
              <li>
                They offer a hassle-free way to invest, as the fund handles
                buying, selling, and record-keeping.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PageBanner
        pageTitle={"Mutual Funds"}
        pageSubTitle={"Steps to Get started with Mutual Funds"}
      />
      <GuidesStep />
      <div style={{paddingBottom:"4rem"}}>
        <Navbar2
          onSelect={setSelectedNav}
          selectedSubNav={selectedSubNav}
          setSelectedSubNav={setSelectedSubNav}
        />
        <SubNavbar
          selectedMainNav={selectedNav}
          onSelectSubNav={setSelectedSubNav}
          selectedSubNav={selectedSubNav}
        />
        {renderCalculator()}
      </div>
    </div>
  );
};

export default Mutual;
