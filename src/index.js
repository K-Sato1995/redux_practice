import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import tasksReducer from './reducers/tasks';
import TodoApp from './components/TodoApp';

const store = createStore(tasksReducer);

ReactDOM.render(<TodoApp store = { store }/>, document.getElementById('root'));
