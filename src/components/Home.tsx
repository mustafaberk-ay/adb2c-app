import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <p>This is the home page of your app. Users can access this page without signing in.</p>
      <Link to='/profile'>Go to profile page</Link>
    </div>
  );
}

export default Home;
