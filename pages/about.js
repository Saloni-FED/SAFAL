import Head from "next/head";
import AdvisorArea from "../components/Common/AdvisorArea";
import AccountCreate from "../components/Common/AccountCreate";
import RegisterArea from "../components/Common/RegisterArea";
import AboutContent from "../components/About/AboutContent";
import HistoryTimeline from "../components/HistoryTimeline";
import Values from "../components/Value/Value";
import WhyUs from "../components/WhyUs/WhyUs";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Safal Capital.in</title>
        <meta
          name="description"
          content="Safal Capital India Limited is a leading stock broking company in India which provide online stock & commodity trading, mutual fund investment, equity trading & portfolio management services and many more."
        />

        {/* <meta property="og:image" content="/images/office.png" /> */}
        <meta
          property="og:url"
          content="https://safal-theta.vercel.app/about"
        />
        <link rel="icon" href="/image/ico.png" />
      </Head>
      <AboutContent />
      <HistoryTimeline />
      <WhyUs title={"Why to Choose Us ?"} />
      <AdvisorArea bgColor="bg-f9f9f9" />
      <RegisterArea ctaImage="/images/office.png" />
      <Values />
      {/* <AccountCreate title="Connect With us" /> */}
    </>
  );
};

export default About;
