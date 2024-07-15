// src/FeatureCards.js

import React from "react";
// import './FeatureCards.css';

const features = [
  {
    title: "Higher Profit Margin",
    description:
      "Earn a good amount of commission for every client who trades.",
    image: "/images/interest.png", // replace with the actual path to your image
  },
  {
    title: "Instant Account Opening",
    description:
      "You get a mobile app to open accounts online in just 15 minutes.",
      image: "/images/account (1).png" // replace with the actual path to your image
  },
  {
    title: "Timely Payout",
    description:
      "Get money in your bank account on 1st working day of every month.",
      image: "/images/bit.png" // replace with the actual path to your image
  },
  {
    title: "Prompt Support",
    description:
      "Get online and offline support. Specialized sub-broker helpdesk till midnight.",
      image: "/images/technical-support (1).png", // replace with the actual path to your image
  },
];

const FeatureCards = () => {
  return (
    <div className="subBroker_features">
      {features.map((feature, index) => (
        <div
          className="subBroker_feature-card"
          key={index}
          style={{ cursor: "pointer" }}
        >
          {/* <img src={feature.image} alt={feature.title} className="feature-image" /> */}
          <div className="features-box">
            <div className="icon">
              <img src={feature.image} alt="image" />
            </div>
          </div>
          <h6 style={{ fontWeight: "normal", fontSize: "20px" }}>
            {feature.title}
          </h6>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
