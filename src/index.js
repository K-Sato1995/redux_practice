import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';

const store = createStore(tasksReducer);

ReactDOM.render(
  <Provider store = {store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
