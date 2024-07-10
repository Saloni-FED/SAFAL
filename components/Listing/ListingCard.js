import React from 'react';

const truncateTitle = (title, wordLimit) => {
  const words = title.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return title;
};

const ListingCard = ({ image, title, price, change, changePercent, days }) => {
  const truncatedTitle = truncateTitle(title, 2);

  return (
    <div className="card">
      <div className='image-fit'>
        <img src={image} width={50} height={50} style={{width:"200px", height:"100"}}/>
      </div>
      <div style={{width:"10rem"}}>
        <p className="card-title">{truncatedTitle}</p>
        <p className="">₹{price}</p>
        {/* <p className={`card-change ${change >= 0 ? 'positive' : 'negative'}`}>
          {change >= 0 ? '+' : '-'}{Math.abs(change)} ({changePercent}%)
        </p>
        <p className="card-days">{days}D</p> */}
      </div>
    </div>
  );
};

export default ListingCard;
