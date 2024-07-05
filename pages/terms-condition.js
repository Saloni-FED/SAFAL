import PageBanner from "../components/Common/PageBanner";
import RegisterArea from "../components/Common/RegisterArea";
import TermsConditionContent from "../components/TermsCondition/TermsConditionContent";

const TermsCondition = () => {
  return (
    <>
      <PageBanner
        pageTitle="Terms & Conditions"
        pageSubTitle="Novis is the easiest place to buy and sell cryptocurrency."
      />

      <TermsConditionContent />

      <RegisterArea ctaImage="/images/man.png" />
    </>
  );
};

export default TermsCondition;
