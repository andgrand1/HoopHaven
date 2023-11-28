import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        query {
          listings {
            _id
            name
            price
            description
            category
            gender
            // Add other fields as needed
          }
        }
      `;

      try {
        const response = await fetch('http://localhost:3001/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();
        setProducts(result.data.listings);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Product Page Content */}
      <Container className="mt-5">
        <h1 className="text-center">Explore Our Products</h1>

        {/* Product List */}
        <Row className="mt-4">
          {products.map((product) => (
            <Col key={product._id} md={4}>
              <Card>
                <Card.Img variant="top" src="jordan11.jpeg" alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price: ${product.price}</li>
                    <li className="list-group-item">Category: {product.category}</li>
                    <li className="list-group-item">Gender: {product.gender}</li>
                   
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default ProductPage;

