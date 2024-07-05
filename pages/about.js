import AdvisorArea from "../components/Common/AdvisorArea";
import AccountCreate from "../components/Common/AccountCreate";
import RegisterArea from "../components/Common/RegisterArea";
import AboutContent from "../components/About/AboutContent";
import HistoryTimeline from "../components/HistoryTimeline";

import Values from "../components/Value/Value";

const About = () => {
  return (
    <>
      <AboutContent />

      <HistoryTimeline />

      <AdvisorArea bgColor="bg-f9f9f9" />
      <RegisterArea ctaImage="/images/man.png" />
      
        <Values />


      {/* <AccountCreate title="Connect With us" /> */}
    </>
  );
};

export default About;
