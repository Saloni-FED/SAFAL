import React, { useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import { db } from "../../firebase/firebaseConfig"; // Import Firebase configuration
import { collection, addDoc } from "firebase/firestore";

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
      toast.success("Form Submitted Successfully")
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
          <p
            style={{ fontSize: "15px", cursor: "pointer" }}
            className="card_p"
            onClick={handleOpen}
          >
            Price On Request
          </p>
          <p
            style={{ fontSize: "12px", color: "var(--optionalColor)" }}
          >{`(${operation} ${(price / 100).toFixed(2)}) (${percentage}%)`}</p>
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
            Contact
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
            <Button
              type="submit"
              sx={{
                mt: 2,
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
            <Button
              sx={{
                mt: 2,
                backgroundColor: "var(--mainColor)",
                color: "white",
                ml: 2,
                "&:hover": {
                  backgroundColor: "var(--optionalColor)",
                  color: "white",
                },
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ListingCard;
