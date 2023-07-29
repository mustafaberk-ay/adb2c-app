import React from 'react';
import {Route, Routes} from 'react-router-dom'
import { login, logout, getAccessToken } from './adb2c/authService'; // Import the authService you created
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
  );
}

export default App;
