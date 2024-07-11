import React from "react";
import PageBanner from "../Common/PageBanner";
import GuidesStep from "../Guides/GuidesStep";
const Mutual = () => {
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
            <h3>What is Term Mutual Funds ?</h3>
            <p>
              Mutual funds are investment vehicles that pool money from multiple
              investors to invest in a diversified portfolio of securities, such
              as stocks, bonds, money market instruments, and other assets. They
              are managed by professional portfolio managers who allocate the
              fund's investments and attempt to produce capital gains or income
              for the fund's investors. Here’s a detailed look into mutual
              funds, their types, benefits, and how they work.
            </p>
            <h3>How Mutual Funds Work ?</h3>
            <ul>
              <li>
                Investors purchase shares in a mutual fund. This pooled money is
                then invested in a diversified portfolio of assets.
              </li>
              <li>
                Experienced fund managers make decisions about buying, holding,
                or selling securities in the fund’s portfolio, based on research
                and analysis.
                {/* <a href="#">gamepad</a> for play on the */}
              </li>
              <li>
                Mutual funds typically invest in a wide variety of assets, which
                helps spread risk.
              </li>
              <li>
                The value of the mutual fund is determined by its Net Asset
                Value (NAV), which is the total value of the fund’s assets minus
                its liabilities, divided by the number of shares outstanding.
                <strong>television</strong> for traditional gameplay
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
                {/* <a href="#">gamepad</a> for play on the */}
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
      <PageBanner pageTitle={"Mutual Funds"} pageSubTitle={"Steps to Get started with Mutual Funds"}/>
      <GuidesStep />
    </div>
  );
};

export default Mutual;
