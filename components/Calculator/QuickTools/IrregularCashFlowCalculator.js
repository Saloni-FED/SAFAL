import React, { useState, useEffect } from 'react';

const IrregularCashFlowCalculator = () => {
  const [cashFlows, setCashFlows] = useState([]);
  const [amount, setAmount] = useState(0);
  const [year, setYear] = useState(1);
  const [rate, setRate] = useState(0);
  const [totalFutureValue, setTotalFutureValue] = useState(0);
  const [totalPresentValue, setTotalPresentValue] = useState(0);

  const calculateFutureValue = (amount, year, rate) => {
    return amount * Math.pow((1 + rate / 100), year);
  };

  const calculatePresentValue = (amount, year, rate) => {
    return amount / Math.pow((1 + rate / 100), year);
  };

  const calculateTotals = (cashFlows) => {
    const totalFuture = cashFlows.reduce((total, cashFlow) => {
      return total + calculateFutureValue(cashFlow.amount, cashFlow.year, rate);
    }, 0);

    const totalPresent = cashFlows.reduce((total, cashFlow) => {
      return total + calculatePresentValue(cashFlow.amount, cashFlow.year, rate);
    }, 0);

    setTotalFutureValue(totalFuture);
    setTotalPresentValue(totalPresent);
  };

  useEffect(() => {
    calculateTotals(cashFlows);
  }, [cashFlows, rate]);

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value));
    const newCashFlows = [...cashFlows, { amount: parseFloat(e.target.value), year }];
    setCashFlows(newCashFlows);
  };

  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value));
    const newCashFlows = [...cashFlows, { amount, year: parseInt(e.target.value) }];
    setCashFlows(newCashFlows);
  };

  const handleRateChange = (e) => {
    setRate(parseFloat(e.target.value));
  };

  return (
    <div className="irregular-cash-flow-calculator">
      <h2>Irregular Cash Flow Calculator</h2>
      <div>
        <label>
          Amount: {amount}
          <input
            type="range"
            min="0"
            max="100000"
            step="1000"
            value={amount}
            onChange={handleAmountChange}
          />
        </label>
        <label>
          Year: {year}
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={year}
            onChange={handleYearChange}
          />
        </label>
      </div>
      <div>
        <label>
          Rate of Return (%): {rate}
          <input
            type="range"
            min="0"
            max="20"
            step="0.1"
            value={rate}
            onChange={handleRateChange}
          />
        </label>
      </div>
    
      <div className="result">
        <h6>Total Future Value: {totalFutureValue.toFixed(2)}</h6>
        <h6>Total Present Value: {totalPresentValue.toFixed(2)}</h6>
      </div>
    </div>
  );
};

export default IrregularCashFlowCalculator;
