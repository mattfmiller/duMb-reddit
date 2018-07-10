import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Upvote(props){

  function handleUpvoteClick () {
    const { dispatch } = props;
    const action = {
      type: 'UPVOTE',
      userName: props.userName,
      content: props.content,
      voteValue: props.voteValue,
      timeOpen: props.timeOpen,
      id: props.postId
    };
    dispatch(action);
  }


  return(
    <div>
      <button onClick={handleUpvoteClick}>Upvote</button>
    </div>
  );
}

Upvote.propTypes = {
};

export default connect()(Upvote);
