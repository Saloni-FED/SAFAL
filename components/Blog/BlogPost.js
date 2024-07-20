import React from "react";
import Link from "next/link";

const BlogPost = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <a
                    href="https://economictimes.indiatimes.com/wealth/invest/unlisted-shares-offer-terrific-returns-but-also-carry-very-high-risks-should-you-invest/articleshow/110609615.cms?from=mdr"
                    className="d-block"
                    target="blank"
                  >
                    <img
                      src="/images/unlisted/unlisted1.jpeg"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Unlisted Shares</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a
                      href="https://economictimes.indiatimes.com/wealth/invest/unlisted-shares-offer-terrific-returns-but-also-carry-very-high-risks-should-you-invest/articleshow/110609615.cms?from=mdr"
                      target="_blank"
                    >
                      {/* How Filecoin is Up 50% in a Week & Could Take More Profits */}
                      Unlisted shares offer terrific returns, but also carry
                      very high risks; should you invest?
                    </a>
                  </h3>
                  <p>
                    At Rs.1,314, the closing price on listing day was more than
                    160% above the issue price of Rs.500.
                  </p>
                  {/* <div className="author d-flex align-items-center">
                    <img src="/images/user/user1.jpg" alt="image" />
                    <Link href="#">Steven Smith</Link>
                  </div>
                  <Link href="/blog-details" className="link-btn">
                    <i className="bx bx-right-arrow-alt"></i>
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <a
                    href="https://www.moneycontrol.com/news/business/banks/hdfc-bank-in-talks-with-credit-funds-to-sell-20-of-hdb-financial-12766852.html"
                    className="d-block"
                    target="_blank"
                  >
                    <img
                      src="/images/unlisted/HDFC.avif"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Unlisted Shares</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a
                      href="https://www.moneycontrol.com/news/business/banks/hdfc-bank-in-talks-with-credit-funds-to-sell-20-of-hdb-financial-12766852.html"
                      target="_blank"
                    >
                      HDFC Bank in talks with credit funds to sell 20% of HDB
                      Financial
                    </a>
                  </h3>
                  <p>
                    Five funds are in talks to each acquire a 4-7 percent stake.
                    The discussions are in the preliminary stages, and valuation
                    is a crucial factor for their success
                  </p>
                  {/* <div className="author d-flex align-items-center">
                    <img src="/images/user/user2.jpg" alt="image" />
                    <Link href="#">Sarah Taylor</Link>
                  </div> */}
                  {/* <Link href="/blog-details" className="link-btn">
                    <i className="bx bx-right-arrow-alt"></i>
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <a
                    href="https://economictimes.indiatimes.com/markets/stocks/news/nse-stock-soars-25-in-unlisted-market-post-41-bonus-issue/articleshow/109993653.cms?from=mdr"
                    className="d-block"
                    target="_blank"
                  >
                    <img
                      src="/images/unlisted/unlisted2.jpeg"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Unlisted Shares</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a href="https://economictimes.indiatimes.com/markets/stocks/news/nse-stock-soars-25-in-unlisted-market-post-41-bonus-issue/articleshow/109993653.cms?from=mdr" target="_blank">
                      NSE stock soars 25% in unlisted market
                    </a>
                  </h3>
                  <p>
                    At ₹5,500, NSE is valued at ₹2.73 lakh crore or about $33
                    billion, making it the world's seventh most valuable stock
                    exchange, trailing Nasdaq's market capitalisation by just $1
                    billion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
