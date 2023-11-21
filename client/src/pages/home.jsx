import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListingItem from "../components/ListingItem"; // Import your ListingItem component

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

      {/* Active Listings */}
      <Container className="my-4">
        <h1>Active Listings</h1>
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
    </div>
  );
};

export default Homepage;
