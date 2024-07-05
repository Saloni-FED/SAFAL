import Link from "next/link";

const RegisterArea = ({ bgGradient, blackText, ctaImage }) => {
  return (
    <>
      <div className={`cta-area pt-100 ${bgGradient}`}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className={`cta-content ${blackText}`}>
                <h2>About Safal Capital (India) Limited Our History</h2>
                <p>
                  Safal Capital (India) Limited is one of the leading financial
                  services company is central india. Safal Capital has
                  successfully provide trading facilities in multiple segment to
                  thousand of clients through a vast network of its business
                  associates and highly qualified staff . The foundation of
                  Safal Capital firmly rests on ethics Professionalism and
                  accountability
                </p>
                <Link
                  href="https://www.coinbase.com/signup"
                  className="default-btn global-cursor"
                >
                  <i className="bx bxs-user"></i> Register Now
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="cta-image">
                <img src={ctaImage} alt="image" />
              </div>
            </div>
          </div>
        </div>

        {/* shape Images */}
        <div className="shape6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="shape7">
          <img src="/images/shape/shape7.png" alt="image" />
        </div>
        <div className="shape8">
          <img src="/images/shape/shape8.png" alt="image" />
        </div>
        <div className="shape9">
          <img src="/images/shape/shape9.png" alt="image" />
        </div>
        <div className="shape15">
          <img src="/images/shape/shape15.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default RegisterArea;
