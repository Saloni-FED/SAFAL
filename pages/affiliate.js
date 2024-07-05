import PageBanner from "../components/Common/PageBanner";
import AccountCreate from "../components/Common/AccountCreate";
import OurFeature from "../components/Common/OurFeature";
import RegisterArea from "../components/Common/RegisterArea";
import EarnMoney from "../components/Affiliate/EarnMoney";

const Affiliate = () => {
  return (
    <>
      <PageBanner
        pageTitle="Our Affiliate Program"
        pageSubTitle="Help us introduce the world to bitcoin, cryptocurrency, and the new financial system."
        button={true}
      />

      <AccountCreate title="How It Works" />

      <EarnMoney />

      <OurFeature title="The Most Trusted Cryptocurrency Platform" />
      
      <RegisterArea ctaImage="/images/man.png" />
    </>
  );
};

export default Affiliate;
