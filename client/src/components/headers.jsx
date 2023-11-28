import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="brand">Hoop Haven</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/mylistings">My Listings</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/signup">SignUp</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Additional styling */}
      <style>{`
        .navbar {
          border-bottom: 2px solid #ffffff;
          padding: 10px 0;
        }

        .brand {
          font-size: 2rem;
          font-weight: bold;
          margin-right: 20px; /* Add margin to separate from the links */
        }

        .navbar-nav .nav-link {
          padding: 10px 15px;
          border: 1px solid #ffffff;
          margin: 0 5px;
        }

        .navbar-toggler-icon {
          border: 1px solid #ffffff;
        }
      `}</style>
    </Navbar>
  );
};

export default Header;