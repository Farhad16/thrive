import React, { useEffect } from 'react';
import routine from '../../assets/icons/routine.svg';
import classIcon from '../../assets/icons/classIcon.svg';
import arrow from '../../assets/icons/arrow.svg';
import { connect } from 'react-redux';
import { fetchRepos } from '../../redux/repo/repoActions';

const Routine = ({ loading, routines, fetchRepos }) => {

  useEffect(() => {
    fetchRepos()
  }, [])

  const returnDate = mydate => {
    const givenDate = mydate.toString().split('T')[0];
    const dateInString = new Date(givenDate);
    const onlyDate = dateInString.getDate();
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const onlyMonth = dateInString.getMonth();
    const dayAndMonth = `${onlyDate} ${months[onlyMonth]}`
    return dayAndMonth;
  }

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
      <div className="first-layer">
        <div className="second-layer">
          <div className="third-layer">
            <h2>MAY 2020</h2>
          </div>
        </div>
      </div>

      {
        routines.map(routine => <div className="classes" key={routine.id}>
          <div className="date">
            <span>
              {returnDate(routine.created_at)}
            </span>
          </div>
          <div className="schedule">
            <div className="subject-time">
              <p>{routine.name}</p>
              <p>{routine.language}</p>
              <p>2:00pm - 3:30pm</p>
            </div>
            <div className="classOrExam">
              <img src={arrow} alt="" />
              <div className="class-exam">
                <img src={classIcon} alt="" />
                <small>Class</small>
              </div>
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.users.loading,
    routines: state.repos.routine,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRepos: () => dispatch(fetchRepos()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routine)
