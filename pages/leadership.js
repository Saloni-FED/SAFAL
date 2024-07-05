import PageBanner from "../components/Common/PageBanner";
import RegisterArea from "../components/Common/RegisterArea";
import TeamMember from "../components/Team/TeamMember";

const Leadership = () => {
  return (
    <>
      <PageBanner pageTitle="Our Leadership Team" />

      <TeamMember />

      <RegisterArea
        bgGradient="bg-gradient-image"
        blackText="black-text"
        ctaImage="/images/man-with-ipad.png"
      />
    </>
  );
};

export default Leadership;
