import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
// import { bindActionCreators } from 'redux';

class PostsIndex extends Component {
  componentWillMount(){
    this.props.fetchPosts()
  }

  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add Post
          </Link>
        </div>
        Hi! this is from PostsIndex Component
      </div>
    )
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

// export default connect(null, mapDispatchToProps)(PostsIndex);

export default connect(null, {fetchPosts})(PostsIndex);
