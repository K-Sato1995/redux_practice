// / Initial State(Storeの初期状態)
const initialState = {
  taskList: [], // 全てのタスク
  task: {
    title: "",
    description: "",
    completed: false
  } // 1つ1つのタスクの値
};

// Reducerの定義
// ReducerはStoreの操作マニュアル。Storeがどのようにstateを変更するのかを定義したもの。
// 第一引数に現在の状態を表すstate,第二引数にどんな操作をするのかを表すactionを渡し、次の`state`の状態を返す純粋な関数。
export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        taskList: state.taskList.concat([action.payload.task])
        // stateのtasksにactionのtaskを加えた新たな配列を返す。
      };
    case "INPUT_CHANGE":
      return {
        ...state,
        task: {
          ...state.task,
          [action.target]: action.val
        }
        // stateのtaskにaction.payload.taskを与えて返す。
      };
    default:
      return state;
  }
}
