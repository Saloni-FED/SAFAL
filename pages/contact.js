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
          content="Get in touch with Safal Capital India Limited for all your stock broking and investment needs. Contact us for inquiries, support, and information on online trading, mutual funds, and portfolio management."
        />
        <meta
          name="keywords"
          content="contact Safal Capital, stock broking inquiries, investment support, online trading help, mutual fund information, portfolio management support, stock broker contact, financial services contact, Safal Capital customer support, investment inquiries"
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
