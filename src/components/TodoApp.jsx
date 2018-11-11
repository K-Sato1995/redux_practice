// Componentss dir はPresentational componentsを収納する為に使用される、
import React from 'react';

// Containerから整形されたオブジェクトがPropsとして渡ってくる。
class TodoApp extends React.component {
  render() {
    const list = (
      this.props.tasks.map = ((task, i) => {
        <li key = {i}>
          { task }
        </li>
      })
    )
    return (
      <div>
        {/* containerから渡されたものをthis.propsで取得可能*/}
        <input type = 'text' onChange={(e) => this.props.inputTask(e.target.value)} />
        <input type = 'button' onClick={() => this.props.addTask(task)} />
        <ul>
          { list }
        </ul>
      </div>
    )
  }
}

export default TodoApp;
