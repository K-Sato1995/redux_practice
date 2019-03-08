import React, { Component } from "react";
// ここのTodoListはcontainers/Todo/TodoListである事に注目！！！
import TodoList from "./Todo/TodoList";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Practice</h1>
        <TodoList />
      </div>
    );
  }
}
