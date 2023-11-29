import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    // Check login status
    const userIsLoggedIn = checkUserLoginStatus();

    setIsLoggedIn(userIsLoggedIn);

    if (userIsLoggedIn) {
      // Fetch user's purchase history if logged in
      // This is where you would make a request to your server to get the user's data
      // For demonstration purposes, using dummy data
      const dummyPurchaseHistory = [
        { id: 1, productName: 'Product 1', date: '2023-01-01' },
        { id: 2, productName: 'Product 2', date: '2023-01-15' },
      ];

      setPurchaseHistory(dummyPurchaseHistory);
    }
  }, []);

  const checkUserLoginStatus = () => {
    // You would typically implement more robust authentication logic here,
    // such as checking a token, session, or making a server request
    return localStorage.getItem('isLoggedIn') === 'true';
  };

  return (
    <div>
      {/* Dashboard Page Content */}
      <Container className="mt-5">
        <h1 className="text-center">Dashboard</h1>

        {isLoggedIn ? (
          // If logged in, display purchase history
          <>
            <h2 className="mt-4">Purchase History</h2>
            <Row className="mt-3">
              {purchaseHistory.map((purchase) => (
                <Col key={purchase.id} md={4}>
                  <Card>
                    {/* Assuming you have images for each product */}
                    <Card.Img variant="top" src={`images/${purchase.productName}.jpeg`} alt={purchase.productName} />
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
          </>
        ) : (
          // If not logged in, display a message
          <p className="text-center mt-4">Please log in to view your dashboard.</p>
        )}
      </Container>

      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default Dashboard;
