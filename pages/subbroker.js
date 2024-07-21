import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Faq from "../components/Faq/FaqContent";
import PageBanner from "../components/Common/PageBanner";
import PartnershipOptions from "../components/PartnerShips/PartnerShipsOptions";
import Platform from "../components/HomeOne/Platform";
import { toast } from "react-hot-toast";
import SubTable from "../components/SubTable";
import FeatureCards from "../components/SubBRokerFeature";
import Head from "next/head";
import FeedBack from "../components/HomeOne/FeedBack";

import { Modal, Box, Button, Typography } from "@mui/material";
// import { toast } from "react-hot-toast"

const Subbroker = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    question: "",
    // message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      setOpen(false);

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
      <Head>
        <title>SafalCapital - Sub Broker</title>
        <meta
          name="description"
          content="Join Safal Capital India Limited as a sub-broker and become part of a leading stock broking company in India. Enjoy benefits and profits from online stock & commodity trading, mutual fund investment, equity trading & portfolio management services."
        />
        <meta
          property="og:title"
          content="Become a Sub-Broker with Safal Capital"
        />
        <meta
          property="og:description"
          content="Join Safal Capital's family of more than 2261 business partners as a sub-broker. Enjoy great benefits and profits from stock market trading and investment services."
        />
        <meta property="og:image" content="/images/office.png" />
        <meta
          property="og:url"
          content="https://safal-theta.vercel.app/subbroker"
        />
        <meta
          name="keywords"
          content="Safal Capital sub-broker, stock market sub-broker India, become a sub-broker, stock trading partner, investment services, online stock trading, equity trading, portfolio management"
        />
        <link rel="icon" href="/image/ico.png" />
      </Head>
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
              // target=""
              // href="/contact"
              className="default-btn"
              style={{
                marginTop: "4rem",
                marginBottom: "3rem",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            >
              <i className="bx bxs-contact"></i> Get Started
            </a>
          </div>
        </div>

        <div
          style={{
            marginTop: "3rem",

            padding: "6rem 1rem",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Checkout our Profits</h3>

          <FeatureCards />
        </div>

        {/* <Platform title={} /> */}

        <div>
          <FeedBack />
        </div>
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

      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-title"
        // aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "70%", md: "50%", lg: "600px" },
            bgcolor: "background.paper",
            borderRadius: "10px",
            boxShadow: 24,
            p: 4,
          }}
        >
          {/* <Typography>Connect With Us</Typography> */}
          <div className="contact-form" style={{ marginTop: "4px" }}>
            <div className="section-title">
              <h2>Get Started With Us!!</h2>
              <p>Feel Free to Connect</p>
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
                  {/* <button type="submit" className="default-btn" >
                     Cancel
                  </button> */}
                </div>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Subbroker;
