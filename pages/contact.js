import PageBanner from "../components/Common/PageBanner";
import ContactUsForm from "../components/ContactUs/ContactUsForm";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - SAFAL CAPITAL (INDIA) LIMITED</title>
        <meta
          name="description"
          content="Safal Capital India Limited is a leading stock broking company in India which provide online stock & commodity trading, mutual fund investment, equity trading & portfolio management services and many more."
        />
        <meta
          name="keywords"
          content="online mutual fund investment, demat account, future and options trading, online share trading, stock broking company, share trading company, stock broker in india, stock broker in gujarat, stock broker in madhya pradesh, stock broker in ahmedabad, safal capital"
        />
        <link rel="canonical" href="http://safalcapital.in/ContactUs.aspx" />
      </Head>
      <PageBanner
        pageTitle="Contact Us"
        pageSubTitle="Contact us with your details & ready to start with us."
      />

      <ContactUsForm />
    </>
  );
};

export default Contact;
