/// STATE
const innitialState = {
  tasks: []
}

/// REDUCER
export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
    return  {
      ...state,
      tasks: state.tasks.concat([action.task])
    };
    default:
    return state;
  }
}
