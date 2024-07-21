import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Listing from "../components/Listing/Listing";
import GuidesStep from "../components/Guides/GuidesStep";
import FeedBack from "../components/HomeOne/FeedBack";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import UnlistedSharesProcess from "../components/Unlistedshareprocess/UnlistedSharesProcess";
import Head from "next/head";

const unlistedshares = () => {
  return (
    <div>
      <Head>
        <title>Unlisted Shares - SAFAL CAPITAL (INDIA) LIMITED</title>
        <meta
          name="description"
          content="Invest in unlisted shares with Safal Capital India Limited. Discover opportunities in pre-IPO companies, startups, and private equity investments to diversify your portfolio and achieve high returns."
        />
        <meta
          name="keywords"
          content="unlisted shares, pre-IPO investments, private equity, startup investments, unlisted shares India, Safal Capital unlisted shares, high returns, portfolio diversification, investment opportunities, private companies"
        />
        <link rel="canonical" href="http://safalcapital.in/ContactUs.aspx" />
      </Head>

      <PageBanner
        pageTitle="Unlisted Shares"
        pageSubTitle="You can easily find unlisted shares in India that are available for trading . Buy and Sell Unlisted Shares at best prices with us"
        button="Register Now"
        img="/images/pour.png"
      />
      <div className="container">
        <div className="blog-details-header row align-items-center justify-content-center">
          {/* <div className="col-lg-6 col-md-12">
            <div className="content">
              <a href="#" className="category">
                Mutual Funds
              </a>
              <h1>Things to know About Unlisted Shares</h1>
            </div>
          </div> */}
          {/* <div className="col-lg-6 col-md-12">
            <div className="image">
              <img src="/images/blog/blog1.jpg" alt="image" />
            </div>
          </div> */}
        </div>

        <div className="blog-details-desc">
          <div className="article-content">
            <h3>What are Unlisted Shares?</h3>
            <p>
              Unlisted shares refer to the equity shares of a company that are
              not listed on any recognized stock exchange. This means that they
              cannot be freely traded on public markets like the shares of
              publicly listed companies. These shares are typically issued by
              private companies, which can include startups, small and
              medium-sized enterprises (SMEs), or family-owned businesses.
              Unlike listed shares that are bought and sold through stock
              exchanges, unlisted shares are traded through private
              transactions. This can occur via over-the-counter (OTC) markets,
              private placements, or direct negotiations between buyers and
              sellers.
            </p>
            <h3>Benfits of Unlisted Shares</h3>
            <ul>
              <li>
                Investing in unlisted shares, especially in early-stage
                companies or startups, can potentially yield significant returns
                if the company grows and eventually goes public or is acquired.
              </li>
              <li>
                Investors can access companies and opportunities that are not
                available on public stock exchanges, often in niche or emerging
                industries.
              </li>
              <li>
                Investors in unlisted shares, such as venture capitalists or
                private equity firms, often have a greater say in the company’s
                management and strategic direction.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <PageBanner
        // pageTitle={"Mutual Funds"}
        pageSubTitle={"Steps to Get started with Unlisted Shares"}
      />

      <UnlistedSharesProcess />

      {/* <FeedBack /> */}
      {/* Feedback */}
      <div className="fedback-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p> */}
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              style={{ paddingRight: "3rem" }}
            >
              <div className="single-feedback-box">
                <div className="rating">
                  <img src="/images/star.png" alt="image" />
                  <img src="/images/star.png" alt="image" />
                  <img src="/images/star.png" alt="image" />
                  <img src="/images/star.png" alt="image" />
                  <img src="/images/star.png" alt="image" />
                </div>
                <p>
                  {/* On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled demoralized by the charms of
                  pleasure of the moment, so blinded by desire, that they cannot
                  foresee the pain and trouble that are bound to ensue; and
                  equal blame belongs. */}
                  {/* I had the pleasure of working with Safal Capital India Ltd.
                  for my recent purchase of unlisted shares, and I couldn't be
                  more satisfied with the experience. From the very beginning,
                  the team demonstrated a high level of professionalism and
                  expertise, guiding me */}
                  I had Pleasure of working Safal Capital India Ltd. For my
                  recent purchase of unlisted shares, and I couldn't be more
                  satisfied with the experience. From the very beginning, the
                  team demonstrated a high level of professionalism and
                  expertise, guiding me .
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    {/* <img src="/images/testi.jpg" alt="image" /> */}
                    <div className="title">
                      <h3>Manohar Kanjani</h3>
                      <span>Long Term Investor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              style={{ paddingRight: "3rem" }}
            >
              <div className="single-feedback-box">
                <div className="rating">
                  <img src="/images/star.png" alt="image" />
                  <img src="/images/star.png" alt="image" />
                  <img src="/images/star.png" alt="image" />
                  <img src="/images/star.png" alt="image" />
                  <img src="/images/star.png" alt="image" />
                </div>
                <p>
                  {/* On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled demoralized by the charms of
                  pleasure of the moment, so blinded by desire, that they cannot
                  foresee the pain and trouble that are bound to ensue; and
                  equal blame belongs. */}
                  I wholeheartedly recommend Safal Capital India Ltd. to anyone
                  considering their first investment in unlisted shares or
                  private equity. Thank you for making my entry into this market
                  a successful and rewarding experience!
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    {/* <img src="/images/testi.jpg" alt="image" /> */}
                    <div className="title">
                      <h3>Nilesh Mehta </h3>
                      <span>Equity Investor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              // style={{ paddingRight: "3rem" }}
            >
              <div className="single-feedback-box">
                <div className="rating">
                  <img src="/images/star.png" alt="image" />
                  <img src="/images/star.png" alt="image" />
                  <img src="/images/star.png" alt="image" />
                  <img src="/images/star.png" alt="image" />
                  <img src="/images/star.png" alt="image" />
                </div>
                <p>
                  {/* On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled demoralized by the charms of
                  pleasure of the moment, so blinded by desire, that they cannot
                  foresee the pain and trouble that are bound to ensue; and
                  equal blame belongs. */}
                  I highly recommend Safal Capital India Ltd. to anyone looking
                  to invest in unlisted shares. Their exceptional service and
                  support have made a significant impact on my investment
                  journey.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    {/* <img src="/images/testi.jpg" alt="image" /> */}
                    <div className="title">
                      <h3>Ashish Goyal </h3>
                      <span>Ace Investor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ margin: "5rem 0" }}>
        <Listing />
      </div>

      <div className="container">
        <div className="blog-details-header row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="content">
              <h1 style={{ marginBottom: "30px" }}>
                Why Invest in Unlisted Shares with SAFAL
              </h1>

              <p>
                The complexities of unlisted investments can be daunting,
                particularly for individual investors. Seeking guidance from an
                external advisor brings several advantages: Access and network :
                Benefit and leverage from established relationships to unlock
                exclusive investment opportunities.
              </p>
              <p>
                <strong>Valuation expertise:</strong> SAFAL possess skills and
                tools to accurately assess the fair value of unlisted assets.
              </p>
              <p>
                <strong>Risk management:</strong> With SAFAL you can navigate
                risks associated with unlisted investments and develop a sound
                investment strategy.
              </p>
              <p>
                <strong>Regulatory compliance:</strong> We ensure investments
                comply with relevant regulations and legal requirements.
              </p>
              <p>
                Unlisted shares and securities offer a distinctive investment
                avenue with high return potential. However, understanding the
                risks and navigating complexities necessitates careful
                consideration and expert guidance. By partnering with a
                qualified external advisor, investors can unlock the potential
                of unlisted investments while mitigating associated risks,
                enabling informed decisions to achieve their financial goals.
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
      <div id="faq">
        <>
          <div className="faq-area ptb-100">
            <div className="container">
              <h2>FAQs</h2>
              <div className="faq-accordion">
                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What are unlisted shares?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Unlisted shares refer to the equity shares of a company
                        that are not listed on any recognized stock exchange.
                        This means they cannot be freely traded on public
                        markets like listed shares and are typically traded
                        through private transactions.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I buy unlisted shares?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Unlisted shares can be purchased through private
                        placements, over-the-counter (OTC) markets, or direct
                        negotiations with the company or existing shareholders.
                        You may also acquire them through specialized brokers.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What are the risks associated with unlisted shares?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Investing in unlisted shares comes with several risks,
                        including low liquidity, valuation uncertainty, and less
                        regulatory oversight compared to listed shares. It's
                        important to conduct thorough due diligence before
                        investing.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What are the benefits of investing in unlisted shares?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Unlisted shares offer the potential for high returns,
                        especially if the company grows and eventually goes
                        public or is acquired. They also provide access to
                        unique investment opportunities not available on public
                        markets.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I sell unlisted shares?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Selling unlisted shares typically involves finding a
                        buyer through private negotiations, OTC markets, or
                        brokers who specialize in unlisted securities. The
                        process can be more time-consuming compared to selling
                        listed shares.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How are unlisted shares valued?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        The valuation of unlisted shares is not determined by
                        market prices but through methods such as discounted
                        cash flow (DCF) analysis, comparable company analysis,
                        and independent appraisals. This can lead to subjective
                        valuations.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Are there any regulatory requirements for unlisted
                        shares?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Unlisted shares are subject to different regulatory
                        standards compared to listed shares. Companies issuing
                        unlisted shares have fewer disclosure requirements,
                        resulting in less transparency for investors. It is
                        essential to understand the legal framework and
                        compliance requirements in your jurisdiction.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default unlistedshares;
