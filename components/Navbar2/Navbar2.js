import React, { useState } from "react";

const Navbar2 = ({ onSelect, selectedSubNav, setSelectedSubNav }) => {
  const [active, setActive] = useState("life-goal");

  const handleSelect = (item) => {
    setActive(item);
    onSelect(item);
    switch (item) {
      case "life-goal":
        setSelectedSubNav("Retirement");
        break;
      case "financial":
        setSelectedSubNav("Growth");
        break;
      case "quick-tools":
        setSelectedSubNav("Single Amount");
        break;
      default:
        setSelectedSubNav("Retirement"); // Default to "Retirement" if item doesn't match expected values
        break;
    }
  };

  return (
    <>
    <h2 style={{textAlign:"center"}}>Tools And Calculations</h2>
      <div className="navbar">
        <button
          onClick={() => handleSelect("life-goal")}
          className={active === "life-goal" ? "active" : ""}
        >
          Life Goal Calculators
        </button>
        <button
          onClick={() => handleSelect("financial")}
          className={active === "financial" ? "active" : ""}
        >
          Financial Calculators
        </button>
        <button
          onClick={() => handleSelect("quick-tools")}
          className={active === "quick-tools" ? "active" : ""}
        >
          Quick Tools
        </button>
      </div>
    </>
  );
};

export default Navbar2;
