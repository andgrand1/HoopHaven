import React, { useState } from 'react';

import { Container, Form, Button } from 'react-bootstrap'; 

const Login = () => {
  return (
    <div>
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
