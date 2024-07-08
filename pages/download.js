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
    symbol: "18/07/2018",
    price: "14,514",
  },
  {
    name: "Digibyte",
    image: "/images/digibyte.png",
    symbol: "18/07/2018",
    price: "41,514",
  },
  {
    name: "Ontology",
    image: "/images/ontology.png",
    symbol: "18/07/2018",
    price: "14,514",
  },
  {
    name: "OmiseGO",
    image: "/images/omisego.png",
    symbol: "18/07/2018",
    price: "41,514",
  },
  {
    name: "Qtum",
    image: "/images/qtum.png",
    symbol: "18/07/2018",
    price: "€41,905",
  },
  {
    name: "ZCash",
    image: "/images/zcash.png",
    symbol: "18/07/2018",
    price: "50,000",
  },
  {
    name: "Gulden",
    image: "/images/gulden.png",
    symbol: "18/07/2018",
    price: "38,541",
  },
];

const values = [
  {
    title: "MADHYA PRADESH STOCK AND CAPITAL MARKET LTD.",
    icon: '<i class="fa-solid fa-chart-column" style="font-size:40px"></i>',
  },
  {
    title: "SAFAL CAPITAL (INDIA) LIMITED.",
    icon: '<i class="fa fa-building" style="font-size:40px"></i>',
  },
  {
    title: "SAFAL CAPITAL (INDIA) LIMITED CDSL",
    icon: '<i class="fa fa-university" style="font-size:40px"></i>',
  },
  {
    title: "BACK SERVER ONE",
    icon: '<i class="fa fa-server" style="font-size:40px"></i>',
  },
  {
    title: "BACK SERVER Two",
    icon: '<i class="fa fa-server" style="font-size:40px"></i>',
  },
];

const download = () => {
  return (
    <div>
      <PageBanner pageTitle={"Downloads"} />
      <div className="cryptocurrency-area pt-100 pb-70">
        <div className="container download_backoffice">
          <div className="row justify-content-center">
            <h5 style={{ marginBottom: "2rem" }}>
              ACCOUNT OPENING & MODIFICATION FORMS
            </h5>

            {cryptocurrencies.map((crypto, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cryptocurrency-item">
                  <div className="d-flex align-items-center">
                    {/* <img src={crypto.image} alt="image" width={50} height={50}/> */}
                    <div
                      className="title"
                      style={{
                        width: "100%",
                        display: "flex",
                        // alignItems:"center",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <h5 style={{ fontWeight: "normal", fontSize: "17px" }}>
                          {crypto.name}{" "}
                        </h5>
                        <p>{crypto.symbol}</p>
                      </div>

                      <div>
                        <i
                          className="fa-solid fa-download"
                          style={{
                            fontSize: "15px",
                            color: "var(--optionalColor)",
                            cursor: "pointer",
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center">
            <h5 style={{ marginBottom: "2rem", marginTop: "2rem" }}>
              Policy And Procedures
            </h5>

            {cryptocurrencies.map((crypto, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cryptocurrency-item">
                  <div className="d-flex align-items-center">
                    {/* <img src={crypto.image} alt="image" width={50} height={50}/> */}
                    <div
                      className="title"
                      style={{
                        width: "100%",
                        display: "flex",
                        // alignItems:"center",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <h5 style={{ fontWeight: "normal", fontSize: "17px" }}>
                          {crypto.name}{" "}
                        </h5>
                        <p>{crypto.symbol}</p>
                      </div>

                      <div>
                        <i
                          className="fa-solid fa-download"
                          style={{
                            fontSize: "15px",
                            color: "var(--optionalColor)",
                            cursor: "pointer",
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        {" "}
        <PageBanner pageTitle={"Back Office"} />
      </div>
      <h1 className="values_h1">Utilities</h1>
      <div className="values-container">
        {values.map((value, index) => (
          <div key={index} className="value-card">
            <div
              className="value-icon"
              dangerouslySetInnerHTML={{ __html: value.icon }}
            />
            <h3 className="value-title">{value.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default download;
