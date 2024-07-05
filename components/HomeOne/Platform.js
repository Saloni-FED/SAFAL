import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

const Platform = () => {
  return (
    <>
      <div className="cryptocurrency-platform-area">
        <div className="container-fluid">
          <div className="section-title">
            <h2>The Most Trusted Cryptocurrency Platform</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1, 
              },
              922: {
                slidesPerView: 2, 
              },
            }}
            modules={[Autoplay, Pagination]}
            className="cryptocurrency-platform-slides"
          >
            <SwiperSlide>
              <div className="single-cryptocurrency-platform-box">
                <img
                  src="/images/cryptocurrency-platform/cryptocurrency-platform-1.jpg"
                  alt="image"
                  className="w-100"
                />
                <div className="content">
                  <div className="icon">
                    <img src="/images/icon/icon4.png" alt="image" />
                  </div>
                  <h3>
                    <Link href="/cryptocurrency-details">
                      Protected by Insurance
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                  <Link href="/cryptocurrency-details" className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-cryptocurrency-platform-box">
                <img
                  src="/images/cryptocurrency-platform/cryptocurrency-platform-3.jpg"
                  alt="image"
                  className="w-100"
                />
                <div className="content">
                  <div className="icon">
                    <img src="/images/icon/icon5.png" alt="image" />
                  </div>
                  <h3>
                    <Link href="/cryptocurrency-details">
                      Build Your Reputation
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                  <Link href="/cryptocurrency-details" className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-cryptocurrency-platform-box">
                <img
                  src="/images/cryptocurrency-platform/cryptocurrency-platform-4.jpg"
                  alt="image"
                  className="w-100"
                />
                <div className="content">
                  <div className="icon">
                    <img src="/images/icon/icon6.png" alt="image" />
                  </div>
                  <h3>
                    <Link href="/cryptocurrency-details">
                      Earn Extra Income
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                  <Link href="/cryptocurrency-details" className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-cryptocurrency-platform-box">
                <img
                  src="/images/cryptocurrency-platform/cryptocurrency-platform-2.jpg"
                  alt="image"
                  className="w-100"
                />
                <div className="content">
                  <div className="icon">
                    <img src="/images/icon/icon7.png" alt="image" />
                  </div>
                  <h3>
                    <Link href="/cryptocurrency-details">Secure Storage</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                  <Link href="/cryptocurrency-details" className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Platform;
