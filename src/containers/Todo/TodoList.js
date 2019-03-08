// Containers dir はContainer componentsを収納する為に使用される、
import { connect } from "react-redux";
import TodoList from "../../components/TodoList";
import { addTask, inputTask } from "../../actions/tasks";

// Storeから必要なStateを取り出し、ComponentのPropsに割り当てる為の関数。
// connect()の第1引数
function mapStateToProps({ task, tasks }) {
  return {
    // Storeにあるtask, tasksというStateをPropsに渡す。
    task,
    tasks
  };
}

// Actionのdispatchを行う処理をこの関数内に閉じることで、Componentからdispatchの概念を隠蔽する。
// connect()の第2引数
function mapDispatchToProps(dispatch) {
  return {
    // 該当のActionをDispatchさせる関数をPropsに渡す。
    addTask(task) {
      dispatch(addTask(task));
    },
    inputTask(task) {
      dispatch(inputTask(task));
    }
  };
}

// 特定のComponentに対してReactのcontextで保持しているStoreを提供する役割を担っている。
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
