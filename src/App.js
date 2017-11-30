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

    return (
      <div className="App">
        <h1>Hi, blah blah</h1>
        <p>This works</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        
        {this.state.showPersons === true ? 
          <div>
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
          </div> : null
      }

      </div>
    );
  }
}

export default App;
