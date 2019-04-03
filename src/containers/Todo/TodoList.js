// Containers dir はContainer componentsを収納する為に使用される、
import { connect } from "react-redux";
import TodoList from "../../components/Todo/TodoList";
import { addTask, inputChange } from "../../actions/tasks";

// Storeから必要なStateを取り出し、ComponentのPropsに割り当てる為の関数。
// connect()の第1引数
function mapStateToProps(state) {
  // Storeにあるtask, tasksというStateをPropsに渡す。
  return {
    tasks: state.tasks
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
    inputChange(target, val) {
      dispatch(inputChange(target, val));
    }
  };
}

// 特定のComponentに対してReactのcontextで保持しているStoreを提供する役割を担っている。
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
