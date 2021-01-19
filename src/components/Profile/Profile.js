import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Profile.css';
import UserProfile from './UserProfile';

const Profile = () => {
  return (
    <div className="profile">
      <Navbar />
      <UserProfile />
    </div>
  );
};

export default Profile;