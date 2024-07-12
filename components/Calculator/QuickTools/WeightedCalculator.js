import React, { useState } from "react";

const WeightedCalculator = () => {
  const [investments, setInvestments] = useState([
    { amount: 100000, returns: 12 },
    // { amount: 100000, returns: 12 },
    // { amount: 100000, returns: 12 },
  ]);
  const [futureYears, setFutureYears] = useState(5);

  const calculateFutureValue = (amount, returns, years) => {
    return amount * Math.pow(1 + returns / 100, years);
  };

  const totalInvested = investments.reduce(
    (acc, inv) => acc + Number(inv.amount),
    0
  );
  const weightedAverageReturns = investments.reduce(
    (acc, inv) =>
      acc + (Number(inv.returns) * Number(inv.amount)) / totalInvested,
    0
  );
  const totalFutureValue = investments.reduce(
    (acc, inv) =>
      acc +
      calculateFutureValue(
        Number(inv.amount),
        Number(inv.returns),
        futureYears
      ),
    0
  );

  const removeInvestment = (index) => {
    const newInvestments = investments.filter((_, i) => i !== index);
    setInvestments(newInvestments);
  };

  return (
    <div className="weighted">
      <div className="calculator">
        <div className="inputs">
          <div>
            <h3
              style={{
                textAlign: "center",
                fontSize: "24px",
                marginBottom: "1rem",
              }}
            >
              Weighted Average Returns
            </h3>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Future Value After Years</label>
            <input
              type="number"
              value={futureYears}
              onChange={(e) => setFutureYears(e.target.value)}
            />
          </div>
          <label>Future Value After Years</label>
          {investments.map((inv, index) => (
            <div key={index} className="investment">
              <input
                type="number"
                value={inv.amount}
                style={{ marginTop: "15px" }}
                onChange={(e) => {
                  const newInvestments = [...investments];
                  newInvestments[index].amount = e.target.value;
                  setInvestments(newInvestments);
                }}
              />
              <input
                type="number"
                value={inv.returns}
                style={{ marginTop: "15px" }}
                onChange={(e) => {
                  const newInvestments = [...investments];
                  newInvestments[index].returns = e.target.value;
                  setInvestments(newInvestments);
                }}
              />
              <button onClick={() => removeInvestment(index)}>-</button>
            </div>
          ))}
          <div style={{display:"flex", justifyContent:"center"}}>
            <button
              className="btn_center"
              onClick={() =>
                setInvestments([
                  ...investments,
                  { amount: 100000, returns: 12 },
                ])
              }
            >
              Add
            </button>
          </div>
        </div>
        <div className="results">
          <h6>Weighted Avg. Returns</h6>
          <p>Estimated Future Value: ₹{totalFutureValue.toFixed(2)}</p>
          <p>Weighted Average Returns: {weightedAverageReturns.toFixed(2)}%</p>
          <p>Invested Amount: ₹{totalInvested}</p>
        </div>
      </div>
    </div>
  );
};

export default WeightedCalculator;
