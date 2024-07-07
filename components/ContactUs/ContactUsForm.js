import React, { useState } from "react";
import { db } from "../../firebase/firebaseConfig"; // Adjust the import path according to your project structure
import { collection, addDoc } from "firebase/firestore";
import ContactInfo from "./ContactInfo";
import { toast} from "react-hot-toast";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    msg_subject: "",
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
      await addDoc(collection(db, "contacts"), formData);
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        msg_subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="contact-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-12 col-md-12">
            <ContactInfo />
          </div>

          <div className="col-xl-8 col-lg-12 col-md-12">
            <div className="maps">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46660.669043361966!2d-76.17429939609431!3d43.03529129888566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3b8019f2991%3A0x58d5929e21a62e5!2sDinosaur%20Bar-B-Que!5e0!3m2!1sen!2sbd!4v1593527523138!5m2!1sen!2sbd"></iframe>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>Get in Touch with Safal by submitting this form</p>
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
                  <input
                    type="text"
                    name="msg_subject"
                    className="form-control"
                    id="msg_subject"
                    placeholder="Enter your subject"
                    required
                    value={formData.msg_subject}
                    onChange={handleChange}
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
                    placeholder="Enter message..."
                    value={formData.message}
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
    </div>
  );
};

export default ContactUsForm;
