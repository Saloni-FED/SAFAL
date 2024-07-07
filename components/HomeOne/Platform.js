import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

const Platform = ({ title, para }) => {
  return (
    <>
      <div className="cryptocurrency-platform-area">
        <div className="container-fluid">
          <div className="section-title">
            <h2 style={{ marginTop: "3rem" }}>{title}</h2>
            <p>{para}</p>
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
                  src="/images/man1.png"
                  alt="image"
                  className="w-100"
                />
                <div className="content">
                  <div className="icon">
                    <img src="/images/brokers/broker2.png" alt="image" style={{width:"100%", height:"100%", borderRadius:"100%"}}/>
                  </div>
                  <h3>
                    <Link href="/cryptocurrency-details">
                    MR. HARISH RIJHWANI, JABALPUR
                    </Link>
                  </h3>
                  <p>
                    “It is always a worthy experience working with Swastika
                    Investmart. Highly satisfied since last 10 years with timely
                    payment of brokerage”
                  </p>
                  {/* <Link href="/cryptocurrency-details" className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </Link> */}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-cryptocurrency-platform-box">
                <img
                  src="/images/man4.png"
                  alt="image"
                  className="w-100"
                />
                <div className="content">
                  <div className="icon">
                    {/* <img src="/images/icon/icon4.png" alt="image" /> */}
                    <img src="/images/brokers/broker3.jpg" alt="image" style={{width:"100%", height:"100%", borderRadius:"100%"}}/>
                  </div>
                  <h3>
                    <Link href="/cryptocurrency-details">
                      MR. SHIV NUWAL, KOTA
                    </Link>
                  </h3>
                  <p>
                    “I am satisfied with timely payout that I get, all my
                    clients are really happy with the trading software and
                    customer support”
                  </p>
                  {/* <Link href="/cryptocurrency-details" className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </Link> */}
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="single-cryptocurrency-platform-box">
                <img
                  src="/images/man1.png"
                  alt="image"
                  className="w-100"
                />
                <div className="content">
                  <div className="icon">
                  <img src="/images/brokers/broker2.png" alt="image" style={{width:"100%", height:"100%", borderRadius:"100%"}}/>
                  </div>
                  <h3>
                    <Link href="/cryptocurrency-details">
                    MR. HARISH RIJHWANI, JABALPUR
                    </Link>
                  </h3>
                  <p>
                    “It is always a worthy experience working with Swastika
                    Investmart. Highly satisfied since last 10 years with timely
                    payment of brokerage”
                  </p>
                  {/* <Link href="/cryptocurrency-details" className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </Link> */}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-cryptocurrency-platform-box">
                <img
                  src="/images/man4.png"
                  alt="image"
                  className="w-100"
                />
                <div className="content">
                  <div className="icon">
                    {/* <img src="/images/icon/icon7.png" alt="image" /> */}
                    <img src="/images/brokers/broker3.jpg" alt="image" style={{width:"100%", height:"100%", borderRadius:"100%"}}/>
                  </div>
                  <h3>
                    <Link href="/cryptocurrency-details">
                      MR. SHIV NUWAL, KOTA
                    </Link>
                  </h3>
                  <p>
                    “I am satisfied with timely payout that I get, all my
                    clients are really happy with the trading software and
                    customer support”
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
