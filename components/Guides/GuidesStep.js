import React from "react"; 

const GuidesStep = () => {
  return (
    <>
      <div className="guides-area ptb-100">
        <div className="container">
          <div className="guides-content">
            <div className="number">1</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 1</h3>
                  <span>Identify Your Investment Goals</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    Determine your investment objectives, such as growth, income, or capital preservation. Understanding your goals will help you select the right type of mutual fund.
                  </p>
                  <img src="/images/create-account.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>

          <div className="guides-content">
            <div className="number">2</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 2</h3>
                  <span>Research and Compare Funds</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    Evaluate different mutual funds based on their performance history, fees, management style, and risk. Use resources like fund prospectuses and financial websites to gather information.
                  </p>
                  <img src="/images/select-coin.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>

          <div className="guides-content">
            <div className="number">3</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 3</h3>
                  <span>Choose a Fund</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    Select a mutual fund that aligns with your goals and risk tolerance. Consider factors like the fund's investment strategy, asset allocation, and the reputation of the fund manager.
                  </p>
                  <img src="/images/select-payment.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>

          <div className="guides-content">
            <div className="number">4</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 4</h3>
                  <span>Purchase Shares</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    Invest in the mutual fund through a brokerage account, financial advisor, or directly from the fund company. Ensure you understand the purchase process and any associated fees.
                  </p>
                  <img src="/images/payment-method.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="guides-content">
            <div className="number">5</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 5</h3>
                  <span>Monitor and Rebalance</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    Regularly review your investment to ensure it remains aligned with your goals. Make adjustments as needed, such as rebalancing your portfolio or changing funds if performance or objectives shift.
                  </p>
                  <img src="/images/confirm-order.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuidesStep;
