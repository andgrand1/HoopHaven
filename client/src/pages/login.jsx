import React, { useState } from 'react';

import { Container, Form, Button } from 'react-bootstrap'; 

const Login = () => {
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

      {/* Login Page Content */}
      <Container className="mt-5">
        <h1 className="text-center">Login to Hoop Haven</h1>

        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>

          <Form.Group className="mb-3 form-check">
            <Form.Check type="checkbox" label="Remember me" id="rememberMe" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>

        <p className="mt-3">Don't have an account? <a href="/signup">Sign up here</a></p>
      </Container>
    </div>
  );
};

export default Login;
