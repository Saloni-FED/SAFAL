import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
const Products = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      stopOnMouseEnter: true,
      stopOnInteraction: false,
      speed: 0.5,
    }),
  ]);

  const products = [
    { name: "BPO", icon: "/images/allNewImages/products/headphones.png" },
    { name: "Commodity", icon: "/images/allNewImages/products/commodity.png" },
    { name: "Equity", icon: "/images/allNewImages/products/equity.png" },
    {
      name: "Currency",
      icon: "/images/allNewImages/products/rupee-indian.png",
    },
    {
      name: "Derivatives",
      icon: "/images/allNewImages/products/derivatives.png",
    },
    { name: "Management", icon: "/images/allNewImages/products/suitcase.png" },
    { name: "Mutual Funds", icon: "/images/allNewImages/public-relation.png" },
    // { name: "Equity", icon: "/images/allNewImages/public-relation.png" },
    // { name: "Equity", icon: "/images/allNewImages/public-relation.png" },
  ];

  return (
    <div className="comp_product">
      <div style={{textAlign: "center", paddingBottom:"3rem"}}>
        <h3 className="">Wide range of products.</h3>
        <p>
          Wide range of products to suit your investment requirements Commodity
          Derivatives Currency Equity
        </p>
      </div>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {products.map((product, i) => (
              <div className="embla__slide" key={i}>
                <div className="embla__slide__number">
                  <div>
                    <img
                      src={product.icon}
                      alt={product.name}
                      width={100}
                      height={100}
                      className="product-icon"
                    />
                    <p className="para_embla">{product.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="logos">
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
      </div> */}
    </div>
  );
};

export default Products;
