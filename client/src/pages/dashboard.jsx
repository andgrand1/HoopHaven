import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    // purchase History code
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Purchase History</h2>
      <ul>
        {purchaseHistory.map((purchase) => (
          <li key={purchase.id}>{purchase.productName} - {purchase.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
