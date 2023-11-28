import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
const Homepage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const dummyListings = [
      {
        _id: 1,
        title: "Michael Jordan Jersey",
        price: 99.99,
        size: "M",
        pictures: ["../images/michaeljordanjersey.avif"],
      },
      
    ];

    setListings(dummyListings);
  }, []);

  return (
    <div>
    
      {/* Home Page Content */}
      <Container className="mt-4">
        <Row>
          <h1>Welcome to Hoop Haven - Your Ultimate Source for Jerseys, Shoes, and Apparel</h1>
          <p>
            Hoop Haven is your go-to online retail store for high-quality jerseys, stylish shoes, and trendy apparel.
            Explore our wide range of products and elevate your style with the latest and greatest in sports fashion.
          </p>
          <p>
            Whether you're a basketball enthusiast, a sneakerhead, or just looking for fashionable clothing, Hoop Haven has something for everyone.
            Browse our collections and discover the perfect items to showcase your passion for sports and fashion.
          </p>
        </Row>

        <Row>
          <Col md={4} style={{ paddingLeft: '0px', paddingRight: '10px' }}>
            <div className="text-center mt-4">
              <img src="../michaeljordanjersey.avif" className="img-fluid" alt="Michael Jordan Jersey" />
            </div>

            

          </Col>
        </Row>
      </Container>

     
    </div>
  );
};

export default Homepage;
