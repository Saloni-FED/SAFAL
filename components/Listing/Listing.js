import React from 'react';
import ListingCard from './ListingCard';

const data = [
  {
    image: '/images/history/history1.png',
    title: 'A V Thomas & Co. Limited Unlisted Shares',
    price: 12500,
    change: 0,
    changePercent: 0,
    days: 15,
  },
  {
    image: '/images/history/history1.png',
    title: 'ACS Technologies Limited Unlisted Shares',
    price: 46,
    change: 0,
    changePercent: 0,
    days: 15,
  },
  {
    image: '/images/history/history1.png',
    title: 'ACS Technologies Limited Unlisted Shares',
    price: 46,
    change: 0,
    changePercent: 0,
    days: 15,
  },
  {
    image: '/images/history/history1.png',
    title: 'ACS Technologies Limited Unlisted Shares',
    price: 46,
    change: 0,
    changePercent: 0,
    days: 15,
  },
  {
    image: '/images/history/history1.png',
    title: 'ACS Technologies Limited Unlisted Shares',
    price: 46,
    change: 0,
    changePercent: 0,
    days: 15,
  },
  {
    image: '/images/history/history1.png',
    title: 'ACS Technologies Limited Unlisted Shares',
    price: 46,
    change: 0,
    changePercent: 0,
    days: 15,
  },
];

const Listing = () => {
  return (
    <div className="container">
      <div>
        <h2 style={{textAlign:"center", marginTop:"1rem", marginBottom:"2rem"}}>Unlisted Shares</h2>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="grid">
        {data.map((item, index) => (
          <ListingCard
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            change={item.change}
            changePercent={item.changePercent}
            days={item.days}
          />
        ))}
      </div>
    </div>
  );
};

export default Listing;
