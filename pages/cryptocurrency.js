import PageBanner from "../components/Common/PageBanner";
import OurFeature from "../components/Common/OurFeature";
import RegisterAreaTwo from "../components/Common/RegisterAreaTwo";
import CryptocurrencyCard from "../components/Cryptocurrency/CryptocurrencyCard";

const Cryptocurrency = () => {
  return (
    <>
      <PageBanner
        pageTitle="Check Out Our Entire Coin Selection!"
        pageSubTitle="Novis is the easiest place to buy and sell cryptocurrency."
      />

      <CryptocurrencyCard />

      <div style={{ backgroundColor: "#f5f5f5" }}>
        <OurFeature title="How Do We Select Our Cryptocurrencies?" />
      </div>

      <RegisterAreaTwo title="Start Trading on Novis" />
    </>
  );
};

export default Cryptocurrency;
