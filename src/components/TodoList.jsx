// Componentss dir はPresentational componentsを収納する為に使用される、
import React from "react";
import Todo from "./Todo";
// Containerから整形されたオブジェクトがPropsとして渡ってくる。
class TodoApp extends React.Component {
  render() {
    const tasks = this.props.tasks.map((item, i) => (
      <Todo task={item} key={i} />
    ));
    return (
      <div>
        {console.log(this.props.tasks)}
        {console.log(this.props.task)}
        {/* containerから渡されたものをthis.propsで取得可能 */}
        <input
          type="text"
          placeholder="title"
          value={this.props.task.title}
          onChange={e => this.props.inputChange("title", e.target.value)}
        />
        <textarea
          type="text"
          placeholder="description"
          value={this.props.task.description}
          onChange={e => this.props.inputChange("description", e.target.value)}
        />
        <button onClick={e => this.props.addTask(this.props.task)}>
          Click
        </button>
        <ul>{tasks}</ul>
      </div>
    );
  }
}

export default TodoApp;
