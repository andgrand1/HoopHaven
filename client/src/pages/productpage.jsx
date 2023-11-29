import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './style.css'

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
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
      

        const result = await response.json();
        console.log('Server response:', result);
        setProducts(result.data.listings);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures the useEffect runs only once

  // Hardcoded product
  const hardcodedProduct = {
    _id: '123',
    name: 'Kobe 6 Grinches',
    price: 799.99,
    description: 'The Nike Zoom Kobe 6 ‘Grinch’ launched Christmas Day in 2010, featuring a Green Apple colorway that calls to mind to the Dr. Seuss character with a penchant for ruining everyone’s famous December holiday. However the real inspiration behind this colorway is the deadly Green Mamba snake, with green scales and deep black eyes which can be seen on the scaly Mamba-inspired texture on the upper, with a contrasting black Swoosh. Red accents tie together the Christmas theme, highlighted with Kobe Bryant’s logo in red atop the tongue.',
    category: 'Demo',
    gender: 'Men',
  };

  // Adding the hardcoded product to the products state
  const updatedProducts = [hardcodedProduct, ...products];

  if (updatedProducts.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Product Page Content */}
      <Container className="mt-5">
        <h1 className="text-center">Explore Our Products</h1>

        {/* Product List */}
        <Row className="mt-4">
          {updatedProducts.map((product) => (
            <Col key={product._id} md={4}>
              <Card>
                <Card.Img variant="top" src="../assets/images/s-l1200.jpeg" style={{ maxWidth: '40%', height: '40%' }} alt={product.name} />
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
