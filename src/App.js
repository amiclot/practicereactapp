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
    otherState: 'some other shit'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // this.state.persons[0].name = 'Bum'; (DONT DO THIS)
    this.setState({
      persons: [
      {name: newName, age: 28},
      {name: 'Bruh', age: 88},
      {name: 'Cita', age: 1}
    ]
  })
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

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
        <h1>Hi, blah blah</h1>
        <p>This works</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Bling Blow')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          //bind is better for performance
          click={this.switchNameHandler.bind(this, 'Crumb')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>

        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
