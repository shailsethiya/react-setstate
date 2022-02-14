import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      students: [{
        id: 123,
        name: 'Ram',
        marks: 90
      }, {
        id: 445,
        name: 'John',
        marks: 75
      }]
    }
  }


handleSubmit(){
    this.setState(prevState => ({  
    students: prevState.students.map(
    obj => (obj.id === 445 ? Object.assign(obj, { marks: 45 }) : obj)
  )}))
}; 

  render() {
    const students= this.state.students;
    return (
      <div className="App">
        {JSON.stringify(students)}
        <button type="submit" onClick={(bind) => this.handleSubmit(bind)}>set student</button>
      </div>
    );
  }
}

export default App;
