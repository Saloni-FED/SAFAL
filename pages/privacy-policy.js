import PageBanner from '../components/Common/PageBanner';
import RegisterArea from '../components/Common/RegisterArea';
import PrivacyPolicyContent from '../components/PrivacyPolicy/PrivacyPolicyContent';

const PrivacyPolicy = () => {
  return (
    <>
      <PageBanner
        pageTitle='Privacy Policy'
        pageSubTitle='Novis is the easiest place to buy and sell cryptocurrency.'
      />

      <PrivacyPolicyContent />
      
      <RegisterArea ctaImage='/images/man.png' />
    </>
  );
};

export default PrivacyPolicy;
