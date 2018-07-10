import React from 'react';
import PropTypes from 'prop-types';
import Upvote from './Post-List_Post_Upvote';

function Post(props){
  return(
    <div>
      <hr/>
      <p>User: {props.userName}</p>
      <h3>{props.content}</h3>
      {/* <p>{props.timeOpen}</p> */}
      <p>Upvotes: {props.voteValue}</p>
      <Upvote userName={props.userName}
        content={props.content}
        voteValue={props.voteValue}
        // timeOpen={post.timeOpen.d}
        key={props.key}
        postId={props.postId} />
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
