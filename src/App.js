import React, { Component } from 'react';
import './App.css';
import MyRef from './MyRef'
import ClassMate from './ClassMate'
import Todo from './Todo'

class App extends Component {
 constructor(props) {
   super(props)
 
   this.refComp = React.createRef();
 }
 
  render() {
    return(<div className="container">
      <Todo/>
      </div>

    )
  }
}

export default App;