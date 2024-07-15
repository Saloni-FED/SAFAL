const OurFeature = ({ title }) => {
  return (
    <>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>{title}</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p> */}
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-box">
                <img src="/images/features/features-img2.png" alt="image" />
                <h3> Mutual Fund</h3>
                <p>
                  Mutual funds pool money from investors to buy a diversified
                  portfolio of assets managed by professionals. They offer
                  diversification and expert management, with share values
                  fluctuating based on asset performance.
                </p>
                <a className="default-btn" href="/mutualfunds">
                  {" "}
                  <span>Read More</span>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-box">
                <img src="/images/features/features-img1.png" alt="image" />

                <h3>Insurance</h3>
                <p>
                  Insurance is a financial product that provides protection
                  against financial loss or risks. Policyholders pay premiums in
                  exchange for coverage, which can include health, life, auto,
                  and property insurance.
                </p>
                <a className="default-btn" href="/insurance">
                  {" "}
                  <span>Read More</span>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-box">
                <img src="/images/features/features-img3.png" alt="image" />
                <h3>Unlisted Shares</h3>
                <p>
                  Unlisted shares are securities not traded on formal stock
                  exchanges, often representing smaller or private companies.
                  They offer investment opportunities with higher risk and
                  potential returns.
                </p>
                <a className="default-btn" href="/unlistedshares">
                  {" "}
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeature;
