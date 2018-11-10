import { createStore } from 'redux';
import tasksReducer from './reducers/tasks';
// ReducerとcreateStoreを用いてstoreの作成
const store = createStore(tasksReducer);

// 1つのReduxアプリに関して1つのstoreだけが存在する。
// 様々なデータを扱う際にはreducerを細分化する事で対応する。
