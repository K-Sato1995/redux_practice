import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <li key={this.props.key}>
        {this.props.task.title}
        <button>{ this.props.task.completed ? 'Done' : 'WIP'}</button>
      </li>
    )
  }
}

export default Todo;
