import axios from 'axios';
import { FETCH_BLOGS_REQUEST, FETCH_BLOGS_SUCCESS } from '../types';

export const fetchBlogs = () => async (dispatch) => {
  dispatch({ type: FETCH_BLOGS_REQUEST });
  try {
    const url =
      'https://www.googleapis.com/blogger/v3/blogs/' +
      import.meta.env.VITE_BLOG_ID +
      '/posts';
    const res = await axios.get(url, {
      params: { key: import.meta.env.VITE_BLOGGER_API_KEY, maxResults: 20 },
    });
    dispatch({ type: FETCH_BLOGS_SUCCESS, payload: res.data.items || [] });
  } catch (e) {
    console.error(e);
  }
};