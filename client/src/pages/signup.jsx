import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from "../../utils/mutations";


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createUser] = useMutation(CREATE_USER);

  const handleSignup = async () => {
    try {
      const { data } = await createUser({
        variables: {
          email,
          password,
        },
      });

      
      if (data && data.createUser) {
        console.log('Signup successful');
        // Redirect or perform any action after successful signup
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">Sign Up for Hoop Haven</h1>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleSignup}>
          Sign Up
        </Button>
      </Form>

      <p className="mt-3">
        Already have an account? <a href="login.html">Log in here</a>
      </p>
    </Container>
  );
};

export default Signup;
