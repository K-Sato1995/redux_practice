import React from 'react';

class TodoApp extends React.Component {
  render(){
    const lists = this.props.tasks.map( (item, i) => {
      <li key = {i}>{item}</li>
    });
  return(
    <div>
      <input type = 'text' onChange = { (e) =>  this.props.inputTask(e.target.value) }/>
      <button onClick = { (e) => this.props.addTask(this.props.task) }>Click</button>
      <ul>
        { lists }
      </ul>
    </div>
  )
 }
}

export default TodoApp;
