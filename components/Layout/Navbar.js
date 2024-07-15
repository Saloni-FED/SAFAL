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
                  <img
                    src="/images/newLogo.png"
                    alt="logo"
                    className="safal_img"
                  />
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
              <img src="/images/newLogo.png" alt="logo" className="safal_img" />
              {/* <h1 style={{ color: "var(--mainColor)" }}>SAFAL</h1> */}
            </Link>

            <div className="collapse navbar-collapse mean-menu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/about" className=" nav-link">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/subbroker"
                    className={`nav-link ${
                      currentPath == "/subroker" && "active"
                    }`}
                  >
                    Partner With Us
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
                      <Link
                        href="/insurance"
                        className={`nav-link ${
                          currentPath == "mutualfunds" && "active"
                        }`}
                      >
                        <img
                          src="/images/secure-finance (1).png"
                          alt="image"
                        />
                        Insurance
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
                        href="/mutualfunds"
                        className={`nav-link ${
                          currentPath == "/mutualfunds" && "active"
                        }`}
                      >
                        <img
                          src="/images/cost.png"
                          alt="image"
                        />
                        Mutual Funds
                      </Link>
                    </li>

                    {/* Unlisted  */}
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
                     <img
                          src="/images/cost.png"
                          alt="image"
                        />
                    
                    Unlisted Shares
                    {/* <span className="notification-badge">New</span> */}
                  </Link>
                </li>
                  </ul>
                </li>

                

                <li className="nav-item megamenu">
                  <Link href="/download" className=" nav-link">
                    Resources
                  </Link>
                </li>
                <li className="nav-item megamenu">
                  <Link href="/contact" className=" nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div className="others-option">
                <div className="d-flex align-items-center">
                  <div className="option-item d-none d-lg-block">
                    <Link
                      href="https://kyc.swastika.co.in/customer/login/6FDD55F1C5"
                      target="_blank"
                      className="default-btn"
                    >
                      <i className="bx bxs-contact"></i>{" "}
                      <span>Open an Account</span>
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
