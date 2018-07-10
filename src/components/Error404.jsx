import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import error from '../assets/images/error.jpg';

function Error404(props){
  return (
    <div className='error404'>
      <img src={error}/>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
      <style jsx>{`
          .error404 {
            text-align: center;
          }
          .error404 img {
            display: block;
            margin: auto;
          }
        `}
      </style>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
