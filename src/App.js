import React, { Component } from 'react';
import classes from './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 'max1', name: 'Max', age: 28 },
      { id: 'manu2', name: 'Manu', age: 29 },
      { id: 'stephanie3', name: 'Stephanie', age: 26 }
    ],

    otherState: 'some other value',

    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>  p.id === id);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons})
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              key={person.id}
              click={this.deletePersonHandler}
              name={person.name}
              age={person.age}
              changed={event => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const appliedClasses = [];

    if(this.state.persons.length <= 2) {
      appliedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      appliedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi I'm a React app</h1>
        <p className={appliedClasses.join(' ')}>This is really working</p>
        <button
          className={btnClass}
          onClick ={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
