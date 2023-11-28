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
