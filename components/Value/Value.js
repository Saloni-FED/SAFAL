import React from "react";

const values = [
  {
    title: "Our Vision",
    description:
      "To be a leading brokerage house partnering our clients in their journey of wealth creation and wealth management.",
    icon: "/images/allNewImages/vision.png",
  },
  {
    title: "Our Philosophy",
    description:
      "Our business model harnesses the strengths of our clients, commitment of our business associates and dedication of our employees. Our philosophy is unique and clearly defined.",
    icon: "/images/allNewImages/philosophy.png",
  },
  {
    title: "Towards Our Clients",
    description:
      "We strive to understand the needs of our clients. To serve their diverse requirement we have developed a bouquet of high quality products and services besides providing guidance and hand holding. We invest in building long-term relationship with our clients.",
    icon: "/images/allNewImages/public-relation.png",
  },
  {
    title: "Towards Our Business Associates",
    description:
      "Our relationship with business associates is built on mutual trust and admiration. We provide state-of-the-art facilities to our business associates who in turn efficiently serve the fast expanding clientele.",
    icon: "/images/allNewImages/vision.png",
  },
];

const Values = () => {
  return (
    <div>
      <h1 className="values_h1">Our Values</h1>

      <div className="values-container">
        {values.map((value, index) => (
          <div key={index} className="value-card">
            <div className="value-icon">
              <img src={value.icon} alt={value.title} />
            </div>
            <h3 className="value-title">{value.title}</h3>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
