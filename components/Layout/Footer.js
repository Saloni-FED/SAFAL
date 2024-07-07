import Link from "next/link";
import { useState } from "react";
const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const links = [
    { name: "BSE", href: "#" },
    { name: "NSE", href: "#" },
    { name: "MCX", href: "#" },
    { name: "NCDEX", href: "#" },
    { name: "SEBI", href: "#" },
    { name: "RBI", href: "#" },
  ];

  const linkStyle = (index) => ({
    margin: "0 1rem",
    color: hoveredIndex === index ? "blue" : "black",
    transition: "color 0.3s ease",

    color: "var(--optionalColor",
    fontWeight: "bold",

    textDecoration: "underline",
    textDecorationColor: "--var(optionalColor)",
  });
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <Link href="/" className="d-inline-block logo">
                  <img src="/images/newLogo.png" alt="logo" />
                </Link>

                <div
                  className="single-footer-widget"
                  style={{ marginTop: "0.8rem" }}
                >
                  <h3>Contact Info</h3>
                  <ul className="footer-contact-info">
                    <li>
                      <a href="https://www.google.com/maps/place/New+Cloth+Market,+Sarangpur,+Sherkotda,+Ahmedabad,+Gujarat+380002/@23.0179311,72.5989361,19z/data=!4m6!3m5!1s0x395e85cce36f012f:0x68b0264ba5797629!8m2!3d23.017687!4d72.6001477!16s%2Fg%2F11gjp8b1v9?entry=tts&g_ep=EgoyMDI0MDcwMS4wKgBIAVAD" target="_blank">Ahmedabad Office: 350 -A,New Cloth Market, O/s Raipur
                      Gate, Sarangpur, Ahmedabad. Gujarat-380002.</a>
                      
                    </li>
                    <li>
                      Email:{" "}
                      <a href="mailto:helpdesk@safalcapital.in">
                        helpdesk@safalcapital.in
                      </a>
                    </li>
                    <li>
                      Phone: <a href="tel:+44587154756"> 7227906014</a>
                    </li>
                    {/* <li>
                    Fax: <a href='tel:+44587154756'>+1416-555-0477</a>
                  </li> */}
                  </ul>
                </div>

                <ul className="social-links">
                  <li>
                    <a href="#" target="_blank" className="facebook">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="twitter">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="linkedin">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="instagram">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6 col-md-6">
              <div className="single-footer-widget other_links">
                <h3>Other Links</h3>
                <ul className="services-links">
                  <li>
                    <Link href="https://www.bseindia.com/" target="_blank">BSE</Link>
                  </li>
                  <li>
                    <Link href="https://www.nseindia.com/" target="_blank">NSE</Link>
                  </li>
                  <li>
                    <Link href="https://www.mcxindia.com/"  target="_blank">MCX</Link>
                  </li>
                  <li>
                    <Link href="https://www.ncdex.com/" target="_blank">NCDEX</Link>
                  </li>
                  <li>
                    <Link href="https://www.sebi.gov.in/" target="_blank">SEBI</Link>
                  </li>
                  <li>
                    <Link href="https://www.rbi.org.in/" target="_blank">RBI</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Useful Links</h3>
                <ul className="quick-links" style={{ paddingLeft: "0.5rem" }}>
                  <li>
                    <Link href="http://safalcapital.in/Pdfs/ESCALATION%20MATRIX.pdf" target="_blank">Escalation Matrix</Link>
                  </li>
                  <li>
                    <Link href="/subbroker">Sub Broker</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/faq">Faq</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Grievance Details</h3>
                <ul className="footer-contact-info">
                  <li>
                    SAFAL CAPITAL (INDIA) LIMITED CIN No:- U67110MP2000PLC014099
                    | SEBI Registration No. (NSE/BSE/MSEI) :- INZ000155333 |
                    CDSL–IN–DP-CDSL-168-2002
                  </li>
                  <li>
                    <span>
                      For Investor Grievances:{" "}
                      <a href="mailto:investorgrievancedesk@safalcapital.in">
                        investorgrievancedesk@safalcapital.in
                      </a>
                    </span>
                  </li>

                  {/* <li>
                    Fax: <a href='tel:+44587154756'>+1416-555-0477</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex-center">
            <a
              className="link link-right"
              style={{ marginRight: "1rem" }}
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
            |
            <a
              className="link link-left"
              style={{ marginLeft: "1rem" }}
              href="#"
            >
              Disclaimer
            </a>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              Copyright <strong>Safal Capital India Private Limited</strong>. All
              Rights Reserved by{" "}
              {/* <Link href="https://envytheme.com/" target="_blank">
                EnvyTheme
              </Link> */}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
