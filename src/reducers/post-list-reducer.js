export default (state = {}, action) => {
  let newState;
  const { userName, content, voteValue, timeOpen, id } = action;
  switch (action.type) {
  case 'ADD_POST':
    newState = Object.assign({}, state, {
      [id]: {
        userName: userName,
        content: content,
        voteValue: voteValue,
        timeOpen: timeOpen,
        id: id
      }
    });
    return newState;

  case 'UPVOTE': {
    let newVoteValue = action.voteValue + 1;
    newState = Object.assign({}, state, {
      [action.id] : {
        userName: userName,
        content: content,
        voteValue: newVoteValue,
        timeOpen: timeOpen,
        id: id
      }
    });
    console.log(id);
    console.log(newState);
    return newState;
  }
  default:
    return state;
  }
};
