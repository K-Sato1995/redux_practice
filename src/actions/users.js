export const addUser = user => ({
  type: "ADD_USER",
  payload: {
    user
  }
});

export const inputChange = (target, val) => ({
  type: "INPUT_CHANGE",
  target: target,
  val: val
});
