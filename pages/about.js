import AdvisorArea from "../components/Common/AdvisorArea";
import AccountCreate from "../components/Common/AccountCreate";
import RegisterArea from "../components/Common/RegisterArea";
import AboutContent from "../components/About/AboutContent";

const About = () => {
  return (
    <>
      <AboutContent />

      <AdvisorArea bgColor="bg-f9f9f9" />

      <AccountCreate title="Our Values" />
      
      <RegisterArea ctaImage="/images/man.png" />
    </>
  );
};

export default About;
