import React, { useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
// import { db } from "../../firebase/firebaseConfig"
import { collection, addDoc } from "firebase/firestore";
import up from "../../public/up.png";
import down from "../../public/down.jpg"
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
      console.log("Success");
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
          <p
            style={{ fontSize: "12px", color: "var(--optionalColor)" }}
          >
          
          </p>
          <div>
            {operation === "+" ? (
              <img src="/up.png" alt="Up" width={30} height={20} />
            ) : (
              <img src="/down2.jpg" alt="Down" width={30} height={20} />
            )}
          </div>
        </div>
      </div>

      {/* Modal code (if needed) */}
      {/* <Modal open={open} onClose={handleClose}>
        <Box>
          <Typography variant="h6">Submit Your Details</Typography>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Box>
      </Modal> */}
    </>
  );
};

export default ListingCard;
