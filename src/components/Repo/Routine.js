import React from 'react';
import routine from '../../assets/icons/routine.svg';

const Routine = () => {
  return (
    <div className="routine-container">
      <div className="routine-icon">
        <img src={routine} alt="" />
        <p>
          Routine
        </p>
      </div>
      <div className="nextClass-container">
        <div className="nextClass-header">
          <h3>Next Class</h3>
          <h3><small>Time Left: </small> <span>2:30:41</span></h3>
        </div>
        <div className="nextClass-content">
          <h4 className="class-name">Physics Solve Class</h4>
          <h4 className="class-time">2:00 PM</h4>
          <p className="class-date">19 Apr 2020 (Sunday)</p>
          <button className="join-now">Join Now</button>
        </div>
      </div>
      div
    </div>
  );
};

export default Routine;