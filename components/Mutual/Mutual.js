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

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

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
                Term Mutual Funds
              </a>
              <h1>Things to know before Getting Started With Mutual Funds</h1>

              <h3 style={{marginTop:"3rem"}}>What is Term Mutual Funds?</h3>

              <p>
                Mutual funds are investment vehicles that pool money from many
                investors to invest in a diversified portfolio of stocks, bonds,
                or other assets. Managed by professional fund managers, mutual
                funds offer investors access to a wide range of securities and
                asset classes that might be difficult to access individually.
                They provide diversification, spreading risk across different
                investments, which can help mitigate losses. Mutual funds come
                in various types catering to different investment goals and risk
                tolerances, such as equity funds, bond funds, and balanced funds.
              </p>
              <p>
                They offer liquidity, allowing investors to redeem their shares
                at current market prices. Additionally, mutual funds are
                regulated, ensuring transparency through regular reporting of
                holdings, performance, and fees. This structure provides
                individual investors with a cost-effective and professionally
                managed way to participate in the financial markets.
              </p>
            </div>
          </div>
          {/* <div className="col-lg-6 col-md-12">
            <div className="image">
              <img src="/images/blog/blog1.jpg" alt="image" />
            </div>
          </div> */}
        </div>

        {/* <div className="blog-details-desc">
          <div className="article-content">
            <h3>What is Term Insurance ?</h3>
          </div>
        </div> */}
      </div>
      <div style={{ marginTop: "10rem" }}>
        <PageBanner
          pageTitle="Mutual Funds"
          pageSubTitle={"Steps to Proceed With Mutual Funds"}
        />
      </div>

      <GuidesStep />
      <div style={{ paddingBottom: "4rem" }}>
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

      <>
        <div className="faq-area ptb-100">
          <div className="container">
            <h2>FAQs</h2>
            <div className="faq-accordion">
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What is a mutual fund?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      A mutual fund is an investment vehicle that pools money
                      from many investors to purchase a diversified portfolio of
                      stocks, bonds, or other securities. Professional fund
                      managers manage these funds to achieve specific investment
                      goals.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How do mutual funds work?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Mutual funds collect money from multiple investors and
                      invest it in a diversified portfolio. Each investor owns
                      shares, which represent a portion of the holdings of the
                      fund. The fund's value is based on the performance of its
                      investments.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What are the types of mutual funds?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      There are several types of mutual funds, including equity
                      funds, debt funds, hybrid funds, and money market funds.
                      Each type has a different investment strategy and risk
                      level.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What are the benefits of investing in mutual funds?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Mutual funds offer diversification, professional
                      management, liquidity, and convenience. They allow
                      investors to access a broad range of securities with
                      relatively small amounts of money.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How do I choose the right mutual fund?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Choosing the right mutual fund depends on your investment
                      goals, risk tolerance, and investment horizon. It's
                      important to research and compare funds based on their
                      performance, fees, and the fund manager's track record.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What are the risks associated with mutual funds?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Mutual funds are subject to market risk, interest rate
                      risk, credit risk, and liquidity risk. The value of mutual
                      fund investments can fluctuate, and there is no guarantee
                      of returns.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How are mutual funds taxed?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Mutual funds are subject to capital gains tax. Short-term
                      capital gains are taxed at the investor's income tax rate,
                      while long-term capital gains are taxed at a lower rate.
                      Dividends received from mutual funds may also be subject
                      to tax.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Can I lose money in mutual funds?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Yes, investing in mutual funds involves risk, and it is
                      possible to lose money. The value of mutual fund
                      investments can go down as well as up, depending on market
                      conditions and the performance of the fund's underlying
                      assets.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How can I invest in mutual funds?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      You can invest in mutual funds directly through the fund
                      house, through a broker, or via online investment
                      platforms. It's important to review the fund's prospectus
                      and understand the fees and investment strategy before
                      investing.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Mutual;
