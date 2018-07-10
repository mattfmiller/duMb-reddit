import postListReducer from './../../src/reducers/post-list-reducer';

describe('postListReducer', () => {
  let action;
 const samplePost = {
   userName : 'Ryan',
   content : '4b',
   value : 0,
   timeOpen : 1500000000000,
   id: 0
 };

  test('postListReducer returns empty object', () => {
    expect(postListReducer({}, {type: null})).toEqual({});
  });

  test('Should add new post to masterPostList', () => {
    const { userName, content, value, timeOpen, id } = samplePost;
    action = {
      type: 'ADD_POST',
      userName: userName,
      content: content,
      value: value,
      timeOpen: timeOpen,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        userName: userName,
        content: content,
        value: value,
        timeOpen: timeOpen,
        id: id
      }
    });
  });
});
