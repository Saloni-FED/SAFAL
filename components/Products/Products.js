import React from "react";
// import './Products.css'; // Ensure you import the CSS file

const Products = () => {
  const products = [
    { name: "BPO", icon: "/images/allNewImages/products/headphones.png" },
    { name: "Commodity", icon: "/images/allNewImages/products/commodity.png" },
    { name: "Equity", icon: "/images/allNewImages/products/equity.png" },
    { name: "Currency", icon: "/images/allNewImages/products/rupee-indian.png" },
    { name: "Derivatives", icon: "/images/allNewImages/products/derivatives.png" },
    { name: "Management", icon: "/images/allNewImages/products/suitcase.png" },
    { name: "Equity", icon: "/images/allNewImages/public-relation.png" },
    { name: "Equity", icon: "/images/allNewImages/public-relation.png" },
    { name: "Equity", icon: "/images/allNewImages/public-relation.png" },
  ];

  return (
    <div className="comp_product">
      <h5>
        Wide range of products to suit your investment requirements Commodity
        Derivatives Currency Equity
      </h5>
      <div className="logos">
        <div className="logos-wrapper">
          <div className="logos-slide">
            {products.map((product, index) => (
              <div className="product-item" key={index}>
                <img
                  src={product.icon}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="product-icon"
                />
                <p>{product.name}</p>
              </div>
            ))}
          </div>

          <div className="logos-slide">
            {products.map((product, index) => (
              <div className="product-item" key={index}>
                <img
                  src={product.icon}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="product-icon"
                />
                <p>{product.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
