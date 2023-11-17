import React, { useState, useEffect } from 'react';

const Homepage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <h1>Active Listings</h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>{listing.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
