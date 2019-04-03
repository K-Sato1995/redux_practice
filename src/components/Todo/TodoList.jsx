// Componentss dir はPresentational componentsを収納する為に使用される、
import React from "react";
import Todo from "./Todo";
// Containerから整形されたオブジェクトがPropsとして渡ってくる。
class TodoApp extends React.Component {
  render() {
    const tasks = this.props.tasks.taskList.map((item, i) => (
      <Todo task={item} key={i} />
    ));
    return (
      <div>
        {/* containerから渡されたものをthis.propsで取得可能 */}
        {console.log(this.props.tasks.task)}
        {console.log(this.props.tasks.taskList)}
        <input
          type="text"
          placeholder="title"
          value={this.props.tasks.task.title}
          onChange={e => this.props.inputChange("title", e.target.value)}
        />
        <textarea
          type="text"
          placeholder="description"
          value={this.props.tasks.task.description}
          onChange={e => this.props.inputChange("description", e.target.value)}
        />
        <button onClick={e => this.props.addTask(this.props.tasks.task)}>
          Click
        </button>
        <ul>{tasks}</ul>
      </div>
    );
  }
}

export default TodoApp;
