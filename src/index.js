import { createStore } from 'redux';
import tasksReducer from './reducers/tasks';
import addTask from './actions/tasks';

// ReducerとcreateStoreを用いてstoreの作成
const store = createStore(tasksReducer);

// 1つのReduxアプリに関して1つのstoreだけが存在する。
// 様々なデータを扱う際にはreducerを細分化する事で対応する。

// storeは以下の４つのメソッドを持つ。

// dispatch: アクションを発行（実行）。
// subscribe: stateの状態が変化した際のコールバック関数の設定。
// getState: 現在のstateの状態を取得。

console.log(store.getState()); //=> {tasks: []} initialState
store.dispatch(addTask('New Task'))
