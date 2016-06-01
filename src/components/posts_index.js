import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
// import { bindActionCreators } from 'redux';

class PostsIndex extends Component {
  componentWillMount(){
    this.props.fetchPosts()
  }

  render(){
    return(
      <div>Hi! this is from PostsIndex Component</div>
    )
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

// export default connect(null, mapDispatchToProps)(PostsIndex);

export default connect(null, {fetchPosts})(PostsIndex);
