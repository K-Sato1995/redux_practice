import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';

// ReducerとcreateStoreを用いてstoreの作成
const store = createStore(tasksReducer);

// 1つのReduxアプリに関して1つのstoreだけが存在する。
// 様々なデータを扱う際にはreducerを細分化する事で対応する。

// storeは以下のメソッドを持つ。

// dispatch: アクションを発行（実行）。
// subscribe: stateの状態が変化した際のコールバック関数の設定。
// getState: 現在のstateの状態を取得。

/////////// PROVIDER ////////////////////////////
// dispatchはstoreに生えているメソッドのためコンポーネントからActionをdispatchするにはが必要です。
// しかしdispatchしたいコンポーネント全てに対しStoreを最上位からバケツリレーするのは得策ではない。
// <Provider>を用いることでconnect()という関数を使用可能になり、任意のコンポーネントに対してとStoreの紐付けを行うことができる。
render (
  // 最上位のコンポーネントを<Provider>でラップしpropsにstateを与える。
  <Provider store = {store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
