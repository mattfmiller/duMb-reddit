import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';



function PostForm(props){
  let _userName = null;
  let _content = null;


  function handleNewPostSubmission(event){
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'ADD_POST',
      userName: _userName.value,
      content: _content.value,
      timeOpen: new Moment(),
      voteValue: 0,
      id: v4()
    };
    dispatch(action);
    _userName.value = '';
    _content.value = '';
  }

  return(
    <div>
      <form onSubmit= {handleNewPostSubmission}>
        <input
          type = 'text'
          id = 'userName'
          placeholder = 'User Name'
          ref={(input) => {_userName = input;}}/>
        <input
          type = 'text'
          id = 'content'
          placeholder = 'Whatcha thinking?'
          ref={(input) => {_content = input;}}/>
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}


export default connect()(PostForm);
