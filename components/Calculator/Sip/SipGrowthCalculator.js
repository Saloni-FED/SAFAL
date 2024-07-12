import React, { useState } from 'react';

const SIPGrowthCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [years, setYears] = useState(10);
  const [expectedReturns, setExpectedReturns] = useState(12);
  const [growthInSavings, setGrowthInSavings] = useState(0);

  const calculateFutureValue = () => {
    const monthlyRate = expectedReturns / 100 / 12;
    const totalMonths = years * 12;
    const futureValue = monthlyInvestment * (((1 + monthlyRate) ** totalMonths - 1) / monthlyRate) * (1 + monthlyRate);
    return futureValue;
  };

  const calculateTotalInvested = () => {
    return monthlyInvestment * years * 12;
  };

  const futureValue = calculateFutureValue();
  const totalInvested = calculateTotalInvested();
  const growthMultiple = futureValue / totalInvested;

  return (
    <div className="sip-growth-calculator">
      <h1>SIP Growth</h1>
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
          <label>Expected Growth in Savings %</label>
          <select
            value={growthInSavings}
            onChange={(e) => setGrowthInSavings(e.target.value)}
          >
            <option value="0">0 % Every Year</option>
            <option value="1">1 % Every Year</option>
            <option value="2">2 % Every Year</option>
            <option value="3">3 % Every Year</option>
          </select>
        </div>
      </div>
      <div className="result">
        <h2>Estimated Future Value</h2>
        <p>₹ {futureValue.toFixed(2)}</p>
        <div className="investment-details">
          <div>
            <span>Total Amount Invested</span>
            <span>₹ {totalInvested.toFixed(2)}</span>
          </div>
          <div>
            <span>Growth Multiple</span>
            <span>{growthMultiple.toFixed(2)} times</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPGrowthCalculator;
