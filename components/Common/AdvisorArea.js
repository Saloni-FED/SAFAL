const AdvisorArea = ({ bgColor }) => {
  return (
    <>
      <div className={`advisor-area pt-100 pb-70 ${bgColor}`}>
        <div className="container">
          <div className="section-title">
            <h2>
              The Board of Directors of Safal Capital (India) Limited
            </h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p> */}
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-advisor-box">
                <div className="image">
                  <img src="/images/about-man1.png" alt="image" />
                </div>
                <div className="content">
                  <h3> Mr. Pavankumar Satyanarayan Agrawal.</h3>
                  {/* <span>CEO Capital Limited</span> */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-advisor-box">
                <div className="image">
                  <img src="/images/about-man2.png" alt="image" width={175} height={150}/>
                </div>
                <div className="content">
                  <h3> Mr. Aatish Pavankumar Agrawal.</h3>
                  {/* <span>Cryptonet Team Lead</span> */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-advisor-box">
                <div className="image">
                  <img src="/images/about-man3.png" alt="image"  width={156} height={150}/>
                </div>
                <div className="content">
                  <h3>Mr. Ayush Pavankumar Agrawal.</h3>
                  {/* <span>Trade Management</span> */}
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvisorArea;
