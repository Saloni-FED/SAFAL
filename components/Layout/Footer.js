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
                  {/* <img src='/images/logo.png' alt='logo' /> */}
                  <h1 style={{ color: "var(--mainColor)" }}>SAFAL</h1>
                </Link>

                <div className="single-footer-widget">
                  <h3>Contact Info</h3>
                  <ul className="footer-contact-info">
                    <li>
                      Ahmedabad Office: 350 -A,New Cloth Market, O/s Raipur
                      Gate, Sarangpur, Ahmedabad. Gujarat-380002.
                    </li>
                    <li>
                      Email:{" "}
                      <a href="mailto:hello@novis.com">
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
              <div className="single-footer-widget">
                <h3>Cryptocurrency</h3>
                <ul className="services-links">
                  <li>
                    <Link href="/buy">BSE</Link>
                  </li>
                  <li>
                    <Link href="/buy">NSE</Link>
                  </li>
                  <li>
                    <Link href="/buy">MCX</Link>
                  </li>
                  <li>
                    <Link href="/buy">NCDEX</Link>
                  </li>
                  <li>
                    <Link href="/buy">SEBI</Link>
                  </li>
                  <li>
                    <Link href="/buy">RBI</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Resources</h3>
                <ul className="quick-links">
                  <li>
                    <Link href="/trade">Trade</Link>
                  </li>
                  <li>
                    <Link href="/guides">Guides</Link>
                  </li>
                  <li>
                    <Link href="/wallet">Wallets</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/contact">Escalation Matrix</Link>
                  </li>
                  <li>
                    <Link href="/contact">Sub Broker</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Contact Info</h3>
                <ul className="footer-contact-info">
                  <li>
                    SAFAL CAPITAL (INDIA) LIMITED CIN No:- U67110MP2000PLC014099
                    | SEBI Registration No. (NSE/BSE/MSEI) :- INZ000155333 |
                    CDSL–IN–DP-CDSL-168-2002
                  </li>
                  <li>
                    <a href="mailto:hello@novis.com">
                    For Investor Grievances: investorgrievancedesk@safalcapital.in
                    </a>
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
              href="#"
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
              Copyright <strong>Safal</strong>. All Rights Reserved by{" "}
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
