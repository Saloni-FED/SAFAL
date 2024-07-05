
const AccountCreate = ({ title }) => {
  return (
    <>
      <div className="account-create-process-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-9 col-md-12">
              <div className="account-create-process-content">
                <div className="section-title">
                  <h2>{title}</h2>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p> */}
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-process-box">
                      <div className="icon">
                        <img src="/images/allNewImages/vision.png" alt="image" />
                      </div>
                      <h3>Our Vision</h3>
                      <p>
                        To be a leading brokerage house partnering our clients
                        in their journey of wealth creation and wealth
                        management.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-process-box">
                      <div className="icon">
                        <img src="/images/allNewImages/philosophy.png" alt="image" />
                      </div>
                      <h3>Our Philosophy</h3>
                      <p>
                        Our business model harnesses the strengths of our
                        clients, commitment of our business associates and
                        dedication of our employees. Our philosophy is unique
                        and clearly defined:
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-process-box">
                      <div className="icon">
                        <img src="/images/allNewImages/public-relation.png" alt="image" />
                      </div>
                      <h3>Towards Our Clients</h3>
                      <p>
                        We strive to understand the needs of our clients To
                        serve their diverse requirement we have developed a
                        bouquet of high quality products and services besides
                        providing guidance and hand holding. We invest in
                        building long-term relationship with our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-3 col-md-12">
              <div className="account-create-process-image text-center">
                <img src="/images/convert-currency.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCreate;
