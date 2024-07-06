import React from "react";
import AccountCreate from "../components/Common/AccountCreate";
import Faq from "../components/Faq/FaqContent";
import PageBanner from "../components/Common/PageBanner";
import PartnershipOptions from "../components/PartnerShips/PartnerShipsOptions";
import Platform from "../components/HomeOne/Platform";
const subbroker = () => {
  return (
    <div style={{width:"100%"}}>
        <PageBanner pageTitle='Partner with us'
        pageSubTitle='Join our family of more than 2261 business partners.'
        />
        <PartnershipOptions/>
        <Platform title={"What our community of sub-brokers has to say"}/>
        <div style={{width:"100%", overflow:"hidden"}}>
         <div className="contact-form">
        <div className="section-title">
          <h2>Have Questions ?</h2>
          <p>Feel Fee to Ask</p>
        </div>

        <form id="contactForm">
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
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group">
                <input
                  type="text"
                  name="msg_subject"
                  className="form-control"
                  id="msg_subject"
                  placeholder="Enter your subject"
                  required
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  cols="30"
                  rows="6"
                  required
                  placeholder="Enter Your Question..."
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
      
      <Faq />
    </div>
  );
};

export default subbroker;
