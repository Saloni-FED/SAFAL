import React from "react";

const UnlistedSharesProcess = () => {
  return (
    <div className="processContainer">
      <div className="processSteps">
        <div className="processStep">
          <div className="stepNumber">1</div>
          <h2 className="stepTitle">Contact Us</h2>
          <p className="stepDescription">
            Connect with our RMs and get the best unlisted share prices.
          </p>
        </div>
        <img src="/arrow.png" alt="Arrow" className="stepArrow" />
        <div className="processStep">
          <div className="stepNumber">2</div>
          <h2 className="stepTitle">Deal Processing</h2>
          <p className="stepDescription">
            First, the buyer sends payment to our bank. Then the UnlistedZone
            team starts processing.
          </p>
        </div>
        <img src="/arrow.png" alt="Arrow" className="stepArrow" />
        <div className="processStep">
          <div className="stepNumber">3</div>
          <h2 className="stepTitle">Deal Completion</h2>
          <p className="stepDescription">
            After getting the payment, our team transfers shares within 24 hrs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnlistedSharesProcess;
