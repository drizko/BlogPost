import React, { Component } from 'react';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount(){
    fetchPosts();
    console.log("Something is happening here!");
  }

  render(){
    return(
      <div>Hi! this is from PostsIndex Component</div>
    )
  }
}

export default PostsIndex;
