import React from "react";
import Link from "next/link";
import PageBanner from "../components/Common/PageBanner";
const cryptocurrencies = [
  {
    name: "Policy and procedure",
    image: "/images/allNewImages/downloads.png",
    symbol: "02/07/2018",
    //   price: '€41,905',
  },
  {
    name: "Demat - Document..",
    image: "/images/allNewImages/downloads.png",
    symbol: "18/07/2018",
    // price: "50,000",
  },
  {
    name: "FATCA_FORM",
    image: "/images/allNewImages/downloads.png",
    symbol: "18/07/2018",
    // price: "38,541",
  },
  {
    name: "DEMO KYC FORM",
    image: "/images/allNewImages/downloads.png",
    symbol: "18/07/2018",
    // price: "€12,000",
  },
  {
    name: "KYC FORM Demat & Trading",
    image: "/images/allNewImages/downloads.png",
    symbol: "18/07/2018",
    // price: "14,542",
  },
  {
    name: "Bitconnect",
    image: "/images/bitconnect.png",
    symbol: "BCC",
    price: "14,514",
  },
  {
    name: "Digibyte",
    image: "/images/digibyte.png",
    symbol: "DGB",
    price: "41,514",
  },
  {
    name: "Ontology",
    image: "/images/ontology.png",
    symbol: "ONT",
    price: "14,514",
  },
  {
    name: "OmiseGO",
    image: "/images/omisego.png",
    symbol: "OMG",
    price: "41,514",
  },
  {
    name: "Qtum",
    image: "/images/qtum.png",
    symbol: "QTUM",
    price: "€41,905",
  },
  {
    name: "ZCash",
    image: "/images/zcash.png",
    symbol: "ZEC",
    price: "50,000",
  },
  {
    name: "Gulden",
    image: "/images/gulden.png",
    symbol: "NLG",
    price: "38,541",
  },
];

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
const download = () => {
  return (
    <div>
      <PageBanner pageTitle={"Downloads"}/>
      <div className="cryptocurrency-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <h6>ACCOUNT OPENING & MODIFICATION FORMS</h6>

            {cryptocurrencies.map((crypto, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cryptocurrency-item">
                  <div className="d-flex align-items-center">
                    {/* <img src={crypto.image} alt="image" width={50} height={50}/> */}
                    <i class="fa-solid fa-download"></i>
                    <div className="title">
                      <h5>{crypto.name}</h5>
                      <span className="sub-title">
                        {crypto.symbol} - <span>{crypto.price}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center">
            <h5 style={{ marginTop: "5rem" }}>Policies & Procedures</h5>

            {cryptocurrencies.map((crypto, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cryptocurrency-item">
                  <div className="d-flex align-items-center">
                    {/* <img src={crypto.image} alt="image" width={50} height={50}/> */}
                    <i class="fa-solid fa-download"></i>
                    <div className="title">
                      <h5>{crypto.name}</h5>
                      <span className="sub-title">
                        {crypto.symbol} - <span>{crypto.price}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
  );
};

export default download;
