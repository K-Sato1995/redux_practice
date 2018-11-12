// Componentss dir はPresentational componentsを収納する為に使用される、
import React from 'react';
// Containerから整形されたオブジェクトがPropsとして渡ってくる。
class TodoApp extends React.Component {
  render() {
    return (
      <div>
        {/* containerから渡されたものをthis.propsで取得可能*/}
        <input type = 'text' onChange = { (e) =>  this.props.inputTask(e.target.value) }/>
        <button onClick = { (e) => this.props.addTask(this.props.task) }>Click</button>
        <ul>
          {
            this.props.tasks.map(function(item, i) {
              return (
                <li key = {i}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoApp;
