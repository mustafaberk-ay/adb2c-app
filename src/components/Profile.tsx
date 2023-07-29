import React from 'react';
import { login, logout, getAccessToken } from '../adb2c/authService';

function Profile() {
  const handleLogin = async () => {
    await login();
  };

  const handleLogout = () => {
    logout();
  };

  const handleGetAccessToken = async () => {
    const token = await getAccessToken();
    console.log('Access token:', token);
  };

  return (
    <div>
      <h2>Welcome to your Profile!</h2>
      <button onClick={handleLogin}>Sign In</button>
      <button onClick={handleLogout}>Sign Out</button>
      <button onClick={handleGetAccessToken}>Get Access Token</button>
    </div>
  );
}

export default Profile;
