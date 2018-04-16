import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

  const appliedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    appliedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    appliedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi I'm a React app</h1>
      <p className={appliedClasses.join(' ')}>This is really working</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons
        </button>
    </div>
  );
}

export default cockpit;
