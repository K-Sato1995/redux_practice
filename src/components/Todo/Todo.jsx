import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <li key={this.props.key}>
        {console.log(this.props)}
        <h3>{this.props.task.title}</h3>
        {this.props.task.description}
        <button>{this.props.task.completed ? "Done" : "WIP"}</button>
      </li>
    );
  }
}

export default Todo;
