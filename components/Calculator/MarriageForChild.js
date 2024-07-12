import React, { useState } from 'react';

const MarriageForChild = () => {
  const [yearsRemaining, setYearsRemaining] = useState(25);
  const [costToday, setCostToday] = useState(5000000);
  const [inflationRate, setInflationRate] = useState(8);
  const [expectedReturns, setExpectedReturns] = useState(12);
  const [growthInSavings, setGrowthInSavings] = useState(0);
  const [existingInvestments, setExistingInvestments] = useState(0);

  const calculateFutureCost = () => {
    return costToday * (1 + inflationRate / 100) ** yearsRemaining;
  };

  const calculateInvestmentNeeded = (futureCost) => {
    const monthlyRate = expectedReturns / 100 / 12;
    const totalMonths = yearsRemaining * 12;
    const investmentNeeded = (futureCost * monthlyRate) / ((1 + monthlyRate) ** totalMonths - 1);
    return investmentNeeded;
  };

  const futureCost = calculateFutureCost();
  const monthlyInvestment = calculateInvestmentNeeded(futureCost);
  const yearlyInvestment = monthlyInvestment * 12;
  const oneTimeInvestment = futureCost / (1 + expectedReturns / 100) ** yearsRemaining;

  return (
    <div className="marriage-for-child">
      <h1>Marriage for Child</h1>
      <div className="form">
        <div className="form-group">
          <label>Years Remaining</label>
          <input
            type="range"
            min="1"
            max="50"
            value={yearsRemaining}
            onChange={(e) => setYearsRemaining(e.target.value)}
          />
          <div>{yearsRemaining} Years</div>
        </div>
        <div className="form-group">
          <label>Cost Today</label>
          <input
            type="number"
            value={costToday}
            onChange={(e) => setCostToday(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Expected Inflation %</label>
          <input
            type="range"
            min="0"
            max="15"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
          />
          <div>{inflationRate} %</div>
        </div>
        <div className="form-group">
          <label>Expected Returns %</label>
          <input
            type="range"
            min="5"
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
        <div className="form-group">
          <label>Existing Investments</label>
          <select
            value={existingInvestments}
            onChange={(e) => setExistingInvestments(e.target.value)}
          >
            <option value="0">Nil</option>
            <option value="100000">₹ 1,00,000</option>
            <option value="500000">₹ 5,00,000</option>
            <option value="1000000">₹ 10,00,000</option>
          </select>
        </div>
      </div>
      <div className="result">
        <h2>Recommended Target Amount</h2>
        <h2>₹ {futureCost.toFixed(2)}</h2>
        <div className="investment-details">
          <div>
            <span>Monthly</span>
            <span>₹ {monthlyInvestment.toFixed(2)}</span>
          </div>
          <div>
            <span>Yearly</span>
            <span>₹ {yearlyInvestment.toFixed(2)}</span>
          </div>
          <div>
            <span>One Time</span>
            <span>₹ {oneTimeInvestment.toFixed(2)}</span>
          </div>
        </div>
        <div className="shortfall">
          <span>Shortfall / Surplus to Target Amount</span>
          <span>₹ {(futureCost - existingInvestments).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default MarriageForChild;
