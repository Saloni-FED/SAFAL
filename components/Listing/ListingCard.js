import React, { useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import { db } from "../../firebase/firebaseConfig"; // Import Firebase configuration
import { collection, addDoc } from "firebase/firestore";

import { toast } from "react-hot-toast";
const truncateTitle = (title, wordLimit) => {
  const words = title.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return title;
};

const ListingCard = ({ image, title, price, percentage, operation }) => {
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
      await addDoc(collection(db, "unlistedSharesContact"), formData);
      handleClose();
      toast.success("Form Submitted Successfully");
      console.log("Sucess");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <div className="card">
        <div className="image-fit">
          <img
            src={image}
            alt={title}
            width={50}
            height={50}
            style={{ width: "200px", height: "100px" }}
          />
        </div>
        <div style={{ width: "10rem" }}>
          <p className="card-title">{truncateTitle(title, 3)}</p>
          {/* <p
            style={{ fontSize: "15px", cursor: "pointer" }}
            className="card_p"
            onClick={handleOpen}
          >
            Price On Request
          </p> */}
          <p
            style={{ fontSize: "12px", color: "var(--optionalColor)" }}
          >{`(${operation})`}</p>
        </div>
      </div>

     
    </>
  );
};

export default ListingCard;
