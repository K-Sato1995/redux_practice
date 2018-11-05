import React from 'react';
import { inputTask, addTask } from '../actions/tasks';

export default function todoApp({ store }) {
  const { task, tasks } = store.getState();
  return(
    <div>
      <input onChange = { (e) => store.dispatch(inputTask(e.target.value)) }/>
      <button onClick = { (e) => store.dipatch(addTask(task)) }>Click</button>
      <ul>
        {
          tasks.map(function(item, i) {
            return (
              <li key = {i}>{ item }</li>
            )
          })
        }
      </ul>
    </div>
  )
}
