import PageBanner from "../components/Common/PageBanner";
import RegisterArea from "../components/Common/RegisterArea";
import AppDownload from "../components/Common/AppDownload";
import RegisterAreaTwo from "../components/Common/RegisterAreaTwo";
import BeYourOwnBank from "../components/Wallet/BeYourOwnBank";
import WalletAreaTabs from "../components/Wallet/WalletAreaTabs";

const Wallet = () => {
  return (
    <>
      <PageBanner
        pageTitle="Cryptocurrency Wallet"
        pageSubTitle="Novis is the easiest place to buy and sell cryptocurrency"
      />

      <BeYourOwnBank />

      <RegisterArea
        bgGradient="bg-gradient-image"
        blackText="black-text"
        ctaImage="/images/man-with-ipad.png"
      />

      <WalletAreaTabs />

      <AppDownload />

      <RegisterAreaTwo title="We Fixed The Dollar" />

      <RegisterArea ctaImage="/images/man.png" />
    </>
  );
};

export default Wallet;
