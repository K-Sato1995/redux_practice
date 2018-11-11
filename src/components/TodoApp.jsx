// Componentss dir はPresentational componentsを収納する為に使用される、
import React from 'react';
// Containerから整形されたオブジェクトがPropsとして渡ってくる。
class TodoApp extends React.Component {
  render() {
    const list =
      this.props.tasks.map = (task) => {
        <li>
          { task }
        </li>
      }

    return (
      <div>
        {/* containerから渡されたものをthis.propsで取得可能*/}
        <input type = 'text' onChange={(e) => this.props.inputTask(e.target.value)} />
        <input value = 'Add' type = 'button' onClick={() => this.props.addTask(this.props.task)} />
        <ul>
          { list }
        </ul>
      </div>
    )
  }
}

export default TodoApp;
