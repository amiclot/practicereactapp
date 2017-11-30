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
      {id:'sgjsahzb', name: "Max", age: 28},
      {id:'agdjda', name: event.target.value, age: 88},
      {id:'sdlhkla', name: 'Cita', age: 1}
    ]
  })
  }

  deletePersonHandler = (personIndex) => {
    //add slice to make it better
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    //equivalent to slice 
    //spread operator - make list of elements
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
              click={() => this.deletePersonHandler(index)}
              key={person.id} />
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
