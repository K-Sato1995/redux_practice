// ActionCreators == actionを作り出す関数

// 1 タスクとして追加したいtaskを引数に取り、actionオブジェクトを返すだけの単純な関数。
export const addTask = task => ({
  type: 'ADD_TASK', // 必ず使用される`action`を示す`type`プロパティをもつ。
  payload: { // actionに伴うデータとして使用される。
    task,
  },
});

// 2inputされたタスクの値を認知する関数
export const inputTask = task => ({
  type: 'INPUT_TASK',
  payload: {
    task,
  },
});

export const checkTask = id => ({
  type: 'CHECK_TASK',
  payload: {
    id,
  },
});
