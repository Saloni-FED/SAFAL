import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LangDropdown from "./LangDropdown";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  }, []);

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="raimo-responsive-nav">
          <div className="container">
            <div className="raimo-responsive-menu">
              <div onClick={() => toggleMenu()} className="hamburger-menu">
                {showMenu ? (
                  <i className="bx bx-x"></i>
                ) : (
                  <i className="bx bx-menu"></i>
                )}
              </div>
              <div className="logo">
                <Link href="/">
                  {/* <img src="http://safalcapital.in/Theme/New/images/logo.png" alt="logo" /> */}
                  <img src="/images/newLogo.png" alt="logo" />
                  {/* <h1 style={{ color: "var(--mainColor)" }}>SAFAL</h1> */}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <nav
          className={
            showMenu
              ? "show navbar navbar-expand-md navbar-light"
              : "navbar navbar-expand-md navbar-light hide-menu"
          }
        >
          <div className="container">
            <Link href="/" className="navbar-brand">
              <img src="/images/newLogo.png" alt="logo" />
              {/* <h1 style={{ color: "var(--mainColor)" }}>SAFAL</h1> */}
            </Link>

            <div className="collapse navbar-collapse mean-menu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/about" className=" nav-link">
                    About
                  </Link>

                  <ul className="dropdown-menu">
                    {/* <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${currentPath == "/" && "active"}`}
                      >
                        Home Demo - 1
                      </Link> */}
                    {/* </li> */}

                    <li className="nav-item">
                      <Link
                        href="/about"
                        className={`nav-link ${
                          currentPath == "/index-2/" && "active"
                        }`}
                      >
                        About Us
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/whyus"
                        className={`nav-link ${
                          currentPath == "/index-3/" && "active"
                        }`}
                      >
                        Why Us
                      </Link>
                    </li>

                    <li className="nav-item">
                      {/* <Link href="#" className="dropdown-toggle nav-link">
                        Pages
                      </Link> */}

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/trade/"
                            className={`nav-link ${
                              currentPath == "/trade/" && "active"
                            }`}
                          >
                            Trade
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/leadership/"
                            className={`nav-link ${
                              currentPath == "/leadership/" && "active"
                            }`}
                          >
                            Leadership Team
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/privacy-policy/"
                            className={`nav-link ${
                              currentPath == "/privacy-policy/" && "active"
                            }`}
                          >
                            Privacy Policy
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/terms-condition/"
                            className={`nav-link ${
                              currentPath == "/terms-condition/" && "active"
                            }`}
                          >
                            Terms & Conditions
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="/subbroker"
                    className={`nav-link ${
                      currentPath == "/subroker" && "active"
                    }`}
                  >
                    Sub Broker
                  </Link>
                  {/* <Link
                    href="/blog/"
                    className={`nav-link ${
                      currentPath == "/blog/" && "active"
                    }`}
                  >
                    Blog
                  </Link> */}
                </li>
                <li className="nav-item megamenu">
                  <Link href="#" className="dropdown-toggle nav-link">
                    Invest With us
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      {/* <Link
                        href="/buy/"
                        className={`nav-link ${
                          currentPath == "/buy/" && "active"
                        }`}
                      >
                        <img
                          src="/images/cryptocurrency/cryptocurrency2.png"
                          alt="image"
                        />
                        BTC - Bitcoin
                      </Link> */}
                      <Link
                        href="/buy/"
                        className={`nav-link ${
                          currentPath == "/buy/" && "active"
                        }`}
                      >
                        Mutual Funds
                      </Link>
                    </li>

                    {/* <li className="nav-item">
                      <Link
                        href="/buy/"
                        className={`nav-link ${
                          currentPath == "/buy/" && "active"
                        }`}
                      >
                        <img
                          src="/images/cryptocurrency/cryptocurrency3.png"
                          alt="image"
                        />
                        MIT - Litecoin
                      </Link>
                    </li> */}

                    {/* <li className="nav-item">
                      <Link
                        href="/buy/"
                        className={`nav-link ${
                          currentPath == "/buy/" && "active"
                        }`}
                      >
                        <img
                          src="/images/cryptocurrency/cryptocurrency4.png"
                          alt="image"
                        />
                        XRP - Ripple
                      </Link>
                    </li> */}

                    {/* <li className="nav-item">
                      <Link
                        href="/buy/"
                        className={`nav-link ${
                          currentPath == "/buy/" && "active"
                        }`}
                      >
                        <img
                          src="/images/cryptocurrency/cryptocurrency5.png"
                          alt="image"
                        />
                        STE - Stellar
                      </Link>
                    </li> */}

                    <li className="nav-item">
                      {/* <Link
                        href="/cryptocurrency/"
                        className={`nav-link ${
                          currentPath == "/cryptocurrency/" && "active"
                        }`}
                      >
                        <i className="bx bxs-chevron-right-circle"></i>
                        View All Coins
                      </Link> */}
                      <Link
                        href="/cryptocurrency/"
                        className={`nav-link ${
                          currentPath == "/cryptocurrency/" && "active"
                        }`}
                      >
                        {/* <i className="bx bxs-chevron-right-circle"></i> */}
                        Insurance
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  {/* <Link
                    href="/prices/"
                    className={`nav-link ${
                      currentPath == "/prices/" && "active"
                    }`}
                  >
                    Listings
                  </Link> */}
                  <Link
                    href="/unlistedshares"
                    className={`nav-link ${
                      currentPath == "/unlistedshares" && "active"
                    }`}
                  >
                    Unlisted Shares
                  </Link>
                </li>

                <li className="nav-item megamenu">
                  <Link href="/download" className=" nav-link">
                    Resources
                  </Link>

                  <ul className="dropdown-menu">
                    {/* <li className="nav-item">
                      <Link
                        href="/sell/"
                        className={`nav-link ${
                          currentPath == "/sell/" && "active"
                        }`}
                      >
                        <img
                          src="/images/cryptocurrency/cryptocurrency4.png"
                          alt="image"
                        />
                        XRP - Ripple
                      </Link>
                    </li> */}

                    {/* <li className="nav-item">
                      <Link
                        href="/sell/"
                        className={`nav-link ${
                          currentPath == "/sell/" && "active"
                        }`}
                      >
                        <img
                          src="/images/cryptocurrency/cryptocurrency5.png"
                          alt="image"
                        />
                        STE - Stellar
                      </Link>
                    </li> */}

                    {/* <li className="nav-item">
                      <Link
                        href="/sell/"
                        className={`nav-link ${
                          currentPath == "/sell/" && "active"
                        }`}
                      >
                        <img
                          src="/images/cryptocurrency/cryptocurrency2.png"
                          alt="image"
                        />
                        BTC - Bitcoin
                      </Link>
                    </li> */}

                    <li className="nav-item">
                      <Link
                        href="/download"
                        className={`nav-link ${
                          currentPath == "/download" && "active"
                        }`}
                      >
                        {/* <img
                          src="/images/cryptocurrency/cryptocurrency3.png"
                          alt="image"
                        /> */}
                        Downloads
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/backoffice"
                        className={`nav-link ${
                          currentPath == "/backoffice" && "active"
                        }`}
                      >
                        {/* <i className="bx bxs-chevron-right-circle"></i> */}
                        Back Office
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item megamenu">
                  <Link href="/contact" className=" nav-link">
                    Contact Us
                  </Link>
                </li>

                <li className="nav-item megamenu support">
                  {/* <Link href="#" className="dropdown-toggle nav-link">
                    Support
                  </Link> */}

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/faq/"
                        className={`nav-link ${
                          currentPath == "/faq/" && "active"
                        }`}
                      >
                        <i className="bx bx-info-circle"></i>
                        FAQ
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/guides/"
                        className={`nav-link ${
                          currentPath == "/guides/" && "active"
                        }`}
                      >
                        <i className="bx bx-book"></i>
                        Guides
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/wallet/"
                        className={`nav-link ${
                          currentPath == "/wallet/" && "active"
                        }`}
                      >
                        <i className="bx bx-wallet"></i>
                        Wallets
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/about/"
                        className={`nav-link ${
                          currentPath == "/about/" && "active"
                        }`}
                      >
                        <i className="bx bx-group"></i>
                        About Us
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/contact/"
                        className={`nav-link ${
                          currentPath == "/contact/" && "active"
                        }`}
                      >
                        <i className="bx bx-phone-call"></i>
                        Contact Us
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/affiliate/"
                        className={`nav-link ${
                          currentPath == "/affiliate/" && "active"
                        }`}
                      >
                        <i className="bx bxs-paper-plane"></i>
                        Affiliates
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/contact"
                        className={`nav-link ${
                          currentPath == "/contact" && "active"
                        }`}
                      >
                        Contact Us
                      </Link>
                      {/* <Link
                    href="/blog/"
                    className={`nav-link ${
                      currentPath == "/blog/" && "active"
                    }`}
                  >
                    Blog
                  </Link> */}
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="others-option">
                <div className="d-flex align-items-center">
                  <div className="option-item d-none d-lg-block">
                    <Link
                      href="https://kyc.swastika.co.in/customer/login/6FDD55F1C5"
                      className="default-btn"
                    >
                      <i className="bx bxs-contact"></i> Open an Account
                    </Link>
                  </div>

                  <div className="option-item">{/* <LangDropdown /> */}</div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
