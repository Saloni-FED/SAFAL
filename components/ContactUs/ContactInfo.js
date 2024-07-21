import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h3>Contact Address:</h3>
        <h3>Regional Office Communication Address</h3>
        <a
          href="https://www.google.com/maps/place/New+Cloth+Market,+Sarangpur,+Sherkotda,+Ahmedabad,+Gujarat+380002/@23.0179311,72.5989361,19z/data=!4m6!3m5!1s0x395e85cce36f012f:0x68b0264ba5797629!8m2!3d23.017687!4d72.6001477!16s%2Fg%2F11gjp8b1v9?entry=tts&g_ep=EgoyMDI0MDcwMS4wKgBIAVAD"
          target="_blank"
        >
          350 -A, New Cloth Market, O/s Raipur Gate, Sarangpur, Ahmedabad,
          Gujarat-380002
        </a>

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
                href="mailto:compliance@safalcapital.in"
                style={{
                  whiteSpace: "normal",
                  wordBreak: "break-all",
                  display: "block",
                }}
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
            <a
              href="https://www.google.com/maps/place/New+Cloth+Market,+Sarangpur,+Sherkotda,+Ahmedabad,+Gujarat+380002/@23.0179311,72.5989361,19z/data=!4m6!3m5!1s0x395e85cce36f012f:0x68b0264ba5797629!8m2!3d23.017687!4d72.6001477!16s%2Fg%2F11gjp8b1v9?entry=tts&g_ep=EgoyMDI0MDcwMS4wKgBIAVAD"
              target="_blank"
            >
              <p>
                Registered Office Address :- 243, Chittvan, Gala Gymkhana Road,
                Bopal, Ahmedabad - 380058
              </p>
            </a>
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
