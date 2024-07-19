import React, {useEffect, useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Modal, Box, Button, Typography } from "@mui/material";
import { addDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import Link from "next/link";
import Calculator from "../components/Calculator/Calculator";
import Head from "next/head";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Insurance = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phoneNumber, subject } = formData;

    if (!name || !email || !phoneNumber || !subject) {
      toast("Please fill out all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "insurance"), formData);
      handleClose();
      toast.success("Form Submitted Successfully");
      setFormData({ name: "", email: "", phoneNumber: "", subject: "" });
      console.log("Sucess");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <>
      <Head>
        <title>Insurance - SAFAL CAPITAL (INDIA) LIMITED</title>
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
      <div className="container">
        <div className="blog-details-header row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="content">
              <a href="#" className="category">
                Term Insurance
              </a>
              <h1>Things to know before buying a term plan</h1>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="/images/ins.png" alt="image" />
              </div>
              <h3 style={{ marginTop: "3rem" }}>What is Term Insurance</h3>

              <p>
                Imagine a world where you could potentially buy a product that
                could replace you. Okay, not you precisely, because that would
                be a bit silly. But what if you had a replica version of
                yourself that could earn like you and make money like you.
                Wouldn’t you jump on that opportunity? Or maybe pay an annual
                fee just so you could hold on to this person? You probably
                would. And a term insurance product does just that. It is your
                financial replica and it comes alive when you die.
              </p>
              <p>
                Let me explain. When you buy a term insurance product, you pay a
                small fee every year to protect your downside. And in the event
                of your passing, the insurance company pays out a large sum of
                money to your family or your loved ones. Think — 1 Crore or 5
                Crore or even 10 Crore. Ideally, this money should replace you
                financially. It should support your family when you’re no longer
                the breadwinner. And unless you’ve deliberately misled your
                insurer whilst buying the policy, they will pay out the full
                amount the moment you die. Hell, even if you do mislead them,
                they have 3 years to uncover the fraud. If they don’t do it by
                then, they are mandated to pay out, no questions asked. So
                unless you commit suicide within one year of buying the policy
                or you died while committing a crime, your loved ones will get
                this money.
              </p>
              <p>
                And while the base product is simple enough to understand, we’ll
                address some of the key factors affecting a term insurance
                purchase in the next section.
              </p>
              <h3 style={{ marginTop: "3rem" }}>
                What is an ideal cover for your Term policy?
              </h3>
              <p>
                The first question should be obvious by now — How much money do
                you need to replace yourself financially?
              </p>
              <p>
                It’s a tough question and let’s be honest — It is a bit
                subjective as well. But there are a few key things you have to
                remember here. For starters, your expenses. If your lifestyle
                demands a certain level of spending you will need to keep it up
                if you don’t want your absence to be felt. So if you’re spending
                50,000 every month, your term insurance product should replace
                this income.
              </p>
            </div>
          </div>
          {/* <div className="col-lg-6 col-md-12">
            <div className="image">
              <img src="/images/blog/blog1.jpg" alt="image" />
            </div>
          </div> */}
        </div>

        {/* <div className="blog-details-desc">
          <div className="article-content">
            <h3>What is Term Insurance ?</h3>
          </div>
        </div> */}
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10rem",
          marginTop:"3rem"
        }}
      >
        <p
          className="default-btn"
          style={{ cursor: "pointer" }}
          onClick={handleOpen}
        >
          Get To Know More
        </p>
      </div>

      <>
        <div style={{ textAlign: "center", marginTop: "10rem" }}>
          <h3>"Secure Your Future Today"</h3>
          <h3>Calculate Your Coverage with Confidence</h3>
        </div>

        <Calculator />
        <div className="faq-area ptb-100" style={{ marginTop: "7rem" }}>
          <div className="container">
            <h2>FAQs</h2>
            <div className="faq-accordion">
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What is fixed deposits?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Fixed deposits are a type of financial instrument offered
                      by banks and non-banking financial companies that provides
                      investors with a higher rate of interest than a regular
                      savings account, until the given maturity date.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What’s an ideal policy duration?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      With a term insurance product, you keep paying your
                      premiums until you die or the policy lapses. You need to
                      decide the duration at the time of purchase, typically
                      aiming for a policy that lasts until your financial
                      obligations decrease significantly, often around the age
                      of 60 to 70.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How does a Life Stage Benefit help you?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      A life stage benefit allows you to increase your coverage
                      during major life events, such as marriage or having
                      children, providing flexibility to ensure your policy
                      remains adequate as your financial responsibilities grow.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      When the Insurer waives your premiums
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Some insurers offer a waiver of premium benefit if you
                      become permanently disabled or are diagnosed with a
                      critical illness, allowing you to keep your policy without
                      paying premiums during challenging times.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Extra cover if you die in an accident?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      An accidental death benefit provides an additional payout
                      if you die in an accident, offering extra financial
                      protection for your family on top of the base term cover.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Should you opt for a Terminal Illness Benefit?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      A terminal illness benefit provides a lump sum payout if
                      you are diagnosed with a terminal illness, allowing you to
                      access funds for treatment and other expenses during a
                      critical time.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Can you beat inflation with increasing cover?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      An increasing cover option ensures that your sum insured
                      grows each year by a fixed percentage, helping to
                      counteract inflation. However, premiums for such plans are
                      typically higher.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Should you decrease your cover as you grow older?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      As you grow older and your financial obligations decrease,
                      some insurers offer the option to reduce your cover, which
                      can also lower your premiums. This is useful when your
                      dependents are less financially reliant on you.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: "70%", md: "50%", lg: "400px" },
              bgcolor: "background.paper",
              borderRadius: "10px",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="modal-title"
              variant="h6"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              Know More About Insurance!!
            </Typography>
            <Box
              component="form"
              // noValidate
              autoComplete="off"
              sx={{ mt: 2 }}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  display: "block",
                  width: "100%",
                  margin: "8px 0",
                  padding: "8px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "0",
                  border: "none",
                  boxShadow: "0 0 2px rgba(0,0,0,0.1)",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
                style={{
                  display: "block",
                  width: "100%",
                  margin: "8px 0",
                  padding: "8px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "0",
                  border: "none",
                  boxShadow: "0 0 2px rgba(0,0,0,0.1)",
                }}
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                className="form-control"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                style={{
                  display: "block",
                  width: "100%",
                  margin: "8px 0",
                  padding: "8px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "0",
                  border: "none",
                  boxShadow: "0 0 2px rgba(0,0,0,0.1)",
                }}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  display: "block",
                  width: "100%",
                  margin: "8px 0",
                  padding: "8px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "0",
                  border: "none",
                  boxShadow: "0 0 2px rgba(0,0,0,0.1)",
                }}
              />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  sx={{
                    mt: 2,
                    backgroundColor: "var(--mainColor)",
                    color: "white",
                    ml: 10,
                    "&:hover": {
                      backgroundColor: "var(--optionalColor)",
                      color: "white",
                    },
                  }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  sx={{
                    mt: 2,
                    marginLeft: "10px",
                    backgroundColor: "var(--mainColor)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "var(--optionalColor)",
                      color: "white",
                    },
                  }}
                >
                  Submit
                </Button>
              </div>
            </Box>
          </Box>
        </Modal>
      </>
    </>
  );
};

export default Insurance;
