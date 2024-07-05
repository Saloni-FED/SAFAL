import PageBanner from "../components/Common/PageBanner";
import RegisterAreaTwo from "../components/Common/RegisterAreaTwo";
import Features from "../components/Cryptocurrency/Features";
import FeaturesArea from "../components/Cryptocurrency/FeaturesArea";

const CryptocurrencyDetails = () => {
  return (
    <>
      <PageBanner
        pageTitle="Learn Everything About Bitcoin!"
        pageSubTitle="Novis is the easiest place to buy and sell cryptocurrency."
      />

      <Features />

      <FeaturesArea />

      <RegisterAreaTwo title="Start Trading on Novis" />
    </>
  );
};

export default CryptocurrencyDetails;
