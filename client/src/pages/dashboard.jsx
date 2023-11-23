import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    // Purchase History code
    // Fetch or set purchase history data
    const dummyPurchaseHistory = [
      { id: 1, productName: 'Product 1', date: '2023-01-01' },
      // Add more purchase history items as needed
    ];

    setPurchaseHistory(dummyPurchaseHistory);
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Hoop Haven</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/mylistings">My Listings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">SignUp</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Dashboard Page Content */}
      <Container className="mt-5">
        <h1 className="text-center">Dashboard</h1>

        {/* Purchase History */}
        <h2 className="mt-4">Purchase History</h2>
        <Row className="mt-3">
          {purchaseHistory.map((purchase) => (
            <Col key={purchase.id} md={4}>
              <Card>
                <Card.Img variant="top" src="jordan11.jpeg" alt={purchase.productName} />
                <Card.Body>
                  <Card.Title>{purchase.productName}</Card.Title>
                  <Card.Text>
                    Purchase Date: {purchase.date}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default Dashboard;
