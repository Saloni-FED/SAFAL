import React from 'react';

function App({title}) {
  return (
    <div className="safal-container">
      <h1 className="safal-title">{title}</h1>
      <div className="safal-content">
        <div className="safal-image">
          <img src="/images/why.png" alt="Safal Capital" />
        </div>
        <div className="safal-info">
          {/* <h2 className="safal-subtitle">Why Choose SAFAL?</h2> */}
          <div className="safal-features">
            <div className="safal-feature">
              {/* <div className="safal-icon">i</div> */}
              <div className="safal-text">
                <h3>Lowest Costs</h3>
                <p>Our transparent, low commissions, starting at 1 paisa, and low financing rates minimize costs to maximize returns.</p>
              </div>
            </div>
            <div className="safal-feature">
              {/* <div className="safal-icon">G</div> */}
              <div className="safal-text">
                <h3>Global Access</h3>
                <p>Invest globally in stocks, options, futures, currencies, commodities, bonds, and funds from a single integrated account.</p>
              </div>
            </div>
            <div className="safal-feature">
              {/* <div className="safal-icon">P</div> */}
              <div className="safal-text">
                <h3>Premier Technology</h3>
                <p>Safal's powerful suite of technology helps you optimize your trading speed and efficiency and perform sophisticated portfolio analysis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
