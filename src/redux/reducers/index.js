import { combineReducers } from 'redux';
import { ADD_FAVORITE, REMOVE_FAVORITE, LOAD_FAVORITES, SET_CURRENCY } from '../actions';
import { FETCH_BLOGS_SUCCESS, FETCH_HOTELS_SUCCESS } from '../actions/apiActions';

const favoriteReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case LOAD_FAVORITES: return { ...state, items: action.payload };
    case ADD_FAVORITE: return { ...state, items: [...state.items, action.payload] };
    case REMOVE_FAVORITE: return { ...state, items: state.items.filter(id => id !== action.payload) };
    default: return state;
  }
};

const currencyReducer = (state = 'EUR', action) => {
  switch (action.type) {
    case SET_CURRENCY: return action.payload;
    default: return state;
  }
};

const blogReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case FETCH_BLOGS_SUCCESS: return { ...state, items: action.payload };
        default: return state;
    }
};

const hotelReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case FETCH_HOTELS_SUCCESS: return { ...state, items: action.payload };
        default: return state;
    }
};

export default combineReducers({ 
    favorites: favoriteReducer, 
    currency: currencyReducer,
    blogs: blogReducer,
    hotels: hotelReducer
});