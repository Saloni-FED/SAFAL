import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const Listing = () => {
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
            marginBottom: "2rem",
          }}
        >
          Unlisted Shares
        </h2>
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
    </div>
  );
};

export default Listing;
