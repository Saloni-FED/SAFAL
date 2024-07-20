const FeedBack = () => {
  return (
    <>
      <div className="fedback-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h3 style={{marginBottom:"5rem"}}>What our community of sub-brokers has to say</h3>
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
                  Safal Capital's expertise in stock market analysis and fund
                  management is truly commendable. Their team of seasoned
                  professionals provides insightful guidance, ensuring that my
                  investment portfolio is well-managed and aligned with my
                  financial goals. The strategic approach they employ in the
                  markets has consistently delivered strong performance and
                  growth.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/testi.jpg" alt="image" />
                    <div className="title">
                      <h3>Shivani Jain</h3>
                      <span>Equity Investor</span>
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
                  The team at Safal Capital India Ltd. has been incredibly
                  supportive from account opening to managing my funds. Their
                  advanced technology has made managing my savings and
                  investments effortless. My relationship manager is always
                  available to address all my investment queries.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/testi.jpg" alt="image" />
                    <div className="title">
                      <h3>Arpit Bisani</h3>
                      <span>Chartered Accountant</span>
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
                  The transparency and personalized service from Safal Capital
                  India Ltd. have established a strong foundation of trust.
                  Their commitment to leveraging technology and delivering
                  top-tier financial services makes them a dependable partner
                  for navigating the complexities of stock markets and achieving
                  investment goals.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/testi.jpg" alt="image" />
                    <div className="title">
                      <h3>Raghav Arora </h3>
                      <span>Long Term Investor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBack;
