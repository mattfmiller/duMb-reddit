import React from 'react';
import Post from './Post-List_Post';
import PropTypes from 'prop-types';

function PostList(props){
  return (
    <div>
      {Object.keys(props.postList).map(function(postId) {
        let post = props.postList[postId];
        console.log(post);
        return <Post userName={post.userName}
          content={post.content}
          voteValue={post.voteValue}
          // timeOpen={post.timeOpen.d}
          key={postId}
          postId={postId}/>;
      })}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.object
};

export default PostList;
