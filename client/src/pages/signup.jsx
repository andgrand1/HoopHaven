import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSignup = async () => {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        
        console.log('Signup successful');
        history.push('/dashboard'); 
      } else {
        
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }

  };

  return (
    <div>
      <h1>Signup</h1>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
