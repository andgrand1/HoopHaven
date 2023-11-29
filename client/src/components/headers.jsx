import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../pages/style.css'; 
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="pb-2 pt-2">
      <Container>
        <Navbar.Brand href="/" className="mr-4">
          <h1 className="mb-0">Hoop Haven</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/productpage">Products</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/signup">SignUp</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
};



export default Header;

