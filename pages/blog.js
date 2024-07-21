import BlogPost from "../components/Blog/BlogPost";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import Head from "next/head";
const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog - Safal Capital India Limited</title>
        <meta
          name="description"
          content="Explore insightful articles and essential tools for investors on Safal Capital India Limited's blog. Learn about mutual funds, stock marketing, NSE trends, and more."
        />
        <meta
          name="keywords"
          content="mutual funds, stock marketing, NSE, ticker, stock market analysis, investment tools, market news, fundamental analysis, technical analysis, Safal Capital blog"
        />
      </Head>
      <PageBanner
        pageTitle="Articles"
        // pageSubTitle="Data and Tools."
      />

      <BlogPost />

      <PageBanner
        pageTitle="Important Tools for Investors"
        pageSubTitle="Data and Tools."
      />

      <div className="container" style={{ textAlign: "center", marginTop:"50px" }}>
        <h5>
          There are many useful tools for investors, and we narrowed down the
          research for you!
        </h5>
        <h5>
          If you choose to invest in individual stocks, having the right tools
          can help you find the best deals and grow your portfolio over time.
        </h5>
      </div>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <a
                    href="https://www.moneycontrol.com/news/business/markets/trade-spotlight-how-should-you-trade-lic-hul-itc-dmart-orient-cement-and-others-ahead-of-budget-day-12773813.html"
                    className="d-block"
                    target="blank"
                  >
                    <img
                      src="/images/unlisted/Stock-1.avif"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Market News</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a
                      href="https://www.moneycontrol.com/news/business/markets/trade-spotlight-how-should-you-trade-lic-hul-itc-dmart-orient-cement-and-others-ahead-of-budget-day-12773813.html"
                      target="_blank"
                    >
                      {/* How Filecoin is Up 50% in a Week & Could Take More Profits */}
                      How should you trade LIC, HUL, ITC, DMart, Orient Cement,
                      and others ahead of budget day?
                    </a>
                  </h3>
                  <p>
                    Experts see a sharp correction if the Nifty 50 decisively
                    closes below 24,500, with 24,000 acting as a crucial support
                    and 24,900 as a hurdle on the higher side.
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
                    href="https://economictimes.indiatimes.com/"
                    className="d-block"
                    target="_blank"
                  >
                    <img
                      src="/images/unlisted/stock5.avif"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Market News</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a
                      href="https://economictimes.indiatimes.com/"
                      target="_blank"
                    >
                      Industrial houses getting re-rated. After Tata and
                      Mahindra, are Aditya Birla Group stocks next in line?
                    </a>
                  </h3>
                  <p>
                    In the last four years, beside different sectors getting
                    rerated there has been another sort of re-rating which has
                    been going on the street.
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
                    className="d-block"
                    href="https://www.business-standard.com/"
                    target="_blank"
                  >
                    <img
                      src="/images/unlisted/stock2.avif"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Market News</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a
                      target="_blank"
                      href="https://www.business-standard.com/"
                    >
                      Budget, earnings, global trends to drive stock markets
                      this week: Analysts
                    </a>
                  </h3>
                  <p>
                    Besides, the trading activity of foreign investors, the
                    rupee-dollar trend and the movement of global oil benchmark
                    Brent crude are also crucial aspects to watch out for
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <a
                    href="https://www.cnbctv18.com/"
                    className="d-block"
                    target="_blank"
                  >
                    <img
                      src="/images/unlisted/stock4.avif"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Market News</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a href="https://www.cnbctv18.com/" target="_blank">
                      Check Out the latest Price and get current trends
                    </a>
                  </h3>
                  <p>
                    Find out which company's shares you'll have to buy in the
                    upcoming week to be eligible for their corporate actions
                    ranging from a dividend payout to a stock split.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <a
                    href="https://www.livemint.com/"
                    className="d-block"
                    target="_blank"
                  >
                    <img
                      src="/images/unlisted/stock6.webp"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Market News</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a href="https://www.livemint.com/" target="_blank">
                      Best mutual funds to invest in large-cap, mid-cap ...
                    </a>
                  </h3>
                  <p>
                    There are multiple parameters to judge a mutual fund
                    scheme’s past performance. Evaluating them on the basis of
                    their rolling returns is considered better than comparing
                    the absolute returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <a
                    hred="https://www.screener.in/"
                    className="d-block"
                    target="blank"
                  >
                    <img
                      src="/images/unlisted/Stock-1.avif"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Fundamental Analysis</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a href="https://www.screener.in/" target="_blank">
                      {/* How Filecoin is Up 50% in a Week & Could Take More Profits */}
                      Stock analysis and screening tool for investors in India.
                    </a>
                  </h3>
                  <p>Screening helps to choose best inventors in India</p>
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
                    href="https://www.nseindia.com/"
                    className="d-block"
                    target="_blank"
                  >
                    <img
                      src="/images/unlisted/stock7.jpg"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Fundamental Analysis</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a href="https://www.nseindia.com/" target="_blank">
                      NSE (National Stock Exchange) is an institution of
                      national importance
                    </a>
                  </h3>
                  <p>
                    NSE is counted as one of the world’s largest exchanges for
                    driving India’s economic growth.
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
                    className="d-block"
                    href="https://stockedge.com/"
                    target="_blank"
                  >
                    <img
                      src="/images/unlisted/stock8.webp"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Fundamental Analysis</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a target="_blank" href="https://stockedge.com/">
                      Become a Better Investor & Trader
                    </a>
                  </h3>
                  <p>
                    Discover investing & trading opportunities with India's
                    trusted Stock market Research and Analytics App
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <a
                    href="https://forum.valuepickr.com/"
                    className="d-block"
                    target="_blank"
                  >
                    <img
                      src="/images/unlisted/stock11.webp"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Fundamental Analysis</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a href="https://forum.valuepickr.com/" target="_blank">
                      This is a Civilized Place for Public Discussion
                    </a>
                  </h3>
                  <p>
                    Asset Turnover tells us roughly how efficient a company is
                    at generating revenue from each dollar/rupee of Assets
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <a
                    href="https://www.tickertape.in/"
                    className="d-block"
                    target="_blank"
                  >
                    <img
                      src="/images/unlisted/stock10.webp"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Market News</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a href="https://www.tickertape.in/" target="_blank">
                      Track your stocks and mutual fund investments
                    </a>
                  </h3>
                  <p>
                    Everything You Need to Redefine Your Investing Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <a
                    href="https://ticker.finology.in/"
                    className="d-block"
                    target="_blank"
                  >
                    <img
                      src="/images/unlisted/stock13.png"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Market News</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a href="https://ticker.finology.in/" target="_blank">
                      Modern Stock Screener That Helps You Pick Better Stocks
                    </a>
                  </h3>
                  <p>Learn about stock market updates and trends</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <a
                    hred="https://trendlyne.com/features/"
                    className="d-block"
                    target="blank"
                  >
                    <img
                      src="/images/unlisted/Stock13.webp"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Technical Analysis</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a href="https://trendlyne.com/features/" target="_blank">
                      {/* How Filecoin is Up 50% in a Week & Could Take More Profits */}
                      Stock Markets Today: Stay Ahead with Trendlyne
                    </a>
                  </h3>
                  <p>A stock market platform with a score for every stock.</p>
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
                    href="https://www.tradingview.com/"
                    className="d-block"
                    target="_blank"
                  >
                    <img
                      src="/images/unlisted/stock18.webp"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Technical Analysis</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a href="https://www.tradingview.com/" target="_blank">
                      What Technical Analysis Says Nvidia Stock Might Do From
                      Here
                    </a>
                  </h3>
                  <p>The best trades require research, then commitment.</p>
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
                    className="d-block"
                    href="https://chartink.com/"
                    target="_blank"
                  >
                    <img
                      src="/images/unlisted/stock19.webp"
                      alt="image"
                      style={{ height: "206px", width: "100%" }}
                    />
                  </a>
                  <div className="tag-list">
                    <Link href="#">Technical Analysis</Link>
                  </div>
                </div>
                <div className="post-content">
                  <h3>
                    <a target="_blank" href="https://chartink.com/">
                      Today's Top Trending Scans
                    </a>
                  </h3>
                  <p>Stocks trading near their high in the past 4 months .</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
