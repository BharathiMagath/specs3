import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Modal.css'; // Import CSS for modal styling

const LoginForm = ({ closeModal, openSignUp }) => {
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission

    try {
      // Fetch all users
      const response = await axios.get('http://localhost:8080/getuser');
      const users = response.data;

      // Find user by email
      const user = users.find(user => user.emailAddress === emailAddress);

      console.log('Entered Password:', password);
      console.log('Stored Password:', user ? user.password : 'User not found');

      if (user && user.password === password) {
        alert('Successfully logged in!');
        closeModal(); // Optionally close the modal after logging in
      } else {
        alert('Incorrect email or password.');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      alert('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            value={emailAddress}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="#sign-up" onClick={() => { closeModal(); openSignUp(); }}>Sign Up</a></p>
      </div>
    </div>
  );
};

export default LoginForm;