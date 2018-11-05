//ACTIONS
export inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
})

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});
