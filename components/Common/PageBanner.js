import React from "react";
import Link from "next/link";

const PageBanner = ({ pageTitle, pageSubTitle, button, img }) => {
  const [showBUtton, setShowButton] = React.useState(button);

  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>{pageTitle}</h1>
            <p>{pageSubTitle}</p>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"4rem"}}>
              {showBUtton && (
                <Link
                  href="https://www.coinbase.com/affiliates"
                  className="default-btn global-cursor"
                  style={{width:"fit-content"}}
                >
                  <i className="bx bxs-user"></i> Register Now
                </Link>
              )}
              {img && <img src={img} alt="pour" style={{width:"200px"}}/>}
            </div>
          </div>
        </div>
        {/* <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div> */}
      </div>
    </>
  );
};

export default PageBanner;
