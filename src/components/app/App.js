import React, { Component } from "react";
import TodoList from "../todo-list/TodoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <TodoList title="jumpstart todo list" />
        <TodoList title="home todo list" />
      </div>
    );
  }
}

export default App;
