import React, { useState } from 'react';

const RetirementCalculator = () => {
  const [presentAge, setPresentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpenses, setMonthlyExpenses] = useState(50000);
  const [expectedReturns, setExpectedReturns] = useState(20);
  const [growthInSavings, setGrowthInSavings] = useState(0);

  const calculateRetirementKitty = () => {
    const yearsToRetirement = retirementAge - presentAge;
    const annualExpenses = monthlyExpenses * 12;
    const retirementKitty = annualExpenses * ((1 + (expectedReturns / 100)) ** yearsToRetirement - 1) / (expectedReturns / 100);
    return retirementKitty.toFixed(2);
  };

  const recommendedRetirementKitty = calculateRetirementKitty();

  return (
    <div className="retirement-calculator">
      <h1>Plan Your Retirement</h1>
      <div className="form">
        <div className="form-group">
          <label>Present Age</label>
          <input type="number" value={presentAge} onChange={(e) => setPresentAge(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Retirement Age</label>
          <input type="number" value={retirementAge} onChange={(e) => setRetirementAge(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Monthly Expenses</label>
          <input type="number" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Expected Returns %</label>
          <input type="number" value={expectedReturns} onChange={(e) => setExpectedReturns(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Expected Growth in Savings %</label>
          <input type="number" value={growthInSavings} onChange={(e) => setGrowthInSavings(e.target.value)} />
        </div>
      </div>
      <div className="result">
        <h2>Recommended Retirement Kitty Amount</h2>
        <p>₹ {recommendedRetirementKitty}</p>
      </div>
    </div>
  );
};

export default RetirementCalculator;
