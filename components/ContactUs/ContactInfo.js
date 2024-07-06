import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h3>Contact Address:</h3>
        <h3>Regional Office Communication Address</h3>
        <p>
          350 -A, New Cloth Market, O/s Raipur Gate, Sarangpur, Ahmedabad,
          Gujarat-380002
        </p>

        <ul className="contact-list">
          <li>
            <div className="icon">
              <i className="bx bx-support"></i>
            </div>
            <p>
              <a href="tel:079-66633606">079-66633606</a>
            </p>
          </li>
          <li>
            <div className="icon">
              <i className="bx bx-globe"></i>
            </div>
            {/* "white-space: normal; word-break: break-all; display: block" */}
            <p>
              <a
                href="mailto:hello@novis.com"
                style={{whiteSpace:"normal", wordBreak : "break-all", display:"block"}}
              >
                compliance@safalcapital.in
              </a>
            </p>
          </li>
          <li>
            <div className="icon">
              <i className="bx bx-map"></i>
            </div>
            {/* <h4></h4> */}
            <p>
              Registered Office Address :- 238 Chitvan Bungalow, South Bopal,
              Ahmedaad : 380058
            </p>
          </li>
        </ul>

        <ul className="social-links">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="facebook"
            >
              <i className="bx bxl-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              className="twitter"
            >
              <i className="bx bxl-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
