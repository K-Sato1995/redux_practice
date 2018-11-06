import React from 'react';

export default function TodoApp({ task, tasks, inputTask, addTask }) {
  return(
    <div>
      <input onChange = { (e) =>  inputTask(e.target.value) }/>
      <button onClick = { (e) => addTask(task) }>Click</button>
      {/* <ul>
        {
          tasks.map(function(item, i) {
            return (
              <li key = {i}>{ item }</li>
            )
          })
        }
      </ul> */}
    </div>
  )
}
