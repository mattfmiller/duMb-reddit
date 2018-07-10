export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_POST':
    const { userName, content, value, timeOpen, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        userName: userName,
        content: content,
        value: value,
        timeOpen: timeOpen,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
