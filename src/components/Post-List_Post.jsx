import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return(
    <div>
      <hr/>
      <p>User: {props.userName}</p>
      <h3>{props.content}</h3>
      {/* <p>{props.timeOpen}</p> */}
      <p>Upvotes: {props.voteValue}</p>
    </div>
  );
}

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  // timeOpen: PropTypes.string,
  voteValue: PropTypes.number.isRequired,
  postId: PropTypes.string.isRequired,
};

export default Post;
