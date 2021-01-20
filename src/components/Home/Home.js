import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className="homePage">
      <Navbar />
      <div className="menu">
        <Link to="/profile">Profile</Link>
        <Link to="/repo">Repository</Link>
      </div>
    </div>
  );
};

export default Home;