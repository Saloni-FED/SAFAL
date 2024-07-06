import React from 'react'
import PageBanner from "../components/Common/PageBanner"
import Values from "../components/Value/Value"
const values = [
    {
        title: "Our Vision",
        icon: "/images/allNewImages/vision.png",
      },
      {
        title: "Our Philosophy",
        icon: "/images/allNewImages/philosophy.png",
      },
      {
        title: "Towards Our Clients",
        icon: "/images/allNewImages/public-relation.png",
      },
      {
        title: "Towards Our Business Associates",
        icon: "/images/allNewImages/vision.png",
      },
      {
        title: "Towards Our Business Associates",
        icon: "/images/allNewImages/vision.png",
      },
]
const backoffice = () => {
  return (
    <div>
        <PageBanner pageTitle={"Office"}/>
        <div>
      <h1 className="values_h1">Utilities</h1>

      <div className="values-container">
        {values.map((value, index) => (
          <div key={index} className="value-card">
            <div className="value-icon">
              <img src={value.icon} alt={value.title} />
            </div>
            <h3 className="value-title">{value.title}</h3>
            {/* <p className="value-description">{value.description}</p> */}
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default backoffice