import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Error404 from './Error404';
import PostList from './Post-List';
import PostForm from './Post-Form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: {}
    };
  }

  render(){
    return (
      <div>
        <h1>duMb Reddit</h1>
        <Switch>
          <Route exact path='/' component={PostList} />
          <Route exact path='/' render={()=><PostList postList={this.props.masterPostList} />} />
          <Route path='/newpost' render={()=><PostForm/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state
  };
};

export default withRouter(connect(mapStateToProps)(App));
