import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListingItem from "../components/ListingItem"; // Import your ListingItem component

const Homepage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    //todo
  }, []);

  return (
    <Container>
      <h1 className="my-4">Active Listings</h1>
      <Row>
        {listings.map((listing) => (
          <Col key={listing._id} md={4} className="mb-4">
            <ListingItem
              title={listing.title}
              price={listing.price}
              size={listing.size}
              pictures={listing.pictures}
              isHomePage={true}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Homepage;
