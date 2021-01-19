import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Repo.css';
import Routine from './Routine';

const Repo = () => {

  const returnDate = mydate => {
    console.log(mydate);
    const givenDate = new Date(mydate);
    return givenDate.toDateString()
  }

  const dateArray = [
    '2020-03-21',
    '2020-04-23',
    '2020-05-25',
    '2020-07-11',
  ]
  return (
    <div className="repo">
      <Navbar />
      <Routine />
    </div>
  );
};

export default Repo;