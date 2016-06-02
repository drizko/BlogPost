import axios from 'axios';

const rootURL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=drizko';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

export function fetchPosts(){
  const request = axios.get(`${rootURL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(props){
  const request = axios.post(`${rootURL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  }
}
