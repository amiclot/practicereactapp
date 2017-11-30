import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Bruh', age: 88},
      {name: 'Cita', age: 199}
    ],
    otherState: 'some other shit',
    showPersons: false

  }


  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      {name: "Max", age: 28},
      {name: event.target.value, age: 88},
      {name: 'Cita', age: 1}
    ]
  })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //either true or false
    //converts to opposite of what it currently is with !doesshow
    this.setState({
      showPersons: !doesShow
  })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}/>
            })}
          </div>
        );
    }

    return (
      <div className="App">
        <h1>Hi, blah blah</h1>
        <p>This works</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
