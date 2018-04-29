import React from 'react';
import classes from './Cockpit.css'
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

  const appliedClasses = [];
  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (props.personsLength <= 2) {
    appliedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    appliedClasses.push(classes.bold);
  }

  return (
    <Aux>
      <h1>{props.title}</h1>
      <p className={appliedClasses.join(' ')}>This is really working</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons
      </button>
      <button onClick={props.login}>Login</button>
    </Aux>
  );
}

export default cockpit;
