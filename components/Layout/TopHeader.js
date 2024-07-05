import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const TopHeader = () => {
  return (
    <>
      <div className="value-trade-area">
        <div className="container">
          <Swiper
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 500,
              waitForTransition: false,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="value-trade-slides"
          >
            <SwiperSlide>
              <div className="single-value-trade-box">
                <p>
                  ETH/BTC <span className="price">₿0.03150400</span>{" "}
                  <span className="trending up">
                    <i className="fas fa-caret-up"></i> +4.31%
                  </span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-value-trade-box">
                <p>
                  BNB/BTC <span className="price">$15.0400031</span>{" "}
                  <span className="trending up">
                    <i className="fas fa-caret-up"></i> +5.21%
                  </span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-value-trade-box">
                <p>
                  FIO/BTC <span className="price">₿0.00000521</span>{" "}
                  <span className="trending down">
                    <i className="fas fa-caret-down"></i> -22.42%
                  </span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-value-trade-box">
                <p>
                  CHZ/BTC <span className="price">₿1.04000315</span>{" "}
                  <span className="trending up">
                    <i className="fas fa-caret-up"></i> +2.20%
                  </span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-value-trade-box">
                <p>
                  DOT/BTC <span className="price">₿2.03150400</span>{" "}
                  <span className="trending up">
                    <i className="fas fa-caret-up"></i> +1.02%
                  </span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-value-trade-box">
                <p>
                  ADA/BTC <span className="price">₿3.04003150</span>{" "}
                  <span className="trending down">
                    <i className="fas fa-caret-down"></i> -3.32%
                  </span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-value-trade-box">
                <p>
                  VET/BTC <span className="price">₿14.0315040</span>{" "}
                  <span className="trending up">
                    <i className="fas fa-caret-up"></i> +7.21%
                  </span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-value-trade-box">
                <p>
                  TRX/BTC <span className="price">₿3.04003150</span>{" "}
                  <span className="trending down">
                    <i className="fas fa-caret-down"></i> -3.32%
                  </span>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
