import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const Calculator = () => {
  const [gender, setGender] = useState("Male");
  const [tobacco, setTobacco] = useState("No");
  const [age, setAge] = useState(19);
  const [lifeCover, setLifeCover] = useState(50); // In Lacs
  const [coverTillAge, setCoverTillAge] = useState(38);
  const [premium, setPremium] = useState(0);

  const calculatePremium = (gender, tobacco, age, lifeCover, coverTillAge) => {
    let baseRate;

    if (gender === "Male") {
      baseRate = tobacco ? 7.5 : 5;
    } else {
      baseRate = tobacco ? 6.75 : 4.5;
    }

    let basePremium = (lifeCover / 100000) * baseRate;

    if (age > 30) {
      basePremium *= 1 + (age - 30) * 0.02;
    }

    if (coverTillAge > 50) {
      basePremium *= 1 + (coverTillAge - 50) * 0.01;
    }

    return basePremium;
  };

  useEffect(() => {
    const premium = calculatePremium(
      gender,
      tobacco === "Yes",
      age,
      lifeCover,
      coverTillAge
    );
    setPremium(premium);
  }, [gender, tobacco, age, lifeCover, coverTillAge]);

  return (
    <div className="container1">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: "10px",
          marginBottom: "1rem",
        }}
      >
        <div>
          <label>Gender</label>
          <div className="radio-group">
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={() => setGender("Male")}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={() => setGender("Female")}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <div>
          <label>Chew Tobacco?</label>
          <div className="radio-group">
            <input
              type="radio"
              id="tobacco-yes"
              name="tobacco"
              value="Yes"
              checked={tobacco === "Yes"}
              onChange={() => setTobacco("Yes")}
            />
            <label htmlFor="tobacco-yes">Yes</label>
            <input
              type="radio"
              id="tobacco-no"
              name="tobacco"
              value="No"
              checked={tobacco === "No"}
              onChange={() => setTobacco("No")}
            />
            <label htmlFor="tobacco-no">No</label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          type="range"
          id="age"
          name="age"
          min="18"
          max="40"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <output htmlFor="age" id="age-output">
          {age} Years
        </output>
      </div>
      <div className="form-group">
        <label htmlFor="life-cover">Life Cover (in rupees)</label>
        <input
          type="range"
          id="life-cover"
          name="life-cover"
          min="5000000"
          max="200000000"
          value={lifeCover}
          step="5000000"
          onChange={(e) => setLifeCover(Number(e.target.value))}
        />
        <output htmlFor="life-cover" id="life-cover-output">
          ₹{lifeCover.toLocaleString()}
        </output>
      </div>
      <div className="form-group">
        <label htmlFor="cover-till-age">Cover Till Age</label>
        <input
          type="range"
          id="cover-till-age"
          name="cover-till-age"
          min="31"
          max="100"
          value={coverTillAge}
          onChange={(e) => setCoverTillAge(Number(e.target.value))}
        />
        <output htmlFor="cover-till-age" id="cover-till-age-output">
          {coverTillAge} Years
        </output>
      </div>
      <blockquote className="wp-block-quote" style={{ textAlign: "center" }}>
        <p>Monthly Premium Starts From</p>
        <h4> ₹{(premium / 12).toFixed(2)}</h4>
      </blockquote>
      {/* <button id="view-plans" onClick={() => toast(`Monthly premium starts from: ₹${(premium / 12).toFixed(2)}`)}>
        View Plans
      </button> */}
    </div>
  );
};

export default Calculator;
