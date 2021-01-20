import React, { useEffect } from 'react';
import homeIcon from '../../assets/icons/home.svg';
import editIcon from '../../assets/icons/editIcon.svg';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/user/userActions';
import { Link } from 'react-router-dom';

const UserProfile = ({ loading, userData, fetchUser }) => {

  useEffect(() => {
    fetchUser()
  }, [])

  console.log(userData);

  return (
    <div className="userProfile">
      <div className="showPath">
        <img src={homeIcon} alt="" />
        <p>
          <span className="homeText"><Link to="home">Home</Link></span>&#x3e;<strong className="profileText">Profile</strong>
        </p>
      </div>
      <img className="profile-pic" src={userData.avatar_url} alt="" />
      <button className="edit-btn">
        <img src={editIcon} alt="" />
        Edit
      </button>
      <h5 className="name">{userData.name}</h5>
      <div className="about">
        <p>{userData.type}</p>
        <p>{userData.location}</p>
        <p>{userData.company}</p>
      </div>
      <div className="email-pass">
        <h5>Email:
          <span>
            {userData.email ? userData.email : 'There is no email'}
          </span>
        </h5>
        <button className="change-btn">Change</button>
      </div>
      <div className="email-pass">
        <h5>Password: <span>{userData.password ? userData.password : '***********'}</span></h5>
        <button className="change-btn">Change</button>
      </div>
      <button className="logout-btn">
        Log Out
      </button>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    loading: state.users.loading,
    userData: state.users.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile)
