import { combineReducers } from 'redux';
import {
  FETCH_HOTELS_REQUEST, FETCH_HOTELS_SUCCESS, FETCH_HOTELS_FAILURE,
  FETCH_HOTEL_DETAIL_REQUEST, FETCH_HOTEL_DETAIL_SUCCESS,
  FETCH_BLOGS_REQUEST, FETCH_BLOGS_SUCCESS,
  ADD_FAVORITE, REMOVE_FAVORITE, LOAD_FAVORITES,
} from '../types';

const hotelReducer = (s = { hotels: [], loading: false, error: null, detail: null }, a) => {
  switch (a.type) {
    case FETCH_HOTELS_REQUEST: return { ...s, loading: true, error: null };
    case FETCH_HOTELS_SUCCESS: return { ...s, loading: false, hotels: a.payload };
    case FETCH_HOTELS_FAILURE: return { ...s, loading: false, error: a.payload };
    case FETCH_HOTEL_DETAIL_REQUEST: return { ...s, loading: true };
    case FETCH_HOTEL_DETAIL_SUCCESS: return { ...s, loading: false, detail: a.payload };
    default: return s;
  }
};

const blogReducer = (s = { blogs: [], loading: false }, a) => {
  switch (a.type) {
    case FETCH_BLOGS_REQUEST: return { ...s, loading: true };
    case FETCH_BLOGS_SUCCESS: return { ...s, loading: false, blogs: a.payload };
    default: return s;
  }
};

const favoriteReducer = (s = { items: [] }, a) => {
  switch (a.type) {
    case LOAD_FAVORITES: return { ...s, items: a.payload };
    case ADD_FAVORITE: return { ...s, items: [...s.items, a.payload] };
    case REMOVE_FAVORITE: return { ...s, items: s.items.filter((h) => h.id !== a.payload) };
    default: return s;
  }
};

export default combineReducers({
  hotels: hotelReducer,
  blogs: blogReducer,
  favorites: favoriteReducer,
});