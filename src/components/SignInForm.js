// src/components/SignInForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Modal.css'; // Import CSS for modal styling

const SignInForm = ({ closeModal, openLogin }) => {
  const [name, setName] = useState('');
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission

    try {
      const response = await axios.post('http://localhost:8080/register', {
        name: name,
        emailAddress: emailAddress,
        password: password,
      });

      if (response.status === 200) {
        alert('You have signed in successfully!');
        closeModal(); // Optionally close the modal after sign in
      } else {
        alert('An error occurred during registration. Please try again.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred during registration. Please try again.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <button type="submit">Create account</button>
          <label>
            <input type="checkbox" required />
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </form>
        <p>Already have an account? <a href="#login" onClick={() => { closeModal(); openLogin(); }}>Login here</a></p>
      </div>
    </div>
  );
};

export default SignInForm;