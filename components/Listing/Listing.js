import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { Modal, Box, Button, Typography } from "@mui/material";
import { addDoc } from "firebase/firestore";
import { toast } from "react-hot-toast"
const Listing = () => {
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
      setFormData({ name: "", email: "", phoneNumber: "", subject: "" });
      console.log("Sucess");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchPartners = async () => {
    try {
      const contactsRef = collection(db, "unlistedShares");
      const snapshot = await getDocs(contactsRef);
      const contactsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(contactsList);
      setProducts(contactsList);
    } catch (error) {
      console.error("Error fetching partners:", error);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div>
        <h2
          style={{
            textAlign: "center",
            marginTop: "1rem",
            // marginBottom: "2rem",
          }}
        >
          Unlisted Shares
        </h2>
        {/* <p onClick={handleOpen} className="category">Price On Request</p> */}
        <div style={{textAlign:'center',   marginBottom: "2rem", }}>
          <a
            className="category"
            onClick={handleOpen}
            style={{ color: "var(--mainColor)", cursor:"pointer" }}
          >
            Price On Request
          </a>
        </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <ListingCard
              key={index}
              image={item.imageUrl}
              title={item.name}
              price={item.changePrice}
              percentage={item.changePercentage}
              operation={item.operation}
            />
          ))
        ) : (
          <p
            style={{
              textAlign: "center",
              marginTop: "2rem",
              gridColumn: "span 2",
            }}
          >
            No Shares Found!
          </p>
        )}
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
            Know More About Unlisted Shares!!
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
    </div>
  );
};

export default Listing;
