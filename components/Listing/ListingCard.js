import React from 'react';

const ListingCard = ({ image, title, price, change, changePercent, days }) => {
  return (
    <div className="card">
      <div className='image-fit'>
        <img src={image} width={100} height={100}/>
      </div>
      <div>
      <p className="card-title">{title}</p>
        <p className="card-price">₹{price}</p>
        {/* <p className={`card-change ${change >= 0 ? 'positive' : 'negative'}`}>
          {change >= 0 ? '+' : '-'}{Math.abs(change)} ({changePercent}%)
        </p>
        <p className="card-days">{days}D</p> */}
      </div>
      
    </div>
  );
};

export default ListingCard;
