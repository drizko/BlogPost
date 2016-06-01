import axios from 'axois';

export const FETCH_POST = 'FETCH_POST';
const rootURL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=drizko';

export function fetchPost(){
  const request = axois.get(`${rootURL}/posts${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}
