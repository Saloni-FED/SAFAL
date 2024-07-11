import React, { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Faq from "../components/Faq/FaqContent";
import PageBanner from "../components/Common/PageBanner";
import PartnershipOptions from "../components/PartnerShips/PartnerShipsOptions";
import Platform from "../components/HomeOne/Platform";
import { toast } from "react-hot-toast";
import SubTable from "../components/SubTable";
import FeatureCards from "../components/SubBRokerFeature";
// import { toast } from "react-hot-toast"

const Subbroker = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    question: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      await addDoc(collection(db, "subBroker"), formData);
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        msg_subject: "",
        question: "",
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
    <PageBanner
    pageTitle="Partner with us"
    pageSubTitle="Join our family of more than 2261 business partners."
  />
    <div style={{ width: "100%" }}>
     
      {/* <PartnershipOptions /> */}
      <div className="sub_table">
        <h1>Do you have what it takes to be an entrepreneur?</h1>
        <p>Select from any of these partnership options</p>
        <SubTable />
        <div className="option-item  d-lg-block">
          <a
            target="_blank"
            href="https://kyc.swastika.co.in/customer/login/6FDD55F1C5"
            className="default-btn"
            style={{ marginTop: "4rem", marginBottom: "3rem" }}
          >
            <i className="bx bxs-contact"></i> Get Started
          </a>
        </div>
      </div>

      <div style={{ marginTop: "3rem", marginBottom: "10rem", padding:"6rem 1rem" }}>
        <h3 style={{ textAlign: "center" }}>Checkout our Profits</h3>

        <FeatureCards />
      </div>

      <Platform title={"What our community of sub-brokers has to say"} />
      {/* <FeedBack /> */}
      <div style={{ width: "100%", overflow: "hidden" }}>
        <div className="contact-form">
          <div className="section-title">
            <h2>Have Questions ?</h2>
            <p>Feel Free to Ask</p>
          </div>

          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                    placeholder="Eg: Sarah Taylor"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    required
                    placeholder="hello@sarah.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="phone_number"
                    className="form-control"
                    id="phone_number"
                    required
                    placeholder="Enter your phone number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    pattern="[0-9]+"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-group">
                  <textarea
                    type="text"
                    name="question"
                    className="form-control"
                    id="question"
                    placeholder="Enter your Question"
                    required
                    value={formData.question}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12">
                <button type="submit" className="default-btn">
                  <i className="bx bxs-plane-art"></i> Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div style={{ padding: "0 2rem" }}>
        <Faq />
      </div>
    </div>
    </>
  );
};

export default Subbroker;
