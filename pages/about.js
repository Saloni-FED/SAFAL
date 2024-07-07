import AdvisorArea from "../components/Common/AdvisorArea";
import AccountCreate from "../components/Common/AccountCreate";
import RegisterArea from "../components/Common/RegisterArea";
import AboutContent from "../components/About/AboutContent";
import HistoryTimeline from "../components/HistoryTimeline";

import Values from "../components/Value/Value";
import WhyUs from "../components/WhyUs/WhyUs"

const About = () => {
  return (
    <>
      <AboutContent />

      <HistoryTimeline />
     <WhyUs title={"Why to Choose Us ?"}/>
      <AdvisorArea bgColor="bg-f9f9f9" />
      <RegisterArea ctaImage="/images/office.png" />
      
        <Values />


      {/* <AccountCreate title="Connect With us" /> */}
    </>
  );
};

export default About;
