import React, { Component } from 'react';
import './App.css';
import {ToDoList} from "./containers/ToDoList/index";


class App extends Component {
  render() {
    return (
      <div>
        <ToDoList />
      </div>
    );
  }
}

export default App;
