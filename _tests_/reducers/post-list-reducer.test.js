import postListReducer from './../../src/reducers/post-list-reducer';

describe('postListReducer', () => {
  let action;
 const samplePost = {
   userName : 'Ryan',
   content : '4b',
   voteValue : 0,
   timeOpen : 1500000000000,
   id: 0
 };

  test('postListReducer returns empty object', () => {
    expect(postListReducer({}, {type: null})).toEqual({});
  });

  test('Should add new post to masterPostList', () => {
    const { userName, content, voteValue, timeOpen, id } = samplePost;
    action = {
      type: 'ADD_POST',
      userName: userName,
      content: content,
      voteValue: voteValue,
      timeOpen: timeOpen,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        userName: userName,
        content: content,
        voteValue: voteValue,
        timeOpen: timeOpen,
        id: id
      }
    });
  });
  test('Should increment voteValue by 1', () => {
    const { userName, content, voteValue, timeOpen, id } = samplePost;
    action = {
      type: 'UPVOTE',
      userName: userName,
      content: content,
      voteValue: voteValue,
      timeOpen: timeOpen,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      0: {
        userName : 'Ryan',
        content : '4b',
        voteValue : 1,
        timeOpen : 1500000000000,
        id: 0
      }
    });
  });
});
