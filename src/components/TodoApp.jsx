// Componentss dir はPresentational componentsを収納する為に使用される、
import React from 'react';
// Containerから整形されたオブジェクトがPropsとして渡ってくる。
class TodoApp extends React.Component {
  render() {
    return (
      <div>
        {/* containerから渡されたものをthis.propsで取得可能 */}
        <input type="text" onChange={e => this.props.inputTask(e.target.value)} />
        <button onClick={e => this.props.addTask(this.props.task)}>Click</button>
        <ul>
          {
            this.props.tasks.map((item, i) => (
              <li key={i}>{item}</li>
            ))
          }
          <h2>{ this.props.check ? 'ON' : 'OFF'}</h2>
          <button onClick={e => this.props.checkTask()}>Switch</button>
        </ul>
      </div>
    );
  }
}

export default TodoApp;
