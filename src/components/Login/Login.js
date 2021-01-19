import React, { useState } from 'react';
import './Login.css';
import newton from '../../assets/icons/newton.svg'
import book from '../../assets/images/book.svg'
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({})
  const { handleSubmit } = useForm();
  const history = useHistory();

  const handleBlur = (e) => {
    const newInfo = { ...loginData }
    newInfo[e.target.name] = e.target.value;
    setLoginData(newInfo)
  }

  const onSubmit = (data, e) => {
    if (loginData.id === 'admin' && loginData.pin === 'admin') {
      alert('Successfully login');
      history.replace("/profile")
      e.target.reset();
    } else {
      alert("Id and Pin must be 'admin'");
    }
    e.preventDefault();
  }

  return (
    <div className="login-container">
      <img className="img-newton" src={newton} alt="newton" />
      <img className="img-book" src={book} alt="book" />
      <p className="note">
        Please find the ID and PIN from SMS. Don’t share your ID or PIN with anyone.
      </p>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">
          ID <br />
          <input type="text" name="id" onBlur={handleBlur} required /><br />
        </label>
        <label htmlFor="">
          PIN <br />
          <input type="text" name="pin" onBlur={handleBlur} required /><br />
        </label>
        <button className="login-btn" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;