import React from "react";
import Link from "next/link";
import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";
const cryptocurrencies = [
  {
    name: "Policy and procedure",
    image: "/images/allNewImages/downloads.png",
    symbol: "02/07/2018",
    a: "/assests/account/CLIENT COPY2_7_2018_16_45_23.pdf.crdownload",
    //   price: '€41,905',
  },
  {
    name: "Demat - Document..",
    image: "/images/allNewImages/downloads.png",
    symbol: "18/07/2018	",
    a: "/assests/account/Unconfirmed 258293.crdownload",
    // price: "50,000",
  },
  {
    name: "FATCA_FORM",
    image: "/images/allNewImages/downloads.png",
    symbol: "18/07/2018",
    a: "/assests/account/FATCA_FORM18_7_2018_16_50_17.pdf.crdownload",
    // price: "38,541",
  },
  {
    name: "DEMO KYC FORM",
    image: "/images/allNewImages/downloads.png",
    symbol: "18/07/2018",
    a: "/assests/account/DEMO_KYC18_7_2018_16_53_48.pdf.crdownload",
    // price: "€12,000",
  },
  // {
  //   name: "KYC FORM Demat & Trading",
  //   image: "/images/allNewImages/downloads.png",
  //   symbol: "18/07/2018",
  //   // price: "14,542",
  //   a: "/assests/account/MTF FACILITY Request28_8_2019_11_10_53.pdf.crdownload"
  // },
  {
    name: "MTF FACILITY Request",
    image: "/images/allNewImages/downloads.png",
    symbol: "18/07/2018",
    // price: "14,542",
    a: "/assests/account/MTF FACILITY Request28_8_2019_11_10_53.pdf.crdownload",
  },
  {
    name: "Nomination Form",
    image: "/images/bitconnect.png",
    symbol: "25/02/2020	",
    price: "14,514",
    a: "/assests/account/Nnominee Form (1)24_5_2021_19_7_5.pdf.crdownload",
  },
  {
    name: "Power of Attorney Form",
    image: "/images/digibyte.png",
    symbol: "25/02/2020	",
    price: "41,514",
    a: "/assests/account/POA FORM NEW24_5_2021_19_8_30.pdf.crdownload",
  },
  {
    name: "KRA KYC Reactivation Form",
    image: "/images/ontology.png",
    symbol: "12/11/2020	",
    a: "/assests/account/KRA12_11_2020_17_55_49.pdf.crdownload",
    price: "14,514",
  },
  {
    name: "DORMANT CODE REACTIVATION FORM",
    image: "/images/omisego.png",
    symbol: "18/12/2020",
    a: "/assests/account/Dormant Reactivation form 19_2_2021_15_51_47.pdf.crdownload",
    price: "41,514",
  },
  {
    name: "FAMILY DECLARATION FOR ....",
    image: "/images/qtum.png",
    symbol: "18/12/2020",
    price: "€41,905",
    a: "/assests/account/FAMILY DECLARATION FOR MOBILE AND EMAIL ID.PDF18_12_2020_17_18_18.pdf.crdownload",
  },
  {
    name: "KRA FORM",
    image: "/images/zcash.png",
    symbol: "18/12/2020",
    price: "50,000",
    a: "/assests/account/KRA FORM 18_12_2020_17_18_45.pdf.crdownload",
  },
  // c:\Users\salon\Downloads\
  {
    name: "MODIFICATION FORM",
    image: "/images/gulden.png",
    symbol: "18/07/2018",
    price: "38,541",
    a: "/assests/account/MODIFICATION-29012129_1_2021_16_9_47.pdf.crdownload",
  },
  {
    name: "SPOA FORM",
    image: "/images/gulden.png",
    symbol: "24/11/2021",
    price: "38,541",
    a: "/assests/account/POA FORM.PDF24_11_2021_21_21_55.pdf.crdownload",
  },
];

const software = [
  {
    name: "BEST Trading Application",
    image: "/images/gulden.png",
    symbol: "12/05/2020",
    price: "38,541",
    a: "/assests/software/BEST_Application7_6_2020_8_42_27.zip",
  },
];

const policy = [
  {
    name: "DO's AND DON'Ts",
    image: "/images/gulden.png",
    symbol: "18/07/2018",
    price: "38,541",
    a: "/assests/policy/DO's_AND_DON'Ts18_7_2018_17_43_53.zip",
  },
  {
    name: "Guidelines for Investor",
    image: "/images/gulden.png",
    symbol: "18/07/2018",
    price: "38,541",
    a: "/assests/policy/Guidelines_for_Investor18_7_2018_17_44_29.zip",
  },
  {
    name: "RISK DISCLOSURE",
    image: "/images/gulden.png",
    symbol: "18/07/2018",
    price: "38,541",
    a: "/assests/policy/RISK_DISCLOSURE18_7_2018_17_44_42.zip",
  },
  {
    name: "RIGHTS AND OBLIGATIONS",
    image: "/images/gulden.png",
    symbol: "18/07/2018",
    price: "38,541",
    a: "/assests/policy/RISK_DISCLOSURE18_7_2018_17_45_2.zip",
  },
  {
    name: "Policy_and_procedure",
    image: "/images/gulden.png",
    symbol: "18/07/2018",
    price: "38,541",
    a: "/assests/policy/Policy_and_procedure18_7_2018_17_45_43.zip",
  },
  {
    name: "RMS Policy",
    image: "/images/gulden.png",
    symbol: "18/07/2018",
    price: "38,541",
    a: "/assests/policy/RMS_Policy18_7_2018_17_46_14.pdf",
  },
  {
    name: "RMS Policy - Revised - 08-03-2018",
    image: "/images/gulden.png",
    symbol: "18/07/2018",
    price: "38,541",
    a: "/assests/policy/RMS_Policy_-_Revised_-_08-03-201818_7_2018_17_46_37.pdf",
  },
  {
    name: "PMLA POLICY",
    image: "/images/gulden.png",
    symbol: "12/06/2019",
    price: "38,541",
    a: "/assests/policy/SAFAL_PMLA_POLICY_updated_2019.03.1812_6_2019_12_59_18.pdf",
  },
  {
    name: "SEBI Circular -Handling of Client....",
    image: "/images/gulden.png",
    symbol: "23/08/2019",
    price: "38,541",
    a: "/assests/policy/SEBI Circular --Handling of Client Securities (T5)23_8_2019_9_26_51.pdf",
  },
  {
    name: "Commodities - Additional Risk...",
    image: "/images/gulden.png",
    symbol: "20/01/2020",
    price: "38,541",
    a: "/assests/policy/CommodityAdditional.pdf",
  },
  {
    name: "Commodities - RDD",
    image: "/images/gulden.png",
    symbol: "20/01/2020",
    price: "38,541",
    a: "/assests/policy/Commodities - RDD20_1_2020_13_11_21.pdf",
  },
  {
    name: "Commodities - Rights & Obligation",
    image: "/images/gulden.png",
    symbol: "20/01/2020",
    price: "38,541",
    a: "/assests/policy/Commodities - Rights & Obligation20_1_2020_13_12_26.pdf",
  },
  {
    name: "Commodities-Do's and Does's",
    image: "/images/gulden.png",
    symbol: "20/01/2020",
    price: "38,541",
    a: "/assests/policy/Commodities-Do's and Does's20_1_2020_13_12_54.pdf",
  },
  {
    name: "Document in Vernacular Language",
    image: "/images/gulden.png",
    symbol: "21/01/2020",
    price: "38,541",
    a: "/assests/policy/Document in Vernacular Language21_1_2020_5_17_43.pdf",
  },
  {
    name: "Client Consent Letter",
    image: "/images/gulden.png",
    symbol: "24/11/2021",
    price: "38,541",
    a: "/assests/policy/Client Consent Letter24_11_2021_21_8_58.pdf.crdownload",
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
    title: "BACKUP SERVER ONE",
    icon: '<i class="fa fa-server" style="font-size:40px"></i>',
  },
  {
    title: "BACKUP SERVER TWO",
    icon: '<i class="fa fa-server" style="font-size:40px"></i>',
  },
];

const download = () => {
  return (
    <div>
      <Head>
        <title>Downloads - SAFAL CAPITAL (INDIA) LIMITED</title>
        <meta
          name="description"
          content="Safal Capital India Limited is a leading stock broking company in India which provide online stock & commodity trading, mutual fund investment, equity trading & portfolio management services and many more."
        />
        <meta
          name="keywords"
          content="online mutual fund investment, demat account, future and options trading, online share trading, stock broking company, share trading company, stock broker in india, stock broker in gujarat, stock broker in madhya pradesh, stock broker in ahmedabad, safal capital"
        />
      </Head>
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
                        {crypto.a ? (
                          <a href={crypto.a} download={crypto.a}>
                            {" "}
                            <i
                              className="fa-solid fa-download"
                              style={{
                                fontSize: "15px",
                                color: "var(--optionalColor)",
                                cursor: "pointer",
                              }}
                            ></i>
                          </a>
                        ) : (
                          " "
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="">
            <h5 style={{ marginBottom: "2rem" }}>Software</h5>

            {software.map((crypto, index) => (
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
                        {crypto.a ? (
                          <a href={crypto.a} download={crypto.a}>
                            {" "}
                            <i
                              className="fa-solid fa-download"
                              style={{
                                fontSize: "15px",
                                color: "var(--optionalColor)",
                                cursor: "pointer",
                              }}
                            ></i>
                          </a>
                        ) : (
                          " "
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Application */}

          <div className="row justify-content-center">
            <h5 style={{ marginBottom: "2rem" }}>Policy Procedures</h5>

            {policy.map((crypto, index) => (
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
                        {crypto.a ? (
                          <a href={crypto.a} download={crypto.a}>
                            {" "}
                            <i
                              className="fa-solid fa-download"
                              style={{
                                fontSize: "15px",
                                color: "var(--optionalColor)",
                                cursor: "pointer",
                              }}
                            ></i>
                          </a>
                        ) : (
                          " "
                        )}
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
