import React, { useState } from "react";

const SIPDelayCostCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [years, setYears] = useState(10);
  const [expectedReturns, setExpectedReturns] = useState(12);
  const [delayInMonths, setDelayInMonths] = useState(1);

  const calculateFutureValue = (monthlyInvestment, months, monthlyRate) => {
    return (
      monthlyInvestment *
      (((1 + monthlyRate) ** months - 1) / monthlyRate) *
      (1 + monthlyRate)
    );
  };

  const monthlyRate = expectedReturns / 100 / 12;
  const totalMonths = years * 12;
  const delayedMonths = totalMonths - delayInMonths;

  const futureValueWithoutDelay = calculateFutureValue(
    monthlyInvestment,
    totalMonths,
    monthlyRate
  );
  const futureValueWithDelay = calculateFutureValue(
    monthlyInvestment,
    delayedMonths,
    monthlyRate
  );
  const sipDelayCost = futureValueWithoutDelay - futureValueWithDelay;

  return (
    <div className="sip-delay-cost-calculator">
      <h1>SIP DELAY COST</h1>
      <div className="form">
        <div className="form-group">
          <label>Monthly Investment Amount</label>
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Period (Years)</label>
          <input
            type="range"
            min="1"
            max="50"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
          <div>{years} Years</div>
        </div>
        <div className="form-group">
          <label>Expected Returns %</label>
          <input
            type="range"
            min="1"
            max="20"
            value={expectedReturns}
            onChange={(e) => setExpectedReturns(e.target.value)}
          />
          <div>{expectedReturns} %</div>
        </div>
        <div className="form-group">
          <label>Delay In Months</label>
          <input
            type="range"
            min="1"
            max="120"
            value={delayInMonths}
            onChange={(e) => setDelayInMonths(e.target.value)}
          />
          <div>{delayInMonths} Months</div>
        </div>
      </div>
      <div className="result">
        <h2>Estimated SIP Delay Cost</h2>
        <h2>₹ {sipDelayCost.toFixed(2)}</h2>
        <div className="investment-details">
          <div>
            <span>Without Delay</span>
            <span>₹ {futureValueWithoutDelay.toFixed(2)}</span>
          </div>
          <div>
            <span>With Delay</span>
            <span>₹ {futureValueWithDelay.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPDelayCostCalculator;
