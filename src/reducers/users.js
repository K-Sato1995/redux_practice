// / Initial State(Storeの初期状態)
const initialState = {
  userList: [],
  user: {
    name: ""
  }
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        userList: state.userList.concat([action.payload.user])
        // stateのtasksにactionのtaskを加えた新たな配列を返す。
      };
    case "INPUT_CHANGE":
      return {
        ...state,
        user: {
          ...state.user,
          [action.target]: action.val
        }
      };
    default:
      return state;
  }
}
