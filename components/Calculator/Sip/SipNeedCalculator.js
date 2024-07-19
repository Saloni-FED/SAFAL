import React, { useState } from 'react';

const SIPNeedCalculator = () => {
  const [targetAmount, setTargetAmount] = useState(10000000);
  const [years, setYears] = useState(10);
  const [expectedReturns, setExpectedReturns] = useState(12);
  const [expectedInflation, setExpectedInflation] = useState(8);
  const [growthInSavings, setGrowthInSavings] = useState(0);

  const calculateRequiredSIP = () => {
    const monthlyRate = expectedReturns / 100 / 12;
    const totalMonths = years * 12;
    const inflationAdjustedTarget = targetAmount * ((1 + expectedInflation / 100) ** years);
    const requiredSIP = inflationAdjustedTarget / (((1 + monthlyRate) ** totalMonths - 1) / monthlyRate) / (1 + monthlyRate);
    return requiredSIP;
  };

  const calculateProjectedInvestment = () => {
    const requiredSIP = calculateRequiredSIP();
    return requiredSIP * years * 12;
  };

  const inflationAdjustedTarget = targetAmount * ((1 + expectedInflation / 100) ** years);
  const requiredSIP = calculateRequiredSIP();
  const projectedInvestment = calculateProjectedInvestment();
  const growthMultiple = inflationAdjustedTarget / projectedInvestment;

  return (
    <div className="sip-need-calculator">
      <h1>SIP NEED</h1>
      <div className="form">
        <div className="form-group">
          <label>Target Amount Needed</label>
          <input
            type="number"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
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
          <label>Expected Inflation %</label>
          <input
            type="range"
            min="0"
            max="15"
            value={expectedInflation}
            onChange={(e) => setExpectedInflation(e.target.value)}
          />
          <div>{expectedInflation} %</div>
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
      <div className="result" style={{height:"15rem"}}>
        <h2>Required SIP Amount</h2>
        <h2>₹ {requiredSIP.toFixed(2)}</h2>
        <div className="investment-details">
          <div>
            <span>Target Amount Required</span>
            <span>₹ {inflationAdjustedTarget.toFixed(2)}</span>
          </div>
          <div>
            <span>Projected Investment</span>
            <span>₹ {projectedInvestment.toFixed(2)}</span>
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

export default SIPNeedCalculator;
