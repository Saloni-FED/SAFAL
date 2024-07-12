import React, { useState, useEffect } from 'react';

const InvestmentCalculator = () => {
  const [amount, setAmount] = useState(96000);
  const [years, setYears] = useState(4);
  const [rate, setRate] = useState(12.9);
  const [futureValue, setFutureValue] = useState(155972);
  const [calculateFuture, setCalculateFuture] = useState(true);

  useEffect(() => {
    if (calculateFuture) {
      setFutureValue(calculateFutureValue());
    } else {
      setAmount(calculatePresentValue());
    }
  }, [amount, years, rate, futureValue, calculateFuture]);

  const calculateFutureValue = () => {
    return (amount * Math.pow((1 + rate / 100), years)).toFixed(2);
  };

  const calculatePresentValue = () => {
    return (futureValue / Math.pow((1 + rate / 100), years)).toFixed(2);
  };

  return (
    <div className="investment-calculator">
      <h2>Investment Calculator</h2>
      <div className="calc-type">
        <label>
          <input
            type="radio"
            name="calcType"
            value="future"
            checked={calculateFuture}
            onChange={() => setCalculateFuture(true)}
          />
          Future Value
        </label>
        <label>
          <input
            type="radio"
            name="calcType"
            value="present"
            checked={!calculateFuture}
            onChange={() => setCalculateFuture(false)}
          />
          Present Value
        </label>
      </div>
      {calculateFuture ? (
        <div className="form-group">
          <label>Future Value</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      ) : (
        <div className="form-group">
          <label>Present Value</label>
          <input
            type="number"
            value={futureValue}
            onChange={(e) => setFutureValue(e.target.value)}
          />
        </div>
      )}
      <div className="form-group">
        <label>After Years: {years}</label>
        <input
          type="range"
          min="1"
          max="50"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Expected Returns %: {rate}</label>
        <input
          type="range"
          min="1"
          max="20"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div className="result">
        {calculateFuture ? (
          <div>Future Value: ₹{futureValue}</div>
        ) : (
          <div>Present Value: ₹{amount}</div>
        )}
      </div>
    </div>
  );
};

export default InvestmentCalculator;
