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

  switchNameHandler = () => {
    // console.log('was clicked');
    // this.state.persons[0].name = 'Bum'; (DONT DO THIS)
    this.setState({
      persons: [
      {name: 'Doo', age: 28},
      {name: 'Bruh', age: 88},
      {name: 'Cita', age: 1}
    ]
  })
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, blah blah</h1>
        <p>This works</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler}>My Hobbies: Racing</Person>

        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
