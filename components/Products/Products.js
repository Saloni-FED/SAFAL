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
    { name: "IPO", icon: "/images/headphone1.png" },
    { name: "Commodity", icon: "/images/commodity (1).png" },
    { name: "Equity", icon: "/images/equity (1).png" },
    {
      name: "Currency",
      icon: "/images/rupee-sign.png",
    },
    {
      name: "Derivatives",
      icon: "/images/derivative1.png",
    },
    { name: "Portfolio Management", icon: "/images/suitcase (1).png" },
    { name: "Mutual Funds", icon: "/images/handshake.png" },
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
                  <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <img
                      src={product.icon}
                      alt={product.name}
                      width={100}
                      height={100}
                      className="product-icon"
                      style={{margin: "0 auto"}}
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
