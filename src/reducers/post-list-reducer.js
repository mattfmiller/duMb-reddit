export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_POST':
    const { userName, content, voteValue, timeOpen, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        userName: userName,
        content: content,
        voteValue: voteValue,
        timeOpen: timeOpen,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
