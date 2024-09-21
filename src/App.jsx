// src/App.jsx
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function App() {
  const handleSuccess = credentialResponse => {
    console.log('Success:', credentialResponse);
    // Handle credentialResponse
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <div>
      <h1>Google OAuth with React and Vite</h1>
      <GoogleLogin onSuccess={console.log("Hurrraaaaayyy")} onError={handleError} />
    </div>
  );
}

export default App;
